import React from "react";
import { Tent, Camera, Coffee } from "lucide-react";
import { colors } from "../theme/colors";

export default function OperationsGrid() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.deepGreen }} className="mx-auto mb-4 flex justify-center">
            <Tent size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Luxury Camping</h4>
          <p className="text-sm text-gray-600">
            Sleep beneath the stars in eco-style tents with nightwatch security and morning tea service.
          </p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.deepGreen }} className="mx-auto mb-4 flex justify-center">
            <Camera size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Capture the Moment</h4>
          <p className="text-sm text-gray-600">Professional photography and drone video add-ons available for every journey.</p>
        </div>

        <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
          <div style={{ color: colors.deepGreen }} className="mx-auto mb-4 flex justify-center">
            <Coffee size={32} />
          </div>
          <h4 className="font-serif font-bold text-lg mb-2">Local Flavors</h4>
          <p className="text-sm text-gray-600">Organic lunches, herbal teas, and traditional village dining experiences.</p>
        </div>
      </div>
    </section>
  );
}
