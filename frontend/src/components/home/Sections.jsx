import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMG } from "@/data/site";
import { SectionHead, CTAButton, ImageReveal, AnimatedCounter, Reveal, GoldDivider } from "@/components/Shared";

const PILLARS = [
  { num: "01", title: "Stay", sub: "Boutique Rooms & Suites", desc: "73 elegantly appointed rooms with garden views", image: IMG.roomDeluxe },
  { num: "02", title: "Celebrate", sub: "Grand Banquets & Lawns", desc: "12,000+ sq. ft. of world-class event spaces", image: IMG.banquetWedding },
  { num: "03", title: "Dine", sub: "Culinary Journeys", desc: "Rooftop dining, artisan bar, 24-hour cafe", image: IMG.panorama },
  { num: "04", title: "Unwind", sub: "Club LaFair", desc: "Pool, spa, gym, salon — your wellness sanctuary", image: IMG.pool },
];

export const ExperiencePillars = () => (
  <section className="section" data-testid="experience-pillars">
    <div className="container container--wide">
      <SectionHead
        center
        label="Experience"
        title={`A Destination, <em>Not Just a Stay</em>`}
        sub="Four worlds of indulgence, thoughtfully composed under one roof — each an experience unto itself."
      />
      <div className="pillars__grid">
        {PILLARS.map((p, i) => (
          <Reveal className="pillar" key={p.num} delay={i * 0.12} y={35} data-testid={`pillar-${p.title.toLowerCase()}`}>
            <ImageReveal src={p.image} alt={p.sub} />
            <div className="pillar__overlay">
              <span className="pillar__num">{p.num} — {p.title.toUpperCase()}</span>
              <h3 className="pillar__title">{p.sub}</h3>
              <p className="pillar__desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const RoomsTeaser = () => (
  <section className="section section--darker" data-testid="rooms-teaser">
    <div className="container">
      <div className="rooms-teaser__grid">
        <Reveal className="rooms-teaser__img" y={0}>
          <ImageReveal src={IMG.roomSuite} alt="Elegantly styled BLVD suite interior with warm lighting" />
        </Reveal>
        <div>
          <SectionHead
            label="Accommodation"
            title={`Elegance in <em>Every Detail</em>`}
          />
          <p className="rooms-teaser__body">
            From serene Deluxe Queen Rooms overlooking the gardens to spacious Suites with private living areas — every stay at BLVD is wrapped in premium linens, warm light, and quiet, considered luxury.
          </p>
          <div className="rooms-teaser__stats">
            <div className="stat">
              <span className="stat__value"><AnimatedCounter value={73} /></span>
              <span className="stat__label">Rooms</span>
            </div>
            <div className="stat">
              <span className="stat__value"><AnimatedCounter value={2} /></span>
              <span className="stat__label">Room Categories</span>
            </div>
            <div className="stat">
              <span className="stat__value">24/7</span>
              <span className="stat__label">In-Room Service</span>
            </div>
          </div>
          <CTAButton to="/rooms" variant="ghost" testId="rooms-teaser-cta">View Our Rooms</CTAButton>
        </div>
      </div>
    </div>
  </section>
);

export const BanquetTeaser = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="banquet-teaser" ref={ref} data-testid="banquet-teaser">
      <motion.div className="banquet-teaser__bg" style={{ y }}>
        <img src={IMG.heraGardens} alt="Hera Gardens twilight wedding setup" loading="lazy" decoding="async" />
      </motion.div>
      <div className="banquet-teaser__overlay" />
      <div className="container banquet-teaser__content">
        <Reveal>
          <SectionHead
            center
            label="Celebrations"
            title={`Where Grand Moments <em>Come to Life</em>`}
          />
          <p className="banquet-teaser__body">
            From fairy-tale weddings to power-packed conferences, our 12,000+ sq. ft. of banquet and lawn space hosts up to 750 guests with in-house catering, decor, and event coordination.
          </p>
        </Reveal>
        <div className="banquet-teaser__stats">
          <div className="stat">
            <span className="stat__value"><AnimatedCounter value={12000} suffix="+" /></span>
            <span className="stat__label">Sq. Ft. of Space</span>
          </div>
          <div className="stat">
            <span className="stat__value"><AnimatedCounter value={750} /></span>
            <span className="stat__label">Guest Capacity</span>
          </div>
          <div className="stat">
            <span className="stat__value"><AnimatedCounter value={3} /></span>
            <span className="stat__label">Signature Venues</span>
          </div>
        </div>
        <Reveal delay={0.15}>
          <CTAButton to="/banquet" variant="gold" testId="banquet-teaser-cta">Explore Our Venues</CTAButton>
        </Reveal>
      </div>
    </section>
  );
};

export const HomeDivider = () => <GoldDivider />;
