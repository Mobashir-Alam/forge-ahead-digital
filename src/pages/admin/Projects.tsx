import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Pencil, RefreshCw } from "lucide-react";

const projects = [
  { name: "E-commerce Redesign", client: "Acme Corp", status: "In Progress", progress: 65, deadline: "Apr 15, 2026" },
  { name: "SaaS Dashboard", client: "TechStart Inc", status: "In Progress", progress: 40, deadline: "May 1, 2026" },
  { name: "Restaurant Website", client: "Bella Cucina", status: "Review", progress: 90, deadline: "Mar 20, 2026" },
  { name: "Portfolio Site", client: "GreenLeaf Studios", status: "Planning", progress: 10, deadline: "Jun 1, 2026" },
  { name: "Mobile App Landing", client: "PixelWave", status: "Completed", progress: 100, deadline: "Feb 28, 2026" },
];

const statusColor: Record<string, string> = {
  "In Progress": "bg-blue-100 text-blue-700",
  "Review": "bg-amber-100 text-amber-700",
  "Planning": "bg-purple-100 text-purple-700",
  "Completed": "bg-green-100 text-green-700",
};

export default function AdminProjects() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Projects</h2>
          <p className="text-muted-foreground text-sm">Manage all projects</p>
        </div>
        <Button variant="hero" size="sm"><Plus className="h-4 w-4 mr-2" /> Create Project</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Project</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((p) => (
                <TableRow key={p.name}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="text-muted-foreground">{p.client}</TableCell>
                  <TableCell>
                    <Badge className={`border-0 text-xs ${statusColor[p.status] || "bg-muted text-muted-foreground"}`}>{p.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <Progress value={p.progress} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground w-8">{p.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{p.deadline}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm"><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="sm"><RefreshCw className="h-4 w-4" /></Button>
                    </div>
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
