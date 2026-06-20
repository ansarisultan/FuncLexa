import React, { useState, useEffect, useRef } from "react";

const stats = [
  { number: "7+", label: "Years Coding", icon: "⚡" },
  { number: "5+", label: "Live Projects", icon: "🚀" },
  { number: "4", label: "Ecosystem Apps", icon: "🌐" },
  { number: "∞", label: "Lines of Code", icon: "💻" },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "Express", category: "Backend" },
  { name: "Electron", category: "Desktop" },
  { name: "Tailwind", category: "Styling" },
  { name: "Groq AI", category: "AI/ML" },
  { name: "Vite", category: "Build" },
];

const AnimatedNumber = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const num = parseInt(target) || 0;
          if (num === 0) { setCount(target); return; }
          let current = 0;
          const increment = Math.max(1, Math.floor(num / 40));
          const timer = setInterval(() => {
            current += increment;
            if (current >= num) { setCount(num); clearInterval(timer); }
            else setCount(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{typeof count === 'number' ? count + suffix : count}</span>;
};

const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">// About</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            The <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">FuncLexa</span> System
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto leading-relaxed">
            A personal development ecosystem where ideas are dreamed, coded, and shipped as real, working applications.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="group relative p-6 sm:p-8 rounded-2xl text-center
                                    border border-white/[0.06] hover:border-cyan-400/30
                                    bg-white/[0.02] hover:bg-cyan-400/[0.03]
                                    transition-all duration-500 hover:-translate-y-1">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                <AnimatedNumber target={stat.number} suffix="+" />
              </div>
              <p className="text-xs sm:text-sm text-white/40 font-mono tracking-wider uppercase">{stat.label}</p>
              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left — Narrative */}
          <div className="space-y-8">
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                FuncLexa is my personal web app and showcasing platform — a place where ideas are{" "}
                <span className="text-cyan-400 font-semibold">dreamed, coded, and shipped</span>{" "}
                as real, working applications.
              </p>
              <p>
                A key focus of FuncLexa is building{" "}
                <span className="text-cyan-400 font-semibold">AI-integrated web applications</span>{" "}
                alongside modern, scalable web systems using real-world technologies.
              </p>
              <p className="text-white/80 font-medium italic border-l-2 border-cyan-400/40 pl-6">
                "Dream it. Code it. Push it here." — that's the FuncLexa way.
              </p>
            </div>

            {/* Philosophy cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Open Source", desc: "Building in public, sharing with the community", icon: "🔓" },
                { title: "AI-First", desc: "Every app integrates intelligent automation", icon: "🧠" },
                { title: "Full Stack", desc: "From database to deployment, end-to-end", icon: "📦" },
                { title: "Performance", desc: "Optimized for speed and user experience", icon: "⚡" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]
                                       hover:border-cyan-400/20 hover:bg-cyan-400/[0.02]
                                       transition-all duration-300">
                  <div className="text-xl mb-2">{item.icon}</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Tech Stack */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-sm">⚙</span>
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech, i) => (
                  <div key={i} className="group flex items-center gap-3 p-4 rounded-xl
                                          border border-white/[0.06] bg-white/[0.02]
                                          hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]
                                          transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.6)]
                                    group-hover:shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300" />
                    <div>
                      <p className="text-white font-semibold text-sm">{tech.name}</p>
                      <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal-style info */}
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="text-[10px] text-white/30 font-mono ml-2">system.info</span>
              </div>
              <div className="p-5 font-mono text-xs space-y-2 text-white/50">
                <p><span className="text-cyan-400">platform</span>: FuncLexa v2.0</p>
                <p><span className="text-cyan-400">status</span>: <span className="text-green-400">● online</span></p>
                <p><span className="text-cyan-400">ecosystem</span>: LexaChat, FuncSilo, FuncSpan, FLexa</p>
                <p><span className="text-cyan-400">stack</span>: MERN + Electron + AI</p>
                <p><span className="text-cyan-400">author</span>: Sultan Salauddin Ansari</p>
                <p><span className="text-cyan-400">philosophy</span>: "Build it. Ship it. Evolve it."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
