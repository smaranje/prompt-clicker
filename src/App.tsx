import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { ScrollToTop } from "@/components/ScrollToTop";
import CategorySelection from "./pages/CategorySelection";
import TemplateSelection from "./pages/TemplateSelection";
import CustomizeTemplate from "./pages/CustomizeTemplate";
import PreviewPrompt from "./pages/PreviewPrompt";
import Favorites from "./pages/Favorites";
import Discover from "./pages/Discover";
import ViewPrompt from "./pages/ViewPrompt";
import SubmitPrompt from "./pages/SubmitPrompt";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<CategorySelection />} />
        <Route path="/templates/:categoryId" element={<TemplateSelection />} />
        <Route path="/customize/:templateId" element={<CustomizeTemplate />} />
        <Route path="/prompt/:promptId" element={<ViewPrompt />} />
        <Route path="/preview" element={<PreviewPrompt />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/submit" element={<SubmitPrompt />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/prompt-clicker">
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
