// src/components/About.jsx
import React from "react";

const features = [
  {
    title: "Experience",
    highlight: "2+ Years",
    desc: "Creating ideas into intelligent web systems",
  },
  {
    title: "Projects",
    highlight: "4+",
    desc: "Active & evolving builds",
  },
  {
    title: "Focus",
    highlight: "Web & Mobile",
    desc: "AI-driven & scalable applications",
  },
  {
    title: "Approach",
    highlight: "Learn · Build · Share",
    desc: "Growth through real-world execution",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative px-6 sm:px-12 py-24 text-white overflow-hidden"
    >
      {/* Ambient AI glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400 uppercase tracking-widest">
        About FuncLexa
      </h2>

      <div className="relative flex flex-col sm:flex-row items-start justify-between max-w-7xl mx-auto gap-12">
        
        {/* Left side - About narrative */}
        <div className="sm:w-1/2 text-lg leading-relaxed text-gray-100 space-y-6">
  <p>
    FuncLexa is my personal web app and showcasing platform — a place where ideas are{" "}
    <span className="text-cyan-300 font-semibold">
      dreamed, coded, and shipped
    </span>{" "}
    as real, working applications.
  </p>
  <p>
    A key focus of FuncLexa is building{" "}
    <span className="text-cyan-300 font-semibold">
      AI-integrated web applications
    </span>{" "}
    alongside modern, scalable web systems using real-world technologies.
  </p>
  <p className="text-cyan-300 font-medium tracking-wide">
    “Dream it. Code it. Push it here.” — that’s the FuncLexa way.
  </p>
</div>


        {/* Right side - AI feature modules */}
        <div className="sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6
                        bg-gradient-to-br from-white/10 to-white/5
                        p-6 rounded-2xl backdrop-blur-xl
                        border border-cyan-400/20
                        shadow-[0_0_40px_rgba(0,234,255,0.15)]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl p-5
                         border border-cyan-400/30
                         bg-black/20
                         hover:border-cyan-300
                         hover:shadow-[0_0_20px_rgba(0,234,255,0.4)]
                         transition-all duration-300"
            >
              {/* AI accent line */}
              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

              <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-widest">
                {feature.title}
              </h3>
              <p className="text-white font-bold text-2xl mt-1">
                {feature.highlight}
              </p>
              <p className="text-sm text-gray-300 mt-1">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
