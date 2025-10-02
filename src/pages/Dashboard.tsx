import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/ui/stats-card";
import { DataTable } from "@/components/ui/data-table";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { MetricChart } from "@/components/ui/metric-chart";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useApi } from "@/hooks/useApi";
import { apiService, User } from "@/services/api";
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  Activity,
  RefreshCw,
  AlertTriangle,
  Eye,
  Mail,
  Building,
  Plus,
  ArrowRight,
  Target,
  Award,
  Zap,
  Globe,
  Shield,
  Rocket,
  Star,
  Heart,
  Download,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // API Data
  const { data: dashboardStats, loading: statsLoading, error: statsError, refetch: refetchStats } = useApi(() => apiService.getDashboardStats());
  const { data: users, loading: usersLoading, error: usersError } = useApi(() => apiService.getUsers());
  const { data: posts, loading: postsLoading } = useApi(() => apiService.getPosts());

  // Sample data for charts and activities
  const chartData = [
    { label: "Ocak", value: 4500, color: "bg-blue-500" },
    { label: "Şubat", value: 5200, color: "bg-green-500" },
    { label: "Mart", value: 4800, color: "bg-purple-500" },
    { label: "Nisan", value: 6100, color: "bg-orange-500" },
    { label: "Mayıs", value: 6800, color: "bg-red-500" },
    { label: "Haziran", value: 7200, color: "bg-indigo-500" }
  ];

  const activities = [
    {
      id: "1",
      user: { name: "Sistem", initials: "SY" },
      action: "Yeni kullanıcı kaydı",
      target: "API'den senkronize edildi",
      time: "5 dakika önce",
      type: "success" as const,
      icon: Users
    },
    {
      id: "2",
      user: { name: "Admin", initials: "AD" },
      action: "Veri güncellendi",
      target: "Kullanıcı İstatistikleri",
      time: "15 dakika önce",
      type: "info" as const,
      icon: RefreshCw
    },
    {
      id: "3",
      user: { name: "Sistem", initials: "SY" },
      action: "Yeni gönderi oluşturuldu",
      target: "API'den alındı",
      time: "30 dakika önce",
      type: "success" as const,
      icon: FileText
    }
  ];

  // User table columns for recent users
  const userColumns = [
    {
      key: 'name' as keyof User,
      title: 'Kullanıcı',
      render: (value: string, row: User) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-xs font-medium">{row.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div>
            <div className="font-medium">{value}</div>
            <div className="text-sm text-muted-foreground">@{row.username}</div>
          </div>
        </div>
      )
    },
    {
      key: 'email' as keyof User,
      title: 'E-posta',
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{value}</span>
        </div>
      )
    },
    {
      key: 'company' as keyof User,
      title: 'Şirket',
      render: (value: User['company']) => (
        <div className="flex items-center gap-2">
          <Building className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{value.name}</span>
        </div>
      )
    }
  ];

  return (
    <>
      <Helmet>
        <title>Dashboard - React19 Admin</title>
        <meta name="description" content="Ana dashboard sayfası - sistem genel bakışı ve önemli metrikleri" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Sistem genel bakışı ve önemli metrikleri
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={refetchStats}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Yenile
            </Button>
            <Link to="/services">
              <Button size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Servisler Örneği
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Sistem İstatistikleri</h2>
            <Badge variant="default">Canlı Veri</Badge>
          </div>
          
          {statsError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                İstatistikler yüklenirken hata oluştu: {statsError}
              </AlertDescription>
            </Alert>
          )}
          
          {statsLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <LoadingSpinner size="sm" text="Yükleniyor..." />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : dashboardStats && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title="Toplam Kullanıcı"
                value={dashboardStats.totalUsers}
                change={dashboardStats.userGrowth}
                changeType="positive"
                icon={Users}
                description="API'den çekilen"
                gradient={true}
              />
              <StatsCard
                title="Toplam Gönderi"
                value={dashboardStats.totalPosts}
                change={dashboardStats.postGrowth}
                changeType="positive"
                icon={FileText}
                description="Yayınlanmış"
                gradient={true}
              />
              <StatsCard
                title="Tamamlanan Görevler"
                value={dashboardStats.completedTodos}
                change={dashboardStats.todoCompletionRate}
                changeType="positive"
                icon={CheckCircle}
                description="Başarı oranı"
                decimals={1}
                suffix="%"
                gradient={true}
              />
              <StatsCard
                title="Bekleyen Görevler"
                value={dashboardStats.pendingTodos}
                change={-5.2}
                changeType="negative"
                icon={Clock}
                description="Tamamlanmamış"
                gradient={true}
              />
            </div>
          )}
        </section>

        {/* Charts and Activity */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Performans ve Aktivite</h2>
            <Badge variant="outline">Analitik</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart
              title="Aylık Performans"
              data={chartData}
              total={34400}
              change={15.3}
              changeType="positive"
            />
            <ActivityFeed 
              activities={activities}
              title="Sistem Aktiviteleri"
            />
          </div>
        </section>

        {/* Recent Users */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Son Kullanıcılar</h2>
              <Badge variant="secondary">API Verisi</Badge>
            </div>
            <Link to="/services">
              <Button variant="outline" size="sm">
                <ArrowRight className="h-4 w-4 mr-2" />
                Tüm Servisleri Gör
              </Button>
            </Link>
          </div>

          {usersError && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Kullanıcılar yüklenirken hata oluştu: {usersError}
              </AlertDescription>
            </Alert>
          )}

          {usersLoading ? (
            <Card>
              <CardContent className="p-6">
                <LoadingSpinner size="md" text="Kullanıcılar yükleniyor..." />
              </CardContent>
            </Card>
          ) : users && (
            <DataTable
              data={users.slice(0, 5)} // İlk 5 kullanıcı
              columns={userColumns}
              title="Son Kayıt Olan Kullanıcılar"
              searchable={false}
              filterable={false}
              exportable={false}
              pageSize={5}
            />
          )}
        </section>

        {/* Quick Actions */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Hızlı İşlemler</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="font-semibold mb-2">Kullanıcı Yönetimi</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kullanıcıları görüntüle ve yönet
                </p>
                <Link to="/users">
                  <Button size="sm" className="w-full">
                    <Users className="h-4 w-4 mr-2" />
                    Kullanıcılara Git
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Analitik</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detaylı analitik raporları
                </p>
                <Link to="/analytics">
                  <Button size="sm" className="w-full">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analitiklere Git
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Komponentler</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  UI komponentlerini keşfet
                </p>
                <Link to="/showcase">
                  <Button size="sm" className="w-full">
                    <Star className="h-4 w-4 mr-2" />
                    Vitrine Git
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Servisler</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  API servisleri örneği
                </p>
                <Link to="/services">
                  <Button size="sm" className="w-full">
                    <Rocket className="h-4 w-4 mr-2" />
                    Servislere Git
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Welcome Message */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold">React19 Admin Template'e Hoş Geldiniz!</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Modern React 19 teknolojisi ile geliştirilmiş bu admin template, 
              200+ komponent, AI destekli özellikler ve premium tasarım ile projelerinizi hızlandırır.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link to="/get-started">
                <Button size="lg" className="gap-2">
                  <Rocket className="h-4 w-4" />
                  Başlangıç Rehberi
                </Button>
              </Link>
              <Link to="/showcase">
                <Button variant="outline" size="lg">
                  <Star className="h-4 w-4 mr-2" />
                  Komponentleri Keşfet
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}