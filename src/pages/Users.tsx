import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const users = [
  { id: 1, name: "Ayşe Yılmaz", email: "ayse@example.com", role: "Admin" },
  { id: 2, name: "Mehmet Demir", email: "mehmet@example.com", role: "Editör" },
  { id: 3, name: "Elif Kaya", email: "elif@example.com", role: "Üye" },
];

export default function UsersPage() {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>Kullanıcılar | React19 Admin</title>
        <meta name="description" content="Kullanıcı yönetimi ve rol atama örnek sayfası." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Kullanıcılar</h1>
        <p className="text-muted-foreground mt-1">Kullanıcı listesi ve rolleri</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {users.map((u) => (
          <Card key={u.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {u.name}
                <Badge variant="outline">{u.role}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{u.email}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
