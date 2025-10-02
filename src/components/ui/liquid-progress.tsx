import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LiquidProgressProps {
  value: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

export function LiquidProgress({
  value,
  size = 'md',
  color = '#3b82f6',
  backgroundColor = '#f1f5f9',
  showPercentage = true,
  animated = true,
  className
}: LiquidProgressProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedValue(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedValue(value);
    }
  }, [value, animated]);

  const waveHeight = 100 - Math.max(0, Math.min(100, animatedValue));

  return (
    <div className={cn(
      "relative rounded-full overflow-hidden",
      sizes[size],
      className
    )}>
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={backgroundColor}
          stroke="none"
        />
        
        {/* Liquid wave */}
        <defs>
          <clipPath id="circle-clip">
            <circle cx="50" cy="50" r="48" />
          </clipPath>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="1" />
          </linearGradient>
        </defs>
        
        <g clipPath="url(#circle-clip)">
          {/* Main wave */}
          <path
            d={`M 0 ${waveHeight} Q 25 ${waveHeight - 5} 50 ${waveHeight} T 100 ${waveHeight} V 100 H 0 Z`}
            fill="url(#wave-gradient)"
            className={animated ? "animate-[wave_3s_ease-in-out_infinite]" : ""}
          >
            {animated && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 10 0; 0 0"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </path>
          
          {/* Secondary wave for more realistic effect */}
          <path
            d={`M 0 ${waveHeight + 3} Q 25 ${waveHeight - 2} 50 ${waveHeight + 3} T 100 ${waveHeight + 3} V 100 H 0 Z`}
            fill={color}
            opacity="0.6"
            className={animated ? "animate-[wave_2s_ease-in-out_infinite_reverse]" : ""}
          >
            {animated && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; -15 0; 0 0"
                dur="4s"
                repeatCount="indefinite"
              />
            )}
          </path>
        </g>
      </svg>
      
      {/* Percentage text */}
      {showPercentage && (
        <div className={cn(
          "absolute inset-0 flex items-center justify-center font-bold",
          textSizes[size]
        )}>
          <span className="text-white mix-blend-difference">
            {Math.round(animatedValue)}%
          </span>
        </div>
      )}
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-full" />
    </div>
  );
}
