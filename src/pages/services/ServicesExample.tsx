import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModernCard } from "@/components/ui/modern-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DataTable } from "@/components/ui/data-table";
import { StatsCard } from "@/components/ui/stats-card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useApi, useAsyncOperation } from "@/hooks/useApi";
import { apiService, User, Post } from "@/services/api";
import { useLanguage, translations } from "@/contexts/LanguageContext";
import { 
  Users, 
  FileText, 
  CheckCircle, 
  Clock, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  RefreshCw,
  AlertTriangle,
  Search,
  Filter,
  Download,
  Upload,
  Save,
  X,
  Mail,
  Phone,
  MapPin,
  Building,
  Globe,
  Calendar,
  Activity,
  Settings,
  TrendingUp,
  BarChart3,
  Target,
  Award,
  Zap,
  Shield,
  Database,
  Server,
  Code,
  Layers,
} from "lucide-react";

export default function ServicesExample() {
  const { t, language } = useLanguage();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    userId: 1
  });

  // API Hooks
  const { data: users, loading: usersLoading, error: usersError, refetch: refetchUsers } = useApi(() => apiService.getUsers());
  const { data: posts, loading: postsLoading, error: postsError, refetch: refetchPosts } = useApi(() => apiService.getPosts());
  const { data: todos, loading: todosLoading, error: todosError, refetch: refetchTodos } = useApi(() => apiService.getTodos());
  const { data: dashboardStats, loading: statsLoading, error: statsError, refetch: refetchStats } = useApi(() => apiService.getDashboardStats());

  // Async Operations
  const { execute: executeUserOperation, loading: userOperationLoading, error: userOperationError } = useAsyncOperation();
  const { execute: executePostOperation, loading: postOperationLoading, error: postOperationError } = useAsyncOperation();

  // Table Columns
  const userColumns = [
    {
      key: 'id' as keyof User,
      title: t('services.users.table.columns.id'),
      sortable: true
    },
    {
      key: 'name' as keyof User,
      title: t('services.users.table.columns.name'),
      sortable: true,
      render: (value: string, row: User) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.username}`} />
            <AvatarFallback>{row.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{value}</div>
            <div className="text-sm text-muted-foreground">@{row.username}</div>
          </div>
        </div>
      )
    },
    {
      key: 'email' as keyof User,
      title: t('services.users.table.columns.email'),
      sortable: true,
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{value}</span>
        </div>
      )
    },
    {
      key: 'company' as keyof User,
      title: t('services.users.table.columns.company'),
      render: (value: User['company']) => (
        <div className="flex items-center gap-2">
          <Building className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{value.name}</span>
        </div>
      )
    },
    {
      key: 'id' as keyof User,
      title: t('services.users.table.columns.actions'),
      render: (value: number, row: User) => (
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setSelectedUser(row)}
            title={t('services.actions.view')}
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => handleDeleteUser(value)}
            title={t('services.actions.delete')}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )
    }
  ];

  const postColumns = [
    {
      key: 'id' as keyof Post,
      title: t('services.posts.table.columns.id'),
      sortable: true
    },
    {
      key: 'title' as keyof Post,
      title: t('services.posts.table.columns.title'),
      sortable: true,
      render: (value: string) => (
        <div className="max-w-xs">
          <p className="font-medium truncate">{value}</p>
        </div>
      )
    },
    {
      key: 'userId' as keyof Post,
      title: t('services.posts.table.columns.author'),
      render: (value: number) => {
        const user = users?.find(u => u.id === value);
        return user ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <span className="text-sm">{user.name}</span>
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">{t('services.actions.unknown')}</span>
        );
      }
    },
    {
      key: 'body' as keyof Post,
      title: t('services.posts.table.columns.content'),
      render: (value: string) => (
        <p className="text-sm text-muted-foreground max-w-xs truncate">{value}</p>
      )
    }
  ];

  // Event Handlers
  const handleCreateUser = async () => {
    const result = await executeUserOperation(() => apiService.createUser(newUser));
    if (result) {
      toast({
        title: t('services.toast.success.userCreated'),
        description: t('services.toast.messages.userCreated'),
      });
      setNewUser({ name: '', username: '', email: '', phone: '', website: '' });
      setIsCreateUserOpen(false);
      refetchUsers();
      refetchStats();
    }
  };

  const handleCreatePost = async () => {
    const result = await executePostOperation(() => apiService.createPost(newPost));
    if (result) {
      toast({
        title: t('services.toast.success.postCreated'),
        description: t('services.toast.messages.postCreated'),
      });
      setNewPost({ title: '', body: '', userId: 1 });
      setIsCreatePostOpen(false);
      refetchPosts();
    }
  };

  const handleDeleteUser = async (userId: number) => {
    const result = await executeUserOperation(() => apiService.deleteUser(userId));
    if (result !== null) {
      toast({
        title: t('services.toast.success.userDeleted'),
        description: t('services.toast.messages.userDeleted'),
      });
      refetchUsers();
      refetchStats();
    }
  };

  const handleRefreshAll = () => {
    refetchUsers();
    refetchPosts();
    refetchTodos();
    refetchStats();
    toast({
      title: t('services.toast.success.refresh'),
      description: t('services.toast.messages.refresh'),
    });
  };

  // Error Display Component
  const ErrorAlert = ({ error, onRetry }: { error: string; onRetry: () => void }) => (
    <Alert variant="destructive">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription className="flex items-center justify-between">
        <span>{t('services.error.title')}: {error}</span>
        <Button size="sm" variant="outline" onClick={onRetry}>
          <RefreshCw className="h-4 w-4 mr-2" />
          {t('services.error.retry')}
        </Button>
      </AlertDescription>
    </Alert>
  );

  return (
    <>
      <Helmet>
        <title>{t('services.pageTitle')}</title>
        <meta name="description" content={t('services.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {t('services.header.title')}
            </h1>
            <p className="text-muted-foreground mt-1">
              {t('services.header.description')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleRefreshAll}>
              <RefreshCw className="h-4 w-4 mr-2" />
              {t('services.header.buttons.refreshAll')}
            </Button>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Database className="h-3 w-3" />
              {t('services.header.buttons.jsonPlaceholder')}
            </Badge>
          </div>
        </div>

        {/* Dashboard Stats */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('services.dashboard.title')}</h2>
            <Badge variant="default">{t('services.dashboard.badge')}</Badge>
          </div>
          
          {statsError && <ErrorAlert error={statsError} onRetry={refetchStats} />}
          
          {statsLoading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <ModernCard
                  key={i}
                  title="Yükleniyor"
                  description="Veriler getiriliyor..."
                  icon={RefreshCw}
                  variant="glass"
                  interactive={true}
                >
                  <div className="flex justify-center py-4">
                    <LoadingSpinner size="sm" text={t('services.loading.stats')} />
                  </div>
                </ModernCard>
              ))}
            </div>
          ) : dashboardStats && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                title={t('services.dashboard.cards.totalUsers.title')}
                value={dashboardStats.totalUsers}
                change={dashboardStats.userGrowth}
                changeType="positive"
                icon={Users}
                description={t('services.dashboard.cards.totalUsers.description')}
                gradient={true}
              />
              <StatsCard
                title={t('services.dashboard.cards.totalPosts.title')}
                value={dashboardStats.totalPosts}
                change={dashboardStats.postGrowth}
                changeType="positive"
                icon={FileText}
                description={t('services.dashboard.cards.totalPosts.description')}
                gradient={true}
              />
              <StatsCard
                title={t('services.dashboard.cards.completedTodos.title')}
                value={dashboardStats.completedTodos}
                change={dashboardStats.todoCompletionRate}
                changeType="positive"
                icon={CheckCircle}
                description={t('services.dashboard.cards.completedTodos.description')}
                decimals={1}
                suffix="%"
                gradient={true}
              />
              <StatsCard
                title={t('services.dashboard.cards.pendingTodos.title')}
                value={dashboardStats.pendingTodos}
                change={-5.2}
                changeType="negative"
                icon={Clock}
                description={t('services.dashboard.cards.pendingTodos.description')}
                gradient={true}
              />
            </div>
          )}
        </section>

        {/* Users Management */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">{t('services.users.title')}</h2>
              <Badge variant="outline">{t('services.users.badge')}</Badge>
            </div>
            <Dialog open={isCreateUserOpen} onOpenChange={setIsCreateUserOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('services.users.dialogs.create.buttons.add')}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t('services.users.dialogs.create.title')}</DialogTitle>
                  <DialogDescription>
                    {t('services.users.dialogs.create.description')}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('services.users.form.labels.name')}</Label>
                      <Input
                        id="name"
                        value={newUser.name}
                        onChange={(e) => setNewUser(prev => ({ ...prev, name: e.target.value }))}
                        placeholder={t('services.users.form.placeholders.name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">{t('services.users.form.labels.username')}</Label>
                      <Input
                        id="username"
                        value={newUser.username}
                        onChange={(e) => setNewUser(prev => ({ ...prev, username: e.target.value }))}
                        placeholder={t('services.users.form.placeholders.username')}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('services.users.form.labels.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser(prev => ({ ...prev, email: e.target.value }))}
                      placeholder={t('services.users.form.placeholders.email')}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('services.users.form.labels.phone')}</Label>
                      <Input
                        id="phone"
                        value={newUser.phone}
                        onChange={(e) => setNewUser(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder={t('services.users.form.placeholders.phone')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">{t('services.users.form.labels.website')}</Label>
                      <Input
                        id="website"
                        value={newUser.website}
                        onChange={(e) => setNewUser(prev => ({ ...prev, website: e.target.value }))}
                        placeholder={t('services.users.form.placeholders.website')}
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreateUserOpen(false)}>
                    {t('services.users.dialogs.create.buttons.cancel')}
                  </Button>
                  <Button onClick={handleCreateUser} disabled={userOperationLoading}>
                    {userOperationLoading ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">{t('services.users.dialogs.create.buttons.creating')}</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        {t('services.users.dialogs.create.buttons.create')}
                      </>
                    )}
                  </Button>
                </DialogFooter>
                {userOperationError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{userOperationError}</AlertDescription>
                  </Alert>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {usersError && <ErrorAlert error={usersError} onRetry={refetchUsers} />}

          {usersLoading ? (
            <Card>
              <CardContent className="p-6">
                <LoadingSpinner size="md" text={t('services.loading.users')} />
              </CardContent>
            </Card>
          ) : users && (
            <DataTable
              data={users}
              columns={userColumns}
              title={t('services.users.table.title')}
              searchable={true}
              filterable={true}
              exportable={true}
              pageSize={5}
            />
          )}
        </section>

        {/* Posts Management */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">{t('services.posts.title')}</h2>
              <Badge variant="secondary">{t('services.posts.badge')}</Badge>
            </div>
            <Dialog open={isCreatePostOpen} onOpenChange={setIsCreatePostOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  {t('services.posts.dialogs.create.buttons.add')}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t('services.posts.dialogs.create.title')}</DialogTitle>
                  <DialogDescription>
                    {t('services.posts.dialogs.create.description')}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">{t('services.posts.form.labels.title')}</Label>
                    <Input
                      id="post-title"
                      value={newPost.title}
                      onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                      placeholder={t('services.posts.form.placeholders.title')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-user">{t('services.posts.form.labels.author')}</Label>
                    <Select value={newPost.userId.toString()} onValueChange={(value) => setNewPost(prev => ({ ...prev, userId: parseInt(value) }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={t('services.posts.form.selectAuthor')} />
                      </SelectTrigger>
                      <SelectContent>
                        {users?.map((user) => (
                          <SelectItem key={user.id} value={user.id.toString()}>
                            {user.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-body">{t('services.posts.form.labels.content')}</Label>
                    <Textarea
                      id="post-body"
                      value={newPost.body}
                      onChange={(e) => setNewPost(prev => ({ ...prev, body: e.target.value }))}
                      placeholder={t('services.posts.form.placeholders.content')}
                      rows={4}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreatePostOpen(false)}>
                    {t('services.posts.dialogs.create.buttons.cancel')}
                  </Button>
                  <Button onClick={handleCreatePost} disabled={postOperationLoading}>
                    {postOperationLoading ? (
                      <>
                        <LoadingSpinner size="sm" />
                        <span className="ml-2">{t('services.posts.dialogs.create.buttons.creating')}</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        {t('services.posts.dialogs.create.buttons.create')}
                      </>
                    )}
                  </Button>
                </DialogFooter>
                {postOperationError && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{postOperationError}</AlertDescription>
                  </Alert>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {postsError && <ErrorAlert error={postsError} onRetry={refetchPosts} />}

          {postsLoading ? (
            <Card>
              <CardContent className="p-6">
                <LoadingSpinner size="md" text={t('services.loading.posts')} />
              </CardContent>
            </Card>
          ) : posts && (
            <DataTable
              data={posts.slice(0, 20)} // İlk 20 gönderi
              columns={postColumns}
              title={t('services.posts.table.title')}
              searchable={true}
              filterable={true}
              exportable={true}
              pageSize={5}
            />
          )}
        </section>

        {/* User Detail Modal */}
        <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${selectedUser?.username}`} />
                  <AvatarFallback>{selectedUser?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                {t('services.users.dialogs.detail.title')}
              </DialogTitle>
              <DialogDescription>
                {selectedUser?.name} {t('services.users.dialogs.detail.description')}
              </DialogDescription>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">{t('services.users.dialogs.detail.sections.personal')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.website}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">{t('services.users.dialogs.detail.sections.company')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.company.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.company.catchPhrase}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedUser.company.bs}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">{t('services.users.dialogs.detail.sections.address')}</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {selectedUser.address.street}, {selectedUser.address.suite}, {selectedUser.address.city} {selectedUser.address.zipcode}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedUser(null)}>
                <X className="h-4 w-4 mr-2" />
                {t('services.users.dialogs.detail.close')}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Best Practices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('services.bestPractices.title')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center p-6">
              <Shield className="h-8 w-8 mx-auto mb-3 text-blue-500" />
              <h3 className="font-semibold mb-2">{t('services.bestPractices.items.errorHandling.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('services.bestPractices.items.errorHandling.description')}
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Zap className="h-8 w-8 mx-auto mb-3 text-green-500" />
              <h3 className="font-semibold mb-2">{t('services.bestPractices.items.loadingStates.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('services.bestPractices.items.loadingStates.description')}
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <Database className="h-8 w-8 mx-auto mb-3 text-purple-500" />
              <h3 className="font-semibold mb-2">{t('services.bestPractices.items.dataManagement.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('services.bestPractices.items.dataManagement.description')}
              </p>
            </Card>

            <Card className="text-center p-6">
              <Award className="h-8 w-8 mx-auto mb-3 text-orange-500" />
              <h3 className="font-semibold mb-2">{t('services.bestPractices.items.typeSafety.title')}</h3>
              <p className="text-sm text-muted-foreground">
                {t('services.bestPractices.items.typeSafety.description')}
              </p>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}