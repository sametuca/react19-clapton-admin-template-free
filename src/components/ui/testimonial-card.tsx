import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  rating: number;
  testimonial: string;
  verified?: boolean;
  featured?: boolean;
  className?: string;
  variant?: 'default' | 'minimal' | 'detailed';
}

export function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  testimonial,
  verified = false,
  featured = false,
  className,
  variant = 'default'
}: TestimonialCardProps) {
  const renderStars = () => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "text-yellow-500 fill-current" : "text-muted-foreground"
          )}
        />
      ))}
    </div>
  );

  if (variant === 'minimal') {
    return (
      <Card className={cn(
        "hover:shadow-lg transition-all duration-300 hover:scale-[1.02]",
        featured && "ring-2 ring-primary/20 shadow-lg",
        className
      )}>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{name}</h4>
                  {verified && (
                    <Badge variant="secondary" className="h-5 px-2 text-xs">
                      ✓ Doğrulanmış
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
              {renderStars()}
            </div>
            <p className="text-muted-foreground italic">"{testimonial}"</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'detailed') {
    return (
      <Card className={cn(
        "relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group",
        featured && "ring-2 ring-primary/20 shadow-lg bg-gradient-to-br from-primary/5 to-transparent",
        className
      )}>
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="h-16 w-16 text-primary" />
        </div>
        
        <CardContent className="p-8">
          <div className="space-y-6">
            {/* Rating */}
            <div className="flex items-center justify-between">
              {renderStars()}
              {featured && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Öne Çıkan
                </Badge>
              )}
            </div>
            
            {/* Testimonial */}
            <blockquote className="text-lg leading-relaxed text-foreground relative z-10">
              "{testimonial}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
              <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{name}</h4>
                  {verified && (
                    <Badge variant="secondary" className="h-5 px-2 text-xs bg-green-100 text-green-800 border-green-200">
                      ✓ Doğrulanmış
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {role}
                  {company && <span> • {company}</span>}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        
        {/* Background Decoration */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-transparent rounded-full translate-y-12 -translate-x-12" />
      </Card>
    );
  }

  // Default variant
  return (
    <Card className={cn(
      "hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group",
      featured && "ring-2 ring-primary/20 shadow-lg",
      className
    )}>
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Quote and Rating */}
          <div className="flex items-start justify-between">
            <Quote className="h-6 w-6 text-primary/60" />
            {renderStars()}
          </div>
          
          {/* Testimonial */}
          <p className="text-muted-foreground leading-relaxed">
            "{testimonial}"
          </p>
          
          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-semibold">{name}</h4>
                {verified && (
                  <Badge variant="secondary" className="h-4 px-1.5 text-xs">
                    ✓
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {role}
                {company && <span> • {company}</span>}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}