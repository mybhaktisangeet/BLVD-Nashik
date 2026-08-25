import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "@/components/Shared";

export const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="float-wa"
        aria-label="Chat with us on WhatsApp"
        data-testid="floating-whatsapp"
      >
        <WhatsAppIcon size={26} />
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button
            className="float-top"
            onClick={scrollTop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            aria-label="Scroll to top"
            data-testid="scroll-to-top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;
