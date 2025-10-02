import React from 'react';
import { cn } from '@/lib/utils';

interface NeonBorderProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
  rounded?: boolean;
}

export function NeonBorder({
  children,
  className,
  color = '#3b82f6',
  intensity = 'medium',
  animated = true,
  rounded = true
}: NeonBorderProps) {
  const intensityClasses = {
    low: 'shadow-[0_0_10px_rgba(59,130,246,0.5)]',
    medium: 'shadow-[0_0_20px_rgba(59,130,246,0.7)]',
    high: 'shadow-[0_0_30px_rgba(59,130,246,0.9)]'
  };

  return (
    <div className={cn(
      "relative p-[2px] group",
      rounded && "rounded-lg",
      className
    )}>
      {/* Animated border gradient */}
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-75",
          animated && "animate-[neonPulse_2s_ease-in-out_infinite]",
          rounded && "rounded-lg"
        )}
        style={{
          background: `conic-gradient(from 0deg, ${color}, #8b5cf6, #ec4899, ${color})`
        }}
      />
      
      {/* Inner content */}
      <div className={cn(
        "relative bg-background",
        rounded && "rounded-lg",
        intensityClasses[intensity]
      )}>
        {children}
      </div>
      
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm",
          rounded && "rounded-lg"
        )}
        style={{
          background: `linear-gradient(45deg, ${color}40, transparent, ${color}40)`,
          filter: 'blur(4px)'
        }}
      />
    </div>
  );
}
