import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { MetricChart } from "@/components/ui/metric-chart";
import { DataTable } from "@/components/ui/data-table";
import { FeatureCard } from "@/components/ui/feature-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  DollarSign, 
  Activity, 
  Target,
  FileText,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Palette
} from "lucide-react";

export default function ComponentShowcase() {
  const statsData = [
    {
      title: "Toplam Kullanıcı",
      value: 15420,
      change: 12.5,
      changeType: "positive" as const,
      icon: Users,
      description: "Son 30 günde"
    },
    {
      title: "Aylık Gelir",
      value: 89750,
      change: 8.2,
      changeType: "positive" as const,
      icon: DollarSign,
      description: "Bu ay",
      prefix: "₺"
    },
    {
      title: "Aktif Projeler",
      value: 47,
      change: 5.1,
      changeType: "positive" as const,
      icon: Activity,
      description: "Devam eden"
    },
    {
      title: "Bekleyen Görevler",
      value: 23,
      change: -15.3,
      changeType: "negative" as const,
      icon: Target,
      description: "Öncelikli"
    }
  ];

  const activities = [
    {
      id: "1",
      user: { name: "Ahmet Yılmaz", initials: "AY" },
      action: "Yeni rapor oluşturdu",
      target: "Q4 Analiz Raporu",
      time: "5 dakika önce",
      type: "success" as const,
      icon: FileText
    },
    {
      id: "2",
      user: { name: "Fatma Kaya", initials: "FK" },
      action: "Sistem ayarlarını güncelledi",
      target: "Güvenlik Politikaları",
      time: "1 saat önce",
      type: "info" as const,
      icon: Settings
    },
    {
      id: "3",
      user: { name: "Mehmet Demir", initials: "MD" },
      action: "Performans uyarısı aldı",
      target: "API Response Time",
      time: "2 saat önce",
      type: "warning" as const,
      icon: BarChart3
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
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", role: "Admin", status: "Aktif", score: 95 },
    { id: 2, name: "Fatma Kaya", email: "fatma@example.com", role: "Editör", status: "Aktif", score: 87 },
    { id: 3, name: "Mehmet Demir", email: "mehmet@example.com", role: "Üye", status: "Pasif", score: 72 },
    { id: 4, name: "Ayşe Özkan", email: "ayse@example.com", role: "Editör", status: "Aktif", score: 91 },
    { id: 5, name: "Ali Arslan", email: "ali@example.com", role: "Üye", status: "Aktif", score: 83 }
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
    { 
      key: 'score' as keyof typeof tableData[0], 
      title: 'Puan',
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <div className="w-12 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium">{value}</span>
        </div>
      )
    }
  ];

  const features = [
    {
      title: "Güvenlik",
      description: "Enterprise seviyesinde güvenlik özellikleri ile verilerinizi koruyun",
      icon: Shield,
      features: ["2FA Desteği", "Rol Tabanlı Erişim", "Audit Logs", "SSL Şifreleme"],
      badge: "Güvenli",
      badgeVariant: "default" as const
    },
    {
      title: "Performans",
      description: "Yüksek performanslı altyapı ile hızlı ve güvenilir deneyim",
      icon: Zap,
      features: ["Hızlı Yükleme", "Önbellekleme", "CDN Desteği", "Optimizasyon"],
      badge: "Hızlı",
      badgeVariant: "secondary" as const
    },
    {
      title: "Çok Dilli",
      description: "Uluslararası kullanım için çoklu dil desteği",
      icon: Globe,
      features: ["Türkçe", "İngilizce", "Dinamik Çeviri", "RTL Desteği"],
      badge: "Global",
      badgeVariant: "outline" as const
    },
    {
      title: "Responsive",
      description: "Tüm cihazlarda mükemmel görünüm ve kullanım deneyimi",
      icon: Smartphone,
      features: ["Mobil Uyumlu", "Tablet Desteği", "Touch Friendly", "PWA Ready"],
      badge: "Uyumlu",
      badgeVariant: "secondary" as const
    }
  ];

  return (
    <>
      <Helmet>
        <title>Component Showcase - React19 Admin</title>
        <meta name="description" content="Modern ve etkileyici UI componentlerinin sergilendiği sayfa" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Component Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern, etkileyici ve kullanıcı dostu UI componentleri ile admin panellerinizi güçlendirin
          </p>
        </div>

        {/* Stats Cards Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">İstatistik Kartları</h2>
            <Badge variant="secondary">Animasyonlu</Badge>
          </div>
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
                gradient={true}
              />
            ))}
          </div>
        </section>

        {/* Charts and Activity Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Grafikler ve Aktiviteler</h2>
            <Badge variant="outline">Interaktif</Badge>
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
              title="Canlı Aktivite Akışı"
            />
          </div>
        </section>

        {/* Data Table Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Gelişmiş Veri Tablosu</h2>
            <Badge variant="default">Tam Özellikli</Badge>
          </div>
          <DataTable
            data={tableData}
            columns={tableColumns}
            title="Kullanıcı Yönetimi"
            searchable={true}
            filterable={true}
            exportable={true}
            pageSize={5}
          />
        </section>

        {/* Feature Cards Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Özellik Kartları</h2>
            <Badge variant="secondary">Showcase</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                features={feature.features}
                badge={feature.badge}
                badgeVariant={feature.badgeVariant}
                gradient={true}
                onLearnMore={() => console.log(`Learn more about ${feature.title}`)}
              />
            ))}
          </div>
        </section>

        {/* Loading States Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Yükleme Durumları</h2>
            <Badge variant="outline">Smooth</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Küçük Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="sm" text="Yükleniyor..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Orta Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text="İşleniyor..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Büyük Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="lg" text="Hazırlanıyor..." />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 py-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Etkileyici Admin Panelleri Oluşturun</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern tasarım, yüksek performans ve kullanıcı dostu arayüz ile admin panellerinizi bir üst seviyeye taşıyın
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
              <Palette className="h-5 w-5 mr-2" />
              Hemen Başlayın
            </Button>
            <Button variant="outline" size="lg">
              Daha Fazla Örnek
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}