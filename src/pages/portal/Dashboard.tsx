import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import {
  CalendarClock,
  CreditCard,
  FolderPlus,
  Upload,
  LifeBuoy,
  Video,
  FileUp,
  DollarSign,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  Paintbrush,
  TestTube,
  Rocket,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const fade = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

const progressSteps = [
  { label: "Design", icon: Paintbrush, done: true },
  { label: "Development", icon: Code, done: true },
  { label: "Testing", icon: TestTube, done: false, active: true },
  { label: "Deployment", icon: Rocket, done: false },
  { label: "Completed", icon: Trophy, done: false },
];

const recentActivity = [
  { text: "Design mockups uploaded", icon: FileUp, time: "2 hours ago" },
  { text: "Payment of $2,500 received", icon: DollarSign, time: "1 day ago" },
  { text: "Meeting scheduled for Mar 12", icon: Calendar, time: "2 days ago" },
  { text: "Homepage development completed", icon: CheckCircle2, time: "3 days ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-6xl">
      {/* Welcome */}
      <motion.div {...fade}>
        <Card className="gradient-bg text-primary-foreground border-0">
          <CardContent className="p-6">
            <h2 className="text-2xl font-display font-bold">Welcome back, John! 👋</h2>
            <p className="mt-1 text-primary-foreground/80">Here's an overview of your projects and activities.</p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Top row */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* Active Project */}
        <motion.div {...fade} transition={{ delay: 0.05 }}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display font-semibold">E-commerce Redesign</span>
                <Badge className="bg-primary/10 text-primary border-0">In Progress</Badge>
              </div>
              <Progress value={65} className="h-2" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>65% complete</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> Mar 30, 2026</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Upcoming Meeting */}
        <motion.div {...fade} transition={{ delay: 0.1 }}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Meeting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg gradient-bg flex items-center justify-center">
                  <Video className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Design Review</p>
                  <p className="text-xs text-muted-foreground">Mar 12, 2026 · 2:00 PM EST</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#">Join Meeting</a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Status */}
        <motion.div {...fade} transition={{ delay: 0.15 }}>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Payment Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Total</span><span className="font-semibold">$10,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Paid</span><span className="font-semibold text-green-600">$7,500</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Remaining</span><span className="font-semibold text-amber-600">$2,500</span></div>
              <Progress value={75} className="h-2 mt-1" />
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Project Progress */}
      <motion.div {...fade} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader><CardTitle className="text-base font-display">Project Progress</CardTitle></CardHeader>
          <CardContent>
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
              {progressSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-2 min-w-[80px]">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${step.done ? "gradient-bg text-primary-foreground" : step.active ? "border-2 border-primary text-primary bg-primary/5" : "border-2 border-border text-muted-foreground"}`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className={`text-xs font-medium text-center ${step.done || step.active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* Recent Activity */}
        <motion.div {...fade} transition={{ delay: 0.25 }}>
          <Card className="h-full">
            <CardHeader><CardTitle className="text-base font-display">Recent Activity</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.text}</p>
                    <p className="text-xs text-muted-foreground">{item.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div {...fade} transition={{ delay: 0.3 }}>
          <Card className="h-full">
            <CardHeader><CardTitle className="text-base font-display">Quick Actions</CardTitle></CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {[
                { label: "New Project", icon: FolderPlus, to: "/projects" },
                { label: "Schedule Meeting", icon: CalendarClock, to: "/meetings" },
                { label: "Upload File", icon: Upload, to: "/files" },
                { label: "Contact Support", icon: LifeBuoy, to: "/contact" },
              ].map((action) => (
                <Link key={action.label} to={action.to}>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-pointer text-center">
                    <action.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{action.label}</span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
