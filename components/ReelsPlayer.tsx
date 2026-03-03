import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoProject {
  id: number;
  title: string;
  videoUrl: string;
  poster: string;
  tags: string[];
}

interface ReelsPlayerProps {
  videos: VideoProject[];
  initialIndex: number;
  onClose: () => void;
}

const ReelsPlayer: React.FC<ReelsPlayerProps> = ({
  videos,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload adjacent videos
  useEffect(() => {
    const preloadIndexes = [currentIndex - 1, currentIndex, currentIndex + 1];
    preloadIndexes.forEach((idx) => {
      if (idx >= 0 && idx < videos.length && videoRefs.current[idx]) {
        videoRefs.current[idx]!.load();
      }
    });
  }, [currentIndex, videos.length]);

  // Play current video, pause others, and handle auto-advance
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === currentIndex) {
          video.play().catch(() => {
            // Auto-play might be blocked, user needs to interact
          });

          // Auto-advance to next video when current one ends
          const handleEnded = () => {
            goToNext();
          };
          video.addEventListener("ended", handleEnded);

          return () => {
            video.removeEventListener("ended", handleEnded);
          };
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentIndex]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Keyboard navigation for desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const goToNext = () => {
    setDirection(1);
    setIsPaused(false);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setIsPaused(false);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 50;
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset < 0) {
        // Swiped up - go to next
        goToNext();
      } else if (offset > 0) {
        // Swiped down - go to previous
        goToPrev();
      }
    }
  };

  const handleVideoClick = (video: HTMLVideoElement) => {
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-full"
      >
        <X className="w-5 h-5 text-white" />
      </button>

      {/* Desktop Navigation Buttons */}

      {/* Video Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            className="absolute inset-0 flex items-center justify-center"
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={isMobile ? handleDragEnd : undefined}
            initial={
              isMobile
                ? { y: direction > 0 ? "100%" : "-100%", opacity: 0 }
                : { x: direction > 0 ? "100%" : "-100%", opacity: 0 }
            }
            animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
            exit={
              isMobile
                ? { y: direction > 0 ? "-100%" : "100%", opacity: 0 }
                : { x: direction > 0 ? "-100%" : "100%", opacity: 0 }
            }
            transition={{
              x: { type: "spring", stiffness: 300, damping: 35 },
              y: { type: "spring", stiffness: 300, damping: 35 },
              opacity: { duration: 0.2 },
            }}
          >
            <video
              ref={(el) => {
                videoRefs.current[currentIndex] = el;
              }}
              src={videos[currentIndex].videoUrl}
              poster={videos[currentIndex].poster}
              className="w-full h-full object-contain bg-black"
              loop
              playsInline
              preload="auto"
              onClick={(e) => handleVideoClick(e.currentTarget)}
            />

            {/* Play Button Overlay (when paused) */}
            <AnimatePresence>
              {isPaused && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-2 border-white/30">
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Video Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-white text-lg font-bold mb-2">
                {videos[currentIndex].title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {videos[currentIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full absolute px-8 top-1/2 justify-between md:flex hidden  items-center">
              <button
                onClick={goToPrev}
                className="flex -translate-y-1/2 w-12 h-12 items-center justify-center bg-black/50 backdrop-blur-sm hover:bg-black/70 cursor-pointer rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="flex -translate-y-1/2 w-12 h-12 items-center justify-center bg-black/50 backdrop-blur-sm hover:bg-black/70 rounded-full cursor-pointer transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
            {/* <div className="h-full absolute right-6 top-1/2 md:flex hidden justify-center items-center"></div> */}

            {/* Circular Progress Counter */}
            <div className="absolute top-6 left-6 z-50">
              <div className="relative w-16 h-16">
                {/* Background circle */}
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="4"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="var(--color-primary)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - (currentIndex + 1) / videos.length)}`}
                    strokeLinecap="round"
                    className="transition-all duration-300"
                  />
                </svg>
                {/* Counter text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">
                    {currentIndex + 1}/{videos.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tap to play/pause hint */}
      <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none">
        <motion.div
          className="text-white/50 text-xs"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          {isMobile
            ? "Tap video to play/pause"
            : "Click video to play/pause • Use arrow keys to navigate"}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReelsPlayer;
