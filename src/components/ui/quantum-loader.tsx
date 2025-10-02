import React from 'react';
import { cn } from '@/lib/utils';

interface QuantumLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  text?: string;
}

export function QuantumLoader({
  size = 'md',
  color = '#3b82f6',
  className,
  text
}: QuantumLoaderProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const particleSizes = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className={cn("relative", sizes[size])}>
        {/* Central core */}
        <div 
          className={cn(
            "absolute inset-0 rounded-full animate-pulse",
            sizes[size]
          )}
          style={{ 
            background: `radial-gradient(circle, ${color}80, ${color}40, transparent)`,
            filter: 'blur(2px)'
          }}
        />
        
        {/* Orbiting particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full animate-spin",
              particleSizes[size]
            )}
            style={{
              backgroundColor: color,
              animationDuration: `${2 + i * 0.2}s`,
              animationDelay: `${i * 0.1}s`,
              transformOrigin: `${size === 'sm' ? '16px' : size === 'md' ? '24px' : '32px'} ${size === 'sm' ? '16px' : size === 'md' ? '24px' : '32px'}`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-${size === 'sm' ? '16px' : size === 'md' ? '24px' : '32px'})`
            }}
          />
        ))}
        
        {/* Energy rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className={cn(
              "absolute inset-0 rounded-full border-2 animate-ping",
              sizes[size]
            )}
            style={{
              borderColor: `${color}60`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          />
        ))}
        
        {/* Central particle */}
        <div 
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full animate-bounce",
            particleSizes[size]
          )}
          style={{ backgroundColor: color }}
        />
      </div>
      
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse font-medium">
          {text}
        </p>
      )}
    </div>
  );
}
