
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sound from "./pages/Sound";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Workout from "./pages/Workout";
import Nutrition from "./pages/Nutrition";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import Progress from "./pages/Progress";
import Routines from "./pages/Routines";
import Posting from "./pages/Posting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sound" element={<Sound />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/routines" element={<Routines />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
