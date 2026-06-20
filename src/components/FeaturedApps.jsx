import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const apps = [
  {
    title: "LexaChat AI",
    desc: "A high-performance, secure AI chat application built on a dual-process system model with an isolated service backend. Context-aware conversations powered by Groq API.",
    tags: ["Electron", "React", "Node.js", "Groq AI"],
    image: "/lexachat.png",
    demo: "https://lexachat-funclexa.vercel.app/",
    github: "https://github.com/ansarisultan/lexachat",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accent: "cyan",
  },
  {
    title: "FuncSpan",
    desc: "A deep-dive developer sandbox built to intercept live API payloads, inject HTTP status codes, and simulate custom network latency in real-time.",
    tags: ["React", "Proxy Engine", "Traffic Inspector"],
    image: "/funcspan.png",
    demo: "https://funcspan.funclexa.dev/",
    github: "https://github.com/ansarisultan/",
    gradient: "from-blue-500/20 to-purple-500/20",
    accent: "blue",
  },
  {
    title: "FuncSilo",
    desc: "A premium developer sandbox workspace featuring high-fidelity custom design systems, responsive component templates, and isolated asset pipelines.",
    tags: ["React", "Design Studio", "Asset Manager"],
    image: "/funcsilo.png",
    demo: "https://funcsilo.funclexa.dev/",
    github: "https://github.com/ansarisultan/",
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "purple",
  },
];

const FeaturedAppCard = ({ app, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColors = {
    cyan: { border: "hover:border-cyan-400/40", glow: "rgba(0,229,255,0.15)", shadow: "hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]" },
    blue: { border: "hover:border-blue-400/40", glow: "rgba(59,130,246,0.15)", shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]" },
    purple: { border: "hover:border-purple-400/40", glow: "rgba(124,77,255,0.15)", shadow: "hover:shadow-[0_0_40px_rgba(124,77,255,0.15)]" },
  };

  const colors = accentColors[app.accent] || accentColors.cyan;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative rounded-2xl overflow-hidden flex flex-col h-full
                  border border-white/[0.06] ${colors.border} ${colors.shadow}
                  bg-white/[0.02] transition-all duration-500 hover:-translate-y-2`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Mouse follow glow */}
      {isHovered && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${colors.glow}, transparent 70%)`,
          }}
        />
      )}

      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <img
          src={app.image}
          alt={app.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
        
        {/* Floating badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm
                        border border-white/10 text-[10px] text-white/60 font-mono uppercase tracking-wider">
          Live
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between relative z-20">
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {app.title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mb-5">{app.desc}</p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {app.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] px-2.5 py-1 rounded-md font-mono tracking-wider
                           bg-white/[0.04] border border-white/[0.06] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {app.demo.startsWith("/") ? (
              <Link
                to={app.demo}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider
                           bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400
                           hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/40
                           transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-[10px]" /> Explore
              </Link>
            ) : (
              <a
                href={app.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider
                           bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 text-cyan-400
                           hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/40
                           transition-all duration-300"
              >
                <FaExternalLinkAlt className="text-[10px]" /> Demo
              </a>
            )}
            <a
              href={app.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider
                         border border-white/[0.06] text-white/50
                         hover:border-white/20 hover:text-white hover:bg-white/5
                         transition-all duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedApps = () => {
  return (
    <section id="featured" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">// Ecosystem</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Apps</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">
            Production-grade applications powering the FuncLexa ecosystem.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {apps.map((app, index) => (
            <FeaturedAppCard key={index} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
