import { Helmet } from "react-helmet-async";
import { ActivityFeed } from "@/components/ui/activity-feed";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Settings, BarChart3, Users, Shield, Zap } from "lucide-react";

export default function ActivityFeeds() {
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
    },
    {
      id: "4",
      user: { name: "Ayşe Özkan", initials: "AÖ" },
      action: "Yeni kullanıcı ekledi",
      target: "Ekip Üyesi Kaydı",
      time: "3 saat önce",
      type: "success" as const,
      icon: Users
    },
    {
      id: "5",
      user: { name: "Ali Arslan", initials: "AA" },
      action: "Güvenlik ayarları değiştirildi",
      target: "2FA Aktivasyonu",
      time: "4 saat önce",
      type: "info" as const,
      icon: Shield
    }
  ];

  const criticalActivities = [
    {
      id: "6",
      user: { name: "Sistem", initials: "SY" },
      action: "Kritik hata tespit edildi",
      target: "Database Connection",
      time: "Az önce",
      type: "error" as const,
      icon: Zap
    },
    {
      id: "7",
      user: { name: "Sistem", initials: "SY" },
      action: "Backup işlemi başarısız",
      target: "Günlük Yedekleme",
      time: "10 dakika önce",
      type: "warning" as const,
      icon: Settings
    }
  ];

  return (
    <>
      <Helmet>
        <title>Aktivite Akışları - CodeMaze Admin</title>
        <meta name="description" content="Gerçek zamanlı aktivite takibi ve bildirim sistemi" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Aktivite Akışları
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gerçek zamanlı kullanıcı aktiviteleri ve sistem olaylarını takip edin
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Genel Aktiviteler</h2>
              <Badge variant="secondary">Canlı</Badge>
            </div>
            <ActivityFeed 
              activities={activities}
              title="Kullanıcı Aktiviteleri"
            />
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Kritik Olaylar</h2>
              <Badge variant="destructive">Acil</Badge>
            </div>
            <ActivityFeed 
              activities={criticalActivities}
              title="Sistem Uyarıları"
            />
          </section>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Özellikler</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Gerçek Zamanlı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Anlık aktivite güncellemeleri</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tip Kategorileri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Success, Info, Warning, Error türleri</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kullanıcı Avatarları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">İnisiyaller ile otomatik avatar oluşturma</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Zaman Gösterimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Relative time formatting</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>İkon Desteği</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Her aktivite için özel ikonlar</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hover Efektleri</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Smooth animasyonlar ve geçişler</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}