# Proje Yapısı Rehberi - React 19 Clapton Admin Template

> **Template'in dosya organizasyonu ve klasör yapısının detaylı açıklaması**

## Ana Klasör Yapısı

```
react19-clapton-admin-template/
├── .vs/                      # Visual Studio ayarları (opsiyonel)
├── public/                   # Statik dosyalar
├── src/                      # Ana kaynak kodları
├── package.json              # Proje bağımlılıkları ve scriptler
├── tailwind.config.ts        # Tailwind CSS yapılandırması
├── tsconfig.json             # TypeScript yapılandırması
├── vite.config.ts            # Vite build yapılandırması
├── components.json           # shadcn/ui yapılandırması
├── eslint.config.js          # ESLint kod kalitesi kuralları
├── postcss.config.js         # PostCSS yapılandırması
├── README.md                 # Ana dokümantasyon
├── INSTALLATION.md           # Kurulum rehberi
├── COMPONENT_API.md          # Komponent API referansı
├── CHANGELOG.md              # Değişiklik geçmişi
├── GETTING_STARTED.md        # Başlangıç rehberi
├── TUTORIAL.md               # Kapsamlı tutorial
├── QUICK_START_GUIDE.md      # Hızlı başlangıç
├── PROJECT_STRUCTURE.md      # Bu dosya
└── LICENSE                   # Lisans dosyası
```

## Public Klasörü

```
public/
├── favicon.svg               # Site ikonu (SVG format)
├── placeholder.svg           # Placeholder görsel
└── robots.txt                # SEO robots dosyası
```

**Kullanım:**
- `favicon.svg`: Tarayıcı sekmesinde görünen ikon
- `robots.txt`: Arama motorları için yönergeler
- Statik dosyalar doğrudan `/` yolundan erişilebilir

## Src Klasörü Detayı

### src/components/ - Komponentler

```
src/components/
├── 📁 ui/                       # Temel UI komponentleri (shadcn/ui tabanlı)
│   ├── button.tsx            # Buton komponenti
│   ├── card.tsx              # Kart komponenti
│   ├── input.tsx             # Input komponenti
│   ├── badge.tsx             # Badge komponenti
│   ├── table.tsx             # Tablo komponentleri
│   ├── dialog.tsx            # Modal dialog
│   ├── dropdown-menu.tsx     # Dropdown menü
│   ├── tabs.tsx              # Tab komponentleri
│   ├── progress.tsx          # İlerleme çubuğu
│   ├── avatar.tsx            # Avatar komponenti
│   ├── skeleton.tsx          # Yükleme skeleton'ı
│   ├── toast.tsx             # Bildirim toast'ı
│   ├── tooltip.tsx           # Tooltip komponenti
│   ├── switch.tsx            # Switch/toggle
│   ├── slider.tsx            # Slider komponenti
│   ├── select.tsx            # Select dropdown
│   ├── checkbox.tsx          # Checkbox
│   ├── radio-group.tsx       # Radio button grubu
│   ├── textarea.tsx          # Textarea
│   ├── label.tsx             # Form label
│   ├── form.tsx              # Form komponentleri
│   ├── separator.tsx         # Ayırıcı çizgi
│   ├── accordion.tsx         # Accordion/collapse
│   ├── alert.tsx             # Alert mesajları
│   ├── calendar.tsx          # Takvim komponenti
│   ├── popover.tsx           # Popover
│   ├── hover-card.tsx        # Hover kartı
│   ├── context-menu.tsx      # Sağ tık menüsü
│   ├── command.tsx           # Komut paleti
│   ├── navigation-menu.tsx   # Navigasyon menüsü
│   ├── menubar.tsx           # Menü çubuğu
│   ├── breadcrumb.tsx        # Breadcrumb navigasyon
│   ├── pagination.tsx        # Sayfalama
│   ├── scroll-area.tsx       # Kaydırma alanı
│   ├── resizable.tsx         # Yeniden boyutlandırılabilir
│   ├── sheet.tsx             # Yan panel
│   ├── drawer.tsx            # Alt çekmece
│   ├── carousel.tsx          # Carousel/slider
│   ├── toggle.tsx            # Toggle buton
│   ├── toggle-group.tsx      # Toggle grup
│   ├── collapsible.tsx       # Katlanabilir
│   ├── aspect-ratio.tsx      # En-boy oranı
│   ├── input-otp.tsx         # OTP input
│   ├── chart.tsx             # Grafik komponentleri
│   ├── sidebar.tsx           # Sidebar komponentleri
│   │
│   ├──  ai/                   # AI Komponentleri
│   │   ├──  ai-chat.tsx       # AI sohbet asistanı
│   │   ├──  ai-search.tsx     # AI destekli arama
│   │   ├──  ai-insights.tsx   # AI analiz ve öngörüler
│   │   └──  index.ts          # AI komponentleri export
│   │
│   ├── 📁 advanced/             # Gelişmiş Komponentler
│   │   ├──  AdaptiveCommandPalette.tsx  # Uyarlanabilir komut paleti
│   │   ├──  LiveUserPresence.tsx        # Canlı kullanıcı varlığı
│   │   ├──  ProgressRoadmap.tsx         # İlerleme haritası
│   │   └──  AuroraBackground.tsx        # Aurora arka plan efekti
│   │
│   ├──  3d-card.tsx           # 3D interaktif kartlar
│   ├──  stats-card.tsx        # İstatistik kartları
│   ├──  data-table.tsx        # Gelişmiş veri tablosu
│   ├──  activity-feed.tsx     # Aktivite akışı
│   ├──  metric-chart.tsx      # Metrik grafikleri
│   ├──  feature-card.tsx      # Özellik kartları
│   ├──  loading-spinner.tsx   # Yükleme spinner'ı
│   ├──  animated-counter.tsx  # Animasyonlu sayaç
│   ├──  parallax-hero.tsx     # Parallax hero bölümü
│   ├──  interactive-timeline.tsx # İnteraktif zaman çizelgesi
│   ├──  glassmorphism-card.tsx # Glassmorphism kartı
│   ├──  holographic-card.tsx  # Holografik kart
│   ├──  magnetic-button.tsx   # Manyetik buton
│   ├──  morphing-button.tsx   # Morfoloji buton
│   ├──  wave-button.tsx       # Dalga efektli buton
│   ├──  neon-border.tsx       # Neon kenarlık
│   ├──  neural-network-bg.tsx # Sinir ağı arka planı
│   ├──  liquid-progress.tsx   # Sıvı ilerleme çubuğu
│   ├──  quantum-loader.tsx    # Kuantum yükleyici
│   ├──  particle-text.tsx     # Parçacık metin efekti
│   ├──  floating-action-menu.tsx # Floating aksiyon menüsü
│   ├──  notification-bell.tsx # Bildirim zili
│   ├──  post-card.tsx         # Sosyal medya post kartı
│   ├──  theme-preview.tsx     # Tema önizleme
│   └──  animated-dashboard-widgets.tsx # Animasyonlu dashboard widget'ları
│
├──  AppSidebar.tsx            # Ana sidebar komponenti
├──  LanguageSwitcher.tsx      # Dil değiştirici
└──  ThemeSelector.tsx         # Tema seçici
```

