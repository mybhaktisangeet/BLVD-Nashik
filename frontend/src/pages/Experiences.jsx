import React from "react";
import { Car, MapPin, Wine, Landmark, Trees, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider, WhatsAppIcon } from "@/components/Shared";
import { CONTACT } from "@/data/site";

const CDN = "https://static.prod-images.emergentagent.com/jobs/8e94824b-eb2c-43de-890e-81e5b055610e/images";

const EXP_IMG = {
  sula: `${CDN}/2096c785193cda8cafa489a798fd2f55cec7dcba84981628b2390cc9ce69b79c.jpeg`,
  cellar: `${CDN}/b978beb98b086883c57f741e1007a10443f1cccf94360b34394d51ffbcb6a408.jpeg`,
  trimbak: `${CDN}/812c772b8f84eced0b9d8cafb993535ee9d54998ce943ad8bbd7dddaa8acdb17.jpeg`,
  ramkund: `${CDN}/c280052df901259887a37439b0da51d5e6e6949016c98ff87c086793705d1c5b.jpeg`,
  pandavleni: `${CDN}/162547de1e9260cd2c2b5b9586f0fc1d2c9dbaf24fa68037fe4f7fc416c57f65.jpeg`,
  gangapur: `${CDN}/639e9a1e8e9c31187d666f68d97f4632ee1471eb9ba808217f6f7e77a83a0030.jpeg`,
};

const DESTINATIONS = [
  {
    id: "sula",
    cat: "Wine Country",
    icon: Wine,
    name: "Sula Vineyards",
    drive: "14 km · ~30 min from BLVD",
    image: EXP_IMG.sula,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Sula+Vineyards+Nashik",
    description:
      "India's most celebrated winery — tasting flights on the terrace, the amphitheatre at sunset, and vineyard walks through the rows that put Nashik on the world's wine map.",
  },
  {
    id: "soma",
    cat: "Wine Country",
    icon: Wine,
    name: "Soma Vine Village & York Winery",
    drive: "15–18 km · ~35 min from BLVD",
    image: EXP_IMG.cellar,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Soma+Vine+Village+Nashik",
    description:
      "Quieter cellars along the Gangapur backwaters — barrel rooms, intimate tastings, and lakeside sundowners for those who like their wine unhurried.",
  },
  {
    id: "trimbakeshwar",
    cat: "Sacred Trails",
    icon: Landmark,
    name: "Trimbakeshwar Jyotirlinga",
    drive: "22 km · ~40 min from BLVD",
    image: EXP_IMG.trimbak,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Trimbakeshwar+Temple",
    description:
      "One of the twelve sacred Jyotirlingas, cradled by the Brahmagiri hills at the source of the Godavari. BLVD sits on the very road that leads there — leave at dawn, return for breakfast.",
  },
  {
    id: "ramkund",
    cat: "Sacred Trails",
    icon: Landmark,
    name: "Ramkund & Panchavati",
    drive: "9 km · ~25 min from BLVD",
    image: EXP_IMG.ramkund,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Ramkund+Panchavati+Nashik",
    description:
      "The spiritual heart of old Nashik — sunrise aartis on the Godavari ghats, the Kalaram Temple, and lanes steeped in the legends of the Ramayana.",
  },
  {
    id: "pandavleni",
    cat: "City & Heritage",
    icon: Trees,
    name: "Pandavleni Caves",
    drive: "8 km · ~20 min from BLVD",
    image: EXP_IMG.pandavleni,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Pandavleni+Caves+Nashik",
    description:
      "Twenty-four rock-cut Buddhist caves carved two thousand years ago, best at golden hour — pair the short hillside climb with the Coin Museum at its base.",
  },
  {
    id: "gangapur",
    cat: "City & Heritage",
    icon: Trees,
    name: "Gangapur Dam & Boat Club",
    drive: "12 km · ~25 min from BLVD",
    image: EXP_IMG.gangapur,
    maps: "https://www.google.com/maps/dir/?api=1&origin=BLVD+Nashik+Trimbakeshwar+Road+Satpur&destination=Gangapur+Dam+Nashik",
    description:
      "Calm backwaters ringed by hills — kayaking, boat rides, and some of Nashik's most painterly sunsets, minutes from the vineyards.",
  },
];

