import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface DockItem {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color?: string;
  badge?: string | number;
}

interface FloatingDockProps {
  items: DockItem[];
  className?: string;
  position?: 'bottom' | 'top' | 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
}

export function FloatingDock({ 
  items, 
  className, 
  position = 'bottom',
  size = 'md'
}: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const positionClasses = {
    bottom: 'bottom-6 left-1/2 -translate-x-1/2 flex-row',
    top: 'top-6 left-1/2 -translate-x-1/2 flex-row',
    left: 'left-6 top-1/2 -translate-y-1/2 flex-col',
    right: 'right-6 top-1/2 -translate-y-1/2 flex-col'
  };

  const sizeClasses = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-14 w-14'
  };

  const gapClasses = {
    sm: 'gap-1',
    md: 'gap-2',
    lg: 'gap-3'
  };

  return (
    <div className={cn(
      "fixed z-50 flex p-2 bg-background/80 backdrop-blur-lg border border-border/50 rounded-2xl shadow-2xl",
      positionClasses[position],
      gapClasses[size],
      className
    )}>
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <Button
            size="icon"
            variant="ghost"
            onClick={item.onClick}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "relative transition-all duration-300 hover:scale-125 hover:shadow-lg",
              sizeClasses[size],
              hoveredIndex === index && "scale-125 shadow-lg",
              item.color || "hover:bg-primary/10"
            )}
          >
            <item.icon className={cn(
              "transition-all duration-300",
              size === 'sm' ? 'h-4 w-4' : size === 'md' ? 'h-5 w-5' : 'h-6 w-6'
            )} />
            
            {/* Badge */}
            {item.badge && (
              <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {item.badge}
              </div>
            )}
          </Button>
          
          {/* Tooltip */}
          <div className={cn(
            "absolute whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",
            position === 'bottom' ? 'bottom-full mb-2 left-1/2 -translate-x-1/2' :
            position === 'top' ? 'top-full mt-2 left-1/2 -translate-x-1/2' :
            position === 'left' ? 'left-full ml-2 top-1/2 -translate-y-1/2' :
            'right-full mr-2 top-1/2 -translate-y-1/2'
          )}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}