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
import HomeV4 from "./pages/HomeV4";
import MenuV3 from "./pages/MenuV3";
import InboxV3 from "./pages/InboxV3";
import SchedulesV3 from "./pages/SchedulesV3";
import SeaScheduleV3 from "./pages/SeaScheduleV3";
import SeaScheduleDetailV3 from "./pages/SeaScheduleDetailV3";
import LandScheduleV3 from "./pages/LandScheduleV3";
import LandScheduleDetailV3 from "./pages/LandScheduleDetailV3";
import SettingsV3 from "./pages/SettingsV3";
import ReportAndFixV3 from "./pages/ReportAndFixV3";
import EventsCalendarV3 from "./pages/EventsCalendarV3";
import EventDetailV3 from "./pages/EventDetailV3";
import GeoparkAlt from "./pages/GeoparkAlt";
import GeoparkFloraV3 from "./pages/GeoparkFloraV3";
import GeoparkFaunaV3 from "./pages/GeoparkFaunaV3";
import FloraDetailAlepskiBor from "./pages/FloraDetailAlepskiBor";
import FloraDetailViskaKadulja from "./pages/FloraDetailViskaKadulja";
import WaterInfoV3 from "./pages/WaterInfoV3";
import WasteRecyclingV3 from "./pages/WasteRecyclingV3";
import VisitorInfoV3 from "./pages/VisitorInfoV3";
import DirectoryV3 from "./pages/DirectoryV3";
import WineRoutesV3 from "./pages/WineRoutesV3";
import WineRouteDetailV3 from "./pages/WineRouteDetailV3";
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
          <Route path="/events/:id" element={<EventDetailV3 />} />
          <Route path="/geopark" element={<GeoparkAlt />} />
          <Route path="/geopark/flora" element={<GeoparkFloraV3 />} />
          <Route path="/geopark/flora/alepski-bor" element={<FloraDetailAlepskiBor />} />
          <Route path="/geopark/flora/viska-kadulja" element={<FloraDetailViskaKadulja />} />
          <Route path="/geopark/fauna" element={<GeoparkFaunaV3 />} />
          
          {/* Aliases for V3 */}
          <Route path="/v3" element={<SplashV3 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/home-v4" element={<HomeV4 />} />
          
          {/* Legacy versions for comparison */}
          <Route path="/v1" element={<Splash />} />
          <Route path="/home-v1" element={<Home />} />
          <Route path="/v2" element={<SplashAlt />} />
          <Route path="/home-v2" element={<HomeAlt />} />
          
          {/* Schedule sub-routes */}
          <Route path="/schedules/sea" element={<SeaScheduleV3 />} />
          <Route path="/schedules/sea/:routeId" element={<SeaScheduleDetailV3 />} />
          <Route path="/schedules/land" element={<LandScheduleV3 />} />
          <Route path="/schedules/land/:routeId" element={<LandScheduleDetailV3 />} />
          
          {/* Content pages */}
          <Route path="/water" element={<WaterInfoV3 />} />
          <Route path="/waste" element={<WasteRecyclingV3 />} />
          <Route path="/visitor-info" element={<VisitorInfoV3 />} />
          <Route path="/directory" element={<DirectoryV3 />} />
          <Route path="/wine-routes" element={<WineRoutesV3 />} />
          <Route path="/wine-routes/:id" element={<WineRouteDetailV3 />} />
          <Route path="/feedback" element={<HomeV3 />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundV3 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
