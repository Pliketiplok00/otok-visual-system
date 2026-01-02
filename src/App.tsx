import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import NotificationChannels from "./pages/NotificationChannels";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Inbox from "./pages/Inbox";
import Schedules from "./pages/Schedules";
import Settings from "./pages/Settings";
import ReportAndFix from "./pages/ReportAndFix";
import EventsCalendar from "./pages/EventsCalendar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/channels" element={<NotificationChannels />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<ReportAndFix />} />
          <Route path="/events" element={<EventsCalendar />} />
          {/* Placeholder routes */}
          <Route path="/water" element={<Home />} />
          <Route path="/waste" element={<Home />} />
          <Route path="/visitor-info" element={<Home />} />
          <Route path="/directory" element={<Home />} />
          <Route path="/geopark" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
