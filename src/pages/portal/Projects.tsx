import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, name: "E-commerce Redesign", status: "In Progress", progress: 65, deadline: "Mar 30, 2026", statusColor: "bg-primary/10 text-primary" },
  { id: 2, name: "Mobile App Development", status: "Planning", progress: 15, deadline: "May 15, 2026", statusColor: "bg-amber-100 text-amber-700" },
  { id: 3, name: "Corporate Website", status: "Completed", progress: 100, deadline: "Feb 10, 2026", statusColor: "bg-green-100 text-green-700" },
  { id: 4, name: "SEO Optimization", status: "In Progress", progress: 40, deadline: "Apr 20, 2026", statusColor: "bg-primary/10 text-primary" },
];

export default function Projects() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold">Your Projects</h2>
          <p className="text-muted-foreground text-sm">Track and manage all your projects</p>
        </div>
      </div>

      <div className="space-y-3">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-semibold">{project.name}</h3>
                      <Badge className={`${project.statusColor} border-0 text-xs`}>{project.status}</Badge>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{project.progress}% complete</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{project.deadline}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/project-details">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
