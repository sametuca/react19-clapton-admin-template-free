import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play,
  Pause,
  Download,
  Upload,
  Save,
  Edit,
  Trash2,
  Plus,
  Minus,
  Search,
  Filter,
  Settings,
  User,
  Heart,
  Star,
  Share,
  Copy,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Send,
  Mail,
  Phone,
  MessageCircle,
  Bell,
  BellOff,
  Home,
  Calendar,
  Clock,
  MapPin,
  Camera,
  Image,
  Video,
  Music,
  Headphones,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Battery,
  Zap,
  Sun,
  Moon,
  Cloud,
  Umbrella,
  Thermometer,
  Wind,
  Snowflake,
  Flame,
  Droplets,
  Leaf,
  TreePine,
  Mountain,
  Waves,
  Fish,
  Bird,
  Bug,
  Flower,
  Apple,
  Coffee,
  Pizza,
  IceCream,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Coins,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
  Activity,
  Target,
  Award,
  Trophy,
  Medal,
  Crown,
  Shield,
  Sword,
  Hammer,
  Wrench,
  Paintbrush,
  Palette,
  Brush,
  Scissors,
  Ruler,
  Compass,
  Map,
  Navigation,
  Plane,
  Car,
  Train,
  Ship,
  Bike,
  Rocket,
  Satellite,
  Globe,
  Earth,
  Smartphone,
  Laptop,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  Webcam,
  Gamepad2,
  Joystick,
  Dice1,
  Dice6,
  Puzzle,
  BookOpen,
  Book,
  Bookmark,
  Library,
  GraduationCap,
  School,
  Briefcase,
  Building,
  Factory,
  Store,
  Warehouse,
  Sparkles
} from "lucide-react";

