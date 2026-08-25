import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { IMG, CONTACT } from "@/data/site";
import { CTAButton } from "@/components/Shared";
import { EASE } from "@/lib/anim";

const LINES = ["Where Every Moment", "is an <em>Experience</em>"];

export const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 4,
        duration: 9 + Math.random() * 10,
        delay: Math.random() * 12,
      })),
    []
  );

  return (
    <section className="hero" data-testid="home-hero">
      <div className="hero__bg">
        <img src={IMG.heroExterior} alt="BLVD Nashik luxury boutique hotel exterior at dusk" fetchPriority="high" />
      </div>
      <div className="hero__overlay" />
      <div className="hero__particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="hero__particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
        >
          BLVD Nashik
        </motion.p>
        <h1 className="hero__title" data-testid="hero-headline">
          {LINES.map((line, i) => (
            <span className="hero__line-mask" key={i}>
              <motion.span
                style={{ display: "block" }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.45 + i * 0.14, ease: EASE }}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            </span>
          ))}
        </h1>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
        >
          Nashik's Premier Boutique Hotel &amp; Lifestyle Destination
        </motion.p>
        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: EASE }}
        >
          <CTAButton to="/rooms" variant="gold" testId="hero-explore-btn">
            Explore Our World
          </CTAButton>
          <CTAButton href={CONTACT.booking} variant="ghost" testId="hero-book-btn">
            Book Your Stay
          </CTAButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{ marginTop: "1.6rem" }}
        >
          <Link to="/tour" className="text-link" data-testid="hero-tour-link">
            Take the Virtual Tour <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.9 }}
      >
        <span className="hero__scroll-text">Scroll to Explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
