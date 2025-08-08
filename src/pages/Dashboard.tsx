import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Oca", gelir: 12000, gider: 8000 },
  { month: "Şub", gelir: 18000, gider: 9000 },
  { month: "Mar", gelir: 16000, gider: 11000 },
  { month: "Nis", gelir: 22000, gider: 13000 },
  { month: "May", gelir: 26000, gider: 14000 },
  { month: "Haz", gelir: 28000, gider: 16000 },
];

export default function Dashboard() {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>Dashboard | Aurora Admin</title>
        <meta name="description" content="Aurora Admin dashboard – metrikler, grafikler ve özetler." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Genel bakış ve temel metrikler</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[{
          title: "Aylık Gelir",
          value: "₺28.000",
          delta: "+12%",
        }, {
          title: "Yeni Kullanıcı",
          value: "1.245",
          delta: "+8%",
        }, {
          title: "Aktif Oturum",
          value: "312",
          delta: "-3%",
        }, {
          title: "Dönüşüm",
          value: "4.7%",
          delta: "+0.4%",
        }].map((kpi) => (
          <Card key={kpi.title} className="">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <Badge variant="secondary">{kpi.delta}</Badge>
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Gelir/Gider Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="gelir" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="gider" stroke="hsl(var(--muted-foreground))" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Durum</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="genel">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="genel">Genel</TabsTrigger>
                <TabsTrigger value="guncellemeler">Güncellemeler</TabsTrigger>
              </TabsList>
              <TabsContent value="genel" className="space-y-3 mt-3">
                <p className="text-sm text-muted-foreground">Sistemler sorunsuz çalışıyor.</p>
                <p className="text-sm text-muted-foreground">Son yedekleme: 1 saat önce.</p>
              </TabsContent>
              <TabsContent value="guncellemeler" className="space-y-3 mt-3">
                <p className="text-sm">v1.2.0 yayınlandı – performans iyileştirmeleri.</p>
                <p className="text-sm">Yeni rol izinleri eklendi.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
