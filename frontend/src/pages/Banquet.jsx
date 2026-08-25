import React, { useState } from "react";
import { Gem, Heart, Cake, Briefcase, Rocket, Trophy, Martini, Check, Phone, Mail, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider, WhatsAppIcon } from "@/components/Shared";
import { IMG, VENUES, CONTACT } from "@/data/site";

const EVENT_TYPES = [
  { icon: Gem, name: "Weddings & Receptions", desc: "Fairy-tale celebrations for up to 750 guests" },
  { icon: Heart, name: "Engagements & Mehendi", desc: "Intimate ceremonies with bespoke decor" },
  { icon: Cake, name: "Birthdays & Anniversaries", desc: "Milestone moments, beautifully hosted" },
  { icon: Briefcase, name: "Corporate Conferences", desc: "Seminars and summits with full AV support" },
  { icon: Rocket, name: "Product Launches", desc: "Brand events that leave an impression" },
  { icon: Trophy, name: "Awards & Gala Dinners", desc: "Ceremonies with grandeur and grace" },
  { icon: Martini, name: "Cocktail Gatherings", desc: "Sophisticated social evenings" },
];

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", eventType: "Wedding / Reception", guests: "Up to 100", date: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please share your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (!/^[\d+\s-]{10,}$/.test(form.phone)) errs.phone = "Please enter a valid phone number";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success glass" data-testid="enquiry-success">
        <CheckCircle2 size={54} strokeWidth={1.2} />
        <h3>Thank You, {form.name.split(" ")[0]}</h3>
        <p>Our events team has received your enquiry and will reach out within 24 hours to begin planning your perfect occasion.</p>
        <CTAButton onClick={() => setSent(false)} variant="ghost" testId="enquiry-another">Send Another Enquiry</CTAButton>
      </div>
    );
  }

  return (
    <form className="glass enquiry__form" onSubmit={submit} noValidate data-testid="enquiry-form">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="enq-name">Full Name *</label>
          <input id="enq-name" value={form.name} onChange={set("name")} placeholder="Your name" data-testid="enquiry-name-input" />
          {errors.name && <span className="form-error" data-testid="enquiry-name-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="enq-email">Email *</label>
          <input id="enq-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" data-testid="enquiry-email-input" />
          {errors.email && <span className="form-error" data-testid="enquiry-email-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="enq-phone">Phone *</label>
          <input id="enq-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98XXX XXXXX" data-testid="enquiry-phone-input" />
          {errors.phone && <span className="form-error" data-testid="enquiry-phone-error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="enq-type">Event Type</label>
          <select id="enq-type" value={form.eventType} onChange={set("eventType")} data-testid="enquiry-type-select">
            {["Wedding / Reception", "Engagement / Mehendi", "Birthday / Anniversary", "Corporate Conference", "Product Launch", "Award Ceremony / Gala", "Cocktail Gathering"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="enq-guests">Expected Guests</label>
          <select id="enq-guests" value={form.guests} onChange={set("guests")} data-testid="enquiry-guests-select">
            {["Up to 100", "100 – 250", "250 – 500", "500 – 750"].map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="enq-date">Preferred Date</label>
          <input id="enq-date" type="date" value={form.date} onChange={set("date")} data-testid="enquiry-date-input" />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="enq-msg">Message</label>
          <textarea id="enq-msg" value={form.message} onChange={set("message")} placeholder="Tell us about your celebration..." data-testid="enquiry-message-input" />
        </div>
        <div className="form-field--full">
          <CTAButton onClick={undefined} variant="gold" testId="enquiry-submit">Send Enquiry</CTAButton>
        </div>
      </div>
    </form>
  );
};

export default function Banquet() {
  usePageMeta(
    "Banquet & Event Venues — BLVD Nashik | Weddings & Conferences",
    "Hera Gardens, Apollo Banquet, and Zeus Boardroom — 12,000+ sq. ft. of banquet and lawn space in Nashik hosting up to 750 guests with in-house catering and event coordination."
  );

  return (
    <>
      <PageHero image={IMG.banquetWedding} title="Banquet & Lawn" subtitle="Where Grand Moments Come to Life" crumb="Banquet & Lawn" />

      <section className="section" data-testid="venues-section">
        <div className="container">
          <SectionHead
            center
            label="Our Venues"
            title={`Three Stages for <em>Every Occasion</em>`}
          />
          {VENUES.map((v) => (
            <article className="venue" key={v.id} data-testid={`venue-${v.id}`}>
              <Reveal className="venue__head" y={30}>
                <div>
                  <h3 className="venue__name">{v.name}</h3>
                  <p className="venue__subtitle">{v.subtitle}</p>
                </div>
                <div className="venue__specs">
                  <div className="venue__spec">
                    <span className="venue__spec-label">Area</span>
                    <span className="venue__spec-value">{v.area}</span>
                  </div>
                  <div className="venue__spec">
                    <span className="venue__spec-label">Capacity</span>
                    <span className="venue__spec-value">{v.capacity}</span>
                  </div>
                </div>
              </Reveal>
              <div className={`venue__gallery ${v.images.length === 1 ? "venue__gallery--single" : ""}`}>
                {v.images.map((img, i) => (
                  <ImageReveal key={i} src={img} alt={`${v.name} — view ${i + 1}`} />
                ))}
              </div>
              <div className="venue__body">
                <div>
                  <p className="venue__desc">{v.description}</p>
                  <p className="venue__ideal">
                    <strong>Ideal For</strong>
                    {v.idealFor}
                  </p>
                </div>
                <div>
                  <ul className="venue__features">
                    {v.features.map((f) => (
                      <li key={f}><Check size={15} /> {f}</li>
                    ))}
                  </ul>
                  <div className="venue__cta">
                    <CTAButton href={CONTACT.whatsapp} variant="ghost" testId={`venue-enquire-${v.id}`}>Enquire About This Venue</CTAButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="section section--darker" data-testid="event-types-section">
        <div className="container">
          <SectionHead center label="Occasions" title={`Events We <em>Host</em>`} />
          <div className="event-types">
            {EVENT_TYPES.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 0.1} className="event-type">
                <e.icon size={28} strokeWidth={1.3} />
                <h3>{e.name}</h3>
                <p>{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" data-testid="enquiry-section">
        <div className="container">
          <SectionHead
            center
            label="Begin Planning"
            title={`Let's Plan Your <em>Perfect Event</em>`}
          />
          <div className="enquiry__grid">
            <EnquiryForm />
            <aside className="enquiry__side">
              <h3>Speak With Our Events Team</h3>
              <div className="enquiry__side-item">
                <Phone size={16} />
                <span>
                  <a href={`tel:${CONTACT.phoneSales.replace(/\s/g, "")}`} data-testid="enquiry-side-phone">{CONTACT.phoneSales}</a>
                  <br />
                  <a href={`tel:${CONTACT.phoneSales2.replace(/\s/g, "")}`}>{CONTACT.phoneSales2}</a>
                </span>
              </div>
              <div className="enquiry__side-item">
                <Mail size={16} />
                <a href={`mailto:${CONTACT.emailSales}`} data-testid="enquiry-side-email">{CONTACT.emailSales}</a>
              </div>
              <div className="enquiry__side-item">
                <span style={{ color: "var(--gold-500)" }}><WhatsAppIcon size={16} /></span>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" data-testid="enquiry-side-whatsapp">Chat on WhatsApp</a>
              </div>
              <CTAButton href={CONTACT.whatsapp} variant="gold" testId="enquiry-side-wa-btn">WhatsApp Us</CTAButton>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
