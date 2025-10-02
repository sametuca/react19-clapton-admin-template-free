import React from 'react';
import { cn } from '@/lib/utils';

interface PulseLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'circle' | 'square' | 'rounded';
}

export function PulseLoader({ size = 'md', className, variant = 'circle' }: PulseLoaderProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const variantClasses = {
    circle: 'rounded-full',
    square: 'rounded-none',
    rounded: 'rounded-lg'
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <div
        className={cn(
          "absolute inset-0 bg-primary/20 animate-ping",
          variantClasses[variant]
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-primary/40 animate-pulse",
          variantClasses[variant]
        )}
        style={{ animationDelay: '0.5s' }}
      />
      <div
        className={cn(
          "absolute inset-2 bg-primary animate-pulse",
          variantClasses[variant]
        )}
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
