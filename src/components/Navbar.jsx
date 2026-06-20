import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AskAI from "./AskAI";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Projects", path: "/projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (item) => {
    setMobileOpen(false);
    if (item.path) {
      navigate(item.path);
    } else if (item.href) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
      <div className={`mx-3 sm:mx-6 rounded-2xl transition-all duration-500 
                       ${scrolled 
                         ? "bg-[#020617]/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,229,255,0.12)]" 
                         : "bg-transparent"}
                       border border-white/[0.06]`}>
        <div className="flex items-center justify-between px-5 sm:px-8 py-4">
          
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center
                              shadow-[0_0_20px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]
                              transition-all duration-300 group-hover:scale-110">
                <span className="text-white font-black text-lg">F</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-[#020617] animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                FuncLexa
              </h1>
              <p className="text-[10px] text-cyan-400/60 font-mono tracking-[0.3em] -mt-0.5">V2.0 • ONLINE</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = item.path && location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300
                    ${isActive 
                      ? "text-cyan-400 bg-cyan-400/10" 
                      : "text-white/60 hover:text-white hover:bg-white/5"}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-cyan-400 rounded-full 
                                     shadow-[0_0_10px_rgba(0,229,255,0.8)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <AskAI />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1.5 
                         hover:bg-white/10 transition-all duration-300"
            >
              <span className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-5 h-0.5 bg-cyan-400 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
          <div className="px-5 space-y-1">
            {navLinks.map((item) => {
              const isActive = item.path && location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300
                    ${isActive 
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/20" 
                      : "text-white/60 hover:text-white hover:bg-white/5"}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2 sm:hidden">
              <AskAI />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
