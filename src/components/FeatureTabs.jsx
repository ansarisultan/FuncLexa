import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { text: "Journey", hoverBorder: "hover:border-violet-500/30", dotColor: "bg-violet-400", link: "/journey" },
  { text: "Projects", hoverBorder: "hover:border-cyan-500/30", dotColor: "bg-cyan-400", link: "/projects" },
];

const FeatureTabs = () => {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-12 mt-4 flex flex-wrap gap-4 z-50 relative">
      {features.map((feat, index) => (
        <div
          key={index}
          onClick={() => navigate(feat.link)}
          className={`relative cursor-pointer group px-7 py-4 rounded-xl
            bg-white/[0.015] text-white/60 font-semibold tracking-[0.1em] uppercase text-xs
            border border-white/[0.06] ${feat.hoverBorder}
            hover:bg-white/[0.03] hover:text-white/90
            transform transition-all duration-300 hover:-translate-y-0.5 active:scale-95`}
        >
          <span className={`absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full ${feat.dotColor} animate-pulse`} />
          <span className="relative z-10 flex items-center gap-2.5">
            <span className={`w-1.5 h-1.5 rounded-full ${feat.dotColor}`} />
            {feat.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureTabs;
