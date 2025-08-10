import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const rows = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `Kullanıcı ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editör" : "Üye",
  status: i % 5 === 0 ? "Pasif" : "Aktif",
}));

export default function TablesPage() {
  const [q, setQ] = useState("");
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return rows.filter((r) =>
      [r.name, r.email, r.role, r.status].some((v) => v.toLowerCase().includes(s))
    );
  }, [q]);

  return (
    <div>
      <Helmet>
        <title>Tablolar | React19 Admin</title>
        <meta name="description" content="Filtreleme ve arama destekli tablo örneği." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Tablolar</h1>
        <p className="text-muted-foreground mt-1">Arama ve filtreleme destekli tablo örneği</p>
      </header>

      <Card>
        <CardHeader className="gap-2">
          <CardTitle>Üyeler</CardTitle>
          <Input placeholder="Ara..." value={q} onChange={(e) => setQ(e.target.value)} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Toplam {filtered.length} kayıt</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Ad</TableHead>
                <TableHead>E-posta</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Durum</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>{r.id}</TableCell>
                  <TableCell>{r.name}</TableCell>
                  <TableCell>{r.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{r.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={r.status === "Aktif" ? "secondary" : "destructive"}>{r.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
