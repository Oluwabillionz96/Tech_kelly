import React from "react";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUpRight,
  Zap,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-16 overflow-hidden relative">
      {/* Static Background Decoration */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] lg:-mr-20 lg:-mb-20  pointer-events-none select-none">
        <h2 className="lg:text-[25rem] md:text-[15rem] text-[6.5rem] font-black tracking-tighter leading-none font-display italic">
          KELLY
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-32">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="text-black w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-black tracking-[0.2em] uppercase font-display">
                Tech Kelly
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold font-display mb-10 tracking-tighter max-w-xl">
              Let's make some{" "}
              <span className="text-primary italic">noise.</span>
            </h2>
            <a
              href="mailto:kerllyboi@gmail.com"
              className="group inline-flex items-center gap-4 text-2xl font-bold border-b-2 border-primary pb-2 hover:text-primary hover:border-primary/80 transition-colors"
            >
              kerllyboi@gmail.com
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="lg:pt-10">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">
              Directory
            </h4>
            <ul className="space-y-5 text-zinc-500 font-bold uppercase tracking-widest text-xs">
              <li>
                <a href="#/" className="hover:text-white transition-colors">
                  Surface
                </a>
              </li>
              <li>
                <a
                  href="#/projects"
                  className="hover:text-white transition-colors"
                >
                  The Vault
                </a>
              </li>
              <li>
                <a href="#/cv" className="hover:text-white transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:pt-10">
            <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-8">
              Follow
            </h4>
            <div className="flex flex-wrap gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-4 glass rounded-2xl hover:text-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] gap-6">
          <p>© 2024 TECH KELLY. BUILT FOR THE BOLD.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Legal
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
