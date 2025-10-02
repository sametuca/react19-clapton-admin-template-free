import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card3D, ImageCard3D, Card3DGrid } from '@/components/ui/3d-card';
import { ParallaxHero, ParallaxHeroWithStats } from '@/components/ui/parallax-hero';
import { InteractiveTimeline } from '@/components/ui/interactive-timeline';
import { GlassmorphismCard } from '@/components/ui/glassmorphism-card';
import { HolographicCard } from '@/components/ui/holographic-card';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { NeonBorder } from '@/components/ui/neon-border';
import { LiquidProgress } from '@/components/ui/liquid-progress';
import { QuantumLoader } from '@/components/ui/quantum-loader';
import { 
  AnimatedMetricCard, 
  AnimatedChartWidget, 
  AnimatedActivityFeed,
  AnimatedProgressRing,
  AnimatedStatsGrid,
  AnimatedGoalTracker
} from '@/components/ui/animated-dashboard-widgets';
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp,
  Star,
  Zap,
  Target,
  Calendar,
  MapPin,
  Award,
  Crown,
  Sparkles,
  Rocket,
  Shield,
  Globe,
  Heart,
  Eye,
  Download,
  Share2,
  Settings,
  Code,
  Palette,
  Layers,
  Cpu,
  Database,
  Monitor,
  Smartphone,
  Tablet,
  Headphones,
  Camera,
  Video,
  Music,
  Coffee,
  Gift,
  Trophy,
  Medal,
  Diamond,
  Gem,
  Flame,
  Droplets,
  Wind,
  Mountain,
  Sun,
  Moon,
  Atom,
  Waves
} from 'lucide-react';

