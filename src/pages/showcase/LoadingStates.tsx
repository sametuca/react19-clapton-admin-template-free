import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { DotsLoader } from "@/components/ui/dots-loader";
import { PulseLoader } from "@/components/ui/pulse-loader";
import { BarsLoader } from "@/components/ui/bars-loader";
import { WaveLoader } from "@/components/ui/wave-loader";
import { ProgressRing } from "@/components/ui/progress-ring";
import { SkeletonLoader } from "@/components/ui/skeleton-loader";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoadingStates() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>{t('showcase.loading.pageTitle')}</title>
        <meta name="description" content={t('showcase.loading.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.loading.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.loading.description')}
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.sizes')}</h2>
            <Badge variant="secondary">{t('showcase.loading.badges.responsive')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.small')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="sm" text={t('showcase.loading.spinnerTexts.small')} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.medium')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text={t('showcase.loading.spinnerTexts.medium')} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.large')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="lg" text={t('showcase.loading.spinnerTexts.large')} />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.textVariations')}</h2>
            <Badge variant="outline">{t('showcase.loading.badges.customizable')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.onlySpinner')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.shortText')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text={t('showcase.loading.spinnerTexts.short')} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.longText')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text={t('showcase.loading.spinnerTexts.long')} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.customMessage')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text={t('showcase.loading.spinnerTexts.custom')} />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.interactiveDemo')}</h2>
            <Badge variant="default">{t('showcase.loading.badges.live')}</Badge>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>{t('showcase.loading.cardTitles.loadingSimulation')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button onClick={simulateLoading} disabled={isLoading}>
                  {isLoading ? t('showcase.loading.buttonTexts.loading') : t('showcase.loading.buttonTexts.startLoading')}
                </Button>
              </div>
              {isLoading && (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="lg" text={t('showcase.loading.spinnerTexts.loadingSimulation')} />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.features')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.cssAnimations')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.cssAnimations')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.threeSizeOptions')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.threeSizeOptions')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.optionalText')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.optionalText')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.themeAdaptation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.themeAdaptation')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.easyIntegration')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.easyIntegration')}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.performance')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('showcase.loading.features.performance')}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.advancedLoaders')}</h2>
            <Badge variant="default">{t('showcase.loading.badges.modern')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.dotsLoader')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <DotsLoader size="md" color="primary" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.pulseLoader')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <PulseLoader size="md" variant="circle" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.barsLoader')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <BarsLoader size="md" bars={4} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.waveLoader')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <WaveLoader size="md" />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.progressIndicators')}</h2>
            <Badge variant="outline">{t('showcase.loading.badges.interactive')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.progressRing')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <ProgressRing size="md" progress={75} showPercentage />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.creativePulse')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <PulseLoader size="lg" variant="rounded" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.modernSpinner')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="relative">
                  <LoadingSpinner size="lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <DotsLoader size="sm" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.skeletonLoaders')}</h2>
            <Badge variant="secondary">{t('showcase.loading.badges.smooth')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.skeletonText')}</CardTitle>
              </CardHeader>
              <CardContent className="py-8">
                <SkeletonLoader variant="text" lines={4} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.skeletonCircular')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="flex items-center gap-4">
                  <SkeletonLoader variant="circular" />
                  <div className="space-y-2">
                    <SkeletonLoader variant="text" lines={2} className="w-32" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.skeletonCard')}</CardTitle>
              </CardHeader>
              <CardContent className="py-4">
                <SkeletonLoader variant="card" />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.loading.sections.creativeAnimations')}</h2>
            <Badge variant="default">{t('showcase.loading.badges.creative')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.gradientWave')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="relative">
                  <WaveLoader size="lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary">Loading...</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.multiLayerPulse')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="relative">
                  <PulseLoader size="lg" variant="circle" />
                  <div className="absolute inset-4">
                    <PulseLoader size="md" variant="circle" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.loading.cardTitles.animatedDotsGrid')}</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
                      <DotsLoader size="sm" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
