import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { ContactModalProvider } from "@/components/ContactFormModal";
import DashboardLayout from "@/layouts/DashboardLayout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/portal/Login";
import Signup from "./pages/portal/Signup";
import Dashboard from "./pages/portal/Dashboard";
import Projects from "./pages/portal/Projects";
import ProjectDetails from "./pages/portal/ProjectDetails";
import Meetings from "./pages/portal/Meetings";
import Payments from "./pages/portal/Payments";
import Messages from "./pages/portal/Messages";
import Files from "./pages/portal/Files";
import Profile from "./pages/portal/Profile";
import AdminLayout from "./layouts/AdminLayout";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminClients from "./pages/admin/Clients";
import AdminProjects from "./pages/admin/Projects";
import AdminMeetings from "./pages/admin/Meetings";
import AdminPayments from "./pages/admin/Payments";
import AdminMessages from "./pages/admin/Messages";
import AdminFiles from "./pages/admin/Files";
import AdminSettings from "./pages/admin/Settings";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { account } from "./lib/appwrite";


const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}



const App = () => {
  useEffect(() => {
  const test = async () => {
    try {
      const user = await account.get();
      console.log("User:", user);
    } catch (err) {
      console.log("No session");
    }
  };

  test();
}, []);

  
  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ContactModalProvider>
          <ScrollToTop />
          <Routes>
            {/* Marketing pages with navbar/footer */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <main><Index /></main>
                  <Footer />
                  <FloatingButtons />
                </>
              }
            />
            {[
              { path: "/services", element: <Services /> },
              { path: "/portfolio", element: <Portfolio /> },
              { path: "/process", element: <Process /> },
              { path: "/about", element: <About /> },
              { path: "/contact", element: <Contact /> },
            ].map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <Navbar />
                    <main>{element}</main>
                    <Footer />
                    <FloatingButtons />
                  </>
                }
              />
            ))}

            {/* Auth pages (no navbar/footer) */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Dashboard pages */}
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/meetings" element={<Meetings />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/files" element={<Files />} />
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* Admin pages */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/clients" element={<AdminClients />} />
              <Route path="/admin/projects" element={<AdminProjects />} />
              <Route path="/admin/meetings" element={<AdminMeetings />} />
              <Route path="/admin/payments" element={<AdminPayments />} />
              <Route path="/admin/messages" element={<AdminMessages />} />
              <Route path="/admin/files" element={<AdminFiles />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContactModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
}

export default App;
