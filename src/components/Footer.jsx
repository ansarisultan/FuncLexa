import React from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiArrowUpRight } from "react-icons/fi";
import logo from "../assets/funclexa.png";

const Footer = () => {
  const products = [
    { label: "LexaChat AI", href: "https://lexachat-funclexa.vercel.app/" },
    { label: "FuncSilo", href: "https://funcsilo.funclexa.dev/" },
    { label: "FuncSpan", href: "https://funcspan.funclexa.dev/" },
    { label: "FLexa AI", href: "https://flexaai-funclexa.vercel.app/" },
  ];

  const company = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "/journey" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: FiGithub, href: "https://github.com/ansarisultan", label: "GitHub" },
    { icon: FiLinkedin, href: "https://linkedin.com/in/SultanSAnsari", label: "LinkedIn" },
    { icon: FiTwitter, href: "https://twitter.com/ansari_sultan07", label: "Twitter" },
    { icon: FiMail, href: "mailto:funclexa.app@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative pt-20 pb-10 border-t border-white/[0.03]">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/[0.08]
                              shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <img src={logo} alt="FuncLexa" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-base font-display font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  FuncLexa
                </h3>
                <p className="text-[9px] text-white/20 font-mono tracking-[0.15em]">DEVELOPER ECOSYSTEM</p>
              </div>
            </div>
            <p className="text-white/25 text-xs leading-relaxed max-w-[200px]">
              Build it. Ship it. Evolve it. — Engineering the future of developer tools.
            </p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-5">Products</h4>
            <ul className="space-y-2.5">
              {products.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-1.5 text-white/30 text-xs font-medium
                               hover:text-white/70 transition-colors duration-300">
                    {link.label}
                    <FiArrowUpRight size={10} className="opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-5">Company</h4>
            <ul className="space-y-2.5">
              {company.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/30 text-xs font-medium hover:text-white/70 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <h4 className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-5">Connect</h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                    className="w-9 h-9 rounded-lg border border-white/[0.05] bg-white/[0.015]
                               flex items-center justify-center text-white/30
                               hover:text-cyan-400 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]
                               transition-all duration-300">
                    <Icon size={13} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/15 font-mono">
          <p>© {new Date().getFullYear()} FuncLexa v2.0 — All rights reserved</p>
          <p className="flex items-center gap-1.5">
            Crafted with <FiHeart className="text-red-400/60" size={10} /> by Sultan Salauddin Ansari
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
