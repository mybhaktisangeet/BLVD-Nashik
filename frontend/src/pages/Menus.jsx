import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Download, Star, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, GoldDivider } from "@/components/Shared";
import { IMG, CONTACT } from "@/data/site";
import { MENUS } from "@/data/menus";
import { EASE } from "@/lib/anim";

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function Menus() {
  usePageMeta(
    "Menus — BLVD Nashik | Panorama, The Foundry & Turmeric",
    "Browse the full menus of BLVD Nashik — Panorama rooftop fine dining, The Foundry bar & lounge, and Turmeric 24-hour all-day dining. Signature dishes, cocktails and Nashik wines."
  );

  const [params, setParams] = useSearchParams();
  const initial = params.get("venue");
  const [active, setActive] = useState(MENUS.some((m) => m.id === initial) ? initial : "panorama");
  const menu = MENUS.find((m) => m.id === active);

  const switchVenue = (id) => {
    setActive(id);
    setParams({ venue: id }, { replace: true });
  };

  const jumpTo = (name) => {
    const el = document.getElementById(`cat-${slugify(name)}`);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -110, duration: 1.1 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <PageHero image={IMG.panorama} title="The Menus" subtitle="Composed with Care, Served with Ceremony" crumb="Menus" />

      <section className="section" data-testid="menus-section">
        <div className="container">
          <SectionHead
            center
            label="Culinary Library"
            title={`Choose Your <em>Table</em>`}
          />

          <div className="menu-tabs" role="tablist" data-testid="menu-venue-tabs">
            {MENUS.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={active === m.id}
                className={`menu-tab ${active === m.id ? "menu-tab--active" : ""}`}
                onClick={() => switchVenue(m.id)}
                data-testid={`menu-tab-${m.id}`}
              >
                <img className="menu-tab__thumb" src={m.image} alt={m.name} loading="lazy" decoding="async" />
                <span>
                  <span className="menu-tab__name">{m.name}</span>
                  <span className="menu-tab__tag">{m.tag}</span>
                </span>
              </button>
            ))}
          </div>

          <motion.div
            key={menu.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="menu-head">
              <div className="menu-head__meta">
                <h3 className="venue__name">{menu.name}</h3>
                <p className="menu-head__cuisine">{menu.cuisine}</p>
                <p className="menu-head__hours"><Clock size={13} /> {menu.hours}</p>
                <p className="menu-head__intro">{menu.intro}</p>
              </div>
              <div className="menu-head__actions">
                <CTAButton href={menu.pdf} variant="ghost" testId={`menu-download-${menu.id}`}>
                  <Download size={15} /> PDF Menu
                </CTAButton>
                <CTAButton href={`tel:${CONTACT.phoneGeneral.replace(/\s/g, "")}`} variant="gold" testId={`menu-reserve-${menu.id}`}>
                  <Phone size={15} /> Reserve
                </CTAButton>
              </div>
            </div>

            <div className="menu-sigs" data-testid="menu-signatures">
              {menu.signatures.map((s) => (
                <div className="menu-sig" key={s.n}>
                  <span className="menu-sig__label"><Star size={11} fill="currentColor" /> Chef's Signature</span>
                  <div className="menu-sig__name">{s.n}</div>
                  <p className="menu-sig__desc">{s.d}</p>
                  <div className="menu-sig__price">₹ {s.p}</div>
                </div>
              ))}
            </div>

            <div className="menu-catnav" data-testid="menu-category-nav">
              {menu.categories.map((c) => (
                <button key={c.name} className="gal-tab" onClick={() => jumpTo(c.name)} data-testid={`menu-cat-btn-${slugify(c.name)}`}>
                  {c.name}
                </button>
              ))}
            </div>

            <div className="menu-legend">
              <Star size={11} fill="currentColor" /> Chef's Signature &nbsp;·&nbsp; All prices in INR, exclusive of applicable taxes
            </div>

            <div className="menu-cols">
              {menu.categories.map((cat) => (
                <section className="menu-cat" id={`cat-${slugify(cat.name)}`} key={cat.name} data-testid={`menu-cat-${slugify(cat.name)}`}>
                  <h4 className="menu-cat__title">{cat.name}</h4>
                  {cat.note && <p className="menu-cat__note">{cat.note}</p>}
                  <ul>
                    {cat.items.map((item) => (
                      <li className="menu-item" key={item.n}>
                        <div className="menu-item__row">
                          <span className="menu-item__name">
                            {item.n}
                            {item.s && <Star className="menu-item__star" size={11} fill="currentColor" />}
                          </span>
                          <span className="menu-item__dots" />
                          <span className="menu-item__price">₹ {item.p}</span>
                        </div>
                        {item.d && <p className="menu-item__desc">{item.d}</p>}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GoldDivider />

      <section className="contact-cta" data-testid="menus-reserve-cta">
        <div className="container">
          <h2>A Table Awaits</h2>
          <p>Call ahead for rooftop seating, live music evenings, or private dining arrangements.</p>
          <div className="contact-cta__btns">
            <CTAButton href={`tel:${CONTACT.phoneGeneral.replace(/\s/g, "")}`} variant="dark" testId="menus-cta-call">Call {CONTACT.phoneGeneral}</CTAButton>
            <CTAButton href={CONTACT.whatsapp} variant="dark" testId="menus-cta-whatsapp">WhatsApp Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
