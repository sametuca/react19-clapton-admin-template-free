import { Helmet } from "react-helmet-async";
import { MetricChart } from "@/components/ui/metric-chart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Charts() {
  const chartData = [
    { label: "Ocak", value: 4500, color: "bg-blue-500" },
    { label: "Şubat", value: 5200, color: "bg-green-500" },
    { label: "Mart", value: 4800, color: "bg-purple-500" },
    { label: "Nisan", value: 6100, color: "bg-orange-500" },
    { label: "Mayıs", value: 6800, color: "bg-red-500" },
    { label: "Haziran", value: 7200, color: "bg-indigo-500" }
  ];

  const salesData = [
    { label: "Web", value: 12500, color: "bg-primary" },
    { label: "Mobil", value: 8300, color: "bg-secondary" },
    { label: "Desktop", value: 6200, color: "bg-accent" },
    { label: "Tablet", value: 3400, color: "bg-muted" }
  ];

  const userGrowthData = [
    { label: "Q1", value: 2500, color: "bg-emerald-500" },
    { label: "Q2", value: 3200, color: "bg-emerald-600" },
    { label: "Q3", value: 4100, color: "bg-emerald-700" },
    { label: "Q4", value: 5800, color: "bg-emerald-800" }
  ];

  return (
    <>
      <Helmet>
        <title>Grafikler - CodeMaze Admin</title>
        <meta name="description" content="İnteraktif ve animasyonlu metric grafikleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Metric Grafikleri
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verilerinizi görselleştirmek için güçlü ve esnek grafik bileşenleri
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Aylık Performans</h2>
            <Badge variant="default">Trend ↗</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-1">
            <MetricChart
              title="Aylık Satış Performansı"
              data={chartData}
              total={34400}
              change={15.3}
              changeType="positive"
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Platform Dağılımı</h2>
            <Badge variant="secondary">Multi-Platform</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart
              title="Satış Kanalları"
              data={salesData}
              total={30400}
              change={8.7}
              changeType="positive"
            />
            <MetricChart
              title="Kullanıcı Büyümesi"
              data={userGrowthData}
              total={15600}
              change={-2.1}
              changeType="negative"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Grafik Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hover Etkileşimi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Bar üzerine gelince detaylı bilgi gösterimi</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Animasyonlu Yükleme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Barlar yumuşak animasyonla yüklenir</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Toplam Hesaplama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Otomatik toplam ve yüzde hesaplaması</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trend Göstergesi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pozitif/negatif değişim gösterimi</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Renk Kodlama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Her veri serisi için özel renkler</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Responsive Tasarım</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tüm ekran boyutlarında uyumlu</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}