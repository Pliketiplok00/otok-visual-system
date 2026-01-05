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
import PostaInternetV3 from "./pages/PostaInternetV3";
import BanksV3 from "./pages/BanksV3";
import PharmacyV3 from "./pages/PharmacyV3";
import VetClinicV3 from "./pages/VetClinicV3";
import HikingSafetyV3 from "./pages/HikingSafetyV3";
import SailingSafetyV3 from "./pages/SailingSafetyV3";
import DirectoryV3 from "./pages/DirectoryV3";
import WineRoutesV3 from "./pages/WineRoutesV3";
import WineRouteDetailV3 from "./pages/WineRouteDetailV3";
import NotificationDetailV3 from "./pages/NotificationDetailV3";
import FeedbackV3 from "./pages/FeedbackV3";
import NotFoundV3 from "./pages/NotFoundV3";
import StyleGuideV3 from "./pages/StyleGuideV3";

// Template Pages
import TemplatesIndex from "./pages/templates/TemplatesIndex";
import TemplateA_SimpleHeader from "./pages/templates/TemplateA_SimpleHeader";
import TemplateB_ImageHeader from "./pages/templates/TemplateB_ImageHeader";
import TemplateC_ListWithSearch from "./pages/templates/TemplateC_ListWithSearch";
import TemplateD_Form from "./pages/templates/TemplateD_Form";
import TemplateE_Detail from "./pages/templates/TemplateE_Detail";
import TemplateF_Grid from "./pages/templates/TemplateF_Grid";

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
          <Route path="/notification/:id" element={<NotificationDetailV3 />} />
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
          
          {/* Aliases */}
          <Route path="/v3" element={<SplashV3 />} />
          <Route path="/home-v3" element={<HomeV3 />} />
          <Route path="/home-v4" element={<HomeV4 />} />
          
          {/* Schedule sub-routes */}
          <Route path="/schedules/sea" element={<SeaScheduleV3 />} />
          <Route path="/schedules/sea/:routeId" element={<SeaScheduleDetailV3 />} />
          <Route path="/schedules/land" element={<LandScheduleV3 />} />
          <Route path="/schedules/land/:routeId" element={<LandScheduleDetailV3 />} />
          
          {/* Content pages */}
          <Route path="/water" element={<WaterInfoV3 />} />
          <Route path="/waste" element={<WasteRecyclingV3 />} />
          <Route path="/visitor-info" element={<VisitorInfoV3 />} />
          <Route path="/posta" element={<PostaInternetV3 />} />
          <Route path="/banks" element={<BanksV3 />} />
          <Route path="/pharmacy" element={<PharmacyV3 />} />
          <Route path="/vet" element={<VetClinicV3 />} />
          <Route path="/hiking" element={<HikingSafetyV3 />} />
          <Route path="/sailing" element={<SailingSafetyV3 />} />
          <Route path="/directory" element={<DirectoryV3 />} />
          <Route path="/wine-routes" element={<WineRoutesV3 />} />
          <Route path="/wine-routes/:id" element={<WineRouteDetailV3 />} />
          <Route path="/feedback" element={<FeedbackV3 />} />
          <Route path="/style-guide" element={<StyleGuideV3 />} />
          
          {/* Template pages */}
          <Route path="/templates" element={<TemplatesIndex />} />
          <Route path="/templates/simple" element={<TemplateA_SimpleHeader />} />
          <Route path="/templates/image" element={<TemplateB_ImageHeader />} />
          <Route path="/templates/list" element={<TemplateC_ListWithSearch />} />
          <Route path="/templates/form" element={<TemplateD_Form />} />
          <Route path="/templates/detail" element={<TemplateE_Detail />} />
          <Route path="/templates/grid" element={<TemplateF_Grid />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundV3 />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
