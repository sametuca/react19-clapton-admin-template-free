import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { DataTable } from "@/components/ui/data-table";
import { PostCard } from "@/components/ui/post-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, 
  Heart, 
  MessageSquare, 
  Share2, 
  Eye,
  TrendingUp,
  Calendar,
  Camera,
  Video,
  MoreHorizontal,
  ThumbsUp,
  Send,
  Bell,
  Search,
  Hash,
  MapPin
} from "lucide-react";

export default function SocialMediaExample() {
  // Social Media Stats Data
  const socialStats = [
    {
      title: "Toplam Takipçi",
      value: 125840,
      change: 15.2,
      changeType: "positive" as const,
      icon: Users,
      description: "Bu ay"
    },
    {
      title: "Günlük Etkileşim",
      value: 8947,
      change: 23.1,
      changeType: "positive" as const,
      icon: Heart,
      description: "Ortalama"
    },
    {
      title: "Paylaşım Sayısı",
      value: 342,
      change: 8.7,
      changeType: "positive" as const,
      icon: Share2,
      description: "Bu hafta"
    },
    {
      title: "Görüntülenme",
      value: 2847593,
      change: -2.3,
      changeType: "negative" as const,
      icon: Eye,
      description: "Toplam"
    }
  ];

  // Posts Data for Table
  const postsData = [
    {
      id: 1,
      content: "Yeni ürün lansmanımızı duyurmaktan mutluluk duyuyoruz! 🚀",
      author: "Şirket Hesabı",
      date: "2024-01-15",
      likes: 1247,
      comments: 89,
      shares: 156,
      reach: 45680,
      engagement: 3.2,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 2,
      content: "Ekibimizle birlikte harika bir proje tamamladık! Teşekkürler 💪",
      author: "Ahmet Yılmaz",
      date: "2024-01-14",
      likes: 892,
      comments: 67,
      shares: 98,
      reach: 32450,
      engagement: 3.6,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 3,
      content: "Bugün müşterilerimizle harika bir toplantı gerçekleştirdik ✨",
      author: "Zeynep Kaya",
      date: "2024-01-13",
      likes: 634,
      comments: 45,
      shares: 72,
      reach: 28930,
      engagement: 2.8,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const postsColumns = [
    {
      key: 'avatar' as keyof typeof postsData[0],
      title: 'Gönderi',
      render: (value: string, row: any) => (
        <div className="flex items-start gap-3 max-w-md">
          <Avatar className="h-10 w-10">
            <AvatarImage src={value} alt={row.author} />
            <AvatarFallback>{row.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{row.author}</div>
            <div className="text-sm text-muted-foreground mt-1">{row.content}</div>
            <div className="text-xs text-muted-foreground mt-2">{row.date}</div>
          </div>
        </div>
      )
    },
    {
      key: 'likes' as keyof typeof postsData[0],
      title: 'Beğeni',
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <Heart className="h-4 w-4 text-red-500" />
          <span className="font-medium">{value.toLocaleString()}</span>
        </div>
      )
    },
    {
      key: 'comments' as keyof typeof postsData[0],
      title: 'Yorum',
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <MessageSquare className="h-4 w-4 text-blue-500" />
          <span>{value}</span>
        </div>
      )
    },
    {
      key: 'shares' as keyof typeof postsData[0],
      title: 'Paylaşım',
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <Share2 className="h-4 w-4 text-green-500" />
          <span>{value}</span>
        </div>
      )
    },
    {
      key: 'reach' as keyof typeof postsData[0],
      title: 'Erişim',
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-purple-500" />
          <span>{value.toLocaleString()}</span>
        </div>
      )
    },
    {
      key: 'engagement' as keyof typeof postsData[0],
      title: 'Etkileşim',
      render: (value: number) => (
        <Badge variant={value > 3 ? 'default' : 'secondary'}>
          %{value}
        </Badge>
      )
    }
  ];

  // Trending Topics
  const trendingTopics = [
    { tag: "#ReactJS", posts: "12.5K" },
    { tag: "#WebDevelopment", posts: "8.9K" },
    { tag: "#JavaScript", posts: "15.2K" },
    { tag: "#UI/UX", posts: "6.7K" },
    { tag: "#TechNews", posts: "9.1K" }
  ];

  // Recent Activities
  const recentActivities = [
    {
      user: "Mehmet Özkan",
      action: "gönderinizi beğendi",
      time: "2 dakika önce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "Ayşe Demir",
      action: "gönderinize yorum yaptı",
      time: "5 dakika önce",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
    },
    {
      user: "Ali Kaya",
      action: "sizi takip etmeye başladı",
      time: "10 dakika önce",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
    }
  ];

  // Sample Posts for Feed
  const samplePosts = [
    {
      author: {
        name: "Şirket Hesabı",
        username: "sirket",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      content: "Yeni ürün lansmanımızı duyurmaktan mutluluk duyuyoruz! 🚀 Ekibimizin sıkı çalışması sonucunda ortaya çıkan bu harika ürünü sizlerle paylaşmak için sabırsızlanıyoruz. #YeniÜrün #İnovasyon",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop",
      timestamp: "2 saat önce",
      likes: 1247,
      comments: 89,
      shares: 156,
      views: 45680,
      isLiked: true
    },
    {
      author: {
        name: "Ahmet Yılmaz",
        username: "ahmet_dev",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
      },
      content: "Ekibimizle birlikte harika bir proje tamamladık! 💪 React ve TypeScript kullanarak geliştirdiğimiz bu admin panel gerçekten çok başarılı oldu. Teşekkürler tüm ekip! #React #TypeScript #WebDevelopment",
      timestamp: "4 saat önce",
      likes: 892,
      comments: 67,
      shares: 98,
      views: 32450
    },
    {
      author: {
        name: "Zeynep Kaya",
        username: "zeynep_design",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
        verified: true
      },
      content: "Bugün müşterilerimizle harika bir toplantı gerçekleştirdik ✨ Yeni tasarım konseptlerimizi paylaştık ve çok olumlu geri dönüşler aldık. UI/UX tasarımında kullanıcı deneyimi her şeyden önemli! #UIUX #Design",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop",
      timestamp: "6 saat önce",
      likes: 634,
      comments: 45,
      shares: 72,
      views: 28930
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sosyal Medya Dashboard - Örnek Sayfa</title>
        <meta name="description" content="Sosyal medya yönetimi için örnek dashboard sayfası" />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sosyal Medya Dashboard</h1>
            <p className="text-muted-foreground">Sosyal medya hesaplarınızı yönetin ve analiz edin</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="h-4 w-4 mr-2" />
              Rapor Al
            </Button>
            <Button size="sm">
              <TrendingUp className="h-4 w-4 mr-2" />
              Analiz Görüntüle
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {socialStats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              changeType={stat.changeType}
              icon={stat.icon}
              description={stat.description}
              gradient={index % 2 === 0}
            />
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Yeni Gönderi Oluştur
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
                    <AvatarFallback>AY</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <Textarea 
                      placeholder="Ne düşünüyorsunuz?" 
                      className="min-h-[100px] resize-none"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Camera className="h-4 w-4 mr-2" />
                          Fotoğraf
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Video className="h-4 w-4 mr-2" />
                          Video
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MapPin className="h-4 w-4 mr-2" />
                          Konum
                        </Button>
                      </div>
                      <Button>
                        <Send className="h-4 w-4 mr-2" />
                        Paylaş
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Feed */}
            <Card>
              <CardHeader>
                <CardTitle>Son Gönderiler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {samplePosts.map((post, index) => (
                  <PostCard
                    key={index}
                    author={post.author}
                    content={post.content}
                    image={post.image}
                    timestamp={post.timestamp}
                    likes={post.likes}
                    comments={post.comments}
                    shares={post.shares}
                    views={post.views}
                    isLiked={post.isLiked}
                  />
                ))}
              </CardContent>
            </Card>

            {/* Posts Analytics Table */}
            <DataTable
              data={postsData}
              columns={postsColumns}
              title="Gönderi Performansı"
              searchable={true}
              filterable={true}
              exportable={true}
              pageSize={5}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  Trend Konular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors">
                      <div>
                        <div className="font-medium text-sm">{topic.tag}</div>
                        <div className="text-xs text-muted-foreground">{topic.posts} gönderi</div>
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Son Aktiviteler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.avatar} alt={activity.user} />
                        <AvatarFallback>{activity.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-medium">{activity.user}</span>
                          {' '}{activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Hızlı İşlemler</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Takipçi Analizi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Mesaj Merkezi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  İçerik Takvimi
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Performans Raporu
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
