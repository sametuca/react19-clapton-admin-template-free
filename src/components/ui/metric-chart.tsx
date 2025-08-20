import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface MetricChartProps {
  title: string;
  data: DataPoint[];
  total?: number;
  change?: number;
  changeType?: 'positive' | 'negative' | 'neutral';
  className?: string;
  type?: 'bar' | 'line' | 'area';
}

export function MetricChart({ 
  title, 
  data, 
  total, 
  change, 
  changeType = 'neutral',
  className,
  type = 'bar'
}: MetricChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const getTrendIcon = () => {
    switch (changeType) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'negative':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTrendColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      case 'negative':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              {getTrendIcon()}
              <Badge variant="outline" className={cn("text-xs", getTrendColor())}>
                {change > 0 ? '+' : ''}{change}%
              </Badge>
            </div>
          )}
        </div>
        {total !== undefined && (
          <div className="text-2xl font-bold">{total.toLocaleString()}</div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.label}</span>
                <span className="text-muted-foreground">{item.value.toLocaleString()}</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out",
                    item.color || "bg-primary"
                  )}
                  style={{
                    width: `${(item.value / maxValue) * 100}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}