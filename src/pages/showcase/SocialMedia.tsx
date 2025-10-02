import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal,
  Users,
  TrendingUp,
  Bell,
  Search,
  Camera,
  Video,
  Image as ImageIcon,
  Crown,
  Lock,
  Zap,
  Globe,
  UserPlus,
  ThumbsUp
} from "lucide-react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SocialMedia() {
  const { t } = useLanguage();
  const [isPremiumUser] = useState(false);

  const posts = [
    {
      id: 1,
      user: { name: t('showcase.socialMedia.posts.post1.username'), username: t('showcase.socialMedia.posts.post1.username'), avatar: "/api/placeholder/40/40" },
      content: t('showcase.socialMedia.posts.post1.content'),
      image: "/api/placeholder/500/300",
      likes: 234,
      comments: 45,
      shares: 12,
      time: t('showcase.socialMedia.posts.post1.time'),
      isPremium: false
    },
    {
      id: 2,
      user: { name: t('showcase.socialMedia.posts.post2.username'), username: t('showcase.socialMedia.posts.post2.username'), avatar: "/api/placeholder/40/40" },
      content: t('showcase.socialMedia.posts.post2.content'),
      likes: 567,
      comments: 89,
      shares: 34,
      time: t('showcase.socialMedia.posts.post2.time'),
      isPremium: true
    },
    {
      id: 3,
      user: { name: t('showcase.socialMedia.posts.post3.username'), username: t('showcase.socialMedia.posts.post3.username'), avatar: "/api/placeholder/40/40" },
      content: t('showcase.socialMedia.posts.post3.content'),
      likes: 123,
      comments: 23,
      shares: 56,
      time: t('showcase.socialMedia.posts.post3.time'),
      isPremium: true
    }
  ];

  const stories = [
    { name: t('showcase.socialMedia.stories.story1.name'), avatar: "/api/placeholder/40/40", isOwn: true },
    { name: t('showcase.socialMedia.stories.story2.name'), avatar: "/api/placeholder/40/40", hasNew: true },
    { name: t('showcase.socialMedia.stories.story3.name'), avatar: "/api/placeholder/40/40", hasNew: true },
    { name: t('showcase.socialMedia.stories.story4.name'), avatar: "/api/placeholder/40/40", hasNew: false },
    { name: t('showcase.socialMedia.stories.story5.name'), avatar: "/api/placeholder/40/40", hasNew: true }
  ];

  const PremiumOverlay = ({ children }: { children: React.ReactNode }) => (
    <div className="relative group">
      {children}
      {!isPremiumUser && (
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] flex items-center justify-center rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center space-y-2 p-3 bg-background/80 rounded-lg border border-yellow-500/30 shadow-lg backdrop-blur-sm">
            <Crown className="h-6 w-6 text-yellow-500 mx-auto" />
            <p className="text-xs font-medium text-foreground">{t('showcase.socialMedia.premiumOverlay')}</p>
            <Button size="sm" className="gap-1 h-7 px-2 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0">
              <Lock className="h-3 w-3" />
              {t('showcase.socialMedia.unlock')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>{t('showcase.socialMedia.pageTitle')}</title>
        <meta name="description" content={t('showcase.socialMedia.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {t('showcase.socialMedia.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.socialMedia.description')}
          </p>
        </div>

        {/* Stories Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.socialMedia.sections.stories')}</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {stories.map((story, index) => (
              <div key={story.name} className="flex-shrink-0">
                {index > 2 ? (
                  <div className="relative group">
                    <StoryItem story={story} />
                    <div className="absolute inset-0 bg-background/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center space-y-1">
                        <Crown className="h-4 w-4 text-yellow-500 mx-auto" />
                        <p className="text-xs font-medium text-foreground">{t('showcase.socialMedia.premium')}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <StoryItem story={story} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Create Post */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.socialMedia.sections.createPost')}</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Textarea 
                    placeholder={t('showcase.socialMedia.createPost.placeholder')} 
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ImageIcon className="h-4 w-4" />
                        {t('showcase.socialMedia.createPost.photo')}
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Video className="h-4 w-4" />
                        {t('showcase.socialMedia.createPost.video')}
                      </Button>
                      <div className="relative group">
                        <Button variant="outline" size="sm" className="gap-2 relative">
                          <Zap className="h-4 w-4" />
                          {t('showcase.socialMedia.createPost.live')}
                        </Button>
                        <div className="absolute inset-0 bg-background/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center space-y-1">
                            <Crown className="h-3 w-3 text-yellow-500 mx-auto" />
                            <p className="text-xs font-medium text-foreground">{t('showcase.socialMedia.premium')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button>{t('showcase.socialMedia.createPost.post')}</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.socialMedia.sections.feed')}</h2>
          <div className="space-y-6">
            {posts.map((post, index) => (
              <div key={post.id}>
                {post.isPremium && index > 0 ? (
                  <PremiumOverlay>
                    <PostCard post={post} />
                  </PremiumOverlay>
                ) : (
                  <PostCard post={post} />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Analytics Dashboard */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.socialMedia.sections.analytics')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{t('showcase.socialMedia.analytics.followers')}</p>
                    <p className="text-2xl font-bold">12.4K</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">+15.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative group">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('showcase.socialMedia.analytics.engagement')}</p>
                      <p className="text-2xl font-bold">4.8%</p>
                    </div>
                    <Heart className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">+2.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  {t('showcase.socialMedia.premium')}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('showcase.socialMedia.analytics.reach')}</p>
                      <p className="text-2xl font-bold">89.2K</p>
                    </div>
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">+8.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  {t('showcase.socialMedia.premium')}
                </div>
              </div>
            </div>

            <div className="relative group">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{t('showcase.socialMedia.analytics.newFollowers')}</p>
                      <p className="text-2xl font-bold">+234</p>
                    </div>
                    <UserPlus className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{t('showcase.socialMedia.analytics.today')}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  {t('showcase.socialMedia.premium')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.socialMedia.sections.chat')}</h2>
          <div className="relative group">
            <div className="grid gap-6 md:grid-cols-3 relative">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    {t('showcase.socialMedia.chat.conversations')}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1">
                    {[1, 2, 3, 4].map((chat) => (
                      <div key={chat} className="flex items-center gap-3 p-4 hover:bg-muted cursor-pointer">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`/api/placeholder/40/40`} />
                          <AvatarFallback>U{chat}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{t('showcase.socialMedia.chat.user')} {chat}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            {t('showcase.socialMedia.chat.lastMessagePreview')}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{t('showcase.socialMedia.chat.time')} 2h</p>
                          {chat === 1 && (
                            <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center">
                              2
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/api/placeholder/40/40" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{t('showcase.socialMedia.chat.user')} 1</p>
                      <p className="text-sm text-green-500">{t('showcase.socialMedia.chat.online')}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 border rounded-lg p-4 space-y-4 overflow-y-auto">
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">{t('showcase.socialMedia.chat.message1')}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">{t('showcase.socialMedia.chat.message2')}</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">{t('showcase.socialMedia.chat.message3')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder={t('showcase.socialMedia.chat.placeholder')} className="flex-1" />
                    <Button size="icon">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                <Crown className="h-3 w-3" />
                {t('showcase.socialMedia.premium')}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Banner */}
        {!isPremiumUser && (
          <Card className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/20">
            <CardContent className="p-8 text-center">
              <Crown className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{t('showcase.socialMedia.premiumFeatures')}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('showcase.socialMedia.premiumFeaturesDescription')}
              </p>
              <Button size="lg" className="gap-2">
                <Crown className="h-4 w-4" />
                {t('showcase.socialMedia.upgradeToPremium')}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
}

// Helper Components
function StoryItem({ story }: { story: any }) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-[80px]">
      <div className={`relative ${story.hasNew ? 'ring-2 ring-pink-500 rounded-full p-1' : ''}`}>
        <Avatar className="h-16 w-16">
          <AvatarImage src={story.avatar} />
          <AvatarFallback>{story.name[0]}</AvatarFallback>
        </Avatar>
        {story.isOwn && (
          <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1">
            <Camera className="h-3 w-3 text-primary-foreground" />
          </div>
        )}
      </div>
      <p className="text-xs text-center truncate w-full">{story.name}</p>
    </div>
  );
}

function PostCard({ post }: { post: any }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.user.name}</p>
              <p className="text-sm text-muted-foreground">{post.user.username} • {post.time}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{post.content}</p>
        {post.image && (
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <ImageIcon className="h-16 w-16 text-muted-foreground" />
          </div>
        )}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              {post.comments}
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Share2 className="h-4 w-4" />
              {post.shares}
            </Button>
          </div>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
