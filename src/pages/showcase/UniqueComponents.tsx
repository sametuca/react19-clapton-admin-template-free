import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingActionMenu } from "@/components/ui/floating-action-menu";
import { GlassmorphismCard } from "@/components/ui/glassmorphism-card";
import { MorphingButton } from "@/components/ui/morphing-button";
import { NeuralNetworkBg } from "@/components/ui/neural-network-bg";
import { LiquidProgress } from "@/components/ui/liquid-progress";
import { ParticleText } from "@/components/ui/particle-text";
import { HolographicCard } from "@/components/ui/holographic-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { NeonBorder } from "@/components/ui/neon-border";
import { QuantumLoader } from "@/components/ui/quantum-loader";
import { WaveButton } from "@/components/ui/wave-button";
import { 
  Sparkles, 
  Zap, 
  Rocket, 
  Star, 
  Heart, 
  Download, 
  Share2, 
  Settings,
  User,
  Mail,
  Phone,
  MessageCircle,
  Camera,
  Video,
  Music,
  Image,
  FileText,
  Code,
  Database,
  Shield,
  Globe,
  Cpu,
  Atom,
  Layers,
  Palette
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export default function UniqueComponents() {
  const { t } = useLanguage();
  const [particleTextTrigger, setParticleTextTrigger] = useState(false);
  const [progress, setProgress] = useState(65);

  const floatingActions = [
    { icon: User, label: t('showcase.unique.floatingActions.addUser'), onClick: () => console.log("User added"), color: "bg-blue-500" },
    { icon: Mail, label: t('showcase.unique.floatingActions.sendMessage'), onClick: () => console.log("Message sent"), color: "bg-green-500" },
    { icon: Phone, label: t('showcase.unique.floatingActions.makeCall'), onClick: () => console.log("Call made"), color: "bg-purple-500" },
    { icon: Settings, label: t('showcase.unique.floatingActions.settings'), onClick: () => console.log("Settings opened"), color: "bg-orange-500" }
  ];

  const triggerParticleText = () => {
    setParticleTextTrigger(true);
    setTimeout(() => setParticleTextTrigger(false), 100);
  };

  return (
    <>
      <Helmet>
        <title>{t('showcase.unique.pageTitle')}</title>
        <meta name="description" content={t('showcase.unique.metaDescription')} />
      </Helmet>

      <div className="space-y-8 relative">
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-30">
          <NeuralNetworkBg nodeCount={30} />
        </div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t('showcase.unique.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.unique.description')}
          </p>
        </div>

        {/* Floating Action Menu */}
        <FloatingActionMenu items={floatingActions} />

        {/* Glassmorphism Cards */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.glassmorphism')}</h2>
            <Badge variant="secondary">{t('showcase.unique.badges.glassmorphism')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassmorphismCard
              title={t('showcase.unique.glassmorphism.default.title')}
              description={t('showcase.unique.glassmorphism.default.description')}
              icon={Layers}
              variant="default"
            >
              <p className="text-sm opacity-80">
                {t('showcase.unique.glassmorphism.default.content')}
              </p>
            </GlassmorphismCard>
            
            <GlassmorphismCard
              title={t('showcase.unique.glassmorphism.primary.title')}
              description={t('showcase.unique.glassmorphism.primary.description')}
              icon={Zap}
              variant="primary"
              blur="lg"
            >
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t('showcase.unique.glassmorphism.primary.performance')}</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[95%]" />
                </div>
              </div>
            </GlassmorphismCard>
            
            <GlassmorphismCard
              title={t('showcase.unique.glassmorphism.accent.title')}
              description={t('showcase.unique.glassmorphism.accent.description')}
              icon={Star}
              variant="accent"
              blur="xl"
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm">{t('showcase.unique.glassmorphism.accent.feature')}</span>
              </div>
            </GlassmorphismCard>
          </div>
        </section>

        {/* Holographic Cards */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.holographic')}</h2>
            <Badge variant="default">{t('showcase.unique.badges.holographic')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HolographicCard
              title={t('showcase.unique.holographic.quantum.title')}
              description={t('showcase.unique.holographic.quantum.description')}
              icon={Cpu}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Atom className="h-4 w-4" />
                  <span className="text-sm">{t('showcase.unique.holographic.quantum.processor')}</span>
                </div>
                <div className="text-xs text-slate-400">
                  {t('showcase.unique.holographic.quantum.capacity')}
                </div>
              </div>
            </HolographicCard>
            
            <HolographicCard
              title={t('showcase.unique.holographic.neural.title')}
              description={t('showcase.unique.holographic.neural.description')}
              icon={Database}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-400">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">{t('showcase.unique.holographic.neural.connection')}</span>
                </div>
                <div className="text-xs text-slate-400">
                  {t('showcase.unique.holographic.neural.technology')}
                </div>
              </div>
            </HolographicCard>
            
            <HolographicCard
              title={t('showcase.unique.holographic.cyber.title')}
              description={t('showcase.unique.holographic.cyber.description')}
              icon={Shield}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">{t('showcase.unique.holographic.cyber.encryption')}</span>
                </div>
                <div className="text-xs text-slate-400">
                  {t('showcase.unique.holographic.cyber.technology')}
                </div>
              </div>
            </HolographicCard>
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.buttons')}</h2>
            <Badge variant="outline">{t('showcase.unique.badges.interactive')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.buttons.morphing.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <MorphingButton
                  icon={Download}
                  loadingText={t('showcase.unique.buttons.morphing.loading')}
                  successText={t('showcase.unique.buttons.morphing.success')}
                  onClick={() => new Promise(resolve => setTimeout(resolve, 2000))}
                >
                  {t('showcase.unique.buttons.morphing.download')}
                </MorphingButton>
                
                <MorphingButton
                  icon={Heart}
                  loadingText={t('showcase.unique.buttons.morphing.loading')}
                  successText={t('showcase.unique.buttons.morphing.success')}
                  variant="outline"
                  onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                >
                  {t('showcase.unique.buttons.morphing.favorites')}
                </MorphingButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.buttons.magnetic.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <MagneticButton
                  icon={Rocket}
                  magneticStrength={0.4}
                  glowColor="#8b5cf6"
                >
                  {t('showcase.unique.buttons.magnetic.effect')}
                </MagneticButton>
                
                <MagneticButton
                  icon={Sparkles}
                  variant="outline"
                  magneticStrength={0.6}
                  glowColor="#ec4899"
                >
                  {t('showcase.unique.buttons.magnetic.strong')}
                </MagneticButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.buttons.wave.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <WaveButton
                  icon={Share2}
                  waveColor="#10b981"
                >
                  {t('showcase.unique.buttons.wave.effect')}
                </WaveButton>
                
                <WaveButton
                  icon={MessageCircle}
                  variant="outline"
                  waveColor="#f59e0b"
                >
                  {t('showcase.unique.buttons.wave.message')}
                </WaveButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.buttons.neon.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NeonBorder color="#3b82f6" intensity="medium">
                  <Button className="w-full">
                    <Code className="h-4 w-4 mr-2" />
                    {t('showcase.unique.buttons.neon.effect')}
                  </Button>
                </NeonBorder>
                
                <NeonBorder color="#ec4899" intensity="high" animated={true}>
                  <Button variant="outline" className="w-full">
                    <Palette className="h-4 w-4 mr-2" />
                    {t('showcase.unique.buttons.neon.animated')}
                  </Button>
                </NeonBorder>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Liquid Effects & Loaders */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.liquid')}</h2>
            <Badge variant="default">{t('showcase.unique.badges.liquid')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.liquid.progress.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <LiquidProgress 
                    value={progress} 
                    size="lg" 
                    color="#3b82f6"
                    animated={true}
                  />
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -10%
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +10%
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.liquid.loader.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <QuantumLoader 
                    size="lg" 
                    color="#8b5cf6"
                    text={t('showcase.unique.liquid.loader.processing')}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.liquid.sizes.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <LiquidProgress value={75} size="sm" color="#10b981" />
                  <LiquidProgress value={85} size="md" color="#f59e0b" />
                  <LiquidProgress value={95} size="lg" color="#ef4444" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('showcase.unique.liquid.variations.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <QuantumLoader size="sm" color="#ec4899" />
                  <QuantumLoader size="md" color="#10b981" />
                  <QuantumLoader size="lg" color="#f59e0b" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Particle Text */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.particle')}</h2>
            <Badge variant="secondary">{t('showcase.unique.badges.particle')}</Badge>
          </div>
          <Card>
            <CardContent className="py-12">
              <div className="text-center space-y-6">
                <ParticleText 
                  text={t('showcase.unique.particle.text')}
                  trigger={particleTextTrigger}
                  particleColor="#3b82f6"
                  className="text-6xl font-bold"
                />
                <Button onClick={triggerParticleText} className="mt-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  {t('showcase.unique.particle.start')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mixed Examples */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.mixed')}</h2>
            <Badge variant="outline">{t('showcase.unique.badges.mixed')}</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <CardHeader className="relative z-10">
                <CardTitle>{t('showcase.unique.mixed.media.title')}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <WaveButton icon={Camera} size="sm" waveColor="#3b82f6">
                    {t('showcase.unique.mixed.media.photo')}
                  </WaveButton>
                  <WaveButton icon={Video} size="sm" waveColor="#8b5cf6">
                    {t('showcase.unique.mixed.media.video')}
                  </WaveButton>
                  <WaveButton icon={Music} size="sm" waveColor="#ec4899">
                    {t('showcase.unique.mixed.media.music')}
                  </WaveButton>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <MagneticButton icon={Image} variant="outline" magneticStrength={0.3}>
                    {t('showcase.unique.mixed.media.gallery')}
                  </MagneticButton>
                  <MagneticButton icon={FileText} variant="outline" magneticStrength={0.3}>
                    {t('showcase.unique.mixed.media.files')}
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle>{t('showcase.unique.mixed.neon.title')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NeonBorder color="#00ff88" intensity="high" animated={true}>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t('showcase.unique.mixed.neon.status')}</span>
                      <Badge className="bg-green-500">{t('showcase.unique.mixed.neon.online')}</Badge>
                    </div>
                    <div className="flex justify-center">
                      <QuantumLoader size="sm" color="#00ff88" />
                    </div>
                  </div>
                </NeonBorder>
                
                <NeonBorder color="#ff0080" intensity="medium">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{t('showcase.unique.mixed.neon.scan')}</span>
                      <Badge variant="destructive">{t('showcase.unique.mixed.neon.active')}</Badge>
                    </div>
                    <div className="flex justify-center">
                      <LiquidProgress value={78} size="md" color="#ff0080" />
                    </div>
                  </div>
                </NeonBorder>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Component Features */}
        <section className="space-y-4 relative z-10">
          <h2 className="text-2xl font-semibold">{t('showcase.unique.sections.features')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  {t('showcase.unique.features.unique')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t('showcase.unique.features.uniqueDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  {t('showcase.unique.features.performance')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t('showcase.unique.features.performanceDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-500" />
                  {t('showcase.unique.features.customizable')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t('showcase.unique.features.customizableDescription')}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-500" />
                  {t('showcase.unique.features.responsive')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {t('showcase.unique.features.responsiveDescription')}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes neonPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes scan {
          0% { top: 0; opacity: 1; }
          50% { opacity: 0.8; }
          100% { top: 100%; opacity: 0; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .rotateY-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </>
  );
}
