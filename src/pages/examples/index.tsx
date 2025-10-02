import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernCard } from "@/components/ui/modern-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ShoppingCart, 
  BarChart3, 
  Calendar,
  MessageSquare,
  Settings,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ExamplePages() {
  const examples = [
    {
      title: "Sosyal Medya Dashboard",
      description: "Sosyal medya hesaplarınızı yönetin, gönderilerinizi analiz edin ve etkileşimleri takip edin",
      icon: Users,
      path: "/examples/social-media",
      badge: "Yeni",
      badgeVariant: "default" as const,
      features: ["İstatistik kartları", "Gönderi tablosu", "Trend analizi", "Aktivite akışı"],
      color: "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200/50"
    },
    {
      title: "E-Ticaret Dashboard",
      description: "Online mağazanızın satış performansını takip edin ve ürün analizlerini görüntüleyin",
      icon: ShoppingCart,
      path: "/examples/ecommerce",
      badge: "Aktif",
      badgeVariant: "default" as const,
      features: ["Satış grafikleri", "Ürün yönetimi", "Müşteri analizi", "Sipariş takibi"],
      color: "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200/50"
    },
    {
      title: "Analitik Dashboard",
      description: "Web sitenizin trafiğini analiz edin ve kullanıcı davranışlarını inceleyin",
      icon: BarChart3,
      path: "/examples/analytics",
      badge: "Aktif",
      badgeVariant: "default" as const,
      features: ["Trafik analizi", "Kullanıcı segmentleri", "Dönüşüm oranları", "Gerçek zamanlı data"],
      color: "bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200/50"
    },
    {
      title: "CRM Dashboard",
      description: "Müşteri ilişkilerinizi yönetin, satış süreçlerini takip edin",
      icon: Users,
      path: "/examples/crm",
      badge: "Aktif",
      badgeVariant: "default" as const,
      features: ["Müşteri yönetimi", "Satış pipeline", "Aktivite takibi", "Lead analizi"],
      color: "bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200/50"
    },
    {
      title: "Finans Dashboard",
      description: "Finansal durumunuzu takip edin ve yatırımlarınızı yönetin",
      icon: Calendar,
      path: "/examples/finance",
      badge: "Aktif",
      badgeVariant: "default" as const,
      features: ["Hesap yönetimi", "Yatırım portföyü", "Bütçe takibi", "İşlem geçmişi"],
      color: "bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border-indigo-200/50"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Örnek Sayfalar - React19 Admin</title>
        <meta name="description" content="Gerçek dünya senaryoları için hazırlanmış örnek dashboard sayfaları" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Örnek Sayfalar
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerçek dünya senaryoları için hazırlanmış, tüm komponentlerimizi kullanan örnek dashboard sayfaları. 
            Her sayfa farklı bir sektör ve kullanım durumu için optimize edilmiştir.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${example.color}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{example.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {example.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={example.badgeVariant}>{example.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Özellikler:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {example.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={example.path}>
                    <Button className="w-full" disabled={example.badge === "Yakında"}>
                      {example.badge === "Yakında" ? "Yakında Gelecek" : "Sayfayı Görüntüle"}
                      {example.badge !== "Yakında" && <ArrowRight className="h-4 w-4 ml-2" />}
                    </Button>
                  </Link>
                </CardContent>
                
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <SpotlightCard
          title="Komponent Showcase"
          description="Bu örnek sayfalar, admin template'imizde bulunan tüm komponentlerin gerçek dünya senaryolarında nasıl kullanılabileceğini göstermektedir."
          icon={Settings}
          spotlightColor="#3b82f6"
          className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20"
        >
          <div className="flex items-center justify-center gap-4 pt-4">
            <Badge variant="outline" className="px-3 py-1">
              <Users className="h-3 w-3 mr-1" />
              StatsCard
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <BarChart3 className="h-3 w-3 mr-1" />
              DataTable
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <MessageSquare className="h-3 w-3 mr-1" />
              Card Components
            </Badge>
          </div>
        </SpotlightCard>
      </div>
    </>
  );
}
