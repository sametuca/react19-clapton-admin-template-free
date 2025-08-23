import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Mail, 
  Lock, 
  Building, 
  CreditCard, 
  Settings,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Star,
  Heart,
  Sparkles
} from "lucide-react";

export default function InteractiveForms() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Company Info
    company: "",
    position: "",
    industry: "",
    // Preferences
    notifications: true,
    newsletter: false,
    plan: "pro",
    budget: [5000],
    features: [] as string[],
    // Rating
    satisfaction: 0,
    recommendation: 0
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature) 
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const StarRating = ({ value, onChange, label }: { value: number; onChange: (value: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`p-1 rounded-full transition-colors ${
              star <= value ? 'text-yellow-500' : 'text-muted-foreground hover:text-yellow-300'
            }`}
          >
            <Star className={`h-6 w-6 ${star <= value ? 'fill-current' : ''}`} />
          </button>
        ))}
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <User className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Kişisel Bilgiler</h3>
              <p className="text-muted-foreground">Size özel deneyim sunabilmemiz için temel bilgilerinizi paylaşın</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">Ad</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  placeholder="Adınızı girin"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Soyad</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  placeholder="Soyadınızı girin"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="email@ornek.com"
                    className="pl-10 transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+90 555 123 45 67"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Building className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Şirket Bilgileri</h3>
              <p className="text-muted-foreground">İş alanınız hakkında bilgi verin</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Şirket Adı</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Şirket adınızı girin"
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Pozisyon</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
                  placeholder="CEO, CTO, Developer vb."
                  className="transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Sektör</Label>
                <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sektörünüzü seçin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Teknoloji</SelectItem>
                    <SelectItem value="finance">Finans</SelectItem>
                    <SelectItem value="healthcare">Sağlık</SelectItem>
                    <SelectItem value="education">Eğitim</SelectItem>
                    <SelectItem value="retail">Perakende</SelectItem>
                    <SelectItem value="manufacturing">İmalat</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Bütçe Aralığı (Aylık - USD)</Label>
                <div className="px-2">
                  <Slider
                    value={formData.budget}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                    max={20000}
                    min={1000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$1,000</span>
                    <span className="font-medium text-primary">${formData.budget[0].toLocaleString()}</span>
                    <span>$20,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Settings className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Tercihler & Özellikler</h3>
              <p className="text-muted-foreground">Size uygun özellikleri seçin</p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Plan Seçimi</h4>
                <RadioGroup value={formData.plan} onValueChange={(value) => setFormData(prev => ({ ...prev, plan: value }))}>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      { id: 'basic', title: 'Başlangıç', price: '$29', features: ['5 Kullanıcı', 'Temel Raporlar'] },
                      { id: 'pro', title: 'Profesyonel', price: '$79', features: ['25 Kullanıcı', 'Gelişmiş Raporlar', 'API Erişimi'] },
                      { id: 'enterprise', title: 'Kurumsal', price: '$199', features: ['Sınırsız Kullanıcı', 'Özel Entegrasyonlar', '7/24 Destek'] }
                    ].map((plan) => (
                      <div key={plan.id} className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.plan === plan.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'}`}>
                        <RadioGroupItem value={plan.id} id={plan.id} className="sr-only" />
                        <label htmlFor={plan.id} className="cursor-pointer">
                          <div className="text-center space-y-2">
                            <h5 className="font-semibold">{plan.title}</h5>
                            <div className="text-2xl font-bold text-primary">{plan.price}</div>
                            <div className="space-y-1">
                              {plan.features.map((feature, idx) => (
                                <div key={idx} className="text-sm text-muted-foreground">{feature}</div>
                              ))}
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-lg font-medium">İstediğiniz Özellikler</h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    'Dashboard & Analytics',
                    'Kullanıcı Yönetimi',
                    'Rapor Oluşturma',
                    'API Entegrasyonu',
                    'Mobil Uygulama',
                    'Özel Tema Desteği'
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={() => handleFeatureToggle(feature)}
                      />
                      <Label htmlFor={feature} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-lg font-medium">Bildirim Tercihleri</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="notifications" className="text-sm font-medium">
                      E-posta Bildirimleri
                    </Label>
                    <Switch
                      id="notifications"
                      checked={formData.notifications}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, notifications: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsletter" className="text-sm font-medium">
                      Haber Bülteni
                    </Label>
                    <Switch
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, newsletter: checked }))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <CheckCircle className="h-12 w-12 mx-auto text-green-500" />
              <h3 className="text-2xl font-semibold">Geri Bildirim & Tamamlama</h3>
              <p className="text-muted-foreground">Deneyiminizi değerlendirin</p>
            </div>
            
            <div className="space-y-6">
              <StarRating 
                value={formData.satisfaction}
                onChange={(value) => setFormData(prev => ({ ...prev, satisfaction: value }))}
                label="Bu formu doldurmaktan ne kadar memnun kaldınız?"
              />
              
              <StarRating 
                value={formData.recommendation}
                onChange={(value) => setFormData(prev => ({ ...prev, recommendation: value }))}
                label="Bu sistemi arkadaşlarınıza tavsiye eder misiniz?"
              />

              <div className="space-y-2">
                <Label htmlFor="feedback">Ek Yorumlarınız</Label>
                <Textarea
                  id="feedback"
                  placeholder="Önerilerinizi, geri bildirimlerinizi paylaşın..."
                  className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Form Özeti
                </h4>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ad Soyad:</span>
                    <span>{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">E-posta:</span>
                    <span>{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Şirket:</span>
                    <span>{formData.company || 'Belirtilmedi'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan:</span>
                    <Badge variant="secondary">{formData.plan}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seçilen Özellikler:</span>
                    <span>{formData.features.length} özellik</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>İnteraktif Formlar - CodeMaze Admin</title>
        <meta name="description" content="Gelişmiş form bileşenleri ve multi-step wizard örnekleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            İnteraktif Formlar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kullanıcı dostu ve etkileyici form deneyimleri oluşturun
          </p>
        </div>

        <Tabs defaultValue="wizard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="wizard">Multi-Step Wizard</TabsTrigger>
            <TabsTrigger value="advanced">Gelişmiş Form Elements</TabsTrigger>
            <TabsTrigger value="validation">Gerçek Zamanlı Validasyon</TabsTrigger>
          </TabsList>

          <TabsContent value="wizard" className="space-y-6">
            <Card className="max-w-3xl mx-auto">
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle>Kullanıcı Kayıt Sihirbazı</CardTitle>
                    <Badge variant="outline">Adım {currentStep}/{totalSteps}</Badge>
                  </div>
                  <Progress value={progress} className="w-full" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {renderStepContent()}
                
                <div className="flex justify-between pt-6">
                  <Button 
                    variant="outline" 
                    onClick={prevStep} 
                    disabled={currentStep === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Önceki
                  </Button>
                  
                  {currentStep < totalSteps ? (
                    <Button onClick={nextStep} className="flex items-center gap-2">
                      Sonraki
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4" />
                      Tamamla
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Gelişmiş Input Çeşitleri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Kredi Kartı</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="**** **** **** 1234" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Güvenlik Kodu</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input type="password" placeholder="••••" className="pl-10" maxLength={4} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Deneyim Seviyesi</Label>
                    <Slider defaultValue={[3]} max={5} min={1} step={1} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Başlangıç</span>
                      <span>Uzman</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Seçim Bileşenleri</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Label>Favori Renkler</Label>
                    {['Mavi', 'Yeşil', 'Kırmızı', 'Mor'].map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox id={color} />
                        <Label htmlFor={color}>{color}</Label>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Öncelik Seviyesi</Label>
                    <RadioGroup defaultValue="medium">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="low" id="low" />
                        <Label htmlFor="low">Düşük</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">Orta</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="high" id="high" />
                        <Label htmlFor="high">Yüksek</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="validation" className="space-y-6">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Gerçek Zamanlı Validasyon</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>E-posta Adresi</Label>
                  <Input type="email" placeholder="ornek@email.com" />
                  <p className="text-xs text-green-600">✓ Geçerli e-posta formatı</p>
                </div>
                
                <div className="space-y-2">
                  <Label>Güçlü Şifre</Label>
                  <Input type="password" placeholder="En az 8 karakter" />
                  <div className="space-y-1">
                    <p className="text-xs text-green-600">✓ En az 8 karakter</p>
                    <p className="text-xs text-green-600">✓ Büyük harf içeriyor</p>
                    <p className="text-xs text-red-600">✗ Özel karakter gerekli</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Kullanıcı Adı</Label>
                  <Input placeholder="kullanici_adi" />
                  <p className="text-xs text-green-600">✓ Bu kullanıcı adı müsait</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}