import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const apps = [
  {
    title: "LexaChat AI",
    desc: "A high-performance, secure AI chat application built on a dual-process system model with an isolated service backend.",
    tags: ["Electron", "React", "Node.js", "Dual-Process Architecture"],
    image: "/lexachat.png",
    demo: "https://lexachat-funclexa.vercel.app/",
    github: "https://github.com/ansarisultan/lexachat",
  },
  {
    title: "FuncSpan – Network Simulation Playground",
    desc: "A deep-dive developer sandbox built to intercept live API payloads, inject HTTP status codes, and simulate custom network latency.",
    tags: ["React", "Proxy Engine", "Traffic Inspector"],
    image: "/funcspan.png",
    demo: "https://funcspan.funclexa.dev/",
    github: "https://github.com/ansarisultan/",
  },
  {
    title: "FuncSilo – Premium Developer Sandbox",
    desc: "A premium developer sandbox workspace featuring high-fidelity custom design systems, responsive component templates, and isolated asset pipelines.",
    tags: ["React", "Design Studio", "Asset Manager"],
    image: "/funcsilo.png",
    demo: "https://funcsilo.funclexa.dev/",
    github: "https://github.com/ansarisultan/",
  },
];

const FeaturedAppCard = ({ app }) => {
  const [style, setStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease",
    });

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 180px at ${x}px ${y}px, rgba(0, 234, 255, 0.15), transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });
    setGlowStyle({
      opacity: 0,
      transition: "opacity 0.5s ease",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
      className="group relative rounded-3xl overflow-hidden
                 bg-[#041226]/20
                 border border-white/[0.08]
                 hover:border-cyan-400/40
                 shadow-[0_0_20px_rgba(0,229,255,0.15),0_0_50px_rgba(0,229,255,0.08)]
                 hover:shadow-[0_0_35px_rgba(0,229,255,0.25)]
                 transition-all duration-300 flex flex-col h-full"
    >
      {/* Interactive Follow-Glow */}
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />

      {/* Cyberpunk Scan Line Sweep on Hover */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[1200ms] ease-out pointer-events-none" />

      {/* Image Container with depth */}
      <div className="relative h-48 w-full overflow-hidden" style={{ transform: "translateZ(20px)" }}>
        <img
          src={app.image}
          alt={app.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] to-transparent opacity-60" />
      </div>

      {/* Content Container */}
      <div className="px-6 py-6 flex flex-col flex-grow justify-between relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-sans tracking-wide">
            {app.title}
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed font-light mb-4">
            {app.desc}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {app.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-cyan-950/80 border border-cyan-400/30
                           text-cyan-300 text-xs px-2.5 py-1 rounded-full font-mono"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {app.demo.startsWith("/") ? (
              <Link
                to={app.demo}
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold
                           text-cyan-300 border border-cyan-400/40 rounded-xl
                           bg-cyan-400/5
                           hover:bg-cyan-400/20
                           hover:shadow-[0_0_20px_rgba(0,234,255,0.5)]
                           transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Explore
              </Link>
            ) : (
              <a
                href={app.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold
                           text-cyan-300 border border-cyan-400/40 rounded-xl
                           bg-cyan-400/5
                           hover:bg-cyan-400/20
                           hover:shadow-[0_0_20px_rgba(0,234,255,0.5)]
                           transition-all duration-300"
              >
                <FaExternalLinkAlt />
                Demo
              </a>
            )}

            {app.github !== "#" && (
              <a
                href={app.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold
                           text-white/80 border border-white/10 rounded-xl
                           bg-white/5
                           hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-400/5
                           hover:shadow-[0_0_20px_rgba(0,234,255,0.3)]
                           transition-all duration-300"
              >
                <FaGithub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedApps = () => {
  return (
    <section id="featured" className="relative px-6 sm:px-12 py-24">
      {/* Section glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-400/10 blur-3xl rounded-full pointer-events-none" />

      <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400 uppercase tracking-widest">
        Featured Apps
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {apps.map((app, index) => (
          <FeaturedAppCard key={index} app={app} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedApps;
