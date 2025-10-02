import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommandPalette } from "@/components/ui/command-palette";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { GradientText } from "@/components/ui/gradient-text";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { ModernCard } from "@/components/ui/modern-card";
import { Timeline } from "@/components/ui/timeline";
import { PricingCard } from "@/components/ui/pricing-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { KanbanBoard } from "@/components/ui/kanban-board";
import { SearchBar } from "@/components/ui/search-bar";
import { FileUpload } from "@/components/ui/file-upload";
import { NotificationToast, useNotificationToast } from "@/components/ui/notification-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Command, 
  Search, 
  Zap, 
  Users, 
  Star, 
  Heart, 
  Settings,
  Home,
  BarChart3,
  Mail,
  Phone,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Download,
  Upload,
  Share2,
  Bookmark,
  Bell,
  Shield,
  Globe,
  Rocket,
  Target,
  Award,
  Crown,
  Sparkles,
  Code,
  Database,
  Monitor,
  Smartphone,
  Palette,
  Layers,
  Eye,
  MessageSquare,
  ThumbsUp,
  Coffee,
  Gift,
  Trophy,
  Flame,
  Droplets,
  Wind,
  Mountain,
  Sun,
  Moon,
  Atom,
  Waves,
  Cpu,
  Headphones,
  Camera,
  Briefcase,
  Building,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info
} from "lucide-react";

