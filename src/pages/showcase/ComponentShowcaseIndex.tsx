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
  Sparkles,
  Zap,
  Eye,
  Rocket
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
      features: [
        t('showcase.stats.features.counter'),
        t('showcase.stats.features.trend'),
        t('showcase.stats.features.gradient')
      ]
    },
    {
      title: t('showcase.tables.title'),
      description: t('showcase.tables.description'),
      icon: Table2,
      path: "/showcase/tables",
      badge: t('showcase.tables.badge'),
      features: [
        t('showcase.tables.features.search'),
        t('showcase.tables.features.sort'),
        t('showcase.tables.features.export')
      ]
    },
    {
      title: t('showcase.activity.title'),
      description: t('showcase.activity.description'),
      icon: Activity,
      path: "/showcase/activity",
      badge: t('showcase.activity.badge'),
      features: [
        t('showcase.activity.features.realtime'),
        t('showcase.activity.features.categories'),
        t('showcase.activity.features.avatar')
      ]
    },
    {
      title: t('showcase.charts.title'),
      description: t('showcase.charts.description'),
      icon: BarChart3,
      path: "/showcase/charts",
      badge: t('showcase.charts.badge'),
      features: [
        t('showcase.charts.features.hover'),
        t('showcase.charts.features.loading'),
        t('showcase.charts.features.trend')
      ]
    },
    {
      title: t('showcase.features.title'),
      description: t('showcase.features.description'),
      icon: Star,
      path: "/showcase/features",
      badge: t('showcase.features.badge'),
      features: [
        t('showcase.features.features.hover'),
        t('showcase.features.features.icons'),
        t('showcase.features.features.cta')
      ]
    },
    {
      title: t('showcase.loading.title'),
      description: t('showcase.loading.description'),
      icon: Loader2,
      path: "/showcase/loading",
      badge: t('showcase.loading.badge'),
      features: [
        t('showcase.loading.features.sizes'),
        t('showcase.loading.features.messages'),
        t('showcase.loading.features.theme')
      ]
    },
    {
      title: t('showcase.widgets.title'),
      description: t('showcase.widgets.description'),
      icon: BarChart3,
      path: "/showcase/widgets",
      badge: t('showcase.widgets.badge'),
      features: [
        t('showcase.widgets.features.kpi'),
        t('showcase.widgets.features.realtime'),
        t('showcase.widgets.features.charts')
      ]
    },
    {
      title: t('showcase.gallery.title'),
      description: t('showcase.gallery.description'),
      icon: Palette,
      path: "/showcase/gallery",
      badge: t('showcase.gallery.badge'),
      features: [
        t('showcase.gallery.features.view'),
        t('showcase.gallery.features.filter'),
        t('showcase.gallery.features.preview')
      ]
    },
    {
      title: t('showcase.animations.title'),
      description: t('showcase.animations.description'),
      icon: Star,
      path: "/showcase/animations",
      badge: t('showcase.animations.badge'),
      features: [
        t('showcase.animations.features.hover'),
        t('showcase.animations.features.loading'),
        t('showcase.animations.features.interactive')
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.pageTitle')}</title>
        <meta name="description" content={t('showcase.metaDescription')} />
      </Helmet>

      <div className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8 text-blue-400" />
              <h1 className="text-5xl font-bold gradient-text-primary">
                {t('showcase.mainTitle')}
              </h1>
              <Sparkles className="h-8 w-8 text-purple-400" />
            </div>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {t('showcase.mainDescription')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="button-glass hover:bg-blue-500/20">
                <Zap className="w-5 h-5 mr-2" />
                {t('showcase.cta.primaryButton')}
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Eye className="w-5 h-5 mr-2" />
                {t('showcase.cta.secondaryButton')}
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold gradient-text-secondary">
              {t('showcase.categories.title')}
            </h2>
            <p className="text-lg text-white/60">
              {t('showcase.categories.count').replace('{count}', showcasePages.length.toString())}
            </p>
          </div>

          <div className="showcase-grid">
            {showcasePages.map((page, index) => (
              <div key={index} className="showcase-item group">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <page.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <Badge variant="secondary" className="badge-glass">
                      {page.badge}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {page.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                      {t('showcase.keyFeatures.title')}
                    </h4>
                    <ul className="space-y-1">
                      {page.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <Link to={page.path}>
                      <Button className="w-full button-glass group-hover:bg-blue-500/20 transition-all duration-200">
                        {t('showcase.viewButton')}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text-primary">
              {t('showcase.cta.title')}
            </h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              {t('showcase.cta.description')}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                <Rocket className="w-5 h-5 mr-2" />
                {t('showcase.cta.primaryButton')}
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Palette className="w-5 h-5 mr-2" />
                {t('showcase.cta.secondaryButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}