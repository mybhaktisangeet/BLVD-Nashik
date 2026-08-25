import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHead, Reveal, CTAButton } from "@/components/Shared";
import { OFFERS } from "@/data/offers";

export const OffersTeaser = () => (
  <section className="section" data-testid="offers-teaser">
    <div className="container container--wide">
      <SectionHead
        center
        label="Curated Escapes"
        title={`Offers Worth <em>Planning Around</em>`}
        sub="Wine-country weekends, royal weddings, and celebration staycations — composed end-to-end, one enquiry away."
      />
      <div className="offers-teaser__grid">
        {OFFERS.filter((o) => o.featured).slice(0, 3).map((o, i) => (
          <Reveal key={o.id} delay={i * 0.12} y={40} className="offer-mini" data-testid={`offer-mini-${o.id}`}>
            <Link to="/offers" aria-label={`View offer — ${o.name}`}>
              <div className="offer-mini__img">
                <span className="offer-tag">{o.tag}</span>
                <img src={o.image} alt={o.name} loading="lazy" decoding="async" />
              </div>
              <div className="offer-mini__body">
                <h3 className="offer-mini__name">{o.name}</h3>
                <p className="offer-mini__desc">{o.description.slice(0, 110).replace(/\s+\S*$/, "")}…</p>
                <span className="text-link">Explore Package <ArrowRight size={14} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="gallery-teaser__cta">
        <CTAButton to="/offers" variant="ghost" testId="offers-teaser-cta">View All Offers</CTAButton>
      </div>
    </div>
  </section>
);

export default OffersTeaser;