**Komponent Kategorileri:**
- **Temel UI**: Button, Card, Input vb. (shadcn/ui tabanlı)
- **Premium**: StatsCard, DataTable, ActivityFeed vb.
- **AI**: AI Chat, AI Search, AI Insights
- **3D & Efektler**: 3D Cards, Glassmorphism, Holographic
- **Animasyonlar**: Animated counters, Morphing buttons
- **Özel**: Neural networks, Quantum loaders, Particle effects

### src/pages/ - Sayfa Komponentleri

```
src/pages/
├──  Welcome.tsx               # Karşılama sayfası (ana sayfa)
├──  Dashboard.tsx             # Ana dashboard
├──  GetStarted.tsx            # Başlangıç rehberi sayfası
├──  Analytics.tsx             # Analitik sayfası
├──  Tables.tsx                # Tablo sayfası
├──  FormsWizard.tsx           # Form sihirbazı
├──  Users.tsx                 # Kullanıcı yönetimi
├──  Roles.tsx                 # Rol yönetimi
├──  Settings.tsx              # Ayarlar sayfası
├──  Profile.tsx               # Profil sayfası
├──  Notifications.tsx         # Bildirimler sayfası
├──  Login.tsx                 # Giriş sayfası
├──  Register.tsx              # Kayıt sayfası
├──  NotFound.tsx              # 404 sayfası
├──  ComponentShowcase.tsx     # Eski komponent vitrini
│
├──  showcase/                 # Komponent Vitrin Sayfaları
│   ├──  ComponentShowcaseIndex.tsx # Ana vitrin sayfası
│   ├──  StatsCards.tsx        # İstatistik kartları vitrini
│   ├──  DataTables.tsx        # Veri tabloları vitrini
│   ├──  ActivityFeeds.tsx     # Aktivite akışları vitrini
│   ├──  Charts.tsx            # Grafik komponentleri vitrini
│   ├──  FeatureCards.tsx      # Özellik kartları vitrini
│   ├──  LoadingStates.tsx     # Yükleme durumları vitrini
│   ├──  DashboardWidgets.tsx  # Dashboard widget'ları vitrini
│   ├──  ModernGallery.tsx     # Modern galeri vitrini
│   ├──  AnimationShowcase.tsx # Animasyon vitrini
│   ├──  PremiumComponents.tsx # Premium komponentler vitrini
│   ├──  AIComponents.tsx      # AI komponentleri vitrini
│   ├──  AdvancedComponents.tsx # Gelişmiş komponentler vitrini
│   ├──  UniqueComponents.tsx  # Benzersiz komponentler vitrini
│   ├──  ButtonShowcase.tsx    # Buton vitrini
│   ├──  ThemeShowcase.tsx     # Tema vitrini
│   ├──  InteractiveForms.tsx  # İnteraktif formlar (opsiyonel)
│   ├──  SocialMedia.tsx       # Sosyal medya komponentleri (opsiyonel)
│   ├──  EcommerceShowcase.tsx # E-ticaret komponentleri (opsiyonel)
│   └──  CryptoFinance.tsx     # Kripto finans komponentleri (opsiyonel)
│
└──  examples/                 # Örnek Sayfalar (Gerçek Dünya Senaryoları)
    ├──  index.tsx             # Örnekler ana sayfası
    ├──  SocialMedia.tsx       # Sosyal medya dashboard örneği
    ├──  EcommerceDashboard.tsx # E-ticaret dashboard örneği
    ├──  AnalyticsDashboard.tsx # Analitik dashboard örneği
    ├──  CrmDashboard.tsx      # CRM dashboard örneği
    └──  FinanceDashboard.tsx  # Finans dashboard örneği
```

