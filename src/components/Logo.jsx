// src/components/Logo.jsx
import React from "react";
import logo from "../assets/funclexa.png";

const Logo = () => {
  return (
    <div className="w-full flex justify-center sm:justify-end mt-10 sm:mt-0
                    relative sm:absolute sm:top-28 sm:right-0 sm:pr-10 z-10">

      {/* AI Core Container */}
      <div className="relative group p-10">

        {/* Outer Tech Ring (Clockwise) */}
        <div className="absolute inset-2 rounded-full
                        border border-dashed border-cyan-400/40
                        animate-spin-clockwise" />

        {/* Inner Tech Ring (Counter-Clockwise) */}
        <div className="absolute inset-6 rounded-full
                        border border-cyan-500/20 border-t-cyan-400 border-b-blue-500
                        animate-spin-counter" />

        {/* Particle Orbit (Outer Edge) */}
        <div className="absolute inset-0 rounded-full animate-pulse-slow">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,234,255,0.8)]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
        </div>

        {/* Glow halo */}
        <div className="absolute inset-10 rounded-full
                        bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl
                        opacity-70 group-hover:opacity-100
                        transition duration-500" />

        {/* Main logo core */}
        <div
          className="relative w-52 sm:w-80 aspect-square rounded-full overflow-hidden
                     bg-white/[0.03] border border-white/20 backdrop-blur-2xl
                     flex items-center justify-center
                     shadow-[0_0_50px_rgba(0,234,255,0.3)]
                     group-hover:scale-105
                     group-hover:shadow-[0_0_70px_rgba(0,234,255,0.6)]
                     transition-all duration-500 ease-in-out"
        >
          {/* Subtle scanning bar */}
          <div className="absolute inset-x-0 h-[2px] bg-cyan-400/50 blur-sm top-0 animate-scan pointer-events-none z-20" />

          <img
            src={logo}
            alt="FuncLexa Logo"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          10%, 90% { opacity: 0.8; }
          100% { transform: translateY(320px); opacity: 0; }
        }
        .animate-spin-clockwise {
          animation: spin-clockwise 25s linear infinite;
        }
        .animate-spin-counter {
          animation: spin-counter 15s linear infinite;
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-pulse-slow {
          animation: spin-clockwise 30s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Logo;
