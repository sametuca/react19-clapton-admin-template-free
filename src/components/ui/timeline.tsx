import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { LucideIcon, Clock, MapPin, Users } from 'lucide-react';

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  user?: {
    name: string;
    avatar?: string;
    initials: string;
  };
  icon?: LucideIcon;
  status?: 'completed' | 'in-progress' | 'pending' | 'cancelled';
  location?: string;
  participants?: number;
  tags?: string[];
  color?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const statusColors = {
  completed: 'bg-green-500 text-green-500',
  'in-progress': 'bg-blue-500 text-blue-500',
  pending: 'bg-yellow-500 text-yellow-500',
  cancelled: 'bg-red-500 text-red-500'
};

const statusLabels = {
  completed: 'Tamamlandı',
  'in-progress': 'Devam Ediyor',
  pending: 'Bekliyor',
  cancelled: 'İptal Edildi'
};

export function Timeline({ items, variant = 'default', className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30" />
      
      <div className="space-y-6">
        {items.map((item, index) => {
          const Icon = item.icon || Clock;
          const statusColor = item.status ? statusColors[item.status] : 'bg-primary text-primary';
          
          return (
            <div key={item.id} className="relative flex items-start gap-6">
              {/* Timeline Dot */}
              <div className={cn(
                "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background shadow-lg transition-all duration-300 hover:scale-110",
                statusColor.split(' ')[0]
              )}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        
                        {item.status && (
                          <Badge 
                            variant="outline" 
                            className={cn("border-current", statusColor.split(' ')[1])}
                          >
                            {statusLabels[item.status]}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.date}</span>
                          {item.time && <span>• {item.time}</span>}
                        </div>
                        
                        {item.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                        
                        {item.participants && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{item.participants} kişi</span>
                          </div>
                        )}
                      </div>
                      
                      {/* User Info */}
                      {item.user && (
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={item.user.avatar} alt={item.user.name} />
                            <AvatarFallback className="text-xs">{item.user.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{item.user.name}</span>
                        </div>
                      )}
                      
                      {/* Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}