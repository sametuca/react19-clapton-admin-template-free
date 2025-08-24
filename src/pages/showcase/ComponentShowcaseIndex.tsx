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
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ComponentShowcaseIndex() {
  const { t } = useLanguage();
  
  const showcasePages = [
    {
      title: t('showcase.stats.title'),
      description: t('showcase.stats.description'),
      icon: BarChart3,
      path: "/showcase/stats",
      badge: t('showcase.stats.badge'),
      badgeVariant: "secondary" as const,
      features: [t('showcase.stats.features.counter'), t('showcase.stats.features.trend'), t('showcase.stats.features.gradient')]
    },
    {
      title: t('showcase.tables.title'), 
      description: t('showcase.tables.description'),
      icon: Table2,
      path: "/showcase/tables",
      badge: t('showcase.tables.badge'),
      badgeVariant: "default" as const,
      features: [t('showcase.tables.features.search'), t('showcase.tables.features.sort'), t('showcase.tables.features.export')]
    },
    {
      title: t('showcase.activity.title'),
      description: t('showcase.activity.description'),
      icon: Activity,
      path: "/showcase/activity",
      badge: t('showcase.activity.badge'),
      badgeVariant: "secondary" as const,
      features: [t('showcase.activity.features.realtime'), t('showcase.activity.features.categories'), t('showcase.activity.features.avatar')]
    },
    {
      title: t('showcase.charts.title'),
      description: t('showcase.charts.description'),
      icon: BarChart3,
      path: "/showcase/charts",
      badge: t('showcase.charts.badge'),
      badgeVariant: "outline" as const,
      features: [t('showcase.charts.features.hover'), t('showcase.charts.features.loading'), t('showcase.charts.features.trend')]
    },
    {
      title: t('showcase.features.title'),
      description: t('showcase.features.description'),
      icon: Star,
      path: "/showcase/features",
      badge: t('showcase.features.badge'),
      badgeVariant: "secondary" as const,
      features: [t('showcase.features.features.hover'), t('showcase.features.features.icons'), t('showcase.features.features.cta')]
    },
    {
      title: t('showcase.loading.title'),
      description: t('showcase.loading.description'),
      icon: Loader2,
      path: "/showcase/loading",
      badge: t('showcase.loading.badge'),
      badgeVariant: "outline" as const,
      features: [t('showcase.loading.features.sizes'), t('showcase.loading.features.messages'), t('showcase.loading.features.theme')]
    },
    {
      title: t('showcase.forms.title'),
      description: t('showcase.forms.description'),
      icon: Star,
      path: "/showcase/forms",
      badge: t('showcase.forms.badge'),
      badgeVariant: "default" as const,
      features: [t('showcase.forms.features.wizard'), t('showcase.forms.features.validation'), t('showcase.forms.features.inputs')]
    },
    {
      title: t('showcase.widgets.title'),
      description: t('showcase.widgets.description'),
      icon: BarChart3,
      path: "/showcase/widgets",
      badge: t('showcase.widgets.badge'),
      badgeVariant: "secondary" as const,
      features: [t('showcase.widgets.features.kpi'), t('showcase.widgets.features.realtime'), t('showcase.widgets.features.charts')]
    },
    {
      title: t('showcase.gallery.title'),
      description: t('showcase.gallery.description'),
      icon: Activity,
      path: "/showcase/gallery",
      badge: t('showcase.gallery.badge'),
      badgeVariant: "outline" as const,
      features: [t('showcase.gallery.features.view'), t('showcase.gallery.features.filter'), t('showcase.gallery.features.preview')]
    },
    {
      title: t('showcase.animations.title'),
      description: t('showcase.animations.description'),
      icon: Palette,
      path: "/showcase/animations", 
      badge: t('showcase.animations.badge'),
      badgeVariant: "secondary" as const,
      features: [t('showcase.animations.features.hover'), t('showcase.animations.features.loading'), t('showcase.animations.features.interactive')]
    },
    {
      title: t('showcase.unique.title'),
      description: t('showcase.unique.description'),
      icon: Sparkles,
      path: "/showcase/unique",
      badge: t('showcase.unique.badge'),
      badgeVariant: "default" as const,
      features: [t('showcase.unique.features.glassmorphism'), t('showcase.unique.features.holographic'), t('showcase.unique.features.quantum')]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.pageTitle')}</title>
        <meta name="description" content={t('showcase.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.mainTitle')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.mainDescription')}
          </p>
        </div>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">{t('showcase.categories.title')}</h2>
            <Badge variant="outline" className="hidden sm:flex">
              {t('showcase.categories.count').replace('{count}', showcasePages.length.toString())}
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
                    <h4 className="text-sm font-medium">{t('showcase.keyFeatures.title')}:</h4>
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
                      {t('showcase.viewButton')}
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
            <h2 className="text-3xl font-bold">{t('showcase.cta.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('showcase.cta.description')}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80">
              <Palette className="h-5 w-5 mr-2" />
              {t('showcase.cta.primaryButton')}
            </Button>
            <Button variant="outline" size="lg">
              {t('showcase.cta.secondaryButton')}
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}