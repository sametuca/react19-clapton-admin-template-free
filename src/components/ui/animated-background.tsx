import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  variant?: 'dots' | 'grid' | 'waves' | 'particles' | 'gradient';
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
}

export function AnimatedBackground({
  children,
  variant = 'dots',
  className,
  intensity = 'medium',
  color = '#3b82f6'
}: AnimatedBackgroundProps) {
  const intensityOpacity = {
    low: '0.1',
    medium: '0.2',
    high: '0.3'
  };

  const renderPattern = () => {
    switch (variant) {
      case 'dots':
        return (
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              animation: 'float 20s ease-in-out infinite'
            }}
          />
        );
      
      case 'grid':
        return (
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(${color} 1px, transparent 1px),
                linear-gradient(90deg, ${color} 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
              animation: 'slide 30s linear infinite'
            }}
          />
        );
      
      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: `linear-gradient(45deg, transparent 30%, ${color}40 50%, transparent 70%)`,
                animation: 'wave 15s ease-in-out infinite'
              }}
            />
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                background: `linear-gradient(-45deg, transparent 30%, ${color}30 50%, transparent 70%)`,
                animation: 'wave 20s ease-in-out infinite reverse'
              }}
            />
          </div>
        );
      
      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-30"
                style={{
                  backgroundColor: color,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        );
      
      case 'gradient':
        return (
          <div 
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, ${color}15 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${color}15 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, ${color}10 0%, transparent 50%)
              `,
              animation: 'gradient-shift 20s ease-in-out infinite'
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {renderPattern()}
      <div className="relative z-10">
        {children}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        
        @keyframes slide {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20px, -20px); }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
          50% { transform: translateX(-50%) translateY(-50%) rotate(180deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}