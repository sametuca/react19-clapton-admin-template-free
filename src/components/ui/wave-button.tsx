import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface WaveButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  waveColor?: string;
}

export function WaveButton({
  children,
  onClick,
  icon: Icon,
  className,
  variant = 'default',
  size = 'default',
  waveColor = '#3b82f6'
}: WaveButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:scale-105",
        className
      )}
    >
      {/* Wave ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            backgroundColor: `${waveColor}40`,
            animationDuration: '0.6s'
          }}
        />
      ))}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="h-4 w-4" />}
        {children}
      </span>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </Button>
  );
}
