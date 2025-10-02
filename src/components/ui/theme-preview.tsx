import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Crown, Star, Zap, Users, DollarSign } from 'lucide-react';

interface ThemePreviewProps {
  themeName: string;
  colors: Record<string, string>;
  gradient: string;
  className?: string;
}

export function ThemePreview({ themeName, colors, gradient, className }: ThemePreviewProps) {
  return (
    <div 
      className={cn("p-6 rounded-xl border-2 border-white/20 relative overflow-hidden", className)}
      style={{ background: gradient }}
    >
      {/* Preview Content */}
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{themeName}</h3>
          <Badge className="bg-yellow-500 text-yellow-900 border-0">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
        
        {/* Sample Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div 
            className="p-3 rounded-lg backdrop-blur-sm border"
            style={{ 
              backgroundColor: `hsl(${colors.card} / 0.3)`,
              borderColor: `hsl(${colors.border} / 0.5)`
            }}
          >
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" style={{ color: `hsl(${colors.primary})` }} />
              <span className="text-sm font-medium text-white">Users</span>
            </div>
            <div className="text-lg font-bold text-white">12.4K</div>
          </div>
          
          <div 
            className="p-3 rounded-lg backdrop-blur-sm border"
            style={{ 
              backgroundColor: `hsl(${colors.card} / 0.3)`,
              borderColor: `hsl(${colors.border} / 0.5)`
            }}
          >
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" style={{ color: `hsl(${colors.accent})` }} />
              <span className="text-sm font-medium text-white">Revenue</span>
            </div>
            <div className="text-lg font-bold text-white">$89K</div>
          </div>
        </div>
        
        {/* Sample Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-white/80">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="h-2 rounded-full w-3/4"
              style={{ backgroundColor: `hsl(${colors.primary})` }}
            />
          </div>
        </div>
        
        {/* Sample Buttons */}
        <div className="flex gap-2">
          <button 
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
            style={{ 
              backgroundColor: `hsl(${colors.primary})`,
              color: `hsl(${colors['primary-foreground']})`
            }}
          >
            Primary
          </button>
          <button 
            className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all hover:scale-105"
            style={{ 
              borderColor: `hsl(${colors.border})`,
              color: `hsl(${colors.foreground})`
            }}
          >
            Secondary
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12" />
    </div>
  );
}
