import React, { useState, useEffect } from "react";
import { Plyr } from "plyr-react";
import "plyr-react/plyr.css";
import "./VideoPlayer.css";
import { motion, AnimatePresence } from "framer-motion";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title,
  autoplay = false,
  loop = false,
  muted = false,
  controls = true,
  className = "",
}) => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [isReady, setIsReady] = useState(false);
  const plyrRef = React.useRef<any>(null);
  const videoId = React.useRef(`video-${Math.random().toString(36).substring(2, 11)}`);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Handle play-one-pause-others
  useEffect(() => {
    const handleOtherVideoPlay = (e: Event) => {
      const customEvent = e as CustomEvent;
      // If another video is playing, pause this one
      if (customEvent.detail.id !== videoId.current && plyrRef.current?.plyr) {
        plyrRef.current.plyr.pause();
      }
    };

    // Listen for play events from other videos
    window.addEventListener('video-play', handleOtherVideoPlay);

    // Find the actual video element and listen to its play event
    const timer = setTimeout(() => {
      const videoElement = plyrRef.current?.plyr?.media;
      if (videoElement) {
        const handlePlay = () => {
          window.dispatchEvent(new CustomEvent('video-play', { detail: { id: videoId.current } }));
        };
        
        const handleCanPlay = () => {
          setIsReady(true);
        };
        
        videoElement.addEventListener('play', handlePlay);
        videoElement.addEventListener('canplay', handleCanPlay);
        videoElement.addEventListener('loadeddata', handleCanPlay);
        
        // Store cleanup function
        return () => {
          videoElement.removeEventListener('play', handlePlay);
          videoElement.removeEventListener('canplay', handleCanPlay);
          videoElement.removeEventListener('loadeddata', handleCanPlay);
        };
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('video-play', handleOtherVideoPlay);
    };
  }, []);

  const plyrOptions = {
    controls: controls
      ? [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "settings",
          "fullscreen",
        ]
      : [],
    settings: ["quality", "speed"],
    quality: {
      default: 1080,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    },
    speed: {
      selected: 1,
      options: [0.5, 0.75, 1, 1.25, 1.5, 2],
    },
    autoplay,
    loop: { active: loop },
    muted,
  };

  const videoSrc = {
    type: "video" as const,
    sources: [
      {
        src: src,
        type: "video/mp4",
      },
    ],
    poster: poster,
  };

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-zinc-900 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Loading Spinner */}
      <AnimatePresence>
        {!isReady && (
          <motion.div
            className="absolute inset-0 z-30 bg-zinc-900 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 border-4 border-zinc-700 border-t-emerald-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Offline Spinner */}
      <AnimatePresence>
        {isOffline && (
          <motion.div
            className="absolute inset-0 z-30 bg-zinc-900/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-12 h-12 border-4 border-zinc-700 border-t-emerald-500 rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {title && (
        <motion.div
          className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-sm">{title}</h3>
        </motion.div>
      )}

      <div className={isReady ? "opacity-100" : "opacity-0"}>
        <Plyr ref={plyrRef} source={videoSrc} options={plyrOptions} />
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
