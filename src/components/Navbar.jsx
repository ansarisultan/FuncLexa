import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AskAI from "./AskAI";
import { FiMenu, FiX } from "react-icons/fi";

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Ecosystem", href: "#featured" },
    { label: "Platform", href: "#about" },
    { label: "Projects", path: "/projects" },
    { label: "Journey", path: "/journey" },
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
        }, 400);
      } else {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
      <div className={`mx-3 sm:mx-6 lg:mx-8 rounded-2xl transition-all duration-500 
                       ${scrolled 
                         ? "bg-[#030712]/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-white/[0.06]" 
                         : "bg-transparent border-transparent"}
                       border`}>
        <div className="flex items-center justify-between px-5 sm:px-8 py-3.5">
          
          {/* Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate("/")}>
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center
                              shadow-[0_0_20px_rgba(34,211,238,0.25)] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                              transition-all duration-500 group-hover:scale-105">
                <span className="text-white font-black text-sm font-display">F</span>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border-[1.5px] border-[#030712]" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-display bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent
                             group-hover:from-cyan-300 group-hover:to-white transition-all duration-500">
                FuncLexa
              </h1>
              <p className="text-[9px] text-white/30 font-mono tracking-[0.25em] -mt-0.5 uppercase">v2.0 • ecosystem</p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((item) => {
              const isActive = item.path && location.pathname === item.path;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 rounded-lg text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-300
                    ${isActive 
                      ? "text-cyan-400 bg-cyan-400/[0.08]" 
                      : "text-white/45 hover:text-white/90 hover:bg-white/[0.04]"}`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full 
                                     shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:block">
              <AskAI />
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center
                         text-white/50 hover:text-cyan-400 hover:bg-white/[0.08] hover:border-cyan-400/20
                         transition-all duration-300"
            >
              {mobileOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out
                        ${mobileOpen ? "max-h-[500px] pb-5" : "max-h-0"}`}>
          <div className="mx-5 pt-2 border-t border-white/[0.04]">
            <div className="space-y-0.5 pt-3">
              {navLinks.map((item) => {
                const isActive = item.path && location.pathname === item.path;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300
                      ${isActive 
                        ? "text-cyan-400 bg-cyan-400/[0.08] border border-cyan-400/15" 
                        : "text-white/45 hover:text-white/80 hover:bg-white/[0.03] border border-transparent"}`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-4 px-4 sm:hidden">
              <AskAI />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