export default function ButtonShowcase() {
  const { t } = useLanguage();

  const buttonVariants = [
    { variant: "default", label: t('showcase.buttons.variants.default') },
    { variant: "destructive", label: t('showcase.buttons.variants.destructive') },
    { variant: "outline", label: t('showcase.buttons.variants.outline') },
    { variant: "secondary", label: t('showcase.buttons.variants.secondary') },
    { variant: "ghost", label: t('showcase.buttons.variants.ghost') },
    { variant: "link", label: t('showcase.buttons.variants.link') }
  ];

  const buttonSizes = [
    { size: "sm", label: t('showcase.buttons.sizes.sm') },
    { size: "default", label: t('showcase.buttons.sizes.default') },
    { size: "lg", label: t('showcase.buttons.sizes.lg') },
    { size: "icon", label: t('showcase.buttons.sizes.icon') }
  ];

  const actionButtons = [
    { icon: Play, label: t('showcase.buttons.actions.play'), variant: "default", color: "from-green-500 to-emerald-500" },
    { icon: Pause, label: t('showcase.buttons.actions.pause'), variant: "secondary", color: "from-gray-500 to-slate-500" },
    { icon: Download, label: t('showcase.buttons.actions.download'), variant: "outline", color: "from-blue-500 to-cyan-500" },
    { icon: Upload, label: t('showcase.buttons.actions.upload'), variant: "outline", color: "from-purple-500 to-violet-500" },
    { icon: Save, label: t('showcase.buttons.actions.save'), variant: "default", color: "from-green-500 to-teal-500" },
    { icon: Edit, label: t('showcase.buttons.actions.edit'), variant: "ghost", color: "from-orange-500 to-amber-500" },
    { icon: Trash2, label: t('showcase.buttons.actions.delete'), variant: "destructive", color: "from-red-500 to-rose-500" },
    { icon: Plus, label: t('showcase.buttons.actions.add'), variant: "default", color: "from-indigo-500 to-blue-500" }
  ];

  const socialButtons = [
    { icon: Heart, label: t('showcase.buttons.socials.like'), variant: "ghost", color: "from-pink-500 to-rose-500" },
    { icon: Star, label: t('showcase.buttons.socials.favorite'), variant: "ghost", color: "from-yellow-500 to-amber-500" },
    { icon: Share, label: t('showcase.buttons.socials.share'), variant: "outline", color: "from-blue-500 to-indigo-500" },
    { icon: Copy, label: t('showcase.buttons.socials.copy'), variant: "secondary", color: "from-gray-500 to-zinc-500" },
    { icon: Send, label: t('showcase.buttons.socials.send'), variant: "default", color: "from-blue-500 to-cyan-500" },
    { icon: Mail, label: t('showcase.buttons.socials.email'), variant: "outline", color: "from-red-500 to-orange-500" },
    { icon: Phone, label: t('showcase.buttons.socials.call'), variant: "default", color: "from-green-500 to-emerald-500" },
    { icon: MessageCircle, label: t('showcase.buttons.socials.message'), variant: "ghost", color: "from-purple-500 to-pink-500" }
  ];

  const utilityButtons = [
    { icon: Search, label: t('showcase.buttons.utilities.search'), variant: "outline", color: "from-blue-500 to-cyan-500" },
    { icon: Filter, label: t('showcase.buttons.utilities.filter'), variant: "secondary", color: "from-gray-500 to-slate-500" },
    { icon: Settings, label: t('showcase.buttons.utilities.settings'), variant: "ghost", color: "from-gray-600 to-zinc-600" },
    { icon: Bell, label: t('showcase.buttons.utilities.notifications'), variant: "outline", color: "from-yellow-500 to-orange-500" },
    { icon: User, label: t('showcase.buttons.utilities.profile'), variant: "ghost", color: "from-indigo-500 to-purple-500" },
    { icon: Lock, label: t('showcase.buttons.utilities.lock'), variant: "secondary", color: "from-red-500 to-pink-500" },
    { icon: Eye, label: t('showcase.buttons.utilities.view'), variant: "ghost", color: "from-green-500 to-teal-500" },
    { icon: Calendar, label: t('showcase.buttons.utilities.calendar'), variant: "outline", color: "from-blue-500 to-indigo-500" }
  ];

  const gradientButtons = [
    { label: t('showcase.buttons.gradients.gradient1'), gradient: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" },
    { label: t('showcase.buttons.gradients.gradient2'), gradient: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600" },
    { label: t('showcase.buttons.gradients.gradient3'), gradient: "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600" },
    { label: t('showcase.buttons.gradients.gradient4'), gradient: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" },
    { label: t('showcase.buttons.gradients.gradient5'), gradient: "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600" },
    { label: t('showcase.buttons.gradients.gradient6'), gradient: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" }
  ];

  const glassmorphismButtons = [
    { label: t('showcase.buttons.glassmorphisms.glassBlue'), style: "bg-blue-500/20 backdrop-blur-md border border-blue-500/30 hover:bg-blue-500/30 text-blue-100" },
    { label: t('showcase.buttons.glassmorphisms.glassPurple'), style: "bg-purple-500/20 backdrop-blur-md border border-purple-500/30 hover:bg-purple-500/30 text-purple-100" },
    { label: t('showcase.buttons.glassmorphisms.glassGreen'), style: "bg-green-500/20 backdrop-blur-md border border-green-500/30 hover:bg-green-500/30 text-green-100" },
    { label: t('showcase.buttons.glassmorphisms.glassPink'), style: "bg-pink-500/20 backdrop-blur-md border border-pink-500/30 hover:bg-pink-500/30 text-pink-100" }
  ];

  const animatedButtons = [
    { label: t('showcase.buttons.animations.pulse'), animation: "animate-pulse" },
    { label: t('showcase.buttons.animations.bounce'), animation: "animate-bounce" },
    { label: t('showcase.buttons.animations.spin'), animation: "animate-spin" },
    { label: t('showcase.buttons.animations.ping'), animation: "animate-ping" }
  ];

  const iconOnlyButtons = [
    { icon: Home, color: "from-blue-500 to-cyan-500" },
    { icon: Search, color: "from-green-500 to-teal-500" },
    { icon: Settings, color: "from-gray-500 to-zinc-500" },
    { icon: Bell, color: "from-yellow-500 to-orange-500" },
    { icon: User, color: "from-purple-500 to-pink-500" },
    { icon: Heart, color: "from-red-500 to-rose-500" },
    { icon: Star, color: "from-amber-500 to-yellow-500" },
    { icon: Share, color: "from-indigo-500 to-blue-500" },
    { icon: Download, color: "from-emerald-500 to-green-500" },
    { icon: Upload, color: "from-violet-500 to-purple-500" },
    { icon: Edit, color: "from-orange-500 to-amber-500" },
    { icon: Trash2, color: "from-red-600 to-pink-600" }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.buttons.pageTitle')}</title>
        <meta name="description" content={t('showcase.buttons.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('showcase.buttons.title')}
            </h1>
            <p className="text-muted-foreground mt-1">
              {t('showcase.buttons.description')}
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            {t('showcase.buttons.badges.total')} 100+
          </Badge>
        </div>

        {/* Basic Variants */}
        <SpotlightCard
          title={t('showcase.buttons.sections.variants')}
          description={t('showcase.buttons.sections.variantsDescription')}
          icon={Settings}
          spotlightColor="#3b82f6"
          className="glassmorphism-card border-0 shadow-xl"
        >
            <div className="space-y-8">
              {/* Variants */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{t('showcase.buttons.sections.variantTypes')}</h3>
                <div className="flex flex-wrap gap-4">
                  {buttonVariants.map((variant) => (
                    <Button key={variant.variant} variant={variant.variant as any}>
                      {variant.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{t('showcase.buttons.sections.sizes')}</h3>
                <div className="flex flex-wrap items-center gap-4">
                  {buttonSizes.map((size) => (
                    <Button key={size.size} size={size.size as any}>
                      {size.size === "icon" ? <Settings className="w-4 h-4" /> : size.label}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
        </SpotlightCard>

        {/* Action Buttons */}
        <SpotlightCard
          title={t('showcase.buttons.sections.actions')}
          description={t('showcase.buttons.sections.actionsDescription')}
          icon={Play}
          spotlightColor="#10b981"
          className="glassmorphism-card border-0 shadow-xl"
        >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {actionButtons.map((button, index) => (
                <Button key={index} variant={button.variant as any} className="h-12 justify-start gap-3">
                  <button.icon className="w-5 h-5" />
                  {button.label}
                </Button>
              ))}
            </div>
        </SpotlightCard>

        {/* Social Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.socials')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.socialsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {socialButtons.map((button, index) => (
                <Button key={index} variant={button.variant as any} className="h-12 justify-start gap-3">
                  <button.icon className="w-5 h-5" />
                  {button.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Utility Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                <Search className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.utilities')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.utilitiesDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {utilityButtons.map((button, index) => (
                <Button key={index} variant={button.variant as any} className="h-12 justify-start gap-3">
                  <button.icon className="w-5 h-5" />
                  {button.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gradient Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
                <Palette className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.gradients')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.gradientsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {gradientButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${button.gradient}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Glassmorphism Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Droplets className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.glassmorphisms')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.glassmorphismsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {glassmorphismButtons.map((button, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${button.style}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Animated Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.animations')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.animationsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {animatedButtons.map((button, index) => (
                <Button
                  key={index}
                  className={`h-12 ${button.animation}`}
                  variant="outline"
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Icon Only Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.icons')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.iconsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
              {iconOnlyButtons.map((button, index) => (
                <button
                  key={index}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${button.color} flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                >
                  <button.icon className="w-5 h-5 text-white" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Special Effect Buttons */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.specialEffects')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.specialEffectsDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Neon Button */}
              <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:animate-pulse">
                {t('showcase.buttons.specialEffects.neon')}
              </button>

              {/* 3D Button */}
              <button className="px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-200 border-b-4 border-blue-700 hover:border-blue-800">
                {t('showcase.buttons.specialEffects.threeD')}
              </button>

              {/* Ripple Button */}
              <button className="px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold relative overflow-hidden hover:bg-purple-600 transition-colors duration-300 group">
                <span className="relative z-10">{t('showcase.buttons.specialEffects.ripple')}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
              </button>

              {/* Slide Button */}
              <button className="px-8 py-4 bg-green-500 text-white rounded-lg font-semibold relative overflow-hidden hover:text-green-500 transition-colors duration-300 group">
                <span className="relative z-10">{t('showcase.buttons.specialEffects.slide')}</span>
                <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>

              {/* Glow Button */}
              <button className="px-8 py-4 bg-pink-500 text-white rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300 hover:bg-pink-600">
                {t('showcase.buttons.specialEffects.glow')}
              </button>

              {/* Border Animation */}
              <button className="px-8 py-4 bg-transparent border-2 border-orange-400 text-orange-400 rounded-lg font-semibold relative overflow-hidden hover:text-white transition-colors duration-300 group">
                <span className="relative z-10">{t('showcase.buttons.specialEffects.borderAnimation')}</span>
                <div className="absolute inset-0 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Loading States */}
        <Card className="glassmorphism-card border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-foreground text-xl">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              {t('showcase.buttons.sections.loadingStates')}
            </CardTitle>
            <CardDescription className="text-foreground/60 text-base">
              {t('showcase.buttons.sections.loadingStatesDescription')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Button disabled className="h-12">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                {t('showcase.buttons.loadingStates.loading')}
              </Button>
              
              <Button variant="outline" disabled className="h-12">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                {t('showcase.buttons.loadingStates.processing')}
              </Button>
              
              <Button variant="secondary" disabled className="h-12">
                <div className="flex space-x-1 mr-2">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
                {t('showcase.buttons.loadingStates.waiting')}
              </Button>
              
              <Button variant="ghost" disabled className="h-12">
                <div className="w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin mr-2"></div>
                {t('showcase.buttons.loadingStates.saving')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
