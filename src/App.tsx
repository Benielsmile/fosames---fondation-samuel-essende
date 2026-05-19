import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Layout
import Navigation from "@/src/components/layout/Navigation";
import Footer from "@/src/components/layout/Footer";

// Pages
import Home from "@/src/pages/Home";
import Fondation from "@/src/pages/Fondation";
import Actions from "@/src/pages/Actions";
import Statuts from "@/src/pages/Statuts";
import Transparence from "@/src/pages/Transparence";
import Impliquer from "@/src/pages/Impliquer";

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen selection:bg-primary/20 bg-paper">
      <Navigation />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/fondation" element={<PageWrapper><Fondation /></PageWrapper>} />
            <Route path="/actions" element={<PageWrapper><Actions /></PageWrapper>} />
            <Route path="/statuts" element={<PageWrapper><Statuts /></PageWrapper>} />
            <Route path="/transparence" element={<PageWrapper><Transparence /></PageWrapper>} />
            <Route path="/impliquer" element={<PageWrapper><Impliquer /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
