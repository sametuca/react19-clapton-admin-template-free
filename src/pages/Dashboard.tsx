import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign, 
  Activity, 
  BarChart3, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Clock,
  Target,
  CheckCircle,
  AlertCircle,
  TrendingDown,
  Eye,
  MousePointer,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Palette,
  Code,
  Rocket,
  Layers,
  Sparkles,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Dashboard() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('dashboard.totalUsers'),
      value: "12,345",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: t('dashboard.totalRevenue'),
      value: "$45,678",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('dashboard.activeProjects'),
      value: "23",
      change: "+5.1%",
      changeType: "positive",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: t('dashboard.pendingTasks'),
      value: "156",
      change: "-2.3%",
      changeType: "negative",
      icon: Clock,
      color: "from-orange-500 to-red-500"
    }
  ];

  const recentActivities = [
    {
      user: "Ahmet Yılmaz",
      action: t('dashboard.newUserRegistered'),
      time: t('dashboard.2minutesAgo'),
      icon: Users,
      color: "text-blue-400"
    },
    {
      user: "Fatma Demir",
      action: t('dashboard.projectUpdated'),
      time: t('dashboard.15minutesAgo'),
      icon: Target,
      color: "text-green-400"
    },
    {
      user: "Mehmet Kaya",
      action: t('dashboard.reportCreated'),
      time: t('dashboard.1hourAgo'),
      icon: FileText,
      color: "text-purple-400"
    },
    {
      user: "Ayşe Özkan",
      action: t('dashboard.systemErrorReported'),
      time: t('dashboard.3hoursAgo'),
      icon: AlertCircle,
      color: "text-red-400"
    }
  ];

  const quickActions = [
    {
      title: t('dashboard.addNewUser'),
      description: "Yeni kullanıcı ekleyin",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      url: "/users"
    },
    {
      title: t('dashboard.createReport'),
      description: "Rapor oluşturun",
      icon: FileText,
      color: "from-green-500 to-emerald-500",
      url: "/analytics"
    },
    {
      title: t('dashboard.startProject'),
      description: "Yeni proje başlatın",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      url: "/projects"
    },
    {
      title: t('dashboard.scheduleMeeting'),
      description: "Toplantı planlayın",
      icon: Calendar,
      color: "from-orange-500 to-red-500",
      url: "/calendar"
    }
  ];

  const projectStatus = [
    {
      name: t('dashboard.ecommerceSite'),
      progress: 75,
      status: t('dashboard.ongoing'),
      team: "Frontend Team",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: t('dashboard.mobileApp'),
      progress: 45,
      status: t('dashboard.ongoing'),
      team: "Mobile Team",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: t('dashboard.adminPanel'),
      progress: 90,
      status: t('dashboard.ongoing'),
      team: "Backend Team",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const systemStatus = [
    {
      service: t('dashboard.webServer'),
      status: t('dashboard.running'),
      uptime: "99.9%",
      color: "text-green-400"
    },
    {
      service: t('dashboard.database'),
      status: t('dashboard.running'),
      uptime: "99.8%",
      color: "text-green-400"
    },
    {
      service: t('dashboard.apiService'),
      status: t('dashboard.running'),
      uptime: "99.7%",
      color: "text-green-400"
    },
    {
      service: t('dashboard.emailService'),
      status: t('dashboard.running'),
      uptime: "99.5%",
      color: "text-green-400"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('dashboard.pageTitle')}</title>
        <meta name="description" content={t('dashboard.metaDescription')} />
      </Helmet>

      <div className="p-6 space-y-6">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold gradient-text-primary">
              {t('dashboard.welcome')}, Samet! 👋
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('dashboard.projectOverview')}
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="stats-card group">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-white/60">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-white">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === "positive" ? "text-green-400" : "text-red-400"
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-white/60">
                    {t('dashboard.last30Days')}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Zap className="w-5 h-5 text-blue-400" />
                  {t('dashboard.quickActions')}
                </CardTitle>
                <CardDescription className="text-white/60">
                  {t('dashboard.frequentlyUsedOperations')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {quickActions.map((action, index) => (
                    <Link key={index} to={action.url}>
                      <div className="group p-4 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 hover:bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors">
                              {action.title}
                            </h3>
                            <p className="text-sm text-white/60">
                              {action.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activities */}
          <div>
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Activity className="w-5 h-5 text-green-400" />
                  {t('dashboard.recentActivities')}
                </CardTitle>
                <CardDescription className="text-white/60">
                  {t('dashboard.systemRecentOperations')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center ${activity.color}`}>
                          <activity.icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">
                            {activity.user}
                          </p>
                          <p className="text-sm text-white/60">
                            {activity.action}
                          </p>
                          <p className="text-xs text-white/40">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project Status */}
        <Card className="glassmorphism-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5 text-purple-400" />
              {t('dashboard.projectStatus')}
            </CardTitle>
            <CardDescription className="text-white/60">
              {t('dashboard.activeProjectsGeneralStatus')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projectStatus.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-white">{project.name}</h3>
                      <p className="text-sm text-white/60">{project.team}</p>
                    </div>
                    <Badge variant="secondary" className="badge-glass">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Progress</span>
                      <span className="text-white">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="glassmorphism-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-blue-400" />
              {t('dashboard.systemStatus')}
            </CardTitle>
            <CardDescription className="text-white/60">
              {t('dashboard.serverAndServiceStatus')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {systemStatus.map((service, index) => (
                <div key={index} className="p-4 rounded-lg border border-white/10 bg-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full ${service.color} bg-current`}></div>
                    <span className="text-sm font-medium text-white">
                      {service.service}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-white/60">{service.status}</p>
                    <p className="text-sm font-medium text-white">{service.uptime}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
