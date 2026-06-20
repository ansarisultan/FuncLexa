import React, { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [text, setText] = useState('');
  const [showText, setShowText] = useState(false);
  
  const trailRef = useRef(null);

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    // Show cursor after a small delay to prevent flash
    const timer = setTimeout(() => setIsVisible(true), 100);

    // Mouse move handler with smooth trail
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      setPosition({ x, y });
      
      // Update trail with slight delay for smooth effect
      if (trailRef.current) {
        clearTimeout(trailRef.current);
      }
      trailRef.current = setTimeout(() => {
        setTrailPosition({ x, y });
      }, 50);
    };

    // Mouse over handler for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') return;

      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.cursor-pointer') ||
        target.closest('.interactive') ||
        target.closest('.sidebar-item') ||
        target.closest('.panel-3d') ||
        target.closest('.btn-3d') ||
        target.closest('.glass-panel') ||
        target.closest('[role="button"]') ||
        target.closest('.hover\\:scale-\\[1\\.02\\]') ||
        target.closest('.transition-all') ||
        (typeof target.getAttribute === 'function' && (
          target.getAttribute('role') === 'button' ||
          target.getAttribute('role') === 'link' ||
          target.getAttribute('data-cursor') === 'interactive' ||
          target.getAttribute('data-cursor-text')
        ));

      setIsHovering(!!isInteractive);

      // Get custom text if available
      const cursorText = typeof target.getAttribute === 'function' ? target.getAttribute('data-cursor-text') : null;
      if (cursorText) {
        setText(cursorText);
        setShowText(true);
      } else {
        setText('');
        setShowText(false);
      }
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      setIsHovering(false);
      setShowText(false);
      setText('');
    };

    // Click handlers
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Mouse leave window
    const handleWindowLeave = () => {
      setIsVisible(false);
    };

    const handleWindowEnter = () => {
      setIsVisible(true);
    };

    // Attach event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleWindowLeave);
    window.addEventListener('mouseenter', handleWindowEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleWindowLeave);
      window.removeEventListener('mouseenter', handleWindowEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (trailRef.current) {
        clearTimeout(trailRef.current);
      }
    };
  }, []);

  // Don't render on touch devices or when not visible
  if (!isVisible) return null;

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-75"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: `scale(${isClicking ? 0.7 : isHovering ? 1.4 : 1})`,
          willChange: 'transform',
        }}
      >
        <div className="relative">
          {/* Outer Glow Ring */}
          <div 
            className={`absolute inset-[-12px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
              isHovering ? 'opacity-60 blur-xl scale-150' : 'opacity-20 blur-md scale-100'
            }`}
            style={{
              willChange: 'transform, opacity',
            }}
          />

          {/* Inner Ring */}
          <div 
            className={`w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${
              isHovering ? 'scale-150' : 'scale-100'
            }`}
            style={{
              willChange: 'transform',
              boxShadow: isHovering ? '0 0 30px rgba(0,229,255,0.3)' : 'none',
            }}
          />

          {/* Center Dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 ${
                isClicking ? 'scale-75' : 'scale-100'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Trail Effect */}
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-200"
        style={{
          left: trailPosition.x - 20,
          top: trailPosition.y - 20,
          opacity: isHovering ? 0.5 : 0.2,
          transform: `scale(${isClicking ? 0.5 : isHovering ? 1.3 : 0.9})`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="w-10 h-10 rounded-full border border-cyan-500/20 animate-pulse" />
      </div>

      {/* Multiple Trail Rings for depth */}
      <div
        className="fixed pointer-events-none z-[9997] transition-all duration-300"
        style={{
          left: position.x - 30,
          top: position.y - 30,
          opacity: isHovering ? 0.3 : 0.1,
          transform: `scale(${isHovering ? 1.2 : 0.8})`,
          willChange: 'transform, opacity',
        }}
      >
        <div className="w-[60px] h-[60px] rounded-full border border-purple-500/10 animate-pulse" />
      </div>

      {/* Text Label on Hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9996] transition-opacity duration-200"
          style={{
            left: position.x + 18,
            top: position.y - 12,
            willChange: 'transform, opacity',
          }}
        >
          <div className="text-[10px] font-mono text-cyan-400 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-cyan-500/20 whitespace-nowrap shadow-[0_0_30px_rgba(0,229,255,0.1)]">
            {showText ? text : '✦ interactive'}
          </div>
        </div>
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9995]"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-cyan-400/50 animate-ping" />
        </div>
      )}
    </>
  );
}
