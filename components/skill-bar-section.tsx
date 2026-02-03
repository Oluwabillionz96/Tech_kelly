import { SKILLS } from "@/constants";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";
import { animationTransition, animationViewPort } from "@/utils/animation";

export default function SkillBarSection() {
  return (
    <section className="py-20 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto px-6">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-4 group"
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ ...animationTransition(1), delay: idx * 0.05 }}
            viewport={animationViewPort}
          >
            <Zap className="w-5 h-5 text-emerald-500 fill-emerald-500" />
            <span className="text-2xl md:text-4xl font-black font-display opacity-20 transition-opacity hover:opacity-100 uppercase italic tracking-tighter cursor-default">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
