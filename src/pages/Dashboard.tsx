import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
  MapPin,
  Mail,
  Phone,
  Globe,
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
      description: "Son 30 günde"
    },
    {
      title: t('dashboard.totalRevenue'),
      value: "₺45,678",
      change: "+8.2%",
      changeType: "positive" as const,
      icon: DollarSign,
      description: "Bu ay"
    },
    {
      title: t('dashboard.activeProjects'),
      value: "23",
      change: "+5.1%",
      changeType: "positive" as const,
      icon: Activity,
      description: "Devam eden"
    },
    {
      title: t('dashboard.pendingTasks'),
      value: "156",
      change: "-2.3%",
      changeType: "negative" as const,
      icon: Target,
      description: "Bekleyen"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      user: "Samet UCA",
      action: "Yeni kullanıcı kaydetti",
      target: "Mehmet Demir",
      time: "2 dakika önce",
      type: "success" as const,
      avatar: "AY"
    },
    {
      id: 2,
      user: "Fatma Kaya",
      action: "Proje güncelledi",
      target: "E-ticaret Sitesi",
      time: "15 dakika önce",
      type: "info" as const,
      avatar: "FK"
    },
    {
      id: 3,
      user: "Ali Özkan",
      action: "Rapor oluşturdu",
      target: "Aylık Analiz",
      time: "1 saat önce",
      type: "warning" as const,
      avatar: "AÖ"
    },
    {
      id: 4,
      user: "Zeynep Arslan",
      action: "Sistem hatası bildirdi",
      target: "Login API",
      time: "3 saat önce",
      type: "error" as const,
      avatar: "ZA"
    }
  ];

  const quickActions = [
    { title: "Yeni Kullanıcı Ekle", icon: Users, color: "bg-blue-500" },
    { title: "Rapor Oluştur", icon: BarChart3, color: "bg-green-500" },
    { title: "Proje Başlat", icon: Activity, color: "bg-purple-500" },
    { title: "Toplantı Planla", icon: Calendar, color: "bg-orange-500" }
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
        <title>Dashboard - CodeMaze Admin</title>
        <meta name="description" content="Ana dashboard sayfası" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.welcome')}</h1>
          <p className="text-muted-foreground">
            Projenizin genel durumunu ve önemli metriklerini görüntüleyin
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
              <CardTitle>Son Aktiviteler</CardTitle>
              <CardDescription>
                Sistemde gerçekleşen son işlemler
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
              <CardTitle>Hızlı İşlemler</CardTitle>
              <CardDescription>
                Sık kullanılan işlemler
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
              <CardTitle>Proje Durumu</CardTitle>
              <CardDescription>
                Aktif projelerin genel durumu
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">E-ticaret Sitesi</span>
                  <Badge variant="default">%75</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Mobil Uygulama</span>
                  <Badge variant="secondary">%45</Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Admin Panel</span>
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
              <CardTitle>Sistem Durumu</CardTitle>
              <CardDescription>
                Sunucu ve servis durumları
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Web Sunucu</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Veritabanı</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Servisi</span>
                  <Badge variant="default" className="bg-green-100 text-green-800">
                    Çalışıyor
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">E-posta Servisi</span>
                  <Badge variant="destructive">
                    Hata
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
