import React from 'react';
import { cn } from '@/lib/utils';

interface SkeletonLoaderProps {
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  className?: string;
  lines?: number;
}

export function SkeletonLoader({ variant = 'rectangular', className, lines = 3 }: SkeletonLoaderProps) {
  const baseClasses = "animate-pulse bg-muted rounded";

  if (variant === 'text') {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              "h-4",
              i === lines - 1 ? "w-3/4" : "w-full"
            )}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circular') {
    return (
      <div className={cn(baseClasses, "w-12 h-12 rounded-full", className)} />
    );
  }

  if (variant === 'card') {
    return (
      <div className={cn("space-y-3", className)}>
        <div className={cn(baseClasses, "h-48 w-full")} />
        <div className="space-y-2">
          <div className={cn(baseClasses, "h-4 w-3/4")} />
          <div className={cn(baseClasses, "h-4 w-1/2")} />
        </div>
      </div>
    );
  }

  return (
    <div className={cn(baseClasses, "h-20 w-full", className)} />
  );
}
