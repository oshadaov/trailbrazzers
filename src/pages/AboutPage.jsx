import React from "react";
import { BadgeCheck, Leaf, Shield, Users } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";

export default function AboutPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";

  const title = `Our Story | ${businessName}`;
  const description = "Trailblazers is a regenerative eco-tourism brand rooted in Belihuloya—created to reconnect people with nature through conscious exploration, science, and community partnership.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/about` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <section style={{ backgroundColor: colors.premiumCream }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Story
          </h1>
          <p className="text-gray-700 max-w-3xl">
            Trailblazers was born from a simple truth: when humans are separated from nature, we lose something essential.
            We designed a travel brand that restores that bond—where every step, every story, and every star-filled sky
            becomes a catalyst for inner transformation.
          </p>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-200">
              <h2 style={{ color: colors.forestGreen }} className="text-xl font-bold mb-3">
                Vision
              </h2>
              <p className="text-gray-600">
                To establish Belihuloya as a globally recognized regenerative eco-tourism destination, where visitors leave
                with a deeper reverence for life and the local landscape grows healthier with every journey.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h2 style={{ color: colors.forestGreen }} className="text-xl font-bold mb-3">
                Mission
              </h2>
              <p className="text-gray-600">
                To deliver luxury, low-impact experiences that protect watersheds, restore forests, support local community
                partners, and cultivate conscious exploration.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h2 style={{ color: colors.forestGreen }} className="text-xl font-bold mb-3">
                Promise
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3"><BadgeCheck style={{ color: colors.premiumGold }} /> Regenerative by design (not an afterthought)</li>
                <li className="flex gap-3"><Shield style={{ color: colors.premiumGold }} /> Safety-first, weather-aware planning</li>
                <li className="flex gap-3"><Leaf style={{ color: colors.premiumGold }} /> Blue-Green conservation focus</li>
                <li className="flex gap-3"><Users style={{ color: colors.premiumGold }} /> Transparent community partnership model</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <div className="p-8 border border-gray-200 bg-white">
              <h3 style={{ color: colors.forestGreen }} className="text-2xl font-serif font-bold">The Brand Heart</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                We believe the observer and the observed are one. Trailblazers invites you to step into nature not as a
                consumer, but as a participant. When you listen, walk, and breathe with intention, the landscape becomes a
                teacher—and you become part of its healing.
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Our home is Belihuloya, Sri Lanka—a biodiversity super-hotspot where multiple climate zones meet beneath the
                spiritual shadow of Sri Pada. We protect what makes this place sacred: water, forest, sky, and community.
              </p>
            </div>

            <div className="p-8 border border-gray-200 bg-white">
              <h3 style={{ color: colors.forestGreen }} className="text-2xl font-serif font-bold">How We Operate</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><span className="font-semibold">Pre-profit revenue share:</span> community partners benefit before profits are taken.</li>
                <li><span className="font-semibold">Dark-sky ethics:</span> we use low-impact lighting and noise-aware night practices.</li>
                <li><span className="font-semibold">Local-first guiding:</span> routes and stories are led by people rooted in the land.</li>
                <li><span className="font-semibold">Impact reporting:</span> live counters and transparent updates on the Impact Dashboard.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
