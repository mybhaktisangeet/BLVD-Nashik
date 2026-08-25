import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ArrowRight } from "lucide-react";

const ANNOUNCEMENTS = [
  { id: "monsoon-2026", months: [5, 6, 7, 8], text: "Monsoon Staycations are here — misty vineyard mornings, chai by the window & cosy suite escapes", cta: "View Offer", to: "/offers" },
  { id: "festive-2026", months: [9, 10], text: "Festive Season at BLVD — Diwali soirées & prime wedding dates at Hera Gardens", cta: "Plan Now", to: "/banquet" },
  { id: "nye-2026", months: [11, 0], text: "New Year's Eve Gala — rooftop countdown at Panorama, afterparty at The Foundry", cta: "Reserve", to: "/contact" },
  { id: "summer-2026", months: [1, 2, 3, 4], text: "Rooftop pool season & wine trail weekends — plan your summer escape", cta: "Explore", to: "/experiences" },
];

export const AnnouncementBar = () => {
  const active = ANNOUNCEMENTS.find((a) => a.months.includes(new Date().getMonth()));
  const [visible, setVisible] = useState(() => active && !localStorage.getItem(`blvd-announce-${active.id}`));
  const ref = useRef(null);

  useEffect(() => {
    const setH = () => {
      document.documentElement.style.setProperty("--announce-h", visible && ref.current ? `${ref.current.offsetHeight}px` : "0px");
    };
    setH();
    window.addEventListener("resize", setH);
    return () => {
      window.removeEventListener("resize", setH);
      document.documentElement.style.setProperty("--announce-h", "0px");
    };
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(`blvd-announce-${active.id}`, "1");
    setVisible(false);
  };

  if (!active) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          className="announce"
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label="Seasonal announcement"
          data-testid="announcement-bar"
        >
          <Sparkles size={14} className="announce__spark" />
          <span className="announce__text">{active.text}</span>
          <Link to={active.to} className="announce__cta" data-testid="announcement-cta">
            {active.cta} <ArrowRight size={12} />
          </Link>
          <button className="announce__close" onClick={dismiss} aria-label="Dismiss announcement" data-testid="announcement-dismiss">
            <X size={15} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
