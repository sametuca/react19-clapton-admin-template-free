import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
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
import DashboardWidgets from "./pages/showcase/DashboardWidgets";
import ModernGallery from "./pages/showcase/ModernGallery";
import AnimationShowcase from "./pages/showcase/AnimationShowcase";
import PremiumComponents from "./pages/showcase/PremiumComponents";
import AIComponents from "./pages/showcase/AIComponents";
import AdvancedComponents from "./pages/showcase/AdvancedComponents";
import UniqueComponents from "./pages/showcase/UniqueComponents";
import ButtonShowcase from "./pages/showcase/ButtonShowcase";
import ThemeShowcase from "./pages/showcase/ThemeShowcase";
import FormComponents from "./pages/showcase/FormComponents";
import NavigationComponents from "./pages/showcase/NavigationComponents";
import FeedbackComponents from "./pages/showcase/FeedbackComponents";
import MediaComponents from "./pages/showcase/MediaComponents";
import PopularComponents from "./pages/showcase/PopularComponents";
import KanbanBoardShowcase from "./pages/showcase/KanbanBoardShowcase";
import AuthShowcase from "./pages/showcase/AuthShowcase";
import ExamplePages from "./pages/examples/index";
import SocialMediaExample from "./pages/examples/SocialMedia";
import EcommerceDashboard from "./pages/examples/EcommerceDashboard";
import AnalyticsDashboard from "./pages/examples/AnalyticsDashboard";
import CrmDashboard from "./pages/examples/CrmDashboard";
import FinanceDashboard from "./pages/examples/FinanceDashboard";
import ServicesExample from "./pages/services/ServicesExample";
import ProfilePage from "./pages/ProfilePage";
import Welcome from "./pages/Welcome";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LayoutProvider } from "./contexts/LayoutContext";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider>
      <LanguageProvider>
        <LayoutProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  {/* Welcome Page - First Landing */}
                  <Route path="/" element={<Welcome />} />
                  
                  {/* Auth Routes - Outside AppLayout */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Protected Routes - Inside AppLayout */}
                  <Route element={<AppLayout />}>
                    <Route path="/get-started" element={<GetStarted />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/services" element={<ServicesExample />} />
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
                    <Route path="/showcase/widgets" element={<DashboardWidgets />} />
                    <Route path="/showcase/gallery" element={<ModernGallery />} />
                    <Route path="/showcase/animations" element={<AnimationShowcase />} />
                    <Route path="/showcase/premium" element={<PremiumComponents />} />
                    <Route path="/showcase/ai" element={<AIComponents />} />
                    <Route path="/showcase/advanced" element={<AdvancedComponents />} />
                    <Route path="/showcase/unique" element={<UniqueComponents />} />
                    <Route path="/showcase/buttons" element={<ButtonShowcase />} />
                    <Route path="/showcase/themes" element={<ThemeShowcase />} />
                    <Route path="/showcase/forms" element={<FormComponents />} />
                    <Route path="/showcase/navigation" element={<NavigationComponents />} />
                    <Route path="/showcase/feedback" element={<FeedbackComponents />} />
                    <Route path="/showcase/media" element={<MediaComponents />} />
                    <Route path="/showcase/popular" element={<PopularComponents />} />
                    <Route path="/showcase/kanban" element={<KanbanBoardShowcase />} />
                    <Route path="/showcase/auth" element={<AuthShowcase />} />
                    <Route path="/examples" element={<ExamplePages />} />
                    <Route path="/examples/social-media" element={<SocialMediaExample />} />
                    <Route path="/examples/ecommerce" element={<EcommerceDashboard />} />
                    <Route path="/examples/analytics" element={<AnalyticsDashboard />} />
                    <Route path="/examples/crm" element={<CrmDashboard />} />
                    <Route path="/examples/finance" element={<FinanceDashboard />} />
                    <Route path="/old-showcase" element={<ComponentShowcase />} />
                  </Route>
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </LayoutProvider>
      </LanguageProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
