import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, Film, Sparkles, ArrowRight } from "lucide-react";

const Projects: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics",
      icon: Palette,
      description:
        "Visual identity, brand design, and stunning graphics for social media and marketing campaigns.",
      color: "emerald",
      projects: [
        "DxSale Visual Identity",
        "Cutoshi Brand Visuals",
        "Social Media Graphics",
      ],
      stats: { count: "15+", label: "Projects" },
      link: "/projects/graphics",
    },
    {
      id: 2,
      title: "Content & Video Edits",
      icon: Film,
      description:
        "Professional video editing, content curation, and high-retention video production for various platforms.",
      color: "blue",
      projects: ["YouTube Content", "Educational Series", "Promotional Videos"],
      stats: { count: "30+", label: "Videos" },
      link: "/projects/video-edits",
    },
    {
      id: 3,
      title: "Video Animations",
      icon: Sparkles,
      description:
        "High-end 2D & 3D animations, motion graphics, and cinematic teasers for product launches.",
      color: "purple",
      projects: ["Launch Teasers", "3D Animations", "Motion Graphics"],
      stats: { count: "20+", label: "Animations" },
      link: "/projects/video-animations",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return {
          bg: "bg-[#CC9933]/10",
          border: "border-[#CC9933]/20",
          text: "text-[#CC9933]",
          hover: "hover:border-[#CC9933]/50",
          glow: "group-hover:shadow-[#CC9933]/20",
        };
      case "blue":
        return {
          bg: "bg-blue-500/10",
          border: "border-blue-500/20",
          text: "text-blue-500",
          hover: "hover:border-blue-500/50",
          glow: "group-hover:shadow-blue-500/20",
        };
      case "purple":
        return {
          bg: "bg-purple-500/10",
          border: "border-purple-500/20",
          text: "text-purple-500",
          hover: "hover:border-purple-500/50",
          glow: "group-hover:shadow-purple-500/20",
        };
      default:
        return {
          bg: "bg-[#CC9933]/10",
          border: "border-[#CC9933]/20",
          text: "text-[#CC9933]",
          hover: "hover:border-[#CC9933]/50",
          glow: "group-hover:shadow-[#CC9933]/20",
        };
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.header
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-black font-display mb-6 tracking-tighter"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Vault
          </motion.h1>
          <motion.p
            className="text-xl text-zinc-400 max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my portfolio across different creative domains - from
            stunning graphics to engaging video content and captivating
            animations.
          </motion.p>
        </motion.header>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <Link to={category.link} key={category.id}>
                <motion.div
                  className={`group relative bg-zinc-900/50 backdrop-blur-sm border ${colors.border} ${colors.hover} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${colors.glow} cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${colors.bg} rounded-2xl mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-black font-display mb-4 text-white">
                    {category.title}
                  </h2>

                  {/* Description */}
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Projects List */}
                  <div className="space-y-2 mb-6">
                    {category.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm text-zinc-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 + 0.8 + i * 0.1 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${colors.bg}`}
                        />
                        <span>{project}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className={`flex items-center justify-between pt-6 border-t ${colors.border}`}
                  >
                    <div>
                      <div className={`text-3xl font-black ${colors.text}`}>
                        {category.stats.count}
                      </div>
                      <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                        {category.stats.label}
                      </div>
                    </div>
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${colors.bg} rounded-full transition-transform group-hover:scale-110`}
                    >
                      <ArrowRight className={`w-5 h-5 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Hover Glow Effect - Removed gradient */}
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to See More?
            </h3>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Each category contains numerous projects showcasing my expertise.
              Get in touch to view detailed case studies and discuss your next
              project.
            </p>
            <button className="bg-[#CC9933] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#CC9933]/80 transition-colors">
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
