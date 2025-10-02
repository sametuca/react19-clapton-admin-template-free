import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Card } from './card';
import { Badge } from './badge';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  ShoppingCart, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MoreHorizontal,
  RefreshCw,
  Target,
  Zap,
  Star
} from 'lucide-react';

// Animated Metric Card
interface AnimatedMetricCardProps {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const AnimatedMetricCard: React.FC<AnimatedMetricCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon,
  color = 'purple',
  className,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayValue, setDisplayValue] = useState(0);
  
  const scale = useMotionValue(1);
  const scaleSpring = useSpring(scale, { damping: 15, stiffness: 300 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(Number(value));
    }, 100);
    return () => clearTimeout(timer);
  }, [value]);

  const colorClasses = {
    purple: 'from-purple-500 to-purple-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    red: 'from-red-500 to-red-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn("cursor-pointer", className)}
      onClick={onClick}
    >
      <Card className="p-6 hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={cn(
            "p-3 rounded-lg bg-gradient-to-r",
            colorClasses[color as keyof typeof colorClasses]
          )}>
            {icon}
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-gray-400 hover:text-gray-600"
              >
                <MoreHorizontal className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mb-2">
          <h3 className="text-sm font-medium text-gray-600 mb-1">{title}</h3>
          <div className="text-2xl font-bold text-gray-900">
            {typeof value === 'number' ? displayValue.toLocaleString() : value}
          </div>
        </div>

        <div className="flex items-center">
          <Badge 
            variant="secondary" 
            className={cn(
              "text-xs",
              changeType === 'increase' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
            )}
          >
            {changeType === 'increase' ? (
              <ArrowUpRight className="w-3 h-3 mr-1" />
            ) : (
              <ArrowDownRight className="w-3 h-3 mr-1" />
            )}
            {change}%
          </Badge>
          <span className="text-xs text-gray-500 ml-2">vs last month</span>
        </div>
      </Card>
    </motion.div>
  );
};

// Animated Chart Widget
interface AnimatedChartWidgetProps {
  title: string;
  data: Array<{ label: string; value: number; color: string }>;
  className?: string;
}

export const AnimatedChartWidget: React.FC<AnimatedChartWidgetProps> = ({
  title,
  data,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const total = data.reduce((sum, item) => sum + item.value, 0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card className={cn("p-6", className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-medium text-gray-900">
                  {item.value.toLocaleString()}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isVisible ? `${percentage}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

// Animated Activity Feed
interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar?: string;
  type: 'success' | 'warning' | 'info' | 'error';
}

interface AnimatedActivityFeedProps {
  activities: ActivityItem[];
  className?: string;
}

export const AnimatedActivityFeed: React.FC<AnimatedActivityFeedProps> = ({
  activities,
  className
}) => {
  const [expanded, setExpanded] = useState(false);

  const getTypeColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'success': return <TrendingUp className="w-4 h-4" />;
      case 'warning': return <Target className="w-4 h-4" />;
      case 'info': return <Eye className="w-4 h-4" />;
      case 'error': return <Zap className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </div>

      <div className="space-y-4">
        {activities.slice(0, expanded ? activities.length : 5).map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className={cn(
              "p-2 rounded-full",
              getTypeColor(activity.type)
            )}>
              {getTypeIcon(activity.type)}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

// Animated Progress Ring
interface AnimatedProgressRingProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

export const AnimatedProgressRing: React.FC<AnimatedProgressRingProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  color = '#8b5cf6',
  className
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={cn("relative inline-block", className)}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          initial={{ strokeDasharray, strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>
      
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{progress}%</div>
          <div className="text-sm text-gray-500">Complete</div>
        </div>
      </div>
    </div>
  );
};

// Animated Stats Grid
interface AnimatedStatsGridProps {
  stats: Array<{
    title: string;
    value: string | number;
    change: number;
    changeType: 'increase' | 'decrease';
    icon: React.ReactNode;
    color?: string;
  }>;
  className?: string;
}

export const AnimatedStatsGrid: React.FC<AnimatedStatsGridProps> = ({
  stats,
  className
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", className)}>
      {stats.map((stat, index) => (
        <AnimatedMetricCard
          key={index}
          {...stat}
        />
      ))}
    </div>
  );
};

// Animated Goal Tracker
interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  deadline: string;
  color: string;
}

interface AnimatedGoalTrackerProps {
  goals: Goal[];
  className?: string;
}

export const AnimatedGoalTracker: React.FC<AnimatedGoalTrackerProps> = ({
  goals,
  className
}) => {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Goal Tracker</h3>
      
      <div className="space-y-6">
        {goals.map((goal, index) => {
          const progress = (goal.current / goal.target) * 100;
          
          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{goal.title}</h4>
                <span className="text-sm text-gray-500">{goal.deadline}</span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                </span>
                <span className="font-medium text-gray-900">{progress.toFixed(1)}%</span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: goal.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
};
