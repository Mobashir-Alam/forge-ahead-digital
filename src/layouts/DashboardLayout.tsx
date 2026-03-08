import { useState } from "react";
import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  LayoutDashboard,
  FolderKanban,
  CalendarClock,
  CreditCard,
  MessageSquare,
  FileText,
  User,
  LifeBuoy,
  LogOut,
  Bell,
  Menu,
  X,
  ChevronLeft,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const sidebarLinks = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Meetings", path: "/meetings", icon: CalendarClock },
  { label: "Payments", path: "/payments", icon: CreditCard },
  { label: "Messages", path: "/messages", icon: MessageSquare },
  { label: "Files", path: "/files", icon: FileText },
  { label: "Profile", path: "/profile", icon: User },
  { label: "Support", path: "/contact", icon: LifeBuoy },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className={cn("flex items-center h-16 px-4 border-b border-border/50", collapsed ? "justify-center" : "gap-2")}>
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          {collapsed ? <span className="gradient-text">L</span> : <>Launch<span className="gradient-text">Forge</span></>}
        </Link>
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {sidebarLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
              isActive(link.path)
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
              collapsed && "justify-center px-2"
            )}
          >
            <link.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-3 border-t border-border/50">
        <button
          onClick={() => navigate("/login")}
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors w-full",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-surface overflow-hidden">
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col bg-background border-r border-border/50 transition-all duration-300 shrink-0",
          collapsed ? "w-[68px]" : "w-60"
        )}
      >
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-60 bg-background border-r border-border/50 z-50 lg:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top navbar */}
        <header className="h-16 bg-background/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between px-4 lg:px-6 shrink-0 z-30">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
            <button
              className="hidden lg:flex p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              onClick={() => setCollapsed(!collapsed)}
            >
              <ChevronLeft className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")} />
            </button>
            <h1 className="text-lg font-display font-semibold text-foreground hidden sm:block">
              {sidebarLinks.find((l) => isActive(l.path))?.label || "Portal"}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <div className="flex items-center gap-2.5">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-semibold">JD</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium text-foreground hidden sm:block">John Doe</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
