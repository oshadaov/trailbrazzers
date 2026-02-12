import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { colors } from "../theme/colors";
import { routes } from "../routes/routes";

const base =
  "px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${String(whatsappNumber).replace(/[^0-9]/g, "")}`
    : null;

  return (
    <nav
      style={{ backgroundColor: colors.forestGreen }}
      className="sticky top-0 z-50 shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <NavLink
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3"
          >
            {/* Logo from /public */}
         <div className="flex items-center gap-3">
  <div
    className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-lg"
    style={{
      border: "1px solid rgba(255,255,255,0.15)",
    }}
  >
    <img
      src="/logo.png"
      alt={businessName}
      className="h-12 md:h-14 w-auto object-contain"
      style={{
        filter: "drop-shadow(0 4px 6px rgba(10,0,0,0.4))",
      }}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  </div>

  <div className="leading-tight">
    <h1
      style={{ color: colors.premiumGold }}
      className="text-lg md:text-xl font-serif tracking-widest font-bold"
    >
      {businessName.toUpperCase()}
    </h1>
    <p className="text-xs text-white/70 tracking-wider">
      Regenerative Eco-Tourism
    </p>
  </div>
</div>


         
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {routes.map((r) => (
              <NavLink
                key={r.path}
                to={r.path}
                className={({ isActive }) =>
                  `${base} ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`
                }
              >
                {r.label}
              </NavLink>
            ))}

            {/* {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: colors.premiumGold,
                  color: colors.forestGreen,
                }}
                className="ml-4 inline-flex items-center gap-2 px-4 py-2 font-bold uppercase tracking-wider text-sm hover:opacity-90 rounded-md"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            ) : null} */}
          </div>

          {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
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
                style={{
                  backgroundColor: colors.premiumGold,
                  color: colors.forestGreen,
                }}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 px-4 py-3 font-bold uppercase tracking-wider text-sm rounded-md hover:opacity-90"
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
