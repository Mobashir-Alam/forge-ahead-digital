import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, FileText, Image, FileArchive, Download } from "lucide-react";

const files = [
  { name: "Homepage-Mockup-v3.fig", client: "Acme Corp", type: "Design", size: "4.2 MB", date: "Mar 8, 2026", icon: Image },
  { name: "Brand-Guidelines.pdf", client: "TechStart Inc", type: "Document", size: "1.8 MB", date: "Mar 7, 2026", icon: FileText },
  { name: "Project-Assets.zip", client: "Bella Cucina", type: "Archive", size: "24 MB", date: "Mar 5, 2026", icon: FileArchive },
  { name: "Contract-Signed.pdf", client: "GreenLeaf Studios", type: "Document", size: "320 KB", date: "Mar 4, 2026", icon: FileText },
  { name: "Logo-Variations.png", client: "Acme Corp", type: "Image", size: "2.1 MB", date: "Mar 3, 2026", icon: Image },
];

export default function AdminFiles() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Files</h2>
          <p className="text-muted-foreground text-sm">Manage uploaded files</p>
        </div>
        <Button variant="hero" size="sm"><Upload className="h-4 w-4 mr-2" /> Upload File</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Date</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {files.map((f, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <f.icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{f.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{f.client}</TableCell>
                  <TableCell><Badge variant="secondary" className="text-xs">{f.type}</Badge></TableCell>
                  <TableCell className="text-muted-foreground">{f.size}</TableCell>
                  <TableCell className="text-muted-foreground">{f.date}</TableCell>
                  <TableCell><Button variant="ghost" size="sm"><Download className="h-4 w-4" /></Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
