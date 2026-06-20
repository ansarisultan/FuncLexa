import React, { useState } from "react";
import { useScrollReveal } from "../hooks/useAnimations";

const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "from-cyan-400 to-blue-500",
    barColor: "bg-gradient-to-r from-cyan-400 to-blue-500",
    skills: [
      { name: "React.js", level: 95 },
      { name: "JavaScript / ES6+", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Responsive Design", level: 93 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "from-purple-400 to-pink-500",
    barColor: "bg-gradient-to-r from-purple-400 to-pink-500",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication", level: 87 },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: "🛠️",
    color: "from-blue-400 to-cyan-500",
    barColor: "bg-gradient-to-r from-blue-400 to-cyan-500",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vite / Webpack", level: 85 },
      { name: "Electron", level: 78 },
      { name: "Vercel / Netlify", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    name: "AI & Innovation",
    icon: "🧠",
    color: "from-emerald-400 to-cyan-500",
    barColor: "bg-gradient-to-r from-emerald-400 to-cyan-500",
    skills: [
      { name: "Groq AI / LLMs", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "AI Chat Systems", level: 82 },
      { name: "Context Management", level: 78 },
    ],
  },
];

const SkillBar = ({ skill, visible, delay, barColor }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-white/60 text-xs font-medium">{skill.name}</span>
      <span className="text-white/25 text-[10px] font-mono">{skill.level}%</span>
    </div>
    <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full ${barColor} transition-all duration-1000 ease-out`}
        style={{
          width: visible ? `${skill.level}%` : "0%",
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  </div>
);

const Skills = () => {
  const [ref, visible] = useScrollReveal(0.1);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-emerald-400 font-mono text-xs tracking-[0.4em] uppercase mb-4">// Expertise</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Tools</span>
          </h2>
          <p className="text-white/30 text-lg max-w-xl mx-auto">Technologies I use daily to build production-grade applications.</p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-[280px_1fr] gap-8">

          {/* Tab selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left whitespace-nowrap transition-all duration-300 border
                  ${activeTab === i
                    ? `border-white/[0.08] bg-white/[0.04] text-white`
                    : "border-transparent text-white/30 hover:text-white/60 hover:bg-white/[0.02]"
                  }`}
              >
                <span className="text-xl">{cat.icon}</span>
                <div>
                  <p className="text-sm font-bold">{cat.name}</p>
                  <p className="text-[10px] text-white/20 font-mono">{cat.skills.length} skills</p>
                </div>
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="p-8 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skillCategories[activeTab].color} flex items-center justify-center text-lg`}>
                {skillCategories[activeTab].icon}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{skillCategories[activeTab].name}</h3>
                <p className="text-white/25 text-xs font-mono">Proficiency levels</p>
              </div>
            </div>

            <div className="space-y-5">
              {skillCategories[activeTab].skills.map((skill, i) => (
                <SkillBar
                  key={`${activeTab}-${i}`}
                  skill={skill}
                  visible={visible}
                  delay={i * 120}
                  barColor={skillCategories[activeTab].barColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
