import { useState } from "react";
import { useLayoutSettings, LayoutType, LayoutWidth, LayoutPosition, TopbarTone } from "@/contexts/LayoutContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MonitorSmartphone, LayoutTemplate, AlignJustify, Columns, Scan, Maximize, Minimize, Sun, Moon, Wand2 } from "lucide-react";

export function ThemeCustomizer() {
  const { layoutType, layoutWidth, layoutPosition, topbarTone, setSettings, resetSettings } = useLayoutSettings();
  const [open, setOpen] = useState(false);

  const Item = ({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: any; label: string }) => (
    <Button variant={active ? "default" : "outline"} onClick={onClick} className={cn("h-20 flex-1 flex flex-col items-center gap-2", active && "ring-2 ring-primary")}
    >
      <Icon className="h-5 w-5" />
      <span className="text-xs">{label}</span>
    </Button>
  );

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setOpen(true)} className="gap-2">
        <Wand2 className="h-4 w-4" />
        Customize
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle>Theme Customizer</SheetTitle>
          </SheetHeader>

          <div className="space-y-6 py-4">
            <section className="space-y-2">
              <h4 className="font-semibold text-sm">Layout</h4>
              <div className="flex gap-2">
                <Item active={layoutType === "vertical"} onClick={() => setSettings({ layoutType: "vertical" })} icon={AlignJustify} label="Vertical" />
                <Item active={layoutType === "horizontal"} onClick={() => setSettings({ layoutType: "horizontal" })} icon={LayoutTemplate} label="Horizontal" />
                <Item active={layoutType === "two-column"} onClick={() => setSettings({ layoutType: "two-column" })} icon={Columns} label="Two Column" />
                <Item active={layoutType === "semi-box"} onClick={() => setSettings({ layoutType: "semi-box" })} icon={Scan} label="Semi Box" />
              </div>
            </section>

            <section className="space-y-2">
              <h4 className="font-semibold text-sm">Layout Width</h4>
              <div className="flex gap-2">
                <Item active={layoutWidth === "fluid"} onClick={() => setSettings({ layoutWidth: "fluid" })} icon={Maximize} label="Fluid" />
                <Item active={layoutWidth === "boxed"} onClick={() => setSettings({ layoutWidth: "boxed" })} icon={Minimize} label="Boxed" />
              </div>
            </section>

            <section className="space-y-2">
              <h4 className="font-semibold text-sm">Layout Position</h4>
              <div className="flex gap-2">
                <Item active={layoutPosition === "fixed"} onClick={() => setSettings({ layoutPosition: "fixed" })} icon={MonitorSmartphone} label="Fixed" />
                <Item active={layoutPosition === "scrollable"} onClick={() => setSettings({ layoutPosition: "scrollable" })} icon={MonitorSmartphone} label="Scrollable" />
              </div>
            </section>

            <section className="space-y-2">
              <h4 className="font-semibold text-sm">Topbar Color</h4>
              <div className="flex gap-2">
                <Item active={topbarTone === "light"} onClick={() => setSettings({ topbarTone: "light" })} icon={Sun} label="Light" />
                <Item active={topbarTone === "dark"} onClick={() => setSettings({ topbarTone: "dark" })} icon={Moon} label="Dark" />
              </div>
            </section>

            <div className="pt-2">
              <Button variant="secondary" onClick={resetSettings} className="w-full">Reset to Default</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
