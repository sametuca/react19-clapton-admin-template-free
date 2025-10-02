import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { CheckCircle, AlertTriangle, XCircle, Clock, Zap, Wifi, WifiOff } from 'lucide-react';

type StatusType = 'online' | 'offline' | 'busy' | 'away' | 'idle' | 'error' | 'warning' | 'success' | 'loading';

interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  showIcon?: boolean;
  showPulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const statusConfig = {
  online: {
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: CheckCircle,
    label: 'Çevrimiçi'
  },
  offline: {
    color: 'bg-gray-500',
    textColor: 'text-gray-600',
    bgColor: 'bg-gray-50 dark:bg-gray-950',
    borderColor: 'border-gray-200 dark:border-gray-800',
    icon: WifiOff,
    label: 'Çevrimdışı'
  },
  busy: {
    color: 'bg-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    icon: XCircle,
    label: 'Meşgul'
  },
  away: {
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    icon: Clock,
    label: 'Uzakta'
  },
  idle: {
    color: 'bg-orange-500',
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950',
    borderColor: 'border-orange-200 dark:border-orange-800',
    icon: Clock,
    label: 'Boşta'
  },
  error: {
    color: 'bg-red-500',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    icon: XCircle,
    label: 'Hata'
  },
  warning: {
    color: 'bg-yellow-500',
    textColor: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    icon: AlertTriangle,
    label: 'Uyarı'
  },
  success: {
    color: 'bg-green-500',
    textColor: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: CheckCircle,
    label: 'Başarılı'
  },
  loading: {
    color: 'bg-blue-500',
    textColor: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    icon: Zap,
    label: 'Yükleniyor'
  }
};

const sizeClasses = {
  sm: { dot: 'w-2 h-2', icon: 'h-3 w-3', text: 'text-xs', padding: 'px-2 py-1' },
  md: { dot: 'w-3 h-3', icon: 'h-4 w-4', text: 'text-sm', padding: 'px-3 py-1.5' },
  lg: { dot: 'w-4 h-4', icon: 'h-5 w-5', text: 'text-base', padding: 'px-4 py-2' }
};

export function StatusIndicator({
  status,
  label,
  showIcon = false,
  showPulse = true,
  size = 'md',
  className
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  const sizeConfig = sizeClasses[size];
  const Icon = config.icon;
  const displayLabel = label || config.label;

  if (showIcon || label) {
    return (
      <Badge 
        variant="outline" 
        className={cn(
          "flex items-center gap-2 border",
          config.bgColor,
          config.borderColor,
          config.textColor,
          sizeConfig.text,
          sizeConfig.padding,
          className
        )}
      >
        {showIcon ? (
          <Icon className={sizeConfig.icon} />
        ) : (
          <div className={cn(
            "rounded-full",
            config.color,
            sizeConfig.dot,
            showPulse && (status === 'online' || status === 'loading') && "animate-pulse"
          )} />
        )}
        {displayLabel}
      </Badge>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <div className={cn(
        "rounded-full",
        config.color,
        sizeConfig.dot,
        showPulse && (status === 'online' || status === 'loading') && "animate-pulse"
      )} />
      {showPulse && (status === 'online' || status === 'loading') && (
        <div className={cn(
          "absolute inset-0 rounded-full animate-ping",
          config.color,
          "opacity-75"
        )} />
      )}
    </div>
  );
}