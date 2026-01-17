import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { BadgeCheck, Shield, Users, Calendar, MapPinned } from "lucide-react";
import SeoHead from "../components/SeoHead";
import BookingForm from "../components/BookingForm";
import { colors } from "../theme/colors";
import { findTour } from "../data/tours";

function Pill({ children }) {
  return (
    <span
      style={{ borderColor: colors.premiumGold, color: colors.premiumCream }}
      className="inline-flex items-center gap-2 border px-3 py-1 text-xs uppercase tracking-wider"
    >
      {children}
    </span>
  );
}

export default function TourDetailsPage() {
  const { category, tourId } = useParams();
  const tour = useMemo(() => findTour(category, tourId), [category, tourId]);

  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Tour Operator";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";

  if (!tour) {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif font-bold">Tour not found</h1>
        <p className="mt-3 text-gray-600">The tour you are looking for does not exist.</p>
        <Link to="/tours" className="inline-block mt-6 underline">
          Back to Tours
        </Link>
      </section>
    );
  }

  const title = `${tour.name} | ${businessName}`;
  const description = `Tour: ${tour.name}. Duration: ${tour.duration}. Capacity: ${tour.people}. Includes: ${tour.includes?.slice(0, 4).join(", ")}.`;
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/tours/${tour.categoryKey}/${tour.id}` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <section style={{ backgroundColor: colors.forestGreen }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <Link to="/tours" className="text-sm underline text-gray-200">
                ← Back to Tours
              </Link>
              <h1 className="mt-3 text-3xl md:text-4xl font-serif font-bold" style={{ color: colors.premiumGold }}>
                {tour.name}
              </h1>
              <p className="mt-2 text-gray-200">{tour.categoryTitle}</p>
            </div>

            <div className="flex gap-2 flex-wrap justify-start">
              {tour.duration ? (
                <Pill>
                  <Calendar size={14} /> {tour.duration}
                </Pill>
              ) : null}
              {tour.people ? (
                <Pill>
                  <Users size={14} /> {tour.people}
                </Pill>
              ) : null}
              {tour.difficulty ? <Pill>{tour.difficulty}</Pill> : null}
              {tour.priceFrom ? <Pill>{tour.priceFrom}</Pill> : null}
            </div>
          </div>

          <div className="mt-8 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div style={{ backgroundColor: "rgba(255,255,255,0.06)" }} className="p-6">
                <h2 className="text-xl font-bold mb-3">Highlights</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="text-gray-100 flex items-start gap-2">
                      <span style={{ color: colors.premiumGold }}>•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/20 pt-6">
                  <h2 className="text-xl font-bold mb-3">What’s included</h2>
                  <div className="flex flex-wrap gap-2">
                    {tour.includes.map((it) => (
                      <span
                        key={it}
                        style={{ backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.18)" }}
                        className="border px-3 py-1 text-sm"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/20 pt-6">
                  <h2 className="text-xl font-bold mb-3">Good to know</h2>
                  <ul className="space-y-2 text-gray-100">
                    <li className="flex gap-2">
                      <BadgeCheck size={18} style={{ color: colors.premiumGold }} />
                      Private tour options available (ask for custom pickup/time).
                    </li>
                    <li className="flex gap-2">
                      <Shield size={18} style={{ color: colors.premiumGold }} />
                      Safety-first: guided route planning and weather-aware decisions.
                    </li>
                    <li className="flex gap-2">
                      <MapPinned size={18} style={{ color: colors.premiumGold }} />
                      Pickup area and extra distance fees depend on your location.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <BookingForm tour={tour} businessName={businessName} />

              <div className="mt-6 p-6 border" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
                <h3 className="text-lg font-bold" style={{ color: colors.premiumGold }}>
                  Quick FAQ
                </h3>
                <div className="mt-4 space-y-3 text-gray-100">
                  <details>
                    <summary className="cursor-pointer font-semibold">What should I bring?</summary>
                    <p className="mt-2 text-sm text-gray-200">
                      Comfortable shoes, water, a light rain jacket, and sun protection. If this tour includes trekking,
                      bring a small backpack.
                    </p>
                  </details>
                  <details>
                    <summary className="cursor-pointer font-semibold">Is this tour family-friendly?</summary>
                    <p className="mt-2 text-sm text-gray-200">
                      Most tours are family-friendly. If you have kids or elders, mention it in the form so we suggest
                      the safest stops.
                    </p>
                  </details>
                  <details>
                    <summary className="cursor-pointer font-semibold">How do payments work?</summary>
                    <p className="mt-2 text-sm text-gray-200">
                      You can confirm the date first. We’ll share the total price and payment options on WhatsApp/email.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
