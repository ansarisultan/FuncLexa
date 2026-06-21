import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiUnlock, FiCpu, FiLayers, FiZap, FiTerminal } from "react-icons/fi";

const stats = [
  { number: "2+", label: "Years Coding" },
  { number: "5+", label: "Live Projects" },
  { number: "4", label: "Ecosystem Apps" },
  { number: "∞", label: "Lines of Code" },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Express", category: "Backend" },
  { name: "Electron", category: "Desktop" },
  { name: "Tailwind", category: "Styling" },
  { name: "Groq AI", category: "AI/ML" },
  { name: "Vite", category: "Build" },
];

const philosophyCards = [
  { title: "Open Source", desc: "Building in public, sharing knowledge with the community", icon: FiUnlock, accent: "cyan" },
  { title: "AI-First", desc: "Every application integrates intelligent automation", icon: FiCpu, accent: "violet" },
  { title: "Full Stack", desc: "From database architecture to deployment, end-to-end", icon: FiLayers, accent: "blue" },
  { title: "Performance", desc: "Optimized for speed, reliability, and user experience", icon: FiZap, accent: "emerald" },
];

const AnimatedNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const num = parseInt(target) || 0;
          if (num === 0) { setCount(target); return; }
          let current = 0;
          const increment = Math.max(1, Math.floor(num / 40));
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) { setCount(num); clearInterval(timer); }
            else setCount(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{typeof count === 'number' ? count + suffix : count}</span>;
};

const accentMap = {
  cyan: { bg: "bg-cyan-400/[0.08]", border: "border-cyan-400/15", text: "text-cyan-400", glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]" },
  violet: { bg: "bg-violet-400/[0.08]", border: "border-violet-400/15", text: "text-violet-400", glow: "group-hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]" },
  blue: { bg: "bg-blue-400/[0.08]", border: "border-blue-400/15", text: "text-blue-400", glow: "group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]" },
  emerald: { bg: "bg-emerald-400/[0.08]", border: "border-emerald-400/15", text: "text-emerald-400", glow: "group-hover:shadow-[0_0_20px_rgba(52,211,153,0.1)]" },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/[0.03] rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <p className="text-cyan-400/60 font-mono text-[11px] tracking-[0.3em] uppercase mb-4">
            <span className="text-white/20">{'// '}</span>Platform
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white mb-5 tracking-tight">
            The <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">FuncLexa</span> System
          </h2>
          <p className="text-white/35 text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
            A development ecosystem where ideas are engineered, coded, and shipped as real, production-grade applications.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              variants={sectionVariants}
              className="group relative p-6 sm:p-8 rounded-2xl text-center
                         border border-white/[0.05] hover:border-cyan-400/15
                         bg-white/[0.015] hover:bg-white/[0.03]
                         transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-2 tracking-tight">
                <AnimatedNumber target={stat.number} suffix="" />
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/30 font-mono tracking-[0.12em] uppercase">{stat.label}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          
          {/* Left — Narrative */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={sectionVariants} className="space-y-5 text-white/45 text-[15px] leading-[1.8]">
              <p>
                FuncLexa is a developer ecosystem and product studio — a place where ideas are{" "}
                <span className="text-cyan-400/80 font-medium">engineered, coded, and shipped</span>{" "}
                as real, working applications that solve real problems.
              </p>
              <p>
                A core focus is building{" "}
                <span className="text-cyan-400/80 font-medium">AI-integrated web applications</span>{" "}
                alongside modern, scalable systems using production-grade technologies and best practices.
              </p>
              <p className="text-white/55 font-medium italic border-l-2 border-cyan-400/25 pl-5 py-1">
                "Build it. Ship it. Evolve it." — the FuncLexa way.
              </p>
            </motion.div>

            {/* Philosophy cards */}
            <motion.div variants={sectionVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {philosophyCards.map((item, i) => {
                const colors = accentMap[item.accent];
                const Icon = item.icon;
                return (
                  <div key={i} className={`group p-4 rounded-xl border border-white/[0.05] bg-white/[0.015]
                                          hover:${colors.border} hover:bg-white/[0.025]
                                          ${colors.glow}
                                          transition-all duration-400`}>
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} border ${colors.border} 
                                    flex items-center justify-center ${colors.text} mb-3`}>
                      <Icon size={14} />
                    </div>
                    <h4 className="text-white/80 font-semibold text-sm mb-1 tracking-wide">{item.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={sectionVariants}>
              <h3 className="text-white/80 font-display font-semibold text-lg mb-5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/15 
                                flex items-center justify-center text-cyan-400">
                  <FiTerminal size={12} />
                </span>
                <span className="tracking-wide">Tech Stack</span>
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                {techStack.map((tech, i) => (
                  <motion.div 
                    key={i} 
                    variants={sectionVariants}
                    className="group flex items-center gap-3 p-3.5 rounded-xl
                               border border-white/[0.05] bg-white/[0.015]
                               hover:border-cyan-400/15 hover:bg-white/[0.03]
                               transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 
                                    group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.6)] 
                                    transition-all duration-300 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-white/70 font-medium text-sm truncate">{tech.name}</p>
                      <p className="text-white/20 text-[9px] font-mono uppercase tracking-[0.15em]">{tech.category}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Terminal-style info */}
            <motion.div 
              variants={sectionVariants}
              className="rounded-2xl border border-white/[0.05] bg-white/[0.015] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>
                <span className="text-[10px] text-white/20 font-mono ml-2 tracking-wider">system.config</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2.5 text-white/40">
                <p><span className="text-cyan-400/70">platform</span><span className="text-white/15"> : </span>FuncLexa v2.0</p>
                <p><span className="text-cyan-400/70">status</span><span className="text-white/15"> : </span><span className="text-emerald-400/70">● online</span></p>
                <p><span className="text-cyan-400/70">ecosystem</span><span className="text-white/15"> : </span>LexaChat, FuncSilo, FuncSpan, FLexa</p>
                <p><span className="text-cyan-400/70">stack</span><span className="text-white/15"> : </span>MERN + Electron + AI</p>
                <p><span className="text-cyan-400/70">author</span><span className="text-white/15"> : </span>Sultan Salauddin Ansari</p>
                <p><span className="text-cyan-400/70">philosophy</span><span className="text-white/15"> : </span><span className="text-white/25 italic">"Build it. Ship it. Evolve it."</span></p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
