import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeSelector } from '@/components/ThemeSelector';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import {
  Sparkles,
  Zap,
  Shield,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  Languages,
  LayoutDashboard,
  Check,
} from 'lucide-react';

// React logo (decorative)
const ReactLogo = ({ size = 120, className = "" }) => (
  <div className={`relative ${className}`}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 841.9 595.3"
      className="drop-shadow-md"
    >
      <g fill="currentColor">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.2 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
        <circle cx="420.9" cy="296.5" r="45.7"/>
        <path d="m520.5 78.1z"/>
      </g>
    </svg>
  </div>
);

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const highlights = [
    { icon: Sparkles, key: 'components' },
    { icon: Zap, key: 'performance' },
    { icon: Shield, key: 'enterprise' },
    { icon: Palette, key: 'themes' },
    { icon: Languages, key: 'i18n' },
    { icon: Smartphone, key: 'responsive' },
  ] as const;

  const stats = [
    { value: '200+', key: 'components' },
    { value: '50+', key: 'pages' },
    { value: '10', key: 'themes' },
    { value: '2', key: 'languages' },
  ] as const;

  const stack = [
    { name: 'React 19', icon: Monitor },
    { name: 'TypeScript', icon: Code },
    { name: 'Vite', icon: Zap },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'shadcn/ui', icon: LayoutDashboard },
    { name: 'Framer Motion', icon: Globe },
  ];

  const checklist = ['one', 'two', 'three'] as const;

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-2 text-lg font-bold text-primary-foreground shadow-md">
              C
            </span>
            <span className="text-lg font-semibold">Clapton</span>
          </Link>
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSelector />
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link to="/login">{t('welcome.signIn')}</Link>
            </Button>
            <Button size="sm" onClick={() => navigate('/dashboard')}>
              {t('welcome.openDashboard')}
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container px-4 py-20 text-center md:py-28">
            <Badge variant="outline" className="mb-6 gap-2 px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-primary" />
              {t('welcome.badge')}
            </Badge>

            <div className="mb-6 flex justify-center text-primary">
              <ReactLogo size={96} />
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {t('welcome.titleBefore')}{' '}
              <span className="gradient-text-primary">{t('welcome.titleHighlight')}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {t('welcome.subtitle')}
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-base" onClick={() => navigate('/get-started')}>
                <Rocket className="mr-2 h-5 w-5" />
                {t('welcome.getStarted')}
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={() => navigate('/showcase')}>
                {t('welcome.exploreComponents')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-success" />
                  {t(`welcome.checklist.${item}`)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stats */}
        <section className="container px-4 pb-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.key} className="text-center">
                <CardContent className="p-6">
                  <div className="gradient-text-primary text-4xl font-bold">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t(`welcome.stats.${stat.key}`)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="border-y bg-muted/40 py-16">
          <div className="container px-4">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('welcome.whyTitle')}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{t('welcome.whySubtitle')}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {highlights.map(({ icon: Icon, key }) => (
                <Card key={key} className="feature-card">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{t(`welcome.highlights.${key}.title`)}</h3>
                    <p className="text-muted-foreground">{t(`welcome.highlights.${key}.description`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="container px-4 py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('welcome.stackTitle')}</h2>
            <p className="mt-3 text-lg text-muted-foreground">{t('welcome.stackSubtitle')}</p>
          </div>
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
            {stack.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-sm"
              >
                <Icon className="h-4 w-4 text-primary" />
                {name}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container px-4 pb-20">
          <div className="cta-section">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{t('welcome.ctaTitle')}</h2>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">{t('welcome.ctaSubtitle')}</p>
            <Button size="lg" className="mt-8 h-12 px-8 text-base" onClick={() => navigate('/get-started')}>
              {t('welcome.ctaButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <p>{t('welcome.footer')}</p>
      </footer>
    </div>
  );
};

export default Welcome;
