import React from "react";
import { usePageMeta, CTAButton } from "@/components/Shared";

export default function NotFound() {
  usePageMeta("Page Not Found — BLVD Nashik");
  return (
    <section className="notfound" data-testid="notfound-page">
      <div className="notfound__code">404</div>
      <h1>This Corridor Leads Nowhere</h1>
      <p>The page you're looking for has checked out. Allow us to escort you back to the lobby.</p>
      <CTAButton to="/" variant="gold" testId="notfound-home-btn">Return to Home</CTAButton>
    </section>
  );
}
