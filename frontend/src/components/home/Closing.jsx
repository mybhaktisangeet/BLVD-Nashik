import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { CONTACT, DISTANCES } from "@/data/site";
import { SectionHead, CTAButton, Reveal } from "@/components/Shared";

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
          <div style={{ display: "flex", gap: "1.6rem", alignItems: "center", flexWrap: "wrap" }}>
            <CTAButton href={CONTACT.mapsLink} variant="ghost" testId="get-directions-btn">Get Directions</CTAButton>
            <Link to="/experiences" className="text-link" data-testid="location-experiences-link">
              Explore Nashik Experiences <ArrowRight size={14} />
            </Link>
          </div>
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
