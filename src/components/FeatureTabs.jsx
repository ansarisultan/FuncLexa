import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { text: "Portfolio", color: "from-purple-600 to-indigo-600", link: "/Portfolio" },
  { text: "Projects", color: "from-slate-700 to-slate-900", link: "/projects" },
];

const FeatureTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-12 mt-4 flex flex-wrap gap-6 z-50 relative">
      {features.map((feat, index) => (
        <div
          key={index}
          onClick={() => navigate(feat.link)}
          className={`
            relative cursor-pointer group
            px-8 py-5 rounded-2xl
            bg-gradient-to-br ${feat.color}
            text-white font-semibold tracking-widest uppercase text-sm
            border border-white/10
            backdrop-blur-md

            transform transition-all duration-300
            hover:-translate-y-1 hover:scale-[1.03]
            active:scale-95

            hover:shadow-[0_20px_50px_rgba(0,234,255,0.35)]
          `}
        >
          {/* Floating AI pulse dot */}
          <span
            className="absolute -top-2 -right-2 w-3 h-3 rounded-full
                       bg-cyan-400 animate-pulse"
          />

          {/* Animated scan line */}
          <div
            className="absolute inset-x-0 top-0 h-[2px]
                       bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                       opacity-60"
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl
                       bg-cyan-400/10 blur-xl
                       opacity-0 group-hover:opacity-100
                       transition duration-300"
          />

          {/* Inner content */}
          <span className="relative z-10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-300" />
            {feat.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureTabs;
