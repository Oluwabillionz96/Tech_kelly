import useScreenSize from "@/hooks/useScreenSize";
import { getCreativeVision } from "@/services/geminiService";
import { animationTransition, animationViewPort } from "@/utils/animation";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles, Terminal, Video } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const { isMobile } = useScreenSize();
  const [vision, setVision] = useState<string | null>(null);
  const [loadingVision, setLoadingVision] = useState(false);
  const handleVisionClick = async () => {
    setLoadingVision(true);
    const result = await getCreativeVision(
      "Tech Kelly",
      "A video master who writes, designs graphics, and builds cinematic narratives.",
    );
    setVision(result);
    setLoadingVision(false);
  };
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          className="order-2 lg:order-1"
          initial={{
            y: isMobile ? 50 : 0,
            opacity: 0,
            x: isMobile ? 0 : -100,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            x: 0,
          }}
          viewport={animationViewPort}
          transition={animationTransition()}
        >
          <div className="inline-flex items-center gap-3 glass border border-white/10 px-4 py-2 rounded-full text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Master of Videos & Design
          </div>

          <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tighter leading-[0.85] mb-8">
            Tech &nbsp;
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-emerald-200 to-white italic">
              Kelly &nbsp;
            </span>{" "}
          </h1>
          {/* <h2>Jack of all trades • Master of videos</h2> */}

          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl mb-12 leading-relaxed border-l-2 border-emerald-500/30 pl-6">
            Jack of all trades • Master of videos
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/projects"
              className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-500 transition-colors shadow-2xl"
            >
              Explore Work
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={handleVisionClick}
              disabled={loadingVision}
              className="glass flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:border-emerald-500 transition-colors disabled:opacity-50"
            >
              {loadingVision ? "Syncing..." : "Director Vision"}
              <Sparkles className="w-5 h-5 text-emerald-400" />
            </button>
          </div>

          {vision && (
            <div className="mt-8 p-6 glass border-l-4 border-emerald-500 rounded-r-2xl max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={14} className="text-emerald-500" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-500">
                  Gemini Thinking Console
                </span>
              </div>
              <p className="text-emerald-100/90 font-medium italic leading-relaxed">
                "{vision}"
              </p>
            </div>
          )}
        </motion.div>

        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="relative w-full max-w-125 aspect-square">
            {/* Decorative Static Elements */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-[80px] scale-75"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-emerald-500/5 rounded-full"></div>

            {/* Main Character Image Frame */}
            <motion.div
              className="relative z-10 w-full h-full rounded-[40px] overflow-hidden border-4 border-white/5 shadow-2xl"
              initial={{
                y: isMobile ? -50 : 0,
                opacity: 0,
                x: isMobile ? 0 : 100,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                x: 0,
              }}
              viewport={animationViewPort}
              transition={animationTransition()}
            >
              <img
                src="/tech_kelly.jpg"
                alt="Tech Kelly Avatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute hidden bottom-4 left-2 right-2 w-fill gap-6 md:flex justify-center items-center ">
                <div className=" glass p-5 rounded-2xl border-white/10">
                  <Layers className="text-emerald-500 w-8 h-8" />
                </div>
                <div className="glass p-4 rounded-2xl border-white/10 w-full">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-1">
                    Status
                  </p>
                  <p className="text-white font-bold tracking-tight">
                    System Online. Creating Magic.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Static Badges */}
            <motion.div
              className="absolute z-50 hidden md:block -top-6 -right-6 glass p-5 rounded-2xl border-white/10"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={animationTransition()}
            >
              <Video className="text-emerald-500 w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
