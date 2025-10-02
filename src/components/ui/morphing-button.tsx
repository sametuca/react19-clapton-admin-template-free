import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon, Check, Loader2 } from 'lucide-react';

interface MorphingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  successIcon?: LucideIcon;
  loadingText?: string;
  successText?: string;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  morphDuration?: number;
}

export function MorphingButton({
  children,
  onClick,
  icon: Icon,
  successIcon: SuccessIcon = Check,
  loadingText = "İşleniyor...",
  successText = "Tamamlandı!",
  className,
  variant = 'default',
  size = 'default',
  morphDuration = 2000
}: MorphingButtonProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    if (state !== 'idle') return;
    
    setState('loading');
    
    try {
      if (onClick) {
        await onClick();
      }
      
      setState('success');
      
      setTimeout(() => {
        setState('idle');
      }, morphDuration);
    } catch (error) {
      setState('idle');
    }
  };

  const getContent = () => {
    switch (state) {
      case 'loading':
        return (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            {loadingText}
          </>
        );
      case 'success':
        return (
          <>
            <SuccessIcon className="h-4 w-4 mr-2 animate-bounce" />
            {successText}
          </>
        );
      default:
        return (
          <>
            {Icon && <Icon className="h-4 w-4 mr-2" />}
            {children}
          </>
        );
    }
  };

  const getVariant = () => {
    switch (state) {
      case 'loading':
        return 'secondary';
      case 'success':
        return 'default';
      default:
        return variant;
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={getVariant()}
      size={size}
      disabled={state === 'loading'}
      className={cn(
        "transition-all duration-300 overflow-hidden relative",
        state === 'success' && "bg-green-600 hover:bg-green-700 text-white",
        state === 'loading' && "cursor-not-allowed",
        className
      )}
    >
      <span className={cn(
        "transition-all duration-300",
        state === 'loading' && "animate-pulse",
        state === 'success' && "animate-bounce"
      )}>
        {getContent()}
      </span>
      
      {/* Ripple effect */}
      {state === 'success' && (
        <div className="absolute inset-0 bg-green-400/30 animate-ping rounded-md" />
      )}
    </Button>
  );
}
