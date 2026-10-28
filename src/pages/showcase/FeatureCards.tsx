import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { FeatureCard } from "@/components/ui/feature-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Shield, 
  Zap, 
  Globe, 
  Smartphone, 
  Users, 
  Settings, 
  BarChart3, 
  Lock,
  Star,
  Heart,
  TrendingUp,
  Award,
  Target,
  Rocket,
  Crown,
  Diamond,
  Sparkles,
  Gift,
  Trophy,
  Medal,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Share,
  Bookmark,
  Eye,
  MessageCircle,
  ThumbsUp,
  Calendar,
  Clock,
  MapPin,
  Camera,
  Music,
  Headphones,
  Coffee,
  Palette,
  Brush,
  Code,
  Database,
  Server,
  Cloud,
  Wifi,
  Battery,
  Sun,
  Moon,
  Flame,
  Droplets,
  Leaf,
  Mountain,
  Wind
} from "lucide-react";

export default function FeatureCards() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('showcase.features.security.title'),
      description: t('showcase.features.security.description'),
      icon: Shield,
      features: [
        t('showcase.features.security.features.2fa'),
        t('showcase.features.security.features.roleBased'),
        t('showcase.features.security.features.auditLogs'),
        t('showcase.features.security.features.ssl')
      ],
      badge: t('showcase.features.security.badge'),
      badgeVariant: "default" as const
    },
    {
      title: t('showcase.features.performance.title'),
      description: t('showcase.features.performance.description'),
      icon: Zap,
      features: [
        t('showcase.features.performance.features.fastLoading'),
        t('showcase.features.performance.features.caching'),
        t('showcase.features.performance.features.cdn'),
        t('showcase.features.performance.features.optimization')
      ],
      badge: t('showcase.features.performance.badge'),
      badgeVariant: "secondary" as const
    },
    {
      title: t('showcase.features.multiLanguage.title'),
      description: t('showcase.features.multiLanguage.description'),
      icon: Globe,
      features: [
        t('showcase.features.multiLanguage.features.turkish'),
        t('showcase.features.multiLanguage.features.english'),
        t('showcase.features.multiLanguage.features.dynamicTranslation'),
        t('showcase.features.multiLanguage.features.rtlSupport')
      ],
      badge: t('showcase.features.multiLanguage.badge'),
      badgeVariant: "outline" as const
    },
    {
      title: t('showcase.features.responsive.title'),
      description: t('showcase.features.responsive.description'),
      icon: Smartphone,
      features: [
        t('showcase.features.responsive.features.mobileFriendly'),
        t('showcase.features.responsive.features.tabletSupport'),
        t('showcase.features.responsive.features.touchFriendly'),
        t('showcase.features.responsive.features.pwaReady')
      ],
      badge: t('showcase.features.responsive.badge'),
      badgeVariant: "secondary" as const
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.features.pageTitle')}</title>
        <meta name="description" content={t('showcase.features.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.features.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.features.description')}
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.features.sections.basic')}</h2>
            <Badge variant="secondary">{t('showcase.features.badges.core')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                features={feature.features}
                badge={feature.badge}
                badgeVariant={feature.badgeVariant}
                gradient={false}
                onLearnMore={() => console.log(`Learn more about ${feature.title}`)}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.features.sections.premium')}</h2>
            <Badge className="bg-gradient-to-r from-yellow-700 to-orange-700 text-white border-0">{t('showcase.features.badges.premium')}</Badge>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="relative overflow-hidden bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg">
                    <Trophy className="w-6 h-6 text-foreground" />
                  </div>
                  <Badge className="bg-yellow-700 text-white border-0">{t('showcase.features.premium.achievement.badge')}</Badge>
                </div>
                <CardTitle className="text-xl mt-4">{t('showcase.features.premium.achievement.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.premium.achievement.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-yellow-700 text-white">AK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Ahmet Kaya</p>
                    <p className="text-sm text-muted-foreground">{t('showcase.features.premium.achievement.goldMember')}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t('showcase.features.premium.achievement.progress')}</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-yellow-800 dark:text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600">
                    {t('showcase.features.premium.achievement.learnMore')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-foreground" />
                  </div>
                  <Badge className="bg-blue-600 text-white border-0">{t('showcase.features.premium.analytics.badge')}</Badge>
                </div>
                <CardTitle className="text-xl mt-4">{t('showcase.features.premium.analytics.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.premium.analytics.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 rounded-lg bg-blue-500/10 dark:bg-blue-500/20">
                    <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">2.4K</div>
                    <div className="text-xs text-muted-foreground">{t('showcase.features.premium.analytics.views')}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">+12%</div>
                    <div className="text-xs text-muted-foreground">{t('showcase.features.premium.analytics.increase')}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t('showcase.features.premium.analytics.target')}</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-green-800 dark:text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">+5.2%</span>
                  </div>
                  <Button size="sm" variant="outline" className="border-blue-200 dark:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/20">
                    {t('showcase.features.premium.analytics.report')}
                    <BarChart3 className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-400/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg">
                    <Heart className="w-6 h-6 text-foreground" />
                  </div>
                  <Badge className="bg-pink-600 text-white border-0">{t('showcase.features.premium.social.badge')}</Badge>
                </div>
                <CardTitle className="text-xl mt-4">{t('showcase.features.premium.social.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.premium.social.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarFallback className="bg-pink-600 text-white text-xs">MK</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarFallback className="bg-rose-600 text-white text-xs">SY</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarFallback className="bg-purple-600 text-white text-xs">+5</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-sm text-muted-foreground">{t('showcase.features.premium.social.likes')} 8</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-pink-700 dark:text-pink-400">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">124</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-700 dark:text-blue-400">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">32</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-800 dark:text-green-400">
                      <Share className="w-4 h-4" />
                      <span className="text-sm">18</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                  {t('showcase.features.premium.social.interaction')}
                  <ThumbsUp className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.features.sections.creative')}</h2>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">{t('showcase.features.badges.creative')}</Badge>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="glassmorphism-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-purple-500/10 to-pink-500/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg w-fit">
                  <Music className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-lg mt-4">{t('showcase.features.creative.music.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.creative.music.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <h3 className="font-semibold">Bohemian Rhapsody</h3>
                  <p className="text-sm text-muted-foreground">Queen</p>
                </div>
                <Progress value={65} className="h-1" />
                <div className="flex items-center justify-center gap-4">
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </Button>
                  <Button size="icon" className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Play className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg w-fit">
                  <Sun className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-lg mt-4">{t('showcase.features.creative.weather.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.creative.weather.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">24°C</div>
                  <p className="text-sm text-muted-foreground">{t('showcase.features.creative.weather.sunny')}</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Droplets className="w-3 h-3" />
                    <span>65%</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wind className="w-3 h-3" />
                    <span>12 km/h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-amber-500/10 to-orange-500/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg w-fit">
                  <Coffee className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-lg mt-4">{t('showcase.features.creative.coffee.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.creative.coffee.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">3/5</div>
                  <p className="text-sm text-muted-foreground">{t('showcase.features.creative.coffee.cups')}</p>
                </div>
                <Progress value={60} className="h-2" />
                <Button size="sm" className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                  {t('showcase.features.creative.coffee.addCoffee')}
                  <Coffee className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            <Card className="glassmorphism-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg w-fit">
                  <Palette className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-lg mt-4">{t('showcase.features.creative.design.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.creative.design.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square rounded bg-red-200 dark:bg-red-500/20"></div>
                  <div className="aspect-square rounded bg-blue-200 dark:bg-blue-500/20"></div>
                  <div className="aspect-square rounded bg-green-200 dark:bg-green-500/20"></div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold">12</div>
                  <p className="text-sm text-muted-foreground">{t('showcase.features.creative.design.activeProjects')}</p>
                </div>
                <Button size="sm" variant="outline" className="w-full border-green-200 dark:border-green-500/30 hover:bg-green-50 dark:hover:bg-green-500/20">
                  {t('showcase.features.creative.design.gallery')}
                  <Eye className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.features.sections.interactive')}</h2>
            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0">{t('showcase.features.badges.interactive')}</Badge>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-blue-200 dark:hover:border-blue-500/30 dark:hover:border-blue-500/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-blue-500/15 dark:bg-blue-500/20">
                    <Download className="w-5 h-5 text-blue-700 dark:text-blue-400" />
                  </div>
                  <Badge variant="outline">{t('showcase.features.interactive.download.badge')}</Badge>
                </div>
                <CardTitle className="text-lg">{t('showcase.features.interactive.download.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.interactive.download.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>presentation.pdf</span>
                    <span className="text-muted-foreground">2.4 MB</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  {t('showcase.features.interactive.download.download')}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-yellow-200 dark:hover:border-yellow-500/30 dark:hover:border-yellow-500/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-yellow-500/15 dark:bg-yellow-500/20">
                    <Bookmark className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <Badge variant="outline">{t('showcase.features.interactive.bookmark.badge')}</Badge>
                </div>
                <CardTitle className="text-lg">{t('showcase.features.interactive.bookmark.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.interactive.bookmark.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm">{t('showcase.features.interactive.bookmark.items')} 15</span>
                </div>
                <Button variant="outline" className="w-full">
                  <Bookmark className="w-4 h-4 mr-2" />
                  {t('showcase.features.interactive.bookmark.collection')}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 hover:border-green-200 dark:hover:border-green-500/30 dark:hover:border-green-500/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-green-500/15 dark:bg-green-500/20">
                    <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <Badge variant="outline">{t('showcase.features.interactive.timer.badge')}</Badge>
                </div>
                <CardTitle className="text-lg">{t('showcase.features.interactive.timer.title')}</CardTitle>
                <CardDescription>
                  {t('showcase.features.interactive.timer.description')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold">25:00</div>
                  <p className="text-sm text-muted-foreground">{t('showcase.features.interactive.timer.focusTime')}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Play className="w-4 h-4 mr-1" />
                    {t('showcase.features.interactive.timer.start')}
                  </Button>
                  <Button size="sm" variant="outline">
                    {t('showcase.features.interactive.timer.reset')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
