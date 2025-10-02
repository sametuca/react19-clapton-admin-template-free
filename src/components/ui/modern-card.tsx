import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowRight, Star, Heart, Bookmark, Share2, MoreHorizontal } from 'lucide-react';

interface ModernCardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: LucideIcon;
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'neon' | 'minimal';
  interactive?: boolean;
  onAction?: () => void;
  actionLabel?: string;
  stats?: Array<{ label: string; value: string | number }>;
}

export function ModernCard({
  title,
  description,
  image,
  icon: Icon,
  badge,
  badgeVariant = 'default',
  children,
  className,
  variant = 'default',
  interactive = true,
  onAction,
  actionLabel = 'Daha Fazla',
  stats
}: ModernCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const variantClasses = {
    default: 'bg-card border-border hover:shadow-lg',
    gradient: 'bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20 hover:shadow-xl hover:shadow-primary/25',
    glass: 'bg-background/50 backdrop-blur-lg border-white/20 hover:bg-background/70',
    neon: 'bg-background border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:border-primary',
    minimal: 'bg-transparent border-transparent hover:bg-muted/50'
  };

  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-700 hover:scale-[1.02]",
      variantClasses[variant],
      className
    )}>
      {/* Image Header */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Floating Actions */}
          {interactive && (
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={cn("h-4 w-4", isBookmarked && "fill-blue-500 text-blue-500")} />
              </Button>
            </div>
          )}
          
          {/* Badge Overlay */}
          {badge && (
            <div className="absolute top-4 left-4">
              <Badge variant={badgeVariant} className="shadow-lg">
                {badge}
              </Badge>
            </div>
          )}
        </div>
      )}

      <CardHeader className={cn("relative", !image && "pt-6")}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {Icon && !image && (
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-700">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            )}
            <div>
              <CardTitle className="group-hover:text-primary transition-colors duration-700">
                {title}
              </CardTitle>
              {description && (
                <p className="text-sm text-muted-foreground mt-1">{description}</p>
              )}
            </div>
          </div>
          
          {!image && badge && (
            <Badge variant={badgeVariant}>{badge}</Badge>
          )}
        </div>
      </CardHeader>

      {(children || stats) && (
        <CardContent className="space-y-4">
          {children}
          
          {/* Stats Grid */}
          {stats && (
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Footer */}
          {interactive && (
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setIsLiked(!isLiked)}>
                  <Heart className={cn("h-4 w-4", isLiked && "fill-red-500 text-red-500")} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              
              {onAction && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={onAction}
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {actionLabel}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          )}
        </CardContent>
      )}
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Card>
  );
}