import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, Activity, Target } from "lucide-react";

export default function StatsCards() {
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

  return (
    <>
      <Helmet>
        <title>İstatistik Kartları - CodeMaze Admin</title>
        <meta name="description" content="Animasyonlu ve interaktif istatistik kartları showcase" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            İstatistik Kartları
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Animasyonlu sayaçlar ve trend göstergeleri ile etkileyici istatistik kartları
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Temel İstatistik Kartları</h2>
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
                gradient={false}
              />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Gradient Kartlar</h2>
            <Badge variant="secondary">Core</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat, index) => (
              <StatsCard
                key={`gradient-${index}`}
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

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Özellikler</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Animasyonlu Sayaçlar</h3>
              <p className="text-muted-foreground">Sayılar yumuşak animasyonlarla yüklenir</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Trend Göstergeleri</h3>
              <p className="text-muted-foreground">Pozitif/negatif değişimleri renkli gösterim</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Gradient Desteği</h3>
              <p className="text-muted-foreground">Gradient arka planlar ile modern görünüm</p>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}