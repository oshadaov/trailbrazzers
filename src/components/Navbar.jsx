import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";
import { colors } from "../theme/colors";
import { routes } from "../routes/routes";

const base = "px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: colors.deepGreen }} className="sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <div style={{ color: colors.gold }} className="flex flex-col items-center leading-none">
              <Mountain size={28} />
              <span className="text-[0.6rem] tracking-widest mt-1">EST. 2024</span>
            </div>
            <div className="hidden md:block">
              <h1 style={{ color: colors.gold }} className="text-xl font-serif tracking-widest font-bold">
                TRAILBLAZER
              </h1>
              <p className="text-xs text-gray-300 tracking-wider">LUXURY ECO-TOURISM</p>
            </div>
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-baseline space-x-8">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                className={({ isActive }) =>
                  `${base} ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
                }
              >
                {r.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#15322b] border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {r.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
