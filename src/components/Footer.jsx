import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  PhoneCall,
  MessageCircle,
  MapPin,
  Mail,
} from "lucide-react";
import { colors } from "../theme/colors";

function IconLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="w-11 h-11 rounded-full flex items-center justify-center transition"
      style={{
        backgroundColor: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.18)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.16)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.10)";
      }}
    >
      {children}
    </a>
  );
}

function buildWhatsAppLink({ phone, businessName }) {
  if (!phone) return null;
  const clean = String(phone).replace(/[^\d]/g, "");
  const text = encodeURIComponent(`Hi ${businessName}, I want to book a tour. Please share details.`);
  return `https://wa.me/${clean}?text=${text}`;
}

export default function Footer() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const year = new Date().getFullYear();

  // Set these in Vercel .env
  const facebook = import.meta.env.VITE_FACEBOOK_URL || "";
  const instagram = import.meta.env.VITE_INSTAGRAM_URL || "";
  const youtube = import.meta.env.VITE_YOUTUBE_URL || "";
  const tiktok = import.meta.env.VITE_TIKTOK_URL || "";
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || "";
  const locationText = import.meta.env.VITE_LOCATION_TEXT || "Belihuloya, Sri Lanka";
  const googleMapsUrl = import.meta.env.VITE_GOOGLE_MAPS_URL || "";

  const waLink = buildWhatsAppLink({ phone: whatsappNumber, businessName });

  return (
    <footer
      style={{ backgroundColor: colors.forestGreen }}
      className="text-white pt-14 pb-10 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2
              style={{ color: colors.premiumGold }}
              className="text-2xl font-serif font-bold tracking-widest"
            >
              {businessName.toUpperCase()}
            </h2>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              Awaken inner transformation through outer exploration.
            </p>

            {/* Social Icons Row */}
            <div className="mt-5 flex flex-wrap gap-3">
              <IconLink href={facebook} label="Facebook">
                <Facebook size={18} />
              </IconLink>

              <IconLink href={instagram} label="Instagram">
                <Instagram size={18} />
              </IconLink>

              <IconLink href={youtube} label="YouTube">
                <Youtube size={18} />
              </IconLink>

              {/* TikTok icon not available in lucide-react by default.
                  Using PhoneCall icon as a placeholder.
                  If you want exact TikTok icon, I can provide an SVG component. */}
              <IconLink href={tiktok} label="TikTok">
                <PhoneCall size={18} />
              </IconLink>

              <IconLink href={waLink} label="WhatsApp">
                <MessageCircle size={18} />
              </IconLink>
            </div>

            <p className="mt-4 text-xs text-white/60">
              Follow our journeys, stories, and guest experiences.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: colors.premiumGold }}
            >
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm text-white/75">
              <Link to="/about" className="hover:text-white transition-colors">
                Our Story
              </Link>
              <Link to="/tours" className="hover:text-white transition-colors">
                The Experience
              </Link>
              <Link to="/impact" className="hover:text-white transition-colors">
                Impact
              </Link>
              <Link to="/science" className="hover:text-white transition-colors">
                Science
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-bold uppercase tracking-wider mb-4"
              style={{ color: colors.premiumGold }}
            >
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/75">
              {contactPhone ? (
                <a href={`tel:${contactPhone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <PhoneCall size={16} />
                  <span>{contactPhone}</span>
                </a>
              ) : null}

              {contactEmail ? (
                <a href={`mailto:${contactEmail}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail size={16} />
                  <span>{contactEmail}</span>
                </a>
              ) : null}

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{locationText}</span>
              </div>

              {googleMapsUrl ? (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition hover:opacity-90"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: colors.premiumCream,
                    width: "fit-content",
                  }}
                >
                  <MapPin size={14} />
                  Open in Maps
                </a>
              ) : null}
            </div>

            {waLink ? (
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition hover:opacity-90 w-full"
                style={{ backgroundColor: colors.premiumGold, color: colors.forestGreen }}
              >
                <MessageCircle size={16} />
                Book on WhatsApp
              </a>
            ) : null}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} {businessName}. All rights reserved.</p>
          <p>Regenerative eco-tourism • Community partners • Forest guardians</p>
        </div>
      </div>
    </footer>
  );
}
