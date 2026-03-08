import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, FolderKanban, CreditCard, CalendarClock, Activity } from "lucide-react";

const stats = [
  { label: "Total Clients", value: "24", icon: Users, color: "text-blue-600 bg-blue-100" },
  { label: "Active Projects", value: "12", icon: FolderKanban, color: "text-emerald-600 bg-emerald-100" },
  { label: "Pending Payments", value: "$18,500", icon: CreditCard, color: "text-amber-600 bg-amber-100" },
  { label: "Upcoming Meetings", value: "5", icon: CalendarClock, color: "text-purple-600 bg-purple-100" },
];

const recentActivity = [
  { text: "Project 'E-commerce Redesign' updated to Development phase", time: "2 hours ago" },
  { text: "Payment of $2,500 received from Acme Corp", time: "5 hours ago" },
  { text: "Meeting scheduled with TechStart Inc for Mar 12", time: "Yesterday" },
  { text: "New client 'GreenLeaf Studios' added", time: "Yesterday" },
  { text: "Task 'Homepage mockup' marked complete", time: "2 days ago" },
];

const latestProjects = [
  { name: "E-commerce Redesign", client: "Acme Corp", status: "In Progress", progress: 65 },
  { name: "SaaS Dashboard", client: "TechStart Inc", status: "In Progress", progress: 40 },
  { name: "Restaurant Website", client: "Bella Cucina", status: "Review", progress: 90 },
  { name: "Portfolio Site", client: "GreenLeaf Studios", status: "Planning", progress: 10 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold">Admin Dashboard</h2>
        <p className="text-muted-foreground text-sm">Overview of your agency</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${s.color}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-display font-bold">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-display flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" /> Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-display">Latest Projects</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {latestProjects.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell className="font-medium">{p.name}</TableCell>
                    <TableCell className="text-muted-foreground">{p.client}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">{p.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{p.progress}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
