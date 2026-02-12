import React, { useMemo, useState } from "react";
import {
  Calendar,
  Users as UsersIcon,
  MessageCircle,
  Mail,
  User,
  Phone,
  Languages,
  StickyNote,
} from "lucide-react";
import { colors } from "../theme/colors";

/* ---------- Helpers ---------- */
function normalizePhone(phone) {
  return String(phone || "").replace(/[^0-9]/g, "");
}

function buildWhatsAppUrl(phone, message) {
  const clean = normalizePhone(phone);
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${clean}?text=${text}`;
}

function todayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

function Field({ label, icon, children, hint }) {
  return (
    <label className="block">
      <div
        className="flex items-center gap-2 text-sm font-semibold"
        style={{ color: "#0f172a" }}
      >
        {icon}
        {label}
      </div>
      <div className="mt-2">{children}</div>
      {hint ? (
        <div className="mt-1 text-xs" style={{ color: "rgba(15,23,42,0.70)" }}>
          {hint}
        </div>
      ) : null}
    </label>
  );
}

/* ---------- Component ---------- */
export default function BookingForm({ tour, businessName = "Trailblazer" }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";

  const [form, setForm] = useState({
    date: "",
    people: "2",
    language: "English",
    name: "",
    phone: "",
    notes: "",
  });

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const message = useMemo(() => {
    return `
Hi ${businessName}, I want to book this tour.

Tour: ${tour?.name || "-"}
Category: ${tour?.categoryTitle || tour?.categoryKey || "-"}

Date: ${form.date || "-"}
People: ${form.people || "-"}
Language: ${form.language || "-"}

Name: ${form.name || "-"}
Phone: ${form.phone || "-"}

Notes:
${form.notes || "-"}

Please confirm availability and total price. Thank you!
    `.trim();
  }, [form, tour, businessName]);

  const whatsappUrl = useMemo(
    () => buildWhatsAppUrl(whatsappNumber, message),
    [whatsappNumber, message],
  );

  const mailtoUrl = useMemo(() => {
    if (!contactEmail) return "";
    const subject = encodeURIComponent(
      `Booking inquiry - ${tour?.name || "Tour"}`,
    );
    const body = encodeURIComponent(message);
    return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }, [contactEmail, message, tour]);

  const handleWhatsAppClick = () => {
    if (!whatsappNumber) {
      alert(
        "WhatsApp number missing. Please set VITE_WHATSAPP_NUMBER in .env and restart npm run dev.",
      );
      return;
    }
    const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = whatsappUrl;
  };

  /* Strong visible input style (works anywhere) */
  const inputStyle = {
    width: "100%",
    borderRadius: 14,
    padding: "12px 14px",
    border: "1px solid rgba(15, 23, 42, 0.22)",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    fontSize: 14,
    lineHeight: "20px",
    outline: "none",
  };

  const inputFocusStyle = {
    boxShadow: "0 0 0 4px rgba(22, 101, 52, 0.18)", // green focus ring
    borderColor: colors.forestGreen,
  };

  const [focusKey, setFocusKey] = useState("");

  return (
    <section
      className="shadow-2xl"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(15,23,42,0.12)",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 22,
          background:
            "linear-gradient(135deg, rgba(16,65,44,0.08) 0%, rgba(185,149,74,0.10) 100%)",
          borderBottom: "1px solid rgba(15,23,42,0.10)",
        }}
      >
        <h3
          className="text-2xl font-bold"
          style={{ color: colors.forestGreen }}
        >
          Book on WhatsApp
        </h3>
        <p className="mt-1 text-sm" style={{ color: "rgba(15,23,42,0.75)" }}>
          Fill the details and tap WhatsApp — your message will open ready to
          send.
        </p>

        {/* Small tour summary */}
        <div
          className="mt-4 rounded-2xl p-4"
          style={{
            backgroundColor: "#fff",
            border: "1px solid rgba(15,23,42,0.10)",
          }}
        >
          <div className="text-sm font-semibold" style={{ color: "#0f172a" }}>
            {tour?.name || "Selected Tour"}
          </div>
          <div
            className="text-xs mt-1"
            style={{ color: "rgba(15,23,42,0.70)" }}
          >
            {tour?.categoryTitle || tour?.categoryKey || ""}
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ padding: 22 }}>
        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Preferred date"
            icon={<Calendar size={16} />}
            hint="Recommended"
          >
            <input
              type="date"
              min={todayISO()}
              value={form.date}
              onChange={onChange("date")}
              style={{
                ...inputStyle,
                ...(focusKey === "date" ? inputFocusStyle : null),
              }}
              onFocus={() => setFocusKey("date")}
              onBlur={() => setFocusKey("")}
            />
          </Field>

          <Field
            label="Number of people"
            icon={<UsersIcon size={16} />}
            hint="Adults + kids total"
          >
            <input
              type="number"
              min={1}
              max={20}
              value={form.people}
              onChange={onChange("people")}
              style={{
                ...inputStyle,
                ...(focusKey === "people" ? inputFocusStyle : null),
              }}
              onFocus={() => setFocusKey("people")}
              onBlur={() => setFocusKey("")}
            />
          </Field>

          <Field
            label="Language"
            icon={<Languages size={16} />}
            hint="Preferred guide language"
          >
            <select
              value={form.language}
              onChange={onChange("language")}
              style={{
                ...inputStyle,
                ...(focusKey === "language" ? inputFocusStyle : null),
              }}
              onFocus={() => setFocusKey("language")}
              onBlur={() => setFocusKey("")}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Italian</option>
              <option>Portuguese</option>
              <option>Russian</option>
              <option>Chinese </option>
            </select>
          </Field>

          <Field
            label="Your name"
            icon={<User size={16} />}
            hint="Optional, but helps us reply faster"
          >
            <input
              type="text"
              value={form.name}
              onChange={onChange("name")}
              placeholder="e.g., Madupa"
              style={{
                ...inputStyle,
                ...(focusKey === "name" ? inputFocusStyle : null),
              }}
              onFocus={() => setFocusKey("name")}
              onBlur={() => setFocusKey("")}
            />
          </Field>

          <Field
            label="Your phone"
            icon={<Phone size={16} />}
            hint="Optional (WhatsApp reply number)"
          >
            <input
              type="tel"
              value={form.phone}
              onChange={onChange("phone")}
              placeholder="e.g., +94 7X XXX XXXX"
              style={{
                ...inputStyle,
                ...(focusKey === "phone" ? inputFocusStyle : null),
              }}
              onFocus={() => setFocusKey("phone")}
              onBlur={() => setFocusKey("")}
            />
          </Field>

          <div className="md:col-span-2">
            <Field
              label="Special requests / notes"
              icon={<StickyNote size={16} />}
              hint="Kids, food, accessibility, photography..."
            >
              <textarea
                rows={4}
                value={form.notes}
                onChange={onChange("notes")}
                placeholder="Anything we should know?"
                style={{
                  ...inputStyle,
                  minHeight: 110,
                  resize: "vertical",
                  ...(focusKey === "notes" ? inputFocusStyle : null),
                }}
                onFocus={() => setFocusKey("notes")}
                onBlur={() => setFocusKey("")}
              />
            </Field>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            style={{
              backgroundColor: colors.forestGreen,
              color: "#ffffff",
              padding: "12px 14px",
              borderRadius: 14,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              border: "none",
              cursor: "pointer",
            }}
          >
            <MessageCircle size={18} />
            Send via WhatsApp
          </button>

          {contactEmail ? (
            <a
              href={mailtoUrl}
              style={{
                backgroundColor: "#ffffff",
                color: colors.forestGreen,
                padding: "12px 14px",
                borderRadius: 14,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                border: "1px solid rgba(15,23,42,0.18)",
              }}
            >
              <Mail size={18} />
              Send via Email
            </a>
          ) : (
            <div
              style={{
                backgroundColor: "rgba(15,23,42,0.04)",
                border: "1px dashed rgba(15,23,42,0.25)",
                color: "rgba(15,23,42,0.70)",
                padding: "12px 14px",
                borderRadius: 14,
                fontSize: 13,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Email not configured
            </div>
          )}
        </div>

        {/* Preview */}
        <details className="mt-6">
          <summary
            className="cursor-pointer text-sm font-semibold"
            style={{ color: "#0f172a" }}
          >
            Message preview
          </summary>
          <pre
            className="mt-3 whitespace-pre-wrap text-sm overflow-x-auto"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(15,23,42,0.10)",
              borderRadius: 14,
              padding: 12,
              color: "#0f172a",
            }}
          >
            {message}
          </pre>
        </details>
      </div>
    </section>
  );
}
