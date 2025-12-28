import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import Quotes from "./pages/Quotes";
import Timeline from "./pages/Timeline";
import Events from "./pages/Events";
import Tributes from "./pages/Tributes";
import News from "./pages/News";
import Locations from "./pages/Locations";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tributes" element={<Tributes />} />
          <Route path="/news" element={<News />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/speeches" element={<Videos />} />
          <Route path="/writings" element={<Documents />} />
          <Route path="/posters" element={<Photos />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
