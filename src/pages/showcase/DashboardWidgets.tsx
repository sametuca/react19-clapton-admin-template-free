import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Eye,
  Calendar,
  Clock,
  MapPin,
  Star,
  MessageCircle,
  Heart,
  Share2,
  MoreHorizontal,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  Zap,
  Target,
  Award,
  BarChart3
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernCard } from "@/components/ui/modern-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function DashboardWidgets() {
  const { t } = useLanguage();

  const kpiData = [
    {
      title: t('showcase.dashboard.kpis.totalSales'),
      value: 245680,
      change: 12.5,
      changeType: "positive" as const,
      icon: DollarSign,
      prefix: "$",
      color: "text-green-600",
      description: t('showcase.dashboard.kpis.last30Days')
    },
    {
      title: t('showcase.dashboard.kpis.activeUsers'),
      value: 12450,
      change: -2.3,
      changeType: "negative" as const,
      icon: Users,
      suffix: "",
      color: "text-blue-600",
      description: t('showcase.dashboard.kpis.thisMonth')
    },
    {
      title: t('showcase.dashboard.kpis.orders'),
      value: 1847,
      change: 8.7,
      changeType: "positive" as const,
      icon: ShoppingCart,
      suffix: "",
      color: "text-purple-600",
      description: t('showcase.dashboard.kpis.ongoing')
    },
    {
      title: t('showcase.dashboard.kpis.pageViews'),
      value: 892450,
      change: 15.2,
      changeType: "positive" as const,
      icon: Eye,
      suffix: "",
      color: "text-orange-600",
      description: t('showcase.dashboard.kpis.thisWeek')
    }
  ];

  const recentActivities = [
    {
      user: "Ahmet Yılmaz",
      action: t('showcase.dashboard.recentActivities.newOrder'),
      time: "2 dakika önce",
      avatar: "AY",
      status: "success"
    },
    {
      user: "Zeynep Kaya",
      action: t('showcase.dashboard.recentActivities.profileUpdated'),
      time: "5 dakika önce", 
      avatar: "ZK",
      status: "info"
    },
    {
      user: "Mehmet Demir",
      action: t('showcase.dashboard.recentActivities.productReview'),
      time: "12 dakika önce",
      avatar: "MD", 
      status: "default"
    },
    {
      user: "Ayşe Şahin",
      action: t('showcase.dashboard.recentActivities.supportRequest'),
      time: "1 saat önce",
      avatar: "AS",
      status: "warning"
    }
  ];

  const projectProgress = [
    { name: t('showcase.dashboard.projects.ecommerce'), progress: 85, color: "bg-blue-500", deadline: "15 Mart" },
    { name: t('showcase.dashboard.projects.mobileApp'), progress: 92, color: "bg-green-500", deadline: "22 Mart" },
    { name: t('showcase.dashboard.projects.dashboardRedesign'), progress: 67, color: "bg-purple-500", deadline: "30 Mart" },
    { name: t('showcase.dashboard.projects.apiIntegration'), progress: 43, color: "bg-orange-500", deadline: "5 Nisan" }
  ];

  const topProducts = [
    { name: t('showcase.dashboard.topProducts.wirelessHeadphones'), sales: 1250, revenue: 45600, growth: 15.2 },
    { name: t('showcase.dashboard.topProducts.smartWatch'), sales: 980, revenue: 38400, growth: 8.7 },
    { name: t('showcase.dashboard.topProducts.bluetoothSpeaker'), sales: 756, revenue: 22680, growth: -3.1 },
    { name: t('showcase.dashboard.topProducts.tabletCase'), sales: 634, revenue: 15850, growth: 12.4 }
  ];

  const socialMetrics = [
    { platform: t('showcase.dashboard.socialMedia.instagram'), followers: 125600, engagement: 4.2, posts: 156 },
    { platform: t('showcase.dashboard.socialMedia.twitter'), followers: 89400, engagement: 3.8, posts: 234 },
    { platform: t('showcase.dashboard.socialMedia.linkedin'), followers: 45200, engagement: 6.1, posts: 89 },
    { platform: t('showcase.dashboard.socialMedia.youtube'), followers: 67800, engagement: 5.4, posts: 45 }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.dashboard.pageTitle')}</title>
        <meta name="description" content={t('showcase.dashboard.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.dashboard.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.dashboard.description')}
          </p>
        </div>

        {/* KPI Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.dashboard.sections.kpis')}</h2>
            <Badge variant="default">{t('showcase.dashboard.badges.liveData')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((item, index) => (
              <SpotlightCard
                key={index}
                title={item.title}
                description={`${item.changeType === "positive" ? "+" : ""}${item.change}% değişim`}
                icon={item.icon}
                spotlightColor={item.color.includes('green') ? '#10b981' : item.color.includes('blue') ? '#3b82f6' : item.color.includes('red') ? '#ef4444' : '#f59e0b'}
              >
                <div className="space-y-2">
                  <div className="text-2xl font-bold">
                    <AnimatedCounter 
                      value={item.value} 
                      prefix={item.prefix || ""} 
                      suffix={item.suffix || ""}
                      duration={2000}
                    />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    item.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}>
                    {item.changeType === "positive" ? 
                      <TrendingUp className="h-4 w-4" /> : 
                      <TrendingDown className="h-4 w-4" />
                    }
                    {Math.abs(item.change)}%
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <SpotlightCard
            title={t('showcase.dashboard.recentActivities.title')}
            description="Son kullanıcı aktiviteleri"
            icon={Activity}
            spotlightColor="blue"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      <span className="text-muted-foreground">{activity.action}</span>
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                  <Badge variant={activity.status === "success" ? "default" : activity.status === "warning" ? "destructive" : "secondary"} className="shrink-0">
                    {activity.status === "success" && <CheckCircle className="h-3 w-3 mr-1" />}
                    {activity.status === "warning" && <AlertTriangle className="h-3 w-3 mr-1" />}
                    {activity.status === "info" && <Activity className="h-3 w-3 mr-1" />}
                  </Badge>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Project Progress */}
          <SpotlightCard
            title={t('showcase.dashboard.projects.title')}
            description="Proje ilerleme durumu"
            icon={Target}
            spotlightColor="green"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">{t('showcase.dashboard.buttons.viewAll')}</Button>
              </div>
              {projectProgress.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{project.name}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {t('showcase.dashboard.projects.deadline')}: {project.deadline}
                      </p>
                    </div>
                    <Badge variant="outline">{project.progress}%</Badge>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Products */}
          <SpotlightCard
            title={t('showcase.dashboard.topProducts.title')}
            description="En çok satan ürünler"
            icon={Award}
            spotlightColor="yellow"
          >
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} {t('showcase.dashboard.topProducts.sales')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${product.revenue.toLocaleString()}</p>
                    <p className={`text-sm flex items-center gap-1 ${
                      product.growth > 0 ? "text-green-600" : "text-red-600"
                    }`}>
                      {product.growth > 0 ? 
                        <TrendingUp className="h-3 w-3" /> : 
                        <TrendingDown className="h-3 w-3" />
                      }
                      {Math.abs(product.growth)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Social Media Metrics */}
          <SpotlightCard
            title={t('showcase.dashboard.socialMedia.title')}
            description="Sosyal medya performansı"
            icon={Share2}
            spotlightColor="purple"
          >
            <div className="space-y-4">
              {socialMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="font-medium">{metric.platform}</span>
                    </div>
                    <Badge variant="secondary">{metric.posts} {t('showcase.dashboard.socialMedia.posts')}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{t('showcase.dashboard.socialMedia.followers')}</p>
                      <p className="font-semibold">{metric.followers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{t('showcase.dashboard.socialMedia.engagement')}</p>
                      <p className="font-semibold">{metric.engagement}%</p>
                    </div>
                  </div>
                  {index < socialMetrics.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Real-time Notifications */}
        <SpotlightCard
          title={t('showcase.dashboard.notifications.title')}
          description="Sistem durumu bildirimleri"
          icon={Zap}
          spotlightColor="orange"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <CheckCircle className="h-4 w-4" />
                <span className="font-medium">{t('showcase.dashboard.notifications.systemOnline')}</span>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                {t('showcase.dashboard.notifications.allSystemsNormal')}
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                <AlertTriangle className="h-4 w-4" />
                <span className="font-medium">{t('showcase.dashboard.notifications.maintenanceScheduled')}</span>
              </div>
              <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                {t('showcase.dashboard.notifications.maintenanceTime')}: 23:00-01:00
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <Activity className="h-4 w-4" />
                <span className="font-medium">{t('showcase.dashboard.notifications.highTraffic')}</span>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                {t('showcase.dashboard.notifications.normalLevel')}: %150
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
}
