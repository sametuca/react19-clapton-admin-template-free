import React from 'react';
import { cn } from '@/lib/utils';

interface WaveLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function WaveLoader({ size = 'md', className }: WaveLoaderProps) {
  const sizeClasses = {
    sm: { container: 'w-12 h-6', wave: 'h-6' },
    md: { container: 'w-16 h-8', wave: 'h-8' },
    lg: { container: 'w-20 h-10', wave: 'h-10' }
  };

  const { container, wave } = sizeClasses[size];

  return (
    <>
      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .wave-animate {
          animation: wave 2s ease-in-out infinite;
        }
      `}</style>
      <div className={cn("relative overflow-hidden rounded-full bg-muted", container, className)}>
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-primary rounded-full wave-animate",
            wave
          )}
        />
      </div>
    </>
  );
}
