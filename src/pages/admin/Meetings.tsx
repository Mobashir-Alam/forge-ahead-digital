import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Video } from "lucide-react";

const meetings = [
  { client: "Acme Corp", date: "Mar 12, 2026", time: "10:00 AM", link: "#", status: "Upcoming" },
  { client: "TechStart Inc", date: "Mar 14, 2026", time: "2:00 PM", link: "#", status: "Upcoming" },
  { client: "Bella Cucina", date: "Mar 10, 2026", time: "11:00 AM", link: "#", status: "Completed" },
  { client: "GreenLeaf Studios", date: "Mar 18, 2026", time: "3:00 PM", link: "#", status: "Scheduled" },
];

export default function AdminMeetings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Meetings</h2>
          <p className="text-muted-foreground text-sm">Manage client meetings</p>
        </div>
        <Button variant="hero" size="sm"><Plus className="h-4 w-4 mr-2" /> Schedule Meeting</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((m, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{m.client}</TableCell>
                  <TableCell>{m.date}</TableCell>
                  <TableCell className="text-muted-foreground">{m.time}</TableCell>
                  <TableCell>
                    <Badge className={`border-0 text-xs ${m.status === "Completed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                      {m.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {m.status !== "Completed" && (
                      <Button variant="outline" size="sm"><Video className="h-4 w-4 mr-2" /> Join</Button>
                    )}
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
