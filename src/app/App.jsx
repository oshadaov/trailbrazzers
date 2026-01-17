import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HomePage from "../pages/HomePage";
import ToursPage from "../pages/ToursPage";
import TourDetailsPage from "../pages/TourDetailsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ImpactPage from "../pages/ImpactPage";
import SciencePage from "../pages/SciencePage";
import NotFoundPage from "../pages/NotFoundPage";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/tours/:category/:tourId" element={<TourDetailsPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/science" element={<SciencePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
