import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const container = containerRef.current;

    let stars = [];
    let nebulaBands = [];
    let particles = [];
    let pulse = 0;
    let animationId;
    let resizeTimeout;

    // Function to get accurate viewport dimensions
    const getViewportSize = () => {
      return {
        width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      };
    };

    const resize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      resizeTimeout = setTimeout(() => {
        const { width, height } = getViewportSize();
        
        // Set canvas dimensions to exact pixel values
        canvas.width = width;
        canvas.height = height;
        
        // Reset elements
        initializeElements();
      }, 100);
    };

    const initializeElements = () => {
      stars = [];
      nebulaBands = [];
      particles = [];
      
      // Stars
      for (let i = 0; i < 160; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.1 + 0.2,
          o: Math.random() * 0.6 + 0.2,
        });
      }

      // Nebula Bands
      for (let i = 0; i < 4; i++) {
        nebulaBands.push({
          y: canvas.height * (0.35 + Math.random() * 0.3),
          x: Math.random() * canvas.width,
          width: Math.random() * 900 + 900,
          opacity: Math.random() * 0.12 + 0.05,
          speed: Math.random() * 0.06 + 0.02,
        });
      }

      // AI Signal Particles
      for (let i = 0; i < 120; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          v: Math.random() * 0.3 + 0.1,
          o: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(0,234,255,0.04)";
      ctx.lineWidth = 1;

      const gap = 80;
      for (let x = 0; x < canvas.width; x += gap) {
        ctx.beginPath();
        ctx.moveTo(x, canvas.height);
        ctx.lineTo(x, canvas.height * 0.6);
        ctx.stroke();
      }
    };

    const draw = () => {
      // Clear with full coverage
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Base background
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      stars.forEach((s) => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,245,255,${s.o})`;
        ctx.fill();
      });

      // Nebula
      nebulaBands.forEach((n) => {
        const grad = ctx.createLinearGradient(
          n.x,
          n.y - 120,
          n.x + n.width,
          n.y + 120
        );
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.5, `rgba(0,200,255,${n.opacity})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, n.y - 180, canvas.width, 360);

        n.x += n.speed;
        if (n.x > canvas.width + n.width) n.x = -n.width;
      });

      // Grid
      drawGrid();

      // Particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,234,255,${p.o})`;
        ctx.fill();

        p.y -= p.v;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });

      // Pulse
      pulse += 0.015;
      const pulseRadius = 180 + Math.sin(pulse) * 20;

      const coreGrad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        pulseRadius
      );
      coreGrad.addColorStop(0, "rgba(0,234,255,0.18)");
      coreGrad.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = coreGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(draw);
    };

    // Initial setup
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    
    // Start animation
    draw();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden"
      style={{ 
        width: '100vw', 
        height: '100vh',
        maxWidth: '100%',
        maxHeight: '100%'
      }}
    >
      <canvas
        ref={canvasRef}
        className="block absolute top-0 left-0"
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
};

export default Background;