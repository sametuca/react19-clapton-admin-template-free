import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
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
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  FileText, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Building, 
  CreditCard, 
  Calendar as CalendarIcon,
  Clock,
  Star,
  Heart,
  Eye,
  EyeOff,
  Check,
  X,
  Plus,
  Minus,
  Search,
  Filter,
  Upload,
  Download,
  Save,
  Edit,
  Trash2,
  Settings,
  Shield,
  Globe,
  MapPin,
  Camera,
  Image,
  Video,
  Music,
  Palette,
  Code,
  Database,
  Zap,
  Target,
  Award,
  Crown,
  Sparkles,
  Pause
} from "lucide-react";
import { format } from "date-fns";

export default function FormComponents() {
  const { t } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
  const [radioValue, setRadioValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [rating, setRating] = useState(0);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setCheckboxValues(prev => [...prev, value]);
    } else {
      setCheckboxValues(prev => prev.filter(v => v !== value));
    }
  };

  const StarRating = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => (
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
          <Star className={`h-5 w-5 ${star <= value ? 'fill-current' : ''}`} />
        </button>
      ))}
    </div>
  );

  const FileUpload = () => {
    const [dragActive, setDragActive] = useState(false);
    
    return (
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
          dragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
        }}
      >
        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">Dosya Yükle</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Dosyaları buraya sürükleyin veya tıklayarak seçin
        </p>
        <Button variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Dosya Seç
        </Button>
      </div>
    );
  };

  const ColorPicker = () => {
    const colors = [
      "#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16", "#22c55e",
      "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1",
      "#8b5cf6", "#a855f7", "#d946ef", "#ec4899", "#f43f5e", "#64748b"
    ];
    
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-lg border-2 border-white shadow-lg"
            style={{ backgroundColor: selectedColor }}
          />
          <div>
            <p className="font-medium">Seçili Renk</p>
            <p className="text-sm text-muted-foreground">{selectedColor}</p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-lg border-2 transition-all duration-200 hover:scale-110 ${
                selectedColor === color ? 'border-white shadow-lg scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
  };

  const TagInput = () => {
    const [tags, setTags] = useState<string[]>(["React", "TypeScript", "Tailwind"]);
    const [inputValue, setInputValue] = useState("");

    const addTag = () => {
      if (inputValue.trim() && !tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
        setInputValue("");
      }
    };

    const removeTag = (tagToRemove: string) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
      <div className="space-y-3">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Etiket ekle..."
            onKeyPress={(e) => e.key === 'Enter' && addTag()}
          />
          <Button onClick={addTag} size="sm">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              {tag}
              <button onClick={() => removeTag(tag)} className="ml-1 hover:text-destructive">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Form Komponentleri - React19 Admin</title>
        <meta name="description" content="Gelişmiş form komponentleri ve input örnekleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Form Komponentleri
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Modern ve kullanıcı dostu form komponentleri ile veri toplama deneyimini geliştirin
          </p>
        </div>

        {/* Basic Form Elements */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Temel Form Elemanları</h2>
            <Badge variant="secondary">Standart</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Metin Girişleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="Adınızı girin" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="email@example.com" className="pl-10" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="pl-10 pr-10" 
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-10 px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Seçim Komponentleri
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Kategori Seçin</Label>
                  <Select value={selectValue} onValueChange={setSelectValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Kategori seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Teknoloji</SelectItem>
                      <SelectItem value="design">Tasarım</SelectItem>
                      <SelectItem value="business">İş</SelectItem>
                      <SelectItem value="education">Eğitim</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Tercihler</Label>
                  <div className="space-y-2">
                    {["Bildirimler", "E-posta", "SMS"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={checkboxValues.includes(option)}
                          onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                        />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Öncelik Seviyesi</Label>
                  <RadioGroup value={radioValue} onValueChange={setRadioValue}>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  Tarih ve Zaman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Tarih Seçin</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Tarih seçin"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Saat Seçin</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Saat" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Dakika" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 60 }, (_, i) => (
                          <SelectItem key={i} value={i.toString().padStart(2, '0')}>
                            {i.toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advanced Form Components */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Gelişmiş Form Komponentleri</h2>
            <Badge variant="default">Premium</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Değerlendirme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Ürün Puanı</Label>
                  <StarRating value={rating} onChange={setRating} />
                  <p className="text-sm text-muted-foreground">
                    {rating > 0 ? `${rating} yıldız seçildi` : "Puan verin"}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Memnuniyet Seviyesi</Label>
                  <Slider
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Çok Kötü</span>
                    <span className="font-medium text-primary">{sliderValue[0]}%</span>
                    <span>Mükemmel</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Dosya Yükleme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Renk Seçici
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ColorPicker />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Etiket Girişi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TagInput />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Anahtar/Değer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="notifications">Bildirimler</Label>
                  <Switch
                    id="notifications"
                    checked={switchValue}
                    onCheckedChange={setSwitchValue}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="darkmode">Koyu Tema</Label>
                  <Switch id="darkmode" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="analytics">Analitik</Label>
                  <Switch id="analytics" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Hedef Belirleme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Aylık Hedef</Label>
                  <div className="relative">
                    <Input type="number" placeholder="50000" className="pr-12" />
                    <span className="absolute right-3 top-3 text-sm text-muted-foreground">₺</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>İlerleme</Label>
                  <Progress value={75} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₺37,500</span>
                    <span>75%</span>
                    <span>₺50,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Validation Examples */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Form Doğrulama</h2>
            <Badge variant="outline">Validation</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Gerçek Zamanlı Doğrulama</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Kullanıcı Adı</Label>
                  <Input id="username" placeholder="kullanici_adi" />
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-green-600">Kullanılabilir</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-validation">E-posta</Label>
                  <Input id="email-validation" type="email" placeholder="email@domain.com" />
                  <div className="flex items-center gap-2 text-sm">
                    <X className="h-4 w-4 text-red-500" />
                    <span className="text-red-600">Geçerli bir e-posta adresi girin</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone-validation">Telefon</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="phone-validation" placeholder="+90 (5XX) XXX XX XX" className="pl-10" />
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-green-600">Geçerli format</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Şifre Güvenlik Kontrolü</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="secure-password">Güvenli Şifre</Label>
                  <Input id="secure-password" type="password" placeholder="Güvenli şifre oluşturun" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Şifre Gücü</span>
                    <Badge variant="secondary">Orta</Badge>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">En az 8 karakter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">Büyük harf içeriyor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="h-3 w-3 text-red-500" />
                    <span className="text-red-600">Özel karakter gerekli</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <X className="h-3 w-3 text-red-500" />
                    <span className="text-red-600">Rakam gerekli</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rich Text and Media */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Zengin İçerik</h2>
            <Badge variant="default">Medya</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Zengin Metin Editörü
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg">
                  <div className="flex items-center gap-2 p-2 border-b bg-muted/50">
                    <Button variant="ghost" size="sm">
                      <strong>B</strong>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <em>I</em>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <u>U</u>
                    </Button>
                    <Separator orientation="vertical" className="h-6" />
                    <Button variant="ghost" size="sm">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Code className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea 
                    placeholder="Zengin metin içeriğinizi buraya yazın..." 
                    className="min-h-[120px] border-0 resize-none focus-visible:ring-0"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Medya Yükleme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Image className="h-6 w-6" />
                    <span className="text-xs">Resim</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Video className="h-6 w-6" />
                    <span className="text-xs">Video</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Music className="h-6 w-6" />
                    <span className="text-xs">Ses</span>
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Yükleme İlerlemesi</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Pause className="h-4 w-4 mr-1" />
                    Duraklat
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <X className="h-4 w-4 mr-1" />
                    İptal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Layout Examples */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Form Düzenleri</h2>
            <Badge variant="secondary">Layout</Badge>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Çok Sütunlu Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Ad</Label>
                      <Input id="first-name" placeholder="Adınız" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Soyad</Label>
                      <Input id="last-name" placeholder="Soyadınız" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company-email">Şirket E-postası</Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="company-email" placeholder="email@sirket.com" className="pl-10" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="position">Pozisyon</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pozisyon seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer">Geliştirici</SelectItem>
                          <SelectItem value="designer">Tasarımcı</SelectItem>
                          <SelectItem value="manager">Yönetici</SelectItem>
                          <SelectItem value="analyst">Analist</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Deneyim (Yıl)</Label>
                      <Input id="experience" type="number" placeholder="5" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Hakkınızda</Label>
                    <Textarea id="bio" placeholder="Kendinizi tanıtın..." rows={3} />
                  </div>
                  
                  <div className="flex gap-3">
                    <Button type="submit" className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Kaydet
                    </Button>
                    <Button type="button" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Önizle
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kart Bilgileri Formu</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Kart Numarası</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="card-number" 
                        placeholder="1234 5678 9012 3456" 
                        className="pl-10"
                        maxLength={19}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Son Kullanma</Label>
                      <Input id="expiry" placeholder="MM/YY" maxLength={5} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input id="cvv" type="password" placeholder="123" className="pl-10" maxLength={4} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardholder">Kart Sahibi</Label>
                    <Input id="cardholder" placeholder="AD SOYAD" />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="save-card" />
                    <Label htmlFor="save-card" className="text-sm">
                      Kart bilgilerini güvenli şekilde kaydet
                    </Label>
                  </div>
                  
                  <Button className="w-full">
                    <Shield className="h-4 w-4 mr-2" />
                    Güvenli Ödeme Yap
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  Doğrulama
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Gerçek zamanlı form doğrulama ve hata mesajları
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  Otomatik Kaydet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Form verilerini otomatik olarak kaydetme özelliği
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-500" />
                  Çoklu Dil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Form etiketleri ve mesajları için dil desteği
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-orange-500" />
                  Güvenlik
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  CSRF koruması ve güvenli veri işleme
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}