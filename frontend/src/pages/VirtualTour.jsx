import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePageMeta, CTAButton } from "@/components/Shared";
import { IMG, CONTACT } from "@/data/site";
import { EASE } from "@/lib/anim";

const STOPS = [
  { area: "Arrival", title: "The First Glimpse", image: IMG.heroExterior, desc: "Dusk on Trimbakeshwar Road. Golden light spills from the facade onto the reflecting pool — your Nashik story begins at the kerb." },
  { area: "The Lobby", title: "A Grand Welcome", image: IMG.lobby, desc: "Double-height ceilings, dark marble underfoot, champagne-gold fixtures overhead. Fresh flowers, a warm smile, and keys to everything." },
  { area: "Accommodation", title: "Deluxe Queen Room", image: IMG.roomDeluxe, desc: "Crisp linens, garden light, and warm bedside lamps — 73 rooms tuned for deep, uninterrupted rest." },
  { area: "Accommodation", title: "The Suite", image: IMG.roomSuite, desc: "A king bed, a velvet-soft living room of your own, and space that breathes. For stays that deserve more." },
  { area: "All-Day Dining", title: "Turmeric", image: IMG.turmeric, desc: "The kitchen that never sleeps — morning espresso, midnight Misal Pav, and every craving in between, 24 hours a day." },
  { area: "Rooftop Dining", title: "Panorama", image: IMG.panorama, desc: "Tables under the open sky, candlelight, live music, and a menu that wanders from France to the tandoor." },
  { area: "Bar & Lounge", title: "The Foundry", image: IMG.foundry, desc: "Exposed brick, Edison glow, copper and smoke — artisan cocktails and Nashik's finest pours until 11:30 PM." },
  { area: "Entertainment", title: "The Private Cinema", image: IMG.cinema, desc: "Recliners, a glowing screen, popcorn within reach — an entire cinema reserved for just your people." },
  { area: "Celebrations", title: "Hera Gardens", image: IMG.heraGardens, desc: "String lights over 12,000 sq. ft. of ballroom and twilight lawn — where Nashik's grandest moments are staged." },
  { area: "Club LaFair", title: "The Spa", image: IMG.spa, desc: "Candlelight, warm stone, and trained hands — aromatherapy, deep tissue rituals, and total surrender." },
  { area: "Club LaFair", title: "The Gymnasium", image: IMG.gym, desc: "Mirrors, iron and morning resolve — a fully-equipped floor with personal training on request." },
  { area: "The Finale", title: "The Rooftop Pool", image: IMG.pool, desc: "Golden hour, turquoise water, the hills of Nashik on the horizon. This is where the tour ends — and your stay begins.", finale: true },
];

export default function VirtualTour() {
  usePageMeta(
    "Virtual Tour — BLVD Nashik | From Lobby to Rooftop Pool",
    "Take a guided photo walkthrough of BLVD Nashik — lobby, rooms, dining, Hera Gardens, Club LaFair spa and the rooftop pool — before you book."
  );

  const [index, setIndex] = useState(0);
  const stop = STOPS[index];

  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setIndex((i) => Math.min(STOPS.length - 1, i + 1)), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section className="tour" data-testid="virtual-tour">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="tour__bg"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <img src={stop.image} alt={stop.title} />
        </motion.div>
      </AnimatePresence>
      <div className="tour__overlay" />

      <div className="tour__ui">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="tour__card glass"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EASE }}
            data-testid="tour-card"
          >
            <span className="tour__meta" data-testid="tour-counter">
              Stop {String(index + 1).padStart(2, "0")} / {STOPS.length} — {stop.area}
            </span>
            <h1 className="tour__title">{stop.title}</h1>
            <p className="tour__desc">{stop.desc}</p>
            {stop.finale && (
              <div className="tour__finale">
                <CTAButton href={CONTACT.booking} variant="gold" testId="tour-book-now">Book Your Stay</CTAButton>
                <CTAButton to="/rooms" variant="ghost" testId="tour-view-rooms">View Rooms</CTAButton>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="tour__controls">
          <button className="tour__btn" onClick={prev} disabled={index === 0} aria-label="Previous stop" data-testid="tour-prev">
            <ChevronLeft size={20} />
          </button>
          <div className="tour__dots">
            {STOPS.map((_, i) => (
              <button
                key={i}
                className={`tour__dot ${i === index ? "tour__dot--active" : ""} ${i < index ? "tour__dot--done" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to stop ${i + 1}`}
                data-testid={`tour-dot-${i}`}
              />
            ))}
          </div>
          <button className="tour__btn" onClick={next} disabled={index === STOPS.length - 1} aria-label="Next stop" data-testid="tour-next">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="tour__progress">
          <motion.div
            className="tour__progress-fill"
            animate={{ width: `${((index + 1) / STOPS.length) * 100}%` }}
            transition={{ duration: 0.5, ease: EASE }}
          />
        </div>
      </div>
    </section>
  );
}
