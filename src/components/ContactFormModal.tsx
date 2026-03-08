import { useState, createContext, useContext } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ContactModalContext = createContext<ContactModalContextType>({ open: false, setOpen: () => {} });

export const useContactModal = () => useContext(ContactModalContext);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactModalContext.Provider value={{ open, setOpen }}>
      {children}
      <ContactFormModal open={open} onOpenChange={setOpen} />
    </ContactModalContext.Provider>
  );
}

function ContactFormModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">Book a Free Consultation</DialogTitle>
          <DialogDescription>Tell us about your project and we'll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
              <Input required placeholder="John Smith" className="h-11" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
              <Input required type="email" placeholder="john@company.com" className="h-11" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
              <Input placeholder="Your Company" className="h-11" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Service Type *</label>
              <Select required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="app">App</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Project Details *</label>
            <Textarea required placeholder="Tell us about your project, goals, and timeline..." className="min-h-[100px]" />
          </div>
          <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"} <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
