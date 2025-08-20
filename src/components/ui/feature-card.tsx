import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  className?: string;
  onLearnMore?: () => void;
  gradient?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  features,
  badge,
  badgeVariant = 'default',
  className,
  onLearnMore,
  gradient = false
}: FeatureCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group",
      gradient && "bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-lg transition-colors group-hover:scale-110 duration-300",
            gradient 
              ? "bg-gradient-to-br from-primary/20 to-primary/10" 
              : "bg-primary/10"
          )}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {badge && (
            <Badge variant={badgeVariant} className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
        
        {onLearnMore && (
          <Button 
            variant="ghost" 
            className="w-full justify-between group-hover:bg-primary/5 transition-colors"
            onClick={onLearnMore}
          >
            Daha Fazla Bilgi
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </CardContent>
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
    </Card>
  );
}