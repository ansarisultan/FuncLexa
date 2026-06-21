import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const apps = [
  {
    title: "LexaChat AI",
    desc: "High-performance AI chat with dual-process system model, isolated backend, and context-aware conversations via Groq API.",
    tags: ["Electron", "React", "Node.js", "Groq AI"],
    image: "/lexachat.png",
    demo: "https://lexachat-funclexa.vercel.app/",
    github: "https://github.com/ansarisultan/lexachat",
    accent: "cyan",
  },
  {
    title: "FuncSpan",
    desc: "Developer sandbox to intercept live API payloads, inject HTTP status codes, and simulate custom network latency in real-time.",
    tags: ["React", "Proxy Engine", "Traffic Inspector"],
    image: "/funcspan.png",
    demo: "https://funcspan.funclexa.dev/",
    github: "https://github.com/ansarisultan/FuncPort",
    accent: "blue",
  },
  {
    title: "FuncSilo",
    desc: "Premium workspace with high-fidelity design systems, responsive component templates, and isolated asset pipelines.",
    tags: ["React", "Design Studio", "Asset Manager"],
    image: "/funcsilo.png",
    demo: "https://funcsilo.funclexa.dev/",
    github: "https://github.com/ansarisultan/FuncLexa-assests",
    accent: "violet",
  },
];

const glowColors = {
  cyan: "rgba(34,211,238,0.1)",
  blue: "rgba(59,130,246,0.1)",
  violet: "rgba(124,58,237,0.1)",
};

const FeaturedAppCard = ({ app, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full
                 border border-white/[0.05] hover:border-white/[0.1]
                 bg-white/[0.015] transition-all duration-500 hover:-translate-y-1.5
                 hover:shadow-[0_8px_40px_rgba(34,211,238,0.06)]"
    >
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColors[app.accent]}, transparent 70%)`,
          }}
        />
      )}

      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img src={app.image} alt={app.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent" />
        <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-[#030712]/70 backdrop-blur-sm
                        border border-emerald-400/20 text-[9px] font-mono uppercase tracking-[0.15em] text-emerald-400/70">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />Live
          </span>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-lg font-display font-semibold text-white/90 mb-3 tracking-wide
                         group-hover:text-white transition-colors duration-300">{app.title}</h3>
          <p className="text-[13px] text-white/35 leading-relaxed mb-5">{app.desc}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {app.tags.map((tag, i) => (
              <span key={i} className="text-[9px] px-2 py-1 rounded-md font-mono tracking-[0.1em]
                                       bg-white/[0.03] border border-white/[0.06] text-white/40">{tag}</span>
            ))}
          </div>
          <div className="flex gap-2.5">
            {app.demo.startsWith("/") ? (
              <Link to={app.demo}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-[0.1em]
                           bg-cyan-500/[0.08] border border-cyan-400/15 text-cyan-400
                           hover:bg-cyan-500/[0.12] hover:border-cyan-400/25 transition-all duration-300">
                <FiExternalLink size={11} /> Explore
              </Link>
            ) : (
              <a href={app.demo} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-[0.1em]
                           bg-cyan-500/[0.08] border border-cyan-400/15 text-cyan-400
                           hover:bg-cyan-500/[0.12] hover:border-cyan-400/25 transition-all duration-300">
                <FiArrowUpRight size={12} /> Demo
              </a>
            )}
            <a href={app.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center px-3.5 py-2.5 rounded-xl
                         border border-white/[0.05] text-white/35
                         hover:border-white/15 hover:text-white/70 hover:bg-white/[0.03] transition-all duration-300">
              <FiGithub size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedApps = () => {
  return (
    <section id="featured" className="relative py-28 sm:py-36">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.02] rounded-full blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <p className="text-cyan-400/60 font-mono text-[11px] tracking-[0.3em] uppercase mb-4">
            <span className="text-white/20">{'// '}</span>Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white mb-5 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-white/35 text-[15px] sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Production-grade applications powering the FuncLexa ecosystem.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {apps.map((app, index) => (
            <FeaturedAppCard key={index} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
