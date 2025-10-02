# Hızlı Başlangıç Rehberi - React 19 Clapton Admin Template

> **5 dakikada template'i çalıştırın ve ilk sayfanızı oluşturun!**

## 1. Hızlı Kurulum (2 dakika)

```bash
# Template'i indirin
git clone https://github.com/sametuca/react19-clapton-admin-template-premium
cd react19-clapton-admin-template

# Bağımlılıkları yükleyin
npm install

# Çalıştırın
npm run dev
```

**Başarılı!** `http://localhost:8080` adresine gidin.

## 2. İlk Keşif (1 dakika)

### Önemli Sayfalar:
- **`/`** - Karşılama sayfası (React 19 özellikleri)
- **`/dashboard`** - Ana yönetim paneli
- **`/showcase`** - Tüm komponentler (200+)
- **`/showcase/ai`** - AI komponentleri
- **`/showcase/premium`** - Premium efektler

### Hızlı Test:
1. Sidebar'dan "Dashboard"a tıklayın
2. Tema değiştiriciyi deneyin (sağ üst)
3. AI Chat butonuna tıklayın (sağ alt)

## 3. İlk Sayfanızı Oluşturun (2 dakika)

### Basit Bir Sayfa Oluşturun:
```typescript
// src/pages/MyFirstPage.tsx
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/ui/stats-card";
import { Users, DollarSign, Activity } from "lucide-react";

export default function MyFirstPage() {
  return (
    <>
      <Helmet>
        <title>İlk Sayfam - React19 Admin</title>
      </Helmet>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold">İlk Sayfam</h1>
        
        {/* İstatistik Kartları */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatsCard
            title="Kullanıcılar"
            value={1247}
            change={12.5}
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Gelir"
            value={45678}
            change={8.2}
            changeType="positive"
            icon={DollarSign}
            prefix="₺"
          />
          <StatsCard
            title="Aktivite"
            value={892}
            change={-2.1}
            changeType="negative"
            icon={Activity}
          />
        </div>

        {/* İçerik Kartı */}
        <Card>
          <CardHeader>
            <CardTitle>Hoş Geldiniz!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Bu sizin ilk sayfanız. Template'in gücünü keşfetmeye başlayın!
            </p>
            <Button>Hemen Başlayın</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
```

### Route Ekleyin:
```typescript
// src/App.tsx - Routes içine ekleyin
import MyFirstPage from "./pages/MyFirstPage";

<Route element={<AppLayout />}>
  <Route path="/my-first-page" element={<MyFirstPage />} />
</Route>
```

### Menüye Ekleyin:
```typescript
// src/components/AppSidebar.tsx - mainItems dizisine ekleyin
{ 
  title: "İlk Sayfam", 
  url: "/my-first-page", 
  icon: Star, 
  badge: "Yeni" 
},
```

## 4. Hızlı Özelleştirme

### Tema Değiştirme:
```typescript
// Herhangi bir komponente
import { useTheme } from '@/contexts/ThemeContext';

const { setTheme } = useTheme();
setTheme('royal'); // 8 farklı premium tema
```

### Renk Özelleştirme:
```css
/* src/index.css */
:root {
  --primary: 346 77% 50%;    /* Kırmızı */
  --secondary: 142 76% 36%;  /* Yeşil */
  --accent: 262 83% 58%;     /* Mor */
}
```

## 5. AI Komponentleri (30 saniye)

### AI Chat Ekleyin:
```typescript
// Layout'a ekleyin - otomatik floating button
import { AIChat } from "@/components/ui/ai/ai-chat";

<AIChat />
```

### AI Search Ekleyin:
```typescript
// Header'a ekleyin
import { AISearch } from "@/components/ui/ai/ai-search";

<AISearch />
```

## 6. Veri Tablosu (1 dakika)

```typescript
import { DataTable } from "@/components/ui/data-table";

const data = [
  { id: 1, name: "Ahmet", email: "ahmet@test.com", role: "Admin" },
  { id: 2, name: "Zeynep", email: "zeynep@test.com", role: "User" }
];

const columns = [
  { key: 'name', title: 'Ad', sortable: true },
  { key: 'email', title: 'E-posta', sortable: true },
  { key: 'role', title: 'Rol' }
];

<DataTable
  data={data}
  columns={columns}
  title="Kullanıcılar"
  searchable={true}
  exportable={true}
/>
```

## 7. Production'a Deploy (1 dakika)

### Netlify:
```bash
npm run build
# dist/ klasörünü netlify.com'a sürükleyin
```

## Hızlı Referans

### En Çok Kullanılan Komponentler:
```typescript
// Temel UI
import { Button, Card, Badge, Input } from "@/components/ui/...";

// Premium
import { StatsCard, DataTable, ActivityFeed } from "@/components/ui/...";

// AI
import { AIChat, AISearch, AIInsights } from "@/components/ui/ai/...";

// 3D & Efektler
import { Card3D, GlassmorphismCard, HolographicCard } from "@/components/ui/...";
```

### Hızlı Stil Sınıfları:
```css
/* Glassmorphism */
.glassmorphism-card

/* Premium buton */
.premium-button

/* Gradient metin */
.gradient-text-primary

/* Stats kartı */
.stats-card
```

### Tema Listesi:
- `dark` - Koyu tema
- `midnight` - Gece teması  
- `neon` - Neon tema
- `royal` - Kraliyet teması
- `aurora` - Aurora teması
- `cyberpunk` - Cyberpunk teması
- `galaxy` - Galaksi teması
- `emerald` - Zümrüt teması

## Hızlı Sorun Giderme

### Port Problemi:
```bash
npm run dev -- --port 3001
```

### Cache Problemi:
```bash
rm -rf node_modules/.cache
npm install
```

### TypeScript Hatası:
```bash
npm run type-check
```

## Sonraki Adımlar

1. **[TUTORIAL.md](TUTORIAL.md)** - Kapsamlı rehber
2. **[COMPONENT_API.md](COMPONENT_API.md)** - Komponent referansı
3. **[README.md](README.md)** - Detaylı dokümantasyon

---

**5 dakikada hazırsınız! Şimdi harika projeler oluşturun!**