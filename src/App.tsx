import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// V3 Screens (Illustrated/Playful)
import SplashV3 from "./pages/SplashV3";
import LoginV3 from "./pages/LoginV3";
import NotificationChannelsV3 from "./pages/NotificationChannelsV3";
import HomeV3 from "./pages/HomeV3";
import MenuV3 from "./pages/MenuV3";
import InboxV3 from "./pages/InboxV3";
import SchedulesV3 from "./pages/SchedulesV3";
import SettingsV3 from "./pages/SettingsV3";
import ReportAndFixV3 from "./pages/ReportAndFixV3";
import EventsCalendarV3 from "./pages/EventsCalendarV3";
import GeoparkAlt from "./pages/GeoparkAlt";
import NotFoundV3 from "./pages/NotFoundV3";

// Legacy screens (kept for reference)
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import SplashAlt from "./pages/SplashAlt";
import HomeAlt from "./pages/HomeAlt";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main V3 App Flow */}
          <Route path="/" element={<SplashV3 />} />
          <Route path="/login" element={<LoginV3 />} />
          <Route path="/channels" element={<NotificationChannelsV3 />} />
          <Route path="/home" element={<HomeV3 />} />
          <Route path="/menu" element={<MenuV3 />} />
          <Route path="/inbox" element={<InboxV3 />} />
          <Route path="/schedules" element={<SchedulesV3 />} />
          <Route path="/settings" element={<SettingsV3 />} />
          <Route path="/report" element={<ReportAndFixV3 />} />
          <Route path="/events" element={<EventsCalendarV3 />} />
          <Route path="/geopark" element={<GeoparkAlt />} />
          
          {/* Aliases for V3 */}
          <Route path="/v3" element={<SplashV3 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          
          {/* Legacy versions for comparison */}
          <Route path="/v1" element={<Splash />} />
          <Route path="/home-v1" element={<Home />} />
          <Route path="/v2" element={<SplashAlt />} />
          <Route path="/home-v2" element={<HomeAlt />} />
          
          {/* Placeholder routes - use HomeV3 for now */}
          <Route path="/water" element={<HomeV3 />} />
          <Route path="/waste" element={<HomeV3 />} />
          <Route path="/visitor-info" element={<HomeV3 />} />
          <Route path="/directory" element={<HomeV3 />} />
          <Route path="/feedback" element={<HomeV3 />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundV3 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
