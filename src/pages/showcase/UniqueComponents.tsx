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

export default function UniqueComponents() {
  const [particleTextTrigger, setParticleTextTrigger] = useState(false);
  const [progress, setProgress] = useState(65);

  const floatingActions = [
    { icon: User, label: "Kullanıcı Ekle", onClick: () => console.log("User added"), color: "bg-blue-500" },
    { icon: Mail, label: "Mesaj Gönder", onClick: () => console.log("Message sent"), color: "bg-green-500" },
    { icon: Phone, label: "Arama Yap", onClick: () => console.log("Call made"), color: "bg-purple-500" },
    { icon: Settings, label: "Ayarlar", onClick: () => console.log("Settings opened"), color: "bg-orange-500" }
  ];

  const triggerParticleText = () => {
    setParticleTextTrigger(true);
    setTimeout(() => setParticleTextTrigger(false), 100);
  };

  return (
    <>
      <Helmet>
        <title>Benzersiz Komponentler - React19 Admin</title>
        <meta name="description" content="Piyasada benzeri bulunmayan, şık ve modern UI komponentleri" />
      </Helmet>

      <div className="space-y-8 relative">
        {/* Neural Network Background */}
        <div className="absolute inset-0 opacity-30">
          <NeuralNetworkBg nodeCount={30} />
        </div>

        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Benzersiz UI Komponentleri
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Piyasada benzeri bulunmayan, şık ve modern komponentlerle fark yaratın
          </p>
        </div>

        {/* Floating Action Menu */}
        <FloatingActionMenu items={floatingActions} />

        {/* Glassmorphism Cards */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Glassmorphism Kartlar</h2>
            <Badge variant="secondary">Cam Efekti</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GlassmorphismCard
              title="Varsayılan Kart"
              description="Şeffaf cam efekti ile modern görünüm"
              icon={Layers}
              variant="default"
            >
              <p className="text-sm opacity-80">
                Glassmorphism tasarım trendi ile etkileyici kartlar oluşturun.
              </p>
            </GlassmorphismCard>
            
            <GlassmorphismCard
              title="Primary Kart"
              description="Ana renk teması ile vurgu"
              icon={Zap}
              variant="primary"
              blur="lg"
            >
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Performans</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[95%]" />
                </div>
              </div>
            </GlassmorphismCard>
            
            <GlassmorphismCard
              title="Accent Kart"
              description="Vurgu rengi ile dikkat çekici"
              icon={Star}
              variant="accent"
              blur="xl"
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm">Core Özellik</span>
              </div>
            </GlassmorphismCard>
          </div>
        </section>

        {/* Holographic Cards */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Holografik Kartlar</h2>
            <Badge variant="default">3D Efekt</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <HolographicCard
              title="Quantum Computing"
              description="Gelecek teknolojisi"
              icon={Cpu}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Atom className="h-4 w-4" />
                  <span className="text-sm">Kuantum İşlemci</span>
                </div>
                <div className="text-xs text-slate-400">
                  1000+ qubit kapasitesi ile süper hızlı hesaplama
                </div>
              </div>
            </HolographicCard>
            
            <HolographicCard
              title="Neural Interface"
              description="Beyin-bilgisayar arayüzü"
              icon={Database}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-400">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm">Sinir Ağı Bağlantısı</span>
                </div>
                <div className="text-xs text-slate-400">
                  Düşünce ile kontrol edilebilen arayüz
                </div>
              </div>
            </HolographicCard>
            
            <HolographicCard
              title="Cyber Security"
              description="Gelişmiş güvenlik sistemi"
              icon={Shield}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-400">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm">Quantum Encryption</span>
                </div>
                <div className="text-xs text-slate-400">
                  Kırılamaz şifreleme teknolojisi
                </div>
              </div>
            </HolographicCard>
          </div>
        </section>

        {/* Interactive Buttons */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">İnteraktif Butonlar</h2>
            <Badge variant="outline">Etkileşimli</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Morphing Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <MorphingButton
                  icon={Download}
                  loadingText="İndiriliyor..."
                  successText="İndirildi!"
                  onClick={() => new Promise(resolve => setTimeout(resolve, 2000))}
                >
                  Dosya İndir
                </MorphingButton>
                
                <MorphingButton
                  icon={Heart}
                  loadingText="Kaydediliyor..."
                  successText="Kaydedildi!"
                  variant="outline"
                  onClick={() => new Promise(resolve => setTimeout(resolve, 1500))}
                >
                  Favorilere Ekle
                </MorphingButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Magnetic Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <MagneticButton
                  icon={Rocket}
                  magneticStrength={0.4}
                  glowColor="#8b5cf6"
                >
                  Manyetik Efekt
                </MagneticButton>
                
                <MagneticButton
                  icon={Sparkles}
                  variant="outline"
                  magneticStrength={0.6}
                  glowColor="#ec4899"
                >
                  Güçlü Çekim
                </MagneticButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Wave Button</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <WaveButton
                  icon={Share2}
                  waveColor="#10b981"
                >
                  Dalga Efekti
                </WaveButton>
                
                <WaveButton
                  icon={MessageCircle}
                  variant="outline"
                  waveColor="#f59e0b"
                >
                  Mesaj Gönder
                </WaveButton>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neon Border</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NeonBorder color="#3b82f6" intensity="medium">
                  <Button className="w-full">
                    <Code className="h-4 w-4 mr-2" />
                    Neon Efekt
                  </Button>
                </NeonBorder>
                
                <NeonBorder color="#ec4899" intensity="high" animated={true}>
                  <Button variant="outline" className="w-full">
                    <Palette className="h-4 w-4 mr-2" />
                    Animasyonlu
                  </Button>
                </NeonBorder>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Liquid Progress & Loaders */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Sıvı Efektler & Yükleyiciler</h2>
            <Badge variant="default">Sıvı Animasyon</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Liquid Progress</CardTitle>
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
                <CardTitle>Quantum Loader</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <QuantumLoader 
                    size="lg" 
                    color="#8b5cf6"
                    text="Kuantum İşleme..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Farklı Boyutlar</CardTitle>
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
                <CardTitle>Quantum Varyasyonları</CardTitle>
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
            <h2 className="text-2xl font-semibold">Parçacık Efektli Metin</h2>
            <Badge variant="secondary">Animasyonlu</Badge>
          </div>
          <Card>
            <CardContent className="py-12">
              <div className="text-center space-y-6">
                <ParticleText 
                  text="REACT19 ADMIN"
                  trigger={particleTextTrigger}
                  particleColor="#3b82f6"
                  className="text-6xl font-bold"
                />
                <Button onClick={triggerParticleText} className="mt-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Parçacık Animasyonu Başlat
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mixed Examples */}
        <section className="space-y-4 relative z-10">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Karma Örnekler</h2>
            <Badge variant="outline">Showcase</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
              <CardHeader className="relative z-10">
                <CardTitle>Medya Kontrolleri</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <WaveButton icon={Camera} size="sm" waveColor="#3b82f6">
                    Fotoğraf
                  </WaveButton>
                  <WaveButton icon={Video} size="sm" waveColor="#8b5cf6">
                    Video
                  </WaveButton>
                  <WaveButton icon={Music} size="sm" waveColor="#ec4899">
                    Müzik
                  </WaveButton>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <MagneticButton icon={Image} variant="outline" magneticStrength={0.3}>
                    Galeri
                  </MagneticButton>
                  <MagneticButton icon={FileText} variant="outline" magneticStrength={0.3}>
                    Dosyalar
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle>Neon Efektli Kontroller</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <NeonBorder color="#00ff88" intensity="high" animated={true}>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Sistem Durumu</span>
                      <Badge className="bg-green-500">Çevrimiçi</Badge>
                    </div>
                    <div className="flex justify-center">
                      <QuantumLoader size="sm" color="#00ff88" />
                    </div>
                  </div>
                </NeonBorder>
                
                <NeonBorder color="#ff0080" intensity="medium">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Güvenlik Taraması</span>
                      <Badge variant="destructive">Aktif</Badge>
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
          <h2 className="text-2xl font-semibold">Komponent Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                  Benzersiz Tasarım
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Piyasada benzeri bulunmayan özgün tasarım dili
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Performanslı
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  GPU hızlandırmalı animasyonlar ve smooth geçişler
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-purple-500" />
                  Özelleştirilebilir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Renk, boyut ve efekt yoğunluğu ayarlanabilir
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-green-500" />
                  Responsive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Tüm cihaz boyutlarında mükemmel görünüm
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