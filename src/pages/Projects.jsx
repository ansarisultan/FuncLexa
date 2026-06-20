import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import flexaVideo from "../assets/videos/flexa.mp4";
import whatVideo from "../assets/videos/what.mp4";
import lexachatVideo from "../assets/videos/lexachat.mp4";
import CustomCursor from "../components/CustomCursor";

import {
  FiShoppingCart,
  FiMessageSquare,
  FiGithub,
  FiGlobe,
  FiExternalLink,
  FiCode,
  FiDatabase,
  FiCpu,
  FiZap,
  FiLayers,
  FiCloud,
  FiShield,
  FiActivity,
  FiTrendingUp,
  FiUsers,
  FiLock,
  FiStar,
  FiPlay,
} from "react-icons/fi";

const techTag = (name, color) => (
  <span className={`px-3 py-1.5 text-sm font-medium rounded-lg ${color}`}>{name}</span>
);

const ProjectShowcaseCard = ({ project }) => {
  const [style, setStyle] = useState({});
  const [glowStyle, setGlowStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 45;
    const rotateY = (x - centerX) / 45;

    setStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: "transform 0.1s ease",
    });

    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 250px at ${x}px ${y}px, rgba(0, 234, 255, 0.15), transparent 80%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
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
      className={`relative overflow-hidden rounded-3xl border border-white/10 backdrop-blur-xl transition-all duration-300 ${project.gradientBg} shadow-[0_25px_60px_rgba(0,0,0,0.4)] hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(0,234,255,0.2)]`}
    >
      {/* Cursor Follow Glow */}
      <div className="absolute inset-0 pointer-events-none" style={glowStyle} />

      {/* Cyberpunk Top Ambient Line */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
      
      <div className="p-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Header & Basic Info */}
          <div className="lg:w-2/5 space-y-8" style={{ transform: "translateZ(20px)" }}>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg shadow-cyan-500/10`}>
                  {project.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">{project.name}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded-full border border-white/5">
                      <div className={`w-2 h-2 rounded-full ${project.status === "In Development" ? "bg-yellow-500 animate-pulse" : "bg-green-500 animate-pulse"}`}></div>
                      <span className="text-sm text-gray-300 font-light">{project.status}</span>
                    </div>
                    <span className="text-sm text-cyan-400 font-mono">v2.0.1</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 font-light leading-relaxed">{project.shortDesc}</p>

              {/* Media Demo Section */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-300 mb-3 flex items-center gap-2 font-sans tracking-wide">
                  {project.imageUrl ? <FiGlobe className="text-cyan-400" /> : <FiPlay className="text-cyan-400" />}
                  {project.imageUrl ? "Project Preview" : "Project Demo"}
                </h4>
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video 
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs text-gray-300 tracking-wider">
                          {project.imageUrl ? "PREVIEW IMAGE" : "DEMO VIDEO"}
                        </span>
                      </div>
                      {!project.imageUrl && <span className="text-xs text-cyan-400 font-mono">AUTO-PLAY</span>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden flex items-center justify-center gap-3 p-3.5 rounded-xl bg-gradient-to-r ${project.color} hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md shadow-cyan-500/10`}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FiGlobe className="text-lg" />
                  <span className="font-semibold tracking-wide">Launch Demo</span>
                  <FiExternalLink className="text-sm" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden flex items-center justify-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FiGithub className="text-lg" />
                  <span className="font-semibold tracking-wide">Explore Code</span>
                </a>
              </div>

              {/* Progress with Animation */}
              <div className="pt-6 border-t border-white/5 mt-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 font-light">System Integration</span>
                  <span className="font-mono text-cyan-400">{project.progress}%</span>
                </div>
                <div className="relative h-2 bg-black/40 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className={`absolute h-full bg-gradient-to-r ${project.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${project.progress}%` }}
                  />
                  <div className={`absolute h-full w-full bg-gradient-to-r ${project.color} opacity-20 animate-pulse`}></div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-4 mt-6">
                <h4 className="text-lg font-bold text-gray-300 flex items-center gap-2 font-sans tracking-wide">
                  <FiCpu className="text-cyan-400" />
                  Core Capabilities
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-black/20 border border-white/[0.02]">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                      <span className="text-sm text-gray-400 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Info & Technologies */}
          <div className="lg:w-3/5 space-y-8" style={{ transform: "translateZ(10px)" }}>
            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans tracking-wide">
                <FiLayers className="text-cyan-400" />
                Architecture Overview
              </h3>
              <p className="text-gray-300 leading-relaxed font-light text-justify">
                {project.longDesc}
              </p>
            </div>

            {/* Performance Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-black/30 border border-white/5 backdrop-blur-md">
                  <div className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">✓ {highlight}</div>
                </div>
              ))}
            </div>

            {/* Technology Stack */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 font-sans tracking-wide">
                <FiDatabase className="text-cyan-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <div key={index} className="relative group">
                    {techTag(tag.name, tag.color)}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 bg-gray-950 text-xs text-gray-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 whitespace-nowrap pointer-events-none shadow-lg">
                      Enterprise Grade
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "LexaChat AI",
      shortDesc: "Intelligent AI Virtual Assistant",
      longDesc:
        "LexaChat AI is an intelligent virtual assistant built as a flagship project under the FuncLexa ecosystem. It is designed for developers, learners, and productivity-focused users, offering fast, clear, and context-aware responses through a modern chat interface. The project focuses on clean frontend architecture, responsive UI/UX, seamless API integration, and real-time interaction. LexaChat AI showcases how modern AI-powered applications can be built with performance, scalability, and user experience in mind.",
      demoLink: "https://lexachat-funclexa.vercel.app",
      githubLink: "https://github.com/ansarisultan/lexachat",
      videoUrl: lexachatVideo,
      icon: <FiCpu className="text-3xl" />,
      color: "from-[#00eaff] via-[#9d4edd] to-[#00eaff]",
      gradientBg: "bg-gradient-to-br from-slate-950/40 via-cyan-950/20 to-purple-950/40",
      tags: [
        { name: "React", color: "bg-gradient-to-r from-blue-700 to-cyan-600" },
        { name: "Vite", color: "bg-gradient-to-r from-purple-700 to-fuchsia-600" },
        { name: "Tailwind CSS", color: "bg-gradient-to-r from-cyan-700 to-sky-600" },
        { name: "JavaScript", color: "bg-gradient-to-r from-yellow-600 to-amber-500" },
        { name: "API Integration", color: "bg-gradient-to-r from-emerald-700 to-teal-600" },
        { name: "AI Assistant", color: "bg-gradient-to-r from-indigo-700 to-violet-600" }
      ],
      status: "Active Development",
      progress: 70,
      features: [
        "Real-Time AI Chat Interface",
        "Developer-Focused Virtual Assistant",
        "Responsive & Futuristic UI",
        "Fast API-Based Responses",
        "Clean Component Architecture",
        "Scalable Frontend Structure"
      ],
      highlights: [
        "Flagship AI project under FuncLexa",
        "Built with modern React & Vite stack",
        "Futuristic UI with Tailwind CSS",
        "Optimized for speed and productivity",
        "Designed for real-world AI use cases"
      ]
    },
    {
      id: 2,
      name: "FuncSpan",
      shortDesc: "A deep-dive developer sandbox built to intercept live API payloads, inject HTTP status codes, and simulate custom network latency.",
      longDesc:
        "FuncSpan is a full-stack developer utility and network simulation engine operating as a core submodule within the FuncSilo ecosystem. It enables real-time HTTP traffic inspection, artificial latency injection, response payload hotwiring, and custom API error state simulation for robust client-side edge-case testing. Designed with wild-card CORS configurations, it helps engineers pressure-test API integrations instantly without external databases or token verification pipelines.",
      demoLink: "https://funcspan.funclexa.dev/",
      githubLink: "https://github.com/ansarisultan/",
      imageUrl: "/funcspan.png",
      icon: <FiActivity className="text-3xl" />,
      color: "from-rose-500 via-red-500 to-amber-600",
      gradientBg: "bg-gradient-to-br from-slate-950/40 via-red-950/15 to-slate-950/40",
      tags: [
        { name: "React", color: "bg-gradient-to-r from-blue-700 to-cyan-600" },
        { name: "Node.js", color: "bg-gradient-to-r from-green-700 to-emerald-600" },
        { name: "Proxy Engine", color: "bg-gradient-to-r from-purple-700 to-indigo-600" },
        { name: "Traffic Inspector", color: "bg-gradient-to-r from-amber-700 to-yellow-600" }
      ],
      status: "Active Development",
      progress: 85,
      features: [
        "Real-Time HTTP Traffic Inspection",
        "Artificial Latency Injection",
        "Wildcard CORS Configurations",
        "Response Payload Hotwiring",
        "Custom Error State Simulation",
        "Scenario Saving & Loading"
      ],
      highlights: [
        "Subdomain-isolated testing sandbox",
        "No external database required",
        "Draggable workspace UI components",
        "Real-time traffic visualizer"
      ]
    },
    {
      id: 3,
      name: "FuncSilo",
      shortDesc: "A premium developer sandbox workspace featuring high-fidelity custom design systems, responsive component templates, and isolated asset pipelines.",
      longDesc:
        "FuncSilo is a premium developer productivity suite designed to act as a centralized assets hub for modern engineering teams. It allows developers to store, manage, and retrieve reusable React component architectures, high-fidelity UI templates, utility hook collections, and custom asset assets. Built with a focus on ease-of-use and low-latency search capabilities, FuncSilo streamlines the workflow from mockups to production-ready deployments.",
      demoLink: "https://funcsilo.funclexa.dev/",
      githubLink: "https://github.com/ansarisultan/",
      imageUrl: "/funcsilo.png",
      icon: <FiLayers className="text-3xl" />,
      color: "from-amber-500 via-orange-500 to-yellow-500",
      gradientBg: "bg-gradient-to-br from-slate-950/40 via-amber-950/15 to-slate-950/40",
      tags: [
        { name: "React", color: "bg-gradient-to-r from-blue-700 to-cyan-600" },
        { name: "Tailwind CSS", color: "bg-gradient-to-r from-cyan-700 to-sky-600" },
        { name: "Design Studio", color: "bg-gradient-to-r from-purple-700 to-indigo-600" },
        { name: "Asset Manager", color: "bg-gradient-to-r from-emerald-700 to-teal-600" }
      ],
      status: "Completed",
      progress: 100,
      features: [
        "High-Fidelity UI Component Library",
        "Drag-and-Drop Asset Organization",
        "Instant Metadata Search Engine",
        "Live Code Snippet Playground",
        "Localstorage Sync & Backups",
        "Design Token Theme Generator"
      ],
      highlights: [
        "Global rebranding to FuncSilo completed",
        "Fully responsive workspace panels",
        "Optimized theme customization studio",
        "Lightweight performance footprint"
      ]
    },
    {
      id: 4,
      name: "Flexa – AI Virtual Assistant",
      shortDesc: "AI-Integrated Virtual Assistant by FuncLexa",
      longDesc:
        "Flexa is an AI-powered virtual assistant built as a flagship FuncLexa project to demonstrate intelligent, context-aware interactions in modern web applications. It supports both voice and text-based conversations, multilingual understanding, and real-time command execution. Flexa can answer user queries, assist with navigation, automate simple workflows, and integrate seamlessly with web applications. Designed with a modular and scalable architecture, Flexa combines frontend intelligence, backend logic, and AI APIs to deliver a responsive and human-like user experience suitable for real-world web platforms.",
      demoLink: "https://flexaai-funclexa.vercel.app/",
      githubLink: "https://github.com/ansarisultan/Flexa",
      videoUrl: flexaVideo,
      icon: <FaRobot className="text-3xl" />,
      color: "from-cyan-600 via-blue-600 to-indigo-700",
      gradientBg: "bg-gradient-to-br from-slate-950/40 via-cyan-950/10 to-slate-950/40",
      tags: [
        { name: "React 18", color: "bg-gradient-to-r from-blue-700 to-cyan-600" },
        { name: "Tailwind CSS", color: "bg-gradient-to-r from-cyan-700 to-sky-600" },
        { name: "Node.js", color: "bg-gradient-to-r from-green-700 to-emerald-600" },
        { name: "Express.js", color: "bg-gradient-to-r from-gray-700 to-gray-900" },
        { name: "AI APIs (LLMs)", color: "bg-gradient-to-r from-purple-700 to-indigo-600" },
        { name: "Web Speech API", color: "bg-gradient-to-r from-pink-700 to-rose-600" },
        { name: "MongoDB", color: "bg-gradient-to-r from-emerald-700 to-teal-600" },
        { name: "WebSocket", color: "bg-gradient-to-r from-slate-700 to-black" }
      ],
      status: "Completed",
      progress: 95,
      features: [
        "Voice & Text Based AI Interaction",
        "Language & Accent Support",
        "Context-Aware Responses",
        "Real-Time Query Handling",
        "Web App Navigation Assistance",
        "Modular AI Architecture"
      ],
      highlights: [
        "Real-time AI responses with low latency",
        "Designed for scalable web integration",
        "Supports both voice and text input",
        "Clean and intuitive conversational UI",
        "Flagship AI project under FuncLexa"
      ]
    },
    {
      id: 5,
      name: "FuncLexa Web Chat",
      shortDesc: "Real-Time Chat Application by FuncLexa",
      longDesc:
        "FuncLexa Web Chat is a real-time messaging application built as a core FuncLexa project to demonstrate full-stack development and real-time communication using modern web technologies. The application supports one-to-one and group messaging with live message updates powered by WebSockets. It features user authentication, message persistence, online/offline status indicators, and a clean, responsive chat interface. Designed with scalability and performance in mind, FuncLexa Web Chat showcases practical implementation of real-time systems in modern web applications.",
      demoLink: "https://funcwebchat.netlify.app",
      githubLink: "https://github.com/ansarisultan/funcelexa-chat",
      videoUrl: whatVideo,
      icon: <FiMessageSquare className="text-3xl" />,
      color: "from-purple-600 via-pink-500 to-purple-700",
      gradientBg: "bg-gradient-to-br from-slate-950/40 via-purple-950/15 to-slate-950/40",
      tags: [
        { name: "React", color: "bg-gradient-to-r from-blue-700 to-cyan-600" },
        { name: "Node.js", color: "bg-gradient-to-r from-green-700 to-emerald-600" },
        { name: "Express.js", color: "bg-gradient-to-r from-gray-700 to-gray-900" },
        { name: "Socket.IO", color: "bg-gradient-to-r from-slate-700 to-black" },
        { name: "MongoDB", color: "bg-gradient-to-r from-emerald-700 to-teal-600" },
        { name: "JWT Authentication", color: "bg-gradient-to-r from-yellow-700 to-amber-600" },
        { name: "REST APIs", color: "bg-gradient-to-r from-indigo-700 to-purple-600" }
      ],
      status: "In Progress",
      progress: 40,
      features: [
        "Real-Time One-to-One Messaging",
        "Group Chat Support",
        "User Authentication & Authorization",
        "Online / Offline User Status",
        "Persistent Message Storage",
        "Responsive Chat Interface"
      ],
      highlights: [
        "Built using MERN stack with Socket.IO",
        "Real-time message delivery without page refresh",
        "Clean and user-friendly chat UI",
        "Scalable backend architecture",
        "Flagship real-time project under FuncLexa"
      ]
    }
  ];

  const metrics = [
    { icon: <FiZap />, value: "Live", label: "Active Development" },
    { icon: <FiUsers />, value: "Personal", label: "Developer-Centric Platform" },
    { icon: <FiTrendingUp />, value: "Rapid", label: "Iteration & Improvement" },
    { icon: <FiLock />, value: "Best Practices", label: "Secure Coding" },
    { icon: <FiStar />, value: "Portfolio", label: "Project Showcase" },
    { icon: <FiActivity />, value: "Optimized", label: "Performance Focus" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#04152e] to-[#020617] text-white px-4 py-6 md:px-8 md:py-10">
      <CustomCursor />
      {/* Header with Glitch Effect */}
      <div className="relative mb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient tracking-wider">
            FUNCLEXA
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            <p className="text-lg md:text-xl text-cyan-400 font-medium tracking-[0.25em] uppercase">
              INNOVATION DEVELOPMENT SUITE
            </p>
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>
        </div>
        
        {/* Neural Network Animation */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: `-${i * 10}%`,
                width: `120%`,
                animation: `neuralFlow ${3 + i}s linear infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Platform Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white/[0.02] to-white/[0.01] p-5 rounded-2xl border border-white/5 backdrop-blur-md text-center group hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(0,234,255,0.1)] transition-all duration-300"
          >
            <div className="text-cyan-400 text-3xl mb-2 group-hover:scale-110 transition-transform">
              {metric.icon}
            </div>
            <div className="text-2xl font-bold text-white mb-1 tracking-wide">{metric.value}</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">{metric.label}</div>
          </div>
        ))}
      </div>

      {/* Platform Description */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">
          <span className="text-cyan-400 uppercase">FUNCLEXA POWERED</span> PROJECTS
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed font-light">
          Innovative digital solutions built with modern web technologies and AI integration.
          Each project focuses on real-world problem solving, interactive user experiences, and scalable system design.
          Now featuring video demonstrations for each project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-cyan-400">
            <FiLayers />
            <span className="text-sm font-light">AI-Integrated Web Systems</span>
          </div>
          <div className="flex items-center gap-2 text-purple-400">
            <FiShield />
            <span className="text-sm font-light">Secure Application Design</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <FiCloud />
            <span className="text-sm font-light">Scalable Web Architecture</span>
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="space-y-12 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectShowcaseCard key={project.id} project={project} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
              FUNCLEXA ECOSYSTEM
            </div>
            <p className="text-sm text-gray-500 mt-2">© {new Date().getFullYear()} An AI Development Suite</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/ansarisultan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/10"
            >
              <FiGithub className="text-xl" />
            </a>
            <a 
              href="https://funclexa.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors p-3 rounded-full bg-white/[0.02] border border-white/5 hover:border-white/10"
            >
              <FiGlobe className="text-xl" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#030712] border border-white/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs text-gray-400 font-mono">SYSTEM STATUS: OPERATIONAL • RESPONSE TIME: &lt;50ms</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes neuralFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;