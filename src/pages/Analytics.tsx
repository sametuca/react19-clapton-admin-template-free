import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area 
} from "recharts";
import { Download, Filter, TrendingUp, TrendingDown, Users, ShoppingCart, Eye, MousePointer } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Analytics() {
  const { t } = useLanguage();

  const chartData = [
    { month: t("analytics.jan"), gelir: 12000, gider: 8000, ziyaretci: 4500, donusum: 2.4 },
    { month: t("analytics.feb"), gelir: 18000, gider: 9000, ziyaretci: 5200, donusum: 3.1 },
    { month: t("analytics.mar"), gelir: 16000, gider: 11000, ziyaretci: 4800, donusum: 2.8 },
    { month: t("analytics.apr"), gelir: 22000, gider: 13000, ziyaretci: 6100, donusum: 3.6 },
    { month: t("analytics.may"), gelir: 26000, gider: 14000, ziyaretci: 6800, donusum: 4.2 },
    { month: t("analytics.jun"), gelir: 28000, gider: 16000, ziyaretci: 7200, donusum: 4.7 },
  ];

  const pieData = [
    { name: t("analytics.mobile"), value: 65, color: "#3b82f6" },
    { name: t("analytics.desktop"), value: 25, color: "#10b981" },
    { name: t("analytics.tablet"), value: 10, color: "#f59e0b" },
  ];

  const topPages = [
    { page: t("analytics.homepage"), views: 12500, bounce: "32%", conversion: "4.2%" },
    { page: t("analytics.products"), views: 8900, bounce: "28%", conversion: "6.8%" },
    { page: t("analytics.about"), views: 6700, bounce: "45%", conversion: "1.2%" },
    { page: t("analytics.contact"), views: 5400, bounce: "38%", conversion: "2.1%" },
  ];

  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>{t("analytics.pageTitle")} | React19 Admin</title>
        <meta name="description" content={t("analytics.metaDescription")} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{t("analytics.title")}</h1>
            <p className="text-muted-foreground mt-1">{t("analytics.subtitle")}</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="30">
              <SelectTrigger className="w-32">
                <SelectValue placeholder={t("analytics.duration")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">{t("analytics.7days")}</SelectItem>
                <SelectItem value="30">{t("analytics.30days")}</SelectItem>
                <SelectItem value="90">{t("analytics.90days")}</SelectItem>
                <SelectItem value="365">{t("analytics.1year")}</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {t("analytics.filter")}
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-2" />
              {t("analytics.downloadReport")}
            </Button>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {[{
          title: t("analytics.totalVisitors"),
          value: "45.2K",
          delta: "+12.5%",
          trend: "up",
          icon: Users,
        }, {
          title: t("analytics.pageViews"),
          value: "89.7K",
          delta: "+8.2%",
          trend: "up",
          icon: Eye,
        }, {
          title: t("analytics.conversionRate"),
          value: "3.8%",
          delta: "+0.4%",
          trend: "up",
          icon: TrendingUp,
        }, {
          title: t("analytics.avgSession"),
          value: "2m 34s",
          delta: "-0.2%",
          trend: "down",
          icon: MousePointer,
        }].map((kpi) => (
          <Card key={kpi.title} className="">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                <kpi.icon className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="flex items-center mt-1">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                )}
                <Badge variant={kpi.trend === "up" ? "default" : "secondary"} className="text-xs">
                  {kpi.delta}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-6">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>{t("analytics.visitorTrend")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="ziyaretci" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.1}
                    strokeWidth={2} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("analytics.deviceDistribution")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-4">
              {pieData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: item.color }}
                    />
                    {item.name}
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>{t("analytics.topPages")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs font-medium mr-3">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{page.page}</p>
                      <p className="text-sm text-muted-foreground">{page.views.toLocaleString()} {t("analytics.views")}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{page.conversion}</p>
                    <p className="text-xs text-muted-foreground">{t("analytics.bounce")}: {page.bounce}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("analytics.revenueAnalysis")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="gelir" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 