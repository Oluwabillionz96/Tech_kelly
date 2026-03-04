import { Layers, PenTool, Play } from "lucide-react";
import { motion } from "framer-motion";
import { animationTransition, animationViewPort } from "@/utils/animation";

export default function ServicesSection() {
  return (
    <section className="py-40 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">
            Ecosystem
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight">
            The Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {[
            {
              icon: Play,
              title: "Video Editing",
              desc: "Rhythmic pacing and emotional resonance. I don't just cut; I sculpt time.",
            },
            {
              icon: Layers,
              title: "Motion Design",
              desc: "Breathing life into static pixels with fluid animation and procedural effects.",
            },
            {
              icon: PenTool,
              title: "Creative Writing",
              desc: "Words that weigh. Building scripts that serve as the soul of every production.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ...animationTransition(1), delay: i * 0.5 }}
              viewport={animationViewPort}
              className="group p-10 glass rounded-[40px] hover:bg-primary/5 transition-colors border border-white/5"
            >
              <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display transition-colors group-hover:text-primary">
                {service.title}
              </h3>
              <p className="text-zinc-500 leading-relaxed transition-colors group-hover:text-zinc-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