const PremiumComponents = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('3d-cards');
  const [liquidProgress, setLiquidProgress] = useState(65);

  // Sample data for 3D Cards
  const sampleCards = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
      title: 'Modern Dashboard',
      description: 'Beautiful admin dashboard with premium components',
      badge: 'New'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: 'Analytics Platform',
      description: 'Advanced analytics and reporting tools',
      badge: 'Popular'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'E-commerce Suite',
      description: 'Complete e-commerce management solution',
      badge: 'Featured'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      title: 'CRM System',
      description: 'Customer relationship management platform',
      badge: 'Pro'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      title: 'Project Manager',
      description: 'Advanced project management tools',
      badge: 'Enterprise'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      title: 'Finance Tracker',
      description: 'Personal and business finance management',
      badge: 'Premium'
    }
  ];

  // Sample data for Timeline
  const timelineItems = [
    {
      id: '1',
      date: '2024 Q1',
      title: 'Project Launch',
      description: 'Successfully launched the premium admin template with 200+ components',
      category: 'Development',
      status: 'completed' as const,
      location: 'Remote',
      participants: 15,
      achievements: ['MVP Released', '100+ Users'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    },
    {
      id: '2',
      date: '2024 Q2',
      title: 'Feature Expansion',
      description: 'Added advanced analytics, 3D components, and interactive widgets',
      category: 'Enhancement',
      status: 'in-progress' as const,
      location: 'Remote',
      participants: 20,
      achievements: ['3D Components', 'Analytics Dashboard'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: '3',
      date: '2024 Q3',
      title: 'Market Expansion',
      description: 'Expanding to international markets with localized versions',
      category: 'Business',
      status: 'upcoming' as const,
      location: 'Global',
      participants: 25,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  // Sample data for Dashboard Widgets
  const statsData = [
    {
      title: 'Total Users',
      value: 12543,
      change: 12.5,
      changeType: 'increase' as const,
      icon: <Users className="w-6 h-6 text-white" />,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: 45678,
      change: 8.2,
      changeType: 'increase' as const,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      color: 'green'
    },
    {
      title: 'Orders',
      value: 892,
      change: 3.1,
      changeType: 'decrease' as const,
      icon: <ShoppingCart className="w-6 h-6 text-white" />,
      color: 'blue'
    },
    {
      title: 'Growth',
      value: 23.4,
      change: 15.7,
      changeType: 'increase' as const,
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      color: 'orange'
    }
  ];

  const chartData = [
    { label: 'Desktop', value: 45, color: '#8b5cf6' },
    { label: 'Mobile', value: 35, color: '#06b6d4' },
    { label: 'Tablet', value: 20, color: '#10b981' }
  ];

  const activities = [
    {
      id: '1',
      user: 'John Doe',
      action: 'completed',
      target: 'Project Alpha',
      time: '2 minutes ago',
      type: 'success' as const
    },
    {
      id: '2',
      user: 'Jane Smith',
      action: 'updated',
      target: 'User Profile',
      time: '5 minutes ago',
      type: 'info' as const
    },
    {
      id: '3',
      user: 'Mike Johnson',
      action: 'created',
      target: 'New Report',
      time: '10 minutes ago',
      type: 'success' as const
    }
  ];

  const goals = [
    {
      id: '1',
      title: 'User Acquisition',
      target: 50000,
      current: 35000,
      unit: 'users',
      deadline: 'Dec 2024',
      color: '#8b5cf6'
    },
    {
      id: '2',
      title: 'Revenue Target',
      target: 1000000,
      current: 750000,
      unit: 'USD',
      deadline: 'Dec 2024',
      color: '#10b981'
    }
  ];

  const premiumFeatures = [
    {
      title: "3D Interactive Cards",
      description: "Gerçek 3D efektli kartlar ve hover animasyonları",
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
      features: ["Mouse tracking", "3D transformations", "Glow effects", "Custom intensity"]
    },
    {
      title: "Holographic Effects",
      description: "Futuristik hologram efektli komponentler",
      icon: Gem,
      color: "from-purple-500 to-pink-500",
      features: ["Hologram overlay", "Scanning effects", "Neon borders", "Cyber aesthetics"]
    },
    {
      title: "Liquid Animations",
      description: "Akışkan animasyonlar ve morfoloji efektleri",
      icon: Droplets,
      color: "from-green-500 to-emerald-500",
      features: ["Liquid progress", "Wave animations", "Morphing shapes", "Fluid transitions"]
    },
    {
      title: "Neural Networks",
      description: "AI temalı arka plan ve parçacık efektleri",
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      features: ["Particle systems", "Neural networks", "AI backgrounds", "Quantum effects"]
    }
  ];

  const interactiveExamples = [
    {
      title: "Magnetic Buttons",
      description: "Mouse'u takip eden manyetik butonlar",
      component: (
        <div className="space-y-4">
          <MagneticButton icon={Rocket} magneticStrength={0.4} glowColor="#8b5cf6">
            Magnetic Effect
          </MagneticButton>
          <MagneticButton icon={Heart} variant="outline" magneticStrength={0.6} glowColor="#ec4899">
            Strong Magnetic
          </MagneticButton>
        </div>
      )
    },
    {
      title: "Liquid Progress",
      description: "Sıvı efektli ilerleme çubukları",
      component: (
        <div className="space-y-4">
          <div className="flex justify-center">
            <LiquidProgress 
              value={liquidProgress} 
              size="lg" 
              color="#3b82f6"
              animated={true}
            />
          </div>
          <div className="flex gap-2 justify-center">
            <Button size="sm" onClick={() => setLiquidProgress(Math.max(0, liquidProgress - 10))}>
              -10%
            </Button>
            <Button size="sm" onClick={() => setLiquidProgress(Math.min(100, liquidProgress + 10))}>
              +10%
            </Button>
          </div>
        </div>
      )
    },
    {
      title: "Quantum Loader",
      description: "Gelişmiş kuantum temalı yükleyiciler",
      component: (
        <div className="flex justify-center gap-4">
          <QuantumLoader size="sm" color="#ec4899" />
          <QuantumLoader size="md" color="#10b981" />
          <QuantumLoader size="lg" color="#f59e0b" />
        </div>
      )
    },
    {
      title: "Neon Borders",
      description: "Neon ışık efektli kenarlıklar",
      component: (
        <div className="space-y-4">
          <NeonBorder color="#3b82f6" intensity="medium">
            <Button className="w-full">
              <Code className="h-4 w-4 mr-2" />
              Neon Effect
            </Button>
          </NeonBorder>
          <NeonBorder color="#ec4899" intensity="high" animated={true}>
            <Button variant="outline" className="w-full">
              <Palette className="h-4 w-4 mr-2" />
              Animated Neon
            </Button>
          </NeonBorder>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.premium.pageTitle')}</title>
        <meta name="description" content={t('showcase.premium.metaDescription')} />
      </Helmet>

      <div className="container mx-auto px-4 py-8 space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="h-10 w-10 text-yellow-500 animate-pulse" />
            <Badge variant="secondary" className="px-6 py-2 text-sm bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
              <Star className="w-4 h-4 mr-2" />
              {t('showcase.premium.badges.premium')}
            </Badge>
            <Crown className="h-10 w-10 text-yellow-500 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            {t('showcase.premium.title')}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '} {t('showcase.premium.titleSuffix')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('showcase.premium.description')}
          </p>
        </motion.div>

        {/* Premium Features Overview */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Premium Özellikler</h2>
            <p className="text-lg text-muted-foreground">Sadece premium kullanıcılar için özel tasarlanmış komponentler</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {premiumFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Interaktif Örnekler</h2>
            <p className="text-lg text-muted-foreground">Komponentleri canlı olarak test edin</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {interactiveExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{example.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    {example.component}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="3d-cards">{t('showcase.premium.tabs.3dCards')}</TabsTrigger>
            <TabsTrigger value="parallax">{t('showcase.premium.tabs.parallaxHero')}</TabsTrigger>
            <TabsTrigger value="timeline">{t('showcase.premium.tabs.interactiveTimeline')}</TabsTrigger>
            <TabsTrigger value="widgets">{t('showcase.premium.tabs.dashboardWidgets')}</TabsTrigger>
          </TabsList>

          {/* 3D Cards Tab */}
          <TabsContent value="3d-cards" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.3dCards')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('showcase.premium.sections.3dCardsDescription')}</p>
            </div>
            {/* Holographic Cards */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Holografik Kartlar</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <HolographicCard
                  title="Quantum Computing"
                  description="Kuantum bilgisayar kontrol paneli"
                  icon={Cpu}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Atom className="h-4 w-4" />
                      <span className="text-sm">Quantum Processor</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      1024 Qubit Capacity
                    </div>
                  </div>
                </HolographicCard>
                
                <HolographicCard
                  title="Neural Network"
                  description="AI sinir ağı monitörü"
                  icon={Database}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Globe className="h-4 w-4" />
                      <span className="text-sm">Global Connection</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Advanced AI Technology
                    </div>
                  </div>
                </HolographicCard>
                
                <HolographicCard
                  title="Cyber Security"
                  description="Siber güvenlik kontrol merkezi"
                  icon={Shield}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-400">
                      <Shield className="h-4 w-4" />
                      <span className="text-sm">256-bit Encryption</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      Military Grade Security
                    </div>
                  </div>
                </HolographicCard>
              </div>
            </div>
          </TabsContent>

          {/* Parallax Hero Tab */}
          <TabsContent value="parallax" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.parallaxHero')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('showcase.premium.sections.parallaxHeroDescription')}</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.basicParallaxHero')}</h3>
                <ParallaxHero
                  title={t('showcase.premium.sections.basicParallaxHeroTitle')}
                  subtitle={t('showcase.premium.sections.basicParallaxHeroSubtitle')}
                  description={t('showcase.premium.sections.basicParallaxHeroDescription')}
                  ctaText={t('showcase.premium.sections.basicParallaxHeroCta')}
                  ctaAction={() => console.log('CTA clicked')}
                  secondaryCtaText={t('showcase.premium.sections.basicParallaxHeroSecondaryCta')}
                  secondaryCtaAction={() => console.log('Secondary CTA clicked')}
                  height="60vh"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.parallaxHeroWithStats')}</h3>
                <ParallaxHeroWithStats
                  title={t('showcase.premium.sections.parallaxHeroWithStatsTitle')}
                  subtitle={t('showcase.premium.sections.parallaxHeroWithStatsSubtitle')}
                  description={t('showcase.premium.sections.parallaxHeroWithStatsDescription')}
                  ctaText={t('showcase.premium.sections.parallaxHeroWithStatsCta')}
                  ctaAction={() => console.log('Analytics CTA clicked')}
                  height="60vh"
                  stats={[
                    { number: "99.9%", label: t('showcase.premium.sections.parallaxHeroWithStatsUptime'), icon: <Zap className="w-6 h-6" /> },
                    { number: "50M+", label: t('showcase.premium.sections.parallaxHeroWithStatsDataPoints'), icon: <Target className="w-6 h-6" /> },
                    { number: "24/7", label: t('showcase.premium.sections.parallaxHeroWithStatsSupport'), icon: <Star className="w-6 h-6" /> },
                    { number: "100K+", label: t('showcase.premium.sections.parallaxHeroWithStatsUsers'), icon: <Users className="w-6 h-6" /> }
                  ]}
                />
              </div>
            </div>
          </TabsContent>

          {/* Interactive Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.interactiveTimeline')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('showcase.premium.sections.interactiveTimelineDescription')}</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.verticalTimeline')}</h3>
                <InteractiveTimeline
                  items={timelineItems}
                  variant="vertical"
                  showProgress={true}
                  interactive={true}
                  onItemClick={(item) => console.log('Timeline item clicked:', item)}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.horizontalTimeline')}</h3>
                <InteractiveTimeline
                  items={timelineItems}
                  variant="horizontal"
                  showProgress={true}
                  interactive={true}
                  onItemClick={(item) => console.log('Timeline item clicked:', item)}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.cardTimeline')}</h3>
                <InteractiveTimeline
                  items={timelineItems}
                  variant="cards"
                  showProgress={false}
                  interactive={true}
                  onItemClick={(item) => console.log('Timeline item clicked:', item)}
                />
              </div>
            </div>
          </TabsContent>

          {/* Dashboard Widgets Tab */}
          <TabsContent value="widgets" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.dashboardWidgets')}</h2>
              <p className="text-gray-600 dark:text-gray-300">{t('showcase.premium.sections.dashboardWidgetsDescription')}</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.metricCards')}</h3>
                <AnimatedStatsGrid stats={statsData} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.chartWidget')}</h3>
                  <AnimatedChartWidget
                    title={t('showcase.premium.sections.chartWidgetTitle')}
                    data={chartData}
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.progressRing')}</h3>
                  <div className="flex justify-center">
                    <AnimatedProgressRing
                      progress={75}
                      size={150}
                      color="#8b5cf6"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.activityFeed')}</h3>
                  <AnimatedActivityFeed activities={activities} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('showcase.premium.sections.goalTracker')}</h3>
                  <AnimatedGoalTracker goals={goals} />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Premium Showcase Grid */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Premium Komponent Galerisi</h2>
            <p className="text-lg text-muted-foreground">Tüm premium komponentlerin bir arada sergilendiği galeri</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Advanced Cards */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-blue-500 text-white">Pro</Badge>
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">System Monitor</CardTitle>
                <p className="text-sm text-muted-foreground">Real-time system performance tracking</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage</span>
                    <span className="font-semibold">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Memory</span>
                    <span className="font-semibold">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium">System Healthy</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-pink-500 text-white">Social</Badge>
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors">Engagement Hub</CardTitle>
                <p className="text-sm text-muted-foreground">Social media engagement analytics</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-purple-600">2.4K</div>
                    <div className="text-xs text-muted-foreground">Likes</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-pink-600">892</div>
                    <div className="text-xs text-muted-foreground">Shares</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">156</div>
                    <div className="text-xs text-muted-foreground">Comments</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium text-green-600">+18.5% this week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <Badge className="bg-green-500 text-white">Launch</Badge>
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Project Velocity</CardTitle>
                <p className="text-sm text-muted-foreground">Development speed and efficiency</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">94%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Sprint Progress</span>
                    <span className="font-semibold">8/10 tasks</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-medium">On Track</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-12 w-12 mr-4 text-yellow-300" />
              <Star className="h-8 w-8 text-yellow-300" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{t('showcase.premium.footerCta.title')}</h2>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              {t('showcase.premium.footerCta.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                <Crown className="h-4 w-4 mr-2" />
                {t('showcase.premium.footerCta.button')}
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Eye className="h-4 w-4 mr-2" />
                Daha Fazla Örnek
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
};

export default PremiumComponents;
