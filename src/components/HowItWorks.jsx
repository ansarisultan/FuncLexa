import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiSend, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    step: "01",
    icon: FiCode,
    title: "Architect & Build",
    desc: "Every product starts as an idea — then gets engineered into a robust, production-ready system using modern frameworks and best practices.",
    accent: "cyan",
    detail: "React • Node.js • MongoDB",
  },
  {
    step: "02",
    icon: FiCpu,
    title: "Integrate Intelligence",
    desc: "AI isn't an afterthought — it's embedded at the core. From context-aware conversations to voice-controlled navigation, intelligence is native.",
    accent: "violet",
    detail: "Groq API • LLM • Voice AI",
  },
  {
    step: "03",
    icon: FiSend,
    title: "Ship & Evolve",
    desc: "Products are deployed, monitored, and continuously evolved. Every release is a step forward — performance-tuned and battle-tested.",
    accent: "blue",
    detail: "Vercel • CI/CD • Monitoring",
  },
];

const accentStyles = {
  cyan: {
    iconBg: "bg-cyan-400/[0.08] border-cyan-400/15",
    iconText: "text-cyan-400",
    stepText: "text-cyan-400/40",
    line: "from-cyan-400/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.06)]",
  },
  violet: {
    iconBg: "bg-violet-400/[0.08] border-violet-400/15",
    iconText: "text-violet-400",
    stepText: "text-violet-400/40",
    line: "from-violet-400/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(124,58,237,0.06)]",
  },
  blue: {
    iconBg: "bg-blue-400/[0.08] border-blue-400/15",
    iconText: "text-blue-400",
    stepText: "text-blue-400/40",
    line: "from-blue-400/30",
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]",
  },
};

const HowItWorks = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-violet-500/[0.025] rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400/60 font-mono text-[11px] tracking-[0.3em] uppercase mb-4">
            <span className="text-white/20">{'// '}</span>Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-white mb-5 tracking-tight">
            How FuncLexa <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-white/35 text-[15px] sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            From concept to deployment — every product follows a battle-tested engineering workflow.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item, i) => {
            const colors = accentStyles[item.accent];
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative p-7 sm:p-8 rounded-2xl
                           border border-white/[0.05] bg-white/[0.015]
                           hover:border-white/[0.1] hover:bg-white/[0.025]
                           ${colors.glow}
                           transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Step number */}
                <span className={`text-[11px] font-mono font-bold ${colors.stepText} tracking-[0.2em] uppercase`}>
                  Step {item.step}
                </span>
                
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${colors.iconBg} border
                                flex items-center justify-center ${colors.iconText} mt-5 mb-5
                                group-hover:scale-105 transition-transform duration-300`}>
                  <Icon size={18} />
                </div>

                {/* Content */}
                <h3 className="text-white/85 font-display font-semibold text-lg mb-3 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-white/35 text-[13px] leading-relaxed mb-5">
                  {item.desc}
                </p>

                {/* Tech detail */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/[0.04]">
                  <span className={`w-1 h-1 rounded-full ${colors.iconText} opacity-40`} />
                  <span className="text-[10px] font-mono text-white/20 tracking-wider uppercase">
                    {item.detail}
                  </span>
                </div>

                {/* Connector arrow (between cards on desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-10
                                  w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#030712] border border-white/[0.06]
                                  items-center justify-center text-white/15">
                    <FiArrowRight size={12} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
