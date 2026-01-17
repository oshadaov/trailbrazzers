import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../theme/colors";

export default function Footer() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: colors.forestGreen }} className="text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 style={{ color: colors.premiumGold }} className="text-2xl font-serif font-bold tracking-widest">
            {businessName.toUpperCase()}
          </h2>
          <p className="text-xs text-white/70 mt-2">Awaken inner transformation through outer exploration</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/75">
          <Link to="/about" className="hover:text-white transition-colors">Our Story</Link>
          <Link to="/tours" className="hover:text-white transition-colors">The Experience</Link>
          <Link to="/impact" className="hover:text-white transition-colors">Impact</Link>
          <Link to="/science" className="hover:text-white transition-colors">Science</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="text-center md:text-right text-xs text-white/60">
          <p>© {year} {businessName}. All rights reserved.</p>
          <p className="mt-1">Regenerative eco-tourism • Community partners • Forest guardians</p>
        </div>
      </div>
    </footer>
  );
}
