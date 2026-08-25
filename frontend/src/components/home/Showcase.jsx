import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Waves, Dumbbell, Flower2, Flame, Leaf, Scissors, Bath, Gamepad2 } from "lucide-react";
import { IMG, DINING, GALLERY } from "@/data/site";
import { SectionHead, CTAButton, Reveal } from "@/components/Shared";
import { EASE } from "@/lib/anim";

export const DiningShowcase = () => (
  <section className="section" data-testid="dining-showcase">
    <div className="container container--wide">
      <SectionHead
        label="Gastronomy"
        title={`A Feast for <em>the Senses</em>`}
        sub="Three distinct culinary destinations — from rooftop fine dining under the stars to a moody industrial bar and an always-open cafe."
      />
      <div className="dining-scroll" data-testid="dining-scroll">
        {DINING.map((d, i) => (
          <Reveal key={d.id} delay={i * 0.12} y={40} className="dining-card" data-testid={`dining-card-${d.id}`}>
            <div className="dining-card__img">
              <img src={d.image} alt={d.name} loading="lazy" decoding="async" />
            </div>
            <div className="dining-card__body">
              <span className="dining-card__tag">{d.tag}</span>
              <h3 className="dining-card__name">{d.name}</h3>
              <p className="dining-card__cuisine">{d.cuisine}</p>
              <p className="dining-card__desc">{d.description}</p>
              <Link to="/dining" className="text-link" data-testid={`dining-card-link-${d.id}`}>
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const CLUB_ICONS = [
  { icon: Waves, label: "Pool" },
  { icon: Dumbbell, label: "Gym" },
  { icon: Flower2, label: "Spa" },
  { icon: Flame, label: "Sauna" },
  { icon: Leaf, label: "Yoga" },
  { icon: Scissors, label: "Salon" },
  { icon: Bath, label: "Jacuzzi" },
  { icon: Gamepad2, label: "Games" },
];

export const ClubTeaser = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="club-teaser" ref={ref} data-testid="club-teaser">
      <motion.div className="club-teaser__bg" style={{ y }}>
        <img src={IMG.pool} alt="Club LaFair rooftop pool at golden hour" loading="lazy" decoding="async" />
      </motion.div>
      <div className="club-teaser__overlay" />
      <div className="container container--wide">
        <motion.div
          className="club-teaser__card glass"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <SectionHead
            label="Wellness & Lifestyle"
            title={`Club LaFair — <em>Your Private Sanctuary</em>`}
          />
          <p className="club-teaser__body">
            BLVD's crown jewel — a fully-equipped lifestyle club and wellness centre. From sunrise yoga to sunset swims, heated jacuzzis to therapeutic spa rituals, this is where wellness becomes a way of life.
          </p>
          <div className="club-teaser__icons">
            {CLUB_ICONS.map(({ icon: Icon, label }) => (
              <div className="club-teaser__icon" key={label}>
                <Icon size={22} strokeWidth={1.4} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <CTAButton to="/club-lafair" variant="gold" testId="club-teaser-cta">Discover Club LaFair</CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

const TEASER_IMAGES = [GALLERY[0], GALLERY[2], GALLERY[4], GALLERY[3], GALLERY[6], GALLERY[8]];

export const GalleryTeaser = () => (
  <section className="section section--darker" data-testid="gallery-teaser">
    <div className="container">
      <SectionHead center label="Glimpses" title={`Visual <em>Stories</em>`} />
      <div className="masonry">
        {TEASER_IMAGES.map((img, i) => (
          <Reveal key={i} delay={i * 0.08} className="masonry__item">
            <Link to="/gallery" aria-label={`View gallery — ${img.alt}`} data-testid={`gallery-teaser-item-${i}`}>
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="gallery-teaser__cta">
        <CTAButton to="/gallery" variant="ghost" testId="gallery-teaser-cta">View Full Gallery</CTAButton>
      </div>
    </div>
  </section>
);
