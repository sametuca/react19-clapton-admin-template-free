import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const roles = [
  { id: 1, name: "Admin", perms: ["Kullanıcı Yönetimi", "Rol Yönetimi", "Raporlar"] },
  { id: 2, name: "Editör", perms: ["İçerik Düzenleme", "Yorum Yönetimi"] },
  { id: 3, name: "Üye", perms: ["Profil Görüntüleme"] },
];

export default function RolesPage() {
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div>
      <Helmet>
        <title>Roller | React19 Admin</title>
        <meta name="description" content="Rol ve izinlerin listelendiği örnek sayfa." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Roller</h1>
        <p className="text-muted-foreground mt-1">Roller ve izinler</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {roles.map((r) => (
          <Card key={r.id}>
            <CardHeader>
              <CardTitle>{r.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {r.perms.map((p) => (
                <Badge key={p} variant="secondary">{p}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
