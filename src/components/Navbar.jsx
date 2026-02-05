import React from "react";
import AskAI from "./AskAI";

const Navbar = () => {
  return (
    <nav className="w-screen overflow-hidden px-3 sm:px-6">
      <div
        className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between
                   bg-gradient-to-r from-white/10 via-white/5 to-white/10
                   backdrop-blur-2xl border border-cyan-400/30
                   rounded-3xl px-6 py-5
                   shadow-[0_0_60px_rgba(0,234,255,0.25)]
                   overflow-hidden group"
      >
        {/* Top Scan Line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Moving Scan Sweep */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 animate-sweep" />

        {/* Ambient Glow */}
        <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full -z-10" />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-float"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}

        {/* LEFT — Brand */}
        <div className="flex items-center space-x-4">
          <div>
            <h1
              className="text-center sm:text-left text-5xl font-bold
                         bg-gradient-to-r from-cyan-400 via-white to-blue-500
                         bg-clip-text text-transparent select-none
                         animate-breathe"
            >
              FuncLexa
            </h1>
            <p className="text-center sm:text-left text-xs text-cyan-400 tracking-[0.3em]">
              VERSION 2.0
            </p>
          </div>
        </div>

        {/* CENTER — Nav Links */}
        <div className="flex justify-center sm:justify-end space-x-10 mt-6 sm:mt-0">
          {[
            { label: "About", href: "#about" },
            { label: "Featured Apps", href: "#featured" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/80 uppercase text-xs tracking-[0.25em]
                         hover:text-cyan-300 transition-all duration-300
                         after:absolute after:left-1/2 after:-bottom-3
                         after:h-[2px] after:w-0
                         after:-translate-x-1/2
                         after:bg-cyan-400
                         hover:after:w-full after:transition-all
                         hover:drop-shadow-[0_0_14px_rgba(0,234,255,0.9)]"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* RIGHT — Ask AI */}
        <div className="absolute right-4 top-4 sm:static sm:ml-6">
          <AskAI />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-sweep {
          animation: sweep 4s linear infinite;
        }

        @keyframes breathe {
          0%,100% { opacity: 0.9; }
          50% { opacity: 1; }
        }

        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(-10px); opacity: 0.9; }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
