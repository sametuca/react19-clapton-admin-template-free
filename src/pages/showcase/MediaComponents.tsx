import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  SkipForward, 
  SkipBack,
  Maximize,
  Minimize,
  RotateCcw,
  Download,
  Share2,
  Heart,
  Eye,
  Camera,
  Video,
  Music,
  Image,
  FileText,
  Upload,
  Trash2,
  Edit,
  Crop,
  Filter,
  Palette,
  Layers,
  Zap,
  Star,
  Crown,
  Sparkles,
  Globe,
  Users,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Bookmark,
  Flag,
  MoreHorizontal,
  Grid3X3,
  List,
  Search,
  SortAsc,
  SortDesc,
  Settings,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Loader2,
  RefreshCw,
  Save
} from "lucide-react";

export default function MediaComponents() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mediaItems = [
    {
      id: 1,
      type: "image",
      title: "Sunset Landscape",
      description: "Beautiful sunset over mountains",
      url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop",
      size: "2.4 MB",
      dimensions: "1920x1080",
      uploadDate: "2024-03-15",
      tags: ["nature", "sunset", "landscape"],
      likes: 234,
      views: 1567,
      author: "John Doe"
    },
    {
      id: 2,
      type: "video",
      title: "Product Demo",
      description: "Product demonstration video",
      url: "/api/placeholder/video",
      thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=150&fit=crop",
      size: "15.7 MB",
      duration: "2:34",
      uploadDate: "2024-03-14",
      tags: ["demo", "product", "tutorial"],
      likes: 456,
      views: 2890,
      author: "Jane Smith"
    },
    {
      id: 3,
      type: "audio",
      title: "Background Music",
      description: "Relaxing background music",
      url: "/api/placeholder/audio",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop",
      size: "8.2 MB",
      duration: "4:12",
      uploadDate: "2024-03-13",
      tags: ["music", "relaxing", "background"],
      likes: 189,
      views: 1234,
      author: "Mike Wilson"
    }
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return Image;
      case 'video': return Video;
      case 'audio': return Music;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'image': return 'text-blue-500';
      case 'video': return 'text-red-500';
      case 'audio': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const MediaPlayer = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="h-5 w-5" />
          Medya Oynatıcı
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
            >
              <source src="/api/placeholder/video" type="video/mp4" />
            </video>
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 space-y-3">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-sm">{formatTime(currentTime)}</span>
                  <Progress value={(currentTime / duration) * 100} className="flex-1 h-1" />
                  <span className="text-sm">{formatTime(duration)}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      {volume[0] > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </Button>
                    <div className="w-20">
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        min={0}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AspectRatio>
      </CardContent>
    </Card>
  );

  const ImageGallery = () => (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5" />
            Medya Galerisi
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {viewMode === 'grid' ? (
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div key={item.id} className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-300">
                  <AspectRatio ratio={4 / 3}>
                    <div className="relative w-full h-full">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <TypeIcon className={`h-3 w-3 ${getTypeColor(item.type)}`} />
                            {item.type}
                          </Badge>
                        </div>
                        
                        <div className="absolute top-2 right-2 flex gap-1">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="absolute bottom-2 left-2 right-2">
                          <h3 className="text-white font-medium text-sm mb-1">{item.title}</h3>
                          <div className="flex items-center justify-between text-white/80 text-xs">
                            <span>{item.author}</span>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                {item.views}
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                {item.likes}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                              onClick={() => setSelectedImage(item.url)}
                            >
                              <Play className="h-8 w-8" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </AspectRatio>
                  
                  <div className="p-3">
                    <h3 className="font-medium text-sm mb-1 truncate">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{item.size}</span>
                      <span>{item.uploadDate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            {mediaItems.map((item) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                    <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <TypeIcon className={`h-3 w-3 ${getTypeColor(item.type)}`} />
                            {item.type}
                          </div>
                          <span>{item.size}</span>
                          <span>{item.author}</span>
                          <span>{item.uploadDate}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );

  const AudioPlayer = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          Ses Oynatıcı
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="w-16 h-16 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop" 
              alt="Album cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-semibold">Relaxing Piano</h3>
            <p className="text-sm text-muted-foreground">Peaceful Sounds</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
              <Progress value={(currentTime / duration) * 100} className="flex-1 h-1" />
              <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => setIsPlaying(!isPlaying)}
            className="h-12 w-12 rounded-full"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              {volume[0] > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <div className="w-24">
              <Slider
                value={volume}
                onValueChange={setVolume}
                max={100}
                min={0}
                step={1}
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const FileUploader = () => {
    const [uploadedFiles, setUploadedFiles] = useState<Array<{name: string, size: string, progress: number}>>([]);
    const [dragActive, setDragActive] = useState(false);

    const simulateFileUpload = (fileName: string) => {
      const newFile = { name: fileName, size: "2.4 MB", progress: 0 };
      setUploadedFiles(prev => [...prev, newFile]);
      
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(file => 
            file.name === fileName && file.progress < 100
              ? { ...file, progress: file.progress + 10 }
              : file
          )
        );
      }, 200);
      
      setTimeout(() => clearInterval(interval), 2000);
    };

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5" />
            Dosya Yükleme
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
              simulateFileUpload("example-file.jpg");
            }}
          >
            <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">Dosyaları Buraya Sürükleyin</h3>
            <p className="text-sm text-muted-foreground mb-4">
              veya dosya seçmek için tıklayın
            </p>
            <Button onClick={() => simulateFileUpload("selected-file.png")}>
              <Upload className="h-4 w-4 mr-2" />
              Dosya Seç
            </Button>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium">Yüklenen Dosyalar</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <FileText className="h-8 w-8 text-blue-500" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm">{file.name}</span>
                      <span className="text-xs text-muted-foreground">{file.size}</span>
                    </div>
                    <div className="space-y-1">
                      <Progress value={file.progress} className="h-2" />
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{file.progress}% tamamlandı</span>
                        {file.progress === 100 && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="h-3 w-3" />
                            Tamamlandı
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const ImageEditor = () => {
    const [selectedTool, setSelectedTool] = useState("crop");
    const tools = [
      { id: "crop", label: "Kırp", icon: Crop },
      { id: "filter", label: "Filtre", icon: Filter },
      { id: "adjust", label: "Ayarla", icon: Settings },
      { id: "effects", label: "Efekt", icon: Sparkles }
    ];

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Resim Editörü
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 mb-4">
            {tools.map((tool) => (
              <Button
                key={tool.id}
                variant={selectedTool === tool.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTool(tool.id)}
                className="flex items-center gap-2"
              >
                <tool.icon className="h-4 w-4" />
                {tool.label}
              </Button>
            ))}
          </div>
          
          <AspectRatio ratio={16 / 9}>
            <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Editing"
                className="w-full h-full object-cover"
              />
              
              {/* Editing Overlay */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/50" />
              <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                {selectedTool === "crop" && "Kırpma Modu"}
                {selectedTool === "filter" && "Filtre Uygula"}
                {selectedTool === "adjust" && "Renk Ayarları"}
                {selectedTool === "effects" && "Efekt Ekle"}
              </div>
            </div>
          </AspectRatio>
          
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Geri Al
              </Button>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-1" />
                Önizle
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                İptal
              </Button>
              <Button size="sm">
                <Save className="h-4 w-4 mr-1" />
                Kaydet
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <Helmet>
        <title>Medya Komponentleri - React19 Admin</title>
        <meta name="description" content="Medya yönetimi ve oynatma komponentleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Medya Komponentleri
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Medya içeriklerini yönetmek ve görüntülemek için gelişmiş komponentler
          </p>
        </div>

        {/* Media Player */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold">Medya Oynatıcı</h2>
            <Badge variant="default">Video</Badge>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <MediaPlayer />
            <AudioPlayer />
          </div>
        </section>

        {/* Image Gallery */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold">Medya Galerisi</h2>
            <Badge variant="secondary">Gallery</Badge>
          </div>
          <ImageGallery />
        </section>

        {/* File Management */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-semibold">Dosya Yönetimi</h2>
            <Badge variant="outline">Upload</Badge>
          </div>
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
            <FileUploader />
            <ImageEditor />
          </div>
        </section>

        {/* Media Features */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Medya Özellikleri</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-blue-500" />
                  Oynatma
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Video, ses ve medya oynatma kontrolleri
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-green-500" />
                  Yükleme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Sürükle-bırak ve toplu dosya yükleme
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Edit className="h-5 w-5 text-purple-500" />
                  Düzenleme
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Temel resim düzenleme ve filtre araçları
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-orange-500" />
                  Paylaşım
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Sosyal medya entegrasyonu ve paylaşım
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Image Preview Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="space-y-4">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
              </AspectRatio>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Medya Önizleme</h3>
                  <p className="text-sm text-muted-foreground">Yüksek çözünürlük görüntü</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-1" />
                    İndir
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Paylaş
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}