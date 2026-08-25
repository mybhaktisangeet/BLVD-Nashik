import React from "react";
import { usePageMeta, GoldDivider } from "@/components/Shared";
import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/Marquee";
import { ExperiencePillars, RoomsTeaser, BanquetTeaser } from "@/components/home/Sections";
import { DiningShowcase, ClubTeaser, GalleryTeaser } from "@/components/home/Showcase";
import OffersTeaser from "@/components/home/OffersTeaser";
import { Testimonials, LocationMap, ContactCTA } from "@/components/home/Closing";

export default function Home() {
  usePageMeta(
    "BLVD Nashik — Premium Boutique Hotel & Lifestyle Destination",
    "BLVD Nashik — Nashik's premier boutique hotel on Trimbak Road. 73 luxury rooms, 12,000+ sq. ft. banquet spaces, rooftop dining, bar, private cinema, and Club LaFair wellness centre. Book now."
  );

  return (
    <>
      <HeroSection />
      <Marquee />
      <ExperiencePillars />
      <RoomsTeaser />
      <BanquetTeaser />
      <DiningShowcase />
      <ClubTeaser />
      <OffersTeaser />
      <GoldDivider />
      <GalleryTeaser />
      <Testimonials />
      <LocationMap />
      <ContactCTA />
    </>
  );
}
