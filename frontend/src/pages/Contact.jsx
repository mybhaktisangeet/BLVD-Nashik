import React, { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle2, Instagram, Facebook } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, Reveal, WhatsAppIcon } from "@/components/Shared";
import { IMG, CONTACT, HOURS } from "@/data/site";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Reservation", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Please share your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email";
    if (!/^[\d+\s-]{10,}$/.test(form.phone)) errs.phone = "Please enter a valid phone number";
    if (!form.message.trim()) errs.message = "Please write a short message";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success glass" data-testid="contact-success">
        <CheckCircle2 size={54} strokeWidth={1.2} />
        <h3>Message Received</h3>
        <p>Thank you, {form.name.split(" ")[0]}. Our team will respond to your {form.subject.toLowerCase()} enquiry within 24 hours.</p>
        <CTAButton onClick={() => setSent(false)} variant="ghost" testId="contact-send-another">Send Another Message</CTAButton>
      </div>
    );
  }

  return (
    <form className="glass contact-form-panel" onSubmit={submit} noValidate data-testid="contact-form">
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="ct-name">Full Name *</label>
          <input id="ct-name" value={form.name} onChange={set("name")} placeholder="Your name" data-testid="contact-name-input" />
          {errors.name && <span className="form-error" data-testid="contact-name-error">{errors.name}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="ct-email">Email *</label>
          <input id="ct-email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" data-testid="contact-email-input" />
          {errors.email && <span className="form-error" data-testid="contact-email-error">{errors.email}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="ct-phone">Phone *</label>
          <input id="ct-phone" type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 98XXX XXXXX" data-testid="contact-phone-input" />
          {errors.phone && <span className="form-error" data-testid="contact-phone-error">{errors.phone}</span>}
        </div>
        <div className="form-field">
          <label htmlFor="ct-subject">Subject</label>
          <select id="ct-subject" value={form.subject} onChange={set("subject")} data-testid="contact-subject-select">
            {["Reservation", "Event Inquiry", "General Inquiry", "Feedback", "Careers"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="ct-msg">Message *</label>
          <textarea id="ct-msg" value={form.message} onChange={set("message")} placeholder="How can we help you?" data-testid="contact-message-input" />
          {errors.message && <span className="form-error" data-testid="contact-message-error">{errors.message}</span>}
        </div>
        <div className="form-field--full">
          <CTAButton variant="gold" testId="contact-submit">Send Message</CTAButton>
        </div>
      </div>
    </form>
  );
};

export default function Contact() {
  usePageMeta(
    "Contact Us — BLVD Nashik | Reservations & Enquiries",
    "Reach BLVD Nashik — P20, Trimbakeshwar Road, MIDC, Satpur, Nashik. Call +91 7558683916 for reservations or +91 8380039333 for events."
  );

  return (
    <>
      <PageHero image={IMG.exteriorNight} title="Contact Us" subtitle="We'd Love to Hear From You" crumb="Contact" />

      <section className="section" data-testid="contact-section">
        <div className="container">
          <SectionHead center label="Reach Out" title={`Begin a <em>Conversation</em>`} />
          <div className="contact-grid">
            <ContactForm />
            <div className="contact-info">
              <div className="contact-info__block">
                <h3>Contact Information</h3>
                <div className="contact-info__item">
                  <MapPin size={16} />
                  <span>{CONTACT.address}</span>
                </div>
                <div className="contact-info__item">
                  <Phone size={16} />
                  <span>
                    Sales: <a href={`tel:${CONTACT.phoneSales.replace(/\s/g, "")}`} data-testid="contact-info-sales">{CONTACT.phoneSales}</a>
                    <br />
                    Reservations: <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`} data-testid="contact-info-reservations">{CONTACT.phoneReservations}</a>
                    <br />
                    General: <a href={`tel:${CONTACT.phoneGeneral.replace(/\s/g, "")}`}>{CONTACT.phoneGeneral}</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <Mail size={16} />
                  <span>
                    <a href={`mailto:${CONTACT.emailReservations}`}>{CONTACT.emailReservations}</a>
                    <br />
                    <a href={`mailto:${CONTACT.emailSales}`}>{CONTACT.emailSales}</a>
                  </span>
                </div>
                <div className="contact-info__item">
                  <span style={{ color: "var(--gold-500)" }}><WhatsAppIcon size={16} /></span>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" data-testid="contact-info-whatsapp">Chat on WhatsApp</a>
                </div>
                <div className="contact-info__item">
                  <Instagram size={16} />
                  <a href={CONTACT.instagram} target="_blank" rel="noreferrer">@blvdnashik</a>
                </div>
                <div className="contact-info__item">
                  <Facebook size={16} />
                  <a href={CONTACT.facebook} target="_blank" rel="noreferrer">BLVD Nashik</a>
                </div>
              </div>
              <div className="contact-info__block">
                <h3>Operating Hours</h3>
                <ul className="hours-list">
                  {HOURS.map((h) => (
                    <li key={h.label}>
                      <span>{h.label}</span>
                      <span>{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-map" data-testid="contact-map">
        <iframe
          src={CONTACT.mapsEmbed}
          title="BLVD Nashik on Google Maps"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <section className="section" data-testid="quick-contact-bar">
        <div className="container">
          <div className="quick-bar">
            <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`} className="quick-bar__btn" data-testid="quick-call">
              <Phone size={24} strokeWidth={1.4} />
              Call Us
              <small>{CONTACT.phoneReservations}</small>
            </a>
            <a href={`mailto:${CONTACT.emailReservations}`} className="quick-bar__btn" data-testid="quick-email">
              <Mail size={24} strokeWidth={1.4} />
              Email Us
              <small>{CONTACT.emailReservations}</small>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="quick-bar__btn" data-testid="quick-whatsapp">
              <span style={{ color: "var(--gold-400)" }}><WhatsAppIcon size={24} /></span>
              WhatsApp
              <small>{CONTACT.phoneSales}</small>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
