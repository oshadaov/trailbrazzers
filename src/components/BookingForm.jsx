import React, { useMemo, useState } from "react";
import { Calendar, MapPinned, Users as UsersIcon } from "lucide-react";
import { colors } from "../theme/colors";

function buildWhatsAppUrl(phone, message) {
  const normalized = (phone || "").replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message || "");
  // WhatsApp works best with country code, e.g. 94XXXXXXXXX for Sri Lanka
  const base = "https://wa.me/";
  return `${base}${normalized}?text=${text}`;
}

export default function BookingForm({ tour, businessName = "Tour Operator" }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const pickupAreas = (import.meta.env.VITE_PICKUP_AREAS || "").split(",").map((s) => s.trim()).filter(Boolean);

  const [form, setForm] = useState({
    date: "",
    pickup: "",
    people: "2",
    language: "English",
    notes: "",
    name: "",
    phone: "",
  });

  const summary = useMemo(() => {
    const lines = [
      `Hello ${businessName}, I want to book / inquire about:`,
      `Tour: ${tour?.name || ""} (${tour?.categoryTitle || tour?.categoryKey || ""})`,
      form.date ? `Date: ${form.date}` : null,
      form.pickup ? `Pickup: ${form.pickup}` : null,
      form.people ? `People: ${form.people}` : null,
      form.language ? `Language: ${form.language}` : null,
      form.name ? `Name: ${form.name}` : null,
      form.phone ? `My Phone: ${form.phone}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
      "Please confirm availability and total price. Thank you!",
    ].filter(Boolean);
    return lines.join("\n");
  }, [form, businessName, tour]);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(whatsappNumber, summary), [whatsappNumber, summary]);
  const mailtoUrl = useMemo(() => {
    if (!contactEmail) return "";
    const subject = encodeURIComponent(`Booking inquiry: ${tour?.name || "Tour"}`);
    const body = encodeURIComponent(summary);
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [contactEmail, summary, tour]);

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  return (
    <section style={{ backgroundColor: colors.cloudCream }} className="rounded-none shadow-xl p-6 md:p-8">
      <h3 style={{ color: colors.deepGreen }} className="text-2xl font-serif font-bold mb-2">
        Book / Ask a Question
      </h3>
      <p className="text-gray-600 mb-6">
        Fill this in once and send it instantly to WhatsApp (fastest) or email.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar size={16} /> Preferred date
          </span>
          <input
            type="date"
            value={form.date}
            onChange={onChange("date")}
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <MapPinned size={16} /> Pickup location
          </span>
          {pickupAreas.length ? (
            <select
              value={form.pickup}
              onChange={onChange("pickup")}
              className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 bg-white focus:outline-none"
            >
              <option value="">Select pickup</option>
              {pickupAreas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={form.pickup}
              onChange={onChange("pickup")}
              placeholder="e.g., Haputale / Ella / Belihuloya"
              className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
            />
          )}
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <UsersIcon size={16} /> Number of people
          </span>
          <input
            type="number"
            min={1}
            max={20}
            value={form.people}
            onChange={onChange("people")}
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Language</span>
          <select
            value={form.language}
            onChange={onChange("language")}
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 bg-white focus:outline-none"
          >
            <option>English</option>
            <option>Sinhala</option>
            <option>Tamil</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Your name</span>
          <input
            type="text"
            value={form.name}
            onChange={onChange("name")}
            placeholder="Your name"
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-gray-700">Your phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={onChange("phone")}
            placeholder="e.g., +94 7X XXX XXXX"
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-sm font-semibold text-gray-700">Special requests / notes</span>
          <textarea
            rows={4}
            value={form.notes}
            onChange={onChange("notes")}
            placeholder="Kids, dietary needs, photography, accessibility, etc."
            className="mt-2 w-full border border-gray-300 rounded-none px-3 py-2 focus:outline-none"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappNumber ? whatsappUrl : undefined}
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: colors.deepGreen }}
          className={`px-5 py-3 text-white font-bold uppercase tracking-wider text-sm text-center ${
            whatsappNumber ? "hover:bg-opacity-90" : "opacity-50 cursor-not-allowed"
          }`}
          aria-disabled={!whatsappNumber}
          onClick={(e) => {
            if (!whatsappNumber) e.preventDefault();
          }}
        >
          Send on WhatsApp
        </a>

        <a
          href={contactEmail ? mailtoUrl : undefined}
          className={`px-5 py-3 border border-gray-400 font-bold uppercase tracking-wider text-sm text-center ${
            contactEmail ? "hover:bg-white" : "opacity-50 cursor-not-allowed"
          }`}
          aria-disabled={!contactEmail}
          onClick={(e) => {
            if (!contactEmail) e.preventDefault();
          }}
        >
          Send by Email
        </a>
      </div>

      <details className="mt-6">
        <summary className="cursor-pointer text-sm font-semibold text-gray-700">Message preview</summary>
        <pre className="mt-3 whitespace-pre-wrap text-sm text-gray-600 bg-white border border-gray-200 p-3 overflow-x-auto">
{summary}
        </pre>
      </details>
    </section>
  );
}
