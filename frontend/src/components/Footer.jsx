import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck, Instagram, Facebook } from "lucide-react";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "@/components/Shared";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "Banquet & Lawn", to: "/banquet" },
  { label: "Dining", to: "/dining" },
  { label: "Menus", to: "/menus" },
  { label: "Offers", to: "/offers" },
  { label: "Experiences", to: "/experiences" },
  { label: "Club LaFair", to: "/club-lafair" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const venues = [
  { label: "Hera Gardens", to: "/banquet" },
  { label: "Apollo Banquet", to: "/banquet" },
  { label: "Zeus Boardroom", to: "/banquet" },
  { label: "Panorama Rooftop", to: "/dining" },
  { label: "The Foundry Bar", to: "/dining" },
  { label: "Turmeric Cafe", to: "/dining" },
];

export const Footer = () => (
  <footer className="footer" data-testid="main-footer">
    <div className="container container--wide">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-name">BLVD</div>
          <div className="footer__brand-sub">Nashik · Aures Hospitality</div>
          <p className="footer__tagline">"Where Every Moment is an Experience"</p>
          <p className="footer__desc">
            Nashik's premier boutique hotel & lifestyle destination — rooms, banquets, dining, entertainment, and wellness under one roof.
          </p>
          <div className="footer__socials">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram" data-testid="footer-instagram">
              <Instagram size={17} />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noreferrer" className="footer__social" aria-label="Facebook" data-testid="footer-facebook">
              <Facebook size={17} />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="footer__social" aria-label="WhatsApp" data-testid="footer-whatsapp">
              <WhatsAppIcon size={17} />
            </a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Our Venues</h4>
          <ul>
            {venues.map((v) => (
              <li key={v.label}>
                <Link to={v.to}>{v.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li className="footer__contact-item">
              <MapPin size={15} />
              <span>{CONTACT.address}</span>
            </li>
            <li className="footer__contact-item">
              <Phone size={15} />
              <span>
                Sales: <a href={`tel:${CONTACT.phoneSales.replace(/\s/g, "")}`} data-testid="footer-phone-sales">{CONTACT.phoneSales}</a>
                <br />
                Reservations: <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`} data-testid="footer-phone-reservations">{CONTACT.phoneReservations}</a>
              </span>
            </li>
            <li className="footer__contact-item">
              <Mail size={15} />
              <span>
                <a href={`mailto:${CONTACT.emailReservations}`} data-testid="footer-email-reservations">{CONTACT.emailReservations}</a>
                <br />
                <a href={`mailto:${CONTACT.emailSales}`}>{CONTACT.emailSales}</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="container container--wide footer__bottom-inner">
        <div className="footer__copy">
          <span>© {new Date().getFullYear()} BLVD Nashik — Aures Hospitality Group. All Rights Reserved.</span>
          <span className="footer__secure" data-testid="footer-secured-badge">
            <ShieldCheck size={14} /> Secured
          </span>
        </div>
        <div className="footer__credits">
          <span>
            Designed by <a href="https://dragosaurabh.com/" target="_blank" rel="noreferrer" data-testid="footer-credit-designer">Dragosaurabh</a>
          </span>
          <span>
            Powered by <a href="https://ready2up.com/" target="_blank" rel="noreferrer" data-testid="footer-credit-powered">Ready2UP</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
