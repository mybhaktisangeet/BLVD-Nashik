import React from "react";
import { Check, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider, WhatsAppIcon } from "@/components/Shared";
import { CONTACT } from "@/data/site";
import { OFFERS, OFFER_IMG, offerWhatsApp } from "@/data/offers";

export default function Offers() {
  usePageMeta(
    "Offers & Packages — BLVD Nashik | Wine Weekends, Weddings & More",
    "Curated seasonal packages at BLVD Nashik — Wine Country Weekends, Royal Wedding Bundles, Wellness Resets, Private Premiere Nights and more. Enquire instantly on WhatsApp."
  );

  return (
    <>
      <PageHero image={OFFER_IMG.vineyard} title="Offers & Packages" subtitle="Curated Escapes, Composed for You" crumb="Offers" />

      <section className="section" data-testid="offers-section">
        <div className="container">
          <SectionHead
            center
            label="Curated Escapes"
            title={`Seasons of <em>Indulgence</em>`}
            sub="Six signature experiences — each one a complete story, each one a single WhatsApp message away."
          />
          {OFFERS.map((o, i) => (
            <article className={`offer-card ${i % 2 === 1 ? "offer-card--flip" : ""}`} key={o.id} data-testid={`offer-${o.id}`}>
              <div className="offer-card__img">
                <span className="offer-tag">{o.tag}</span>
                <ImageReveal src={o.image} alt={o.name} />
              </div>
              <Reveal>
                <h3 className="offer-card__name">{o.name}</h3>
                <p className="offer-card__desc">{o.description}</p>
                <ul className="offer-incl">
                  {o.inclusions.map((inc) => (
                    <li key={inc}><Check size={15} /> {inc}</li>
                  ))}
                </ul>
                <div className="offer-card__ctas">
                  <CTAButton href={offerWhatsApp(o.name)} variant="gold" testId={`offer-enquire-${o.id}`}>
                    <WhatsAppIcon size={15} /> Enquire Instantly
                  </CTAButton>
                  <CTAButton href={`tel:${CONTACT.phoneSales.replace(/\s/g, "")}`} variant="ghost" testId={`offer-call-${o.id}`}>
                    <Phone size={15} /> Call Sales
                  </CTAButton>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="contact-cta" data-testid="offers-cta">
        <div className="container">
          <h2>Dream It — We'll Compose It</h2>
          <p>Bespoke packages tailored to your occasion, guest count, and season.</p>
          <div className="contact-cta__btns">
            <CTAButton href={CONTACT.whatsapp} variant="dark" testId="offers-custom-whatsapp">WhatsApp Our Team</CTAButton>
            <CTAButton to="/contact" variant="dark" testId="offers-contact">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
