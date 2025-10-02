import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/hooks/useLanguage";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  Download,
  ShoppingCart,
  Calendar,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  DollarSign,
  User,
  Shield,
  MoreHorizontal,
  Edit,
  Trash2,
  Share,
  Filter,
  Search,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Plus,
  Minus,
  Settings,
  Smartphone
} from "lucide-react";

export default function DataTables() {
  const { t } = useLanguage();

  const tableData = [
    { 
      id: 1, 
      name: t('showcase.datatables.sampleData.user1.name'), 
      email: t('showcase.datatables.sampleData.user1.email'), 
      role: t('showcase.datatables.roles.admin'), 
      status: t('showcase.datatables.status.active'), 
      score: 95 
    },
    { 
      id: 2, 
      name: t('showcase.datatables.sampleData.user2.name'), 
      email: t('showcase.datatables.sampleData.user2.email'), 
      role: t('showcase.datatables.roles.editor'), 
      status: t('showcase.datatables.status.active'), 
      score: 87 
    },
    { 
      id: 3, 
      name: t('showcase.datatables.sampleData.user3.name'), 
      email: t('showcase.datatables.sampleData.user3.email'), 
      role: t('showcase.datatables.roles.viewer'), 
      status: t('showcase.datatables.status.inactive'), 
      score: 72 
    },
    { 
      id: 4, 
      name: t('showcase.datatables.sampleData.user4.name'), 
      email: t('showcase.datatables.sampleData.user4.email'), 
      role: t('showcase.datatables.roles.editor'), 
      status: t('showcase.datatables.status.active'), 
      score: 91 
    },
    { 
      id: 5, 
      name: t('showcase.datatables.sampleData.user5.name'), 
      email: t('showcase.datatables.sampleData.user5.email'), 
      role: t('showcase.datatables.roles.admin'), 
      status: t('showcase.datatables.status.suspended'), 
      score: 63 
    },
    { 
      id: 6, 
      name: t('showcase.datatables.sampleData.user6.name'), 
      email: t('showcase.datatables.sampleData.user6.email'), 
      role: t('showcase.datatables.roles.viewer'), 
      status: t('showcase.datatables.status.active'), 
      score: 98 
    },
    { 
      id: 7, 
      name: t('showcase.datatables.sampleData.user7.name'), 
      email: t('showcase.datatables.sampleData.user7.email'), 
      role: t('showcase.datatables.roles.editor'), 
      status: t('showcase.datatables.status.inactive'), 
      score: 65 
    },
    { 
      id: 8, 
      name: t('showcase.datatables.sampleData.user8.name'), 
      email: t('showcase.datatables.sampleData.user8.email'), 
      role: t('showcase.datatables.roles.admin'), 
      status: t('showcase.datatables.status.active'), 
      score: 89 
    }
  ];

  const tableColumns = [
    { key: 'id' as keyof typeof tableData[0], title: t('showcase.datatables.columns.id'), sortable: true },
    { key: 'name' as keyof typeof tableData[0], title: t('showcase.datatables.columns.name'), sortable: true },
    { key: 'email' as keyof typeof tableData[0], title: t('showcase.datatables.columns.email'), sortable: true },
    { 
      key: 'role' as keyof typeof tableData[0], 
      title: t('showcase.datatables.columns.role'), 
      render: (value: string) => <Badge variant="outline">{value}</Badge>
    },
    { 
      key: 'status' as keyof typeof tableData[0], 
      title: t('showcase.datatables.columns.status'),
      render: (value: string) => (
        <Badge variant={value === t('showcase.datatables.status.active') ? 'default' : value === t('showcase.datatables.status.suspended') ? 'secondary' : 'destructive'}>
          {value}
        </Badge>
      )
    },
    { 
      key: 'score' as keyof typeof tableData[0], 
      title: t('showcase.datatables.columns.score'),
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <div className="w-12 bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-sm font-medium">{value}</span>
        </div>
      )
    }
  ];

  const smallTableData = tableData.slice(0, 3);

  // E-commerce Products Table
  const productsData = [
    { 
      id: 1, 
      name: t('showcase.datatables.ecommerceProduct1.name'), 
      category: t('showcase.datatables.ecommerceProduct1.category'), 
      price: 45999, 
      stock: 24, 
      rating: 4.8, 
      sales: 1247,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=50&h=50&fit=crop&crop=center"
    },
    { 
      id: 2, 
      name: t('showcase.datatables.ecommerceProduct2.name'), 
      category: t('showcase.datatables.ecommerceProduct2.category'), 
      price: 32999, 
      stock: 12, 
      rating: 4.9, 
      sales: 892,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=50&h=50&fit=crop&crop=center"
    },
    { 
      id: 3, 
      name: t('showcase.datatables.ecommerceProduct3.name'), 
      category: t('showcase.datatables.ecommerceProduct3.category'), 
      price: 7999, 
      stock: 45, 
      rating: 4.7, 
      sales: 2156,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=50&h=50&fit=crop&crop=center"
    },
    { 
      id: 4, 
      name: t('showcase.datatables.ecommerceProduct4.name'), 
      category: t('showcase.datatables.ecommerceProduct4.category'), 
      price: 28999, 
      stock: 8, 
      rating: 4.6, 
      sales: 634,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=50&h=50&fit=crop&crop=center"
    }
  ];

  const productsColumns = [
    { 
      key: 'image' as keyof typeof productsData[0], 
      title: t('showcase.datatables.ecommerceProductImage'),
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={value} alt={row.name} />
            <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.name}</div>
            <div className="text-sm text-muted-foreground">{row.category}</div>
          </div>
        </div>
      )
    },
    { 
      key: 'price' as keyof typeof productsData[0], 
      title: t('showcase.datatables.ecommerceProductPrice'), 
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1 font-medium">
          <DollarSign className="h-4 w-4 text-green-600" />
          ₺{value.toLocaleString()}
        </div>
      )
    },
    { 
      key: 'stock' as keyof typeof productsData[0], 
      title: t('showcase.datatables.ecommerceProductStock'), 
      sortable: true,
      render: (value: number) => (
        <Badge variant={value > 20 ? 'default' : value > 10 ? 'secondary' : 'destructive'}>
          {value} adet
        </Badge>
      )
    },
    { 
      key: 'rating' as keyof typeof productsData[0], 
      title: t('showcase.datatables.ecommerceProductRating'),
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{value}</span>
        </div>
      )
    },
    { 
      key: 'sales' as keyof typeof productsData[0], 
      title: t('showcase.datatables.ecommerceProductSales'), 
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <ShoppingCart className="h-4 w-4 text-blue-600" />
          <span>{value}</span>
        </div>
      )
    }
  ];

  // Analytics Table
  const analyticsData = [
    { 
      page: "/dashboard", 
      views: 12847, 
      users: 8934, 
      bounceRate: 23.4, 
      avgTime: "2:34", 
      trend: "up",
      conversion: 4.2
    },
    { 
      page: "/products", 
      views: 9876, 
      users: 7234, 
      bounceRate: 31.2, 
      avgTime: "3:12", 
      trend: "up",
      conversion: 6.8
    },
    { 
      page: "/checkout", 
      views: 3456, 
      users: 2987, 
      bounceRate: 45.6, 
      avgTime: "1:45", 
      trend: "down",
      conversion: 12.3
    },
    { 
      page: "/contact", 
      views: 2134, 
      users: 1876, 
      bounceRate: 28.9, 
      avgTime: "2:56", 
      trend: "up",
      conversion: 8.7
    }
  ];

  const analyticsColumns = [
    { 
      key: 'page' as keyof typeof analyticsData[0], 
      title: t('showcase.datatables.analyticsPage'), 
      sortable: true,
      render: (value: string) => (
        <code className="bg-muted px-2 py-1 rounded text-sm font-mono">{value}</code>
      )
    },
    { 
      key: 'views' as keyof typeof analyticsData[0], 
      title: t('showcase.datatables.analyticsViews'), 
      sortable: true,
      render: (value: number) => (
        <div className="flex items-center gap-1">
          <Eye className="h-4 w-4 text-blue-600" />
          <span className="font-medium">{value.toLocaleString()}</span>
        </div>
      )
    },
    { 
      key: 'users' as keyof typeof analyticsData[0], 
      title: t('showcase.datatables.analyticsUsers'), 
      sortable: true,
      render: (value: number) => value.toLocaleString()
    },
    { 
      key: 'bounceRate' as keyof typeof analyticsData[0], 
      title: t('showcase.datatables.analyticsBounceRate'),
      render: (value: number) => (
        <div className="flex items-center gap-2">
          <div className="w-16 bg-muted rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${
                value > 40 ? 'bg-red-500' : value > 30 ? 'bg-yellow-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(value, 100)}%` }}
            />
          </div>
          <span className="text-sm font-medium">{value}%</span>
        </div>
      )
    },
    { 
      key: 'trend' as keyof typeof analyticsData[0], 
      title: t('showcase.datatables.analyticsTrend'),
      render: (value: string) => (
        <div className="flex items-center gap-1">
          {value === 'up' ? (
            <TrendingUp className="h-4 w-4 text-green-600" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-600" />
          )}
          <Badge variant={value === 'up' ? 'default' : 'destructive'}>
            {value === 'up' ? t('showcase.datatables.analyticsTrendUp') : t('showcase.datatables.analyticsTrendDown')}
          </Badge>
        </div>
      )
    }
  ];

  // Team Members Table
  const teamData = [
    { 
      id: 1, 
      name: t('showcase.datatables.teamMember1.name'), 
      position: t('showcase.datatables.teamMember1.position'), 
      department: t('showcase.datatables.teamMember1.department'), 
      email: "ahmet@company.com",
      phone: "+90 532 123 4567",
      location: t('showcase.datatables.teamMember1.location'),
      joinDate: "2023-01-15",
      status: t('showcase.datatables.status.active'),
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face"
    },
    { 
      id: 2, 
      name: t('showcase.datatables.teamMember2.name'), 
      position: t('showcase.datatables.teamMember2.position'), 
      department: t('showcase.datatables.teamMember2.department'), 
      email: "zeynep@company.com",
      phone: "+90 533 987 6543",
      location: t('showcase.datatables.teamMember2.location'),
      joinDate: "2022-08-22",
      status: t('showcase.datatables.status.active'),
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
    },
    { 
      id: 3, 
      name: t('showcase.datatables.teamMember3.name'), 
      position: t('showcase.datatables.teamMember3.position'), 
      department: t('showcase.datatables.teamMember3.department'), 
      email: "mehmet@company.com",
      phone: "+90 534 456 7890",
      location: t('showcase.datatables.teamMember3.location'),
      joinDate: "2023-03-10",
      status: t('showcase.datatables.status.vacation'),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const teamColumns = [
    { 
      key: 'avatar' as keyof typeof teamData[0], 
      title: t('showcase.datatables.teamMember'),
      render: (value: string, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={value} alt={row.name} />
            <AvatarFallback>{row.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{row.name}</div>
            <div className="text-sm text-muted-foreground">{row.position}</div>
          </div>
        </div>
      )
    },
    { 
      key: 'department' as keyof typeof teamData[0], 
      title: t('showcase.datatables.teamDepartment'),
      render: (value: string) => (
        <Badge variant="outline" className="font-medium">
          {value}
        </Badge>
      )
    },
    { 
      key: 'email' as keyof typeof teamData[0], 
      title: t('showcase.datatables.teamContact'),
      render: (value: string, row: any) => (
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-3 w-3 text-muted-foreground" />
            <span>{value}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-3 w-3" />
            <span>{row.phone}</span>
          </div>
        </div>
      )
    },
    { 
      key: 'location' as keyof typeof teamData[0], 
      title: t('showcase.datatables.teamLocation'),
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span>{value}</span>
        </div>
      )
    },
    { 
      key: 'status' as keyof typeof teamData[0], 
      title: t('showcase.datatables.teamStatus'),
      render: (value: string) => {
        const statusConfig = {
          active: { label: t('showcase.datatables.status.active'), variant: 'default' as const, icon: CheckCircle },
          vacation: { label: t('showcase.datatables.status.vacation'), variant: 'secondary' as const, icon: Clock },
          inactive: { label: t('showcase.datatables.status.inactive'), variant: 'destructive' as const, icon: XCircle },
          default: { label: t('showcase.datatables.status.unknown'), variant: 'outline' as const, icon: HelpCircle }
        };
        const config = statusConfig[value as keyof typeof statusConfig] || statusConfig.default;
        const Icon = config.icon;
        
        return (
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            <Badge variant={config.variant}>{config.label}</Badge>
          </div>
        );
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('showcase.datatables.pageTitle')}</title>
        <meta name="description" content={t('showcase.datatables.metaDescription')} />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t('showcase.datatables.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('showcase.datatables.description')}
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.datatables.fullFeaturedTable')}</h2>
            <Badge variant="default">{t('showcase.datatables.allFeatures')}</Badge>
          </div>
          <DataTable
            data={tableData}
            columns={tableColumns}
            title={t('showcase.datatables.userManagement')}
            searchable={true}
            filterable={true}
            exportable={true}
            pageSize={5}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.datatables.ecommerceProducts')}</h2>
            <Badge variant="outline">{t('showcase.datatables.stylishDesign')}</Badge>
          </div>
          <DataTable
            data={productsData}
            columns={productsColumns}
            title={t('showcase.datatables.productCatalog')}
            searchable={true}
            filterable={true}
            exportable={true}
            pageSize={4}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.datatables.webAnalytics')}</h2>
            <Badge variant="default">{t('showcase.datatables.trendAnalysis')}</Badge>
          </div>
          <DataTable
            data={analyticsData}
            columns={analyticsColumns}
            title={t('showcase.datatables.pagePerformance')}
            searchable={true}
            filterable={false}
            exportable={true}
            pageSize={4}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.datatables.teamMembers')}</h2>
            <Badge variant="secondary">{t('showcase.datatables.profileView')}</Badge>
          </div>
          <DataTable
            data={teamData}
            columns={teamColumns}
            title={t('showcase.datatables.companyPersonnel')}
            searchable={true}
            filterable={true}
            exportable={true}
            pageSize={3}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">{t('showcase.datatables.simpleTable')}</h2>
            <Badge variant="secondary">{t('showcase.datatables.basic')}</Badge>
          </div>
          <DataTable
            data={smallTableData}
            columns={tableColumns}
            title={t('showcase.datatables.simpleUserList')}
            searchable={false}
            filterable={false}
            exportable={false}
            pageSize={10}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">{t('showcase.datatables.features')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SpotlightCard
              title={t('showcase.datatables.searchAndFilter')}
              description={t('showcase.datatables.realtimeSearch')}
              icon={Search}
              spotlightColor="#3b82f6"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
            <SpotlightCard
              title={t('showcase.datatables.sorting')}
              description={t('showcase.datatables.biDirectionalSorting')}
              icon={ChevronUp}
              spotlightColor="#10b981"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
            <SpotlightCard
              title={t('showcase.datatables.pagination')}
              description={t('showcase.datatables.pageSizeAdjustable')}
              icon={ChevronRight}
              spotlightColor="#f59e0b"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
            <SpotlightCard
              title={t('showcase.datatables.export')}
              description={t('showcase.datatables.csvAndExcelExport')}
              icon={Download}
              spotlightColor="#ef4444"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
            <SpotlightCard
              title={t('showcase.datatables.customRender')}
              description={t('showcase.datatables.customColumnRender')}
              icon={Settings}
              spotlightColor="#8b5cf6"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
            <SpotlightCard
              title={t('showcase.datatables.responsive')}
              description={t('showcase.datatables.mobileFriendly')}
              icon={Smartphone}
              spotlightColor="#06b6d4"
              className="bg-background/50 backdrop-blur-lg border-white/20"
            />
          </div>
        </section>
      </div>
    </>
  );
}
