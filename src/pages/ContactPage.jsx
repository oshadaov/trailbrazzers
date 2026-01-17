import React from "react";
import { MessageCircle, Mail, PhoneCall, MapPin } from "lucide-react";
import SeoHead from "../components/SeoHead";
import { colors } from "../theme/colors";

export default function ContactPage() {
  const businessName = import.meta.env.VITE_BUSINESS_NAME || "Trailblazers";
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE || "";
  const baseUrl = import.meta.env.VITE_SITE_URL || "";
  const ogImage = import.meta.env.VITE_OG_IMAGE || "";
  const title = `Contact | ${businessName}`;
  const description = `Contact ${businessName} to book a tour, ask questions, or request a custom itinerary.`;
  const url = baseUrl ? `${baseUrl.replace(/\/$/, "")}/contact` : undefined;

  const whatsappHref = whatsappNumber ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}` : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <SeoHead title={title} description={description} url={url} image={ogImage || undefined} />

      <h1 style={{ color: colors.forestGreen }} className="text-3xl md:text-4xl font-serif font-bold mb-4">
        Contact
      </h1>
      <p className="text-gray-700 mb-8">
        Fastest reply is WhatsApp. Tell us your dates, pickup place, and group size.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.forestGreen }}>
            Quick contacts
          </h2>

          <div className="space-y-4 text-gray-700">
            {whatsappHref ? (
              <a className="flex items-center gap-3 underline" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
            ) : (
              <p className="flex items-center gap-3 opacity-70">
                <MessageCircle size={18} /> Add VITE_WHATSAPP_NUMBER in .env
              </p>
            )}

            {contactEmail ? (
              <a className="flex items-center gap-3 underline" href={`mailto:${contactEmail}`}>
                <Mail size={18} /> {contactEmail}
              </a>
            ) : (
              <p className="flex items-center gap-3 opacity-70">
                <Mail size={18} /> Add VITE_CONTACT_EMAIL in .env
              </p>
            )}

            {contactPhone ? (
              <a className="flex items-center gap-3 underline" href={`tel:${contactPhone}`}>
                <PhoneCall size={18} /> {contactPhone}
              </a>
            ) : null}
          </div>

          <div className="mt-6 border-t pt-6">
            <h3 className="font-bold" style={{ color: colors.forestGreen }}>
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

        <div className="border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.forestGreen }}>
            Location
          </h2>
          <p className="text-gray-700 flex items-center gap-2">
            <MapPin size={18} /> Add your meeting point or office address here.
          </p>

          <div className="mt-4">
            <div className="border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
              Optional: embed a Google Map iframe here if you have a fixed location.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
