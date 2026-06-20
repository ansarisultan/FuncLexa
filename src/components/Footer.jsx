import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from "react-icons/fi";
import logo from "../assets/funclexa.png";

const Footer = () => {
  const links = [
    { label: "LexaChat", href: "https://lexachat-funclexa.vercel.app/" },
    { label: "FuncSilo", href: "https://funcsilo.funclexa.dev/" },
    { label: "FuncSpan", href: "https://funcspan.funclexa.dev/" },
  ];

  const socials = [
    { icon: <FiGithub />, href: "https://github.com/ansarisultan" },
    { icon: <FiLinkedin />, href: "https://linkedin.com/in/SultanSAnsari" },
    { icon: <FiTwitter />, href: "https://twitter.com/ansari_sultan07" },
    { icon: <FiMail />, href: "mailto:funclexa.app@gmail.com" },
  ];

  return (
    <footer className="relative py-16 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-12">
          
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10
                            shadow-[0_0_20px_rgba(0,229,255,0.15)]">
              <img src={logo} alt="FuncLexa" className="w-full h-full object-cover" />
            </div>
            <div>
              <h3 className="text-lg font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                FuncLexa
              </h3>
              <p className="text-[10px] text-white/30 font-mono tracking-wider">Dream it. Code it. Ship it.</p>
            </div>
          </div>

          {/* Ecosystem Links */}
          <div className="flex flex-wrap gap-4 justify-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider
                           border border-white/[0.06] text-white/40
                           hover:border-cyan-400/30 hover:text-cyan-400 hover:bg-cyan-400/5
                           transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/[0.06] bg-white/[0.02]
                           flex items-center justify-center text-white/40
                           hover:text-cyan-400 hover:border-cyan-400/30
                           hover:shadow-[0_0_15px_rgba(0,229,255,0.2)]
                           transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/20 font-mono">
          <p>© {new Date().getFullYear()} FuncLexa v2.0 — All rights reserved</p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart className="text-red-400 text-[10px]" /> by Sultan Salauddin Ansari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
