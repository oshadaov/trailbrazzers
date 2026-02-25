// src/pages/AllTours.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";
import { tourData } from "../data/tours";
import { Icon } from "../utils/iconMap";

// Put these in /public/images/collections/
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

function getHeroImageForCategory(categoryKey) {
  return bgByCategoryKey[categoryKey] || "/images/collections/default.jpg";
}

function getTourImage(pkg, categoryKey) {
  // If you add pkg.image later, it will automatically work
  return pkg?.image || getHeroImageForCategory(categoryKey);
}

function flattenTours() {
  const out = [];
  Object.values(tourData || {}).forEach((cat) => {
    (cat.packages || []).forEach((pkg) => {
      out.push({
        ...pkg,
        categoryKey: cat.key,
        categoryTitle: cat.title,
        categorySubtitle: cat.subtitle,
        iconName: cat.iconName,
        accent: cat.accent,
      });
    });
  });
  return out;
}

function getAccentColor(accentKey) {
  const map = {
    skyBlue: colors.skyBlue,
    premiumGold: colors.premiumGold,
    forestGreen: colors.forestGreen,
    charcoalGray: colors.charcoalGray,
  };
  return map[accentKey] || colors.premiumGold;
}

function Pill({ children }) {
  return (
    <span
      className="text-[11px] px-3 py-1 rounded-full border font-bold uppercase tracking-wider"
      style={{
        borderColor: "rgba(15,23,42,0.15)",
        color: colors.charcoalGray,
        backgroundColor: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
      }}
    >
      {children}
    </span>
  );
}

export default function  AllTours() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Tour Operator";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const title = `All Tours | ${businessName}`;
  const description = "Browse all available tours with images, highlights, and quick booking access.";

  const all = useMemo(() => flattenTours(), []);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");

  const categories = useMemo(() => {
    const list = Object.values(tourData || {}).map((c) => ({
      key: c.key,
      title: c.title,
      iconName: c.iconName,
      accent: c.accent,
      subtitle: c.subtitle,
    }));
    return [{ key: "all", title: "All", iconName: "Compass", accent: "premiumGold" }, ...list];
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return all
      .filter((t) => (cat === "all" ? true : t.categoryKey === cat))
      .filter((t) => {
        if (!query) return true;
        const hay = [
          t.name,
          t.duration,
          t.people,
          t.difficulty,
          ...(t.bestFor || []),
          ...(t.highlights || []),
          t.categoryTitle,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(query);
      });
  }, [all, q, cat]);

  return (
    <>
      <SeoHead title={title} description={description} url={siteUrl ? `${siteUrl.replace(/\/$/, "")}/tours` : undefined} />

      <section className="py-16" style={{ backgroundColor: colors.forestGreen }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          

          {/* Controls */}
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {/* Search */}
            <div className="md:col-span-2">
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-full border"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.10)",
                }}
              >
                <Search size={18} className="text-white/70" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search tours, highlights, difficulty..."
                  className="w-full bg-transparent outline-none text-white placeholder:text-white/60"
                />
              </div>
            </div>

            {/* Category select */}
            <div>
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-full border"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  backgroundColor: "rgba(255,255,255,0.10)",
                }}
              >
                <Filter size={18} className="text-white/70" />
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="w-full bg-transparent outline-none text-white"
                >
                  {categories.map((c) => (
                    <option key={c.key} value={c.key} style={{ color: "#0e1a12" }}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = cat === c.key;
              const accent = getAccentColor(c.accent);
              return (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition"
                  style={{
                    backgroundColor: isActive ? colors.premiumCream : "rgba(255,255,255,0.10)",
                    color: isActive ? colors.forestGreen : colors.premiumCream,
                    border: `1px solid ${isActive ? colors.premiumCream : "rgba(255,255,255,0.18)"}`,
                    boxShadow: isActive ? `0 10px 22px rgba(0,0,0,0.22)` : "none",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: accent }} />
                    {c.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results */}
          <div className="mt-10">
            {filtered.length === 0 ? (
              <div
                className="p-8 rounded-2xl border text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.18)",
                }}
              >
                No tours found. Try another keyword or category.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((t) => {
                  const accent = getAccentColor(t.accent);
                  const image = getTourImage(t, t.categoryKey);
                  const catIcon = t.iconName;

                  return (
                    <div
                      key={`${t.categoryKey}-${t.id}`}
                      className="rounded-2xl overflow-hidden shadow-2xl border group"
                      style={{
                        backgroundColor: colors.premiumCream,
                        borderColor: "rgba(15, 23, 42, 0.12)",
                      }}
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={image}
                          alt={t.name}
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
                              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.75) 100%)",
                          }}
                        />

                        {/* Category badge */}
                        <div className="absolute top-3 left-3 flex gap-2 items-center">
                          <span
                            className="text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                            style={{ backgroundColor: accent, color: colors.white }}
                          >
                            {t.categoryTitle}
                          </span>
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-3 left-4 right-4">
                          <h3 className="text-lg font-bold uppercase tracking-wide text-white leading-snug">
                            {t.name}
                          </h3>
                          <p className="text-white/80 text-xs mt-1">
                            {t.duration} • {t.people}
                          </p>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-5 text-gray-800">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-10 h-10 rounded-2xl flex items-center justify-center"
                              style={{
                                backgroundColor: "rgba(15,23,42,0.06)",
                                border: "1px solid rgba(15,23,42,0.10)",
                              }}
                            >
                              <Icon name={catIcon} className="w-5 h-5" />
                            </span>
                            <div>
                              <div className="text-xs uppercase font-bold tracking-wider" style={{ color: colors.charcoalGray }}>
                                Category
                              </div>
                              <div className="text-sm font-semibold" style={{ color: colors.forestGreen }}>
                                {t.categoryTitle}
                              </div>
                            </div>
                          </div>

                          {t.difficulty ? (
                            <span
                              className="text-[11px] px-3 py-1 rounded-full font-bold uppercase tracking-wider"
                              style={{
                                backgroundColor: colors.charcoalGray,
                                color: colors.premiumCream,
                              }}
                            >
                              {t.difficulty}
                            </span>
                          ) : null}
                        </div>

                        {/* Chips */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Pill>{t.duration}</Pill>
                          <Pill>{t.people}</Pill>
                          {(t.bestFor || []).slice(0, 2).map((b) => (
                            <Pill key={b}>{b}</Pill>
                          ))}
                        </div>

                        {/* Highlights */}
                        <div className="mt-5">
                          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: colors.charcoalGray }}>
                            Top Highlights
                          </p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            {(t.highlights || []).slice(0, 3).map((h) => (
                              <li key={h} className="flex items-start gap-2">
                                <span style={{ color: accent }}>•</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Footer */}
                        <div className="mt-6 flex items-center justify-between gap-3">
                          <div>
                            <div className="text-xs uppercase font-bold tracking-wider" style={{ color: colors.charcoalGray }}>
                              From
                            </div>
                            <div className="font-bold text-sm" style={{ color: colors.forestGreen }}>
                              {t.priceFrom || "Contact for rates"}
                            </div>
                          </div>

                          <Link
                            to={`/tours/${t.categoryKey}/${t.id}`}
                            className="px-4 py-2 text-xs rounded-full font-bold uppercase tracking-wider transition hover:opacity-90"
                            style={{
                              backgroundColor: colors.forestGreen,
                              color: colors.premiumCream,
                            }}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
