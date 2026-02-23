import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import ImageLightbox from "../components/ImageLightbox";
import ReelsPlayer from "../components/ReelsPlayer";
import { categoryConfig, getColorClasses } from "@/utils/project-utils";

const ProjectCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [reelsOpen, setReelsOpen] = useState(false);
  const [reelsIndex, setReelsIndex] = useState(0);

  const currentCategory = category
    ? categoryConfig[category as keyof typeof categoryConfig]
    : null;

  if (!currentCategory) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Category Not Found
          </h1>
          <Link to="/projects" className="text-emerald-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Icon = currentCategory.icon;
  const isVideo = category !== "graphics";

  const colors = getColorClasses(currentCategory);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link to="/projects">
          <motion.button
            className={`flex items-center gap-2 text-zinc-400 ${colors.hover} transition-colors mb-8`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Projects</span>
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex gap-4 flex-col md:flex-row md:items-center mb-6">
            <div
              className={`flex items-center justify-center w-16 h-16 ${colors.bg} rounded-2xl`}
            >
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white">
              {currentCategory.title}
            </h1>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl">
            {currentCategory.description}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 ${isVideo ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"} gap-8`}
        >
          {currentCategory.projects.map((project: any, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {isVideo ? (
                <>
                  {/* Desktop: Show full video player */}
                  <div className="hidden md:block">
                    <VideoPlayer
                      src={project.videoUrl}
                      poster={project.poster}
                      title={project.title}
                      controls={true}
                    />
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-md text-xs font-bold`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Show thumbnail with play button */}
                  <div
                    className="md:hidden group cursor-pointer"
                    onClick={() => {
                      setReelsIndex(idx);
                      setReelsOpen(true);
                    }}
                  >
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900">
                      <img
                        src={project.poster}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-20 h-20 flex items-center justify-center bg-white/90 rounded-full">
                          <Play className={`w-10 h-10 ${colors.text} fill-current ml-1`} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-md text-xs font-bold`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`px-2 py-1 ${colors.bg} ${colors.text} rounded-md text-xs font-bold`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image Lightbox */}
        <AnimatePresence>
          {lightboxOpen && !isVideo && (
            <ImageLightbox
              images={
                currentCategory.projects as Array<{
                  id: number;
                  image: string;
                  title: string;
                  tags: string[];
                }>
              }
              initialIndex={lightboxIndex}
              onClose={() => setLightboxOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Video Modal */}
        <AnimatePresence>
          {reelsOpen && isVideo && (
            <ReelsPlayer
              videos={
                currentCategory.projects as Array<{
                  id: number;
                  title: string;
                  videoUrl: string;
                  poster: string;
                  tags: string[];
                }>
              }
              initialIndex={reelsIndex}
              onClose={() => setReelsOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCategory;
