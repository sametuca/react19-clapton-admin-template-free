import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  target?: string;
  time: string;
  type: 'success' | 'warning' | 'error' | 'info';
  icon: LucideIcon;
}

interface ActivityFeedProps {
  activities: ActivityItem[];
  title?: string;
  className?: string;
}

const typeColors = {
  success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  error: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
};

export function ActivityFeed({ activities, title = "Son Aktiviteler", className }: ActivityFeedProps) {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
          <Badge variant="secondary" className="ml-auto">
            {activities.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex items-start gap-4 pb-4">
              {/* Timeline dot */}
              <div className={cn(
                "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-background",
                typeColors[activity.type]
              )}>
                <activity.icon className="h-5 w-5" />
              </div>
              
              <div className="flex-1 space-y-1 pt-1">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={activity.user.avatar} />
                    <AvatarFallback className="text-xs">
                      {activity.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{activity.user.name}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {activity.action}
                  {activity.target && (
                    <span className="font-medium text-foreground"> {activity.target}</span>
                  )}
                </p>
                
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}