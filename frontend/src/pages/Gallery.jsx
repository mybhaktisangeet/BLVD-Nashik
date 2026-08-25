import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import Lightbox from "@/components/Lightbox";
import { usePageMeta, SectionHead, CTAButton } from "@/components/Shared";
import { IMG, GALLERY, GALLERY_CATS } from "@/data/site";

export default function Gallery() {
  usePageMeta(
    "Gallery — BLVD Nashik | Photo Tour",
    "A visual tour of BLVD Nashik — luxury rooms, grand banquets, rooftop dining, Club LaFair wellness facilities, and more."
  );

  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat);

  return (
    <>
      <PageHero image={IMG.lobby} title="Gallery" subtitle="A Visual Tour of BLVD" crumb="Gallery" />

      <section className="section" data-testid="gallery-section">
        <div className="container container--wide">
          <SectionHead center label="Glimpses" title={`Every Corner, <em>a Story</em>`} />
          <div className="gal-tabs" data-testid="gallery-filters">
            {GALLERY_CATS.map((c) => (
              <button
                key={c}
                className={`gal-tab ${cat === c ? "gal-tab--active" : ""}`}
                onClick={() => setCat(c)}
                data-testid={`gallery-filter-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="masonry" data-testid="gallery-grid">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src + img.cat}
                  layout
                  className="masonry__item"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  onClick={() => setLightbox(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
                  aria-label={`Open ${img.alt} in fullscreen`}
                  data-testid={`gallery-item-${i}`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox images={filtered} index={lightbox} onClose={() => setLightbox(null)} onNavigate={setLightbox} />
        )}
      </AnimatePresence>

      <div className="tour-invite" data-testid="gallery-tour-invite">
        <p>Prefer a guided walkthrough?</p>
        <CTAButton to="/tour" variant="ghost" testId="gallery-tour-cta">Take the Virtual Tour</CTAButton>
      </div>
    </>
  );
}
