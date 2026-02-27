import { SKILLS } from "@/constants";
import { Zap, Star } from "lucide-react";
import { motion } from "framer-motion";
import { animationTransition, animationViewPort } from "@/utils/animation";
import { useState } from "react";

export default function SkillBarSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <section className="py-20 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5" />

      {/* Section-specific pattern */}
      <div className="absolute inset-0 bg-pattern-tech opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={animationTransition(0.8)}
          viewport={animationViewPort}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-zinc-400 text-lg">
            Mastery levels across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.9,
                rotateX: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 },
              }}
              viewport={{ once: true, amount: 0.3 }}
              onMouseEnter={() => setHoveredSkill(idx)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill container */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                {/* Skill header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        rotate: hoveredSkill === idx ? 360 : 0,
                        scale: hoveredSkill === idx ? 1.2 : 1,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      {skill.level === 100 ? (
                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      ) : (
                        <Zap className="w-6 h-6 text-primary fill-primary" />
                      )}
                    </motion.div>
                    <div className="flex flex-col">
                      <motion.h3
                        className="text-xl font-bold text-white group-hover:text-primary transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                      >
                        {skill.name}
                      </motion.h3>
                    </div>
                  </div>

                  <motion.span
                    className="text-2xl font-black"
                    style={{
                      color:
                        skill.level === 100
                          ? "#eab308"
                          : "var(--color-primary)",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: idx * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                    animate={{
                      scale: hoveredSkill === idx ? 1.2 : 1,
                    }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>

                {/* Skill bar */}
                <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative origin-left"
                    style={{
                      background:
                        skill.level === 100
                          ? "linear-gradient(90deg, #eab308, #f59e0b)"
                          : "linear-gradient(90deg, var(--color-primary), #b8862e)",
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    transition={{
                      duration: 1.2,
                      delay: idx * 0.1 + 0.6,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.1 + 1.5,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(204, 153, 51, 0.1) 0%, transparent 70%)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
