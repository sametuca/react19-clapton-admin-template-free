import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  scale?: number;
  rotateX?: number;
  rotateY?: number;
  shadow?: boolean;
  glow?: boolean;
  border?: boolean;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className,
  intensity = 20,
  perspective = 1000,
  scale = 1.05,
  rotateX = 15,
  rotateY = 15,
  shadow = true,
  glow = true,
  border = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const rotateXSpring = useSpring(0, springConfig);
  const rotateYSpring = useSpring(0, springConfig);
  const scaleSpring = useSpring(1, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXFromCenter = e.clientX - centerX;
    const mouseYFromCenter = e.clientY - centerY;
    
    setMousePosition({ x: mouseXFromCenter, y: mouseYFromCenter });
    
    const rotateXValue = (mouseYFromCenter / (rect.height / 2)) * -rotateX;
    const rotateYValue = (mouseXFromCenter / (rect.width / 2)) * rotateY;
    
    rotateXSpring.set(rotateXValue);
    rotateYSpring.set(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scaleSpring.set(scale);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateXSpring.set(0);
    rotateYSpring.set(0);
    scaleSpring.set(1);
  };

  const glowIntensity = useTransform(scaleSpring, [1, scale], [0, intensity]);
  const shadowIntensity = useTransform(scaleSpring, [1, scale], [0, 0.3]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative cursor-pointer transition-all duration-300",
        className
      )}
      style={{ perspective }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={cn(
          "relative w-full h-full transition-all duration-300",
          border && "border border-white/20",
          shadow && "shadow-2xl"
        )}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          scale: scaleSpring,
        }}
      >
        {/* Glow Effect */}
        {glow && (
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(147, 51, 234, 0.3), transparent 50%)`,
              opacity: glowIntensity,
            }}
          />
        )}

        {/* Content */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>

        {/* Shadow Effect */}
        {shadow && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-black/20 pointer-events-none"
            style={{
              opacity: shadowIntensity,
              transform: "translateZ(-10px)",
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

// Enhanced 3D Card with Image
interface ImageCard3DProps extends Omit<Card3DProps, 'children'> {
  image: string;
  title: string;
  description: string;
  badge?: string;
  onClick?: () => void;
}

export const ImageCard3D: React.FC<ImageCard3DProps> = ({
  image,
  title,
  description,
  badge,
  onClick,
  ...cardProps
}) => {
  return (
    <Card3D {...cardProps}>
      <div 
        className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 cursor-pointer"
        onClick={onClick}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
              {badge}
            </span>
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 opacity-90">{description}</p>
        </div>
      </div>
    </Card3D>
  );
};

// Interactive 3D Card Grid
interface Card3DGridProps {
  cards: Array<{
    id: string;
    image: string;
    title: string;
    description: string;
    badge?: string;
  }>;
  columns?: number;
  className?: string;
}

export const Card3DGrid: React.FC<Card3DGridProps> = ({
  cards,
  columns = 3,
  className
}) => {
  return (
    <div 
      className={cn(
        "grid gap-6",
        className
      )}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {cards.map((card) => (
        <ImageCard3D
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          badge={card.badge}
          intensity={15}
          scale={1.02}
        />
      ))}
    </div>
  );
};
