import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme, themes } from "@/contexts/ThemeContext";
import { 
  Palette, 
  Check, 
  Crown, 
  Sparkles, 
  Zap,
  Star,
  Moon,
  Atom,
  Gem,
  Flame,
  Waves,
  Circle
} from "lucide-react";

const themeIcons = {
  dark: Moon,
  midnight: Atom,
  neon: Zap,
  royal: Crown,
  aurora: Waves,
  cyberpunk: Flame,
  galaxy: Star,
  emerald: Gem,
  pureblack: Circle
};

const themeColors = {
  dark: 'from-slate-600 to-slate-800',
  midnight: 'from-black to-purple-900',
  neon: 'from-cyan-400 to-pink-500',
  royal: 'from-purple-600 to-purple-900',
  aurora: 'from-green-400 to-blue-600',
  cyberpunk: 'from-yellow-400 to-pink-600',
  galaxy: 'from-purple-900 to-pink-600',
  emerald: 'from-emerald-600 to-green-800',
  pureblack: 'from-black to-gray-900'
};

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Palette className="h-4 w-4" />
          <span className="sr-only">Tema seç</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary" />
            Premium Tema Seçici
          </DialogTitle>
          <DialogDescription className="text-base">
            Ücretli temalarımızdan birini seçin ve admin panelinizi kişiselleştirin
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {Object.entries(themes).map(([themeKey, themeConfig]) => {
            const Icon = themeIcons[themeKey as keyof typeof themeIcons];
            const isSelected = theme === themeKey;
            
            return (
              <Card 
                key={themeKey}
                className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden ${
                  isSelected ? 'ring-2 ring-primary shadow-lg' : ''
                }`}
                onClick={() => {
                  setTheme(themeKey as any);
                  setTimeout(() => setOpen(false), 500);
                }}
              >
                {/* Theme Preview Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${themeColors[themeKey as keyof typeof themeColors]} opacity-20`}
                />
                
                {/* Selected Indicator */}
                {isSelected && (
                  <div className="absolute top-2 right-2 z-10">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
                
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${themeColors[themeKey as keyof typeof themeColors]} shadow-lg`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{themeConfig.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{themeConfig.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  {/* Theme Color Palette Preview */}
                  <div className="space-y-3">
                    <div className="flex gap-1">
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: `hsl(${themeConfig.colors.primary})` }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: `hsl(${themeConfig.colors.secondary})` }}
                      />
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: `hsl(${themeConfig.colors.accent})` }}
                      />
                    </div>
                    
                    {/* Premium Badge */}
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 border-yellow-500/30"
                      >
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                      
                      {isSelected && (
                        <Badge variant="default" className="text-xs">
                          Aktif
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <div className="flex items-center gap-3">
            <Crown className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Premium Tema Koleksiyonu</h3>
              <p className="text-sm text-muted-foreground">
                Profesyonel tasarlanmış, özel efektli ve tamamen özelleştirilebilir temalar
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
