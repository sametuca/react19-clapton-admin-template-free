'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw, AlertCircle, Lightbulb, TrendingUp, Users, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

type TimeRange = '24h' | '7d' | '30d' | '90d' | 'all';
type InsightType = 'sales' | 'users' | 'traffic' | 'conversion' | 'revenue';

type DataPoint = {
  date?: string;
  value: number;
  category?: string;
  previousValue?: number;
  change?: number;
};

type Insight = {
  id: string;
  title: string;
  description: string;
  type: InsightType;
  importance: 'high' | 'medium' | 'low';
  timestamp: number;
  data: DataPoint[];
  suggestions?: string[];
};

const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

// Mock data generation functions
const generateTimeSeriesData = (days: number, min: number, max: number): DataPoint[] => {
  const now = new Date();
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(now);
    date.setDate(date.getDate() - (days - i - 1));
    return {
      date: date.toISOString().split('T')[0],
      value: Math.floor(Math.random() * (max - min + 1)) + min,
    };
  });
};

const generateCategoryData = (categories: string[]): DataPoint[] => {
  return categories.map((category, i) => ({
    category,
    value: Math.floor(Math.random() * 1000) + 100,
  }));
};

const generateMockInsights = (): Insight[] => {
  const categories = ['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Sports', 'Other'];
  const now = Date.now();
  
  return [
    {
      id: '1',
      title: 'Sales Performance',
      description: 'Analyzing your sales data for the selected period',
      type: 'sales',
      importance: 'high',
      timestamp: now - 3600000, // 1 hour ago
      data: generateTimeSeriesData(30, 50, 500),
      suggestions: [
        'Consider running a promotion on weekends when sales are typically lower',
        'Top performing category is Electronics - consider increasing inventory',
      ],
    },
    {
      id: '2',
      title: 'User Engagement',
      description: 'User activity and engagement metrics',
      type: 'users',
      importance: 'high',
      timestamp: now - 7200000, // 2 hours ago
      data: generateTimeSeriesData(7, 100, 2000),
    },
    {
      id: '3',
      title: 'Revenue by Category',
      description: 'Revenue distribution across product categories',
      type: 'revenue',
      importance: 'medium',
      timestamp: now - 86400000, // 1 day ago
      data: generateCategoryData(categories),
    },
    {
      id: '4',
      title: 'Traffic Sources',
      description: 'Where your visitors are coming from',
      type: 'traffic',
      importance: 'medium',
      timestamp: now - 172800000, // 2 days ago
      data: [
        { category: 'Organic Search', value: 45 },
        { category: 'Direct', value: 25 },
        { category: 'Social Media', value: 20 },
        { category: 'Referral', value: 10 },
      ],
    },
  ];
};

export function AIInsights() {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  useEffect(() => {
    setInsights(generateMockInsights());
  }, []);

  const refreshInsights = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setInsights(generateMockInsights());
    setIsLoading(false);
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high':
        return 'text-red-400 bg-red-500/10 border-red-500/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'low':
        return 'text-green-400 bg-green-500/10 border-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getTypeIcon = (type: InsightType) => {
    switch (type) {
      case 'sales':
        return <ShoppingCart className="h-5 w-5" />;
      case 'users':
        return <Users className="h-5 w-5" />;
      case 'traffic':
        return <TrendingUp className="h-5 w-5" />;
      case 'revenue':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">AI Insights & Analytics</h2>
          <p className="text-muted-foreground">Intelligent analysis powered by artificial intelligence</p>
        </div>
        <Button
          onClick={refreshInsights}
          disabled={isLoading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg"
        >
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="mr-2 h-4 w-4" />
          )}
          Refresh
        </Button>
      </div>

      {/* Time Range Selector */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-muted-foreground">Time Range:</span>
        <Tabs value={timeRange} onValueChange={(value) => setTimeRange(value as TimeRange)}>
          <TabsList className="bg-muted border border-border">
            <TabsTrigger value="24h" className="text-muted-foreground data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">24h</TabsTrigger>
            <TabsTrigger value="7d" className="text-muted-foreground data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">7d</TabsTrigger>
            <TabsTrigger value="30d" className="text-muted-foreground data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">30d</TabsTrigger>
            <TabsTrigger value="90d" className="text-muted-foreground data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">90d</TabsTrigger>
            <TabsTrigger value="all" className="text-muted-foreground data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <Card
            key={insight.id}
            className="bg-card border border-border hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all cursor-pointer group"
            onClick={() => setSelectedInsight(insight)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30">
                    {getTypeIcon(insight.type)}
                  </div>
                  <div>
                    <CardTitle className="text-foreground group-hover:text-purple-300 transition-colors">
                      {insight.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {insight.description}
                    </CardDescription>
                  </div>
                </div>
                <div className={cn(
                  'px-2 py-1 rounded-full text-xs font-medium border',
                  getImportanceColor(insight.importance)
                )}>
                  {insight.importance}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">
                  Last updated: {formatTime(insight.timestamp)}
                </div>
                
                {insight.suggestions && insight.suggestions.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm font-medium text-purple-300">
                      <Lightbulb className="h-4 w-4" />
                      <span>AI Suggestions</span>
                    </div>
                    <div className="space-y-1">
                      {insight.suggestions.slice(0, 2).map((suggestion, index) => (
                        <div key={index} className="text-xs text-muted-foreground bg-accent rounded-lg p-2 border border-border">
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected Insight Detail */}
      {selectedInsight && (
        <Card className="bg-card border border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">{selectedInsight.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{selectedInsight.description}</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedInsight(null)}
                className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              >
                Close
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Chart */}
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  {selectedInsight.type === 'revenue' || selectedInsight.type === 'traffic' ? (
                    <PieChart>
                      <Pie
                        data={selectedInsight.data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ category, percent }) => `${category} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {selectedInsight.data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                    </PieChart>
                  ) : (
                    <BarChart data={selectedInsight.data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis 
                        dataKey="date" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                      />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--background))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                          color: 'hsl(var(--foreground))'
                        }}
                      />
                      <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>

              {/* Data Table */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3">Data Points</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-muted-foreground font-medium">Date/Category</th>
                        <th className="text-right py-2 text-muted-foreground font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedInsight.data.slice(0, 10).map((point, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-2 text-muted-foreground">
                            {point.date || point.category}
                          </td>
                          <td className="py-2 text-right text-foreground font-medium">
                            {point.value.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
