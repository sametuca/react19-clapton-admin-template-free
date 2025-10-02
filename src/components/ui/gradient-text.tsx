import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  gradient?: 'primary' | 'secondary' | 'rainbow' | 'sunset' | 'ocean' | 'forest' | 'fire' | 'purple' | 'custom';
  customGradient?: string;
  className?: string;
  animated?: boolean;
}

const gradients = {
  primary: 'from-blue-600 via-purple-600 to-blue-600',
  secondary: 'from-green-500 via-teal-500 to-green-500',
  rainbow: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
  sunset: 'from-orange-500 via-red-500 to-pink-500',
  ocean: 'from-blue-500 via-cyan-500 to-teal-500',
  forest: 'from-green-600 via-emerald-500 to-green-600',
  fire: 'from-red-600 via-orange-500 to-yellow-500',
  purple: 'from-purple-600 via-pink-500 to-purple-600'
};

export function GradientText({
  children,
  gradient = 'primary',
  customGradient,
  className,
  animated = false
}: GradientTextProps) {
  const gradientClass = customGradient || `bg-gradient-to-r ${gradients[gradient]}`;

  return (
    <span 
      className={cn(
        "bg-clip-text text-transparent font-bold",
        gradientClass,
        animated && "animate-pulse",
        className
      )}
      style={animated ? {
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 3s ease-in-out infinite'
      } : undefined}
    >
      {children}
      
      {animated && (
        <style>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>
      )}
    </span>
  );
}