**Sayfa Kategorileri:**
- **Ana Sayfalar**: Welcome, Dashboard, GetStarted
- **Yönetim**: Users, Roles, Settings, Profile
- **Auth**: Login, Register
- **Vitrin**: Komponent showcase sayfaları
- **Örnekler**: Gerçek dünya senaryoları

### src/contexts/ - React Context'leri

```
src/contexts/
├──  ThemeContext.tsx          # Tema yönetimi context'i
└──  LanguageContext.tsx       # Dil yönetimi context'i
```

**Context'ler:**
- **ThemeContext**: 8 premium tema yönetimi
- **LanguageContext**: Türkçe/İngilizce dil desteği

### src/hooks/ - Özel Hook'lar

```
src/hooks/
├──  use-toast.ts              # Toast bildirim hook'u
└──  use-mobile.tsx            # Mobil cihaz algılama hook'u
```

**Hook Kullanımı:**
```typescript
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const { toast } = useToast();
const isMobile = useIsMobile();
```

### src/layouts/ - Layout Komponentleri

```
src/layouts/
└──  AppLayout.tsx             # Ana uygulama layout'u
```

**Layout Özellikleri:**
- Responsive sidebar
- Header ile arama ve bildirimler
- Tema ve dil değiştirici
- Outlet ile sayfa içeriği

### src/lib/ - Yardımcı Fonksiyonlar

```
src/lib/
└──  utils.ts                  # Genel yardımcı fonksiyonlar
```

**Yardımcı Fonksiyonlar:**
```typescript
import { cn } from '@/lib/utils';

// CSS sınıflarını birleştirme
const className = cn("base-class", condition && "conditional-class");
```

## 🔧 Yapılandırma Dosyaları

###  package.json - Proje Bağımlılıkları
```json
{
  "name": "react19-clapton-admin-template",
  "scripts": {
    "dev": "vite",                    // Geliştirme sunucusu
    "build": "vite build",            // Production build
    "preview": "vite preview",        // Build önizleme
    "lint": "eslint ."               // Kod kalitesi kontrolü
  },
  "dependencies": {
    "react": "^18.3.1",              // React kütüphanesi
    "react-dom": "^18.3.1",          // React DOM
    "react-router-dom": "^6.30.1",   // Routing
    "framer-motion": "^12.23.12",    // Animasyonlar
    "tailwindcss": "^3.4.17",       // CSS framework
    "lucide-react": "^0.462.0",     // İkonlar
    "@radix-ui/*": "^1.x.x",        // UI primitives
    // ... 50+ bağımlılık
  }
}
```

###  tailwind.config.ts - Tailwind Yapılandırması
```typescript
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // CSS değişkenleri ile tema desteği
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        // ... tema renkleri
      },
      animation: {
        // Özel animasyonlar
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}
```

