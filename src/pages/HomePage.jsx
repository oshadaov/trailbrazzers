import React from "react";
import Hero from "../components/Hero";
import Manifesto from "../components/Manifesto";
import TourCollections from "../components/TourCollections";
import OperationsGrid from "../components/OperationsGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <TourCollections />
      <OperationsGrid />
    </>
  );
}
