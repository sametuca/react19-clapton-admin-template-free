import React from 'react';
import { cn } from '@/lib/utils';

interface BarsLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  bars?: 3 | 4 | 5;
}

export function BarsLoader({ size = 'md', className, bars = 4 }: BarsLoaderProps) {
  const sizeClasses = {
    sm: { width: 'w-1', height: 'h-4', gap: 'gap-1' },
    md: { width: 'w-1.5', height: 'h-6', gap: 'gap-1.5' },
    lg: { width: 'w-2', height: 'h-8', gap: 'gap-2' }
  };

  const { width, height, gap } = sizeClasses[size];

  return (
    <>
      <style>{`
        @keyframes barScale {
          0%, 40%, 100% {
            transform: scaleY(0.4);
          }
          20% {
            transform: scaleY(1);
          }
        }
        .bar-animate {
          animation: barScale 1.2s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
      <div className={cn("flex items-end justify-center", gap, className)}>
        {Array.from({ length: bars }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-primary rounded-sm bar-animate",
              width,
              height
            )}
            style={{
              animationDelay: `${i * 0.15}s`
            }}
          />
        ))}
      </div>
    </>
  );
}
