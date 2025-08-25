import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import TablesPage from "./pages/Tables";
import FormsWizard from "./pages/FormsWizard";
import UsersPage from "./pages/Users";
import RolesPage from "./pages/Roles";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import ComponentShowcase from "./pages/ComponentShowcase";
import ComponentShowcaseIndex from "./pages/showcase/ComponentShowcaseIndex";
import StatsCards from "./pages/showcase/StatsCards";
import DataTables from "./pages/showcase/DataTables";
import ActivityFeeds from "./pages/showcase/ActivityFeeds";
import Charts from "./pages/showcase/Charts";
import FeatureCards from "./pages/showcase/FeatureCards";
import LoadingStates from "./pages/showcase/LoadingStates";
import InteractiveForms from "./pages/showcase/InteractiveForms";
import DashboardWidgets from "./pages/showcase/DashboardWidgets";
import ModernGallery from "./pages/showcase/ModernGallery";
import AnimationShowcase from "./pages/showcase/AnimationShowcase";
import UniqueComponents from "./pages/showcase/UniqueComponents";
import EcommerceShowcase from "./pages/showcase/EcommerceShowcase";
import CryptoFinance from "./pages/showcase/CryptoFinance";
import SocialMedia from "./pages/showcase/SocialMedia";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { PremiumProvider } from "./contexts/PremiumContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <LanguageProvider>
        <PremiumProvider>
          <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                {/* Auth Routes - Outside AppLayout */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes - Inside AppLayout */}
                <Route element={<AppLayout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/get-started" element={<GetStarted />} />
                  <Route path="/tables" element={<TablesPage />} />
                  <Route path="/forms" element={<FormsWizard />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/roles" element={<RolesPage />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/showcase" element={<ComponentShowcaseIndex />} />
                  <Route path="/showcase/stats" element={<StatsCards />} />
                  <Route path="/showcase/tables" element={<DataTables />} />
                  <Route path="/showcase/activity" element={<ActivityFeeds />} />
                  <Route path="/showcase/charts" element={<Charts />} />
                  <Route path="/showcase/features" element={<FeatureCards />} />
                  <Route path="/showcase/loading" element={<LoadingStates />} />
                  <Route path="/showcase/forms" element={<InteractiveForms />} />
                  <Route path="/showcase/widgets" element={<DashboardWidgets />} />
                  <Route path="/showcase/gallery" element={<ModernGallery />} />
                  <Route path="/showcase/animations" element={<AnimationShowcase />} />
                  <Route path="/showcase/unique" element={<UniqueComponents />} />
                  <Route path="/showcase/ecommerce" element={<EcommerceShowcase />} />
                  <Route path="/showcase/crypto-finance" element={<CryptoFinance />} />
                  <Route path="/showcase/social-media" element={<SocialMedia />} />
                  <Route path="/old-showcase" element={<ComponentShowcase />} />
                </Route>
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </PremiumProvider>
      </LanguageProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
