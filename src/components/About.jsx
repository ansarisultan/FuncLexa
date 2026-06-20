import React, { useState } from "react";

const features = [
  {
    title: "Experience",
    highlight: "7+ Years Coding",
    desc: "Creating ideas into intelligent web systems",
  },
  {
    title: "Projects",
    highlight: "5+",
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

const FeatureCard = ({ feature }) => {
  const [style, setStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    setStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: "transform 0.1s ease",
    });

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 100px at ${x}px ${y}px, rgba(0, 234, 255, 0.2), transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
    });
    setGlowStyle({
      opacity: 0,
      transition: "opacity 0.5s ease",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-xl p-5
                 border border-white/[0.08]
                 bg-[#041226]/20
                 hover:border-cyan-400/40
                 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]
                 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Follow glow */}
      <div className="absolute inset-0 pointer-events-none rounded-xl" style={glowStyle} />

      {/* AI accent line */}
      <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

      <h3 className="text-cyan-400 font-semibold text-xs uppercase tracking-widest" style={{ transform: "translateZ(10px)" }}>
        {feature.title}
      </h3>
      <p className="text-white font-bold text-2xl mt-1" style={{ transform: "translateZ(20px)" }}>
        {feature.highlight}
      </p>
      <p className="text-sm text-gray-300 mt-1" style={{ transform: "translateZ(15px)" }}>
        {feature.desc}
      </p>
    </div>
  );
};

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

      <div className="relative flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-12">
        
        {/* Left side - About narrative */}
        <div className="w-full lg:w-1/2 text-lg leading-relaxed text-gray-100 space-y-6">
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
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6
                        bg-[#041226]/20
                        p-6 rounded-2xl
                        border border-white/[0.08]
                        shadow-[0_0_20px_rgba(0,229,255,0.15),0_0_50px_rgba(0,229,255,0.08)]">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
