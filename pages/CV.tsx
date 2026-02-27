import React from "react";
import {
  Download,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { EXPERIENCES, SKILLS, LANGUAGES } from "../constants";
import { animationTransition, animationViewPort } from "../utils/animation";

const CV: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationTransition(0.8)}
        >
          <div className="flex-1">
            <motion.h1
              className="text-7xl font-bold font-display tracking-tighter mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...animationTransition(0.8), delay: 0.2 }}
            >
              Kingsley Etim
            </motion.h1>
            <motion.p
              className="text-2xl text-primary font-bold uppercase tracking-[0.2em] mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...animationTransition(0.8), delay: 0.4 }}
            >
              Professional Content Developer
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...animationTransition(0.8), delay: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Mail size={16} className="text-primary" />
                <span>kerllyboi@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <Phone size={16} className="text-primary" />
                <span>+234 812 921 6478</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <MapPin size={16} className="text-primary" />
                <span>Nigeria, Africa</span>
              </motion.div>
            </motion.div>
          </div>
          <motion.a
            href="/CV.pdf"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...animationTransition(0.8), delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-colors">
              <Download className="w-5 h-5" />
              View Resume
            </button>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={animationTransition(0.8)}
              viewport={animationViewPort}
            >
              <motion.div
                className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...animationTransition(0.6), delay: 0.2 }}
                viewport={animationViewPort}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase className="text-primary w-8 h-8" />
                </motion.div>
                <h2 className="text-3xl font-bold font-display tracking-tight uppercase">
                  Work History
                </h2>
              </motion.div>
              <div className="space-y-16">
                {EXPERIENCES.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-10 border-l-2 border-zinc-800"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ...animationTransition(0.6),
                      delay: idx * 0.1,
                    }}
                    viewport={animationViewPort}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        ...animationTransition(0.4),
                        delay: idx * 0.1 + 0.3,
                      }}
                      viewport={animationViewPort}
                      whileHover={{ scale: 1.3 }}
                    />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                      <motion.h3
                        className="text-2xl font-bold font-display"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          ...animationTransition(0.5),
                          delay: idx * 0.1 + 0.2,
                        }}
                        viewport={animationViewPort}
                      >
                        {exp.role}
                      </motion.h3>
                      <motion.span
                        className="text-primary font-black text-[10px] uppercase tracking-[0.2em] glass px-3 py-1 rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          ...animationTransition(0.4),
                          delay: idx * 0.1 + 0.4,
                        }}
                        viewport={animationViewPort}
                        whileHover={{ scale: 1.1 }}
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <motion.h4
                      className="text-white/60 font-bold mb-6 uppercase text-xs tracking-[0.2em]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ...animationTransition(0.5),
                        delay: idx * 0.1 + 0.3,
                      }}
                      viewport={animationViewPort}
                    >
                      {exp.company}
                    </motion.h4>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          className="text-zinc-400 leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            ...animationTransition(0.4),
                            delay: idx * 0.1 + i * 0.1 + 0.5,
                          }}
                          viewport={animationViewPort}
                          whileHover={{ x: 10, color: "#a3a3a3" }}
                        >
                          • {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={animationTransition(0.8)}
              viewport={animationViewPort}
            >
              <motion.div
                className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...animationTransition(0.6), delay: 0.2 }}
                viewport={animationViewPort}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <GraduationCap className="text-primary w-8 h-8" />
                </motion.div>
                <h2 className="text-3xl font-bold font-display tracking-tight uppercase">
                  Academic
                </h2>
              </motion.div>
              <div className="space-y-12">
                {[
                  {
                    title: "University of Uyo",
                    subtitle: "B.Eng in Civil Engineering • 2017 - 2022",
                    description:
                      "Successfully completed the Bachelor's degree with a focus on structural integrity and design.",
                  },
                  {
                    title: "YAPPI",
                    subtitle: "Animator Certification • Oct 2024",
                    description:
                      "Intensive specialization in video editing and 3D animation systems.",
                  },
                ].map((edu, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-10 border-l-2 border-zinc-800"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ...animationTransition(0.6),
                      delay: idx * 0.2,
                    }}
                    viewport={animationViewPort}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        ...animationTransition(0.4),
                        delay: idx * 0.2 + 0.3,
                      }}
                      viewport={animationViewPort}
                      whileHover={{ scale: 1.3 }}
                    />
                    <motion.h3
                      className="text-2xl font-bold font-display"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        ...animationTransition(0.5),
                        delay: idx * 0.2 + 0.2,
                      }}
                      viewport={animationViewPort}
                    >
                      {edu.title}
                    </motion.h3>
                    <motion.p
                      className="text-primary font-bold text-xs uppercase tracking-widest mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        ...animationTransition(0.5),
                        delay: idx * 0.2 + 0.3,
                      }}
                      viewport={animationViewPort}
                    >
                      {edu.subtitle}
                    </motion.p>
                    <motion.p
                      className="text-zinc-400"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        ...animationTransition(0.5),
                        delay: idx * 0.2 + 0.4,
                      }}
                      viewport={animationViewPort}
                    >
                      {edu.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <motion.div
            className="space-y-16"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={animationTransition(0.8)}
            viewport={animationViewPort}
          >
            {/* Toolkit */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...animationTransition(0.6), delay: 0.2 }}
              viewport={animationViewPort}
            >
              <motion.div
                className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...animationTransition(0.5), delay: 0.3 }}
                viewport={animationViewPort}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Code className="text-primary w-7 h-7" />
                </motion.div>
                <h2 className="text-xl font-bold font-display uppercase tracking-widest">
                  Toolkit
                </h2>
              </motion.div>
              <div className="space-y-8">
                {SKILLS.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ...animationTransition(0.4),
                      delay: idx * 0.05 + 0.4,
                    }}
                    viewport={animationViewPort}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      <span className="text-zinc-400 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-primary"
                        whileHover={{ scale: 1.2 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          ...animationTransition(1),
                          delay: idx * 0.05 + 0.6,
                        }}
                        viewport={animationViewPort}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ...animationTransition(0.6), delay: 0.4 }}
              viewport={animationViewPort}
            >
              <motion.div
                className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ ...animationTransition(0.5), delay: 0.5 }}
                viewport={animationViewPort}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Globe className="text-primary w-7 h-7" />
                </motion.div>
                <h2 className="text-xl font-bold font-display uppercase tracking-widest">
                  Polyglot
                </h2>
              </motion.div>
              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    className="flex justify-between items-center p-4 glass rounded-2xl border-white/5"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      ...animationTransition(0.4),
                      delay: idx * 0.1 + 0.6,
                    }}
                    viewport={animationViewPort}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <span className="font-bold font-display">{lang.name}</span>
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                      {lang.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Awards/Other */}
            <motion.section
              className="bg-primary/5 p-10 rounded-[40px] border border-primary/20 relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ...animationTransition(0.6), delay: 0.6 }}
              viewport={animationViewPort}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute top-0 right-0 p-8 opacity-10"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Award size={64} className="text-primary" />
              </motion.div>
              <motion.h3
                className="text-xl font-bold mb-6 font-display uppercase tracking-widest relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...animationTransition(0.5), delay: 0.7 }}
                viewport={animationViewPort}
              >
                Distinctions
              </motion.h3>
              <ul className="space-y-6 text-sm text-zinc-400 relative z-10 font-medium">
                {[
                  "Web3 Marketing Expert & Content Curator",
                  "Professional Meme Strategist & Cultivator",
                  "High-Retention Content Analyst",
                ].map((distinction, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      ...animationTransition(0.4),
                      delay: idx * 0.1 + 0.8,
                    }}
                    viewport={animationViewPort}
                    whileHover={{ x: 5, color: "#a3a3a3" }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span>{distinction}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CV;