###  tsconfig.json - TypeScript Yapılandırması
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": false,                 // Esnek TypeScript
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]            // @ alias desteği
    }
  }
}
```

###  vite.config.ts - Vite Yapılandırması
```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,                     // Geliştirme portu
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // @ alias
    },
  },
});
```

###  components.json - shadcn/ui Yapılandırması
```json
{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

##  CSS ve Stil Yapısı

###  src/index.css - Global Stiller
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Değişkenleri - Tema Sistemi */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... 50+ CSS değişkeni */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... koyu tema değişkenleri */
}

/* Premium Tema Sınıfları */
.theme-midnight body { /* Midnight tema */ }
.theme-neon body { /* Neon tema */ }
.theme-royal body { /* Royal tema */ }
/* ... 8 premium tema */

/* Özel Komponent Sınıfları */
.glassmorphism-card { /* Glassmorphism efekti */ }
.premium-button { /* Premium buton stilleri */ }
.stats-card { /* İstatistik kartı stilleri */ }
/* ... 100+ özel sınıf */
```

##  Routing Yapısı

###  src/App.tsx - Ana Routing
```typescript
<Routes>
  {/* Karşılama Sayfası */}
  <Route path="/" element={<Welcome />} />
  
  {/* Auth Sayfaları */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  
  {/* Korumalı Sayfalar */}
  <Route element={<AppLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/get-started" element={<GetStarted />} />
    
    {/* Vitrin Sayfaları */}
    <Route path="/showcase" element={<ComponentShowcaseIndex />} />
    <Route path="/showcase/stats" element={<StatsCards />} />
    <Route path="/showcase/ai" element={<AIComponents />} />
    <Route path="/showcase/premium" element={<PremiumComponents />} />
    /* ... 15+ vitrin sayfası */
    
    {/* Örnek Sayfalar */}
    <Route path="/examples" element={<ExamplePages />} />
    <Route path="/examples/social-media" element={<SocialMediaExample />} />
    /* ... 5+ örnek sayfa */
  </Route>
  
  {/* 404 Sayfası */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

##  Bağımlılık Yapısı

### Ana Bağımlılıklar
```json
{
  "react": "^18.3.1",              // React kütüphanesi
  "react-dom": "^18.3.1",          // React DOM
  "react-router-dom": "^6.30.1",   // Client-side routing
  "framer-motion": "^12.23.12",    // Animasyon kütüphanesi
  "tailwindcss": "^3.4.17",       // CSS framework
  "typescript": "^5.8.3",          // TypeScript
  "vite": "^5.4.19"               // Build tool
}
```

### UI Kütüphaneleri
```json
{
  "@radix-ui/react-*": "^1.x.x",  // 25+ Radix UI komponenti
  "lucide-react": "^0.462.0",     // 1000+ ikon
  "class-variance-authority": "^0.7.1", // Variant yönetimi
  "tailwind-merge": "^2.6.0",     // CSS sınıf birleştirme
  "clsx": "^2.1.1"                // Conditional classes
}
```

### Özel Kütüphaneler
```json
{
  "recharts": "^2.15.4",          // Grafik kütüphanesi
  "react-hook-form": "^7.61.1",   // Form yönetimi
  "react-helmet-async": "^2.0.5", // SEO meta yönetimi
  "sonner": "^1.7.4",             // Toast bildirimleri
  "cmdk": "^1.1.1",               // Komut paleti
  "embla-carousel-react": "^8.6.0" // Carousel
}
```

##  Dosya Adlandırma Kuralları

### Komponentler
- **PascalCase**: `MyComponent.tsx`
- **Klasör adları**: `kebab-case` veya `camelCase`
- **Hook'lar**: `use-hook-name.ts`
- **Utility'ler**: `kebab-case.ts`

### Sayfalar
- **PascalCase**: `Dashboard.tsx`
- **Klasör grupları**: `showcase/`, `examples/`
- **Index dosyaları**: `index.tsx`

### Stiller
- **CSS dosyaları**: `kebab-case.css`
- **CSS sınıfları**: `kebab-case`
- **CSS değişkenleri**: `--kebab-case`

## 🔍 Import Yolu Sistemi

### Alias Kullanımı
```typescript
//  Doğru - @ alias kullanın
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

//  Yanlış - Relative path kullanmayın
import { Button } from '../../../components/ui/button';
```

### Import Sırası
```typescript
// 1. React ve external kütüphaneler
import React from 'react';
import { motion } from 'framer-motion';

// 2. UI komponentleri
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// 3. Özel komponentler
import { StatsCard } from '@/components/ui/stats-card';

// 4. Context'ler ve hook'lar
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/hooks/use-toast';

// 5. Utility'ler
import { cn } from '@/lib/utils';

// 6. İkonlar (son)
import { Users, Settings } from 'lucide-react';
```

##  Geliştirme İpuçları

### Yeni Komponent Ekleme
1. **Konum belirleyin**: `src/components/ui/` (temel) veya `src/components/` (özel)
2. **TypeScript interface tanımlayın**
3. **Props validation ekleyin**
4. **Export edin**: `index.ts` dosyasından
5. **Dokümante edin**: JSDoc yorumları

### Sayfa Ekleme Checklist
- [ ] Sayfa komponenti oluştur
- [ ] Route ekle (`App.tsx`)
- [ ] Sidebar menüsüne ekle
- [ ] Helmet ile SEO meta ekle
- [ ] Responsive tasarım kontrol et
- [ ] TypeScript tip güvenliği

### Performance İpuçları
- **Lazy loading**: Büyük komponentler için
- **Code splitting**: Route bazında
- **Memoization**: Pahalı hesaplamalar için
- **Image optimization**: WebP format kullanın

##  Dosya Şablonları

### Yeni Sayfa Şablonu
```typescript
// src/pages/NewPage.tsx
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Yeni Sayfa - React19 Admin</title>
        <meta name="description" content="Sayfa açıklaması" />
      </Helmet>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Sayfa Başlığı</h1>
          <p className="text-muted-foreground">Sayfa açıklaması</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>İçerik Başlığı</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sayfa içeriği...</p>
            <Button className="mt-4">Aksiyon</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
```

### Yeni Komponent Şablonu
```typescript
// src/components/ui/new-component.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface NewComponentProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  children?: React.ReactNode;
}

export function NewComponent({
  title,
  description,
  icon: Icon,
  className,
  children
}: NewComponentProps) {
  return (
    <div className={cn("p-4 border rounded-lg", className)}>
      <div className="flex items-center gap-2 mb-2">
        {Icon && <Icon className="h-5 w-5" />}
        <h3 className="font-semibold">{title}</h3>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </div>
  );
}
```

##  Proje İstatistikleri

### Dosya Sayıları
- **Toplam Dosya**: 150+
- **React Komponentleri**: 200+
- **Sayfa Komponentleri**: 25+
- **Vitrin Sayfaları**: 15+
- **Örnek Sayfalar**: 5+
- **Hook'lar**: 10+
- **Context'ler**: 2
- **Utility Fonksiyonları**: 20+

### Kod Satırları (Yaklaşık)
- **TypeScript**: 15,000+ satır
- **CSS**: 2,000+ satır
- **Dokümantasyon**: 5,000+ satır
- **Toplam**: 22,000+ satır

### Özellik Sayıları
- **UI Komponentleri**: 200+
- **Premium Efektler**: 50+
- **AI Komponentleri**: 3
- **3D Efektler**: 10+
- **Animasyonlar**: 100+
- **Tema Varyasyonları**: 8
- **Dil Desteği**: 2 (TR/EN)

## 🔄Güncelleme ve Bakım

### Versiyon Kontrolü
```bash
# Yeni özellik branch'i
git checkout -b feature/new-feature

# Değişiklikleri commit edin
git add .
git commit -m "feat: add new feature"

# Main branch'e merge edin
git checkout main
git merge feature/new-feature
```

### Dependency Güncellemeleri
```bash
# Güncel olmayan paketleri kontrol edin
npm outdated

# Güvenlik açıklarını kontrol edin
npm audit

# Paketleri güncelleyin
npm update
```

##  Performans Optimizasyonu

### Bundle Analizi
```bash
# Bundle boyutunu analiz edin
npm run build -- --analyze
```

### Lazy Loading Örneği
```typescript
// Büyük komponentleri lazy load edin
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

---

##  Özet

Bu proje yapısı şunları sağlar:

 *Modüler Tasarım*: Her komponent ayrı dosyada
 *Tip Güvenliği*: TypeScript ile tam tip desteği
 *Kolay Bakım*: Temiz klasör organizasyonu
 *Hızlı Geliştirme*: @ alias ve hot reload
 *Premium Özellikler*: 200+ komponent ve 8 tema
 *AI Entegrasyonu*: Yapay zeka destekli komponentler
 *Responsive*: Mobil-first tasarım
 *SEO Optimized*: Meta tag yönetimi
 *Performance*: Lazy loading ve code splitting
 *Başarılı projeler için ideal bir başlangıç!*