import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Users, Eye } from "lucide-react";

const clients = [
  { id: 1, name: "John Smith", email: "john@acmecorp.com", company: "Acme Corp", projects: 2, status: "Active" },
  { id: 2, name: "Sarah Johnson", email: "sarah@techstart.com", company: "TechStart Inc", projects: 1, status: "Active" },
  { id: 3, name: "Marco Rossi", email: "marco@bellacucina.com", company: "Bella Cucina", projects: 1, status: "Active" },
  { id: 4, name: "Emily Chen", email: "emily@greenleaf.com", company: "GreenLeaf Studios", projects: 1, status: "New" },
  { id: 5, name: "Alex Turner", email: "alex@pixelwave.com", company: "PixelWave", projects: 0, status: "Inactive" },
];

export default function AdminClients() {
  const [selected, setSelected] = useState<typeof clients[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Clients</h2>
          <p className="text-muted-foreground text-sm">Manage your clients</p>
        </div>
        <Button variant="hero" size="sm"><Users className="h-4 w-4 mr-2" /> Add Client</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Projects</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {clients.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell className="text-muted-foreground">{c.email}</TableCell>
                  <TableCell>{c.company}</TableCell>
                  <TableCell>{c.projects}</TableCell>
                  <TableCell>
                    <Badge className={`border-0 text-xs ${c.status === "Active" ? "bg-green-100 text-green-700" : c.status === "New" ? "bg-blue-100 text-blue-700" : "bg-muted text-muted-foreground"}`}>
                      {c.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => setSelected(c)}><Eye className="h-4 w-4" /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-display">{selected?.name}</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-muted-foreground">Email:</span> {selected.email}</div>
                <div><span className="text-muted-foreground">Company:</span> {selected.company}</div>
                <div><span className="text-muted-foreground">Projects:</span> {selected.projects}</div>
                <div><span className="text-muted-foreground">Status:</span> {selected.status}</div>
              </div>
              <Card>
                <CardHeader className="py-3 px-4"><CardTitle className="text-sm">Recent Activity</CardTitle></CardHeader>
                <CardContent className="px-4 pb-4 text-sm text-muted-foreground">
                  <p>• Project kickoff meeting completed</p>
                  <p>• Payment of $2,500 received</p>
                  <p>• Design phase started</p>
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
