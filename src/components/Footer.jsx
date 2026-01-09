import React from "react";
import { colors } from "../theme/colors";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: colors.deepGreen }} className="text-white py-12 border-t border-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 style={{ color: colors.gold }} className="text-2xl font-serif font-bold tracking-widest">
            TRAILBLAZER
          </h2>
          <p className="text-xs text-gray-400 mt-2">SOULFUL JOURNEYS ROOTED IN NATURE</p>
        </div>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Our Story</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
        </div>

        <div className="text-center md:text-right text-xs text-gray-500">
          <p>© 2024 Trailblazer Luxury Eco-Tourism.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
