
import React from 'react';
import { Download, Briefcase, GraduationCap, Code, Award, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { EXPERIENCES, SKILLS, LANGUAGES } from '../constants';

const CV: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="flex-1">
            <h1 className="text-7xl font-bold font-display tracking-tighter mb-4">Kingsley Etim</h1>
            <p className="text-2xl text-emerald-500 font-bold uppercase tracking-[0.2em] mb-8">Professional Content Developer</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                <span>kerllyboi@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                <span>+234 812 921 6478</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-emerald-500" />
                <span>Nigeria, Africa</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-500 transition-colors">
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-20">
            {/* Experience */}
            <section>
              <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <Briefcase className="text-emerald-500 w-8 h-8" />
                <h2 className="text-3xl font-bold font-display tracking-tight uppercase">Work History</h2>
              </div>
              <div className="space-y-16">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 border-l-2 border-zinc-800">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-emerald-500"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                      <h3 className="text-2xl font-bold font-display">{exp.role}</h3>
                      <span className="text-emerald-500 font-black text-[10px] uppercase tracking-[0.2em] glass px-3 py-1 rounded-full">{exp.period}</span>
                    </div>
                    <h4 className="text-white/60 font-bold mb-6 uppercase text-xs tracking-[0.2em]">{exp.company}</h4>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-zinc-400 leading-relaxed">• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <GraduationCap className="text-emerald-500 w-8 h-8" />
                <h2 className="text-3xl font-bold font-display tracking-tight uppercase">Academic</h2>
              </div>
              <div className="space-y-12">
                <div className="relative pl-10 border-l-2 border-zinc-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-emerald-500"></div>
                  <h3 className="text-2xl font-bold font-display">University of Uyo</h3>
                  <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-2">B.Eng in Civil Engineering • 2017 - 2022</p>
                  <p className="text-zinc-400">Successfully completed the Bachelor's degree with a focus on structural integrity and design.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-zinc-800">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-900 rounded-full border-4 border-emerald-500"></div>
                  <h3 className="text-2xl font-bold font-display">YAPPI</h3>
                  <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest mb-2">Animator Certification • Oct 2024</p>
                  <p className="text-zinc-400">Intensive specialization in video editing and 3D animation systems.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-16">
            {/* Toolkit */}
            <section>
              <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
                <Code className="text-emerald-500 w-7 h-7" />
                <h2 className="text-xl font-bold font-display uppercase tracking-widest">Toolkit</h2>
              </div>
              <div className="space-y-8">
                {SKILLS.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                      <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors">{skill.name}</span>
                      <span className="text-emerald-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-6">
                <Globe className="text-emerald-500 w-7 h-7" />
                <h2 className="text-xl font-bold font-display uppercase tracking-widest">Polyglot</h2>
              </div>
              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 glass rounded-2xl border-white/5">
                    <span className="font-bold font-display">{lang.name}</span>
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards/Other */}
            <section className="bg-emerald-500/5 p-10 rounded-[40px] border border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Award size={64} className="text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-6 font-display uppercase tracking-widest relative z-10">Distinctions</h3>
              <ul className="space-y-6 text-sm text-zinc-400 relative z-10 font-medium">
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span>Web3 Marketing Expert & Content Curator</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span>Professional Meme Strategist & Cultivator</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0"></div>
                  <span>High-Retention Content Analyst</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;