import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  progress?: number;
  showPercentage?: boolean;
}

export function ProgressRing({ 
  size = 'md', 
  className, 
  progress = 75,
  showPercentage = false 
}: ProgressRingProps) {
  const sizeConfig = {
    sm: { size: 60, strokeWidth: 4, fontSize: 'text-xs' },
    md: { size: 80, strokeWidth: 6, fontSize: 'text-sm' },
    lg: { size: 100, strokeWidth: 8, fontSize: 'text-base' }
  };

  const config = sizeConfig[size];
  const radius = (config.size - config.strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

  return (
    <div className={cn("relative", className)}>
      <svg
        width={config.size}
        height={config.size}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={config.strokeWidth}
          fill="none"
          className="text-muted"
        />
        {/* Progress circle */}
        <circle
          cx={config.size / 2}
          cy={config.size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={config.strokeWidth}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className={cn(
            "text-primary transition-all duration-300 ease-in-out",
            progress === 75 && "animate-progress-ring"
          )}
        />
      </svg>
      
      {showPercentage && (
        <div className={cn(
          "absolute inset-0 flex items-center justify-center font-semibold text-foreground",
          config.fontSize
        )}>
          {progress}%
        </div>
      )}

      <style>{`
        @keyframes progressRing {
          0% {
            stroke-dasharray: 0 ${circumference};
          }
          50% {
            stroke-dasharray: ${circumference * 0.75} ${circumference};
          }
          100% {
            stroke-dasharray: 0 ${circumference};
          }
        }
        .animate-progress-ring {
          animation: progressRing 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
