import React from "react";
import {
  MessageCircle,
  Mail,
  PhoneCall,
  Facebook,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";

export default function ContactPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || "";

  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || "";
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "";
  const youtubeUrl = import.meta.env.VITE_YOUTUBE_URL || "";
  const tiktokUrl = import.meta.env.VITE_TIKTOK_URL || "";

  const baseUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";

  const title = `Contact | ${businessName}`;
  const description = `Contact ${businessName} to book a tour, ask questions, or request a custom itinerary.`;
  const url = baseUrl ? `${baseUrl.replace(/\/$/, "")}/contact` : undefined;

  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`
    : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <h1
        style={{ color: colors.forestGreen }}
        className="text-3xl md:text-4xl font-serif font-bold mb-4"
      >
        Contact
      </h1>

      <p className="text-gray-700 mb-8">
        Fastest reply is WhatsApp. Tell us your dates, pickup place, and group size.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* LEFT SIDE - CONTACT METHODS */}
        <div className="border border-gray-200 bg-white p-6 shadow-sm rounded-xl">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: colors.forestGreen }}
          >
            Quick Contacts
          </h2>

          <div className="space-y-4 text-gray-700">
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition"
              >
                <MessageCircle size={18} className="text-green-600" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            )}

            {contactEmail && (
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <Mail size={18} />
                {contactEmail}
              </a>
            )}

            {contactPhone && (
              <a
                href={`tel:${contactPhone}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <PhoneCall size={18} />
                {contactPhone}
              </a>
            )}
          </div>

          <div className="mt-6 border-t pt-6">
            <h3
              className="font-bold"
              style={{ color: colors.forestGreen }}
            >
              What to include in your message
            </h3>

            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              <li>Tour name (or what you want to see)</li>
              <li>Date(s) and pickup place</li>
              <li>Number of people + kids/elders</li>
              <li>Any special needs (food, accessibility, photography)</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE - SOCIAL MEDIA */}
        <div className="border border-gray-200 bg-white p-6 shadow-sm rounded-xl">
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: colors.forestGreen }}
          >
            Follow Us
          </h2>

          <p className="text-gray-700 mb-4">
            See real tours, guest experiences, and travel inspiration.
          </p>

          <div className="space-y-4">
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
              >
                <Facebook size={18} className="text-blue-600" />
                Facebook
              </a>
            )}

            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-pink-50 hover:bg-pink-100 transition"
              >
                <Instagram size={18} className="text-pink-600" />
                Instagram
              </a>
            )}

            {youtubeUrl && (
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition"
              >
                <Youtube size={18} className="text-red-600" />
                YouTube
              </a>
            )}

            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
              >
                <Music2 size={18} />
                TikTok
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
