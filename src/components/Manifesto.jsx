import React from "react";
import { Leaf, Users } from "lucide-react";
import { colors } from "../theme/colors";

export default function Manifesto() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 style={{ color: colors.deepGreen }} className="text-3xl font-serif font-bold mb-6">
            The Luminar Concept
          </h2>
          <div style={{ borderColor: colors.gold }} className="w-20 border-t-2 mb-6" />

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            We are the light in the wild. We shed light on nature’s secrets, local culture, and the guest’s own potential.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Our mission is to create regenerative eco-tourism experiences that conserve forests, empower local communities, and
            facilitate personal growth. Every trail you walk helps preserve it for the future.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Leaf style={{ color: colors.earthBrown }} />
              <span className="font-medium text-sm">Conservation First</span>
            </div>
            <div className="flex items-center gap-3">
              <Users style={{ color: colors.earthBrown }} />
              <span className="font-medium text-sm">Community Powered</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 h-96 rounded-lg overflow-hidden relative shadow-xl group">
          <img
            src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2574&auto=format&fit=crop"
            alt="Forest Path"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div style={{ backgroundColor: colors.deepGreen }} className="absolute bottom-6 right-6 p-6 text-white max-w-xs shadow-lg">
            <p className="font-serif italic text-lg">
              "We do not inherit the earth from our ancestors, we borrow it from our children."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
