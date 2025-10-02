import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface GlassmorphismCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

export function GlassmorphismCard({
  title,
  description,
  icon: Icon,
  children,
  className,
  variant = 'default',
  blur = 'md',
  opacity = 0.1
}: GlassmorphismCardProps) {
  const variants = {
    default: 'bg-white/10 border-white/20 text-foreground',
    primary: 'bg-primary/10 border-primary/20 text-primary-foreground',
    secondary: 'bg-secondary/10 border-secondary/20 text-secondary-foreground',
    accent: 'bg-accent/10 border-accent/20 text-accent-foreground'
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  return (
    <Card className={cn(
      "relative overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]",
      variants[variant],
      blurClasses[blur],
      className
    )}>
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-pulse"
        style={{ opacity }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <CardHeader className="relative z-10">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
              <Icon className="h-5 w-5" />
            </div>
          )}
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && (
              <p className="text-sm opacity-80 mt-1">{description}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      {children && (
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      )}
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
}
