import React, { useMemo, useState } from "react";
import { Users, ChevronRight } from "lucide-react";
import { colors } from "../theme/colors";
import { tourData } from "../data/tours";

export default function TourCollections() {
  const [activeTab, setActiveTab] = useState("waterfall");
  const tabs = useMemo(() => Object.entries(tourData), []);

  return (
    <section style={{ backgroundColor: colors.deepGreen }} className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 style={{ color: colors.gold }} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            CURATED COLLECTIONS
          </h2>
          <p className="text-gray-300">Choose your path to discovery.</p>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                backgroundColor: activeTab === key ? colors.gold : "transparent",
                color: activeTab === key ? colors.deepGreen : colors.cloudCream,
                borderColor: colors.gold,
              }}
              className="flex items-center gap-2 px-6 py-3 border rounded-full transition-all duration-300 hover:bg-opacity-10 hover:bg-white"
            >
              {data.icon}
              <span className="uppercase tracking-wider text-sm font-bold">{data.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <div className="animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif mb-2">{tourData[activeTab].title}</h3>
            <p style={{ color: colors.gold }} className="italic font-light text-lg">
              {tourData[activeTab].subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tourData[activeTab].packages.map((pkg, index) => (
              <article
                key={index}
                style={{ backgroundColor: colors.cloudCream }}
                className="rounded-none shadow-2xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 flex flex-col"
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 style={{ color: colors.deepGreen }} className="text-xl font-bold uppercase tracking-wide">
                      {pkg.name}
                    </h4>
                    <span style={{ backgroundColor: colors.earthBrown }} className="text-white text-xs px-2 py-1 rounded">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Users size={16} />
                      <span>Capacity: {pkg.people}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p style={{ color: colors.earthBrown }} className="text-xs font-bold uppercase mb-2 tracking-wider">
                      Highlights
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                          <span style={{ color: colors.gold }}>•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-300 pt-4 mt-4">
                    <p style={{ color: colors.earthBrown }} className="text-xs font-bold uppercase mb-2 tracking-wider">
                      Includes
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">{pkg.includes.join(" • ")}</p>
                  </div>
                </div>

                <div className="px-8 pb-8 mt-auto">
                  <div className="flex items-center justify-between">
                    <span style={{ color: colors.deepGreen }} className="font-bold text-sm">
                      RESERVE NOW
                    </span>
                    <button
                      style={{ backgroundColor: colors.deepGreen }}
                      className="p-2 rounded-full text-white hover:bg-opacity-90 transition-colors"
                      aria-label="Reserve"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
