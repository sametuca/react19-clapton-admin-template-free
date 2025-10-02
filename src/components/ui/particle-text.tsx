import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParticleTextProps {
  text: string;
  className?: string;
  particleColor?: string;
  particleSize?: number;
  animationDuration?: number;
  trigger?: boolean;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export function ParticleText({
  text,
  className,
  particleColor = '#3b82f6',
  particleSize = 2,
  animationDuration = 3000,
  trigger = false
}: ParticleTextProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (trigger && !isAnimating) {
      startAnimation();
    }
  }, [trigger]);

  const startAnimation = () => {
    const canvas = canvasRef.current;
    const textElement = textRef.current;
    if (!canvas || !textElement) return;

    setIsAnimating(true);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = textElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Create text particles
    ctx.font = getComputedStyle(textElement).font;
    ctx.fillStyle = particleColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Get pixel data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    // Create particles from text pixels
    particlesRef.current = [];
    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const index = (y * canvas.width + x) * 4;
        if (pixels[index + 3] > 128) { // Alpha threshold
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: x,
            targetY: y,
            vx: 0,
            vy: 0,
            life: 0,
            maxLife: animationDuration / 16
          });
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        
        particle.vx += dx * 0.02;
        particle.vy += dy * 0.02;
        
        particle.vx *= 0.95;
        particle.vy *= 0.95;
        
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        particle.life++;
        
        // Draw particle
        const alpha = Math.max(0, 1 - particle.life / particle.maxLife);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Remove dead particles
      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);
      
      if (particlesRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animate();
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        ref={textRef}
        className={cn(
          "relative z-10 font-bold text-4xl",
          isAnimating && "opacity-0"
        )}
      >
        {text}
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}
