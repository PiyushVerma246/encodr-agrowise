import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import FeaturesPage from "./pages/FeaturesPage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Chatbot from "./components/Chatbot";
import NotFound from "./pages/NotFound";
import WeatherAdvisoryPage from "./pages/WeatherAdvisoryPage";
import CropAdvisoryPage from "./pages/CropAdvisoryPage";
import PestDetectionPage from "./pages/PestDetectionPage";
import MarketPricesPage from "./pages/MarketPricesPage";
import GovernmentSchemesPage from "./pages/GovernmentSchemesPage";
import PMKisanSchemePage from "./pages/PMKisanSchemePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/weather" element={<WeatherAdvisoryPage />} />
          <Route path="/crop-advisory" element={<CropAdvisoryPage />} />
          <Route path="/pest-detection" element={<PestDetectionPage />} />
          <Route path="/market-prices" element={<MarketPricesPage />} />
          <Route path="/government-schemes" element={<GovernmentSchemesPage />} />
          <Route path="/schemes/pm-kisan" element={<PMKisanSchemePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

// hey
