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
    // Genel
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
    'nav.login': 'Giriş Yap',
    'nav.register': 'Kayıt Ol',
    
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
    
    // Dashboard
    'dashboard.welcome': 'Hoş Geldin',
    'dashboard.totalUsers': 'Toplam Kullanıcı',
    'dashboard.totalRevenue': 'Toplam Gelir',
    'dashboard.activeProjects': 'Aktif Projeler',
    'dashboard.pendingTasks': 'Bekleyen Görevler',
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
    'nav.login': 'Login',
    'nav.register': 'Register',
    
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
    'profile.company': 'Company',
    'profile.position': 'Position',
    'profile.department': 'Department',
    'profile.website': 'Website',
    
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
    
    // Analytics
    'analytics.overview': 'Overview',
    'analytics.visitors': 'Visitors',
    'analytics.revenue': 'Revenue',
    'analytics.conversion': 'Conversion',
    'analytics.topPages': 'Top Pages',
    'analytics.deviceDistribution': 'Device Distribution',
    'analytics.trafficSources': 'Traffic Sources',
    
    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.totalUsers': 'Total Users',
    'dashboard.totalRevenue': 'Total Revenue',
    'dashboard.activeProjects': 'Active Projects',
    'dashboard.pendingTasks': 'Pending Tasks',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'tr';
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