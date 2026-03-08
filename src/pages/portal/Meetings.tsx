import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { motion } from "framer-motion";

const meetings = [
  { topic: "Design Review", date: "Mar 12, 2026", time: "2:00 PM EST", status: "Upcoming", link: "#" },
  { topic: "Sprint Planning", date: "Mar 15, 2026", time: "10:00 AM EST", status: "Upcoming", link: "#" },
  { topic: "Client Check-in", date: "Mar 8, 2026", time: "3:00 PM EST", status: "Completed", link: "#" },
  { topic: "Project Kickoff", date: "Feb 20, 2026", time: "11:00 AM EST", status: "Completed", link: "#" },
];

export default function Meetings() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-display font-bold">Meetings</h2>
        <p className="text-muted-foreground text-sm">Your scheduled and past meetings</p>
      </div>

      <div className="space-y-3">
        {meetings.map((meeting, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Video className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{meeting.topic}</h3>
                    <p className="text-xs text-muted-foreground">{meeting.date} · {meeting.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className={`border-0 text-xs ${meeting.status === "Upcoming" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {meeting.status}
                  </Badge>
                  {meeting.status === "Upcoming" && (
                    <Button variant="outline" size="sm" asChild><a href={meeting.link}>Join</a></Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
