import { Helmet } from "react-helmet-async";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, Smartphone, Users, Settings, BarChart3, Lock } from "lucide-react";

export default function FeatureCards() {
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

  const advancedFeatures = [
    {
      title: "Kullanıcı Yönetimi",
      description: "Kapsamlı kullanıcı ve rol yönetim sistemi",
      icon: Users,
      features: ["Grup Yönetimi", "İzin Kontrolü", "Profil Yönetimi", "Aktif Oturumlar"],
      badge: "Gelişmiş",
      badgeVariant: "default" as const
    },
    {
      title: "Sistem Ayarları",
      description: "Esnek yapılandırma ve özelleştirme seçenekleri",
      icon: Settings,
      features: ["Tema Desteği", "Bildirim Ayarları", "API Konfigürasyonu", "Yedekleme"],
      badge: "Esnek",
      badgeVariant: "outline" as const
    },
    {
      title: "Analytics",
      description: "Detaylı raporlama ve analiz araçları",
      icon: BarChart3,
      features: ["Gerçek Zamanlı", "Özel Raporlar", "Export İmkanı", "Trend Analizi"],
      badge: "Analitik",
      badgeVariant: "secondary" as const
    },
    {
      title: "Veri Güvenliği",
      description: "Veri korunması ve gizlilik kontrolü",
      icon: Lock,
      features: ["Şifreleme", "Yedekleme", "Erişim Logları", "GDPR Uyumlu"],
      badge: "Korumalı",
      badgeVariant: "default" as const
    }
  ];

  return (
    <>
      <Helmet>
        <title>Özellik Kartları - CodeMaze Admin</title>
        <meta name="description" content="Ürün özelliklerini sergileyen etkileyici kart bileşenleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Özellik Kartları
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ürün özelliklerinizi etkili bir şekilde sergileyen modern kart tasarımları
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Temel Özellikler</h2>
            <Badge variant="secondary">Core</Badge>
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
                gradient={false}
                onLearnMore={() => console.log(`Learn more about ${feature.title}`)}
              />
            ))}
          </div>
        </section>



        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Kart Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hover Animasyonları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yumuşak geçişler ve yükselme efektleri</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gradient Desteği</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Opsiyonel gradient arka plan desteği</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>İkon Entegrasyonu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lucide React ikonları ile güçlü görsellik</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Badge Sistemı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Farklı varyantlarda etiket desteği</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Özellik Listesi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Madde işaretli özellik listeleri</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Call-to-Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Özelleştirilebilir aksiyon butonları</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}