export default function PopularComponents() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("command");
  const { addToast, ToastContainer } = useNotificationToast();

  // Sample data for components
  const dockItems = [
    { icon: Home, label: "Ana Sayfa", onClick: () => console.log("Home"), color: "bg-blue-500" },
    { icon: Search, label: "Arama", onClick: () => console.log("Search"), color: "bg-green-500" },
    { icon: Bell, label: "Bildirimler", onClick: () => console.log("Notifications"), color: "bg-red-500", badge: "3" },
    { icon: Settings, label: "Ayarlar", onClick: () => console.log("Settings"), color: "bg-purple-500" },
    { icon: Users, label: "Kullanıcılar", onClick: () => console.log("Users"), color: "bg-orange-500" }
  ];

  const timelineItems = [
    {
      id: "1",
      title: "Proje Başlatıldı",
      description: "React 19 Admin Template projesi başlatıldı",
      date: "15 Mart 2024",
      time: "09:00",
      user: { name: "Ahmet Yılmaz", initials: "AY" },
      icon: Rocket,
      status: "completed" as const,
      location: "İstanbul",
      tags: ["proje", "başlangıç"]
    },
    {
      id: "2",
      title: "UI Komponentleri",
      description: "200+ UI komponenti geliştirildi ve test edildi",
      date: "20 Mart 2024",
      time: "14:30",
      user: { name: "Zeynep Kaya", initials: "ZK" },
      icon: Palette,
      status: "completed" as const,
      participants: 5,
      tags: ["ui", "komponent"]
    },
    {
      id: "3",
      title: "AI Entegrasyonu",
      description: "AI destekli komponentler eklendi",
      date: "25 Mart 2024",
      time: "11:15",
      user: { name: "Mehmet Demir", initials: "MD" },
      icon: Cpu,
      status: "in-progress" as const,
      location: "Remote",
      tags: ["ai", "gelişmiş"]
    }
  ];

  const pricingPlans = [
    {
      title: "Başlangıç",
      description: "Küçük projeler için ideal",
      price: 99,
      originalPrice: 149,
      features: [
        { text: "50+ UI Komponenti", included: true },
        { text: "Temel Temalar", included: true },
        { text: "E-posta Desteği", included: true },
        { text: "Premium Komponentler", included: false },
        { text: "AI Özellikler", included: false }
      ]
    },
    {
      title: "Profesyonel",
      description: "Büyük projeler için",
      price: 199,
      originalPrice: 299,
      popular: true,
      features: [
        { text: "200+ UI Komponenti", included: true, highlight: true },
        { text: "Tüm Premium Temalar", included: true },
        { text: "Öncelikli Destek", included: true },
        { text: "Premium Komponentler", included: true },
        { text: "AI Özellikler", included: true, highlight: true }
      ]
    },
    {
      title: "Enterprise",
      description: "Kurumsal çözümler",
      price: 499,
      premium: true,
      features: [
        { text: "Sınırsız Komponent", included: true, highlight: true },
        { text: "Özel Tema Tasarımı", included: true },
        { text: "7/24 Destek", included: true },
        { text: "Kaynak Kodu", included: true },
        { text: "Özel Geliştirme", included: true, highlight: true }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Senior Developer",
      company: "TechCorp",
      rating: 5,
      testimonial: "Bu template sayesinde projemi çok hızlı geliştirdim. Komponentler harika tasarlanmış ve kullanımı çok kolay.",
      verified: true,
      featured: true
    },
    {
      name: "Zeynep Kaya",
      role: "UI/UX Designer",
      company: "DesignStudio",
      rating: 5,
      testimonial: "Tasarım kalitesi mükemmel. Özellikle AI komponentleri çok etkileyici.",
      verified: true
    },
    {
      name: "Mehmet Demir",
      role: "Product Manager",
      company: "StartupXYZ",
      rating: 4,
      testimonial: "Ekibimiz bu template ile çok verimli çalışıyor. Özellikle dashboard komponentleri harika."
    }
  ];

  const kanbanColumns = [
    {
      id: "todo",
      title: "Yapılacak",
      color: "#6b7280",
      tasks: [
        {
          id: "1",
          title: "Yeni özellik tasarımı",
          description: "Kullanıcı profil sayfası için yeni tasarım",
          priority: "high" as const,
          assignee: { name: "Ahmet Y.", initials: "AY" },
          dueDate: "28 Mart",
          tags: ["tasarım", "ui"],
          comments: 3
        }
      ]
    },
    {
      id: "progress",
      title: "Devam Ediyor",
      color: "#3b82f6",
      tasks: [
        {
          id: "2",
          title: "API entegrasyonu",
          description: "Backend API'leri ile frontend entegrasyonu",
          priority: "medium" as const,
          assignee: { name: "Zeynep K.", initials: "ZK" },
          dueDate: "30 Mart",
          tags: ["backend", "api"],
          comments: 1,
          attachments: 2
        }
      ]
    },
    {
      id: "done",
      title: "Tamamlandı",
      color: "#10b981",
      tasks: [
        {
          id: "3",
          title: "Komponent testleri",
          description: "Tüm UI komponentleri için test yazıldı",
          priority: "low" as const,
          assignee: { name: "Mehmet D.", initials: "MD" },
          tags: ["test", "qa"],
          comments: 5
        }
      ]
    }
  ];

  const searchResults = [
    {
      id: "1",
      title: "Dashboard Sayfası",
      description: "Ana dashboard ve istatistikler",
      type: "page" as const,
      url: "/dashboard"
    },
    {
      id: "2",
      title: "Kullanıcı Yönetimi",
      description: "Kullanıcı CRUD işlemleri",
      type: "page" as const,
      url: "/users"
    },
    {
      id: "3",
      title: "Ahmet Yılmaz",
      description: "Senior Developer",
      type: "user" as const
    }
  ];

  const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
    const messages = {
      success: { title: "Başarılı!", message: "İşlem başarıyla tamamlandı." },
      error: { title: "Hata!", message: "Bir hata oluştu. Lütfen tekrar deneyin." },
      warning: { title: "Uyarı!", message: "Bu işlem geri alınamaz." },
      info: { title: "Bilgi", message: "Yeni güncelleme mevcut." }
    };
    
    addToast({
      ...messages[type],
      type,
      duration: 5000,
      action: {
        label: "Görüntüle",
        onClick: () => console.log("Action clicked")
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Popüler Komponentler - React19 Admin</title>
        <meta name="description" content="En popüler ve şık UI komponentleri koleksiyonu" />
      </Helmet>

      <AnimatedBackground variant="particles" intensity="low">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <GradientText gradient="rainbow" animated className="text-4xl">
              Popüler Komponentler
            </GradientText>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern web uygulamaları için en popüler ve şık komponentler
            </p>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="command">Komut</TabsTrigger>
              <TabsTrigger value="cards">Kartlar</TabsTrigger>
              <TabsTrigger value="navigation">Navigasyon</TabsTrigger>
              <TabsTrigger value="data">Veri</TabsTrigger>
              <TabsTrigger value="feedback">Geri Bildirim</TabsTrigger>
              <TabsTrigger value="pricing">Fiyatlandırma</TabsTrigger>
            </TabsList>

            <TabsContent value="command" className="space-y-6">
              {/* Command Palette */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Komut Paleti</h2>
                  <Badge variant="default">Ctrl+K</Badge>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Command className="h-5 w-5" />
                      Hızlı Komut Erişimi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Klavye kısayolları ile hızlı navigasyon ve komut çalıştırma
                    </p>
                    <Button onClick={() => setCommandPaletteOpen(true)}>
                      <Command className="h-4 w-4 mr-2" />
                      Komut Paletini Aç
                    </Button>
                  </CardContent>
                </Card>
                <CommandPalette 
                  open={commandPaletteOpen} 
                  onOpenChange={setCommandPaletteOpen} 
                />
              </section>

              {/* Search Bar */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Gelişmiş Arama</h2>
                  <Badge variant="secondary">Akıllı</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Varsayılan Arama</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <SearchBar
                        placeholder="Kullanıcı, sayfa veya döküman ara..."
                        results={searchResults}
                        suggestions={["Dashboard", "Kullanıcılar", "Ayarlar", "Analitik"]}
                        onResultClick={(result) => console.log("Selected:", result)}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Floating Arama</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <SearchBar
                        variant="floating"
                        placeholder="Floating search..."
                        results={searchResults}
                        onResultClick={(result) => console.log("Selected:", result)}
                      />
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="cards" className="space-y-6">
              {/* Spotlight Cards */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Spotlight Kartları</h2>
                  <Badge variant="default">Interaktif</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <SpotlightCard
                    title="Premium Analytics"
                    description="Gelişmiş analitik araçları"
                    icon={BarChart3}
                    spotlightColor="#3b82f6"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performans</span>
                        <span className="font-semibold">95%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[95%]" />
                      </div>
                    </div>
                  </SpotlightCard>
                  
                  <SpotlightCard
                    title="Kullanıcı Yönetimi"
                    description="Gelişmiş kullanıcı kontrolleri"
                    icon={Users}
                    spotlightColor="#10b981"
                  >
                    <div className="flex items-center gap-2">
                      <StatusIndicator status="online" label="1,247 aktif" />
                    </div>
                  </SpotlightCard>
                  
                  <SpotlightCard
                    title="Güvenlik Merkezi"
                    description="Sistem güvenlik kontrolleri"
                    icon={Shield}
                    spotlightColor="#f59e0b"
                  >
                    <div className="space-y-2">
                      <StatusIndicator status="success" label="Sistem Güvenli" showIcon />
                      <StatusIndicator status="warning" label="Güncelleme Gerekli" showIcon />
                    </div>
                  </SpotlightCard>
                </div>
              </section>

              {/* Modern Cards */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Modern Kartlar</h2>
                  <Badge variant="outline">Çok Amaçlı</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <ModernCard
                    title="Proje Dashboard"
                    description="Proje yönetimi ve takip araçları"
                    image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop"
                    badge="Yeni"
                    variant="gradient"
                    stats={[
                      { label: "Aktif Proje", value: "12" },
                      { label: "Tamamlanan", value: "89%" }
                    ]}
                    onAction={() => console.log("Project action")}
                  />
                  
                  <ModernCard
                    title="Analitik Raporu"
                    description="Detaylı performans analizi"
                    icon={BarChart3}
                    badge="Pro"
                    badgeVariant="secondary"
                    variant="glass"
                    stats={[
                      { label: "Görüntülenme", value: "24.5K" },
                      { label: "Artış", value: "+18%" }
                    ]}
                  />
                  
                  <ModernCard
                    title="Ekip Performansı"
                    description="Takım üretkenlik metrikleri"
                    icon={Users}
                    badge="Popüler"
                    variant="neon"
                    stats={[
                      { label: "Verimlilik", value: "94%" },
                      { label: "Memnuniyet", value: "4.8" }
                    ]}
                  />
                </div>
              </section>
            </TabsContent>

            <TabsContent value="navigation" className="space-y-6">
              {/* Floating Dock */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Floating Dock</h2>
                  <Badge variant="default">macOS Tarzı</Badge>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Hızlı Erişim Dock'u</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      macOS tarzı floating dock ile hızlı navigasyon
                    </p>
                    <div className="relative h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Dock sayfanın alt kısmında görünür
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <FloatingDock items={dockItems} />
              </section>

              {/* Status Indicators */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Durum Göstergeleri</h2>
                  <Badge variant="secondary">Canlı</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Kullanıcı Durumları</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>Çevrimiçi Kullanıcılar</span>
                          <StatusIndicator status="online" label="1,247" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Meşgul Kullanıcılar</span>
                          <StatusIndicator status="busy" label="89" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Uzakta</span>
                          <StatusIndicator status="away" label="156" />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Çevrimdışı</span>
                          <StatusIndicator status="offline" label="234" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Sistem Durumları</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span>API Servisi</span>
                          <StatusIndicator status="success" label="Çalışıyor" showIcon />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Veritabanı</span>
                          <StatusIndicator status="warning" label="Yavaş" showIcon />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>CDN</span>
                          <StatusIndicator status="loading" label="Kontrol Ediliyor" showIcon />
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Backup</span>
                          <StatusIndicator status="error" label="Başarısız" showIcon />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              {/* Timeline */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Zaman Çizelgesi</h2>
                  <Badge variant="default">Detaylı</Badge>
                </div>
                <Timeline items={timelineItems} variant="detailed" />
              </section>

              {/* Kanban Board */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Kanban Panosu</h2>
                  <Badge variant="secondary">Sürükle-Bırak</Badge>
                </div>
                <KanbanBoard
                  columns={kanbanColumns}
                  onTaskMove={(taskId, from, to) => console.log(`Task ${taskId} moved from ${from} to ${to}`)}
                  onTaskClick={(task) => console.log("Task clicked:", task)}
                  onAddTask={(columnId) => console.log("Add task to:", columnId)}
                />
              </section>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-6">
              {/* File Upload */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Dosya Yükleme</h2>
                  <Badge variant="outline">Sürükle-Bırak</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Varsayılan Yükleme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <FileUpload
                        accept="image/*,video/*"
                        maxSize={5}
                        maxFiles={3}
                        onUpload={(files) => console.log("Files uploaded:", files)}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Kompakt Yükleme</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <FileUpload
                        variant="compact"
                        accept=".pdf,.doc,.docx"
                        maxSize={10}
                        maxFiles={1}
                        onUpload={(files) => console.log("Document uploaded:", files)}
                      />
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Notification Toasts */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Bildirim Toast'ları</h2>
                  <Badge variant="default">Otomatik</Badge>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Toast Örnekleri</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <Button onClick={() => showToast('success')} className="flex-col h-20 gap-2">
                        <CheckCircle className="h-5 w-5" />
                        <span className="text-xs">Başarılı</span>
                      </Button>
                      <Button onClick={() => showToast('error')} variant="destructive" className="flex-col h-20 gap-2">
                        <XCircle className="h-5 w-5" />
                        <span className="text-xs">Hata</span>
                      </Button>
                      <Button onClick={() => showToast('warning')} variant="outline" className="flex-col h-20 gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        <span className="text-xs">Uyarı</span>
                      </Button>
                      <Button onClick={() => showToast('info')} variant="secondary" className="flex-col h-20 gap-2">
                        <Info className="h-5 w-5" />
                        <span className="text-xs">Bilgi</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              {/* Pricing Cards */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Fiyatlandırma Kartları</h2>
                  <Badge variant="default">Dönüşüm Odaklı</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {pricingPlans.map((plan, index) => (
                    <PricingCard
                      key={index}
                      {...plan}
                      onSelect={() => console.log(`Selected plan: ${plan.title}`)}
                    />
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-semibold">Müşteri Yorumları</h2>
                  <Badge variant="secondary">Sosyal Kanıt</Badge>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      {...testimonial}
                      variant={index === 0 ? "detailed" : "default"}
                    />
                  ))}
                </div>
              </section>
            </TabsContent>
          </Tabs>

          {/* Gradient Text Examples */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">Gradyan Metinler</h2>
              <Badge variant="outline">Görsel</Badge>
            </div>
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <GradientText gradient="primary" className="text-4xl">
                    Primary Gradient
                  </GradientText>
                  <GradientText gradient="rainbow" animated className="text-3xl">
                    Animasyonlu Rainbow
                  </GradientText>
                  <GradientText gradient="sunset" className="text-2xl">
                    Sunset Gradient
                  </GradientText>
                  <GradientText gradient="ocean" className="text-xl">
                    Ocean Gradient
                  </GradientText>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Component Features */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Komponent Özellikleri</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-500" />
                    Performans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Optimize edilmiş ve hızlı yüklenen komponentler
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-green-500" />
                    Responsive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Tüm cihazlarda mükemmel görünüm
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
                    Kolay özelleştirme ve tema desteği
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-500" />
                    Erişilebilir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    WCAG 2.1 uyumlu erişilebilirlik
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </AnimatedBackground>

      <ToastContainer />
    </>
  );
}