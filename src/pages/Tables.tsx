import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";

const createRows = (t: any) => Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  name: `${t('tables.roles.member')} ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  role: i % 3 === 0 ? t('tables.roles.admin') : i % 3 === 1 ? t('tables.roles.editor') : t('tables.roles.member'),
  status: i % 5 === 0 ? t('tables.statuses.inactive') : t('tables.statuses.active'),
}));

export default function TablesPage() {
  const { t } = useLanguage();
  const [q, setQ] = useState("");
  const canonical = typeof window !== "undefined" ? window.location.href : "";
  
  const rows = createRows(t);

  const filtered = useMemo(() => {
    const s = q.toLowerCase();
    return rows.filter((r) =>
      [r.name, r.email, r.role, r.status].some((v) => v.toLowerCase().includes(s))
    );
  }, [q, rows]);

  return (
    <div>
      <Helmet>
        <title>{t('tables.pageTitle')} | React19 Admin</title>
        <meta name="description" content={t('tables.metaDescription')} />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{t('tables.title')}</h1>
        <p className="text-muted-foreground mt-1">{t('tables.subtitle')}</p>
      </header>

      <SpotlightCard
        title={t('tables.members')}
        description=""
        icon={null}
        spotlightColor="#3b82f6"
        className="bg-background/50 backdrop-blur-lg border-white/20"
      >
        <div className="space-y-4">
          <Input placeholder={t('tables.searchPlaceholder')} value={q} onChange={(e) => setQ(e.target.value)} />
          <Table>
            <TableCaption>{t('tables.totalRecords').replace('{count}', filtered.length.toString())}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>{t('tables.columns.id')}</TableHead>
                <TableHead>{t('tables.columns.name')}</TableHead>
                <TableHead>{t('tables.columns.email')}</TableHead>
                <TableHead>{t('tables.columns.role')}</TableHead>
                <TableHead>{t('tables.columns.status')}</TableHead>
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
                    <Badge variant={r.status === t('tables.statuses.active') ? "secondary" : "destructive"}>{r.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SpotlightCard>
    </div>
  );
}
