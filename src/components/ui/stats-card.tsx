import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  change?: number;
  changeType?: 'positive' | 'negative';
  icon: LucideIcon;
  description?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  gradient?: boolean;
}

export function StatsCard({
  title,
  value,
  change,
  changeType = 'positive',
  icon: Icon,
  description,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  gradient = false
}: StatsCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border-0",
      gradient && "bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="text-3xl font-bold">
              <AnimatedCounter 
                value={value} 
                prefix={prefix} 
                suffix={suffix} 
                decimals={decimals}
              />
            </div>
            {change !== undefined && (
              <div className="flex items-center gap-1">
                {changeType === 'positive' ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <Badge 
                  variant={changeType === 'positive' ? 'default' : 'destructive'}
                  className="text-xs"
                >
                  {change > 0 ? '+' : ''}{change}%
                </Badge>
              </div>
            )}
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          <div className={cn(
            "p-3 rounded-full",
            gradient 
              ? "bg-gradient-to-br from-primary/20 to-primary/10" 
              : "bg-primary/10"
          )}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
      </CardContent>
    </Card>
  );
}
