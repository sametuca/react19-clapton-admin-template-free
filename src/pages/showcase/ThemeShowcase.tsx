import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeSelector } from "@/components/ThemeSelector";
import { useTheme, themes } from "@/contexts/ThemeContext";
import { StatsCard } from "@/components/ui/stats-card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Palette, 
  Crown, 
  Sparkles, 
  Star, 
  Zap,
  Moon,
  Atom,
  Gem,
  Flame,
  Waves,
  Users,
  DollarSign,
  Activity,
  TrendingUp,
  Eye,
  Heart,
  Download,
  Settings,
  Shield,
  Globe,
  Rocket,
  Check,
  ArrowRight,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  Brush,
  Layers,
  Sun,
  Droplets,
  Wind,
  Mountain
} from "lucide-react";

export default function ThemeShowcase() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  const currentTheme = themes[theme];

  const sampleStats = [
    {
      title: "Premium Kullanıcılar",
      value: 12543,
      change: 18.7,
      changeType: "positive" as const,
      icon: Crown,
      description: "Bu ay"
    },
    {
      title: "Toplam Gelir",
      value: 456789,
      change: 24.3,
      changeType: "positive" as const,
      icon: DollarSign,
      description: "₺",
      prefix: "₺"
    },
    {
      title: "Aktif Projeler",
      value: 89,
      change: 12.1,
      changeType: "positive" as const,
      icon: Rocket,
      description: "Devam eden"
    },
    {
      title: "Performans Skoru",
      value: 98.5,
      change: 5.2,
      changeType: "positive" as const,
      icon: Star,
      description: "Mükemmel",
      decimals: 1
    }
  ];

  const themeFeatures = [
    {
      title: "Premium Gradyanlar",
      description: "Özel tasarlanmış renk geçişleri ve efektler",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      features: ["Çoklu katman gradyanlar", "Animasyonlu geçişler", "Özel renk paleti"]
    },
    {
      title: "Glassmorphism Efektleri",
      description: "Modern cam efekti tasarımlar ve şeffaflık",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      features: ["Backdrop blur efektleri", "Şeffaf katmanlar", "Derinlik hissi"]
    },
    {
      title: "Animasyonlu Geçişler",
      description: "Akıcı ve etkileyici animasyonlar",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      features: ["Smooth transitions", "Hover efektleri", "Micro-interactions"]
    },
    {
      title: "Özel Gölgeler",
      description: "Derinlik hissi veren gölge efektleri",
      icon: Eye,
      color: "from-orange-500 to-red-500",
      features: ["Çoklu gölge katmanları", "Renkli gölgeler", "Dinamik gölgeler"]
    }
  ];

  const themeIcons = {
    dark: Moon,
    midnight: Atom,
    neon: Zap,
    royal: Crown,
    aurora: Waves,
    cyberpunk: Flame,
    galaxy: Star,
    emerald: Gem
  };

  const themeColors = {
    dark: 'from-slate-600 to-slate-800',
    midnight: 'from-black to-purple-900',
    neon: 'from-cyan-400 to-pink-500',
    royal: 'from-purple-600 to-purple-900',
    aurora: 'from-green-400 to-blue-600',
    cyberpunk: 'from-yellow-400 to-pink-600',
    galaxy: 'from-purple-900 to-pink-600',
    emerald: 'from-emerald-600 to-green-800'
  };

  const devicePreviews = [
    { name: "Desktop", icon: Monitor, size: "w-full h-64" },
    { name: "Tablet", icon: Tablet, size: "w-3/4 h-48" },
    { name: "Mobile", icon: Smartphone, size: "w-1/2 h-40" }
  ];

  const themeComparisons = [
    { feature: "Renk Paleti", basic: "5 renk", premium: "15+ renk" },
    { feature: "Gradyanlar", basic: "Temel", premium: "Gelişmiş" },
    { feature: "Animasyonlar", basic: "Basit", premium: "Kompleks" },
    { feature: "Efektler", basic: "Yok", premium: "Glassmorphism" },
    { feature: "Özelleştirme", basic: "Sınırlı", premium: "Tam" },
    { feature: "Destek", basic: "Topluluk", premium: "Öncelikli" }
  ];

  return (
    <>
      <Helmet>
        <title>Premium Temalar - React19 Admin</title>
        <meta name="description" content="Ücretli premium temalar ve özelleştirme seçenekleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Premium Tema Koleksiyonu
            </h1>
            <Crown className="h-8 w-8 text-primary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profesyonel tasarlanmış, özel efektli ve tamamen özelleştirilebilir premium temalar. 
            Her tema benzersiz görsel deneyim sunar ve admin panelinizi bir üst seviyeye taşır.
          </p>
          <div className="flex items-center justify-center gap-4">
            <ThemeSelector />
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 px-4 py-2">
              <Crown className="h-4 w-4 mr-2" />
              8 Premium Tema
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="themes">Tema Galerisi</TabsTrigger>
            <TabsTrigger value="preview">Canlı Önizleme</TabsTrigger>
            <TabsTrigger value="comparison">Karşılaştırma</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Current Theme Info */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${themeColors[theme as keyof typeof themeColors]} flex items-center justify-center shadow-lg`}>
                    {React.createElement(themeIcons[theme as keyof typeof themeIcons], { className: "w-6 h-6 text-white" })}
                  </div>
                  Aktif Tema: {currentTheme.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground">{currentTheme.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Renk Paleti</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {Object.entries(currentTheme.colors).slice(0, 8).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <div 
                              className="w-full h-8 rounded-lg border-2 border-white/20 shadow-lg"
                              style={{ backgroundColor: `hsl(${value})` }}
                            />
                            <span className="text-xs font-medium capitalize text-center block">
                              {key.replace('-', ' ')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold">Tema Özellikleri</h4>
                    <div className="space-y-3">
                      {themeFeatures.map((feature, index) => (
                        <div key={index} className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/70 transition-all duration-300">
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                              <feature.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium mb-1">{feature.title}</h5>
                              <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {feature.features.map((feat, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {feat}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme Preview with Stats */}
            <section className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold">Tema Önizlemesi</h2>
                <Badge variant="secondary">Canlı Önizleme</Badge>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {sampleStats.map((stat, index) => (
                  <StatsCard
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                    changeType={stat.changeType}
                    icon={stat.icon}
                    description={stat.description}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                    gradient={true}
                  />
                ))}
              </div>
            </section>
          </TabsContent>

          <TabsContent value="themes" className="space-y-8">
            {/* All Themes Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {Object.entries(themes).map(([themeKey, themeConfig]) => {
                const Icon = themeIcons[themeKey as keyof typeof themeIcons];
                const isActive = theme === themeKey;
                
                return (
                  <Card 
                    key={themeKey}
                    className={`premium-card cursor-pointer group transition-all duration-300 hover:scale-105 ${
                      isActive ? 'ring-2 ring-primary shadow-xl' : ''
                    }`}
                    onClick={() => setTheme(themeKey as any)}
                  >
                    {/* Theme Preview Background */}
                    <div 
                      className="h-32 rounded-t-lg relative overflow-hidden"
                      style={{ background: themeConfig.gradient }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${themeColors[themeKey as keyof typeof themeColors]} flex items-center justify-center shadow-lg`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        {isActive && (
                          <Badge variant="default" className="text-xs bg-white text-black">
                            <Check className="h-3 w-3 mr-1" />
                            Aktif
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-1">
                          <div 
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: `hsl(${themeConfig.colors.primary})` }}
                          />
                          <div 
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: `hsl(${themeConfig.colors.secondary})` }}
                          />
                          <div 
                            className="w-3 h-3 rounded-full border border-white/30"
                            style={{ backgroundColor: `hsl(${themeConfig.colors.accent})` }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {themeConfig.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {themeConfig.description}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Preview Elements */}
                      <div className="space-y-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-300"
                          style={{ backgroundColor: `hsl(${themeConfig.colors.primary})` }}
                        />
                        <div 
                          className="h-1 rounded-full w-3/4 transition-all duration-300"
                          style={{ backgroundColor: `hsl(${themeConfig.colors.secondary})` }}
                        />
                        <div 
                          className="h-1 rounded-full w-1/2 transition-all duration-300"
                          style={{ backgroundColor: `hsl(${themeConfig.colors.accent})` }}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between pt-2">
                        <Badge 
                          variant="secondary" 
                          className="text-xs bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 border-yellow-500/30"
                        >
                          <Crown className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                        
                        <Button 
                          size="sm" 
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            setTheme(themeKey as any);
                          }}
                        >
                          {isActive ? "Aktif" : "Uygula"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-8">
            {/* Device Previews */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-center">Cihaz Önizlemeleri</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {devicePreviews.map((device) => (
                  <Card key={device.name} className="premium-card">
                    <CardHeader className="text-center">
                      <device.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <CardTitle>{device.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className={`${device.size} mx-auto rounded-lg border-2 border-border/50 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm p-4 relative overflow-hidden`}>
                        <div className="absolute inset-0" style={{ background: currentTheme.gradient, opacity: 0.1 }} />
                        <div className="relative z-10 space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-primary/20" />
                            <div className="h-2 bg-primary/30 rounded flex-1" />
                          </div>
                          <div className="space-y-1">
                            <div className="h-1 bg-primary/40 rounded w-full" />
                            <div className="h-1 bg-primary/30 rounded w-3/4" />
                            <div className="h-1 bg-primary/20 rounded w-1/2" />
                          </div>
                          <div className="flex gap-1">
                            <div className="w-4 h-4 rounded bg-primary/30" />
                            <div className="w-4 h-4 rounded bg-secondary/30" />
                            <div className="w-4 h-4 rounded bg-accent/30" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Interactive Theme Switcher */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-center">Interaktif Tema Değiştirici</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-8">
                  {Object.entries(themes).map(([themeKey, themeConfig]) => {
                    const Icon = themeIcons[themeKey as keyof typeof themeIcons];
                    return (
                      <button
                        key={themeKey}
                        onClick={() => setTheme(themeKey as any)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          theme === themeKey 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border/50 hover:border-primary/50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${themeColors[themeKey as keyof typeof themeColors]} flex items-center justify-center mx-auto mb-2 shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <p className="text-xs font-medium">{themeConfig.name}</p>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-8">
            {/* Feature Comparison */}
            <Card className="premium-card">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Premium vs Temel Karşılaştırma</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Özellik</th>
                        <th className="text-center py-3 px-4">Temel</th>
                        <th className="text-center py-3 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <Crown className="h-4 w-4 text-yellow-500" />
                            Premium
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {themeComparisons.map((comparison, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">{comparison.feature}</td>
                          <td className="py-3 px-4 text-center text-muted-foreground">{comparison.basic}</td>
                          <td className="py-3 px-4 text-center">
                            <Badge variant="default" className="bg-gradient-to-r from-green-500 to-emerald-500">
                              {comparison.premium}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Premium Benefits */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">8 Benzersiz Tema</h3>
                <p className="text-sm text-muted-foreground">
                  Her biri özel tasarlanmış premium temalar
                </p>
              </Card>
              
              <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-950/50 border-green-200 dark:border-green-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Özel Efektler</h3>
                <p className="text-sm text-muted-foreground">
                  Glassmorphism, neon ve 3D efektler
                </p>
              </Card>
              
              <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 border-purple-200 dark:border-purple-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Yüksek Performans</h3>
                <p className="text-sm text-muted-foreground">
                  Optimize edilmiş CSS ve hızlı yükleme
                </p>
              </Card>
              
              <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/50 dark:to-red-950/50 border-orange-200 dark:border-orange-800">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Premium Destek</h3>
                <p className="text-sm text-muted-foreground">
                  Öncelikli destek ve özelleştirme
                </p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Premium Tema Koleksiyonu</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Profesyonel tasarlanmış, özel efektli ve tamamen özelleştirilebilir temalar ile 
              admin panelinizi bir üst seviyeye taşıyın. Her tema benzersiz görsel deneyim sunar.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Crown className="h-4 w-4" />
                Premium'a Yükselt
              </Button>
              <Button variant="outline" size="lg">
                <Eye className="h-4 w-4 mr-2" />
                Daha Fazla Önizleme
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
