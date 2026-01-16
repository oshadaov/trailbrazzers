import React from "react";
import { BadgeCheck, Shield, Leaf, Users } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";

export default function AboutPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Tour Operator";
  const baseUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `About | ${businessName}`;
  const description = `Learn about ${businessName}: locally guided jeep tours, safety-first planning, and eco-friendly travel.`;
  const url = baseUrl ? `${baseUrl.replace(/\/$/, "")}/about` : undefined;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <h1 style={{ color: colors.deepGreen }} className="text-3xl md:text-4xl font-serif font-bold mb-4">
        About {businessName}
      </h1>
      <p className="text-gray-700 leading-relaxed">
        We build memorable experiences in the hill country — waterfalls, viewpoints, forest trails and wildlife routes —
        with local guides and jeep drivers who know the terrain. Our focus is simple: comfort, safety, and real Sri Lankan
        nature.
      </p>

      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div className="border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold" style={{ color: colors.deepGreen }}>
            What makes us different
          </h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex gap-3"><BadgeCheck style={{ color: colors.gold }} /> Curated routes (not copy-paste itineraries)</li>
            <li className="flex gap-3"><Shield style={{ color: colors.gold }} /> Safety-first, weather-aware planning</li>
            <li className="flex gap-3"><Leaf style={{ color: colors.gold }} /> Eco-friendly stops and respectful travel</li>
            <li className="flex gap-3"><Users style={{ color: colors.gold }} /> Local guide support for a richer experience</li>
          </ul>
        </div>

        <div className="border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold" style={{ color: colors.deepGreen }}>
            Want a custom itinerary?
          </h2>
          <p className="mt-4 text-gray-700">
            Tell us your dates, group size, and what you want to see (waterfalls, trekking, wildlife, culture). We’ll build
            a day plan and give you a clear price.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Tip: Add your certificates/guide licenses, TripAdvisor/Google review links, and real client photos here to
            increase trust.
          </p>
        </div>
      </div>
    </div>
  );
}
