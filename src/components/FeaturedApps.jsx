import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// Import your images
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
const apps = [
 {
  title: "LexaChat AI – Developer-Focused Chat Assistant",
  desc: "A fast, intelligent AI chat application designed for developers. LexaChat delivers real-time coding assistance, explanations, and productivity-focused conversations using advanced LLM integration.",
  tags: ["React", "AI Chat", "LLMs", "Tailwind CSS", "Groq", "OpenAI"],
  image: project4,
  demo: "https://lexachat-funclexa.vercel.app/",
  github: "https://github.com/ansarisultan/",
},

  {
    title: "FuncLexa Core – Developer Portfolio",
    desc: "A dynamic showcase of my creative and technical work",
    tags: ["React.js", "Tailwind CSS", ],
    image: project2,
    demo: "/portfolio",
    github: "#",
  },
  {
    title: "Innovation Lab",
    desc: "Experimental projects pushing boundaries of web technology",
    tags: ["WebGL", "AI", "Web3"],
    image: project3,
    demo: "/projects",
    github: "https://github.com/ansarisultan/",
  },
];

const FeaturedApps = () => {
  return (
    <section
      id="featured"
      className="relative px-6 sm:px-12 py-24"
    >
      {/* Section glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan-400/10 blur-3xl rounded-full" />

      <h2 className="text-4xl font-bold text-center mb-14 text-cyan-400 uppercase tracking-widest">
        Featured Apps
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {apps.map((app, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden
                       backdrop-blur-xl bg-white/5
                       border border-white/10
                       hover:border-cyan-400/40
                       hover:shadow-[0_0_40px_rgba(0,234,255,0.2)]
                       transition-all duration-300"
          >
            {/* Image */}
            <img
              src={app.image}
              alt={app.title}
              className="h-48 w-full object-cover
                         group-hover:scale-105 transition-transform duration-500"
            />

            {/* Content */}
            <div className="px-6 py-5 h-full">
              <h3 className="text-xl font-bold text-white mb-2">
                {app.title}
              </h3>

              <p className="text-sm text-gray-300">
                {app.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {app.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-cyan-900/60 border border-cyan-400/30
                               text-cyan-200 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <a
                  href={app.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest
                             text-cyan-300 border border-cyan-400/40 rounded-lg
                             hover:bg-cyan-400/10
                             hover:shadow-[0_0_20px_rgba(0,234,255,0.6)]
                             transition-all duration-300"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                <a
                  href={app.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest
                             text-white/80 border border-white/20 rounded-lg
                             hover:text-cyan-300 hover:border-cyan-400/40
                             hover:shadow-[0_0_20px_rgba(0,234,255,0.4)]
                             transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedApps;
