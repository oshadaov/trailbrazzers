import React from "react";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import TourCollections from "../components/TourCollections";
import OperationsGrid from "../components/OperationsGrid";
import SeoHead from "../components/SeoHead";

export default function HomePage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Tour Operator";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `${businessName} | Jeep Tours, Waterfalls & Viewpoints`;
  const description = "Curated jeep tours across Sri Lanka: waterfalls, peaks, trekking adventures, wildlife safaris, and cultural trails. Book fast via WhatsApp.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />
      <Hero />
      <Manifesto />
      <TourCollections />
      <OperationsGrid />
    </>
  );
}
