import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  PanInfo,
  useMotionValue,
} from "framer-motion";
import { X, Play, ChevronUp, ChevronDown } from "lucide-react";

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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

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
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            initial={{ y: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{
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
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
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
            </div> */}
            <div className="h-full absolute right-2/10 md:flex hidden justify-center items-center flex-col gap-0">
              <button
                onClick={goToPrev}
                className="flex -translate-y-1/2  w-12 h-12 items-center justify-center  backdrop-blur-sm hover:bg-white/70 cursor-pointer rounded-full transition-colors"
              >
                <ChevronUp className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={goToNext}
                className="flex  -translate-y-1/2  w-12 h-12 items-center justify-center  backdrop-blur-sm hover:bg-white/70 rounded-full cursor-pointer transition-colors"
              >
                <ChevronDown className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Counter Badge */}
            <div className="absolute bottom-24 right-4 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-white text-xs font-bold">
                {currentIndex + 1}/{videos.length}
              </span>
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
          Tap video to play/pause
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReelsPlayer;
