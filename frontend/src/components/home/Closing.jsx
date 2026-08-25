import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, MapPin, Phone, Mail } from "lucide-react";
import { TESTIMONIALS, CONTACT, DISTANCES } from "@/data/site";
import { SectionHead, CTAButton, Reveal } from "@/components/Shared";

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const item = TESTIMONIALS[index];

  return (
    <section className="section testimonials" data-testid="testimonials-section">
      <div className="container">
        <SectionHead center label="Guest Stories" title={`Voices of <em>BLVD</em>`} />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            className="testimonial"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6 }}
            data-testid="testimonial-active"
          >
            <Quote size={44} strokeWidth={1} className="testimonial__quote-icon" />
            <div className="testimonial__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="testimonial__text">"{item.quote}"</p>
            <cite className="testimonial__name">{item.name}</cite>
            <span className="testimonial__type">{item.type}</span>
          </motion.blockquote>
        </AnimatePresence>
        <div className="testimonial__dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`testimonial__dot ${i === index ? "testimonial__dot--active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              data-testid={`testimonial-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export const LocationMap = () => (
  <section className="section" data-testid="location-section">
    <div className="container">
      <div className="location__grid">
        <Reveal className="location__map" y={0}>
          <iframe
            src={CONTACT.mapsEmbed}
            title="BLVD Nashik location on Google Maps"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="location-map-iframe"
          />
        </Reveal>
        <div>
          <SectionHead label="Find Us" title={`Gateway to <em>Nashik</em>`} />
          <div className="location__address">
            <MapPin size={18} />
            <span>{CONTACT.address}</span>
          </div>
          <ul className="location__distances">
            {DISTANCES.map((d) => (
              <li key={d.place}>
                <span>{d.place}</span>
                <span>{d.distance}</span>
              </li>
            ))}
          </ul>
          <CTAButton href={CONTACT.mapsLink} variant="ghost" testId="get-directions-btn">Get Directions</CTAButton>
        </div>
      </div>
    </div>
  </section>
);

export const ContactCTA = () => (
  <section className="contact-cta" data-testid="contact-cta">
    <div className="container">
      <Reveal>
        <h2>Begin Your BLVD Experience</h2>
        <p>For reservations, events, or inquiries — we're here for you.</p>
        <div className="contact-cta__btns">
          <CTAButton href={CONTACT.booking} variant="dark" testId="cta-book-now">Book Now</CTAButton>
          <CTAButton to="/contact" variant="dark" className="btn--ghost-dark" testId="cta-contact-us">Contact Us</CTAButton>
        </div>
        <div className="contact-cta__info">
          <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`} data-testid="cta-phone">
            <Phone size={15} /> {CONTACT.phoneReservations}
          </a>
          <a href={`mailto:${CONTACT.emailReservations}`} data-testid="cta-email">
            <Mail size={15} /> {CONTACT.emailReservations}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
