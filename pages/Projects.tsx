import React, { useState } from "react";
import { PROJECTS } from "../constants";
import { ProjectCategory } from "../types";
import { Filter, ArrowUpRight } from "lucide-react";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filteredProjects =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const categories: (ProjectCategory | "All")[] = [
    "All",
    "Video Editing",
    "Motion Graphics",
    "Creative Direction",
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl font-bold font-display mb-8 tracking-tighter">
            The Vault
          </h1>
          <div className="md:flex flex-wrap hidden  gap-4 items-center">
            <div className="flex items-center gap-2 text-zinc-500 mr-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-widest">
                Filter:
              </span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-emerald-500 text-zinc-950 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold font-display">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                </div>
                <p className="text-zinc-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-800">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
