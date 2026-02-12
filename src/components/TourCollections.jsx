import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";
import { tourData } from "../data/tours";
import { Icon } from "../utils/iconMap";

function getAccentColor(accentKey) {
  const map = {
    skyBlue: colors.skyBlue,
    premiumGold: colors.premiumGold,
    forestGreen: colors.forestGreen,
    charcoalGray: colors.charcoalGray,
  };
  return map[accentKey] || colors.premiumGold;
}

// Put these in /public/images/collections/
const bgByCategoryKey = {
  waterfall: "/images/collections/waterfall.png",
  peaks: "/images/collections/peak.png",
  trek: "/images/collections/trek.png",
  history: "/images/collections/history.png",
  twilight: "/images/collections/twilight.png",
  wildlife: "/images/collections/wildlife.png",
  ella: "/images/collections/ella.png",
  ecoHealing: "/images/collections/ecoHealing.png",
  heritageTea: "/images/collections/heritageTea.png",
};

function getBackgroundForCategory(categoryKey) {
  return bgByCategoryKey[categoryKey] || "/images/collections/default.jpg";
}

function getCardImage(pkg, categoryKey) {
  return pkg?.image || bgByCategoryKey[categoryKey] || "/images/collections/default.jpg";
}

function Pill({ children, tone = "dark" }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide";
  if (tone === "light") {
    return (
      <span
        className={base}
        style={{
          backgroundColor: "rgba(255,255,255,0.18)",
          color: colors.premiumCream,
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className={base}
      style={{
        backgroundColor: colors.premiumCream,
        color: colors.forestGreen,
        border: `1px solid rgba(15, 23, 42, 0.12)`,
      }}
    >
      {children}
    </span>
  );
}

/**
 * Pick the "best" package in a category to feature.
 * Simple UX rule: choose the most valuable + easiest-to-enjoy experience.
 */
function pickBestPackage(packages = []) {
  if (!packages.length) return null;

  const difficultyScore = (d) => {
    const x = (d || "").toLowerCase();
    if (x.includes("easy")) return 3;
    if (x.includes("moderate")) return 2;
    if (x.includes("hard")) return 1;
    return 2; // unknown -> treat as moderate
    };

  const durationScore = (duration) => {
    const x = (duration || "").toLowerCase();
    // prefer full day
    if (x.includes("full")) return 3;
    if (x.includes("half")) return 2;
    if (x.includes("overnight")) return 2;
    return 2;
  };

  const valueScore = (pkg) =>
    (pkg?.highlights?.length || 0) * 2 + (pkg?.includes?.length || 0);

  const totalScore = (pkg) =>
    difficultyScore(pkg.difficulty) * 3 +
    durationScore(pkg.duration) * 3 +
    valueScore(pkg);

  return [...packages].sort((a, b) => totalScore(b) - totalScore(a))[0];
}

export default function TourCollections() {
  const tabs = useMemo(() => Object.values(tourData || {}), []);
  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "waterfall");

  const current = tourData?.[activeTab] || tabs[0];
  const accent = getAccentColor(current?.accent);
  const bgImage = getBackgroundForCategory(current?.key);

  const bestPkg = useMemo(() => pickBestPackage(current?.packages || []), [current]);

  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundColor: colors.forestGreen,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,16,12,0.80) 0%, rgba(7,16,12,0.92) 55%, rgba(7,16,12,0.97) 100%)",
        }}
      />

      {/* Soft blur layer */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        {/* Header */}
        <header className="text-center mb-10">
          <h2
            className="text-3xl md:text-4xl font-serif font-bold mb-4"
            style={{ color: colors.premiumGold }}
          >
            Belihuloya Safari Tours — Themed Collections
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
            Pick a theme — we’ll show the best recommended experience first.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map((t) => {
            const isActive = activeTab === t.key;
            const tabAccent = getAccentColor(t.accent);

            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all"
                style={{
                  backgroundColor: isActive ? colors.premiumCream : "rgba(255,255,255,0.10)",
                  color: isActive ? colors.forestGreen : colors.premiumCream,
                  border: `1px solid ${isActive ? colors.premiumCream : "rgba(255,255,255,0.18)"}`,
                  boxShadow: isActive ? `0 10px 22px rgba(0,0,0,0.22)` : "none",
                }}
              >
                <span className="inline-flex items-center gap-2">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: tabAccent }}
                  />
                  {t.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Category hero strip */}
        <div
          className="rounded-2xl p-6 md:p-8 border mb-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.10)",
            borderColor: "rgba(255,255,255,0.18)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                <Icon name={current?.iconName} className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold" style={{ color: colors.premiumCream }}>
                  {current?.title}
                </h3>
                <p className="mt-1 italic" style={{ color: accent }}>
                  {current?.subtitle}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {current?.durationOptions?.slice(0, 3)?.map((d) => (
                    <Pill key={d} tone="light">{d}</Pill>
                  ))}
                  {current?.idealFor?.slice(0, 3)?.map((x) => (
                    <Pill key={x} tone="light">Ideal for: {x}</Pill>
                  ))}
                </div>
              </div>
            </div>

            {current?.keyStops?.length ? (
              <div className="md:max-w-md">
                <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-2">
                  Key Stops
                </p>
                <div className="flex flex-wrap gap-2">
                  {current.keyStops.slice(0, 6).map((s) => (
                    <span
                      key={s}
                      className="text-xs rounded-full px-3 py-1"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        color: colors.premiumCream,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Featured (Best) package */}
        {bestPkg ? (
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border group max-w-4xl mx-auto"
            style={{
              backgroundColor: colors.premiumCream,
              borderColor: "rgba(15, 23, 42, 0.12)",
            }}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={getCardImage(bestPkg, current.key)}
                alt={bestPkg.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/collections/default.jpg";
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.75) 100%)",
                }}
              />

              {/* Badge */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className="text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                  style={{ backgroundColor: accent, color: colors.forestGreen }}
                >
                  Recommended
                </span>

                {bestPkg.difficulty ? (
                  <span
                    className="text-[11px] px-3 py-1 rounded-full font-bold"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: colors.premiumCream,
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    {bestPkg.difficulty}
                  </span>
                ) : null}
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-5 right-5">
                <h4 className="text-2xl font-bold uppercase tracking-wide text-white leading-snug">
                  {bestPkg.name}
                </h4>
                <p className="text-white/85 text-sm mt-1">
                  {bestPkg.duration} • {bestPkg.people}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-5">
                <Pill>{bestPkg.duration}</Pill>
                <Pill>{bestPkg.people}</Pill>
                {bestPkg.bestFor?.slice(0, 3)?.map((b) => (
                  <Pill key={b}>{b}</Pill>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.charcoalGray }}>
                    Highlights
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {(bestPkg.highlights || []).slice(0, 6).map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span style={{ color: accent }}>•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.charcoalGray }}>
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {(bestPkg.includes || []).slice(0, 8).map((it) => (
                      <span
                        key={it}
                        className="text-xs px-3 py-1 rounded-full border bg-white"
                        style={{
                          borderColor: "rgba(15,23,42,0.18)",
                          color: colors.charcoalGray,
                        }}
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider" style={{ color: colors.charcoalGray }}>
                    Starting from
                  </div>
                  <div className="font-bold text-lg" style={{ color: colors.forestGreen }}>
                    {bestPkg.priceFrom}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/tours/${current.key}/${bestPkg.id}`}
                    className="px-5 py-3 text-xs rounded-full font-bold uppercase tracking-wider transition hover:opacity-90"
                    style={{
                      backgroundColor: colors.forestGreen,
                      color: colors.premiumCream,
                    }}
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/tourss`}
                    className="px-5 py-3 text-xs rounded-full font-bold uppercase tracking-wider transition hover:opacity-90"
                    style={{
                      backgroundColor: colors.premiumGold,
                      color: colors.forestGreen,
                    }}
                  >
                    View All Tours
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-white/80 mt-10">
            No tours found for this category.
          </div>
        )}
      </div>
    </section>
  );
}
