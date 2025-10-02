import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface ParallaxHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  overlay?: boolean;
  ctaText?: string;
  ctaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  height?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ParallaxHero: React.FC<ParallaxHeroProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  overlay = true,
  ctaText = "Get Started",
  ctaAction,
  secondaryCtaText,
  secondaryCtaAction,
  height = "100vh",
  className,
  children
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  const springY = useSpring(y, { damping: 50, stiffness: 100 });
  const springOpacity = useSpring(opacity, { damping: 50, stiffness: 100 });
  const springScale = useSpring(scale, { damping: 50, stiffness: 100 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{ height }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y: springY,
          scale: springScale,
        }}
      >
        {backgroundImage ? (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        )}
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        </div>
      </motion.div>

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        style={{ opacity: springOpacity }}
      >
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-purple-200 border border-white/20">
              {subtitle}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {ctaAction && (
              <Button
                onClick={ctaAction}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25"
              >
                {ctaText}
              </Button>
            )}
            
            {secondaryCtaAction && secondaryCtaText && (
              <Button
                onClick={secondaryCtaAction}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
              >
                {secondaryCtaText}
              </Button>
            )}
          </motion.div>

          {/* Additional Content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-12"
            >
              {children}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced Parallax Hero with Stats
interface ParallaxHeroWithStatsProps extends ParallaxHeroProps {
  stats: Array<{
    number: string;
    label: string;
    icon?: React.ReactNode;
  }>;
}

export const ParallaxHeroWithStats: React.FC<ParallaxHeroWithStatsProps> = ({
  stats,
  ...props
}) => {
  return (
    <ParallaxHero {...props}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
              {stat.icon && <span className="mr-2">{stat.icon}</span>}
              {stat.number}
            </div>
            <div className="text-sm text-gray-300">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </ParallaxHero>
  );
};
