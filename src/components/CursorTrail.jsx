// CursorTrail.jsx
import React, { useEffect, useState } from "react";

const CursorTrail = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };
      setDots((prev) => [...prev.slice(-17), newDot]); // Keep only last 15 dots
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="fixed w-3 h-3 rounded-full bg-blue-300 pointer-events-none opacity-80"
          style={{
            top: dot.y + "px",
            left: dot.x + "px",
            transform: "translate(-90%, -90%)",
            animation: "fade 0.2s ease-out forwards",
          }}
        />
      ))}

      <style>{`
        @keyframes fade {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.5); }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;
