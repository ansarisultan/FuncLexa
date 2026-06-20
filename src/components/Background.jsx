import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    const container = containerRef.current;
    let stars = [];
    let animationId;
    let resizeTimeout;

    // Mouse coordinates
    let mouse = { x: null, y: null };

    const getViewportSize = () => {
      return {
        width: document.documentElement.clientWidth || window.innerWidth || 0,
        height: document.documentElement.clientHeight || window.innerHeight || 0
      };
    };

    const resize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        const { width, height } = getViewportSize();
        
        canvas.width = width;
        canvas.height = height;
        
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        
        if (container) {
          container.style.width = `${width}px`;
          container.style.height = `${height}px`;
        }
        
        initializeElements();
      }, 100);
    };

    const initializeElements = () => {
      stars = [];
      const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        const isCyan = Math.random() > 0.4;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.4 + 0.15,
          color: isCyan ? "#00E5FF" : "#7C4DFF",
          offset: Math.random() * 100, // Horizontal oscillation phase offset
        });
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const draw = () => {
      c.clearRect(0, 0, canvas.width, canvas.height);
      
      // Deep cybernetic background color
      c.fillStyle = "#020617";
      c.fillRect(0, 0, canvas.width, canvas.height);

      // 1. Draw connecting lines between close stars (plexus effect)
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = dx * dx + dy * dy; // Avoid Math.sqrt for performance

          if (dist < 4900) { // 70px threshold (70 * 70)
            const alpha = (1 - Math.sqrt(dist) / 70) * 0.08;
            c.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
            c.lineWidth = 0.5;
            c.beginPath();
            c.moveTo(stars[i].x, stars[i].y);
            c.lineTo(stars[j].x, stars[j].y);
            c.stroke();
          }
        }
      }

      // 2. Draw stars & mouse connection lines
      stars.forEach((star) => {
        c.fillStyle = star.color;
        c.beginPath();
        c.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        c.fill();

        // Mouse interactive connection
        if (mouse.x !== null && mouse.y !== null) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = dx * dx + dy * dy;

          if (dist < 14400) { // 120px threshold (120 * 120)
            const alpha = (1 - Math.sqrt(dist) / 120) * 0.22;
            c.strokeStyle = star.color === "#00E5FF" 
              ? `rgba(0, 229, 255, ${alpha})` 
              : `rgba(124, 77, 255, ${alpha})`;
            c.lineWidth = 0.7;
            c.beginPath();
            c.moveTo(star.x, star.y);
            c.lineTo(mouse.x, mouse.y);
            c.stroke();
          }
        }

        // Star upwards translation
        star.y -= star.speed;
        // Star wave oscillation
        star.x += Math.sin(star.y * 0.008 + star.offset) * 0.15;

        // Reset off-screen particles
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
      });

      animationId = requestAnimationFrame(draw);
    };

    // Initialize & Attach Event Listeners
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-[#020617]"
      style={{ 
        width: '100%', 
        height: '100vh',
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    >
      <canvas
        ref={canvasRef}
        className="block absolute top-0 left-0"
        style={{
          display: 'block'
        }}
      />
    </div>
  );
};

export default Background;