import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Heart, 
  Share2, 
  Download, 
  Eye,
  Calendar,
  User,
  MapPin,
  Camera,
  Play,
  Pause,
  Volume2,
  Maximize,
  Star,
  MoreHorizontal
} from "lucide-react";

export default function ModernGallery() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: t('showcase.gallery.categories.all'), count: 24 },
    { id: 'landscape', name: t('showcase.gallery.categories.nature'), count: 8 },
    { id: 'portrait', name: t('showcase.gallery.categories.people'), count: 6 },
    { id: 'architecture', name: t('showcase.gallery.categories.architecture'), count: 5 },
    { id: 'nature', name: t('showcase.gallery.categories.nature'), count: 5 }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Sunset Over Mountains",
      description: "Beautiful mountain sunset captured during golden hour",
      category: "landscape",
      author: "John Doe",
      date: "2024-03-15",
      location: "Swiss Alps",
      likes: 145,
      views: 2340,
      type: "image",
      tags: ["sunset", "mountains", "nature"],
      featured: true
    },
    {
      id: 2,
      title: "Modern Architecture",
      description: "Contemporary building design with glass facade",
      category: "architecture", 
      author: "Jane Smith",
      date: "2024-03-14",
      location: "Tokyo, Japan",
      likes: 89,
      views: 1567,
      type: "image",
      tags: ["modern", "building", "glass"]
    },
    {
      id: 3,
      title: "Forest Walkthrough",
      description: "Peaceful walk through autumn forest",
      category: "nature",
      author: "Mike Wilson",
      date: "2024-03-13", 
      location: "Pacific Northwest",
      likes: 234,
      views: 4521,
      type: "video",
      tags: ["forest", "autumn", "peaceful"],
      duration: "2:15"
    },
    {
      id: 4,
      title: "Portrait Session",
      description: "Professional portrait photography session",
      category: "portrait",
      author: "Sarah Johnson",
      date: "2024-03-12",
      location: "Studio NYC",
      likes: 167,
      views: 2890,
      type: "image", 
      tags: ["portrait", "professional", "studio"]
    },
    {
      id: 5,
      title: "Ocean Waves",
      description: "Relaxing ocean waves at sunset",
      category: "landscape",
      author: "David Chen",
      date: "2024-03-11",
      location: "Malibu Beach",
      likes: 312,
      views: 5670,
      type: "video",
      tags: ["ocean", "waves", "sunset"],
      duration: "1:45",
      featured: true
    },
    {
      id: 6,
      title: "City Skyline",
      description: "Metropolitan skyline during blue hour",
      category: "architecture",
      author: "Alex Turner",
      date: "2024-03-10",
      location: "New York",
      likes: 198,
      views: 3456,
      type: "image",
      tags: ["city", "skyline", "blue hour"]
    }
  ];

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const ItemCard = ({ item }: { item: typeof galleryItems[0] }) => (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <AspectRatio ratio={16 / 9}>
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {item.type === 'video' ? (
              <div className="flex items-center gap-2 text-primary">
                <Play className="h-12 w-12" />
                <span className="text-lg font-medium">{item.duration}</span>
              </div>
            ) : (
              <Camera className="h-12 w-12 text-primary" />
            )}
          </div>
        </AspectRatio>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleLike(item.id)}
                  className={`text-white hover:text-red-400 ${likedItems.includes(item.id) ? 'text-red-400' : ''}`}
                >
                  <Heart className={`h-4 w-4 ${likedItems.includes(item.id) ? 'fill-current' : ''}`} />
                  {item.likes + (likedItems.includes(item.id) ? 1 : 0)}
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-blue-400">
                  <Eye className="h-4 w-4" />
                  {item.views}
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" className="text-white hover:text-green-400">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-yellow-400">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {item.featured && (
            <Badge className="bg-yellow-500 text-yellow-900">
              <Star className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
          <Badge variant={item.type === 'video' ? 'destructive' : 'secondary'}>
            {item.type === 'video' ? 'Video' : 'Fotoğraf'}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {item.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(item.date).toLocaleDateString('tr-TR')}
            </div>
          </div>
          
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {item.location}
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {item.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const ItemListView = ({ item }: { item: typeof galleryItems[0] }) => (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="w-32 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center shrink-0">
            {item.type === 'video' ? (
              <Play className="h-6 w-6 text-primary" />
            ) : (
              <Camera className="h-6 w-6 text-primary" />
            )}
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <div className="flex gap-2">
                {item.featured && (
                  <Badge className="bg-yellow-500 text-yellow-900">
                    <Star className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge variant={item.type === 'video' ? 'destructive' : 'secondary'}>
                  {item.type === 'video' ? 'Video' : 'Fotoğraf'}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {item.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(item.date).toLocaleDateString('tr-TR')}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {item.location}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {item.views} görüntüleme
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => toggleLike(item.id)}
                  className={likedItems.includes(item.id) ? 'text-red-500' : ''}
                >
                  <Heart className={`h-4 w-4 ${likedItems.includes(item.id) ? 'fill-current' : ''}`} />
                  {item.likes + (likedItems.includes(item.id) ? 1 : 0)}
                </Button>
                <Button size="sm" variant="ghost">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <Helmet>
        <title>{t('showcase.gallery.pageTitle')}</title>
        <meta name="description" content={t('showcase.gallery.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.gallery.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.gallery.description')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t('showcase.gallery.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              {t('showcase.gallery.filterButton')}
            </Button>
          </div>
          
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.name}
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Gallery Content */}
        <div className="space-y-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">{t('showcase.gallery.noResultsTitle')}</h3>
              <p className="text-muted-foreground">{t('showcase.gallery.noResultsDescription')}</p>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer">
                      <ItemCard item={item} />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <AspectRatio ratio={16 / 9}>
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center rounded-lg">
                          {item.type === 'video' ? (
                            <div className="flex items-center gap-4 text-primary">
                              <Play className="h-16 w-16" />
                              <div className="text-center">
                                <p className="text-xl font-medium">{item.title}</p>
                                <p className="text-lg">{item.duration}</p>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center text-primary">
                              <Camera className="h-16 w-16 mx-auto mb-2" />
                              <p className="text-xl font-medium">{item.title}</p>
                            </div>
                          )}
                        </div>
                      </AspectRatio>
                      
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold">{item.title}</h2>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {item.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(item.date).toLocaleDateString('tr-TR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {item.location}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="outline">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <Button
                            variant="outline"
                            onClick={() => toggleLike(item.id)}
                            className={likedItems.includes(item.id) ? 'text-red-500 border-red-500' : ''}
                          >
                            <Heart className={`h-4 w-4 mr-2 ${likedItems.includes(item.id) ? 'fill-current' : ''}`} />
                            {item.likes + (likedItems.includes(item.id) ? 1 : 0)} Beğeni
                          </Button>
                          <Button variant="outline">
                            <Share2 className="h-4 w-4 mr-2" />
                            Paylaş
                          </Button>
                          <Button variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            İndir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <ItemListView key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Load More */}
        {filteredItems.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              {t('showcase.gallery.loadMoreButton')}
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
