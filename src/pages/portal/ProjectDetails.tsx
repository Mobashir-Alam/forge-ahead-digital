import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock, FileText, MessageSquare } from "lucide-react";

const tasks = [
  { label: "Homepage design approved", done: true },
  { label: "Product page wireframes", done: true },
  { label: "Checkout flow development", done: false },
  { label: "Payment integration", done: false },
  { label: "QA testing", done: false },
];

const updates = [
  { text: "Design mockups finalized", date: "Mar 5, 2026" },
  { text: "Development sprint 1 started", date: "Mar 1, 2026" },
  { text: "Project kickoff meeting", date: "Feb 20, 2026" },
];

const files = [
  { name: "homepage-mockup-v3.fig", size: "4.2 MB" },
  { name: "brand-guidelines.pdf", size: "1.8 MB" },
  { name: "requirements.docx", size: "320 KB" },
];

export default function ProjectDetails() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-2xl font-display font-bold">E-commerce Redesign</h2>
        <div className="flex items-center gap-3 mt-2">
          <Badge className="bg-primary/10 text-primary border-0">In Progress</Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> Deadline: Mar 30, 2026</span>
        </div>
      </div>

      <Card>
        <CardHeader><CardTitle className="text-base font-display">Progress</CardTitle></CardHeader>
        <CardContent>
          <Progress value={65} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">65% complete</p>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base font-display">Tasks</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-3">
                <Checkbox checked={task.done} />
                <span className={`text-sm ${task.done ? "line-through text-muted-foreground" : ""}`}>{task.label}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base font-display">Project Notes</CardTitle></CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Full redesign of the existing e-commerce platform. Focus on improving conversion rates, mobile experience, and checkout flow. Using React with Tailwind CSS and integrating Stripe for payments.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle className="text-base font-display">Files</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                <FileText className="h-4 w-4 text-primary shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">{file.size}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base font-display">Updates</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {updates.map((update, i) => (
              <div key={i} className="flex items-start gap-3">
                <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">{update.text}</p>
                  <p className="text-xs text-muted-foreground">{update.date}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
