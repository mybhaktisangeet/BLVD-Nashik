import React from "react";
import { Clock, Check, Baby, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider, WhatsAppIcon } from "@/components/Shared";
import { IMG, DINING, ENTERTAINMENT, CONTACT } from "@/data/site";

export default function Dining() {
  usePageMeta(
    "Dining & Entertainment — BLVD Nashik | Restaurants & Bar",
    "Panorama rooftop restaurant, The Foundry industrial bar, Turmeric 24-hour cafe, plus a private cinema, golf simulator, and games room at BLVD Nashik."
  );

  return (
    <>
      <PageHero image={IMG.panorama} title="Dining & Entertainment" subtitle="A Feast for Every Sense" crumb="Dining" />

      <section className="section" data-testid="dining-venues-section">
        <div className="container">
          <SectionHead
            center
            label="Gastronomy"
            title={`Three Worlds of <em>Flavour</em>`}
          />
          {DINING.map((d, i) => (
            <article className={`dining-venue ${i % 2 === 1 ? "dining-venue--flip" : ""} dining-venue--${d.mood}`} key={d.id} data-testid={`dining-venue-${d.id}`}>
              <div className="dining-venue__img">
                <ImageReveal src={d.image} alt={`${d.name} at BLVD Nashik`} />
              </div>
              <Reveal>
                <span className="dining-card__tag">{d.tag}</span>
                <h3 className="venue__name" style={{ marginTop: "0.6rem" }}>{d.name}</h3>
                <p className="dining-card__cuisine">{d.cuisine}</p>
                <p className="dining-venue__hours"><Clock size={14} /> {d.hours}</p>
                <p className="dining-venue__desc">{d.description}</p>
                <ul className="dining-venue__highlights">
                  {d.highlights.map((h) => (
                    <li key={h}><Check size={14} /> {h}</li>
                  ))}
                </ul>
                <CTAButton href={`tel:${CONTACT.phoneGeneral.replace(/\s/g, "")}`} variant="ghost" testId={`reserve-table-${d.id}`}>Reserve a Table</CTAButton>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="section section--darker" data-testid="entertainment-section">
        <div className="container">
          <SectionHead
            center
            label="Beyond the Table"
            title={`Entertainment, <em>Elevated</em>`}
            sub="A private cinema, a virtual fairway, and a games room — leisure engineered for every mood."
          />
          <div className="ent-grid">
            {ENTERTAINMENT.filter((e) => e.image).map((e, i) => (
              <Reveal key={e.id} delay={i * 0.1} className="ent-card">
                <div className="ent-card__img">
                  <img src={e.image} alt={e.name} loading="lazy" decoding="async" />
                </div>
                <div className="ent-card__body">
                  <h3>{e.name}</h3>
                  <p>{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="ent-card ent-card--text" >
            <div className="ent-card__body" style={{ display: "flex", gap: "1.2rem", alignItems: "flex-start", marginTop: "var(--space-lg)" }}>
              <Baby size={30} strokeWidth={1.3} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
              <div>
                <h3>Kids' Lounge</h3>
                <p>{ENTERTAINMENT.find((e) => e.id === "kids").description}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-cta" data-testid="dining-reservation-cta">
        <div className="container">
          <Reveal>
            <h2>Reserve Your Table</h2>
            <p>Rooftop sunsets, artisan cocktails, or midnight comfort food — your table awaits.</p>
            <div className="contact-cta__info">
              <a href={`tel:${CONTACT.phoneGeneral.replace(/\s/g, "")}`} data-testid="dining-cta-phone"><Phone size={15} /> {CONTACT.phoneGeneral}</a>
              <a href={`mailto:${CONTACT.emailReservations}`} data-testid="dining-cta-email"><Mail size={15} /> {CONTACT.emailReservations}</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" data-testid="dining-cta-whatsapp"><WhatsAppIcon size={15} /> WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
