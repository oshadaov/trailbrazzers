import React from "react";
import { Telescope, Trees, HandHeart, Route } from "lucide-react";
import { colors } from "../theme/colors";

export default function OperationsGrid() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h2 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold">
          The Trailblazers Difference
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Luxury, science, and reverence — designed to create unforgettable experiences while regenerating the land and
          supporting the people who protect it.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 border border-gray-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.skyBlue }} className="mx-auto mb-4 flex justify-center">
            <Route size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Watershed-to-Canopy Journeys</h4>
          <p className="text-sm text-gray-600">
            Experiences mapped from rivers and waterfalls to cloud forests and peaks, guided by local knowledge and careful
            timing.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.premiumGold }} className="mx-auto mb-4 flex justify-center">
            <Telescope size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Dark-Sky Promise</h4>
          <p className="text-sm text-gray-600">
            Night experiences designed to protect the sky: low-impact lighting, mindful sound, and guided stargazing that
            deepens wonder.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.forestGreen }} className="mx-auto mb-4 flex justify-center">
            <Trees size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Regeneration Built-In</h4>
          <p className="text-sm text-gray-600">
            Conservation is not an add-on. A portion of every booking supports reforestation, habitat protection, and
            biodiversity monitoring.
          </p>
        </div>

        <div className="p-6 border border-gray-200 bg-white rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.charcoalGray }} className="mx-auto mb-4 flex justify-center">
            <HandHeart size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Community Partners First</h4>
          <p className="text-sm text-gray-600">
            Pre-profit revenue share with local partners and guides, with transparent reporting on the Impact Dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}
