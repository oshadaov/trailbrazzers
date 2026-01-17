import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";
import { tourData } from "../data/tours";
import { Icon } from "../utils/iconMap";

function getAccentColor(accentKey) {
  if (!accentKey) return colors.premiumGold;
  const map = {
    skyBlue: colors.skyBlue,
    premiumGold: colors.premiumGold,
    forestGreen: colors.forestGreen,
    charcoalGray: colors.charcoalGray,
  };
  return map[accentKey] || colors.premiumGold;
}

export default function TourCollections() {
  const tabs = useMemo(() => Object.values(tourData), []);
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "water");
  const current = tourData[activeTab];
  const accent = getAccentColor(current?.accent);

  return (
    <section style={{ backgroundColor: colors.forestGreen }} className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10">
          <h2 style={{ color: colors.premiumGold }} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            The Experience, by Element
          </h2>
          <p className="text-white/75 max-w-3xl mx-auto">
            Choose your pathway — Water, Earth, Light, or Spirit. Every experience is designed to be immersive,
            low-impact, and rooted in community partnerships.
          </p>
        </header>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((t) => {
            const isActive = activeTab === t.key;
            const tabAccent = getAccentColor(t.accent);
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                style={{
                  backgroundColor: isActive ? tabAccent : "transparent",
                  color: isActive ? colors.forestGreen : colors.premiumCream,
                  borderColor: tabAccent,
                }}
                className="px-5 py-2 border uppercase tracking-wider text-sm font-bold transition-colors"
              >
                {t.title}
              </button>
            );
          })}
        </div>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Icon name={current.iconName} className="w-10 h-10" />
          </div>
          <p style={{ color: accent }} className="italic font-light text-lg">
            {current.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {current.packages.map((pkg) => (
            <div key={pkg.id} style={{ backgroundColor: colors.premiumCream }} className="p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 style={{ color: colors.forestGreen }} className="text-xl font-bold uppercase tracking-wide">
                    {pkg.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {pkg.duration} • {pkg.people}
                  </p>
                </div>
                {pkg.difficulty ? (
                  <span style={{ backgroundColor: colors.charcoalGray }} className="text-white text-xs px-2 py-1">
                    {pkg.difficulty}
                  </span>
                ) : null}
              </div>

              <div className="mt-5">
                <p style={{ color: colors.charcoalGray }} className="text-xs font-bold uppercase mb-2 tracking-wider">
                  Highlights
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {pkg.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span style={{ color: accent }}>•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5">
                <p style={{ color: colors.charcoalGray }} className="text-xs font-bold uppercase mb-2 tracking-wider">
                  Includes
                </p>
                <div className="flex flex-wrap gap-2">
                  {pkg.includes.slice(0, 4).map((it) => (
                    <span
                      key={it}
                      className="text-xs px-2 py-1 border border-gray-300 text-gray-700"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span style={{ color: colors.forestGreen }} className="font-bold text-sm">
                  {pkg.priceFrom}
                </span>
                <Link
                  to={`/tours/${current.key}/${pkg.id}`}
                  style={{ backgroundColor: colors.forestGreen }}
                  className="px-4 py-2 text-white font-bold uppercase tracking-wider text-xs hover:opacity-90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
