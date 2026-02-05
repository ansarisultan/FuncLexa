// src/components/Footer.jsx

import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail
} from "react-icons/fi";
import logo from "../assets/funclexa.png";

const Footer = () => {
  return (
    <footer className="relative mt-24 py-12 overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute left-1/2 -top-32 -translate-x-1/2 w-[30rem] h-[30rem] bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="relative flex flex-col items-center justify-center gap-8 px-4">

        {/* 🔵 AI Logo Core */}
        <div className="relative">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/40 animate-pulse" />

          {/* Logo container */}
          <div className="w-24 h-24 rounded-full overflow-hidden
                          bg-gradient-to-br from-white/20 to-white/5
                          backdrop-blur-md border border-white/20 p-1
                          shadow-[0_0_30px_rgba(0,234,255,0.4)]">
            <img
              src={logo}
              alt="FuncLexa Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* 🌐 Social Media Links */}
        <div className="flex gap-6 text-xl text-cyan-400">
          {[
            {
              icon: <FiGithub />,
              link: "https://github.com/ansarisultan"
            },
            {
              icon: <FiLinkedin />,
              link: "https://linkedin.com/in/SultanSAnsari"
            },
            {
              icon: <FiTwitter />,
              link: "https://twitter.com/ansari_sultan07"
            },
            {
              icon: <FiMail />,
              link: "mailto:funclexa.app@gmail.com"
            }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-3 rounded-full
                         border border-cyan-400/30
                         hover:text-white
                         hover:scale-110
                         hover:shadow-[0_0_20px_rgba(0,234,255,0.6)]
                         transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* System divider */}
        <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* 🔻 Copyright */}
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          © {new Date().getFullYear()} FuncLexa 2.O · System Online
        </p>
      </div>
    </footer>
  );
};

export default Footer;
