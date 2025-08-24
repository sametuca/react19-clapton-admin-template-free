import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface HolographicCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function HolographicCard({
  title,
  description,
  icon: Icon,
  children,
  className,
  intensity = 0.3
}: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / centerY * -10 * intensity;
    const rotateY = (x - centerX) / centerX * 10 * intensity;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100 
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowPosition({ x: 50, y: 50 });
  };

  return (
    <div className="perspective-1000">
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative overflow-hidden transition-all duration-300 ease-out cursor-pointer",
          "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
          "border border-slate-700/50 shadow-2xl",
          className
        )}
        style={{ transform }}
      >
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, 
              rgba(59, 130, 246, 0.4) 0%, 
              rgba(147, 51, 234, 0.3) 25%, 
              rgba(236, 72, 153, 0.2) 50%, 
              transparent 70%)`
          }}
        />
        
        {/* Animated border gradient */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-pulse" 
             style={{ padding: '1px' }}>
          <div className="w-full h-full bg-slate-900 rounded-lg" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <CardHeader>
            <div className="flex items-center gap-3">
              {Icon && (
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm">
                  <Icon className="h-5 w-5 text-blue-400" />
                </div>
              )}
              <div>
                <CardTitle className="text-white">{title}</CardTitle>
                {description && (
                  <p className="text-slate-300 text-sm mt-1">{description}</p>
                )}
              </div>
            </div>
          </CardHeader>
          
          {children && (
            <CardContent className="text-slate-200">
              {children}
            </CardContent>
          )}
        </div>

        {/* Scanning line effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-[scan_3s_ease-in-out_infinite]" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/60" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/60" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60" />
      </Card>
    </div>
  );
}