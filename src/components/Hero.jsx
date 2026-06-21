import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import logo from "../assets/funclexa.png";

const Hero = () => {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const brands = [
    { name: "LexaChat", desc: "AI Engine" },
    { name: "FuncSilo", desc: "Asset Studio" },
    { name: "FuncSpan", desc: "Network Lab" },
    { name: "FLexa", desc: "Voice AI" },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
    visible: { 
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-14 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full 
                              bg-white/[0.03] border border-white/[0.08] text-white/50 text-[11px] font-mono tracking-wider
                              hover:border-cyan-400/20 hover:bg-cyan-400/[0.03] transition-all duration-400 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-white/40">ALL SYSTEMS OPERATIONAL</span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-cyan-400/70">v2.0</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-display font-bold leading-[1.08] tracking-tight">
                <span className="text-white">Where </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                  Code Meets
                </span>
                <br />
                <span className="text-white">Intelligence</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants}
              className="text-[15px] sm:text-base text-white/40 leading-[1.75] max-w-lg font-light">
              A production-grade developer ecosystem — AI-powered applications, 
              full-stack systems, and intelligent tools, all engineered from the ground up 
              by <span className="text-white/60 font-medium">Sultan Salauddin Ansari</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
              <button
                onClick={() => document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-[13px] tracking-wide overflow-hidden
                           bg-gradient-to-r from-cyan-500 to-blue-600 text-white btn-shine
                           shadow-[0_0_25px_rgba(34,211,238,0.2)]
                           hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                           transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Ecosystem
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button
                onClick={() => navigate("/journey")}
                className="group px-7 py-3.5 rounded-xl font-semibold text-[13px] tracking-wide
                           border border-white/[0.08] text-white/55
                           hover:border-white/20 hover:text-white/90
                           hover:bg-white/[0.03]
                           transition-all duration-400 active:scale-[0.98]"
              >
                <span className="flex items-center gap-2">
                  Our Journey
                  <FiChevronRight className="transition-transform duration-300 group-hover:translate-x-0.5 text-white/30 group-hover:text-white/60" size={14} />
                </span>
              </button>
            </motion.div>

            {/* Ecosystem brands */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-[10px] text-white/20 font-mono tracking-[0.2em] uppercase mb-4">Powering the Ecosystem</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-lg
                               border border-white/[0.05] bg-white/[0.015]
                               hover:border-white/[0.12] hover:bg-white/[0.03]
                               transition-all duration-300 cursor-default group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors" />
                    <span className="text-[11px] font-semibold text-white/50 group-hover:text-white/80 tracking-wide transition-colors">
                      {brand.name}
                    </span>
                    <span className="text-[9px] text-white/20 font-mono tracking-wider uppercase">{brand.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side — Logo */}
          <motion.div 
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative group">
              {/* Ambient glow */}
              <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 
                              blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
              
              {/* Outer tech ring — dashed */}
              <div className="absolute -inset-8 rounded-full border border-dashed border-white/[0.06] animate-[spin_30s_linear_infinite]" />
              
              {/* Inner tech ring — gradient */}
              <div className="absolute -inset-4 rounded-full border border-white/[0.04] border-t-cyan-400/30 border-b-violet-400/20 
                              animate-[spin_18s_linear_infinite_reverse]" />
              
              {/* Orbital dot 1 */}
              <div className="absolute -inset-8 animate-[spin_22s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400/80 
                                shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </div>
              {/* Orbital dot 2 */}
              <div className="absolute -inset-8 animate-[spin_35s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400/70 
                                shadow-[0_0_8px_rgba(124,58,237,0.7)]" />
              </div>

              {/* Main logo container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden
                              border border-white/[0.08]
                              shadow-[0_0_50px_rgba(34,211,238,0.12)]
                              group-hover:shadow-[0_0_70px_rgba(34,211,238,0.25)]
                              group-hover:border-cyan-400/20
                              transition-all duration-700">
                <img
                  src={logo}
                  alt="FuncLexa Logo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Scan line */}
                <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent
                                animate-[scan_4s_linear_infinite] pointer-events-none" />
                {/* Inner vignette */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.4)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scan animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
