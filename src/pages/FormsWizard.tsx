import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export default function FormsWizard() {
  const [step, setStep] = useState(1);
  const canonical = typeof window !== "undefined" ? window.location.href : "";

  const next = () => setStep((s) => Math.min(3, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const submit = () => {
    toast({ title: "Form gönderildi", description: "Yeni kayıt başarıyla oluşturuldu." });
  };

  return (
    <div>
      <Helmet>
        <title>Form Sihirbazı | CodeMaze Admin</title>
        <meta name="description" content="Çok adımlı form sihirbazı örneği." />
        {canonical && <link rel="canonical" href={canonical} />}
      </Helmet>

      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Form Sihirbazı</h1>
        <p className="text-muted-foreground mt-1">3 adımda örnek form</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Adım {step} / 3</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Ad" />
              <Input placeholder="Soyad" />
              <Input placeholder="E-posta" type="email" className="sm:col-span-2" />
            </div>
          )}
          {step === 2 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Şirket" />
              <Input placeholder="Telefon" />
              <Select>
                <SelectTrigger className="sm:col-span-2">
                  <SelectValue placeholder="Rol seçin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editör</SelectItem>
                  <SelectItem value="member">Üye</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          {step === 3 && (
            <div className="grid gap-4">
              <Input placeholder="Adres" />
              <Input placeholder="Şehir" />
              <Input placeholder="Ülke" />
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <Button variant="secondary" onClick={prev} disabled={step === 1}>Geri</Button>
            {step < 3 ? (
              <Button onClick={next}>İleri</Button>
            ) : (
              <Button onClick={submit}>Gönder</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
