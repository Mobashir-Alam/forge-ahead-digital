import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

const initialMessages = [
  { id: 1, sender: "LaunchForge", initials: "LF", text: "Hi John! Your design mockups are ready for review.", time: "10:30 AM", self: false },
  { id: 2, sender: "You", initials: "JD", text: "Great, I'll take a look this afternoon.", time: "10:45 AM", self: true },
  { id: 3, sender: "LaunchForge", initials: "LF", text: "Sounds good! Let me know if you have any feedback.", time: "10:46 AM", self: false },
  { id: 4, sender: "You", initials: "JD", text: "The homepage looks amazing! Can we adjust the hero section colors?", time: "2:15 PM", self: true },
  { id: 5, sender: "LaunchForge", initials: "LF", text: "Absolutely, I'll update that today and send a revised version.", time: "2:20 PM", self: false },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), sender: "You", initials: "JD", text: input.trim(), time: "Now", self: true }]);
    setInput("");
  };

  return (
    <div className="max-w-3xl h-[calc(100vh-8rem)] flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-display font-bold">Messages</h2>
        <p className="text-muted-foreground text-sm">Chat with your project team</p>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.self ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className={`text-xs font-semibold ${msg.self ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                  {msg.initials}
                </AvatarFallback>
              </Avatar>
              <div className={`max-w-[75%] ${msg.self ? "text-right" : ""}`}>
                <div className={`inline-block rounded-2xl px-4 py-2.5 text-sm ${msg.self ? "bg-primary text-primary-foreground rounded-tr-sm" : "bg-muted rounded-tl-sm"}`}>
                  {msg.text}
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </CardContent>

        <div className="p-4 border-t border-border/50">
          <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2">
            <Input placeholder="Type a message…" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" />
            <Button type="submit" size="icon" variant="hero"><Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
