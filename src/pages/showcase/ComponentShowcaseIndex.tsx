import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Table2, 
  Activity, 
  Star, 
  Loader2, 
  Palette,
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ComponentShowcaseIndex() {
  const showcasePages = [
    {
      title: "İstatistik Kartları",
      description: "Animasyonlu sayaçlar ve trend göstergeleri ile etkileyici istatistik kartları",
      icon: BarChart3,
      path: "/showcase/stats",
      badge: "Animasyonlu",
      badgeVariant: "secondary" as const,
      features: ["Counter animasyonları", "Trend göstergeleri", "Gradient desteği"]
    },
    {
      title: "Veri Tabloları", 
      description: "Güçlü arama, filtreleme ve sıralama özellikleri ile gelişmiş veri tabloları",
      icon: Table2,
      path: "/showcase/tables",
      badge: "Tam Özellikli",
      badgeVariant: "default" as const,
      features: ["Arama & Filtreleme", "Sıralama", "Export özelliği"]
    },
    {
      title: "Aktivite Akışları",
      description: "Gerçek zamanlı kullanıcı aktiviteleri ve sistem olaylarını takip edin",
      icon: Activity,
      path: "/showcase/activity",
      badge: "Canlı",
      badgeVariant: "secondary" as const,
      features: ["Gerçek zamanlı", "Tip kategorileri", "Avatar desteği"]
    },
    {
      title: "Metric Grafikleri",
      description: "Verilerinizi görselleştirmek için güçlü ve esnek grafik bileşenleri",
      icon: BarChart3,
      path: "/showcase/charts",
      badge: "İnteraktif",
      badgeVariant: "outline" as const,
      features: ["Hover etkileşimi", "Animasyonlu yükleme", "Trend analizi"]
    },
    {
      title: "Özellik Kartları",
      description: "Ürün özelliklerinizi etkili bir şekilde sergileyen modern kart tasarımları",
      icon: Star,
      path: "/showcase/features",
      badge: "Showcase",
      badgeVariant: "secondary" as const,
      features: ["Hover animasyonları", "İkon entegrasyonu", "CTA butonları"]
    },
    {
      title: "Yükleme Durumları",
      description: "Kullanıcı deneyimini iyileştiren smooth loading animasyonları",
      icon: Loader2,
      path: "/showcase/loading",
      badge: "Smooth",
      badgeVariant: "outline" as const,
      features: ["Farklı boyutlar", "Özel mesajlar", "Tema uyumlu"]
    },
    {
      title: "İnteraktif Formlar",
      description: "Gelişmiş form bileşenleri ve multi-step wizard örnekleri",
      icon: Star,
      path: "/showcase/forms",
      badge: "Premium",
      badgeVariant: "default" as const,
      features: ["Multi-step wizard", "Gerçek zamanlı validasyon", "Gelişmiş input'lar"]
    },
    {
      title: "Dashboard Widgets",
      description: "Modern ve interaktif dashboard widget bileşenleri",
      icon: BarChart3,
      path: "/showcase/widgets",
      badge: "Pro",
      badgeVariant: "secondary" as const,
      features: ["KPI kartları", "Real-time data", "Interactive charts"]
    },
    {
      title: "Modern Gallery",
      description: "Çok medyalı galeri bileşenleri ve interaktif görüntüleme",
      icon: Activity,
      path: "/showcase/gallery",
      badge: "Media",
      badgeVariant: "outline" as const,
      features: ["Grid/List view", "Filter & search", "Media preview"]
    },
    {
      title: "Animation Showcase",
      description: "Etkileyici CSS animasyonları ve interaktif efektler",
      icon: Palette,
      path: "/showcase/animations", 
      badge: "Animated",
      badgeVariant: "secondary" as const,
      features: ["Hover effects", "Loading animations", "Interactive elements"]
    },
    {
      title: "Benzersiz Komponentler",
      description: "Piyasada benzeri bulunmayan şık ve modern UI komponentleri",
      icon: Sparkles,
      path: "/showcase/unique",
      badge: "Exclusive",
      badgeVariant: "default" as const,
      features: ["Glassmorphism", "Holographic effects", "Quantum loaders"]
    },
    {
      title: "Benzersiz Komponentler",
      description: "Piyasada benzeri bulunmayan şık ve modern UI komponentleri",
      icon: Palette,
      path: "/showcase/unique",
      badge: "Exclusive",
      badgeVariant: "default" as const,
      features: ["Glassmorphism", "Holographic effects", "Quantum loaders"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Component Showcase - CodeMaze Admin</title>
        <meta name="description" content="Modern ve etkileyici UI componentlerinin sergilendiği ana sayfa" />
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

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Component Kategorileri</h2>
            <Badge variant="outline" className="hidden sm:flex">
              10 Kategori Mevcut
            </Badge>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showcasePages.map((page, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <page.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{page.title}</CardTitle>
                      </div>
                    </div>
                    <Badge variant={page.badgeVariant}>{page.badge}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {page.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Öne Çıkan Özellikler:</h4>
                    <ul className="space-y-1">
                      {page.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className="w-full group/btn">
                    <Link to={page.path} className="flex items-center justify-center gap-2">
                      Görüntüle
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-6 py-12 bg-muted/30 rounded-2xl">
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