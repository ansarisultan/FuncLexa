// src/components/Logo.jsx
import React from "react";
import logo from "../assets/funclexa.png";

const Logo = () => {
  return (
    <div className="w-full flex justify-center sm:justify-end mt-10 sm:mt-0
                    relative sm:absolute sm:top-36 sm:right-0 sm:pr-10 z-10">

      {/* AI Core Container */}
      <div className="relative group">

        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full
                        border border-cyan-400/40
                        animate-spin-slow" />

        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full
                        bg-cyan-400/20 blur-2xl
                        opacity-70 group-hover:opacity-100
                        transition duration-300" />

        {/* Main logo core */}
        <div
          className="relative w-52 sm:w-80 aspect-square rounded-full overflow-hidden
                     bg-white/10 border border-white/30 backdrop-blur-xl
                     flex items-center justify-center
                     shadow-[0_0_40px_rgba(0,234,255,0.4)]
                     group-hover:scale-105
                     group-hover:shadow-[0_0_60px_rgba(0,234,255,0.7)]
                     transition-all duration-300 ease-in-out"
        >
          <img
            src={logo}
            alt="FuncLexa Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 18s linear infinite;
        }
      `}</style>

    </div>
  );
};

export default Logo;
