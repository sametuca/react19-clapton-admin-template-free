import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Plus, X, LucideIcon } from 'lucide-react';

interface FloatingActionItem {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  color?: string;
}

interface FloatingActionMenuProps {
  items: FloatingActionItem[];
  className?: string;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

export function FloatingActionMenu({ 
  items, 
  className, 
  position = 'bottom-right' 
}: FloatingActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  const itemPositions = {
    'bottom-right': 'flex-col-reverse',
    'bottom-left': 'flex-col-reverse',
    'top-right': 'flex-col',
    'top-left': 'flex-col'
  };

  return (
    <div className={cn(
      "fixed z-50 flex gap-3",
      positionClasses[position],
      itemPositions[position],
      className
    )}>
      {/* Action Items */}
      <div className={cn(
        "flex gap-3 transition-all duration-300 ease-out",
        itemPositions[position],
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      )}>
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative"
            style={{
              transitionDelay: isOpen ? `${index * 50}ms` : `${(items.length - index) * 50}ms`
            }}
          >
            <Button
              size="icon"
              onClick={item.onClick}
              className={cn(
                "h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",
                item.color || "bg-primary hover:bg-primary/90"
              )}
            >
              <item.icon className="h-5 w-5" />
            </Button>
            
            {/* Tooltip */}
            <div className={cn(
              "absolute whitespace-nowrap bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none",
              position.includes('right') ? 'right-full mr-3 top-1/2 -translate-y-1/2' : 'left-full ml-3 top-1/2 -translate-y-1/2'
            )}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Main Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110",
          isOpen && "rotate-45"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </Button>
    </div>
  );
}
