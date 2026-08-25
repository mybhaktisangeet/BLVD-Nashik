import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/site";
import { EASE } from "@/lib/anim";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled || open ? "nav--scrolled" : ""}`} data-testid="main-navbar">
        <div className="nav__inner">
          <Link to="/" className="nav__logo" data-testid="nav-logo" aria-label="BLVD Nashik — Home">
            <span className="nav__logo-main">BLVD</span>
            <span className="nav__logo-sub">Nashik</span>
          </Link>
          <nav className="nav__links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) => `nav__link ${isActive ? "nav__link--active" : ""}`}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--gold btn--sm nav__book" data-testid="nav-book-now">
            Book Now
          </a>
          <button className="nav__burger" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} data-testid="nav-mobile-toggle">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            data-testid="mobile-menu"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
              aria-label="Mobile"
            >
              {NAV_LINKS.map((l, i) => (
                <motion.div key={l.to} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) => `mobile-menu__link ${isActive ? "mobile-menu__link--active" : ""}`}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  >
                    <span className="mobile-menu__num">0{i + 1}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
            <motion.div
              className="mobile-menu__footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href={CONTACT.booking} target="_blank" rel="noreferrer" className="btn btn--gold" data-testid="mobile-book-now">
                Book Your Stay
              </a>
              <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`} className="text-link" data-testid="mobile-call-link">
                <Phone size={14} /> {CONTACT.phoneReservations}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
