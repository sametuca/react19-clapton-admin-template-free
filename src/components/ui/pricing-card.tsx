import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Star, Crown, Zap, Shield, Sparkles } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number | string;
  period?: string;
  originalPrice?: number;
  features: PricingFeature[];
  buttonText?: string;
  onSelect?: () => void;
  popular?: boolean;
  premium?: boolean;
  className?: string;
  variant?: 'default' | 'gradient' | 'glass' | 'neon';
}

export function PricingCard({
  title,
  description,
  price,
  period = '/ay',
  originalPrice,
  features,
  buttonText = 'Başla',
  onSelect,
  popular = false,
  premium = false,
  className,
  variant = 'default'
}: PricingCardProps) {
  const variantClasses = {
    default: 'bg-card border-border',
    gradient: 'bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-primary/20',
    glass: 'bg-background/50 backdrop-blur-lg border-white/20',
    neon: 'bg-background border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
  };

  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]",
      variantClasses[variant],
      popular && "ring-2 ring-primary shadow-lg scale-105",
      premium && "ring-2 ring-yellow-500 shadow-xl",
      className
    )}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1 shadow-lg">
            <Star className="h-3 w-3 mr-1" />
            En Popüler
          </Badge>
        </div>
      )}
      
      {/* Premium Badge */}
      {premium && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 shadow-lg border-0">
            <Crown className="h-3 w-3 mr-1" />
            Premium
          </Badge>
        </div>
      )}

      <CardHeader className={cn("text-center", (popular || premium) && "pt-8")}>
        <div className="space-y-2">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-1">
            {originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ₺{originalPrice}
              </span>
            )}
            <span className="text-4xl font-bold">
              {typeof price === 'number' ? `₺${price}` : price}
            </span>
            <span className="text-muted-foreground">{period}</span>
          </div>
          
          {originalPrice && (
            <Badge variant="destructive" className="text-xs">
              %{Math.round(((originalPrice - (price as number)) / originalPrice) * 100)} İndirim
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className={cn(
              "flex items-start gap-3",
              !feature.included && "opacity-50"
            )}>
              <div className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full mt-0.5",
                feature.included 
                  ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400" 
                  : "bg-muted text-muted-foreground"
              )}>
                <Check className="h-3 w-3" />
              </div>
              <span className={cn(
                "text-sm",
                feature.highlight && "font-semibold text-primary",
                !feature.included && "line-through"
              )}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Button 
          onClick={onSelect}
          className={cn(
            "w-full h-12 text-base font-semibold transition-all duration-300",
            popular && "bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl",
            premium && "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0 shadow-lg hover:shadow-xl"
          )}
          variant={popular || premium ? "default" : "outline"}
        >
          {premium && <Crown className="h-4 w-4 mr-2" />}
          {popular && <Sparkles className="h-4 w-4 mr-2" />}
          {buttonText}
        </Button>
        
        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            {premium ? "Premium özellikler dahil" : "7 gün ücretsiz deneme"}
          </p>
        </div>
      </CardContent>
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
      {premium && (
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5 pointer-events-none" />
      )}
    </Card>
  );
}