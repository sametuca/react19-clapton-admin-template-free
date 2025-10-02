import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  tr: {
    // Navigation
    nav: {
      menu: 'Menü',
      dashboard: 'Dashboard',
      analytics: 'Analitik',
      users: 'Kullanıcılar',
      settings: 'Ayarlar',
      profile: 'Profil',
      showcase: 'Vitrin',
      overview: 'Genel Bakış',
      changeLanguage: 'Dil Değiştir',
      changeTheme: 'Tema Değiştir',
      guide: 'Rehber',
      getStarted: 'Başlayın',
      exampleServices: 'Servisler Örneği',
      examples: {
        examples: 'Örnekler',
        overview: 'Genel Bakış',
        socialMedia: 'Sosyal Medya',
        ecommerce: 'E-Ticaret',
        analytics: 'Analitik',
        crm: 'CRM',
        finance: 'Finans'
      }
    },
    
    // Search
    search: {
      placeholder: 'Ara...'
    },

    // Services
    services:{
      // Page Meta
      pageTitle: 'Servisler Örneği - React19 Admin',
      metaDescription: 'API servisleri ile çalışan örnek sayfa - CRUD işlemleri, veri yönetimi ve gerçek zamanlı güncellemeler',

      // Header Section
      header: {
        title: 'Servisler Örneği',
        description: 'API servisleri ile CRUD işlemleri, veri yönetimi ve gerçek zamanlı güncellemeler',
        buttons: {
          refreshAll: 'Tümünü Yenile',
          jsonPlaceholder: 'JSONPlaceholder API'
        }
      },

      // Dashboard Stats Section
      dashboard: {
        title: 'Dashboard İstatistikleri',
        badge: 'Canlı Veri',
        cards: {
          totalUsers: {
            title: 'Toplam Kullanıcı',
            description: 'API\'den çekilen'
          },
          totalPosts: {
            title: 'Toplam Gönderi',
            description: 'Yayınlanmış'
          },
          completedTodos: {
            title: 'Tamamlanan Görevler',
            description: 'Başarı oranı'
          },
          pendingTodos: {
            title: 'Bekleyen Görevler',
            description: 'Tamamlanmamış'
          }
        }
      },

      // Users Management Section
      users: {
        title: 'Kullanıcı Yönetimi',
        badge: 'CRUD İşlemleri',
        table: {
          title: 'Kullanıcı Listesi',
          columns: {
            id: 'ID',
            name: 'Ad Soyad',
            email: 'E-posta',
            company: 'Şirket',
            actions: 'İşlemler'
          }
        },
        dialogs: {
          create: {
            title: 'Yeni Kullanıcı Ekle',
            description: 'Yeni kullanıcı bilgilerini girin. Bu veriler API\'ye gönderilecektir.',
            buttons: {
              add: 'Kullanıcı Ekle',
              cancel: 'İptal',
              create: 'Kullanıcı Oluştur',
              creating: 'Oluşturuluyor...'
            }
          },
          detail: {
            title: 'Kullanıcı Detayları',
            description: 'kullanıcısının detaylı bilgileri',
            sections: {
              personal: 'Kişisel Bilgiler',
              company: 'Şirket Bilgileri',
              address: 'Adres Bilgileri'
            },
            close: 'Kapat'
          }
        },
        form: {
          labels: {
            name: 'Ad Soyad',
            username: 'Kullanıcı Adı',
            email: 'E-posta',
            phone: 'Telefon',
            website: 'Website'
          },
          placeholders: {
            name: 'Ahmet Yılmaz',
            username: 'ahmet.yilmaz',
            email: 'ahmet@example.com',
            phone: '+90 555 123 4567',
            website: 'https://example.com'
          }
        }
      },

      // Posts Management Section
      posts: {
        title: 'Gönderi Yönetimi',
        badge: 'İçerik Yönetimi',
        table: {
          title: 'Gönderi Listesi',
          columns: {
            id: 'ID',
            title: 'Başlık',
            author: 'Yazar',
            content: 'İçerik'
          }
        },
        dialogs: {
          create: {
            title: 'Yeni Gönderi Oluştur',
            description: 'Yeni gönderi bilgilerini girin.',
            buttons: {
              add: 'Gönderi Ekle',
              cancel: 'İptal',
              create: 'Gönderi Oluştur',
              creating: 'Oluşturuluyor...'
            }
          }
        },
        form: {
          labels: {
            title: 'Başlık',
            author: 'Yazar',
            content: 'İçerik'
          },
          placeholders: {
            title: 'Gönderi başlığı',
            content: 'Gönderi içeriği...'
          },
          selectAuthor: 'Yazar seçin'
        }
      },

      // Loading States
      loading: {
        users: 'Kullanıcılar yükleniyor...',
        posts: 'Gönderiler yükleniyor...',
        stats: 'Yükleniyor...',
        data: 'Veriler getiriliyor...',
        creating: 'Oluşturuluyor...'
      },

      // Error States
      error: {
        title: 'Hata',
        retry: 'Tekrar Dene',
        generic: 'Bir hata oluştu'
      },

      // Toast Messages
      toast: {
        success: {
          userCreated: 'Başarılı!',
          userDeleted: 'Başarılı!',
          postCreated: 'Başarılı!',
          refresh: 'Yenilendi!'
        },
        messages: {
          userCreated: 'Kullanıcı başarıyla oluşturuldu.',
          userDeleted: 'Kullanıcı başarıyla silindi.',
          postCreated: 'Gönderi başarıyla oluşturuldu.',
          refresh: 'Tüm veriler başarıyla yenilendi.'
        }
      },

      // API Integration Guide
      apiGuide: {
        title: 'API Entegrasyon Rehberi',
        cards: {
          apiService: {
            title: 'API Servisi',
            description: 'dosyasında API çağrıları tanımlanmıştır.',
            features: [
              'CRUD işlemleri',
              'Error handling',
              'TypeScript desteği',
              'Merkezi yapılandırma'
            ]
          },
          customHooks: {
            title: 'Custom Hooks',
            description: 'dosyasında özel hook\'lar bulunur.',
            features: [
              'useApi hook\'u',
              'Loading states',
              'Error handling',
              'Automatic refetch'
            ]
          },
          components: {
            title: 'Komponent Yapısı',
            description: 'Bu sayfa servis entegrasyonu için örnek pattern\'dir.',
            features: [
              'Service layer',
              'Custom hooks',
              'Error boundaries',
              'Loading states'
            ]
          }
        }
      },

      // Code Examples
      codeExamples: {
        title: 'Kod Örnekleri',
        apiService: {
          title: 'API Servis Kullanımı',
          code: `// API servisini kullanma
import { apiService } from '@/services/api';

// Kullanıcıları getir
const users = await apiService.getUsers();

// Yeni kullanıcı oluştur
const newUser = await apiService.createUser({
  name: 'Ahmet Yılmaz',
  email: 'ahmet@example.com'
});

// Kullanıcı güncelle
const updatedUser = await apiService.updateUser(1, {
  name: 'Ahmet Kaya'
});`
        },
        customHook: {
          title: 'Custom Hook Kullanımı',
          code: `// useApi hook'unu kullanma
import { useApi } from '@/hooks/useApi';
import { apiService } from '@/services/api';

function MyComponent() {
  const {
    data: users,
    loading,
    error,
    refetch
  } = useApi(() => apiService.getUsers());

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert />;

  return <UserList users={users} />;
}`
        }
      },

      // Best Practices
      bestPractices: {
        title: 'En İyi Uygulamalar',
        items: {
          errorHandling: {
            title: 'Error Handling',
            description: 'Tüm API çağrılarında hata yönetimi'
          },
          loadingStates: {
            title: 'Loading States',
            description: 'Kullanıcı deneyimi için yükleme durumları'
          },
          dataManagement: {
            title: 'Data Management',
            description: 'Merkezi veri yönetimi ve cache'
          },
          typeSafety: {
            title: 'Type Safety',
            description: 'TypeScript ile tip güvenliği'
          }
        }
      },

      // Table Actions
      actions: {
        view: 'Görüntüle',
        edit: 'Düzenle',
        delete: 'Sil',
        unknown: 'Bilinmeyen'
      }
    },
    
    // Showcase sections
    showcase: {
      pageTitle: 'Komponent Vitrini - React19 Admin',
      metaDescription: 'Modern ve etkileyici UI komponentlerinin sergilendiği sayfa',
      
      // Index page
      index: {
        title: 'Komponent Vitrini',
        description: 'Modern ve etkileyici UI komponentlerini keşfedin',
        sections: {
          components: 'Komponentler',
          keyFeatures: 'Temel Özellikler',
          createImpressiveAdminPanels: 'Etkileyici Admin Panelleri Oluşturun'
        },
        categories: {
          available: 'kategoride mevcut'
        },
        buttons: {
          getStarted: 'Başlayın',
          moreExamples: 'Daha Fazla Örnek',
          view: 'Görüntüle'
        },
        items: {
          statsCards: 'İstatistik Kartları',
          featureCards: 'Özellik Kartları',
          dataTables: 'Veri Tabloları',
          activityFeeds: 'Aktivite Akışları',
          metricCharts: 'Metrik Grafikleri',
          loadingStates: 'Yükleme Durumları',
          dashboardWidgets: 'Dashboard Widget\'ları',
          modernGallery: 'Modern Galeri',
          animationShowcase: 'Animasyon Vitrini',
          premiumComponents: 'Premium Komponentler',
          aiComponents: 'AI Komponentleri',
          advancedComponents: 'Gelişmiş Komponentler',
          uniqueComponents: 'Benzersiz Komponentler'
        },
        descriptions: {
          statsCards: 'Animasyonlu sayaçlar ve trend göstergeleri ile istatistik kartları',
          featureCards: 'Hover animasyonları ve CTA butonları ile özellik kartları',
          dataTables: 'Arama, filtreleme ve sıralama özellikli veri tabloları',
          activityFeeds: 'Gerçek zamanlı aktivite akışları ve kullanıcı etkileşimleri',
          metricCharts: 'İnteraktif grafikler ve trend analizi',
          loadingStates: 'Farklı boyutlarda yükleme animasyonları',
          dashboardWidgets: 'KPI kartları ve gerçek zamanlı veri gösterimi',
          modernGallery: 'Grid görünümü ve medya önizleme',
          animationShowcase: 'Hover efektleri ve yükleme animasyonları',
          premiumComponents: '3D etkileşimli kartlar ve parallax hero bölümleri',
          aiComponents: 'AI sohbet asistanı ve akıllı arama',
          advancedComponents: 'Adaptif komut paleti ve canlı kullanıcı varlığı',
          uniqueComponents: 'Glassmorphism kartlar ve holografik efektler',
          createImpressiveAdminPanels: 'Modern komponentler ile etkileyici admin panelleri oluşturun'
        },
        badges: {
          animated: 'Animasyonlu',
          showcase: 'Vitrin',
          fullFeatured: 'Tam Özellikli',
          live: 'Canlı',
          interactive: 'İnteraktif',
          smooth: 'Akıcı',
          pro: 'Pro',
          media: 'Medya',
          new: 'Yeni',
          ai: 'AI',
          adv: 'Gelişmiş',
          exclusive: 'Özel'
        },
        features: {
          counterAnimations: 'Sayaç animasyonları',
          trendIndicators: 'Trend göstergeleri',
          gradientSupport: 'Gradient desteği',
          hoverAnimations: 'Hover animasyonları',
          iconIntegration: 'İkon entegrasyonu',
          ctaButtons: 'CTA butonları',
          searchFiltering: 'Arama ve filtreleme',
          sorting: 'Sıralama',
          exportFeature: 'Dışa aktarma özelliği',
          realTime: 'Gerçek zamanlı',
          typeCategories: 'Tür kategorileri',
          avatarSupport: 'Avatar desteği',
          hoverInteraction: 'Hover etkileşimi',
          animatedLoading: 'Animasyonlu yükleme',
          trendAnalysis: 'Trend analizi',
          differentSizes: 'Farklı boyutlar',
          customMessages: 'Özel mesajlar',
          themeCompatible: 'Tema uyumlu',
          kpiCards: 'KPI kartları',
          realTimeData: 'Gerçek zamanlı veri',
          interactiveCharts: 'İnteraktif grafikler',
          gridView: 'Grid görünümü',
          filterSearch: 'Filtre ve arama',
          mediaPreview: 'Medya önizleme',
          hoverEffects: 'Hover efektleri',
          loadingAnimations: 'Yükleme animasyonları',
          interactiveElements: 'İnteraktif öğeler',
          threeDInteractiveCards: '3D etkileşimli kartlar',
          parallaxHeroSections: 'Parallax hero bölümleri',
          interactiveTimelines: 'İnteraktif zaman çizelgeleri',
          aiChatAssistant: 'AI sohbet asistanı',
          smartSearch: 'Akıllı arama',
          predictiveAnalytics: 'Tahmine dayalı analitik',
          adaptiveCommandPalette: 'Adaptif komut paleti',
          liveUserPresence: 'Canlı kullanıcı varlığı',
          progressRoadmap: 'İlerleme yol haritası',
          glassmorphismCards: 'Glassmorphism kartlar',
          holographicEffects: 'Holografik efektler',
          quantumLoaders: 'Kuantum yükleyiciler'
        }
      },
      
      // Data Tables
      tables: {
        title: 'Veri Tabloları',
        badge: 'Tam Özellikli',
        pageTitle: 'Veri Tabloları',
        metaDescription: 'Arama, filtreleme ve sıralama özellikli veri tabloları',
        subtitle: 'Arama, filtreleme ve sıralama özellikli tablolar',
        members: 'Üyeler',
        searchPlaceholder: 'Ara...',
        totalRecords: 'Toplam {count} kayıt',
        columns: {
          id: 'ID',
          name: 'İsim',
          email: 'E-posta',
          role: 'Rol',
          status: 'Durum'
        },
        roles: {
          admin: 'Admin',
          editor: 'Editör',
          member: 'Üye'
        },
        statuses: {
          active: 'Aktif',
          inactive: 'Pasif'
        }
      },
      
      // Data Tables Showcase
      datatables: {
        pageTitle: 'Veri Tabloları Vitrini',
        metaDescription: 'Modern ve etkileyici veri tabloları örnekleri',
        title: 'Veri Tabloları',
        description: 'Modern ve etkileyici veri tabloları örnekleri',
        fullFeaturedTable: 'Tam Özellikli Tablo',
        allFeatures: 'Tüm Özellikler',
        userManagement: 'Kullanıcı Yönetimi',
        ecommerceProducts: 'E-Ticaret Ürünleri',
        stylishDesign: 'Şık Tasarım',
        productCatalog: 'Ürün Kataloğu',
        webAnalytics: 'Web Analitik',
        trendAnalysis: 'Trend Analizi',
        pagePerformance: 'Sayfa Performansı',
        teamMembers: 'Takım Üyeleri',
        profileView: 'Profil Görünümü',
        companyPersonnel: 'Şirket Personeli',
        simpleTable: 'Basit Tablo',
        basic: 'Temel',
        simpleUserList: 'Basit Kullanıcı Listesi',
        features: 'Özellikler',
        searchAndFilter: 'Arama ve Filtreleme',
        realtimeSearch: 'Gerçek zamanlı arama ve filtreleme',
        sorting: 'Sıralama',
        biDirectionalSorting: 'Çift yönlü sıralama',
        pagination: 'Sayfalama',
        pageSizeAdjustable: 'Ayarlanabilir sayfa boyutu',
        export: 'Dışa Aktarma',
        csvAndExcelExport: 'CSV ve Excel dışa aktarma',
        customRender: 'Özel Render',
        customColumnRender: 'Özel sütun render işlemleri',
        responsive: 'Responsive',
        mobileFriendly: 'Mobil uyumlu tasarım',
        columns: {
          id: 'ID',
          name: 'İsim',
          email: 'E-posta',
          role: 'Rol',
          status: 'Durum',
          score: 'Puan'
        },
        roles: {
          admin: 'Admin',
          editor: 'Editör',
          viewer: 'Görüntüleyici'
        },
        status: {
          active: 'Aktif',
          inactive: 'Pasif',
          suspended: 'Askıya Alınmış',
          vacation: 'İzinli',
          unknown: 'Bilinmiyor'
        },
        sampleData: {
          user1: { name: 'Ahmet Yılmaz', email: 'ahmet@example.com' },
          user2: { name: 'Zeynep Kaya', email: 'zeynep@example.com' },
          user3: { name: 'Mehmet Demir', email: 'mehmet@example.com' },
          user4: { name: 'Ayşe Özkan', email: 'ayse@example.com' },
          user5: { name: 'Ali Çelik', email: 'ali@example.com' },
          user6: { name: 'Fatma Arslan', email: 'fatma@example.com' },
          user7: { name: 'Mustafa Yıldız', email: 'mustafa@example.com' },
          user8: { name: 'Elif Şahin', email: 'elif@example.com' }
        },
        ecommerceProduct1: { name: 'MacBook Pro 16"', category: 'Laptop' },
        ecommerceProduct2: { name: 'iPhone 15 Pro', category: 'Telefon' },
        ecommerceProduct3: { name: 'AirPods Pro', category: 'Kulaklık' },
        ecommerceProduct4: { name: 'iPad Air', category: 'Tablet' },
        ecommerceProductImage: 'Ürün',
        ecommerceProductPrice: 'Fiyat',
        ecommerceProductStock: 'Stok',
        ecommerceProductRating: 'Değerlendirme',
        ecommerceProductSales: 'Satış',
        analyticsPage: 'Sayfa',
        analyticsViews: 'Görüntülenme',
        analyticsUsers: 'Kullanıcı',
        analyticsBounceRate: 'Çıkış Oranı',
        analyticsTrend: 'Trend',
        analyticsTrendUp: 'Yükseliş',
        analyticsTrendDown: 'Düşüş',
        teamMember1: { name: 'Ahmet Yılmaz', position: 'Frontend Developer', department: 'Yazılım', location: 'İstanbul' },
        teamMember2: { name: 'Zeynep Kaya', position: 'UI/UX Designer', department: 'Tasarım', location: 'Ankara' },
        teamMember3: { name: 'Mehmet Demir', position: 'Backend Developer', department: 'Yazılım', location: 'İzmir' },
        teamMember: 'Üye',
        teamDepartment: 'Departman',
        teamContact: 'İletişim',
        teamLocation: 'Konum',
        teamStatus: 'Durum'
      },
      
      // Activity Feeds
      activity: {
        title: 'Aktivite Akışları',
        badge: 'Canlı'
      },
      
      // Charts
      charts: {
        title: 'Grafik Komponentleri',
        badge: 'İnteraktif',
        pageTitle: 'Grafik Komponentleri - React19 Admin',
        metaDescription: 'İnteraktif grafik örnekleri ve metrik görselleştirme',
        description: 'İnteraktif grafikler ve metrik görselleştirme örnekleri',
        sections: {
          monthlyPerformance: 'Aylık Performans',
          platformDistribution: 'Platform Dağılımı',
          chartFeatures: 'Grafik Özellikleri'
        },
        badges: {
          trendUp: 'Yükseliş',
          multiPlatform: 'Multi Platform'
        },
        monthlyPerformanceTitle: 'Aylık Satış Performansı',
        salesChannelsTitle: 'Satış Kanalları',
        userGrowthTitle: 'Kullanıcı Büyümesi',
        months: {
          jan: 'Oca',
          feb: 'Şub',
          mar: 'Mar',
          apr: 'Nis',
          may: 'May',
          jun: 'Haz'
        },
        sales: {
          web: 'Web',
          mobile: 'Mobil',
          desktop: 'Masaüstü',
          tablet: 'Tablet'
        },
        userGrowth: {
          q1: '1. Çeyrek',
          q2: '2. Çeyrek',
          q3: '3. Çeyrek',
          q4: '4. Çeyrek'
        },
        features: {
          hoverInteraction: 'Hover Etkileşimi',
          hoverInteractionDescription: 'Öğe üzerine gelindiğinde vurgulama ve detay bilgisi',
          animatedLoading: 'Animasyonlu Yükleme',
          animatedLoadingDescription: 'Yükleme sırasında yumuşak animasyonlar',
          totalCalculation: 'Toplam Hesaplama',
          totalCalculationDescription: 'Toplam değer ve yüzde değişim gösterimi',
          trendIndicator: 'Trend Göstergesi',
          trendIndicatorDescription: 'Pozitif/negatif değişim göstergeleri',
          colorCoding: 'Renk Kodlama',
          colorCodingDescription: 'Metriğe göre renklerle anlam katma',
          responsiveDesign: 'Duyarlı Tasarım',
          responsiveDesignDescription: 'Tüm ekran boyutlarında uyumlu görünüm'
        }
      },
      
      // Features
      features: {
        title: 'Özellik Kartları',
        badge: 'Vitrin'
      },
      
      // Loading
      loading: {
        pageTitle: 'Yükleme Durumları - React19 Admin',
        metaDescription: 'Yükleme spinnerları, iskelet ekranlar ve modern yükleme animasyonları',
        title: 'Yükleme Durumları',
        description: 'Spinner, iskelet ve modern yükleme animasyonlarını keşfedin',
        badge: 'Akıcı',
        sections: {
          sizes: 'Boyutlar',
          textVariations: 'Metin Varyasyonları',
          interactiveDemo: 'Etkileşimli Demo',
          features: 'Özellikler',
          advancedLoaders: 'Gelişmiş Yükleyiciler',
          progressIndicators: 'İlerleme Göstergeleri',
          skeletonLoaders: 'İskelet Yükleyiciler',
          creativeAnimations: 'Yaratıcı Animasyonlar'
        },
        badges: {
          responsive: 'Duyarlı',
          customizable: 'Özelleştirilebilir',
          live: 'Canlı',
          modern: 'Modern',
          interactive: 'Etkileşimli',
          smooth: 'Akıcı',
          creative: 'Yaratıcı'
        },
        cardTitles: {
          small: 'Küçük',
          medium: 'Orta',
          large: 'Büyük',
          onlySpinner: 'Sadece Spinner',
          shortText: 'Kısa Metin',
          longText: 'Uzun Metin',
          customMessage: 'Özel Mesaj',
          loadingSimulation: 'Yükleme Simülasyonu',
          cssAnimations: 'CSS Animasyonları',
          threeSizeOptions: 'Üç Boyut Seçeneği',
          optionalText: 'Opsiyonel Metin',
          themeAdaptation: 'Tema Uyumu',
          easyIntegration: 'Kolay Entegrasyon',
          performance: 'Performans',
          dotsLoader: 'Nokta Yükleyici',
          pulseLoader: 'Nabız Yükleyici',
          barsLoader: 'Çubuk Yükleyici',
          waveLoader: 'Dalga Yükleyici',
          progressRing: 'İlerleme Halkası',
          creativePulse: 'Yaratıcı Nabız',
          modernSpinner: 'Modern Spinner',
          skeletonText: 'İskelet Metin',
          skeletonCircular: 'Dairesel İskelet',
          skeletonCard: 'Kart İskeleti',
          gradientWave: 'Gradient Dalga',
          multiLayerPulse: 'Çok Katmanlı Nabız',
          animatedDotsGrid: 'Animasyonlu Nokta Izgarası'
        },
        spinnerTexts: {
          small: 'Yükleniyor...',
          medium: 'Veriler yükleniyor...',
          large: 'Lütfen bekleyin, işlem sürüyor...',
          short: 'Yükleniyor',
          long: 'İşleminiz hazırlanıyor, lütfen bekleyin...',
          custom: 'Kişiselleştirilmiş mesaj',
          loadingSimulation: 'Simülasyon çalışıyor...'
        },
        buttonTexts: {
          loading: 'Yükleniyor...',
          startLoading: 'Yüklemeyi Başlat'
        },
        features: {
          cssAnimations: 'Saf CSS ile akıcı yükleme animasyonları',
          threeSizeOptions: 'Küçük, orta ve büyük boyut seçenekleri',
          optionalText: 'İsteğe bağlı metin desteği',
          themeAdaptation: 'Açık/Koyu tema ile uyumlu',
          easyIntegration: 'Kolay entegrasyon ve kullanım',
          performance: 'Hafif ve performanslı'
        }
      },
      
      // Widgets
      widgets: {
        title: 'Dashboard Widget\'ları',
        badge: 'Pro'
      },
      
      // Gallery
      gallery: {
        title: 'Modern Galeri',
        badge: 'Medya'
      },
      
      // Animation
      animation: {
        title: 'Animasyon Vitrini',
        badge: 'Animasyonlu',
        pageTitle: 'Animasyon Vitrini',
        metaDescription: 'Modern ve etkileyici animasyon örnekleri',
        description: 'Modern ve etkileyici animasyon örnekleri',
        particleEffect: 'Parçacık Efekti',
        controls: {
          title: 'Animasyon Kontrolleri',
          toggle: 'Animasyonları Aç/Kapat',
          speed: 'Hız'
        },
        sections: {
          hover: 'Hover',
          loading: 'Yükleme',
          interactive: 'İnteraktif',
          transitions: 'Geçişler',
          advanced: 'Gelişmiş'
        },
        hover: {
          scale: 'Ölçeklendirme',
          scaleDescription: 'Hover ile büyüme efekti',
          glow: 'Parlama',
          glowDescription: 'Hover ile parlaklık efekti',
          tilt: 'Eğme',
          tiltDescription: 'Hover ile eğme efekti',
          shine: 'Parlatma',
          shineDescription: 'Hover ile parlatma efekti',
          icon: 'İkon Animasyonu',
          iconDescription: 'Hover ile ikon animasyonu',
          rotate: 'Döndürme',
          rotateDescription: 'Hover ile döndürme efekti'
        },
        loading: {
          spinner: 'Döndürücü',
          pulse: 'Nabız',
          wave: 'Dalga',
          progress: 'İlerleme',
          morph: 'Şekil Değiştirme',
          gradient: 'Gradient'
        },
        interactive: {
          bounce: 'Zıplama',
          bounceButton: 'Zıpla',
          glow: 'Parlama',
          glowPrimary: 'Birincil Parlama',
          glowSecondary: 'İkincil Parlama',
          glowAccent: 'Vurgu Parlama',
          particle: 'Parçacık',
          float: 'Yüzdürme',
          typewriter: 'Daktilo',
          typewriterText: 'Merhaba Dünya! Bu bir daktilo efekti.',
          badge: 'Rozet',
          badgeScale: 'Ölçeklendirme',
          badgeRotate: 'Döndürme',
          badgeShadow: 'Gölge'
        },
        transitions: {
          slide: 'Kaydırma',
          slideRight: 'Sağa kaydırma',
          slideDown: 'Aşağı kaydırma',
          fade: 'Solma',
          fadeInOut: 'Solma giriş/çıkış',
          scaleInOut: 'Ölçek giriş/çıkış'
        },
        advanced: {
          cssArt: 'CSS Sanatı',
          parallax: 'Paralaks',
          matrix: 'Matrix'
        },
        playground: {
          title: 'Animasyon Oyun Alanı',
          description: 'Farklı animasyonları deneyin ve keşfedin',
          start: 'Başlat',
          reset: 'Sıfırla'
        }
      },
      
      // Stats
      stats: {
        title: 'İstatistik Kartları',
        badge: 'Analitik',
        pageTitle: 'İstatistik Kartları',
        metaDescription: 'Modern ve etkileyici istatistik kartları',
        description: 'Modern ve etkileyici istatistik kartları',
        sections: {
          basic: 'Temel İstatistikler',
          social: 'Sosyal Medya',
          custom: 'Özel Kartlar',
          features: 'Özellikler'
        },
        badges: {
          standard: 'Standart',
          popular: 'Popüler',
          creative: 'Yaratıcı',
          live: 'Canlı'
        },
        basicStats: {
          totalUsers: 'Toplam Kullanıcı',
          last30Days: 'Son 30 gün',
          monthlyRevenue: 'Aylık Gelir',
          thisMonth: 'Bu ay',
          activeProjects: 'Aktif Projeler',
          ongoing: 'Devam eden',
          completed: 'Tamamlanan',
          thisWeek: 'Bu hafta'
        },
        socialStats: {
          followerCount: 'Takipçi Sayısı',
          socialMedia: 'Sosyal medya',
          likes: 'Beğeni',
          thisMonth: 'Bu ay',
          shares: 'Paylaşım',
          weekly: 'Haftalık',
          comments: 'Yorum',
          active: 'Aktif'
        },
        cards: {
          analytics: 'Gelişmiş Analitik',
          trafficIncrease: 'Trafik artışı',
          visitors: 'Ziyaretçi',
          average: 'Ortalama',
          teamPerformance: 'Takım Performansı',
          tasksCompleted: 'Tamamlanan görevler',
          productivity: 'Verimlilik',
          details: 'Detaylar',
          revenueAnalysis: 'Gelir Analizi',
          thisMonth: 'Bu ay',
          target: 'Hedef',
          revenueIncrease: 'Gelir artışı'
        },
        features: {
          animated: 'Animasyonlu',
          smoothTransitions: 'Yumuşak geçişler',
          colorful: 'Renkli',
          gradientAndSolid: 'Gradient ve düz renkler',
          liveData: 'Canlı Veri',
          realtimeUpdates: 'Gerçek zamanlı güncellemeler',
          customizable: 'Özelleştirilebilir',
          flexibleConfiguration: 'Esnek yapılandırma'
        }
      },
      
      // Dashboard/Widgets
      dashboard: {
        title: 'Dashboard Widgets',
        badge: 'Canlı Veri',
        pageTitle: 'Dashboard Widgets',
        metaDescription: 'Modern ve etkileyici dashboard widget\'ları',
        description: 'Modern ve etkileyici dashboard widget\'ları',
        sections: {
          kpis: 'KPI Kartları',
          activities: 'Son Aktiviteler',
          projects: 'Projeler',
          products: 'En Çok Satan Ürünler',
          social: 'Sosyal Medya',
          notifications: 'Bildirimler'
        },
        badges: {
          liveData: 'Canlı Veri'
        },
        kpis: {
          totalSales: 'Toplam Satış',
          last30Days: 'Son 30 gün',
          activeUsers: 'Aktif Kullanıcılar',
          thisMonth: 'Bu ay',
          orders: 'Siparişler',
          ongoing: 'Devam eden',
          pageViews: 'Sayfa Görüntüleme',
          thisWeek: 'Bu hafta'
        },
        recentActivities: {
          title: 'Son Aktiviteler',
          newOrder: 'yeni sipariş oluşturdu',
          profileUpdated: 'profilini güncelledi',
          productReview: 'ürün değerlendirmesi yaptı',
          supportRequest: 'destek talebi oluşturdu'
        },
        projects: {
          title: 'Proje İlerlemesi',
          deadline: 'Teslim tarihi',
          ecommerce: 'E-ticaret Sitesi',
          mobileApp: 'Mobil Uygulama',
          dashboardRedesign: 'Dashboard Yeniden Tasarım',
          apiIntegration: 'API Entegrasyonu'
        },
        topProducts: {
          title: 'En Çok Satan Ürünler',
          sales: 'satış',
          wirelessHeadphones: 'Kablosuz Kulaklık',
          smartWatch: 'Akıllı Saat',
          bluetoothSpeaker: 'Bluetooth Hoparlör',
          tabletCase: 'Tablet Kılıfı'
        },
        socialMedia: {
          title: 'Sosyal Medya Metrikleri',
          followers: 'Takipçi',
          engagement: 'Etkileşim',
          posts: 'Gönderi',
          instagram: 'Instagram',
          twitter: 'Twitter',
          linkedin: 'LinkedIn',
          youtube: 'YouTube'
        },
        notifications: {
          title: 'Gerçek Zamanlı Bildirimler',
          systemOnline: 'Sistem Çevrimiçi',
          allSystemsNormal: 'Tüm sistemler normal çalışıyor',
          maintenanceScheduled: 'Bakım Planlandı',
          maintenanceTime: 'Bakım saati',
          highTraffic: 'Yüksek Trafik',
          normalLevel: 'Normal seviye'
        },
        buttons: {
          viewAll: 'Tümünü Gör'
        }
      },
      
      // Buttons
      buttons: {
        title: 'Buton Vitrini',
        badge: 'İnteraktif',
        pageTitle: 'Buton Vitrini',
        metaDescription: 'Modern ve etkileyici buton tasarımları',
        description: 'Modern ve etkileyici buton tasarımları',
        badges: {
          total: 'Toplam'
        },
        variants: {
          default: 'Varsayılan',
          destructive: 'Yıkıcı',
          outline: 'Çerçeveli',
          secondary: 'İkincil',
          ghost: 'Hayalet',
          link: 'Bağlantı'
        },
        sizes: {
          sm: 'Küçük',
          default: 'Varsayılan',
          lg: 'Büyük',
          icon: 'İkon'
        },
        actions: {
          play: 'Oynat',
          pause: 'Duraklat',
          download: 'İndir',
          upload: 'Yükle',
          save: 'Kaydet',
          edit: 'Düzenle',
          delete: 'Sil',
          add: 'Ekle'
        },
        socials: {
          like: 'Beğen',
          favorite: 'Favorile',
          share: 'Paylaş',
          copy: 'Kopyala',
          send: 'Gönder',
          email: 'E-posta',
          call: 'Ara',
          message: 'Mesaj'
        },
        utilities: {
          search: 'Ara',
          filter: 'Filtrele',
          settings: 'Ayarlar',
          notifications: 'Bildirimler',
          profile: 'Profil',
          lock: 'Kilitle',
          view: 'Görüntüle',
          calendar: 'Takvim'
        },
        gradients: {
          gradient1: 'Mor-Pembe',
          gradient2: 'Mavi-Cyan',
          gradient3: 'Yeşil-Teal',
          gradient4: 'Turuncu-Kırmızı',
          gradient5: 'İndigo-Mor',
          gradient6: 'Pembe-Rose'
        },
        glassmorphisms: {
          glassBlue: 'Mavi Cam',
          glassPurple: 'Mor Cam',
          glassGreen: 'Yeşil Cam',
          glassPink: 'Pembe Cam'
        },
        animations: {
          pulse: 'Nabız',
          bounce: 'Zıplama',
          spin: 'Döndürme',
          ping: 'Ping'
        },
        specialEffects: {
          neon: 'Neon',
          threeD: '3D',
          ripple: 'Dalga',
          slide: 'Kaydırma',
          glow: 'Parlama',
          borderAnimation: 'Kenar Animasyonu'
        },
        loadingStates: {
          loading: 'Yükleniyor',
          processing: 'İşleniyor',
          waiting: 'Bekleniyor',
          saving: 'Kaydediliyor'
        },
        sections: {
          variants: 'Varyantlar',
          variantsDescription: 'Farklı buton varyantları ve stilleri',
          variantTypes: 'Varyant Türleri',
          sizes: 'Boyutlar',
          actions: 'Aksiyon Butonları',
          actionsDescription: 'Yaygın kullanılan aksiyon butonları',
          socials: 'Sosyal Butonlar',
          socialsDescription: 'Sosyal medya ve etkileşim butonları',
          utilities: 'Yardımcı Butonlar',
          utilitiesDescription: 'Yardımcı ve araç butonları',
          gradients: 'Gradient Butonlar',
          gradientsDescription: 'Renkli gradient buton tasarımları',
          glassmorphisms: 'Glassmorphism',
          glassmorphismsDescription: 'Cam efekti buton tasarımları',
          animations: 'Animasyonlar',
          animationsDescription: 'Animasyonlu buton efektleri',
          icons: 'İkon Butonlar',
          iconsDescription: 'Sadece ikon içeren butonlar',
          specialEffects: 'Özel Efektler',
          specialEffectsDescription: 'Özel efektli buton tasarımları',
          loadingStates: 'Yükleme Durumları',
          loadingStatesDescription: 'Yükleme durumu butonları'
        }
      },
      
      // Forms
      forms: {
        title: 'Form Komponentleri',
        badge: 'Doğrulama'
      },
      
      // Navigation
      navigation: {
        title: 'Navigasyon Komponentleri',
        badge: 'Menü'
      },
      
      // Feedback
      feedback: {
        title: 'Geri Bildirim Komponentleri',
        badge: 'Etkileşim'
      },
      
      // Media
      media: {
        title: 'Medya Komponentleri',
        badge: 'Multimedya'
      },
      
      // AI Components
      ai: {
        pageTitle: 'AI Komponentleri - React19 Admin',
        metaDescription: 'Yapay zeka destekli komponentler ve özellikler',
        title: 'AI Destekli',
        description: 'Yapay zeka teknolojisi ile güçlendirilmiş komponentler',
        badges: {
          ai: 'AI Powered'
        },
        premiumComponents: 'Premium Komponentler',
        aiComponents: 'AI Komponentleri',
        
        // Features
        features: {
          aiChat: {
            title: 'AI Sohbet Asistanı',
            description: 'Akıllı sohbet robotu ile kullanıcı desteği',
            features: {
              nlp: 'Doğal dil işleme',
              contextRetention: 'Bağlam hafızası',
              multiLanguage: 'Çoklu dil desteği'
            }
          },
          aiSearch: {
            title: 'AI Destekli Arama',
            description: 'Semantik arama ve akıllı öneriler',
            features: {
              semanticSearch: 'Semantik arama',
              autoComplete: 'Otomatik tamamlama',
              resultRanking: 'Sonuç sıralaması'
            }
          },
          aiInsights: {
            title: 'AI Analiz ve Öngörüler',
            description: 'Otomatik veri analizi ve tahminler',
            features: {
              predictiveAnalytics: 'Tahmine dayalı analitik',
              trendAnalysis: 'Trend analizi',
              smartRecommendations: 'Akıllı öneriler'
            }
          },
          machineLearning: {
            title: 'Makine Öğrenmesi',
            description: 'ML modelleri ve otomatik öğrenme',
            features: {
              imageRecognition: 'Görüntü tanıma',
              textClassification: 'Metin sınıflandırma',
              anomalyDetection: 'Anomali tespiti'
            }
          }
        },
        
        
        // Tabs
        tabs: {
          aiChat: 'AI Sohbet',
          aiSearch: 'AI Arama',
          aiInsights: 'AI Analiz'
        },
        
        // Footer
        footer: {
          title: 'AI Geleceği Bugün Başlıyor',
          description: 'Yapay zeka destekli komponentler ile uygulamanızı geleceğe taşıyın',
          button: 'AI Özelliklerini Keşfet'
        }
      },

      // Get Started Page
      getStarted: {
        pageTitle: 'Başlayın - React19 Admin Şablonu',
        metaDescription: 'React19 Admin Şablonu ile başlamak için kapsamlı rehber - Kurulum, özelleştirme ve en iyi uygulamalar.',

        // Hero Section
        hero: {
          title: 'Başlayın Rehberi',
          description: 'React19 Admin Şablonu\'na hoş geldiniz! Bu kapsamlı rehber, hızlı bir şekilde çalışmaya başlamanızı sağlayacaktır. Güzel admin panelleri oluşturmak için modern teknolojiler ve en iyi uygulamalar ile oluşturulmuştur.',
          buttons: {
            viewDashboard: 'Dashboard\'u Görüntüle',
            browseComponents: 'Komponentleri Gözat'
          }
        },

        // Tabs
        tabs: {
          installation: 'Kurulum',
          structure: 'Proje Yapısı',
          customization: 'Özelleştirme',
          deployment: 'Dağıtım',
          troubleshooting: 'Sorun Giderme'
        },

        // Installation Tab
        installation: {
          title: 'Kurulum Rehberi',
          subtitle: 'Geliştirme ortamınızı kurmak için bu adımları takip edin',
          steps: {
            prerequisites: {
              title: 'Ön Gereksinimler',
              description: 'Sisteminizde gerekli araçların kurulu olduğundan emin olun',
              requirements: {
                node: 'Node.js 18.0 veya üzeri',
                npm: 'npm 9.0+ veya yarn 1.22+',
                git: 'Sürüm kontrolü için Git',
                vscode: 'VS Code (önerilir)'
              },
              commands: {
                node: 'node --version',
                npm: 'npm --version',
                git: 'git --version'
              }
            },
            clone: {
              title: 'Depoyu Klonlayın',
              description: 'Şablonu yerel makinenize GitHub\'dan indirin',
              commands: {
                clone: 'git clone https://github.com/your-username/react19-admin-template.git',
                cd: 'cd react19-admin-template'
              },
              note: 'Gerçek depo sahibi ile \'your-username\' değiştirin'
            },
            install: {
              title: 'Bağımlılıkları Yükleyin',
              description: 'Tercih ettiğiniz paket yöneticisini kullanarak tüm gerekli paketleri yükleyin',
              commands: {
                npm: 'npm install',
                or: '# veya',
                yarn: 'yarn install',
                bun: 'bun install'
              },
              note: 'Bu işlem React 19, TypeScript, Tailwind CSS ve diğer tüm bağımlılıkları yükleyecektir'
            },
            start: {
              title: 'Geliştirmeyi Başlatın',
              description: 'Geliştirme sunucusunu çalıştırın ve uygulamanızı oluşturmaya başlayın',
              commands: {
                npm: 'npm run dev',
                or: '# veya',
                yarn: 'yarn dev',
                bun: 'bun dev'
              },
              note: 'Geliştirme sunucusu http://localhost:8080 adresinde başlayacaktır'
            }
          }
        },

        // Project Structure Tab
        structure: {
          title: 'Proje Yapısı',
          subtitle: 'Şablonun dosya organizasyonunu anlayın'
        },

        // Customization Tab
        customization: {
          title: 'Özelleştirme Rehberi',
          subtitle: 'Şablonu nasıl özelleştireceğinizi ve genişleteceğinizi öğrenin',
          guides: {
            theme: {
              title: 'Tema Özelleştirmesi',
              description: 'Renkleri ve tasarım belirteçlerini özelleştirin',
              steps: [
                'src/index.css dosyasını açın',
                ':root ve .dark içinde CSS değişkenlerini değiştirin',
                'Özel renkler için Tailwind konfigürasyonunu güncelleyin',
                'Değişiklikleri geliştirme modunda test edin'
              ]
            },
            pages: {
              title: 'Yeni Sayfalar Ekleyin',
              description: 'Yeni sayfalar ve rotalar oluşturun',
              steps: [
                'src/pages/ içinde yeni komponent oluşturun',
                'src/App.tsx dosyasında rota ekleyin',
                'Kenar çubuğu navigasyonunu güncelleyin',
                'Menü öğelerine sayfayı ekleyin'
              ]
            },
            components: {
              title: 'Komponent Kullanımı',
              description: 'Mevcut komponentleri nasıl kullanacağınızı öğrenin',
              steps: [
                '@/components/ui/ konumundan komponenti içe aktarın',
                'Komponent özelliklerini ve varyantlarını kontrol edin',
                'Tip güvenliği için TypeScript kullanın',
                'className özelliği ile özelleştirin'
              ]
            },
            build: {
              title: 'Üretim İçin Oluşturun',
              description: 'Uygulamanızı üretime dağıtın',
              steps: [
                'npm run build çalıştırın',
                'npm run preview ile test edin',
                'Barındırma platformunuza dağıtın',
                'Çevre değişkenlerini yapılandırın'
              ]
            }
          }
        },

        // Deployment Tab
        deployment: {
          title: 'Dağıtım Rehberi',
          subtitle: 'Uygulamanızı üretime dağıtın',
          platforms: {
            netlify: {
              name: 'Netlify',
              description: 'Sürükle ve bırak dağıtımı',
              commands: [
                'npm run build',
                '# dist/ klasörünü yükleyin'
              ]
            },
            docker: {
              name: 'Docker',
              description: 'Konteynerleştirilmiş dağıtım',
              commands: [
                'docker build -t app .',
                'docker run -p 3000:3000 app'
              ]
            }
          },
          buildProcess: {
            title: 'Oluşturma Süreci',
            commands: [
              '$ npm run build',
              '# Üretim için oluşturma...',
              '# ✓ 2.34s içinde oluşturuldu',
              '$ npm run preview',
              '# http://localhost:4173 adresinde önizleme'
            ]
          }
        },

        // Troubleshooting Tab
        troubleshooting: {
          title: 'Sorun Giderme',
          subtitle: 'Yaygın sorunlar ve çözümleri',
          issues: {
            portInUse: {
              issue: 'Port zaten kullanımda',
              solution: '--port bayrağı ile port değiştirin: npm run dev -- --port 3001'
            },
            typeScript: {
              issue: 'TypeScript hataları',
              solution: 'Önbelleği temizleyin: rm -rf node_modules/.cache && npm install'
            },
            buildFails: {
              issue: 'Oluşturma başarısız',
              solution: 'Sözdizimi hatalarını kontrol edin ve çalıştırın: npm run type-check'
            },
            componentsNotFound: {
              issue: 'Komponentler bulunamadı',
              solution: '@/ takma adını doğru şekilde kullandığınızdan emin olun'
            }
          }
        },

        // Features Section
        features: {
          title: 'Bu Şablonu Neden Seçmelisiniz?',
          subtitle: 'Geliştirmeyi daha hızlı ve keyifli hale getiren özelliklerle dolu',
          items: {
            components: {
              title: '200+ Modern UI Komponenti',
              description: 'Koyu tema desteği ve yumuşak animasyonlarla güzel tasarlanmış komponentler'
            },
            typeScript: {
              title: 'TypeScript Hazır',
              description: 'Daha iyi geliştirme deneyimi ve tip güvenliği için TypeScript ile oluşturulmuştur'
            },
            performance: {
              title: 'Yüksek Performans',
              description: 'Modern React kalıpları ve en iyi uygulamalar ile hız için optimize edilmiştir'
            },
            premium: {
              title: 'Premium Deneyim',
              description: 'Profesyonel tasarım ve animasyonlarla kurumsal düzeyli komponentler'
            }
          }
        },

        // Tech Stack Section
        techStack: {
          title: 'Teknoloji Yığını',
          subtitle: 'Geliştiricilerin sevdiği modern ve güvenilir teknolojilerle oluşturulmuştur'
        },

        // Next Steps Section
        nextSteps: {
          title: 'Sırada Ne Var?',
          subtitle: 'Bu yardımcı kaynaklarla yolculuğunuza devam edin',
          items: {
            components: {
              title: 'Komponentleri Keşfedin',
              description: 'Tüm mevcut UI komponentlerini inceleyin ve onları aksiyonda görün',
              action: 'Komponentleri Görüntüle'
            },
            dashboard: {
              title: 'Dashboard Genel Bakışı',
              description: 'Grafikler, istatistikler ve etkileşimli widget\'lar ile ana dashboard\'u görün',
              action: 'Dashboard\'u Görüntüle'
            },
            ai: {
              title: 'AI Komponentleri',
              description: 'Son nesil AI destekli komponentleri ve özellikleri deneyimleyin',
              action: 'AI Özelliklerini Dene'
            },
            docs: {
              title: 'Dokümantasyon',
              description: 'Kapsamlı dokümantasyon ve API referanslarını okuyun',
              action: 'Dokümanları Oku'
            }
          }
        },

        // Development Tips Section
        tips: {
          title: 'Geliştirme İpuçları ve En İyi Uygulamalar',
          workflow: {
            title: 'Geliştirme İş Akışı',
            tips: [
              'Daha iyi kod kalitesi için TypeScript kullanın',
              'Komponent kompozisyon kalıplarını takip edin',
              'Temiz içe aktarmalar için @/ takma adını kullanın',
              'Tailwind CSS yardımcılarından yararlanın'
            ]
          },
          performance: {
            title: 'Performans İpuçları',
            tips: [
              'Kod bölme için React.lazy kullanın',
              'Resimleri ve varlıkları optimize edin',
              'Pahalı hesaplamalar için useMemo kullanın',
              'Uygun hata sınırları uygulayın'
            ]
          },

          // Build Process Title
          buildProcess: {
            title: 'Oluşturma Süreci'
          }
        },

        // Final CTA Section
        cta: {
          title: 'Harika Bir Şey Oluşturmaya Hazır mısınız?',
          description: 'React19 Admin Şablonu ile bir sonraki admin dashboard\'unuzu bugün oluşturmaya başlayın. Projeleri için bu şablona güvenen binlerce geliştiriciye katılın.',
          buttons: {
            start: 'Şimdi Oluşturmaya Başlayın',
            explore: 'Komponentleri Keşfedin'
          }
        }
      }
    }
  },
  
  en: {
    // Navigation
    nav: {
      menu: 'Menu',
      dashboard: 'Dashboard',
      analytics: 'Analytics',
      users: 'Users',
      settings: 'Settings',
      profile: 'Profile',
      showcase: 'Showcase',
      overview: 'Overview',
      changeLanguage: 'Change Language',
      changeTheme: 'Change Theme',
      guide: 'Guide',
      getStarted: 'Get Started',
      exampleServices: 'Services Example',
      examples: {
        examples: 'Examples',
        overview: 'Overview',
        socialMedia: 'Social Media',
        ecommerce: 'E-commerce',
        analytics: 'Analytics',
        crm: 'CRM',
        finance: 'Finance'
      }
    },

    // Services
    services:{
      // Page Meta
      pageTitle: 'Services Example - React19 Admin',
      metaDescription: 'Example page working with API services - CRUD operations, data management and real-time updates',

      // Header Section
      header: {
        title: 'Services Example',
        description: 'CRUD operations, data management and real-time updates with API services',
        buttons: {
          refreshAll: 'Refresh All',
          jsonPlaceholder: 'JSONPlaceholder API'
        }
      },

      // Dashboard Stats Section
      dashboard: {
        title: 'Dashboard Statistics',
        badge: 'Live Data',
        cards: {
          totalUsers: {
            title: 'Total Users',
            description: 'Fetched from API'
          },
          totalPosts: {
            title: 'Total Posts',
            description: 'Published'
          },
          completedTodos: {
            title: 'Completed Tasks',
            description: 'Success rate'
          },
          pendingTodos: {
            title: 'Pending Tasks',
            description: 'Incomplete'
          }
        }
      },

      // Users Management Section
      users: {
        title: 'User Management',
        badge: 'CRUD Operations',
        table: {
          title: 'User List',
          columns: {
            id: 'ID',
            name: 'Full Name',
            email: 'Email',
            company: 'Company',
            actions: 'Actions'
          }
        },
        dialogs: {
          create: {
            title: 'Add New User',
            description: 'Enter new user information. This data will be sent to the API.',
            buttons: {
              add: 'Add User',
              cancel: 'Cancel',
              create: 'Create User',
              creating: 'Creating...'
            }
          },
          detail: {
            title: 'User Details',
            description: 'user\'s detailed information',
            sections: {
              personal: 'Personal Information',
              company: 'Company Information',
              address: 'Address Information'
            },
            close: 'Close'
          }
        },
        form: {
          labels: {
            name: 'Full Name',
            username: 'Username',
            email: 'Email',
            phone: 'Phone',
            website: 'Website'
          },
          placeholders: {
            name: 'John Smith',
            username: 'john.smith',
            email: 'john@example.com',
            phone: '+1 555 123 4567',
            website: 'https://example.com'
          }
        }
      },

      // Posts Management Section
      posts: {
        title: 'Posts Management',
        badge: 'Content Management',
        table: {
          title: 'Posts List',
          columns: {
            id: 'ID',
            title: 'Title',
            author: 'Author',
            content: 'Content'
          }
        },
        dialogs: {
          create: {
            title: 'Create New Post',
            description: 'Enter new post information.',
            buttons: {
              add: 'Add Post',
              cancel: 'Cancel',
              create: 'Create Post',
              creating: 'Creating...'
            }
          }
        },
        form: {
          labels: {
            title: 'Title',
            author: 'Author',
            content: 'Content'
          },
          placeholders: {
            title: 'Post title',
            content: 'Post content...'
          },
          selectAuthor: 'Select author'
        }
      },

      // Loading States
      loading: {
        users: 'Loading users...',
        posts: 'Loading posts...',
        stats: 'Loading...',
        data: 'Fetching data...',
        creating: 'Creating...'
      },

      // Error States
      error: {
        title: 'Error',
        retry: 'Try Again',
        generic: 'An error occurred'
      },

      // Toast Messages
      toast: {
        success: {
          userCreated: 'Success!',
          userDeleted: 'Success!',
          postCreated: 'Success!',
          refresh: 'Refreshed!'
        },
        messages: {
          userCreated: 'User created successfully.',
          userDeleted: 'User deleted successfully.',
          postCreated: 'Post created successfully.',
          refresh: 'All data refreshed successfully.'
        }
      },

      // API Integration Guide
      apiGuide: {
        title: 'API Integration Guide',
        cards: {
          apiService: {
            title: 'API Service',
            description: 'file contains API call definitions.',
            features: [
              'CRUD operations',
              'Error handling',
              'TypeScript support',
              'Central configuration'
            ]
          },
          customHooks: {
            title: 'Custom Hooks',
            description: 'file contains custom hooks.',
            features: [
              'useApi hook',
              'Loading states',
              'Error handling',
              'Automatic refetch'
            ]
          },
          components: {
            title: 'Component Structure',
            description: 'This page is an example pattern for service integration.',
            features: [
              'Service layer',
              'Custom hooks',
              'Error boundaries',
              'Loading states'
            ]
          }
        }
      },

      // Code Examples
      codeExamples: {
        title: 'Code Examples',
        apiService: {
          title: 'API Service Usage',
          code: `// Using API service
import { apiService } from '@/services/api';

// Get users
const users = await apiService.getUsers();

// Create new user
const newUser = await apiService.createUser({
  name: 'John Smith',
  email: 'john@example.com'
});

// Update user
const updatedUser = await apiService.updateUser(1, {
  name: 'John Doe'
});`
        },
        customHook: {
          title: 'Custom Hook Usage',
          code: `// Using useApi hook
import { useApi } from '@/hooks/useApi';
import { apiService } from '@/services/api';

function MyComponent() {
  const {
    data: users,
    loading,
    error,
    refetch
  } = useApi(() => apiService.getUsers());

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorAlert />;

  return <UserList users={users} />;
}`
        }
      },

      // Best Practices
      bestPractices: {
        title: 'Best Practices',
        items: {
          errorHandling: {
            title: 'Error Handling',
            description: 'Error handling in all API calls'
          },
          loadingStates: {
            title: 'Loading States',
            description: 'Loading states for user experience'
          },
          dataManagement: {
            title: 'Data Management',
            description: 'Central data management and cache'
          },
          typeSafety: {
            title: 'Type Safety',
            description: 'Type safety with TypeScript'
          }
        }
      },

      // Table Actions
      actions: {
        view: 'View',
        edit: 'Edit',
        delete: 'Delete',
        unknown: 'Unknown'
      }
    },

    // Search
    search: {
      placeholder: 'Search...'
    },
    
    // Showcase sections
    showcase: {
      pageTitle: 'Component Showcase - React19 Admin',
      metaDescription: 'Showcase page for modern and impressive UI components',
      
      // Index page
      index: {
        title: 'Component Showcase',
        description: 'Discover modern and impressive UI components',
        sections: {
          components: 'Components',
          keyFeatures: 'Key Features',
          createImpressiveAdminPanels: 'Create Impressive Admin Panels'
        },
        categories: {
          available: 'categories available'
        },
        buttons: {
          getStarted: 'Get Started',
          moreExamples: 'More Examples',
          view: 'View'
        },
        items: {
          statsCards: 'Stats Cards',
          featureCards: 'Feature Cards',
          dataTables: 'Data Tables',
          activityFeeds: 'Activity Feeds',
          metricCharts: 'Metric Charts',
          loadingStates: 'Loading States',
          dashboardWidgets: 'Dashboard Widgets',
          modernGallery: 'Modern Gallery',
          animationShowcase: 'Animation Showcase',
          premiumComponents: 'Premium Components',
          aiComponents: 'AI Components',
          advancedComponents: 'Advanced Components',
          uniqueComponents: 'Unique Components'
        },
        descriptions: {
          statsCards: 'Animated counters and trend indicators with stats cards',
          featureCards: 'Feature cards with hover animations and CTA buttons',
          dataTables: 'Data tables with search, filtering and sorting features',
          activityFeeds: 'Real-time activity feeds and user interactions',
          metricCharts: 'Interactive charts and trend analysis',
          loadingStates: 'Loading animations in different sizes',
          dashboardWidgets: 'KPI cards and real-time data display',
          modernGallery: 'Grid view and media preview',
          animationShowcase: 'Hover effects and loading animations',
          premiumComponents: '3D interactive cards and parallax hero sections',
          aiComponents: 'AI chat assistant and smart search',
          advancedComponents: 'Adaptive command palette and live user presence',
          uniqueComponents: 'Glassmorphism cards and holographic effects',
          createImpressiveAdminPanels: 'Create impressive admin panels with modern components'
        },
        badges: {
          animated: 'Animated',
          showcase: 'Showcase',
          fullFeatured: 'Full Featured',
          live: 'Live',
          interactive: 'Interactive',
          smooth: 'Smooth',
          pro: 'Pro',
          media: 'Media',
          new: 'New',
          ai: 'AI',
          adv: 'Advanced',
          exclusive: 'Exclusive'
        },
        features: {
          counterAnimations: 'Counter animations',
          trendIndicators: 'Trend indicators',
          gradientSupport: 'Gradient support',
          hoverAnimations: 'Hover animations',
          iconIntegration: 'Icon integration',
          ctaButtons: 'CTA buttons',
          searchFiltering: 'Search and filtering',
          sorting: 'Sorting',
          exportFeature: 'Export feature',
          realTime: 'Real-time',
          typeCategories: 'Type categories',
          avatarSupport: 'Avatar support',
          hoverInteraction: 'Hover interaction',
          animatedLoading: 'Animated loading',
          trendAnalysis: 'Trend analysis',
          differentSizes: 'Different sizes',
          customMessages: 'Custom messages',
          themeCompatible: 'Theme compatible',
          kpiCards: 'KPI cards',
          realTimeData: 'Real-time data',
          interactiveCharts: 'Interactive charts',
          gridView: 'Grid view',
          filterSearch: 'Filter and search',
          mediaPreview: 'Media preview',
          hoverEffects: 'Hover effects',
          loadingAnimations: 'Loading animations',
          interactiveElements: 'Interactive elements',
          threeDInteractiveCards: '3D interactive cards',
          parallaxHeroSections: 'Parallax hero sections',
          interactiveTimelines: 'Interactive timelines',
          aiChatAssistant: 'AI chat assistant',
          smartSearch: 'Smart search',
          predictiveAnalytics: 'Predictive analytics',
          adaptiveCommandPalette: 'Adaptive command palette',
          liveUserPresence: 'Live user presence',
          progressRoadmap: 'Progress roadmap',
          glassmorphismCards: 'Glassmorphism cards',
          holographicEffects: 'Holographic effects',
          quantumLoaders: 'Quantum loaders'
        }
      },
      
      
      // Tables page
      tables: {
        pageTitle: 'Data Tables',
        metaDescription: 'Data tables with search, filtering and sorting features',
        title: 'Data Tables',
        subtitle: 'Tables with search, filtering and sorting features',
        members: 'Members',
        searchPlaceholder: 'Search...',
        totalRecords: 'Total {count} records',
        columns: {
          id: 'ID',
          name: 'Name',
          email: 'Email',
          role: 'Role',
          status: 'Status'
        },
        roles: {
          admin: 'Admin',
          editor: 'Editor',
          member: 'Member'
        },
        statuses: {
          active: 'Active',
          inactive: 'Inactive'
        }
      },
      
      // Data Tables Showcase
      datatables: {
        pageTitle: 'Data Tables Showcase',
        metaDescription: 'Modern and impressive data table examples',
        title: 'Data Tables',
        description: 'Modern and impressive data table examples',
        fullFeaturedTable: 'Full Featured Table',
        allFeatures: 'All Features',
        userManagement: 'User Management',
        ecommerceProducts: 'E-commerce Products',
        stylishDesign: 'Stylish Design',
        productCatalog: 'Product Catalog',
        webAnalytics: 'Web Analytics',
        trendAnalysis: 'Trend Analysis',
        pagePerformance: 'Page Performance',
        teamMembers: 'Team Members',
        profileView: 'Profile View',
        companyPersonnel: 'Company Personnel',
        simpleTable: 'Simple Table',
        basic: 'Basic',
        simpleUserList: 'Simple User List',
        features: 'Features',
        searchAndFilter: 'Search and Filter',
        realtimeSearch: 'Real-time search and filtering',
        sorting: 'Sorting',
        biDirectionalSorting: 'Bi-directional sorting',
        pagination: 'Pagination',
        pageSizeAdjustable: 'Adjustable page size',
        export: 'Export',
        csvAndExcelExport: 'CSV and Excel export',
        customRender: 'Custom Render',
        customColumnRender: 'Custom column render operations',
        responsive: 'Responsive',
        mobileFriendly: 'Mobile-friendly design',
        columns: {
          id: 'ID',
          name: 'Name',
          email: 'Email',
          role: 'Role',
          status: 'Status',
          score: 'Score'
        },
        roles: {
          admin: 'Admin',
          editor: 'Editor',
          viewer: 'Viewer'
        },
        status: {
          active: 'Active',
          inactive: 'Inactive',
          suspended: 'Suspended',
          vacation: 'On Vacation',
          unknown: 'Unknown'
        },
        sampleData: {
          user1: { name: 'John Smith', email: 'john@example.com' },
          user2: { name: 'Sarah Johnson', email: 'sarah@example.com' },
          user3: { name: 'Mike Wilson', email: 'mike@example.com' },
          user4: { name: 'Emily Davis', email: 'emily@example.com' },
          user5: { name: 'David Brown', email: 'david@example.com' },
          user6: { name: 'Lisa Anderson', email: 'lisa@example.com' },
          user7: { name: 'Tom Miller', email: 'tom@example.com' },
          user8: { name: 'Anna Taylor', email: 'anna@example.com' }
        },
        ecommerceProduct1: { name: 'MacBook Pro 16"', category: 'Laptop' },
        ecommerceProduct2: { name: 'iPhone 15 Pro', category: 'Phone' },
        ecommerceProduct3: { name: 'AirPods Pro', category: 'Headphones' },
        ecommerceProduct4: { name: 'iPad Air', category: 'Tablet' },
        ecommerceProductImage: 'Product',
        ecommerceProductPrice: 'Price',
        ecommerceProductStock: 'Stock',
        ecommerceProductRating: 'Rating',
        ecommerceProductSales: 'Sales',
        analyticsPage: 'Page',
        analyticsViews: 'Views',
        analyticsUsers: 'Users',
        analyticsBounceRate: 'Bounce Rate',
        analyticsTrend: 'Trend',
        analyticsTrendUp: 'Up',
        analyticsTrendDown: 'Down',
        teamMember1: { name: 'John Smith', position: 'Frontend Developer', department: 'Software', location: 'New York' },
        teamMember2: { name: 'Sarah Johnson', position: 'UI/UX Designer', department: 'Design', location: 'San Francisco' },
        teamMember3: { name: 'Mike Wilson', position: 'Backend Developer', department: 'Software', location: 'Seattle' },
        teamMember: 'Member',
        teamDepartment: 'Department',
        teamContact: 'Contact',
        teamLocation: 'Location',
        teamStatus: 'Status'
      },
      
      // Activity Feeds
      activity: {
        title: 'Activity Feeds',
        badge: 'Live'
      },
      
      // Charts
      charts: {
        title: 'Chart Components',
        badge: 'Interactive',
        pageTitle: 'Chart Components - React19 Admin',
        metaDescription: 'Interactive chart examples and metric visualization',
        description: 'Interactive charts and metric visualization examples',
        sections: {
          monthlyPerformance: 'Monthly Performance',
          platformDistribution: 'Platform Distribution',
          chartFeatures: 'Chart Features'
        },
        badges: {
          trendUp: 'Trend Up',
          multiPlatform: 'Multi-platform'
        },
        monthlyPerformanceTitle: 'Monthly Sales Performance',
        salesChannelsTitle: 'Sales Channels',
        userGrowthTitle: 'User Growth',
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'May',
          jun: 'Jun'
        },
        sales: {
          web: 'Web',
          mobile: 'Mobile',
          desktop: 'Desktop',
          tablet: 'Tablet'
        },
        userGrowth: {
          q1: 'Q1',
          q2: 'Q2',
          q3: 'Q3',
          q4: 'Q4'
        },
        features: {
          hoverInteraction: 'Hover Interaction',
          hoverInteractionDescription: 'Highlight and details on hover',
          animatedLoading: 'Animated Loading',
          animatedLoadingDescription: 'Smooth animations during loading',
          totalCalculation: 'Total Calculation',
          totalCalculationDescription: 'Total value and percentage change display',
          trendIndicator: 'Trend Indicator',
          trendIndicatorDescription: 'Positive/negative change indicators',
          colorCoding: 'Color Coding',
          colorCodingDescription: 'Semantic colors by metric',
          responsiveDesign: 'Responsive Design',
          responsiveDesignDescription: 'Looks great on all screen sizes'
        }
      },
      
      // Features
      features: {
        title: 'Feature Cards',
        badge: 'Showcase'
      },
      
      // Loading
      loading: {
        pageTitle: 'Loading States - React19 Admin',
        metaDescription: 'Loading spinners, skeleton screens and modern loading animations',
        title: 'Loading States',
        description: 'Explore spinners, skeletons and modern loading animations',
        badge: 'Smooth',
        sections: {
          sizes: 'Sizes',
          textVariations: 'Text Variations',
          interactiveDemo: 'Interactive Demo',
          features: 'Features',
          advancedLoaders: 'Advanced Loaders',
          progressIndicators: 'Progress Indicators',
          skeletonLoaders: 'Skeleton Loaders',
          creativeAnimations: 'Creative Animations'
        },
        badges: {
          responsive: 'Responsive',
          customizable: 'Customizable',
          live: 'Live',
          modern: 'Modern',
          interactive: 'Interactive',
          smooth: 'Smooth',
          creative: 'Creative'
        },
        cardTitles: {
          small: 'Small',
          medium: 'Medium',
          large: 'Large',
          onlySpinner: 'Only Spinner',
          shortText: 'Short Text',
          longText: 'Long Text',
          customMessage: 'Custom Message',
          loadingSimulation: 'Loading Simulation',
          cssAnimations: 'CSS Animations',
          threeSizeOptions: 'Three Size Options',
          optionalText: 'Optional Text',
          themeAdaptation: 'Theme Adaptation',
          easyIntegration: 'Easy Integration',
          performance: 'Performance',
          dotsLoader: 'Dots Loader',
          pulseLoader: 'Pulse Loader',
          barsLoader: 'Bars Loader',
          waveLoader: 'Wave Loader',
          progressRing: 'Progress Ring',
          creativePulse: 'Creative Pulse',
          modernSpinner: 'Modern Spinner',
          skeletonText: 'Skeleton Text',
          skeletonCircular: 'Skeleton Circular',
          skeletonCard: 'Skeleton Card',
          gradientWave: 'Gradient Wave',
          multiLayerPulse: 'Multi-layer Pulse',
          animatedDotsGrid: 'Animated Dots Grid'
        },
        spinnerTexts: {
          small: 'Loading...',
          medium: 'Loading data...',
          large: 'Please wait, processing...',
          short: 'Loading',
          long: 'Your request is being prepared, please wait...',
          custom: 'Personalized message',
          loadingSimulation: 'Simulation running...'
        },
        buttonTexts: {
          loading: 'Loading...',
          startLoading: 'Start Loading'
        },
        features: {
          cssAnimations: 'Smooth loading animations with pure CSS',
          threeSizeOptions: 'Small, medium and large size options',
          optionalText: 'Optional text support',
          themeAdaptation: 'Compatible with light/dark theme',
          easyIntegration: 'Easy to integrate and use',
          performance: 'Lightweight and performant'
        }
      },
      
      // Widgets
      widgets: {
        title: 'Dashboard Widgets',
        badge: 'Pro'
      },
      
      // Gallery
      gallery: {
        title: 'Modern Gallery',
        badge: 'Media'
      },
      
      // Animation
      animation: {
        title: 'Animation Showcase',
        badge: 'Animated'
      },
      
      // Stats
      stats: {
        title: 'Statistics Cards',
        badge: 'Analytics',
        pageTitle: 'Statistics Cards',
        metaDescription: 'Modern and impressive statistics cards',
        description: 'Modern and impressive statistics cards',
        sections: {
          basic: 'Basic Statistics',
          social: 'Social Media',
          custom: 'Custom Cards',
          features: 'Features'
        },
        badges: {
          standard: 'Standard',
          popular: 'Popular',
          creative: 'Creative',
          live: 'Live'
        },
        basicStats: {
          totalUsers: 'Total Users',
          last30Days: 'Last 30 days',
          monthlyRevenue: 'Monthly Revenue',
          thisMonth: 'This month',
          activeProjects: 'Active Projects',
          ongoing: 'Ongoing',
          completed: 'Completed',
          thisWeek: 'This week'
        },
        socialStats: {
          followerCount: 'Follower Count',
          socialMedia: 'Social media',
          likes: 'Likes',
          thisMonth: 'This month',
          shares: 'Shares',
          weekly: 'Weekly',
          comments: 'Comments',
          active: 'Active'
        },
        cards: {
          analytics: 'Advanced Analytics',
          trafficIncrease: 'Traffic increase',
          visitors: 'Visitors',
          average: 'Average',
          teamPerformance: 'Team Performance',
          tasksCompleted: 'Tasks completed',
          productivity: 'Productivity',
          details: 'Details',
          revenueAnalysis: 'Revenue Analysis',
          thisMonth: 'This month',
          target: 'Target',
          revenueIncrease: 'Revenue increase'
        },
        features: {
          animated: 'Animated',
          smoothTransitions: 'Smooth transitions',
          colorful: 'Colorful',
          gradientAndSolid: 'Gradient and solid colors',
          liveData: 'Live Data',
          realtimeUpdates: 'Real-time updates',
          customizable: 'Customizable',
          flexibleConfiguration: 'Flexible configuration'
        }
      },
      
      // Dashboard/Widgets
      dashboard: {
        title: 'Dashboard Widgets',
        badge: 'Live Data',
        pageTitle: 'Dashboard Widgets',
        metaDescription: 'Modern and impressive dashboard widgets',
        description: 'Modern and impressive dashboard widgets',
        sections: {
          kpis: 'KPI Cards',
          activities: 'Recent Activities',
          projects: 'Projects',
          products: 'Top Products',
          social: 'Social Media',
          notifications: 'Notifications'
        },
        badges: {
          liveData: 'Live Data'
        },
        kpis: {
          totalSales: 'Total Sales',
          last30Days: 'Last 30 days',
          activeUsers: 'Active Users',
          thisMonth: 'This month',
          orders: 'Orders',
          ongoing: 'Ongoing',
          pageViews: 'Page Views',
          thisWeek: 'This week'
        },
        recentActivities: {
          title: 'Recent Activities',
          newOrder: 'created a new order',
          profileUpdated: 'updated profile',
          productReview: 'reviewed a product',
          supportRequest: 'created support request'
        },
        projects: {
          title: 'Project Progress',
          deadline: 'Deadline',
          ecommerce: 'E-commerce Site',
          mobileApp: 'Mobile App',
          dashboardRedesign: 'Dashboard Redesign',
          apiIntegration: 'API Integration'
        },
        topProducts: {
          title: 'Top Products',
          sales: 'sales',
          wirelessHeadphones: 'Wireless Headphones',
          smartWatch: 'Smart Watch',
          bluetoothSpeaker: 'Bluetooth Speaker',
          tabletCase: 'Tablet Case'
        },
        socialMedia: {
          title: 'Social Media Metrics',
          followers: 'Followers',
          engagement: 'Engagement',
          posts: 'Posts',
          instagram: 'Instagram',
          twitter: 'Twitter',
          linkedin: 'LinkedIn',
          youtube: 'YouTube'
        },
        notifications: {
          title: 'Real-time Notifications',
          systemOnline: 'System Online',
          allSystemsNormal: 'All systems running normally',
          maintenanceScheduled: 'Maintenance Scheduled',
          maintenanceTime: 'Maintenance time',
          highTraffic: 'High Traffic',
          normalLevel: 'Normal level'
        },
        buttons: {
          viewAll: 'View All'
        }
      },
      
      // Buttons
      buttons: {
        title: 'Button Showcase',
        badge: 'Interactive',
        pageTitle: 'Button Showcase',
        metaDescription: 'Modern and impressive button designs',
        description: 'Modern and impressive button designs',
        badges: {
          total: 'Total'
        },
        variants: {
          default: 'Default',
          destructive: 'Destructive',
          outline: 'Outline',
          secondary: 'Secondary',
          ghost: 'Ghost',
          link: 'Link'
        },
        sizes: {
          sm: 'Small',
          default: 'Default',
          lg: 'Large',
          icon: 'Icon'
        },
        actions: {
          play: 'Play',
          pause: 'Pause',
          download: 'Download',
          upload: 'Upload',
          save: 'Save',
          edit: 'Edit',
          delete: 'Delete',
          add: 'Add'
        },
        socials: {
          like: 'Like',
          favorite: 'Favorite',
          share: 'Share',
          copy: 'Copy',
          send: 'Send',
          email: 'Email',
          call: 'Call',
          message: 'Message'
        },
        utilities: {
          search: 'Search',
          filter: 'Filter',
          settings: 'Settings',
          notifications: 'Notifications',
          profile: 'Profile',
          lock: 'Lock',
          view: 'View',
          calendar: 'Calendar'
        },
        gradients: {
          gradient1: 'Purple-Pink',
          gradient2: 'Blue-Cyan',
          gradient3: 'Green-Teal',
          gradient4: 'Orange-Red',
          gradient5: 'Indigo-Purple',
          gradient6: 'Pink-Rose'
        },
        glassmorphisms: {
          glassBlue: 'Blue Glass',
          glassPurple: 'Purple Glass',
          glassGreen: 'Green Glass',
          glassPink: 'Pink Glass'
        },
        animations: {
          pulse: 'Pulse',
          bounce: 'Bounce',
          spin: 'Spin',
          ping: 'Ping'
        },
        specialEffects: {
          neon: 'Neon',
          threeD: '3D',
          ripple: 'Ripple',
          slide: 'Slide',
          glow: 'Glow',
          borderAnimation: 'Border Animation'
        },
        loadingStates: {
          loading: 'Loading',
          processing: 'Processing',
          waiting: 'Waiting',
          saving: 'Saving'
        },
        sections: {
          variants: 'Variants',
          variantsDescription: 'Different button variants and styles',
          variantTypes: 'Variant Types',
          sizes: 'Sizes',
          actions: 'Action Buttons',
          actionsDescription: 'Commonly used action buttons',
          socials: 'Social Buttons',
          socialsDescription: 'Social media and interaction buttons',
          utilities: 'Utility Buttons',
          utilitiesDescription: 'Helper and tool buttons',
          gradients: 'Gradient Buttons',
          gradientsDescription: 'Colorful gradient button designs',
          glassmorphisms: 'Glassmorphism',
          glassmorphismsDescription: 'Glass effect button designs',
          animations: 'Animations',
          animationsDescription: 'Animated button effects',
          icons: 'Icon Buttons',
          iconsDescription: 'Icon-only buttons',
          specialEffects: 'Special Effects',
          specialEffectsDescription: 'Special effect button designs',
          loadingStates: 'Loading States',
          loadingStatesDescription: 'Loading state buttons'
        }
      },
      
      // Forms
      forms: {
        title: 'Form Components',
        badge: 'Validation'
      },
      
      // Navigation
      navigation: {
        title: 'Navigation Components',
        badge: 'Menu'
      },
      
      // Feedback
      feedback: {
        title: 'Feedback Components',
        badge: 'Interaction'
      },
      
      // Media
      media: {
        title: 'Media Components',
        badge: 'Multimedia'
      },
      
      // AI Components
      ai: {
        pageTitle: 'AI Components - React19 Admin',
        metaDescription: 'AI-powered components and features',
        title: 'AI Powered',
        description: 'Components enhanced with artificial intelligence technology',
        badges: {
          ai: 'AI Powered'
        },
        premiumComponents: 'Premium Components',
        aiComponents: 'AI Components',
        
        // Features
        features: {
          aiChat: {
            title: 'AI Chat Assistant',
            description: 'Smart chatbot for user support',
            features: {
              nlp: 'Natural language processing',
              contextRetention: 'Context memory',
              multiLanguage: 'Multi-language support'
            }
          },
          aiSearch: {
            title: 'AI-Powered Search',
            description: 'Semantic search and smart suggestions',
            features: {
              semanticSearch: 'Semantic search',
              autoComplete: 'Auto-completion',
              resultRanking: 'Result ranking'
            }
          },
          aiInsights: {
            title: 'AI Analysis & Insights',
            description: 'Automatic data analysis and predictions',
            features: {
              predictiveAnalytics: 'Predictive analytics',
              trendAnalysis: 'Trend analysis',
              smartRecommendations: 'Smart recommendations'
            }
          },
          machineLearning: {
            title: 'Machine Learning',
            description: 'ML models and automatic learning',
            features: {
              imageRecognition: 'Image recognition',
              textClassification: 'Text classification',
              anomalyDetection: 'Anomaly detection'
            }
          }
        },
        
        
        // Tabs
        tabs: {
          aiChat: 'AI Chat',
          aiSearch: 'AI Search',
          aiInsights: 'AI Insights'
        },
        
        // Footer
        footer: {
          title: 'The AI Future Starts Today',
          description: 'Take your application to the future with AI-powered components',
          button: 'Explore AI Features'
        }
      },

      // Get Started Page
      getStarted: {
        pageTitle: 'Get Started - React19 Admin Template',
        metaDescription: 'Complete guide to get started with React19 Admin Template - Installation, customization, and best practices.',

        // Hero Section
        hero: {
          title: 'Get Started Guide',
          description: 'Welcome to React19 Admin Template! This comprehensive guide will help you get up and running quickly. Built with modern technologies and best practices for creating beautiful admin dashboards.',
          buttons: {
            viewDashboard: 'View Dashboard',
            browseComponents: 'Browse Components'
          }
        },

        // Tabs
        tabs: {
          installation: 'Installation',
          structure: 'Project Structure',
          customization: 'Customization',
          deployment: 'Deployment',
          troubleshooting: 'Troubleshooting'
        },

        // Installation Tab
        installation: {
          title: 'Installation Guide',
          subtitle: 'Follow these steps to set up your development environment',
          steps: {
            prerequisites: {
              title: 'Prerequisites',
              description: 'Ensure you have the required tools installed on your system',
              requirements: {
                node: 'Node.js 18.0 or higher',
                npm: 'npm 9.0+ or yarn 1.22+',
                git: 'Git for version control',
                vscode: 'VS Code (recommended)'
              },
              commands: {
                node: 'node --version',
                npm: 'npm --version',
                git: 'git --version'
              }
            },
            clone: {
              title: 'Clone Repository',
              description: 'Download the template from GitHub to your local machine',
              commands: {
                clone: 'git clone https://github.com/your-username/react19-admin-template.git',
                cd: 'cd react19-admin-template'
              },
              note: 'Replace \'your-username\' with the actual repository owner'
            },
            install: {
              title: 'Install Dependencies',
              description: 'Install all required packages using your preferred package manager',
              commands: {
                npm: 'npm install',
                or: '# or',
                yarn: 'yarn install',
                bun: 'bun install'
              },
              note: 'This will install React 19, TypeScript, Tailwind CSS, and all other dependencies'
            },
            start: {
              title: 'Start Development',
              description: 'Run the development server and start building your application',
              commands: {
                npm: 'npm run dev',
                or: '# or',
                yarn: 'yarn dev',
                bun: 'bun dev'
              },
              note: 'The development server will start on http://localhost:8080'
            }
          }
        },

        // Project Structure Tab
        structure: {
          title: 'Project Structure',
          subtitle: 'Understanding the template\'s file organization'
        },

        // Customization Tab
        customization: {
          title: 'Customization Guide',
          subtitle: 'Learn how to customize and extend the template',
          guides: {
            theme: {
              title: 'Theme Customization',
              description: 'Customize colors and design tokens',
              steps: [
                'Open src/index.css',
                'Modify CSS variables in :root and .dark',
                'Update Tailwind config for custom colors',
                'Test changes in development mode'
              ]
            },
            pages: {
              title: 'Add New Pages',
              description: 'Create new pages and routes',
              steps: [
                'Create new component in src/pages/',
                'Add route in src/App.tsx',
                'Update sidebar navigation',
                'Add page to menu items'
              ]
            },
            components: {
              title: 'Component Usage',
              description: 'How to use existing components',
              steps: [
                'Import component from @/components/ui/',
                'Check component props and variants',
                'Use TypeScript for type safety',
                'Customize with className prop'
              ]
            },
            build: {
              title: 'Build for Production',
              description: 'Deploy your application',
              steps: [
                'Run npm run build',
                'Test with npm run preview',
                'Deploy to your hosting platform',
                'Configure environment variables'
              ]
            }
          }
        },

        // Deployment Tab
        deployment: {
          title: 'Deployment Guide',
          subtitle: 'Deploy your application to production',
          platforms: {
            netlify: {
              name: 'Netlify',
              description: 'Drag & drop deployment',
              commands: [
                'npm run build',
                '# Upload dist/ folder'
              ]
            },
            docker: {
              name: 'Docker',
              description: 'Containerized deployment',
              commands: [
                'docker build -t app .',
                'docker run -p 3000:3000 app'
              ]
            }
          },
          buildProcess: {
            title: 'Build Process',
            commands: [
              '$ npm run build',
              '# Building for production...',
              '# ✓ Built in 2.34s',
              '$ npm run preview',
              '# Preview at http://localhost:4173'
            ]
          }
        },

        // Troubleshooting Tab
        troubleshooting: {
          title: 'Troubleshooting',
          subtitle: 'Common issues and their solutions',
          issues: {
            portInUse: {
              issue: 'Port already in use',
              solution: 'Change port with --port flag: npm run dev -- --port 3001'
            },
            typeScript: {
              issue: 'TypeScript errors',
              solution: 'Clear cache: rm -rf node_modules/.cache && npm install'
            },
            buildFails: {
              issue: 'Build fails',
              solution: 'Check for syntax errors and run: npm run type-check'
            },
            componentsNotFound: {
              issue: 'Components not found',
              solution: 'Verify import paths use @/ alias correctly'
            }
          }
        },

        // Features Section
        features: {
          title: 'Why Choose This Template?',
          subtitle: 'Packed with features that make development faster and more enjoyable',
          items: {
            components: {
              title: '200+ Modern UI Components',
              description: 'Beautifully designed components with dark theme support and smooth animations'
            },
            typeScript: {
              title: 'TypeScript Ready',
              description: 'Built with TypeScript for better development experience and type safety'
            },
            performance: {
              title: 'High Performance',
              description: 'Optimized for speed with modern React patterns and best practices'
            },
            premium: {
              title: 'Premium Experience',
              description: 'Enterprise-grade components with professional design and animations'
            }
          }
        },

        // Tech Stack Section
        techStack: {
          title: 'Technology Stack',
          subtitle: 'Built with modern, reliable technologies that developers love'
        },

        // Next Steps Section
        nextSteps: {
          title: 'What\'s Next?',
          subtitle: 'Continue your journey with these helpful resources',
          items: {
            components: {
              title: 'Explore Components',
              description: 'Browse through all available UI components and see them in action',
              action: 'View Components'
            },
            dashboard: {
              title: 'Dashboard Overview',
              description: 'See the main dashboard with charts, stats, and interactive widgets',
              action: 'View Dashboard'
            },
            ai: {
              title: 'AI Components',
              description: 'Experience next-generation AI-powered components and features',
              action: 'Try AI Features'
            },
            docs: {
              title: 'Documentation',
              description: 'Read comprehensive documentation and API references',
              action: 'Read Docs'
            }
          }
        },

        // Development Tips Section
        tips: {
          title: 'Development Tips & Best Practices',
          workflow: {
            title: 'Development Workflow',
            tips: [
              'Use TypeScript for better code quality',
              'Follow component composition patterns',
              'Use the @/ alias for clean imports',
              'Leverage Tailwind CSS utilities'
            ]
          },
          performance: {
            title: 'Performance Tips',
            tips: [
              'Use React.lazy for code splitting',
              'Optimize images and assets',
              'Use useMemo for expensive calculations',
              'Implement proper error boundaries'
            ]
          },

          // Build Process Title
          buildProcess: {
            title: 'Build Process'
          }
        },

        // Final CTA Section
        cta: {
          title: 'Ready to Build Something Amazing?',
          description: 'Start building your next admin dashboard today with React19 Admin Template. Join thousands of developers who trust this template for their projects.',
          buttons: {
            start: 'Start Building Now',
            explore: 'Explore Components'
          }
        }
      }
    }
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'tr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string, params?: Record<string, any>): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (typeof value !== 'string') {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
    
    if (params) {
      return Object.entries(params).reduce((str, [paramKey, paramValue]) => {
        return str.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
      }, value);
    }
    
    return value;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };