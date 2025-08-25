import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Dil çevirileri
const translations = {
  tr: {
    // General
    'common.save': 'Kaydet',
    'common.cancel': 'İptal',
    'common.edit': 'Düzenle',
    'common.delete': 'Sil',
    'common.search': 'Ara',
    'common.loading': 'Yükleniyor...',
    'common.error': 'Hata',
    'common.success': 'Başarılı',
    'common.warning': 'Uyarı',
    'common.info': 'Bilgi',
    
    // Navigation
    'nav.dashboard': 'Anasayfa',
    'nav.analytics': 'Analitik',
    'nav.tables': 'Tablolar',
    'nav.forms': 'Form Sihirbazı',
    'nav.users': 'Kullanıcılar',
    'nav.roles': 'Roller',
    'nav.profile': 'Profil',
    'nav.notifications': 'Bildirimler',
    'nav.settings': 'Ayarlar',
    'nav.showcase': 'Component Showcase',
    'nav.login': 'Giriş Yap',
    'nav.register': 'Kayıt Ol',
    'nav.getStarted': 'Başlangıç',
    'nav.guide': 'Rehber',
    'nav.mainMenu': 'Ana Menü',
    'nav.auth': 'Giriş',
    'nav.logout': 'Çıkış Yap',
    'nav.pro': 'Pro',
    'nav.beta': 'Beta',
    
    // Settings
    'settings.general': 'Genel',
    'settings.profile': 'Profil',
    'settings.notifications': 'Bildirimler',
    'settings.security': 'Güvenlik',
    'settings.appearance': 'Görünüm',
    'settings.advanced': 'Gelişmiş',
    'settings.appName': 'Uygulama Adı',
    'settings.language': 'Dil',
    'settings.timezone': 'Saat Dilimi',
    'settings.theme': 'Tema',
    'settings.light': 'Açık',
    'settings.dark': 'Koyu',
    'settings.system': 'Sistem',
    'settings.colorScheme': 'Renk Şeması',
    'settings.fontSize': 'Yazı Tipi Boyutu',
    'settings.small': 'Küçük',
    'settings.medium': 'Orta',
    'settings.large': 'Büyük',
    'settings.blue': 'Mavi',
    'settings.green': 'Yeşil',
    'settings.purple': 'Mor',
    'settings.red': 'Kırmızı',
    
    // Theme and Search
    'theme.light': 'Açık',
    'theme.dark': 'Koyu', 
    'theme.system': 'Sistem',
    'search.placeholder': 'Ara...',
    
    // Profile
    'profile.personalInfo': 'Kişisel Bilgiler',
    'profile.contactInfo': 'İletişim Bilgileri',
    'profile.skills': 'Beceri ve Sertifikalar',
    'profile.activities': 'Son Aktiviteler',
    'profile.editProfile': 'Profili Düzenle',
    'profile.fullName': 'Ad Soyad',
    'profile.email': 'E-posta',
    'profile.phone': 'Telefon',
    'profile.location': 'Konum',
    'profile.bio': 'Hakkında',
    'profile.company': 'Şirket',
    'profile.position': 'Pozisyon',
    'profile.department': 'Departman',
    'profile.website': 'Web Sitesi',
    'profile.pageTitle': 'Profil',
    'profile.metaDescription': 'Kullanıcı profil bilgileri ve aktivite geçmişi.',
    'profile.title': 'Profil',
    'profile.subtitle': 'Kişisel bilgiler ve hesap ayarları',
    'profile.avatar.alt': 'Profil',
    'profile.avatar.fallback': 'AY',
    'profile.cameraButton.aria': 'Fotoğraf çek',
    'profile.name': 'Samet UCA',
    'profile.status': 'Aktif',
    'profile.joinDate': 'Katılım: Ocak 2023',
    'profile.editButton': 'Profili Düzenle',
    'profile.tabs.general': 'Genel',
    'profile.tabs.skills': 'Beceriler',
    'profile.tabs.activity': 'Aktivite',
    'profile.tabs.settings': 'Ayarlar',
    'profile.activities.login': 'Sisteme giriş yapıldı',
    'profile.activities.update': 'Profil bilgileri güncellendi',
    'profile.activities.file': 'Yeni rapor yüklendi',
    'profile.activities.user': 'Yeni kullanıcı eklendi',
    'profile.activities.2minutesAgo': '2 dakika önce',
    'profile.activities.1hourAgo': '1 saat önce',
    'profile.activities.3hoursAgo': '3 saat önce',
    'profile.activities.1dayAgo': '1 gün önce',
    
    // Notifications
    'notifications.all': 'Tümü',
    'notifications.unread': 'Okunmamış',
    'notifications.read': 'Okunmuş',
    'notifications.markAllRead': 'Tümünü Okundu İşaretle',
    'notifications.clearAll': 'Tümünü Temizle',
    'notifications.noNotifications': 'Bildirim bulunamadı',
    'notifications.last24Hours': 'Son 24 Saat',
    'notifications.last7Days': 'Son 7 Gün',
    'notifications.last30Days': 'Son 30 Gün',
    
    // Analytics
    'analytics.overview': 'Genel Bakış',
    'analytics.visitors': 'Ziyaretçiler',
    'analytics.revenue': 'Gelir',
    'analytics.conversion': 'Dönüşüm',
    'analytics.topPages': 'En Popüler Sayfalar',
    'analytics.deviceDistribution': 'Cihaz Dağılımı',
    'analytics.trafficSources': 'Trafik Kaynakları',
    'analytics.title': 'Analitik',
    'analytics.subtitle': 'Detaylı performans analizi ve raporlar',
    'analytics.duration': 'Süre',
    'analytics.7days': '7 gün',
    'analytics.30days': '30 gün',
    'analytics.90days': '90 gün',
    'analytics.1year': '1 yıl',
    'analytics.filter': 'Filtrele',
    'analytics.downloadReport': 'Rapor İndir',
    'analytics.totalVisitors': 'Toplam Ziyaretçi',
    'analytics.pageViews': 'Sayfa Görüntüleme',
    'analytics.conversionRate': 'Dönüşüm Oranı',
    'analytics.avgSession': 'Ortalama Oturum',
    'analytics.visitorTrend': 'Ziyaretçi Trendi',
    'analytics.revenueAnalysis': 'Gelir Analizi',
    'analytics.mobile': 'Mobil',
    'analytics.desktop': 'Desktop',
    'analytics.tablet': 'Tablet',
    'analytics.homepage': 'Anasayfa',
    'analytics.products': 'Ürünler',
    'analytics.about': 'Hakkımızda',
    'analytics.contact': 'İletişim',
    'analytics.views': 'görüntüleme',
    'analytics.bounce': 'Bounce',
    'analytics.pageTitle': 'Analitik',
    'analytics.metaDescription': 'Detaylı analitik raporları ve performans metrikleri.',
    'analytics.jan': 'Oca',
    'analytics.feb': 'Şub',
    'analytics.mar': 'Mar',
    'analytics.apr': 'Nis',
    'analytics.may': 'May',
    'analytics.jun': 'Haz',
    
    // Dashboard
    'dashboard.welcome': 'Hoş Geldin',
    'dashboard.totalUsers': 'Toplam Kullanıcı',
    'dashboard.totalRevenue': 'Toplam Gelir',
    'dashboard.activeProjects': 'Aktif Projeler',
    'dashboard.pendingTasks': 'Bekleyen Görevler',
    'dashboard.last30Days': 'Son 30 günde',
    'dashboard.thisMonth': 'Bu ay',
    'dashboard.ongoing': 'Devam eden',
    'dashboard.pending': 'Bekleyen',
    'dashboard.newUserRegistered': 'Yeni kullanıcı kaydetti',
    'dashboard.projectUpdated': 'Proje güncelledi',
    'dashboard.reportCreated': 'Rapor oluşturdu',
    'dashboard.systemErrorReported': 'Sistem hatası bildirdi',
    'dashboard.2minutesAgo': '2 dakika önce',
    'dashboard.15minutesAgo': '15 dakika önce',
    'dashboard.1hourAgo': '1 saat önce',
    'dashboard.3hoursAgo': '3 saat önce',
    'dashboard.addNewUser': 'Yeni Kullanıcı Ekle',
    'dashboard.createReport': 'Rapor Oluştur',
    'dashboard.startProject': 'Proje Başlat',
    'dashboard.scheduleMeeting': 'Toplantı Planla',
    'dashboard.recentActivities': 'Son Aktiviteler',
    'dashboard.systemRecentOperations': 'Sistemde gerçekleşen son işlemler',
    'dashboard.quickActions': 'Hızlı İşlemler',
    'dashboard.frequentlyUsedOperations': 'Sık kullanılan işlemler',
    'dashboard.projectStatus': 'Proje Durumu',
    'dashboard.activeProjectsGeneralStatus': 'Aktif projelerin genel durumu',
    'dashboard.ecommerceSite': 'E-ticaret Sitesi',
    'dashboard.mobileApp': 'Mobil Uygulama',
    'dashboard.adminPanel': 'Admin Panel',
    'dashboard.systemStatus': 'Sistem Durumu',
    'dashboard.serverAndServiceStatus': 'Sunucu ve servis durumları',
    'dashboard.webServer': 'Web Sunucu',
    'dashboard.database': 'Veritabanı',
    'dashboard.apiService': 'API Servisi',
    'dashboard.emailService': 'E-posta Servisi',
    'dashboard.running': 'Çalışıyor',
    'dashboard.error': 'Hata',
    'dashboard.projectOverview': 'Projenizin genel durumunu ve önemli metriklerini görüntüleyin',
    'dashboard.pageTitle': 'Dashboard - React19 Admin',
    'dashboard.metaDescription': 'Ana dashboard sayfası',
    'dashboard.uniqueComponents.title': 'Benzersiz Komponentler',
    'dashboard.uniqueComponents.description': 'Piyasada benzeri bulunmayan, şık ve modern UI komponentleri ile fark yaratın',
    'dashboard.uniqueComponents.glassmorphism.title': 'Glassmorphism Kart',
    'dashboard.uniqueComponents.glassmorphism.description': 'Şeffaf cam efekti ile modern görünüm',
    'dashboard.uniqueComponents.glassmorphism.content': 'Glassmorphism tasarım trendi ile etkileyici kartlar',
    'dashboard.uniqueComponents.holographic.title': 'Holographic Kart',
    'dashboard.uniqueComponents.holographic.description': '3D holografik efekt ile gelecekteki tasarım',
    'dashboard.uniqueComponents.holographic.content': 'Holografik efektler ile etkileyici görünüm',
    'dashboard.uniqueComponents.quantum.title': 'Quantum Loader',
    'dashboard.uniqueComponents.quantum.description': 'Kuantum fiziği ilhamlı loading animasyonu',
    'dashboard.uniqueComponents.viewAll': 'Tüm Komponentleri Görüntüle',
    
    // Showcase
    'showcase.pageTitle': 'Component Showcase - CodeMaze Admin',
    'showcase.metaDescription': 'Modern ve etkileyici UI componentlerinin sergilendiği ana sayfa',
    'showcase.mainTitle': 'Component Showcase',
    'showcase.mainDescription': 'Modern, etkileyici ve kullanıcı dostu UI componentleri ile admin panellerinizi güçlendirin',
    'showcase.categories.title': 'Component Kategorileri',
    'showcase.categories.count': '{count} Kategori Mevcut',
    'showcase.keyFeatures.title': 'Öne Çıkan Özellikler',
    'showcase.viewButton': 'Görüntüle',
    'showcase.cta.title': 'Etkileyici Admin Panelleri Oluşturun',
    'showcase.cta.description': 'Modern tasarım, yüksek performans ve kullanıcı dostu arayüz ile admin panellerinizi bir üst seviyeye taşıyın',
    'showcase.cta.primaryButton': 'Hemen Başlayın',
    'showcase.cta.secondaryButton': 'Daha Fazla Örnek',
    
    // Showcase Stats
    'showcase.stats.title': 'İstatistik Kartları',
    'showcase.stats.description': 'Animasyonlu sayaçlar ve trend göstergeleri ile etkileyici istatistik kartları',
    'showcase.stats.badge': 'Animasyonlu',
    'showcase.stats.features.counter': 'Counter animasyonları',
    'showcase.stats.features.trend': 'Trend göstergeleri',
    'showcase.stats.features.gradient': 'Gradient desteği',
    
    // Showcase Tables
    'showcase.tables.title': 'Veri Tabloları',
    'showcase.tables.description': 'Güçlü arama, filtreleme ve sıralama özellikleri ile gelişmiş veri tabloları',
    'showcase.tables.badge': 'Tam Özellikli',
    'showcase.tables.features.search': 'Arama & Filtreleme',
    'showcase.tables.features.sort': 'Sıralama',
    'showcase.tables.features.export': 'Export özelliği',
    
    // Showcase Activity
    'showcase.activity.title': 'Aktivite Akışları',
    'showcase.activity.description': 'Gerçek zamanlı kullanıcı aktiviteleri ve sistem olaylarını takip edin',
    'showcase.activity.badge': 'Canlı',
    'showcase.activity.features.realtime': 'Gerçek zamanlı',
    'showcase.activity.features.categories': 'Tip kategorileri',
    'showcase.activity.features.avatar': 'Avatar desteği',
    
    // Showcase Charts
    'showcase.charts.title': 'Metric Grafikleri',
    'showcase.charts.description': 'Verilerinizi görselleştirmek için güçlü ve esnek grafik bileşenleri',
    'showcase.charts.badge': 'İnteraktif',
    'showcase.charts.features.hover': 'Hover etkileşimi',
    'showcase.charts.features.loading': 'Animasyonlu yükleme',
    'showcase.charts.features.trend': 'Trend analizi',
    
    // Showcase Features
    'showcase.features.title': 'Özellik Kartları',
    'showcase.features.description': 'Ürün özelliklerinizi etkili bir şekilde sergileyen modern kart tasarımları',
    'showcase.features.badge': 'Showcase',
    'showcase.features.features.hover': 'Hover animasyonları',
    'showcase.features.features.icons': 'İkon entegrasyonu',
    'showcase.features.features.cta': 'CTA butonları',
    
    // Showcase Loading
    'showcase.loading.title': 'Yükleme Durumları',
    'showcase.loading.description': 'Kullanıcı deneyimini iyileştiren smooth loading animasyonları',
    'showcase.loading.badge': 'Smooth',
    'showcase.loading.features.sizes': 'Farklı boyutlar',
    'showcase.loading.features.messages': 'Özel mesajlar',
    'showcase.loading.features.theme': 'Tema uyumlu',
    
    // Showcase Forms
    'showcase.forms.title': 'İnteraktif Formlar',
    'showcase.forms.description': 'Gelişmiş form bileşenleri ve multi-step wizard örnekleri',
    'showcase.forms.badge': 'Core',
    'showcase.forms.features.wizard': 'Multi-step wizard',
    'showcase.forms.features.validation': 'Gerçek zamanlı validasyon',
    'showcase.forms.features.inputs': 'Gelişmiş input\'lar',
    
    // Showcase Widgets
    'showcase.widgets.title': 'Dashboard Widgets',
    'showcase.widgets.description': 'Modern ve interaktif dashboard widget bileşenleri',
    'showcase.widgets.badge': 'Pro',
    'showcase.widgets.features.kpi': 'KPI kartları',
    'showcase.widgets.features.realtime': 'Real-time data',
    'showcase.widgets.features.charts': 'Interactive charts',
    
    // Showcase Gallery
    'showcase.gallery.title': 'Modern Gallery',
    'showcase.gallery.description': 'Çok medyalı galeri bileşenleri ve interaktif görüntüleme',
    'showcase.gallery.badge': 'Media',
    'showcase.gallery.features.view': 'Grid/List view',
    'showcase.gallery.features.filter': 'Filter & search',
    'showcase.gallery.features.preview': 'Media preview',
    
    // Showcase Animations
    'showcase.animations.title': 'Animation Showcase',
    'showcase.animations.description': 'Etkileyici CSS animasyonları ve interaktif efektler',
    'showcase.animations.badge': 'Animated',
    'showcase.animations.features.hover': 'Hover effects',
    'showcase.animations.features.loading': 'Loading animations',
    'showcase.animations.features.interactive': 'Interactive elements',
    
    // Showcase Unique
    'showcase.unique.title': 'Benzersiz Komponentler',
    'showcase.unique.description': 'Piyasada benzeri bulunmayan şık ve modern UI komponentleri',
    'showcase.unique.badge': 'Exclusive',
    'showcase.unique.features.glassmorphism': 'Glassmorphism',
    'showcase.unique.features.holographic': 'Holographic effects',
    'showcase.unique.features.quantum': 'Quantum loaders',
    
    // Users
    'users.pageTitle': 'Kullanıcılar',
    'users.metaDescription': 'Kullanıcı yönetimi ve rol atama örnek sayfası.',
    'users.title': 'Kullanıcılar',
    'users.subtitle': 'Kullanıcı listesi ve rolleri',
    
    // Roles
    'roles.pageTitle': 'Roller',
    'roles.metaDescription': 'Rol ve izinlerin listelendiği örnek sayfa.',
    'roles.title': 'Roller',
    'roles.subtitle': 'Roller ve izinler',
    
    // Tables
    'tables.pageTitle': 'Tablolar',
    'tables.metaDescription': 'Filtreleme ve arama destekli tablo örneği.',
    'tables.title': 'Tablolar',
    'tables.subtitle': 'Arama ve filtreleme destekli tablo örneği',
    'tables.members': 'Üyeler',
    'tables.searchPlaceholder': 'Ara...',
    'tables.totalRecords': 'Toplam {count} kayıt',
    'tables.columns.id': 'ID',
    'tables.columns.name': 'Ad',
    'tables.columns.email': 'E-posta',
    'tables.columns.role': 'Rol',
    'tables.columns.status': 'Durum',
    
    // App
    'app.title': 'React19 Admin',
    'app.freeTemplate': 'Ücretsiz Şablon',
    'app.free': 'Ücretsiz',
    'app.allFeaturesAccess': 'Tüm özelliklere erişim',

  },
  en: {
    // General
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.warning': 'Warning',
    'common.info': 'Info',
    
    // Navigation
    'nav.dashboard': 'Dashboard',
    'nav.analytics': 'Analytics',
    'nav.tables': 'Tables',
    'nav.forms': 'Forms Wizard',
    'nav.users': 'Users',
    'nav.roles': 'Roles',
    'nav.profile': 'Profile',
    'nav.notifications': 'Notifications',
    'nav.settings': 'Settings',
    'nav.showcase': 'Component Showcase',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.getStarted': 'Get Started',
    'nav.guide': 'Guide',
    'nav.mainMenu': 'Main Menu',
    'nav.auth': 'Auth',
    'nav.logout': 'Logout',
    'nav.pro': 'Pro',
    'nav.beta': 'Beta',
    
    // Settings
    'settings.general': 'General',
    'settings.profile': 'Profile',
    'settings.notifications': 'Notifications',
    'settings.security': 'Security',
    'settings.appearance': 'Appearance',
    'settings.advanced': 'Advanced',
    'settings.appName': 'Application Name',
    'settings.language': 'Language',
    'settings.timezone': 'Timezone',
    'settings.theme': 'Theme',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'settings.system': 'System',
    'settings.colorScheme': 'Color Scheme',
    'settings.fontSize': 'Font Size',
    'settings.small': 'Small',
    'settings.medium': 'Medium',
    'settings.large': 'Large',
    'settings.blue': 'Blue',
    'settings.green': 'Green',
    'settings.purple': 'Purple',
    'settings.red': 'Red',
    
    // Theme and Search
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    'theme.system': 'System',
    'search.placeholder': 'Search...',
    
    // Profile
    'profile.personalInfo': 'Personal Information',
    'profile.contactInfo': 'Contact Information',
    'profile.skills': 'Skills & Certifications',
    'profile.activities': 'Recent Activities',
    'profile.editProfile': 'Edit Profile',
    'profile.fullName': 'Full Name',
    'profile.email': 'Email',
    'profile.phone': 'Phone',
    'profile.location': 'Location',
    'profile.bio': 'Bio',
    
    // Analytics
    'analytics.overview': 'Overview',
    'analytics.visitors': 'Visitors',
    'analytics.revenue': 'Revenue',
    'analytics.conversion': 'Conversion',
    'analytics.topPages': 'Top Pages',
    'analytics.deviceDistribution': 'Device Distribution',
    'analytics.trafficSources': 'Traffic Sources',
    'analytics.title': 'Analytics',
    'analytics.subtitle': 'Detailed performance analysis and reports',
    'analytics.duration': 'Duration',
    'analytics.7days': '7 days',
    'analytics.30days': '30 days',
    'analytics.90days': '90 days',
    'analytics.1year': '1 year',
    'analytics.filter': 'Filter',
    'analytics.downloadReport': 'Download Report',
    'analytics.totalVisitors': 'Total Visitors',
    'analytics.pageViews': 'Page Views',
    'analytics.conversionRate': 'Conversion Rate',
    'analytics.avgSession': 'Avg Session',
    'analytics.visitorTrend': 'Visitor Trend',
    'analytics.revenueAnalysis': 'Revenue Analysis',
    'analytics.mobile': 'Mobile',
    'analytics.desktop': 'Desktop',
    'analytics.tablet': 'Tablet',
    'analytics.homepage': 'Homepage',
    'analytics.products': 'Products',
    'analytics.about': 'About',
    'analytics.contact': 'Contact',
    'analytics.views': 'views',
    'analytics.bounce': 'Bounce',
    'analytics.pageTitle': 'Analytics',
    'analytics.metaDescription': 'Detailed analytics reports and performance metrics.',
    'analytics.jan': 'Jan',
    'analytics.feb': 'Feb',
    'analytics.mar': 'Mar',
    'analytics.apr': 'Apr',
    'analytics.may': 'May',
    'analytics.jun': 'Jun',
    'profile.company': 'Company',
    'profile.position': 'Position',
    'profile.department': 'Department',
    'profile.website': 'Website',
    'profile.pageTitle': 'Profile',
    'profile.metaDescription': 'User profile information and activity history.',
    'profile.title': 'Profile',
    'profile.subtitle': 'Personal information and account settings',
    'profile.avatar.alt': 'Profile',
    'profile.avatar.fallback': 'AY',
    'profile.cameraButton.aria': 'Take photo',
    'profile.name': 'Samet UCA',
    'profile.status': 'Active',
    'profile.joinDate': 'Joined: January 2023',
    'profile.editButton': 'Edit Profile',
    'profile.tabs.general': 'General',
    'profile.tabs.skills': 'Skills',
    'profile.tabs.activity': 'Activity',
    'profile.tabs.settings': 'Settings',
    'profile.activities.login': 'Logged into system',
    'profile.activities.update': 'Profile information updated',
    'profile.activities.file': 'New report uploaded',
    'profile.activities.user': 'New user added',
    'profile.activities.2minutesAgo': '2 minutes ago',
    'profile.activities.1hourAgo': '1 hour ago',
    'profile.activities.3hoursAgo': '3 hours ago',
    'profile.activities.1dayAgo': '1 day ago',
    
    // Notifications
    'notifications.all': 'All',
    'notifications.unread': 'Unread',
    'notifications.read': 'Read',
    'notifications.markAllRead': 'Mark All as Read',
    'notifications.clearAll': 'Clear All',
    'notifications.noNotifications': 'No notifications found',
    'notifications.last24Hours': 'Last 24 Hours',
    'notifications.last7Days': 'Last 7 Days',
    'notifications.last30Days': 'Last 30 Days',
    

    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.totalUsers': 'Total Users',
    'dashboard.totalRevenue': 'Total Revenue',
    'dashboard.activeProjects': 'Active Projects',
    'dashboard.pendingTasks': 'Pending Tasks',
    'dashboard.last30Days': 'Last 30 days',
    'dashboard.thisMonth': 'This month',
    'dashboard.ongoing': 'Ongoing',
    'dashboard.pending': 'Pending',
    'dashboard.newUserRegistered': 'Registered new user',
    'dashboard.projectUpdated': 'Updated project',
    'dashboard.reportCreated': 'Created report',
    'dashboard.systemErrorReported': 'Reported system error',
    'dashboard.2minutesAgo': '2 minutes ago',
    'dashboard.15minutesAgo': '15 minutes ago',
    'dashboard.1hourAgo': '1 hour ago',
    'dashboard.3hoursAgo': '3 hours ago',
    'dashboard.addNewUser': 'Add New User',
    'dashboard.createReport': 'Create Report',
    'dashboard.startProject': 'Start Project',
    'dashboard.scheduleMeeting': 'Schedule Meeting',
    'dashboard.recentActivities': 'Recent Activities',
    'dashboard.systemRecentOperations': 'Recent operations in the system',
    'dashboard.quickActions': 'Quick Actions',
    'dashboard.frequentlyUsedOperations': 'Frequently used operations',
    'dashboard.projectStatus': 'Project Status',
    'dashboard.activeProjectsGeneralStatus': 'General status of active projects',
    'dashboard.ecommerceSite': 'E-commerce Site',
    'dashboard.mobileApp': 'Mobile App',
    'dashboard.adminPanel': 'Admin Panel',
    'dashboard.systemStatus': 'System Status',
    'dashboard.serverAndServiceStatus': 'Server and service statuses',
    'dashboard.webServer': 'Web Server',
    'dashboard.database': 'Database',
    'dashboard.apiService': 'API Service',
    'dashboard.emailService': 'Email Service',
    'dashboard.running': 'Running',
    'dashboard.error': 'Error',
    'dashboard.projectOverview': 'View the general status and important metrics of your project',
    'dashboard.pageTitle': 'Dashboard - React19 Admin',
    'dashboard.metaDescription': 'Main dashboard page',
    'dashboard.uniqueComponents.title': 'Unique Components',
    'dashboard.uniqueComponents.description': 'Create difference with unique, elegant and modern UI components that are unmatched in the market',
    'dashboard.uniqueComponents.glassmorphism.title': 'Glassmorphism Card',
    'dashboard.uniqueComponents.glassmorphism.description': 'Modern look with transparent glass effect',
    'dashboard.uniqueComponents.glassmorphism.content': 'Impressive cards with glassmorphism design trend',
    'dashboard.uniqueComponents.holographic.title': 'Holographic Card',
    'dashboard.uniqueComponents.holographic.description': 'Future design with 3D holographic effect',
    'dashboard.uniqueComponents.holographic.content': 'Impressive appearance with holographic effects',
    'dashboard.uniqueComponents.quantum.title': 'Quantum Loader',
    'dashboard.uniqueComponents.quantum.description': 'Loading animation inspired by quantum physics',
    'dashboard.uniqueComponents.viewAll': 'View All Components',
    
    // Showcase
    'showcase.pageTitle': 'Component Showcase - CodeMaze Admin',
    'showcase.metaDescription': 'Main page showcasing modern and impressive UI components',
    'showcase.mainTitle': 'Component Showcase',
    'showcase.mainDescription': 'Empower your admin panels with modern, impressive and user-friendly UI components',
    'showcase.categories.title': 'Component Categories',
    'showcase.categories.count': '{count} Categories Available',
    'showcase.keyFeatures.title': 'Key Features',
    'showcase.viewButton': 'View',
    'showcase.cta.title': 'Create Impressive Admin Panels',
    'showcase.cta.description': 'Take your admin panels to the next level with modern design, high performance and user-friendly interface',
    'showcase.cta.primaryButton': 'Get Started',
    'showcase.cta.secondaryButton': 'More Examples',
    
    // Showcase Stats
    'showcase.stats.title': 'Statistics Cards',
    'showcase.stats.description': 'Impressive statistics cards with animated counters and trend indicators',
    'showcase.stats.badge': 'Animated',
    'showcase.stats.features.counter': 'Counter animations',
    'showcase.stats.features.trend': 'Trend indicators',
    'showcase.stats.features.gradient': 'Gradient support',
    
    // Showcase Tables
    'showcase.tables.title': 'Data Tables',
    'showcase.tables.description': 'Advanced data tables with powerful search, filtering and sorting features',
    'showcase.tables.badge': 'Full Featured',
    'showcase.tables.features.search': 'Search & Filtering',
    'showcase.tables.features.sort': 'Sorting',
    'showcase.tables.features.export': 'Export feature',
    
    // Showcase Activity
    'showcase.activity.title': 'Activity Feeds',
    'showcase.activity.description': 'Track real-time user activities and system events',
    'showcase.activity.badge': 'Live',
    'showcase.activity.features.realtime': 'Real-time',
    'showcase.activity.features.categories': 'Type categories',
    'showcase.activity.features.avatar': 'Avatar support',
    
    // Showcase Charts
    'showcase.charts.title': 'Metric Charts',
    'showcase.charts.description': 'Powerful and flexible chart components for visualizing your data',
    'showcase.charts.badge': 'Interactive',
    'showcase.charts.features.hover': 'Hover interaction',
    'showcase.charts.features.loading': 'Animated loading',
    'showcase.charts.features.trend': 'Trend analysis',
    
    // Showcase Features
    'showcase.features.title': 'Feature Cards',
    'showcase.features.description': 'Modern card designs that effectively showcase your product features',
    'showcase.features.badge': 'Showcase',
    'showcase.features.features.hover': 'Hover animations',
    'showcase.features.features.icons': 'Icon integration',
    'showcase.features.features.cta': 'CTA buttons',
    
    // Showcase Loading
    'showcase.loading.title': 'Loading States',
    'showcase.loading.description': 'Smooth loading animations that improve user experience',
    'showcase.loading.badge': 'Smooth',
    'showcase.loading.features.sizes': 'Different sizes',
    'showcase.loading.features.messages': 'Custom messages',
    'showcase.loading.features.theme': 'Theme compatible',
    
    // Showcase Forms
    'showcase.forms.title': 'Interactive Forms',
    'showcase.forms.description': 'Advanced form components and multi-step wizard examples',
    'showcase.forms.badge': 'Core',
    'showcase.forms.features.wizard': 'Multi-step wizard',
    'showcase.forms.features.validation': 'Real-time validation',
    'showcase.forms.features.inputs': 'Advanced inputs',
    
    // Showcase Widgets
    'showcase.widgets.title': 'Dashboard Widgets',
    'showcase.widgets.description': 'Modern and interactive dashboard widget components',
    'showcase.widgets.badge': 'Pro',
    'showcase.widgets.features.kpi': 'KPI cards',
    'showcase.widgets.features.realtime': 'Real-time data',
    'showcase.widgets.features.charts': 'Interactive charts',
    
    // Showcase Gallery
    'showcase.gallery.title': 'Modern Gallery',
    'showcase.gallery.description': 'Multi-media gallery components and interactive viewing',
    'showcase.gallery.badge': 'Media',
    'showcase.gallery.features.view': 'Grid/List view',
    'showcase.gallery.features.filter': 'Filter & search',
    'showcase.gallery.features.preview': 'Media preview',
    
    // Showcase Animations
    'showcase.animations.title': 'Animation Showcase',
    'showcase.animations.description': 'Impressive CSS animations and interactive effects',
    'showcase.animations.badge': 'Animated',
    'showcase.animations.features.hover': 'Hover effects',
    'showcase.animations.features.loading': 'Loading animations',
    'showcase.animations.features.interactive': 'Interactive elements',
    
    // Showcase Unique
    'showcase.unique.title': 'Unique Components',
    'showcase.unique.description': 'Elegant and modern UI components that are unique in the market',
    'showcase.unique.badge': 'Exclusive',
    'showcase.unique.features.glassmorphism': 'Glassmorphism',
    'showcase.unique.features.holographic': 'Holographic effects',
    'showcase.unique.features.quantum': 'Quantum loaders',
    
    // Users
    'users.pageTitle': 'Users',
    'users.metaDescription': 'User management and role assignment example page.',
    'users.title': 'Users',
    'users.subtitle': 'User list and roles',
    
    // Roles
    'roles.pageTitle': 'Roles',
    'roles.metaDescription': 'Example page listing roles and permissions.',
    'roles.title': 'Roles',
    'roles.subtitle': 'Roles and permissions',
    
    // Tables
    'tables.pageTitle': 'Tables',
    'tables.metaDescription': 'Table example with filtering and search support.',
    'tables.title': 'Tables',
    'tables.subtitle': 'Table example with search and filtering support',
    'tables.members': 'Members',
    'tables.searchPlaceholder': 'Search...',
    'tables.totalRecords': 'Total {count} records',
    'tables.columns.id': 'ID',
    'tables.columns.name': 'Name',
    'tables.columns.email': 'Email',
    'tables.columns.role': 'Role',
    'tables.columns.status': 'Status',
    
    // App
    'app.title': 'React19 Admin',
    'app.freeTemplate': 'Free Template',
    'app.free': 'Free',
    'app.allFeaturesAccess': 'All features access',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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