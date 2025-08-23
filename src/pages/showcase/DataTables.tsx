import { Helmet } from "react-helmet-async";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DataTables() {
  const tableData = [
    { id: 1, name: "Ahmet Yılmaz", email: "ahmet@example.com", role: "Admin", status: "Aktif", score: 95 },
    { id: 2, name: "Fatma Kaya", email: "fatma@example.com", role: "Editör", status: "Aktif", score: 87 },
    { id: 3, name: "Mehmet Demir", email: "mehmet@example.com", role: "Üye", status: "Pasif", score: 72 },
    { id: 4, name: "Ayşe Özkan", email: "ayse@example.com", role: "Editör", status: "Aktif", score: 91 },
    { id: 5, name: "Ali Arslan", email: "ali@example.com", role: "Üye", status: "Aktif", score: 83 },
    { id: 6, name: "Zeynep Çelik", email: "zeynep@example.com", role: "Admin", status: "Aktif", score: 98 },
    { id: 7, name: "Murat Şahin", email: "murat@example.com", role: "Üye", status: "Pasif", score: 65 },
    { id: 8, name: "Elif Doğan", email: "elif@example.com", role: "Editör", status: "Aktif", score: 89 }
  ];

  const tableColumns = [
    { key: 'id' as keyof typeof tableData[0], title: 'ID', sortable: true },
    { key: 'name' as keyof typeof tableData[0], title: 'Ad Soyad', sortable: true },
    { key: 'email' as keyof typeof tableData[0], title: 'E-posta', sortable: true },
    { 
      key: 'role' as keyof typeof tableData[0], 
      title: 'Rol', 
      render: (value: string) => <Badge variant="outline">{value}</Badge>
    },
    { 
      key: 'status' as keyof typeof tableData[0], 
      title: 'Durum',
      render: (value: string) => (
        <Badge variant={value === 'Aktif' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    { 
      key: 'score' as keyof typeof tableData[0], 
      title: 'Puan',
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

  return (
    <>
      <Helmet>
        <title>Veri Tabloları - CodeMaze Admin</title>
        <meta name="description" content="Gelişmiş özellikli, sıralanabilir ve filtrelenebilir veri tabloları" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Veri Tabloları
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Güçlü arama, filtreleme ve sıralama özellikleri ile gelişmiş veri tabloları
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Tam Özellikli Tablo</h2>
            <Badge variant="default">Tüm Özellikler</Badge>
          </div>
          <DataTable
            data={tableData}
            columns={tableColumns}
            title="Kullanıcı Yönetimi"
            searchable={true}
            filterable={true}
            exportable={true}
            pageSize={5}
          />
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Basit Tablo</h2>
            <Badge variant="secondary">Temel</Badge>
          </div>
          <DataTable
            data={smallTableData}
            columns={tableColumns}
            title="Basit Kullanıcı Listesi"
            searchable={false}
            filterable={false}
            exportable={false}
            pageSize={10}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Özellikler</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Arama ve Filtreleme</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Gerçek zamanlı arama ve kolon bazlı filtreleme</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sıralama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tüm kolonlar için çift yönlü sıralama</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Sayfa başına kayıt sayısı ayarlanabilir</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Export</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">CSV ve Excel formatında veri dışa aktarma</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Custom Render</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Özel kolon render fonksiyonları</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mobil cihazlarda uyumlu görünüm</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}