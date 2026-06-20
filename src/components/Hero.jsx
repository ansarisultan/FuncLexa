import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/funclexa.png";

const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const brands = [
    { name: "LexaChat", color: "from-cyan-400 to-blue-500" },
    { name: "FuncSilo", color: "from-purple-400 to-pink-500" },
    { name: "FuncSpan", color: "from-blue-400 to-cyan-500" },
    { name: "FLexa", color: "from-emerald-400 to-cyan-500" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className={`flex-1 space-y-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-cyan-400/5 border border-cyan-400/20 text-cyan-400 text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
              SYSTEM ONLINE — by Sultan Salauddin Ansari
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                <span className="text-white">Where</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Code Meets
                </span>
                <br />
                <span className="text-white">Intelligence</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/50 leading-relaxed max-w-xl">
              A suite of production-grade developer utilities, advanced conversational AI engines, 
              and isolated desktop architectures — all built from scratch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/projects")}
                className="group relative px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest overflow-hidden
                           bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                           shadow-[0_0_30px_rgba(0,229,255,0.3)]
                           hover:shadow-[0_0_50px_rgba(0,229,255,0.5)]
                           transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button
                onClick={() => navigate("/portfolio")}
                className="px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest
                           border border-white/10 text-white/70
                           hover:border-cyan-400/40 hover:text-cyan-400
                           hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]
                           hover:bg-cyan-400/5
                           transition-all duration-500"
              >
                View Portfolio
              </button>
            </div>

            {/* Ecosystem brands */}
            <div className="pt-4">
              <p className="text-xs text-white/30 font-mono tracking-widest uppercase mb-4">Powering the Ecosystem</p>
              <div className="flex flex-wrap gap-3">
                {brands.map((brand) => (
                  <span
                    key={brand.name}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider
                               bg-gradient-to-r ${brand.color} bg-clip-text text-transparent
                               border border-white/[0.06] bg-white/[0.02]
                               hover:border-white/20 hover:bg-white/5
                               transition-all duration-300 cursor-default`}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side — Logo */}
          <div className={`relative flex-shrink-0 transition-all duration-1000 delay-300 
                          ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-blue-500/20 
                              blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              
              {/* Spinning tech ring */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-cyan-400/30 animate-[spin_25s_linear_infinite]" />
              <div className="absolute -inset-3 rounded-full border border-cyan-500/15 border-t-cyan-400/50 border-b-purple-400/50 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Orbital particles */}
              <div className="absolute -inset-6 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-400 
                                shadow-[0_0_12px_rgba(0,229,255,0.9)]" />
              </div>
              <div className="absolute -inset-6 animate-[spin_30s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-purple-400 
                                shadow-[0_0_12px_rgba(124,77,255,0.9)]" />
              </div>

              {/* Main logo */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden
                              border-2 border-white/10
                              shadow-[0_0_60px_rgba(0,229,255,0.2)]
                              group-hover:shadow-[0_0_80px_rgba(0,229,255,0.4)]
                              group-hover:border-cyan-400/30
                              transition-all duration-700">
                <img
                  src={logo}
                  alt="FuncLexa Logo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Scan line */}
                <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent
                                animate-[scan_3s_linear_infinite] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scan animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
