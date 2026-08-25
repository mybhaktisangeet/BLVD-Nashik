import React from "react";
import { Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider } from "@/components/Shared";
import { IMG, CLUB_FACILITIES, CONTACT } from "@/data/site";

export default function ClubLaFair() {
  usePageMeta(
    "Club LaFair — BLVD Nashik | Wellness, Pool, Spa & Gym",
    "Club LaFair at BLVD Nashik — rooftop pool, spa, gym, jacuzzi, steam & sauna, yoga studio, salon, and recreation. Nashik's most complete wellness destination."
  );

  const pool = CLUB_FACILITIES.find((f) => f.feature);
  const rest = CLUB_FACILITIES.filter((f) => !f.feature);

  return (
    <>
      <PageHero image={IMG.pool} title="Club LaFair" subtitle="Your Private Sanctuary" crumb="Club LaFair" />

      <section className="section" data-testid="club-intro">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <SectionHead
            center
            label="Wellness & Lifestyle"
            title={`Where Wellness Becomes <em>a Way of Life</em>`}
            sub="Club LaFair is BLVD's crown jewel — a fully-equipped lifestyle club and wellness centre offering Nashik's most comprehensive fitness, recreation, and relaxation facilities. From sunrise yoga to sunset swims."
          />
        </div>
      </section>

      <section className="container container--wide" data-testid="club-pool-feature">
        <div className="club-feature">
          <ImageReveal src={pool.image} alt="Rooftop swimming pool at Club LaFair" />
          <Reveal className="club-feature__card glass" y={40}>
            <span className="dining-card__tag">Signature Facility</span>
            <h2 style={{ marginTop: "0.6rem" }}>{pool.name}</h2>
            <p className="club-row__hours"><Clock size={14} /> {pool.hours}</p>
            <p>{pool.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section" data-testid="club-facilities">
        <div className="container">
          {rest.map((f, i) => (
            <article className={`club-row ${i % 2 === 1 ? "club-row--flip" : ""}`} key={f.id} data-testid={`club-facility-${f.id}`}>
              <div className="club-row__img">
                <ImageReveal src={f.image} alt={`${f.name} at Club LaFair`} />
              </div>
              <Reveal>
                <SectionHead label={`0${i + 2} — Club LaFair`} title={f.name} />
                <p className="club-row__hours"><Clock size={14} /> {f.hours}</p>
                <p className="club-row__desc">{f.description}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="contact-cta" data-testid="club-membership-cta">
        <div className="container">
          <Reveal>
            <h2>Experience Club LaFair</h2>
            <p>Memberships and day passes available — begin your wellness journey with a conversation.</p>
            <div className="contact-cta__btns">
              <CTAButton to="/contact" variant="dark" testId="club-enquire-membership">Enquire About Membership</CTAButton>
              <CTAButton href={CONTACT.whatsapp} variant="dark" testId="club-whatsapp">WhatsApp Us</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
