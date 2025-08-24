import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  magneticStrength?: number;
  glowColor?: string;
}

export function MagneticButton({
  children,
  onClick,
  icon: Icon,
  className,
  variant = 'default',
  size = 'default',
  magneticStrength = 0.3,
  glowColor = '#3b82f6'
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) * magneticStrength;
    const deltaY = (y - centerY) * magneticStrength;
    
    setTransform(`translate(${deltaX}px, ${deltaY}px) scale(1.05)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px) scale(1)');
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-md blur-lg transition-all duration-300",
          isHovered ? 'opacity-60 scale-110' : 'opacity-0 scale-100'
        )}
        style={{ 
          backgroundColor: glowColor,
          filter: 'blur(8px)'
        }}
      />
      
      <Button
        ref={buttonRef}
        onClick={onClick}
        variant={variant}
        size={size}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative z-10 transition-all duration-200 ease-out",
          "hover:shadow-2xl",
          className
        )}
        style={{ transform }}
      >
        {Icon && <Icon className="h-4 w-4 mr-2" />}
        {children}
        
        {/* Inner glow */}
        <div className={cn(
          "absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-white/10 to-transparent",
          "opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )} />
      </Button>
    </div>
  );
}