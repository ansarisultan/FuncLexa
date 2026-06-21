import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiBox, FiCpu, FiClock, FiActivity } from "react-icons/fi";

const metrics = [
  { icon: FiBox, number: 5, suffix: "+", label: "Production Apps", color: "text-cyan-400" },
  { icon: FiCpu, number: 4, suffix: "", label: "Ecosystem Platforms", color: "text-blue-400" },
  { icon: FiClock, number: 2, suffix: "+", label: "Years Engineering", color: "text-violet-400" },
  { icon: FiActivity, number: 99, suffix: "%", label: "System Uptime", color: "text-emerald-400" },
];

const AnimatedCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = Math.max(1, Math.floor(target / 30));
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 35);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Metrics = () => {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Top divider */}
      <div className="section-divider" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div 
                key={i} 
                className={`flex items-center gap-4 px-6 py-3
                            ${i < metrics.length - 1 ? "lg:border-r lg:border-white/[0.04]" : ""}`}
              >
                <div className={`w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] 
                                flex items-center justify-center ${metric.color} flex-shrink-0`}>
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    <AnimatedCounter target={metric.number} suffix={metric.suffix} />
                  </p>
                  <p className="text-[10px] text-white/30 font-mono tracking-[0.12em] uppercase mt-0.5">
                    {metric.label}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider" />
    </section>
  );
};

export default Metrics;
