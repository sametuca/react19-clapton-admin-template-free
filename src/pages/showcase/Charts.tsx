import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { MetricChart } from "@/components/ui/metric-chart";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Charts() {
  const { t } = useLanguage();

  const chartData = [
    { label: t('showcase.charts.months.jan'), value: 4500, color: "bg-blue-500" },
    { label: t('showcase.charts.months.feb'), value: 5200, color: "bg-green-500" },
    { label: t('showcase.charts.months.mar'), value: 4800, color: "bg-purple-500" },
    { label: t('showcase.charts.months.apr'), value: 6100, color: "bg-orange-500" },
    { label: t('showcase.charts.months.may'), value: 6800, color: "bg-red-500" },
    { label: t('showcase.charts.months.jun'), value: 7200, color: "bg-indigo-500" }
  ];

  const salesData = [
    { label: t('showcase.charts.sales.web'), value: 12500, color: "bg-primary" },
    { label: t('showcase.charts.sales.mobile'), value: 8300, color: "bg-secondary" },
    { label: t('showcase.charts.sales.desktop'), value: 6200, color: "bg-accent" },
    { label: t('showcase.charts.sales.tablet'), value: 3400, color: "bg-muted" }
  ];

  const userGrowthData = [
    { label: t('showcase.charts.userGrowth.q1'), value: 2500, color: "bg-emerald-500" },
    { label: t('showcase.charts.userGrowth.q2'), value: 3200, color: "bg-emerald-600" },
    { label: t('showcase.charts.userGrowth.q3'), value: 4100, color: "bg-emerald-700" },
    { label: t('showcase.charts.userGrowth.q4'), value: 5800, color: "bg-emerald-800" }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.charts.pageTitle')}</title>
        <meta name="description" content={t('showcase.charts.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.charts.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.charts.description')}
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.charts.sections.monthlyPerformance')}</h2>
            <Badge variant="default">{t('showcase.charts.badges.trendUp')}</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-1">
            <MetricChart
              title={t('showcase.charts.monthlyPerformanceTitle')}
              data={chartData}
              total={34400}
              change={15.3}
              changeType="positive"
            />
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.charts.sections.platformDistribution')}</h2>
            <Badge variant="secondary">{t('showcase.charts.badges.multiPlatform')}</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <MetricChart
              title={t('showcase.charts.salesChannelsTitle')}
              data={salesData}
              total={30400}
              change={8.7}
              changeType="positive"
            />
            <MetricChart
              title={t('showcase.charts.userGrowthTitle')}
              data={userGrowthData}
              total={15600}
              change={-2.1}
              changeType="negative"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.charts.sections.chartFeatures')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.hoverInteraction')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.hoverInteractionDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.animatedLoading')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.animatedLoadingDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.totalCalculation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.totalCalculationDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.trendIndicator')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.trendIndicatorDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.colorCoding')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.colorCodingDescription')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.charts.features.responsiveDesign')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.charts.features.responsiveDesignDescription')}</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
