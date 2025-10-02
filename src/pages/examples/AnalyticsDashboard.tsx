import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye,
  MousePointer,
  Globe,
  Smartphone,
  Monitor,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Target,
  Activity,
  PieChart,
  LineChart,
  Filter
} from "lucide-react";

export default function AnalyticsDashboard() {
  const stats = [
    {
      title: "Toplam Ziyaretçi",
      value: "124,847",
      change: "+15.2%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sayfa Görüntüleme",
      value: "892,341",
      change: "+8.7%",
      changeType: "positive",
      icon: Eye,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Dönüşüm Oranı",
      value: "%3.24",
      change: "+0.8%",
      changeType: "positive",
      icon: Target,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Ortalama Süre",
      value: "4:32",
      change: "-0.5%",
      changeType: "negative",
      icon: Clock,
      color: "from-orange-500 to-red-500"
    }
  ];

  const trafficSources = [
    {
      source: "Organik Arama",
      visitors: 45680,
      percentage: 42.3,
      change: "+12.5%",
      changeType: "positive",
      color: "bg-blue-500"
    },
    {
      source: "Direkt Trafik",
      visitors: 28340,
      percentage: 26.2,
      change: "+5.8%",
      changeType: "positive",
      color: "bg-green-500"
    },
    {
      source: "Sosyal Medya",
      visitors: 19250,
      percentage: 17.8,
      change: "+18.2%",
      changeType: "positive",
      color: "bg-purple-500"
    },
    {
      source: "Referans",
      visitors: 14890,
      percentage: 13.7,
      change: "-2.1%",
      changeType: "negative",
      color: "bg-orange-500"
    }
  ];

  const topPages = [
    {
      page: "/dashboard",
      title: "Ana Dashboard",
      views: 45680,
      uniqueViews: 32140,
      bounceRate: 23.4,
      avgTime: "5:42"
    },
    {
      page: "/products",
      title: "Ürünler",
      views: 38920,
      uniqueViews: 28340,
      bounceRate: 31.2,
      avgTime: "3:28"
    },
    {
      page: "/analytics",
      title: "Analitik",
      views: 29450,
      uniqueViews: 21890,
      bounceRate: 18.7,
      avgTime: "7:15"
    },
    {
      page: "/settings",
      title: "Ayarlar",
      views: 18760,
      uniqueViews: 15230,
      bounceRate: 45.8,
      avgTime: "2:34"
    }
  ];

  const deviceStats = [
    {
      device: "Masaüstü",
      icon: Monitor,
      users: 52340,
      percentage: 48.5,
      sessions: 78920,
      color: "text-blue-500"
    },
    {
      device: "Mobil",
      icon: Smartphone,
      users: 45680,
      percentage: 42.3,
      sessions: 89340,
      color: "text-green-500"
    },
    {
      device: "Tablet",
      icon: Globe,
      users: 9920,
      percentage: 9.2,
      sessions: 15670,
      color: "text-purple-500"
    }
  ];

  const realtimeData = [
    {
      metric: "Aktif Kullanıcı",
      value: "1,247",
      icon: Activity,
      color: "text-green-500"
    },
    {
      metric: "Sayfa/Oturum",
      value: "3.8",
      icon: Eye,
      color: "text-blue-500"
    },
    {
      metric: "Ortalama Oturum",
      value: "4:32",
      icon: Clock,
      color: "text-purple-500"
    }
  ];

  const getBounceRateColor = (rate: number) => {
    if (rate < 30) return "text-green-600";
    if (rate < 50) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <>
      <Helmet>
        <title>Analitik Dashboard - React19 Admin</title>
        <meta name="description" content="Web sitenizin trafiğini analiz edin ve kullanıcı davranışlarını inceleyin" />
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Analitik Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Web sitenizin performansını takip edin ve kullanıcı davranışlarını analiz edin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtrele
            </Button>
            <Button size="sm">
              <BarChart3 className="w-4 h-4 mr-2" />
              Rapor Al
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-border/30">
                  {stat.changeType === "positive" ? (
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-400" />
                  )}
                  <span className={`text-sm font-semibold ${
                    stat.changeType === "positive" ? "text-green-400" : "text-red-400"
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-foreground/60">
                    son 30 gün
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="glassmorphism-card border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  Trafik Kaynakları
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  Ziyaretçilerinizin hangi kanallardan geldiğini görün
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trafficSources.map((source, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${source.color}`}></div>
                          <span className="font-medium text-foreground">{source.source}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-foreground">
                            {source.visitors.toLocaleString()}
                          </span>
                          <div className="flex items-center gap-1">
                            {source.changeType === "positive" ? (
                              <ArrowUpRight className="w-3 h-3 text-green-400" />
                            ) : (
                              <ArrowDownRight className="w-3 h-3 text-red-400" />
                            )}
                            <span className={`text-xs font-medium ${
                              source.changeType === "positive" ? "text-green-400" : "text-red-400"
                            }`}>
                              {source.change}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground/60">Oran</span>
                          <span className="text-foreground">{source.percentage}%</span>
                        </div>
                        <Progress value={source.percentage} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="glassmorphism-card border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  Gerçek Zamanlı
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
                  Anlık site aktivitesi
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {realtimeData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-foreground/5">
                      <div className="flex items-center gap-3">
                        <data.icon className={`w-5 h-5 ${data.color}`} />
                        <span className="text-sm font-medium text-foreground/70">
                          {data.metric}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-foreground">
                        {data.value}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-lg border border-border/30 bg-gradient-to-r from-primary/5 to-primary/10">
                  <div className="text-center">
                    <p className="text-sm text-foreground/60 mb-1">Son 5 dakika</p>
                    <p className="text-2xl font-bold text-foreground">+247</p>
                    <p className="text-sm text-green-600">yeni ziyaretçi</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-white" />
                </div>
                En Popüler Sayfalar
              </CardTitle>
              <CardDescription className="text-foreground/60 text-base">
                En çok ziyaret edilen sayfalar ve performansları
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPages.map((page, index) => (
                  <div key={index} className="p-4 rounded-xl border border-border/30 bg-gradient-to-r from-background/50 to-foreground/5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-foreground">{page.title}</h3>
                        <p className="text-sm text-foreground/60">{page.page}</p>
                      </div>
                      <Badge variant="outline">{page.views.toLocaleString()} görüntüleme</Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-foreground/60">Benzersiz</p>
                        <p className="font-semibold text-foreground">{page.uniqueViews.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Çıkış Oranı</p>
                        <p className={`font-semibold ${getBounceRateColor(page.bounceRate)}`}>
                          %{page.bounceRate}
                        </p>
                      </div>
                      <div>
                        <p className="text-foreground/60">Ort. Süre</p>
                        <p className="font-semibold text-foreground">{page.avgTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glassmorphism-card border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-foreground text-xl">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-white" />
                </div>
                Cihaz Dağılımı
              </CardTitle>
              <CardDescription className="text-foreground/60 text-base">
                Kullanıcıların hangi cihazları kullandığını görün
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {deviceStats.map((device, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <device.icon className={`w-5 h-5 ${device.color}`} />
                        <span className="font-medium text-foreground">{device.device}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">
                          {device.users.toLocaleString()}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {device.sessions.toLocaleString()} oturum
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground/60">Kullanıcı Oranı</span>
                        <span className="text-foreground">{device.percentage}%</span>
                      </div>
                      <Progress value={device.percentage} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-lg border border-border/30 bg-gradient-to-r from-background/80 to-foreground/5">
                <div className="text-center">
                  <p className="text-sm text-foreground/60 mb-2">Toplam Oturum</p>
                  <p className="text-2xl font-bold text-foreground">183,930</p>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <ArrowUpRight className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">+12.5%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
