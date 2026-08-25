import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Users, ChevronDown, ArrowRight } from "lucide-react";
import { CONTACT } from "@/data/site";

const todayStr = () => new Date().toISOString().split("T")[0];
const addDays = (dateStr, n) => {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().split("T")[0];
};

export const BookingBar = () => {
  const [show, setShow] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [checkIn, setCheckIn] = useState(todayStr());
  const [checkOut, setCheckOut] = useState(addDays(todayStr(), 1));
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the floating buttons above the bar
  useEffect(() => {
    const setH = () => {
      document.documentElement.style.setProperty(
        "--bookbar-h",
        show && ref.current ? `${ref.current.offsetHeight + 24}px` : "0px"
      );
    };
    setH();
    window.addEventListener("resize", setH);
    return () => {
      window.removeEventListener("resize", setH);
      document.documentElement.style.setProperty("--bookbar-h", "0px");
    };
  }, [show, collapsed, checkIn, checkOut]);

  // Ensure check-out is always after check-in
  useEffect(() => {
    if (new Date(checkOut) <= new Date(checkIn)) setCheckOut(addDays(checkIn, 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkIn]);

  const submit = (e) => {
    e.preventDefault();
    window.open(CONTACT.booking, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={ref}
          className={`bookbar ${collapsed ? "bookbar--collapsed" : ""}`}
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 140, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          data-testid="booking-bar"
        >
          {collapsed ? (
            <button
              className="bookbar__reopen"
              onClick={() => setCollapsed(false)}
              data-testid="booking-bar-expand"
            >
              <span className="bookbar__diamond" /> Reserve Your Stay
            </button>
          ) : (
            <form className="bookbar__form" onSubmit={submit}>
              <div className="bookbar__brand">
                <span className="bookbar__brand-main">Reserve</span>
                <span className="bookbar__brand-sub">Your Stay</span>
              </div>

              <div className="bookbar__fields">
                <label className="bookbar__field">
                  <span className="bookbar__ftop"><CalendarDays size={13} /> Check-in</span>
                  <input
                    type="date"
                    value={checkIn}
                    min={todayStr()}
                    onChange={(e) => setCheckIn(e.target.value)}
                    data-testid="booking-checkin"
                  />
                </label>

                <span className="bookbar__sep"><ArrowRight size={14} /></span>

                <label className="bookbar__field">
                  <span className="bookbar__ftop"><CalendarDays size={13} /> Check-out</span>
                  <input
                    type="date"
                    value={checkOut}
                    min={addDays(checkIn, 1)}
                    onChange={(e) => setCheckOut(e.target.value)}
                    data-testid="booking-checkout"
                  />
                </label>

                <label className="bookbar__field">
                  <span className="bookbar__ftop"><Users size={13} /> Guests</span>
                  <select defaultValue="2" data-testid="booking-guests">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </label>
              </div>

              <button type="submit" className="btn btn--gold btn--sm bookbar__submit" data-testid="booking-submit">
                Check Availability <ArrowRight size={15} />
              </button>

              <button
                type="button"
                className="bookbar__collapse"
                onClick={() => setCollapsed(true)}
                aria-label="Minimise booking bar"
                data-testid="booking-bar-collapse"
              >
                <ChevronDown size={16} />
              </button>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingBar;
