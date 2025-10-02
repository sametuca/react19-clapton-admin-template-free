import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { StatsCard } from "@/components/ui/stats-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  DollarSign, 
  Activity, 
  Target, 
  ShoppingCart, 
  Eye, 
  Download, 
  MessageSquare,
  TrendingUp, 
  TrendingDown,
  Clock, 
  Star, 
  Globe,
  Zap, 
  Shield, 
  Heart, 
  Award,
  Brain,
  Coffee,
  Gamepad2,
  Headphones,
  Camera,
  Palette,
  Code,
  Database,
  Server,
  Wifi,
  Battery,
  Sun,
  Moon,
  Flame,
  Droplets,
  Leaf,
  Mountain,
  Wind,
  Smartphone,
  Laptop,
  Monitor,
  Printer,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Car,
  Plane,
  Ship,
  Bike,
  Home,
  Building,
  Store,
  Factory,
  School,
  Hospital,
  BookOpen,
  GraduationCap,
  Briefcase,
  Wallet,
  CreditCard,
  PiggyBank,
  TrendingDown as TrendDown,
  BarChart3,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Minus,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Sparkles,
  Gift,
  Trophy,
  Medal,
  Crown,
  Diamond,
  Rocket,
  Music,
  Video,
  Image,
  FileText,
  Folder,
  Archive,
  Trash2,
  Edit,
  Save,
  Share,
  Copy,
  Bookmark,
  Flag,
  Tag,
  Search,
  Filter,
  Settings,
  Bell,
  Lock,
  Unlock,
  Key,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus
} from "lucide-react";

export default function StatsCards() {
  const { t } = useLanguage();

  const basicStats = [
    {
      title: t('showcase.stats.basicStats.totalUsers'),
      value: 15420,
      change: 12.5,
      changeType: "positive" as const,
      icon: Users,
      description: t('showcase.stats.basicStats.last30Days')
    },
    {
      title: t('showcase.stats.basicStats.monthlyRevenue'),
      value: 89750,
      change: 8.2,
      changeType: "positive" as const,
      icon: DollarSign,
      description: t('showcase.stats.basicStats.thisMonth'),
      prefix: "₺"
    },
    {
      title: t('showcase.stats.basicStats.activeProjects'),
      value: 47,
      change: 5.1,
      changeType: "positive" as const,
      icon: Activity,
      description: t('showcase.stats.basicStats.ongoing')
    },
    {
      title: t('showcase.stats.basicStats.completed'),
      value: 234,
      change: 18.7,
      changeType: "positive" as const,
      icon: CheckCircle,
      description: t('showcase.stats.basicStats.thisWeek')
    }
  ];

  const socialStats = [
    {
      title: t('showcase.stats.socialStats.followerCount'),
      value: 89420,
      change: 15.3,
      changeType: "positive" as const,
      icon: Users,
      description: t('showcase.stats.socialStats.socialMedia')
    },
    {
      title: t('showcase.stats.socialStats.likes'),
      value: 234567,
      change: 28.4,
      changeType: "positive" as const,
      icon: Heart,
      description: t('showcase.stats.socialStats.thisMonth')
    },
    {
      title: t('showcase.stats.socialStats.shares'),
      value: 12845,
      change: 7.2,
      changeType: "positive" as const,
      icon: Share,
      description: t('showcase.stats.socialStats.weekly')
    },
    {
      title: t('showcase.stats.socialStats.comments'),
      value: 5678,
      change: -2.1,
      changeType: "negative" as const,
      icon: MessageSquare,
      description: t('showcase.stats.socialStats.active')
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.stats.pageTitle')}</title>
        <meta name="description" content={t('showcase.stats.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.stats.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.stats.description')}
          </p>
        </div>

        {/* Basic Stats */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.stats.sections.basic')}</h2>
            <Badge variant="secondary">{t('showcase.stats.badges.standard')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {basicStats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                icon={stat.icon}
                description={stat.description}
                prefix={stat.prefix}
                gradient={false}
              />
            ))}
          </div>
        </section>

        {/* Social Media Stats */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.stats.sections.social')}</h2>
            <Badge variant="outline">{t('showcase.stats.badges.popular')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {socialStats.map((stat, index) => (
              <StatsCard
                key={`social-${index}`}
                title={stat.title}
                value={stat.value}
                change={stat.change}
                changeType={stat.changeType}
                icon={stat.icon}
                description={stat.description}
                gradient={true}
              />
            ))}
          </div>
        </section>
        
        {/* Custom Cards */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.stats.sections.custom')}</h2>
            <Badge variant="outline">{t('showcase.stats.badges.creative')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Advanced Analytics Card */}
            <SpotlightCard
              title={t('showcase.stats.cards.analytics')}
              description={t('showcase.stats.cards.trafficIncrease')}
              icon={BarChart3}
              spotlightColor="blue"
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{t('showcase.stats.badges.live')}</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('showcase.stats.cards.trafficIncrease')}</span>
                    <span className="font-medium text-green-600">+24.5%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">89.2K</div>
                    <div className="text-xs text-muted-foreground">{t('showcase.stats.cards.visitors')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">4.8</div>
                    <div className="text-xs text-muted-foreground">{t('showcase.stats.cards.average')}</div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Team Performance Card */}
            <SpotlightCard
              title={t('showcase.stats.cards.teamPerformance')}
              description={t('showcase.stats.cards.tasksCompleted')}
              icon={Users}
              spotlightColor="green"
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback className="text-xs">AK</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback className="text-xs">MÖ</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback className="text-xs">SY</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('showcase.stats.cards.tasksCompleted')}</span>
                    <span className="font-medium">127/150</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">85%</div>
                    <div className="text-xs text-muted-foreground">{t('showcase.stats.cards.productivity')}</div>
                  </div>
                  <Button size="sm" variant="outline" className="h-8">
                    <Eye className="h-3 w-3 mr-1" />
                    {t('showcase.stats.cards.details')}
                  </Button>
                </div>
              </div>
            </SpotlightCard>

            {/* Revenue Analysis Card */}
            <SpotlightCard
              title={t('showcase.stats.cards.revenueAnalysis')}
              description={t('showcase.stats.cards.thisMonth')}
              icon={TrendingUp}
              spotlightColor="purple"
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="default" className="bg-purple-500">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +18%
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">₺245.8K</div>
                  <div className="text-sm text-muted-foreground">{t('showcase.stats.cards.thisMonth')}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{t('showcase.stats.cards.target')}</span>
                    <span className="font-medium">₺280K</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>{t('showcase.stats.cards.revenueIncrease')}</span>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.stats.sections.features')}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <SpotlightCard
              title={t('showcase.stats.features.animated')}
              description={t('showcase.stats.features.smoothTransitions')}
              icon={Sparkles}
              spotlightColor="yellow"
              className="p-4 text-center"
            />
            <SpotlightCard
              title={t('showcase.stats.features.colorful')}
              description={t('showcase.stats.features.gradientAndSolid')}
              icon={Palette}
              spotlightColor="blue"
              className="p-4 text-center"
            />
            <SpotlightCard
              title={t('showcase.stats.features.liveData')}
              description={t('showcase.stats.features.realtimeUpdates')}
              icon={Activity}
              spotlightColor="green"
              className="p-4 text-center"
            />
            <SpotlightCard
              title={t('showcase.stats.features.customizable')}
              description={t('showcase.stats.features.flexibleConfiguration')}
              icon={Settings}
              spotlightColor="purple"
              className="p-4 text-center"
            />
          </div>
        </section>
      </div>
    </>
  );
}
