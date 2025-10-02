import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { X, CheckCircle, AlertTriangle, XCircle, Info, Bell } from 'lucide-react';

interface NotificationToastProps {
  id?: string;
  title: string;
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
  };
  avatar?: string;
  timestamp?: string;
  className?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const typeConfig = {
  success: {
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950',
    borderColor: 'border-green-200 dark:border-green-800',
    accentColor: 'bg-green-500'
  },
  error: {
    icon: XCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950',
    borderColor: 'border-red-200 dark:border-red-800',
    accentColor: 'bg-red-500'
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-950',
    borderColor: 'border-yellow-200 dark:border-yellow-800',
    accentColor: 'bg-yellow-500'
  },
  info: {
    icon: Info,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950',
    borderColor: 'border-blue-200 dark:border-blue-800',
    accentColor: 'bg-blue-500'
  }
};

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4'
};

export function NotificationToast({
  title,
  message,
  type = 'info',
  duration = 5000,
  onClose,
  action,
  avatar,
  timestamp,
  className,
  position = 'top-right'
}: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  
  const config = typeConfig[type];
  const Icon = config.icon;

  useEffect(() => {
    if (duration > 0) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev - (100 / (duration / 100));
          if (newProgress <= 0) {
            setIsVisible(false);
            setTimeout(() => onClose?.(), 300);
            return 0;
          }
          return newProgress;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose?.(), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed z-50 w-96 animate-in slide-in-from-right-full",
      positionClasses[position],
      className
    )}>
      <Card className={cn(
        "shadow-xl border backdrop-blur-sm",
        config.bgColor,
        config.borderColor
      )}>
        {/* Progress Bar */}
        {duration > 0 && (
          <div className="h-1 bg-muted">
            <div 
              className={cn("h-full transition-all duration-100 ease-linear", config.accentColor)}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className={cn("p-1 rounded-full", config.color)}>
              <Icon className="h-5 w-5" />
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-1">
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-sm">{title}</h4>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="h-6 w-6 -mt-1 -mr-1"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {message}
              </p>
              
              {/* Timestamp */}
              {timestamp && (
                <p className="text-xs text-muted-foreground">
                  {timestamp}
                </p>
              )}
              
              {/* Action Button */}
              {action && (
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={action.onClick}
                    className="h-7 px-3 text-xs"
                  >
                    {action.label}
                  </Button>
                </div>
              )}
            </div>
            
            {/* Avatar */}
            {avatar && (
              <div className="w-8 h-8 rounded-full bg-muted bg-cover bg-center" 
                   style={{ backgroundImage: `url(${avatar})` }} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Toast Manager Hook
export function useNotificationToast() {
  const [toasts, setToasts] = useState<Array<NotificationToastProps & { id: string }>>([]);

  const addToast = (toast: Omit<NotificationToastProps, 'onClose'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = {
      ...toast,
      id,
      onClose: () => removeToast(id)
    };
    
    setToasts(prev => [...prev, newToast]);
    
    return id;
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const ToastContainer = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <NotificationToast {...toast} />
        </div>
      ))}
    </div>
  );

  return {
    addToast,
    removeToast,
    ToastContainer
  };
}