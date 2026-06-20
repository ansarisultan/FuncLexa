import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { text: "Portfolio", hoverBorder: "hover:border-purple-500/50", hoverShadow: "hover:shadow-[0_0_30px_rgba(124,77,255,0.3)]", dotColor: "bg-purple-400", link: "/portfolio" },
  { text: "Projects", hoverBorder: "hover:border-cyan-500/50", hoverShadow: "hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]", dotColor: "bg-cyan-400", link: "/projects" },
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
            bg-[#041226]/20
            text-white font-semibold tracking-widest uppercase text-sm
            border border-white/[0.08]
            ${feat.hoverBorder}
            ${feat.hoverShadow}

            transform transition-all duration-300
            hover:-translate-y-1 hover:scale-[1.03]
            active:scale-95
          `}
        >
          {/* Floating AI pulse dot */}
          <span
            className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full ${feat.dotColor} animate-pulse`}
          />

          {/* Animated scan line */}
          <div
            className="absolute inset-x-0 top-0 h-[1px]
                       bg-gradient-to-r from-transparent via-cyan-400 to-transparent
                       opacity-60"
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-2xl
                       bg-cyan-400/5 blur-xl
                       opacity-0 group-hover:opacity-100
                       transition duration-300"
          />

          {/* Inner content */}
          <span className="relative z-10 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${feat.dotColor}`} />
            {feat.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureTabs;
