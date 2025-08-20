import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatsCard } from "@/components/ui/stats-card";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { MetricChart } from "@/components/ui/metric-chart";
import { DataTable } from "@/components/ui/data-table";
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
  Info,
  FileText,
  Settings as SettingsIcon,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Dashboard() {
  const { t } = useLanguage();

  const statsData = [
    {
      title: t('dashboard.totalUsers'),
      value: 12345,
      change: 12.5,
      changeType: "positive" as const,
      icon: Users,
      description: t('dashboard.last30Days'),
      suffix: ""
    },
    {
      title: t('dashboard.totalRevenue'),
      value: 45678,
      change: 8.2,
      changeType: "positive" as const,
      icon: DollarSign,
      description: t('dashboard.thisMonth'),
      prefix: "₺"
    },
    {
      title: t('dashboard.activeProjects'),
      value: 23,
      change: 5.1,
      changeType: "positive" as const,
      icon: Activity,
      description: t('dashboard.ongoing')
    },
    {
      title: t('dashboard.pendingTasks'),
      value: 156,
      change: -2.3,
      changeType: "negative" as const,
      icon: Target,
      description: t('dashboard.pending')
    }
  ];

  const activities = [
    {
      id: "1",
      user: {
        name: "Samet UCA",
        initials: "SU"
      },
      action: t('dashboard.newUserRegistered'),
      target: "Mehmet Demir",
      time: t('dashboard.2minutesAgo'),
      type: "success" as const,
      icon: Users
    },
    {
      id: "2",
      user: {
        name: "Fatma Kaya",
        initials: "FK"
      },
      action: t('dashboard.projectUpdated'),
      target: t('dashboard.ecommerceSite'),
      time: t('dashboard.15minutesAgo'),
      type: "info" as const,
      icon: FileText
    },
    {
      id: "3",
      user: {
        name: "Ali Özkan",
        initials: "AÖ"
      },
      action: t('dashboard.reportCreated'),
      target: "Aylık Analiz",
      time: t('dashboard.1hourAgo'),
      type: "warning" as const,
      icon: BarChart3
    },
    {
      id: "4",
      user: {
        name: "Zeynep Arslan",
        initials: "ZA"
      },
      action: t('dashboard.systemErrorReported'),
      target: "Login API",
      time: t('dashboard.3hoursAgo'),
      type: "error" as const,
      icon: AlertCircle
    }
  ];

  const chartData = [
    { label: "Ocak", value: 4500, color: "bg-blue-500" },
    { label: "Şubat", value: 5200, color: "bg-green-500" },
    { label: "Mart", value: 4800, color: "bg-purple-500" },
    { label: "Nisan", value: 6100, color: "bg-orange-500" },
    { label: "Mayıs", value: 6800, color: "bg-red-500" },
    { label: "Haziran", value: 7200, color: "bg-indigo-500" }
  ];

  const tableData = [
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", role: "Admin", status: "Aktif", lastLogin: "2 saat önce" },
    { id: 2, name: "Fatma Kaya", email: "fatma@example.com", role: "Editör", status: "Aktif", lastLogin: "1 gün önce" },
    { id: 3, name: "Mehmet Demir", email: "mehmet@example.com", role: "Üye", status: "Pasif", lastLogin: "1 hafta önce" },
    { id: 4, name: "Ayşe Özkan", email: "ayse@example.com", role: "Editör", status: "Aktif", lastLogin: "3 saat önce" },
    { id: 5, name: "Ali Arslan", email: "ali@example.com", role: "Üye", status: "Aktif", lastLogin: "5 dakika önce" }
  ];

  const tableColumns = [
    { key: 'id' as keyof typeof tableData[0], title: 'ID', sortable: true },
    { key: 'name' as keyof typeof tableData[0], title: 'Ad Soyad', sortable: true },
    { key: 'email' as keyof typeof tableData[0], title: 'E-posta', sortable: true },
    { 
      key: 'role' as keyof typeof tableData[0], 
      title: 'Rol', 
      render: (value: string) => <Badge variant="outline">{value}</Badge>
    },
    { 
      key: 'status' as keyof typeof tableData[0], 
      title: 'Durum',
      render: (value: string) => (
        <Badge variant={value === 'Aktif' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    { key: 'lastLogin' as keyof typeof tableData[0], title: 'Son Giriş' }
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
              description={stat.description}
              prefix={stat.prefix}
              suffix={stat.suffix}
              gradient={true}
            />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Activities */}
          <ActivityFeed 
            activities={activities}
            title={t('dashboard.recentActivities')}
          />

          {/* Metric Chart */}
          <MetricChart
            title="Aylık Ziyaretçiler"
            data={chartData}
            total={34400}
            change={15.3}
            changeType="positive"
          />

          {/* Quick Actions */}
          <Card>
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
        <div className="grid gap-6 lg:grid-cols-2">
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

        {/* Data Table */}
        <DataTable
          data={tableData}
          columns={tableColumns}
          title="Son Kullanıcılar"
          searchable={true}
          filterable={true}
          exportable={true}
          pageSize={5}
        />
      </div>
    </>
  );
}
