// TiltCard.jsx
import React, { useState } from "react";

const TiltCard = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    setStyle({
      transform: `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
      `,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `,
      transition: "transform 0.4s ease",
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        transition: "transform 0.12s ease",
      }}
      className="relative w-64 h-64 rounded-2xl
                 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600
                 flex items-center justify-center
                 shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                 border border-white/20"
    >
      {/* AI glow layer */}
      <div
        className="absolute inset-0 rounded-2xl
                   bg-cyan-400/10 blur-xl
                   pointer-events-none"
        style={{ transform: "translateZ(20px)" }}
      />

      {/* Content */}
      <h2
        className="text-xl font-bold tracking-widest uppercase
                   text-white drop-shadow-[0_0_20px_rgba(0,234,255,0.6)]"
        style={{ transform: "translateZ(40px)" }}
      >
        AI MODULE
      </h2>
    </div>
  );
};

export default TiltCard;
