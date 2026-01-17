import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MessageCircle, Mountain } from "lucide-react";
import { colors } from "../theme/colors";
import { routes } from "../routes/routes";

const base = "px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";

  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}` : null;

  return (
    <nav style={{ backgroundColor: colors.forestGreen }} className="sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <div style={{ color: colors.premiumGold }} className="flex items-center justify-center">
              <Mountain size={28} />
            </div>
            <div className="hidden md:block leading-tight">
              <h1 style={{ color: colors.premiumGold }} className="text-xl font-serif tracking-widest font-bold">
                {businessName.toUpperCase()}
              </h1>
              <p className="text-xs text-white/70 tracking-wider">Regenerative Eco-Tourism</p>
            </div>
          </NavLink>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                className={({ isActive }) =>
                  `${base} ${isActive ? "text-white" : "text-white/70 hover:text-white"}`
                }
              >
                {r.label}
              </NavLink>
            ))}

            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 font-bold uppercase tracking-wider text-sm hover:opacity-90"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            ) : null}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-white/80 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: colors.charcoalGray }}>
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {r.label}
              </NavLink>
            ))}

            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-3 font-bold uppercase tracking-wider text-sm"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      )}
    </nav>
  );
}
