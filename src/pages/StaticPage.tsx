import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

type StaticPageKey = "forgotPassword" | "privacy" | "terms" | "help";

interface StaticPageProps {
  page: StaticPageKey;
}

export default function StaticPage({ page }: StaticPageProps) {
  const { t } = useLanguage();
  const title = t(`static.${page}.title`);

  return (
    <>
      <Helmet>
        <title>{title} - React19 Admin</title>
      </Helmet>
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-xl">
          <Button variant="ghost" size="sm" asChild className="mb-6 text-muted-foreground hover:text-foreground">
            <Link to="/login" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              {t("static.backToLogin")}
            </Link>
          </Button>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{t(`static.${page}.body`)}</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}