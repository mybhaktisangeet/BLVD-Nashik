import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Banquet from "@/pages/Banquet";
import Dining from "@/pages/Dining";
import Menus from "@/pages/Menus";
import Offers from "@/pages/Offers";
import Experiences from "@/pages/Experiences";
import ClubLaFair from "@/pages/ClubLaFair";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import { pageTransition } from "@/lib/anim";
import "@/styles/home.css";
import "@/styles/pages.css";
import "@/styles/menus.css";
import "@/styles/extras.css";

const Page = ({ children }) => (
  <motion.main {...pageTransition}>{children}</motion.main>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><Home /></Page>} />
        <Route path="/rooms" element={<Page><Rooms /></Page>} />
        <Route path="/banquet" element={<Page><Banquet /></Page>} />
        <Route path="/dining" element={<Page><Dining /></Page>} />
        <Route path="/menus" element={<Page><Menus /></Page>} />
        <Route path="/offers" element={<Page><Offers /></Page>} />
        <Route path="/experiences" element={<Page><Experiences /></Page>} />
        <Route path="/club-lafair" element={<Page><ClubLaFair /></Page>} />
        <Route path="/gallery" element={<Page><Gallery /></Page>} />
        <Route path="/contact" element={<Page><Contact /></Page>} />
        <Route path="*" element={<Page><NotFound /></Page>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
      <FloatingButtons />
    </BrowserRouter>
  );
}

export default App;
