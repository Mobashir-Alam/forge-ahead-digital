import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Image, FileSpreadsheet, File } from "lucide-react";
import { motion } from "framer-motion";

const files = [
  { name: "homepage-mockup-v3.fig", size: "4.2 MB", date: "Mar 5, 2026", icon: Image },
  { name: "brand-guidelines.pdf", size: "1.8 MB", date: "Mar 3, 2026", icon: FileText },
  { name: "project-requirements.docx", size: "320 KB", date: "Feb 20, 2026", icon: File },
  { name: "invoice-001.pdf", size: "145 KB", date: "Feb 20, 2026", icon: FileText },
  { name: "analytics-report.xlsx", size: "2.1 MB", date: "Feb 18, 2026", icon: FileSpreadsheet },
  { name: "logo-assets.zip", size: "8.4 MB", date: "Feb 15, 2026", icon: File },
];

export default function Files() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Files</h2>
          <p className="text-muted-foreground text-sm">Project files and documents</p>
        </div>
        <Button variant="hero" size="sm"><Upload className="h-4 w-4 mr-2" /> Upload</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {files.map((file, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
            <Card className="hover:border-primary/30 transition-colors cursor-pointer">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <file.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size} · {file.date}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
