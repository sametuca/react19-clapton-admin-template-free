import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { 
  Home, 
  User, 
  Settings, 
  BarChart3, 
  FileText, 
  Users, 
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Menu,
  X,
  Search,
  Bell,
  Mail,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Star,
  Heart,
  Eye,
  Download,
  Share2,
  Filter,
  Grid3X3,
  List,
  Layers,
  Zap,
  Target,
  Award,
  Crown,
  Sparkles,
  Rocket,
  Shield,
  Database,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  Image,
  Phone,
  Building,
  Car,
  Plane,
  Ship,
  Train,
  Bike,
  CreditCard,
  Check
} from "lucide-react";

export default function NavigationComponents() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("horizontal");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("dashboard");

  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3, href: "/dashboard" },
    { id: "users", label: "Kullanıcılar", icon: Users, href: "/users" },
    { id: "products", label: "Ürünler", icon: ShoppingCart, href: "/products" },
    { id: "analytics", label: "Analitik", icon: BarChart3, href: "/analytics" },
    { id: "settings", label: "Ayarlar", icon: Settings, href: "/settings" }
  ];

  const megaMenuItems = [
    {
      title: "Ürünler",
      items: [
        { title: "Elektronik", description: "Telefon, laptop ve aksesuarlar", icon: Zap },
        { title: "Giyim", description: "Erkek, kadın ve çocuk giyim", icon: Heart },
        { title: "Ev & Yaşam", description: "Mobilya ve dekorasyon", icon: Home },
        { title: "Spor", description: "Spor giyim ve ekipmanları", icon: Target }
      ]
    },
    {
      title: "Hizmetler",
      items: [
        { title: "Müşteri Desteği", description: "7/24 canlı destek", icon: Users },
        { title: "Kargo", description: "Hızlı ve güvenli teslimat", icon: Car },
        { title: "Garanti", description: "2 yıl ücretsiz garanti", icon: Shield },
        { title: "İade", description: "30 gün koşulsuz iade", icon: Award }
      ]
    }
  ];

  const breadcrumbItems = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Ürünler", href: "/products" },
    { label: "Elektronik", href: "/products/electronics" },
    { label: "Telefon", href: "/products/electronics/phones" },
    { label: "iPhone 15 Pro" }
  ];

  const sidebarItems = [
    {
      category: "Ana Menü",
      items: [
        { id: "dashboard", label: "Dashboard", icon: BarChart3, badge: null },
        { id: "analytics", label: "Analitik", icon: BarChart3, badge: "Yeni" },
        { id: "users", label: "Kullanıcılar", icon: Users, badge: "12" }
      ]
    },
    {
      category: "İçerik",
      items: [
        { id: "posts", label: "Gönderiler", icon: FileText, badge: null },
        { id: "media", label: "Medya", icon: Image, badge: "45" },
        { id: "comments", label: "Yorumlar", icon: Mail, badge: "3" }
      ]
    },
    {
      category: "Sistem",
      items: [
        { id: "settings", label: "Ayarlar", icon: Settings, badge: null },
        { id: "security", label: "Güvenlik", icon: Shield, badge: "!" }
      ]
    }
  ];

  const tabItems = [
    { id: "overview", label: "Genel Bakış", icon: Eye, content: "Genel bakış içeriği burada gösterilir." },
    { id: "details", label: "Detaylar", icon: FileText, content: "Detaylı bilgiler ve açıklamalar." },
    { id: "analytics", label: "Analitik", icon: BarChart3, content: "Analitik veriler ve grafikler." },
    { id: "settings", label: "Ayarlar", icon: Settings, content: "Yapılandırma seçenekleri." }
  ];

  const stepperSteps = [
    { id: 1, title: "Bilgiler", description: "Kişisel bilgilerinizi girin", icon: User, completed: true },
    { id: 2, title: "Adres", description: "Teslimat adresinizi belirtin", icon: MapPin, completed: true },
    { id: 3, title: "Ödeme", description: "Ödeme yönteminizi seçin", icon: CreditCard, completed: false, active: true },
    { id: 4, title: "Onay", description: "Siparişinizi onaylayın", icon: Check, completed: false }
  ];

  const HorizontalNavigation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Yatay Navigasyon</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Brand</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveNavItem(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    activeNavItem === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </nav>
      </CardContent>
    </Card>
  );

  const VerticalSidebar = () => (
    <Card>
      <CardHeader>
        <CardTitle>Dikey Sidebar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <div className="w-64 bg-muted/50 rounded-lg p-4 space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Crown className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold">Admin Panel</span>
            </div>
            
            {sidebarItems.map((category) => (
              <div key={category.category} className="space-y-2">
                <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {category.category}
                </h4>
                <div className="space-y-1">
                  {category.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveNavItem(item.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-left ${
                        activeNavItem === item.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="text-sm">{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge 
                          variant={item.badge === "!" ? "destructive" : "secondary"} 
                          className="text-xs h-5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex-1 p-4 bg-muted/30 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">İçerik Alanı</h3>
            <p className="text-muted-foreground">
              Seçili menü: <span className="font-medium">{activeNavItem}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MegaMenu = () => (
    <Card>
      <CardHeader>
        <CardTitle>Mega Menü</CardTitle>
      </CardHeader>
      <CardContent>
        <NavigationMenu>
          <NavigationMenuList>
            {megaMenuItems.map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {menu.items.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="flex items-center gap-2 mb-2">
                            <item.icon className="h-4 w-4" />
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </CardContent>
    </Card>
  );

  const BreadcrumbNavigation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Breadcrumb Navigasyon</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="space-y-2">
          <h4 className="font-medium">Özellikler</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Otomatik kırpma</Badge>
            <Badge variant="outline">Responsive</Badge>
            <Badge variant="outline">Özelleştirilebilir</Badge>
            <Badge variant="outline">Erişilebilir</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const PaginationComponent = () => (
    <Card>
      <CardHeader>
        <CardTitle>Sayfalama</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                />
              </PaginationItem>
              {[1, 2, 3, 4, 5].map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    href="#" 
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          Sayfa {currentPage} / 5 - Toplam 127 kayıt
        </div>
      </CardContent>
    </Card>
  );

  const TabNavigation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Tab Navigasyonu</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
            {tabItems.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabItems.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <tab.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">{tab.label}</h3>
                  </div>
                  <p className="text-muted-foreground">{tab.content}</p>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );

  const StepperNavigation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Adım Navigasyonu</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            {stepperSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    step.completed 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : step.active 
                        ? 'bg-primary border-primary text-primary-foreground animate-pulse' 
                        : 'border-muted-foreground text-muted-foreground'
                  }`}>
                    {step.completed ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="text-center mt-2">
                    <p className={`text-sm font-medium ${
                      step.active ? 'text-primary' : step.completed ? 'text-green-600' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {index < stepperSteps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 mt-[-20px] transition-colors ${
                    stepperSteps[index + 1].completed || stepperSteps[index + 1].active 
                      ? 'bg-primary' 
                      : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Ödeme Bilgileri</p>
            <p className="text-muted-foreground">Ödeme yönteminizi seçin ve bilgilerinizi girin</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const MobileNavigation = () => (
    <Card>
      <CardHeader>
        <CardTitle>Mobil Navigasyon</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <span className="font-semibold">Mobil App</span>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveNavItem(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                    activeNavItem === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto" />
                </button>
              ))}
            </div>
          )}

          {/* Bottom Navigation */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-1 p-2 bg-muted/50 rounded-lg">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNavItem(item.id)}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-colors ${
                  activeNavItem === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-muted'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>Navigasyon Komponentleri - React19 Admin</title>
        <meta name="description" content="Modern navigasyon komponentleri ve menü örnekleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Navigasyon Komponentleri
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Kullanıcı deneyimini geliştiren modern navigasyon çözümleri
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
            <TabsTrigger value="horizontal" className="text-xs sm:text-sm">Yatay Nav</TabsTrigger>
            <TabsTrigger value="sidebar" className="text-xs sm:text-sm">Sidebar</TabsTrigger>
            <TabsTrigger value="mega" className="text-xs sm:text-sm">Mega Menü</TabsTrigger>
            <TabsTrigger value="breadcrumb" className="text-xs sm:text-sm">Breadcrumb</TabsTrigger>
            <TabsTrigger value="pagination" className="text-xs sm:text-sm">Sayfalama</TabsTrigger>
          </TabsList>

          <TabsContent value="horizontal" className="space-y-6">
            <HorizontalNavigation />
            <TabNavigation />
            <MobileNavigation />
          </TabsContent>

          <TabsContent value="sidebar" className="space-y-6">
            <VerticalSidebar />
          </TabsContent>

          <TabsContent value="mega" className="space-y-6">
            <MegaMenu />
          </TabsContent>

          <TabsContent value="breadcrumb" className="space-y-6">
            <BreadcrumbNavigation />
          </TabsContent>

          <TabsContent value="pagination" className="space-y-6">
            <PaginationComponent />
            <StepperNavigation />
          </TabsContent>
        </Tabs>

        {/* Navigation Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Navigasyon Özellikleri</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-blue-500" />
                  Çok Seviyeli
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  İç içe menüler ve alt kategoriler desteği
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-500" />
                  Hızlı Erişim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Klavye kısayolları ve hızlı navigasyon
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-500" />
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
                  <Shield className="h-5 w-5 text-orange-500" />
                  Erişilebilir
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  WCAG 2.1 uyumlu erişilebilirlik desteği
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}