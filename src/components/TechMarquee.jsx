import React from "react";

const techItems = [
  "React", "Node.js", "MongoDB", "Express", "Electron", "Tailwind CSS",
  "Groq AI", "Vite", "Socket.IO", "REST APIs", "LLM Integration", "Framer Motion",
  "JavaScript", "TypeScript", "HTML5", "CSS3", "Git", "Vercel",
];

const MarqueeRow = ({ items, direction = "left", speed = 30 }) => {
  const duplicated = [...items, ...items];
  
  return (
    <div className="relative overflow-hidden py-3 group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-[#030712] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-[#030712] to-transparent pointer-events-none" />
      
      <div 
        className={`flex gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}
                    group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                       border border-white/[0.04] bg-white/[0.015]
                       hover:border-cyan-400/15 hover:bg-white/[0.03]
                       transition-all duration-300 cursor-default whitespace-nowrap select-none"
          >
            <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
            <span className="text-[11px] sm:text-xs font-medium text-white/35 tracking-wide
                             hover:text-white/60 transition-colors duration-300">
              {item}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

const TechMarquee = () => {
  const firstRow = techItems.slice(0, 9);
  const secondRow = techItems.slice(9);

  return (
    <section className="relative py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-8">
        <p className="text-center text-white/15 text-[10px] font-mono tracking-[0.25em] uppercase">
          Built With Industry-Leading Technologies
        </p>
      </div>
      
      <div className="space-y-2">
        <MarqueeRow items={firstRow} direction="left" speed={30} />
        <MarqueeRow items={secondRow} direction="right" speed={35} />
      </div>
    </section>
  );
};

export default TechMarquee;
