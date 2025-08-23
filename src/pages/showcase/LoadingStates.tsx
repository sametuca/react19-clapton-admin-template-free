import { Helmet } from "react-helmet-async";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function LoadingStates() {
  const [isLoading, setIsLoading] = useState(false);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Yükleme Durumları - CodeMaze Admin</title>
        <meta name="description" content="Farklı boyutlarda ve stillerde loading spinner componentleri" />
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Yükleme Durumları
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kullanıcı deneyimini iyileştiren smooth loading animasyonları
          </p>
        </div>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Farklı Boyutlar</h2>
            <Badge variant="secondary">Responsive</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Küçük Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="sm" text="Yükleniyor..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Orta Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text="İşleniyor..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Büyük Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="lg" text="Hazırlanıyor..." />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">Metin Varyasyonları</h2>
            <Badge variant="outline">Özelleştirilebilir</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Sadece Spinner</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kısa Metin</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text="Bekleyin..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Uzun Metin</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text="Veriler yükleniyor, lütfen bekleyin..." />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Özel Mesaj</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center py-8">
                <LoadingSpinner size="md" text="Dosyalar işleniyor..." />
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold">İnteraktif Demo</h2>
            <Badge variant="default">Canlı</Badge>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Loading Simülasyonu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <Button onClick={simulateLoading} disabled={isLoading}>
                  {isLoading ? "Yükleniyor..." : "3 Saniye Yükleme Başlat"}
                </Button>
              </div>
              {isLoading && (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="lg" text="Demo yükleme işlemi devam ediyor..." />
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Spinner Özellikleri</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>CSS Animasyonları</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pure CSS ile smooth döndürme animasyonu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Üç Boyut Seçeneği</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Small (16px), Medium (24px), Large (32px)</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Opsiyonel Metin</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Spinner altında özelleştirilebilir mesaj</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tema Uyumlu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Dark/Light tema otomatik adaptasyonu</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kolay Entegrasyon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Tek component ile hızlı kullanım</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performanslı</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Hafif ve GPU hızlandırmalı animasyon</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}