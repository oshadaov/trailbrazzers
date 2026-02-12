import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BadgeCheck,
  Shield,
  Users,
  Calendar,
  MapPinned,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import SeoHead from "../components/SeoHead";
import BookingForm from "../components/BookingForm";
import { colors } from "../theme/colors";
import { findTour } from "../data/tours";
import RatesTable from "../components/RatesTable";

/** Category backgrounds (fallbacks) */
const bgByCategoryKey = {
  waterfall: "/images/collections/waterfall.png",
  peaks: "/images/collections/peaks.png",
  trek: "/images/collections/trek.png",
  history: "/images/collections/history.png",
  twilight: "/images/collections/twilight.png",
  wildlife: "/images/collections/wildlife.png",
  ella: "/images/collections/ella.png",
  ecoHealing: "/images/collections/ecoHealing.png",
  heritageTea: "/images/collections/heritageTea.png",
};

function getHeroImage(tour) {
  // If you add `image` into each package later, this will use it automatically.
  return tour?.image || bgByCategoryKey[tour?.categoryKey] || "/images/collections/default.jpg";
}

function Pill({ children }) {
  return (
    <span
      style={{ borderColor: colors.premiumGold, color: colors.premiumCream }}
      className="inline-flex items-center gap-2 border px-3 py-1 text-xs uppercase tracking-wider rounded-full"
    >
      {children}
    </span>
  );
}

/** Build WhatsApp deep link with prefilled message */
function buildWhatsAppLink({ phone, businessName, tour, siteUrl }) {
  if (!phone) return null;

  const clean = String(phone).replace(/[^\d]/g, "");
  const base = `https://wa.me/${clean}`;

  const url =
    siteUrl && tour?.categoryKey && tour?.id
      ? `${siteUrl.replace(/\/$/, "")}/tours/${tour.categoryKey}/${tour.id}`
      : "";

  const msgLines = [
    `Hi ${businessName}, I want to book this tour: ${tour?.name}`,
    `Category: ${tour?.categoryTitle || ""}`,
    `Duration: ${tour?.duration || ""}`,
    `People: ${tour?.people || ""}`,
    `Preferred date: ____`,
    `Pickup location: ____`,
    url ? `Link: ${url}` : null,
  ].filter(Boolean);

  const text = encodeURIComponent(msgLines.join("\n"));
  return `${base}?text=${text}`;
}

export default function TourDetailsPage() {
  const { category, tourId } = useParams();
  const tour = useMemo(() => findTour(category, tourId), [category, tourId]);

  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Tour Operator";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";

  // Add this env in Vercel:
  // VITE_WHATSAPP_NUMBER=947XXXXXXXX
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";

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

  const heroImage = getHeroImage(tour);
  const title = `${tour.name} | ${businessName}`;
  const description = `Tour: ${tour.name}. Duration: ${tour.duration}. Capacity: ${tour.people}. Includes: ${tour.includes?.slice(0, 4).join(", ")}.`;

  const url = siteUrl
    ? `${siteUrl.replace(/\/$/, "")}/tours/${tour.categoryKey}/${tour.id}`
    : undefined;

  const waLink = buildWhatsAppLink({
    phone: whatsappNumber,
    businessName,
    tour,
    siteUrl,
  });

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || heroImage || undefined} />

      <section style={{ backgroundColor: colors.forestGreen }} className="text-white">
        {/* Hero image */}
        <div className="relative">
          <div className="h-[320px] md:h-[420px] w-full overflow-hidden">
            <img
              src={heroImage}
              alt={tour.name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/images/collections/default.jpg";
              }}
            />
          </div>

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7,16,12,0.35) 0%, rgba(7,16,12,0.78) 70%, rgba(7,16,12,0.95) 100%)",
            }}
          />

          {/* Hero content */}
          <div className="absolute inset-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
              <div className="w-full">
                <Link to="/tours" className="text-sm underline text-white/80">
                  ← Back to Tours
                </Link>

                <h1
                  className="mt-3 text-3xl md:text-5xl font-serif font-bold"
                  style={{ color: colors.premiumGold }}
                >
                  {tour.name}
                </h1>

                <p className="mt-2 text-white/85">{tour.categoryTitle}</p>

                <div className="mt-5 flex gap-2 flex-wrap">
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

                {/* WhatsApp CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {waLink ? (
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                      style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
                    >
                      <MessageCircle size={16} />
                      Book on WhatsApp
                    </a>
                  ) : null}

                  {whatsappNumber ? (
                    <a
                      href={`tel:${whatsappNumber}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: colors.premiumCream,
                      }}
                    >
                      <PhoneCall size={16} />
                      Call Now
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div style={{ backgroundColor: "rgba(255,255,255,0.06)" }} className="p-6 rounded-2xl">
                <h2 className="text-xl font-bold mb-3">Key Locations</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {tour.highlights?.map((h) => (
                    <li key={h} className="text-gray-100 flex items-start gap-2">
                      <span style={{ color: colors.premiumGold }}>•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/20 pt-6">
                  <h2 className="text-xl font-bold mb-3">What’s included</h2>
                  <div className="flex flex-wrap gap-2">
                    {tour.includes?.map((it) => (
                      <span
                        key={it}
                        style={{
                          backgroundColor: "rgba(255,255,255,0.08)",
                          borderColor: "rgba(255,255,255,0.18)",
                        }}
                        className="border px-3 py-1 text-sm rounded-full"
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
{/* 
                Secondary WhatsApp CTA inside content
                {waLink ? (
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-white/85 font-semibold">Ready to confirm your date?</p>
                      <p className="text-white/70 text-sm">
                        Message us on WhatsApp with your preferred date and pickup location.
                      </p>
                    </div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                      style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
                    >
                      <MessageCircle size={16} />
                      Book on WhatsApp
                    </a>
                  </div>
                ) : null} */}
              </div>
              {/* <RatesTable rates={tour.ratesUSD} /> */}

            </div>

            <div className="lg:col-span-1">
              {/* Booking form */}
              <BookingForm tour={tour} businessName={businessName} />

              {/* WhatsApp quick booking card */}
              {waLink ? (
                <div
                  className="mt-6 p-6 rounded-2xl border"
                  style={{
                    borderColor: "rgba(255,255,255,0.18)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <h3 className="text-lg font-bold" style={{ color: colors.premiumGold }}>
                    WhatsApp Booking
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    Fastest way to confirm availability, pickup, and total price.
                  </p>

                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                    style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
                  >
                    <MessageCircle size={16} />
                    Chat on WhatsApp
                  </a>

                  {whatsappNumber ? (
                    <p className="mt-3 text-xs text-white/70 text-center">
                      WhatsApp: {whatsappNumber}
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* FAQ
              <div className="mt-6 p-6 border rounded-2xl" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
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
              </div> */}

              {/* Back to category */}
              {/* <div className="mt-6">
                <Link
                  to={`/tours/${tour.categoryKey}`}
                  className="inline-flex w-full items-center justify-center px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: colors.premiumCream,
                  }}
                >
                  View more in {tour.categoryTitle}
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
