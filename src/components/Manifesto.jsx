import React from "react";
import { Leaf, Shield, Users } from "lucide-react";
import { colors } from "../theme/colors";

export default function Manifesto() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 style={{ color: colors.forestGreen }} className="text-3xl font-serif font-bold mb-6">
            The Brand Heart
          </h2>
          <div style={{ borderColor: colors.premiumGold }} className="w-20 border-t-2 mb-6" />

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We believe the observer and the observed are one. Trailblazers does not simply offer tours; we offer a change
            in state — restoring the sacred relationship between the human spirit and the living Earth.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Rooted in the biodiversity super-hotspot of Belihuloya, we operate where the wet zone, the dry zone, and the
            montane cloud forests meet — beneath the shadow of Sri Pada. Tourism can be a force for regeneration when it
            is designed with reverence, science, and radical transparency.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Leaf style={{ color: colors.skyBlue }} />
              <div>
                <p className="font-semibold">Blue</p>
                <p className="text-sm text-gray-600">Watershed protection</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield style={{ color: colors.premiumGold }} />
              <div>
                <p className="font-semibold">Green</p>
                <p className="text-sm text-gray-600">Reforestation & conservation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users style={{ color: colors.charcoalGray }} />
              <div>
                <p className="font-semibold">Community</p>
                <p className="text-sm text-gray-600">Pre-profit revenue share</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden relative shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2574&auto=format&fit=crop"
            alt="Cloud forest path"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <div
            style={{ backgroundColor: colors.forestGreen }}
            className="absolute bottom-6 right-6 p-6 text-white max-w-xs shadow-lg"
          >
            <p className="font-serif italic text-lg">
              "When you walk with intention, you are not just a visitor — you are an active participant in the ecosystem’s
              healing."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