const TRAIL = [
  { time: "9:30 AM", title: "Depart BLVD", desc: "A slow breakfast at Turmeric, then your car rolls out onto Gangapur Road." },
  { time: "10:15 AM", title: "Sula Vineyards", desc: "Guided winery tour and a six-wine tasting flight on the terrace." },
  { time: "1:00 PM", title: "Vineyard Lunch", desc: "Long lunch among the vines — ask us to reserve the best table." },
  { time: "3:30 PM", title: "Soma Vine Village", desc: "Cellar tasting by the Gangapur backwaters as the light turns gold." },
  { time: "6:00 PM", title: "Sundowner at the Dam", desc: "A quiet pause over the water before the drive home." },
  { time: "8:00 PM", title: "Dinner at Panorama", desc: "Back at BLVD — rooftop dinner, and a Sula Dindori nightcap at The Foundry." },
];

const conciergeWA = `${CONTACT.whatsapp}?text=${encodeURIComponent("Hello BLVD Nashik! I'd like help planning a Nashik experience — wine trail, temple visits, or sightseeing. Please assist.")}`;

export default function Experiences() {
  usePageMeta(
    "Nashik Experiences — BLVD Nashik | Wine Trail, Temples & City Gems",
    "The BLVD guide to Nashik — Sula Vineyards, Trimbakeshwar Temple, Ramkund, Pandavleni Caves and Gangapur Dam with drive times from the hotel, plus a curated one-day wine trail."
  );

  return (
    <>
      <PageHero image={EXP_IMG.sula} title="Nashik Experiences" subtitle="The Wine Trail & Beyond" crumb="Experiences" />

      <section className="section" data-testid="experiences-section">
        <div className="container">
          <SectionHead
            center
            label="Beyond Our Doors"
            title={`India's Wine Capital, <em>At Your Doorstep</em>`}
            sub="Vineyards, Jyotirlingas, ancient caves and river ghats — every landmark of Nashik measured in minutes from the BLVD lobby. Our concierge arranges cars, tastings and darshan timings."
          />
          <div className="exp-grid">
            {DESTINATIONS.map((d, i) => (
              <Reveal key={d.id} delay={(i % 2) * 0.12} y={40} className="exp-card" data-testid={`exp-${d.id}`}>
                <div className="exp-card__img">
                  <span className="offer-tag"><d.icon size={11} style={{ marginRight: 6, verticalAlign: "-1px" }} />{d.cat}</span>
                  <ImageReveal src={d.image} alt={d.name} />
                </div>
                <div className="exp-card__body">
                  <h3 className="exp-card__name">{d.name}</h3>
                  <p className="exp-card__drive"><Car size={14} /> {d.drive}</p>
                  <p className="exp-card__desc">{d.description}</p>
                  <a className="text-link" href={d.maps} target="_blank" rel="noreferrer" data-testid={`exp-directions-${d.id}`}>
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="section section--darker" data-testid="wine-trail-section">
        <div className="container container--narrow">
          <SectionHead
            center
            label="Signature Itinerary"
            title={`The BLVD Wine Trail — <em>One Perfect Day</em>`}
            sub="Our concierge's favourite route through the valley — reserved, timed, and driven for you."
          />
          <div className="trail">
            {TRAIL.map((t, i) => (
              <Reveal key={t.time} delay={i * 0.08} y={30} className="trail__step" data-testid={`trail-step-${i}`}>
                <div className="trail__time">{t.time}</div>
                <div className="trail__dot" />
                <div className="trail__content">
                  <h4>{t.title}</h4>
                  <p>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="gallery-teaser__cta">
            <CTAButton href={conciergeWA} variant="gold" testId="trail-concierge-wa">
              <WhatsAppIcon size={15} /> Plan My Wine Trail
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="contact-cta" data-testid="experiences-cta">
        <div className="container">
          <h2>Your Nashik, Arranged</h2>
          <p>Cars, tastings, temple timings, picnic hampers — one message and it's done.</p>
          <div className="contact-cta__btns">
            <CTAButton href={conciergeWA} variant="dark" testId="exp-cta-whatsapp">WhatsApp Concierge</CTAButton>
            <CTAButton to="/offers" variant="dark" testId="exp-cta-offers">See Wine Country Weekend</CTAButton>
          </div>
          <div className="contact-cta__info">
            <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={15} /> P20, Trimbakeshwar Road, Satpur — the road to everything
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
