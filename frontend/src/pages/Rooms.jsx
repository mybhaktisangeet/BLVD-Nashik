import React from "react";
import { Maximize, BedDouble, Eye, Users, Wifi, AirVent, Tv, Refrigerator, Coffee, Vault, LampDesk, Sparkles, Shirt, ConciergeBell, Zap, WashingMachine, Phone, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import { usePageMeta, SectionHead, CTAButton, ImageReveal, Reveal, GoldDivider } from "@/components/Shared";
import { IMG, ROOMS, CONTACT } from "@/data/site";

const AMENITIES = [
  { icon: Wifi, name: "High-Speed Wi-Fi", desc: "Complimentary throughout your stay" },
  { icon: AirVent, name: "Climate Control", desc: "Individual AC in every room" },
  { icon: Tv, name: "LED Smart TV", desc: "With satellite channels" },
  { icon: Refrigerator, name: "Mini Bar", desc: "Stocked on request" },
  { icon: Coffee, name: "Tea & Coffee Maker", desc: "With premium blends" },
  { icon: Vault, name: "In-Room Safe", desc: "Secure your valuables" },
  { icon: LampDesk, name: "Work Desk", desc: "With charging stations" },
  { icon: Sparkles, name: "Premium Toiletries", desc: "Curated bath amenities" },
  { icon: Shirt, name: "Bathrobes & Slippers", desc: "Plush comfort essentials" },
  { icon: ConciergeBell, name: "24-Hour Room Service", desc: "Whenever you need us" },
  { icon: WashingMachine, name: "Laundry & Pressing", desc: "Same-day service" },
  { icon: Zap, name: "Power Backup", desc: "Uninterrupted comfort" },
];

const ROOM_ICONS = [Wifi, AirVent, Tv, Refrigerator, Vault, ConciergeBell];

export default function Rooms() {
  usePageMeta(
    "Rooms & Suites — BLVD Nashik | Boutique Accommodation",
    "73 elegantly appointed rooms and suites at BLVD Nashik — garden views, premium linens, modern amenities, and 24-hour service. From ₹3,000 per night."
  );

  return (
    <>
      <PageHero image={IMG.roomSuite} title="Rooms & Suites" subtitle="Elegance in Every Detail" crumb="Rooms" />

      <section className="section" data-testid="room-showcase">
        <div className="container">
          <SectionHead
            center
            label="Accommodation"
            title={`Rest, <em>Beautifully</em>`}
            sub="Two thoughtfully designed room categories, each a study in warm, modern boutique comfort."
          />
          {ROOMS.map((room, i) => (
            <div className={`room-block ${i % 2 === 1 ? "room-block--flip" : ""}`} key={room.id} data-testid={`room-block-${room.id}`}>
              <div className="room-block__img">
                <ImageReveal src={room.image} alt={`${room.name} at BLVD Nashik`} />
              </div>
              <Reveal>
                <SectionHead label={`0${i + 1} — ${room.view}`} title={room.name} />
                <p className="room-block__rate">Starting from <strong>{room.rate}</strong> / night</p>
                <p className="room-block__desc">{room.description}</p>
                <div className="room-specs">
                  <div className="room-spec"><Maximize size={17} /> {room.size}</div>
                  <div className="room-spec"><BedDouble size={17} /> {room.bed}</div>
                  <div className="room-spec"><Eye size={17} /> {room.view}</div>
                  <div className="room-spec"><Users size={17} /> {room.guests}</div>
                </div>
                <div className="room-block__icons">
                  {ROOM_ICONS.map((Icon, j) => (
                    <Icon key={j} size={19} strokeWidth={1.4} />
                  ))}
                </div>
                <CTAButton href={CONTACT.booking} variant="gold" testId={`book-room-${room.id}`}>Book This Room</CTAButton>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="section section--darker" data-testid="amenities-section">
        <div className="container">
          <SectionHead
            center
            label="Comforts"
            title={`Every Amenity, <em>Anticipated</em>`}
          />
          <div className="amenities-grid">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.name} delay={(i % 4) * 0.08} className="amenity-card">
                <a.icon size={26} strokeWidth={1.3} />
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta" data-testid="rooms-booking-cta">
        <div className="container">
          <Reveal>
            <h2>Reserve Your Perfect Stay</h2>
            <p>Direct reservations, best rates — always.</p>
            <div className="contact-cta__btns">
              <CTAButton href={CONTACT.booking} variant="dark" testId="rooms-book-now">Book Now</CTAButton>
            </div>
            <div className="contact-cta__info">
              <a href={`tel:${CONTACT.phoneReservations.replace(/\s/g, "")}`}><Phone size={15} /> {CONTACT.phoneReservations}</a>
              <a href={`mailto:${CONTACT.emailReservations}`}><Mail size={15} /> {CONTACT.emailReservations}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
