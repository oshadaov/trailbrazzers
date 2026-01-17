import React from "react";
import { Leaf, Shield, Telescope, Users } from "lucide-react";
import SeoHead from "../components/SeoHead";
import ImpactDashboard from "../components/ImpactDashboard";
import { colors } from "../theme/colors";

export default function ImpactPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `Impact | ${businessName}`;
  const description = "Transparent regeneration metrics: trees planted, watershed protection, and community revenue share.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/impact` : undefined;

  return (
    <>
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />
      <ImpactDashboard />

      <section className="py-16" style={{ backgroundColor: colors.white }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold">
            What “Regenerative” Means Here
          </h1>
          <p className="mt-4 text-gray-700 max-w-3xl">
            Regenerative tourism is more than “less harm.” It means the place is healthier because we were here.
            Trailblazers commits to a Blue–Green focus: protecting water systems and restoring forest habitats, while ensuring
            communities benefit before profit.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-200 bg-white">
              <div style={{ color: colors.skyBlue }} className="mb-3"><Leaf size={24} /></div>
              <h3 className="font-serif font-bold text-lg">Blue (Water)</h3>
              <p className="mt-2 text-sm text-gray-600">Watershed awareness, riverbank care, and responsible waterfall access.</p>
            </div>
            <div className="p-6 border border-gray-200 bg-white">
              <div style={{ color: colors.forestGreen }} className="mb-3"><Shield size={24} /></div>
              <h3 className="font-serif font-bold text-lg">Green (Forest)</h3>
              <p className="mt-2 text-sm text-gray-600">Reforestation support, habitat protection, and biodiversity monitoring.</p>
            </div>
            <div className="p-6 border border-gray-200 bg-white">
              <div style={{ color: colors.premiumGold }} className="mb-3"><Telescope size={24} /></div>
              <h3 className="font-serif font-bold text-lg">Dark-Sky Ethics</h3>
              <p className="mt-2 text-sm text-gray-600">Low-impact lighting and guided night practices that protect the sky.</p>
            </div>
            <div className="p-6 border border-gray-200 bg-white">
              <div style={{ color: colors.charcoalGray }} className="mb-3"><Users size={24} /></div>
              <h3 className="font-serif font-bold text-lg">Community Partners</h3>
              <p className="mt-2 text-sm text-gray-600">Pre-profit revenue share and local-first guiding.</p>
            </div>
          </div>

          <div className="mt-12 border border-gray-200 bg-white p-8">
            <h2 style={{ color: colors.forestGreen }} className="text-2xl font-serif font-bold">How we report</h2>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
              <li><span className="font-semibold">Monthly updates</span> to counters (trees, watershed, community contributions).</li>
              <li><span className="font-semibold">Route-level notes</span> on conservation practices (waste, noise, light).</li>
              <li><span className="font-semibold">Partner credits</span> acknowledging local guides and community organizations.</li>
              <li><span className="font-semibold">Continuous improvement</span> based on Explorer feedback and field observations.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
