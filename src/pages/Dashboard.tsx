import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Target,
  CheckCircle,
  AlertCircle,
  XCircle,
  Info
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Dashboard() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t('dashboard.totalUsers'),
      value: "12,345",
      change: "+12.5%",
      changeType: "positive" as const,
      icon: Users,
      description: t('dashboard.last30Days')
    },
    {
      title: t('dashboard.totalRevenue'),
      value: "₺45,678",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: t('dashboard.thisMonth')
    },
    {
      title: t('dashboard.activeProjects'),
      value: "23",
      change: "+5.1%",
      changeType: "positive" as const,
      icon: Activity,
      description: t('dashboard.ongoing')
    },
    {
      title: t('dashboard.pendingTasks'),
      value: "156",
      change: "-2.3%",
      changeType: "negative" as const,
      icon: Target,
      description: t('dashboard.pending')
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Samet UCA",
      action: t('dashboard.newUserRegistered'),
      target: "Mehmet Demir",
      time: t('dashboard.2minutesAgo'),
      type: "success" as const,
      avatar: "AY"
    },
    {
      id: 2,
      user: "Fatma Kaya",
      action: t('dashboard.projectUpdated'),
      target: t('dashboard.ecommerceSite'),
      time: t('dashboard.15minutesAgo'),
      type: "info" as const,
      avatar: "FK"
    },
    {
      id: 3,
      user: "Ali Özkan",
      action: t('dashboard.reportCreated'),
      target: "Aylık Analiz",
      time: t('dashboard.1hourAgo'),
      type: "warning" as const,
      avatar: "AÖ"
    },
    {
      id: 4,
      user: "Zeynep Arslan",
      action: t('dashboard.systemErrorReported'),
      target: "Login API",
      time: t('dashboard.3hoursAgo'),
      type: "error" as const,
      avatar: "ZA"
    }
  ];

  const quickActions = [
    { title: t('dashboard.addNewUser'), icon: Users, color: "bg-blue-500" },
    { title: t('dashboard.createReport'), icon: BarChart3, color: "bg-green-500" },
    { title: t('dashboard.startProject'), icon: Activity, color: "bg-purple-500" },
    { title: t('dashboard.scheduleMeeting'), icon: Calendar, color: "bg-orange-500" }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'info':
        return <Info className="h-4 w-4 text-blue-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('dashboard.pageTitle')}</title>
        <meta name="description" content={t('dashboard.metaDescription')} />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.welcome')}</h1>
          <p className="text-muted-foreground">
            {t('dashboard.projectOverview')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  {stat.change}
                  <span className="ml-1">{stat.description}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Activities */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>{t('dashboard.recentActivities')}</CardTitle>
              <CardDescription>
                {t('dashboard.systemRecentOperations')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{activity.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {activity.user}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.action} <span className="font-medium">{activity.target}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getActivityIcon(activity.type)}
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>{t('dashboard.quickActions')}</CardTitle>
              <CardDescription>
                {t('dashboard.frequentlyUsedOperations')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {quickActions.map((action, index) => (
                  <Button key={index} variant="outline" className="justify-start h-auto p-3">
                    <div className={`${action.color} p-2 rounded mr-3`}>
                      <action.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">{action.title}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Content */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.projectStatus')}</CardTitle>
              <CardDescription>
                {t('dashboard.activeProjectsGeneralStatus')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t('dashboard.ecommerceSite')}</span>
                  <Badge variant="default">%75</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t('dashboard.mobileApp')}</span>
                  <Badge variant="secondary">%45</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t('dashboard.adminPanel')}</span>
                  <Badge variant="outline">%90</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('dashboard.systemStatus')}</CardTitle>
              <CardDescription>
                {t('dashboard.serverAndServiceStatus')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('dashboard.webServer')}</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {t('dashboard.running')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('dashboard.database')}</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {t('dashboard.running')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('dashboard.apiService')}</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    {t('dashboard.running')}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{t('dashboard.emailService')}</span>
                  <Badge variant="destructive">
                    {t('dashboard.error')}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
