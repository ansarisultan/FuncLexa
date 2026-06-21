import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiGithub } from "react-icons/fi";

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.07] via-blue-500/[0.04] to-violet-500/[0.07]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/[0.06] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/[0.05] rounded-full blur-[100px]" />
          
          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.06]" />

          {/* Content */}
          <div className="relative px-8 sm:px-16 py-16 sm:py-20 text-center">
            <p className="text-cyan-400/50 font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
              Ready to explore?
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-5 tracking-tight max-w-2xl mx-auto leading-[1.15]">
              Start Building with the{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                FuncLexa Ecosystem
              </span>
            </h2>
            
            <p className="text-white/35 text-[15px] sm:text-base max-w-lg mx-auto font-light leading-relaxed mb-10">
              Explore production-grade applications, contribute to open-source projects, 
              or connect to collaborate on something new.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => navigate("/projects")}
                className="group relative px-7 py-3.5 rounded-xl font-semibold text-[13px] tracking-wide overflow-hidden
                           bg-gradient-to-r from-cyan-500 to-blue-600 text-white btn-shine
                           shadow-[0_0_25px_rgba(34,211,238,0.2)]
                           hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
                           transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Projects
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={14} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <a
                href="https://github.com/ansarisultan"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3.5 rounded-xl font-semibold text-[13px] tracking-wide
                           border border-white/[0.08] text-white/50
                           hover:border-white/20 hover:text-white/90 hover:bg-white/[0.03]
                           transition-all duration-400 active:scale-[0.98]
                           flex items-center gap-2"
              >
                <FiGithub size={15} />
                Star on GitHub
              </a>
            </div>

            {/* Subtle stats */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/[0.04]">
              {[
                { label: "Open Source", value: "100%" },
                { label: "Apps Shipped", value: "5+" },
                { label: "Built by", value: "Sultan" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-white/70 font-display font-semibold text-lg sm:text-xl tracking-tight">{stat.value}</p>
                  <p className="text-white/20 text-[9px] font-mono tracking-[0.15em] uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
