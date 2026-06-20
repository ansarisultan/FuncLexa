import React from "react";
import { useScrollReveal } from "../hooks/useAnimations";

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    desc: "Started learning HTML, CSS, and JavaScript. Built my first static websites and fell in love with code.",
    icon: "🔥",
    color: "from-orange-400 to-red-500",
  },
  {
    year: "2021",
    title: "Going Full-Stack",
    desc: "Mastered the MERN stack — MongoDB, Express, React, Node.js. Built real-world applications with authentication, databases, and APIs.",
    icon: "⚡",
    color: "from-yellow-400 to-orange-500",
  },
  {
    year: "2023",
    title: "FuncLexa Born",
    desc: "Created FuncLexa as my personal developer ecosystem. A platform to dream, code, and ship production-grade applications.",
    icon: "🚀",
    color: "from-cyan-400 to-blue-500",
  },
  {
    year: "2024",
    title: "AI Integration",
    desc: "Integrated Groq AI into LexaChat, built context-aware conversational engines, and explored Electron for desktop architectures.",
    icon: "🧠",
    color: "from-purple-400 to-pink-500",
  },
  {
    year: "2025",
    title: "Ecosystem Expansion",
    desc: "Launched FuncSilo, FuncSpan, and FLexa. The FuncLexa ecosystem now powers multiple production applications.",
    icon: "🌐",
    color: "from-blue-400 to-cyan-500",
  },
  {
    year: "Now",
    title: "Always Building",
    desc: "Continuously evolving the ecosystem. Open source. Learning every day. The journey never stops.",
    icon: "∞",
    color: "from-emerald-400 to-cyan-400",
  },
];

const TimelineItem = ({ milestone, index }) => {
  const [ref, visible] = useScrollReveal(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center gap-8 transition-all duration-700 ease-out
                               ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
         style={{ transitionDelay: `${index * 100}ms` }}>

      {/* Desktop layout */}
      <div className={`hidden lg:flex w-full items-center ${isLeft ? "" : "flex-row-reverse"}`}>
        {/* Content */}
        <div className={`w-[45%] ${isLeft ? "text-right pr-12" : "text-left pl-12"}`}>
          <span className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3
                           bg-gradient-to-r ${milestone.color} text-white/90`}>
            {milestone.year}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
          <p className="text-white/35 text-sm leading-relaxed">{milestone.desc}</p>
        </div>

        {/* Center dot */}
        <div className="relative z-10 w-[10%] flex justify-center">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${milestone.color} flex items-center justify-center text-xl
                          shadow-lg`}>
            {milestone.icon}
          </div>
        </div>

        {/* Empty space */}
        <div className="w-[45%]" />
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden flex items-start gap-5">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center text-base`}>
          {milestone.icon}
        </div>
        <div>
          <span className={`inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-2
                           bg-gradient-to-r ${milestone.color} text-white/90`}>
            {milestone.year}
          </span>
          <h3 className="text-base font-bold text-white mb-1">{milestone.title}</h3>
          <p className="text-white/35 text-xs leading-relaxed">{milestone.desc}</p>
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Header */}
        <div ref={ref} className={`text-center mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-purple-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">// Journey</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            The <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Path</span> So Far
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">From writing my first line of code to building an entire developer ecosystem.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

          {/* Left line — mobile */}
          <div className="lg:hidden absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((m, i) => (
              <TimelineItem key={i} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
