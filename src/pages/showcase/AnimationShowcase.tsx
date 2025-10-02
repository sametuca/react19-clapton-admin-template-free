import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Play, 
  Pause, 
  RotateCw, 
  Zap, 
  Heart, 
  Star, 
  Sparkles,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  MousePointer,
  Layers,
  Eye,
  Palette,
  Wand2
} from "lucide-react";

export default function AnimationShowcase() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationSpeed, setAnimationSpeed] = useState([1]);
  const [pulseCount, setPulseCount] = useState(0);
  const [bounceItems, setBounceItems] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const triggerBounce = (index: number) => {
    setBounceItems(prev => [...prev, index]);
    setTimeout(() => {
      setBounceItems(prev => prev.filter(i => i !== index));
    }, 600);
  };

  const AnimatedCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <div 
      className={`group animate-fade-in hover:animate-scale-in transition-all duration-300 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  const FloatingElement = ({ children, direction = "up" }: { children: React.ReactNode, direction?: "up" | "down" | "left" | "right" }) => {
    const animations = {
      up: "animate-bounce",
      down: "animate-pulse", 
      left: "animate-pulse",
      right: "animate-bounce"
    };
    
    return (
      <div className={`${animations[direction]} hover:animate-pulse transition-all duration-300`}>
        {children}
      </div>
    );
  };

  const GlowButton = ({ children, variant = "primary" }: { children: React.ReactNode, variant?: "primary" | "secondary" | "accent" }) => {
    const variants = {
      primary: "bg-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-105",
      secondary: "bg-secondary hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-105", 
      accent: "bg-accent hover:shadow-[0_0_20px_rgba(245,101,101,0.5)] hover:scale-105"
    };
    
    return (
      <Button className={`transition-all duration-300 ${variants[variant]}`}>
        {children}
      </Button>
    );
  };

  const WaveLoader = () => (
    <div className="flex items-center gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-2 h-8 bg-primary rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '0.8s'
          }}
        />
      ))}
    </div>
  );

  const ProgressRing = ({ progress = 75 }: { progress?: number }) => (
    <div className="relative w-20 h-20">
      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          className="text-muted-foreground/20"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={`${2 * Math.PI * 45}`}
          strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
          className="text-primary transition-all duration-1000 ease-out"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-semibold">{progress}%</span>
      </div>
    </div>
  );

  const ParticleButton = () => {
    const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);
    
    const createParticles = () => {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100
      }));
      setParticles(newParticles);
      
      setTimeout(() => setParticles([]), 1000);
    };

    return (
      <div className="relative">
        <Button 
          onClick={createParticles}
          className="relative overflow-hidden"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          {t('showcase.animation.particleEffect')}
        </Button>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-2 h-2 bg-primary rounded-full animate-ping pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(${particle.x}px, ${particle.y}px)`,
              animationDuration: '1s'
            }}
          />
        ))}
      </div>
    );
  };

  const MorphingShape = () => {
    const [shape, setShape] = useState(0);
    const shapes = [
      "rounded-full",
      "rounded-lg", 
      "rounded-none",
      "rounded-[2rem]"
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setShape(prev => (prev + 1) % shapes.length);
      }, 2000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div 
        className={`w-20 h-20 bg-gradient-to-br from-primary to-primary/60 transition-all duration-1000 ${shapes[shape]}`}
      />
    );
  };

  const TypewriterText = ({ text, speed = 100 }: { text: string, speed?: number }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      }
    }, [currentIndex, text, speed]);

    return (
      <div className="font-mono text-lg">
        {displayText}
        <span className="animate-pulse">|</span>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>{t('showcase.animation.pageTitle')}</title>
        <meta name="description" content={t('showcase.animation.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.animation.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.animation.description')}
          </p>
        </div>

        {/* Animation Controls */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              {t('showcase.animation.controls.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="animation-toggle">{t('showcase.animation.controls.toggle')}</Label>
              <Switch
                id="animation-toggle"
                checked={isPlaying}
                onCheckedChange={setIsPlaying}
              />
            </div>
            
            <div className="space-y-2">
              <Label>{t('showcase.animation.controls.speed')} {animationSpeed[0]}x</Label>
              <Slider
                value={animationSpeed}
                onValueChange={setAnimationSpeed}
                max={3}
                min={0.5}
                step={0.5}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="hover" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="hover">{t('showcase.animation.sections.hover')}</TabsTrigger>
            <TabsTrigger value="loading">{t('showcase.animation.sections.loading')}</TabsTrigger>
            <TabsTrigger value="interactive">{t('showcase.animation.sections.interactive')}</TabsTrigger>
            <TabsTrigger value="transitions">{t('showcase.animation.sections.transitions')}</TabsTrigger>
            <TabsTrigger value="advanced">{t('showcase.animation.sections.advanced')}</TabsTrigger>
          </TabsList>

          <TabsContent value="hover" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <AnimatedCard delay={0}>
                <Card className="hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{t('showcase.animation.hover.scale')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('showcase.animation.hover.scaleDescription')}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={100}>
                <Card className="hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:border-primary/50 transition-all duration-500 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{t('showcase.animation.hover.glow')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('showcase.animation.hover.glowDescription')}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <Card className="hover:rotate-1 hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">{t('showcase.animation.hover.tilt')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('showcase.animation.hover.tiltDescription')}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={300}>
                <Card className="group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <CardHeader>
                    <CardTitle>{t('showcase.animation.hover.shine')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('showcase.animation.hover.shineDescription')}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <Card className="group">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-5 w-5 group-hover:text-red-500 group-hover:scale-125 transition-all duration-300" />
                      {t('showcase.animation.hover.icon')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t('showcase.animation.hover.iconDescription')}</p>
                  </CardContent>
                </Card>
              </AnimatedCard>

              <AnimatedCard delay={500}>
                <Card className="group perspective-1000">
                  <div className="group-hover:rotateY-12 transition-all duration-500 transform-style-3d">
                    <CardHeader>
                      <CardTitle>{t('showcase.animation.hover.rotate')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{t('showcase.animation.hover.rotateDescription')}</p>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedCard>
            </div>
          </TabsContent>

          <TabsContent value="loading" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.spinner')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.pulse')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-primary rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.wave')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <WaveLoader />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.progress')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ProgressRing progress={75} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.morph')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <MorphingShape />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.loading.gradient')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/30 animate-spin">
                    <div className="w-6 h-6 bg-background rounded-full m-1" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interactive" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.bounce')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[0, 1, 2].map((index) => (
                    <Button
                      key={index}
                      onClick={() => triggerBounce(index)}
                      className={`w-full transition-all duration-300 ${
                        bounceItems.includes(index) ? 'animate-bounce' : ''
                      }`}
                    >
                      {t('showcase.animation.interactive.bounceButton')} {index + 1}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.glow')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <GlowButton variant="primary">
                    <Zap className="h-4 w-4 mr-2" />
                    {t('showcase.animation.interactive.glowPrimary')}
                  </GlowButton>
                  <GlowButton variant="secondary">
                    <Star className="h-4 w-4 mr-2" />
                    {t('showcase.animation.interactive.glowSecondary')}
                  </GlowButton>
                  <GlowButton variant="accent">
                    <Heart className="h-4 w-4 mr-2" />
                    {t('showcase.animation.interactive.glowAccent')}
                  </GlowButton>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.particle')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ParticleButton />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.float')}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <FloatingElement direction="up">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <ArrowUp className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </FloatingElement>
                  <FloatingElement direction="down">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <ArrowDown className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </FloatingElement>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.typewriter')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <TypewriterText text={t('showcase.animation.interactive.typewriterText')} speed={100} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.interactive.badge')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Badge className="hover:scale-110 transition-transform cursor-pointer">
                    {t('showcase.animation.interactive.badgeScale')}
                  </Badge>
                  <Badge variant="secondary" className="hover:rotate-12 transition-transform cursor-pointer">
                    {t('showcase.animation.interactive.badgeRotate')}
                  </Badge>
                  <Badge variant="outline" className="hover:shadow-lg transition-shadow cursor-pointer">
                    {t('showcase.animation.interactive.badgeShadow')}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="transitions" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.transitions.slide')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-muted rounded overflow-hidden">
                      <div className="h-full bg-primary w-0 animate-[slideRight_2s_ease-in-out_infinite] rounded" />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('showcase.animation.transitions.slideRight')}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-full h-20 bg-muted rounded overflow-hidden relative">
                      <div className="absolute w-full h-4 bg-primary top-0 animate-[slideDown_3s_ease-in-out_infinite] rounded" />
                    </div>
                    <p className="text-sm text-muted-foreground">{t('showcase.animation.transitions.slideDown')}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.transitions.fade')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-20 h-20 bg-primary rounded-lg animate-[fadeInOut_2s_ease-in-out_infinite]" />
                    <p className="text-sm text-muted-foreground">{t('showcase.animation.transitions.fadeInOut')}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="w-20 h-20 bg-secondary rounded-lg animate-[scaleInOut_2s_ease-in-out_infinite]" />
                    <p className="text-sm text-muted-foreground">{t('showcase.animation.transitions.scaleInOut')}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.advanced.cssArt')}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <div className="relative w-20 h-20">
                    {/* Güneş */}
                    <div className="absolute inset-0 bg-yellow-400 rounded-full animate-spin-slow" />
                    <div className="absolute inset-2 bg-yellow-300 rounded-full" />
                    <div className="absolute inset-4 bg-yellow-200 rounded-full animate-pulse" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.advanced.parallax')}</CardTitle>
                </CardHeader>
                <CardContent className="h-32 overflow-hidden relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg">
                  <div className="absolute bottom-0 w-full h-8 bg-green-400 animate-[slideLeft_10s_linear_infinite]" />
                  <div className="absolute bottom-4 w-full h-4 bg-green-500 animate-[slideRight_8s_linear_infinite]" />
                  <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-300 rounded-full animate-[float_3s_ease-in-out_infinite]" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t('showcase.animation.advanced.matrix')}</CardTitle>
                </CardHeader>
                <CardContent className="h-32 bg-black rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-green-400/20 to-transparent">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-green-400 text-xs font-mono animate-[fall_2s_linear_infinite]"
                        style={{
                          left: `${i * 10}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      >
                        {Math.random().toString(36).substring(7)}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Animation Playground */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="h-5 w-5" />
              {t('showcase.animation.playground.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              {t('showcase.animation.playground.description')}
            </p>
            <div className="flex justify-center gap-4">
              <Button className="hover:animate-bounce">
                <Play className="h-4 w-4 mr-2" />
                {t('showcase.animation.playground.start')}
              </Button>
              <Button variant="outline" className="hover:animate-pulse">
                <RotateCw className="h-4 w-4 mr-2" />
                {t('showcase.animation.playground.reset')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        @keyframes slideRight {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        
        @keyframes slideDown {
          0% { top: 0; }
          50% { top: calc(100% - 1rem); }
          100% { top: 0; }
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes scaleInOut {
          0%, 100% { transform: scale(0.8); }
          50% { transform: scale(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fall {
          0% { transform: translateY(-100px); opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
      `}</style>
    </>
  );
}
