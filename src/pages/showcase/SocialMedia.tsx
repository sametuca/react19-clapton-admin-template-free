import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export default function SocialMedia() {
  const [isPremiumUser] = useState(false);

  const posts = [
    {
      id: 1,
      user: { name: "Sarah Johnson", username: "@sarahjdev", avatar: "/api/placeholder/40/40" },
      content: "Just launched my new React component library! 🚀 What do you think about the glassmorphism design trend?",
      image: "/api/placeholder/500/300",
      likes: 234,
      comments: 45,
      shares: 12,
      time: "2h ago",
      isPremium: false
    },
    {
      id: 2,
      user: { name: "Alex Chen", username: "@alexdesign", avatar: "/api/placeholder/40/40" },
      content: "Working on some amazing UI animations for our next project. The future of web design is so exciting! ✨",
      likes: 567,
      comments: 89,
      shares: 34,
      time: "4h ago",
      isPremium: true
    },
    {
      id: 3,
      user: { name: "Maria Garcia", username: "@mariaux", avatar: "/api/placeholder/40/40" },
      content: "New blog post about accessibility in modern web design. Everyone should be able to use the web! 🌐",
      likes: 123,
      comments: 23,
      shares: 56,
      time: "6h ago",
      isPremium: true
    }
  ];

  const stories = [
    { name: "Your Story", avatar: "/api/placeholder/40/40", isOwn: true },
    { name: "John", avatar: "/api/placeholder/40/40", hasNew: true },
    { name: "Emma", avatar: "/api/placeholder/40/40", hasNew: true },
    { name: "David", avatar: "/api/placeholder/40/40", hasNew: false },
    { name: "Lisa", avatar: "/api/placeholder/40/40", hasNew: true }
  ];

  const PremiumOverlay = ({ children }: { children: React.ReactNode }) => (
    <div className="relative group">
      {children}
      {!isPremiumUser && (
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px] flex items-center justify-center rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center space-y-2 p-3 bg-background/80 rounded-lg border border-yellow-500/30 shadow-lg backdrop-blur-sm">
            <Crown className="h-6 w-6 text-yellow-500 mx-auto" />
            <p className="text-xs font-medium text-foreground">Premium</p>
            <Button size="sm" className="gap-1 h-7 px-2 text-xs bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white border-0">
              <Lock className="h-3 w-3" />
              Unlock
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Social Media Components - React19 Admin</title>
        <meta name="description" content="Modern social media UI components and layouts" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Social Media Interface
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Modern social media components for building engaging platforms
          </p>
        </div>

        {/* Stories Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Stories</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {stories.map((story, index) => (
              <div key={story.name} className="flex-shrink-0">
                {index > 2 ? (
                  <div className="relative group">
                    <StoryItem story={story} />
                    <div className="absolute inset-0 bg-background/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center space-y-1">
                        <Crown className="h-4 w-4 text-yellow-500 mx-auto" />
                        <p className="text-xs font-medium text-foreground">Premium</p>
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
          <h2 className="text-2xl font-semibold">Create Post</h2>
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/api/placeholder/40/40" />
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-4">
                  <Textarea 
                    placeholder="What's on your mind?" 
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <ImageIcon className="h-4 w-4" />
                        Photo
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Video className="h-4 w-4" />
                        Video
                      </Button>
                      <div className="relative group">
                        <Button variant="outline" size="sm" className="gap-2 relative">
                          <Zap className="h-4 w-4" />
                          Live
                        </Button>
                        <div className="absolute inset-0 bg-background/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center space-y-1">
                            <Crown className="h-3 w-3 text-yellow-500 mx-auto" />
                            <p className="text-xs font-medium text-foreground">Premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button>Post</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feed */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Social Feed</h2>
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
          <h2 className="text-2xl font-semibold">Social Analytics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Followers</p>
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
                      <p className="text-sm text-muted-foreground">Engagement Rate</p>
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
                  Premium
                </div>
              </div>
            </div>

            <div className="relative group">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Post Reach</p>
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
                  Premium
                </div>
              </div>
            </div>

            <div className="relative group">
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">New Followers</p>
                      <p className="text-2xl font-bold">+234</p>
                    </div>
                    <UserPlus className="h-8 w-8 text-purple-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-1 text-green-500">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-sm font-medium">Today</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-500/90 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  Premium
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Interface */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Direct Messages</h2>
          <div className="relative group">
            <div className="grid gap-6 md:grid-cols-3 relative">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Conversations
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
                          <p className="font-medium">User {chat}</p>
                          <p className="text-sm text-muted-foreground truncate">
                            Last message preview...
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">2h</p>
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
                      <p className="font-medium">User 1</p>
                      <p className="text-sm text-green-500">Online</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-64 border rounded-lg p-4 space-y-4 overflow-y-auto">
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">Hey! How's your project going?</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">Great! Just finished the new components.</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg max-w-[70%]">
                        <p className="text-sm">Awesome! Can't wait to see them 🚀</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Type a message..." className="flex-1" />
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
                Premium
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features Banner */}
        {!isPremiumUser && (
          <Card className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/20">
            <CardContent className="p-8 text-center">
              <Crown className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Unlock Premium Social Features</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Access advanced analytics, live streaming, direct messaging, story creation, and 40+ premium social media components
              </p>
              <Button size="lg" className="gap-2">
                <Crown className="h-4 w-4" />
                Upgrade to Premium
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