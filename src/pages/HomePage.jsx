import React from "react";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import TourCollections from "../components/TourCollections";
import OperationsGrid from "../components/OperationsGrid";
import ImpactDashboard from "../components/ImpactDashboard";
import SeoHead from "../components/SeoHead";

export default function HomePage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `${businessName} | Regenerative Eco-Tourism in Belihuloya`;
  const description = "Awaken the Explorer Within. Regenerative journeys in Belihuloya—Water, Earth, Light, and Spirit experiences with community partners and transparent impact.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />
      <Hero />
      <Manifesto />
      <TourCollections />
      <ImpactDashboard compact />
      <OperationsGrid />
    </>
  );
}
