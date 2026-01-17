import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import TourCollections from "../components/TourCollections";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";
import { getAllToursFlat, tourData } from "../data/tours";
import { Icon } from "../utils/iconMap";

export default function ToursPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const siteUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";

  const [filters, setFilters] = useState({
    category: "all",
    difficulty: "all",
    q: "",
  });

  const all = useMemo(() => getAllToursFlat(), []);
  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return all.filter((t) => {
      if (filters.category !== "all" && t.categoryKey !== filters.category) return false;
      if (filters.difficulty !== "all" && (t.difficulty || "").toLowerCase() !== filters.difficulty) return false;
      if (q) {
        const blob = `${t.name} ${t.duration} ${t.people} ${(t.highlights || []).join(" ")} ${(t.includes || []).join(" ")}`.toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [all, filters]);

  const title = `Tours | ${businessName}`;
  const description = "Explore Water, Earth, Light, and Spirit experiences in Belihuloya. Regenerative journeys designed with low-impact logistics and community partners.";
  const url = siteUrl ? `${siteUrl.replace(/\/$/, "")}/tours` : undefined;

  return (
    <div className="py-0">
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      {/* Quick explorer (filterable list) */}
      <section style={{ backgroundColor: colors.premiumCream }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h1 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold">
                Explore the Experience
              </h1>
              <p className="text-gray-600 mt-2">Filter by category, difficulty, or search by places and highlights.</p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Category</span>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters((p) => ({ ...p, category: e.target.value }))}
                  className="mt-2 border border-gray-300 px-3 py-2 bg-white"
                >
                  <option value="all">All</option>
                  {Object.values(tourData).map((c) => (
                    <option key={c.key} value={c.key}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Difficulty</span>
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters((p) => ({ ...p, difficulty: e.target.value }))}
                  className="mt-2 border border-gray-300 px-3 py-2 bg-white"
                >
                  <option value="all">All</option>
                  <option value="easy">Easy</option>
                  <option value="moderate">Moderate</option>
                  <option value="hard">Hard</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Search</span>
                <input
                  value={filters.q}
                  onChange={(e) => setFilters((p) => ({ ...p, q: e.target.value }))}
                  placeholder="Try: Bambarakanda, Samanala Wewa, stargazing"
                  className="mt-2 border border-gray-300 px-3 py-2 w-72 max-w-full"
                />
              </label>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <Link
                key={`${t.categoryKey}:${t.id}`}
                to={`/tours/${t.categoryKey}/${t.id}`}
                className="border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">{t.categoryTitle}</p>
                      <h3 style={{ color: colors.forestGreen }} className="mt-1 text-lg font-bold">
                        {t.name}
                      </h3>
                    </div>
                    <div className="shrink-0">
                      <Icon name={t.iconName} className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>{t.duration}</span>
                      <span className="font-semibold">{t.difficulty}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span>Capacity: {t.people}</span>
                      <span className="font-semibold">{t.priceFrom}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-600">{(t.highlights || []).slice(0, 3).join(" • ")}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 ? <p className="mt-8 text-gray-600">No tours match your filters.</p> : null}
        </div>
      </section>

      {/* Existing curated tab section */}
      <TourCollections />
    </div>
  );
}
