import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  { id: 1, name: "John Smith", company: "Acme Corp", initials: "JS", unread: 2 },
  { id: 2, name: "Sarah Johnson", company: "TechStart Inc", initials: "SJ", unread: 0 },
  { id: 3, name: "Marco Rossi", company: "Bella Cucina", initials: "MR", unread: 1 },
];

const messages = [
  { from: "client", text: "Hi, any update on the homepage design?", time: "10:30 AM" },
  { from: "admin", text: "Yes! We're finalizing the mockups today. I'll share them by EOD.", time: "10:35 AM" },
  { from: "client", text: "Great, looking forward to it!", time: "10:36 AM" },
  { from: "admin", text: "Here's a preview of the hero section. Let me know your thoughts.", time: "2:15 PM" },
];

export default function AdminMessages() {
  const [activeChat, setActiveChat] = useState(1);
  const [input, setInput] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold">Messages</h2>
        <p className="text-muted-foreground text-sm">Client conversations</p>
      </div>

      <div className="grid lg:grid-cols-[280px_1fr] gap-4 h-[calc(100vh-220px)]">
        <Card className="overflow-hidden">
          <CardHeader className="py-3 px-4 border-b"><CardTitle className="text-sm">Conversations</CardTitle></CardHeader>
          <CardContent className="p-0">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveChat(c.id)}
                className={cn("w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b border-border/30", activeChat === c.id && "bg-primary/5")}
              >
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">{c.initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.company}</p>
                </div>
                {c.unread > 0 && <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">{c.unread}</span>}
              </button>
            ))}
          </CardContent>
        </Card>

        <Card className="flex flex-col overflow-hidden">
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.from === "admin" ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[70%] rounded-2xl px-4 py-2.5 text-sm", m.from === "admin" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                  <p>{m.text}</p>
                  <p className={cn("text-[10px] mt-1", m.from === "admin" ? "text-primary-foreground/70" : "text-muted-foreground")}>{m.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t flex gap-2">
            <Input placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" />
            <Button size="icon" variant="hero"><Send className="h-4 w-4" /></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
