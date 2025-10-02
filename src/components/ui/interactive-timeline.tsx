import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Card } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { ChevronRight, Calendar, MapPin, Users, Award } from 'lucide-react';

interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  category: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  location?: string;
  participants?: number;
  achievements?: string[];
  image?: string;
  color?: string;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
  variant?: 'vertical' | 'horizontal' | 'cards';
  className?: string;
  showProgress?: boolean;
  interactive?: boolean;
  onItemClick?: (item: TimelineItem) => void;
}

export const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
  items,
  variant = 'vertical',
  className,
  showProgress = true,
  interactive = true,
  onItemClick
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const getStatusColor = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'upcoming':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: TimelineItem['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Unknown';
    }
  };

  const handleItemClick = (item: TimelineItem) => {
    if (interactive) {
      setSelectedItem(selectedItem === item.id ? null : item.id);
      onItemClick?.(item);
    }
  };

  if (variant === 'horizontal') {
    return (
      <div className={cn("relative", className)} ref={containerRef}>
        {showProgress && (
          <div className="sticky top-4 z-10 mb-8">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="flex space-x-6 overflow-x-auto pb-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-80"
            >
              <Card
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:shadow-lg",
                  selectedItem === item.id && "ring-2 ring-purple-500 shadow-xl",
                  hoveredItem === item.id && "scale-105"
                )}
                onClick={() => handleItemClick(item)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className={getStatusColor(item.status)}>
                      {getStatusText(item.status)}
                    </Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location || 'Remote'}</span>
                  </div>
                  
                  {item.participants && (
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{item.participants} participants</span>
                    </div>
                  )}
                  
                  {item.achievements && item.achievements.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-700">Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)} ref={containerRef}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 hover:shadow-lg group",
                selectedItem === item.id && "ring-2 ring-purple-500 shadow-xl"
              )}
              onClick={() => handleItemClick(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className={getStatusColor(item.status)}>
                      {getStatusText(item.status)}
                    </Badge>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </span>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{item.location || 'Remote'}</span>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  }

  // Default vertical timeline
  return (
    <div className={cn("relative", className)} ref={containerRef}>
      {showProgress && (
        <div className="sticky top-4 z-10 mb-8">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
        
        {items.map((item, index) => {
          const isInView = useInView(containerRef, { once: true });
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-white border-4 border-purple-500 rounded-full -translate-x-1/2 z-10" />
              
              {/* Content */}
              <div className="ml-16">
                <Card
                  className={cn(
                    "cursor-pointer transition-all duration-300 hover:shadow-lg",
                    selectedItem === item.id && "ring-2 ring-purple-500 shadow-xl",
                    hoveredItem === item.id && "scale-105"
                  )}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className={getStatusColor(item.status)}>
                        {getStatusText(item.status)}
                      </Badge>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{item.location || 'Remote'}</span>
                    </div>
                    
                    {item.participants && (
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{item.participants} participants</span>
                      </div>
                    )}
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-700">Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
