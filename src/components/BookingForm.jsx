import React, { useMemo, useState } from "react";
import {
  Calendar,
  MapPinned,
  Users as UsersIcon,
  MessageCircle,
  Mail,
  User,
  Phone,
  Languages,
  StickyNote,
  CheckCircle2,
} from "lucide-react";
import { colors } from "../theme/colors";

function buildWhatsAppUrl(phone, message) {
  const normalized = (phone || "").replace(/[^0-9]/g, "");
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${normalized}?text=${text}`;
}

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function Field({ label, icon, children, hint, required }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold flex items-center gap-2" style={{ color: colors.charcoalGray }}>
        {icon}
        {label}
        {required ? (
          <span
            className="ml-1 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "rgba(15,23,42,0.08)", color: colors.charcoalGray }}
          >
            Required
          </span>
        ) : null}
      </span>
      <div className="mt-2">{children}</div>
      {hint ? <p className="mt-1 text-xs" style={{ color: "rgba(15,23,42,0.65)" }}>{hint}</p> : null}
    </label>
  );
}

function inputBaseStyle() {
  return {
    width: "100%",
    borderRadius: 14,
    padding: "10px 12px",
    border: "1px solid rgba(15,23,42,0.18)",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    outline: "none",
  };
}

function textareaBaseStyle() {
  return {
    width: "100%",
    borderRadius: 14,
    padding: "10px 12px",
    border: "1px solid rgba(15,23,42,0.18)",
    backgroundColor: "#ffffff",
    color: "#0f172a",
    outline: "none",
    resize: "vertical",
  };
}

function Chip({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
      style={{
        backgroundColor: "rgba(15,23,42,0.06)",
        border: "1px solid rgba(15,23,42,0.10)",
        color: colors.charcoalGray,
      }}
    >
      {children}
    </span>
  );
}

export default function BookingForm({ tour, businessName = "Tour Operator" }) {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "";
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "";
  const pickupAreas = (import.meta.env.VITE_PICKUP_AREAS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const [form, setForm] = useState({
    date: "",
    pickup: "",
    people: "2",
    language: "English",
    notes: "",
    name: "",
    phone: "",
  });

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  // Make booking usable: require name OR phone at minimum
  const isReady = useMemo(() => {
    const hasContact = Boolean(form.name?.trim() || form.phone?.trim());
    return hasContact;
  }, [form.name, form.phone]);

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

  return (
    <section
      className="shadow-2xl border"
      style={{
        backgroundColor: colors.premiumCream,
        borderColor: "rgba(15,23,42,0.10)",
        borderRadius: 18,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: 24,
          backgroundColor: "rgba(15,23,42,0.04)",
          borderBottom: "1px solid rgba(15,23,42,0.08)",
        }}
      >
        <h3 className="text-2xl font-serif font-bold" style={{ color: colors.forestGreen }}>
          Reserve your experience
        </h3>
        <p style={{ color: "rgba(15,23,42,0.70)", marginTop: 8 }}>
          Fill this once and send it to WhatsApp (fastest) or Email.
        </p>

        {/* Tour chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tour?.duration ? <Chip>{tour.duration}</Chip> : null}
          {tour?.people ? <Chip>{tour.people}</Chip> : null}
          {tour?.difficulty ? <Chip>{tour.difficulty}</Chip> : null}
          {tour?.priceFrom ? <Chip>{tour.priceFrom}</Chip> : null}
        </div>

        {/* Tip */}
        <div
          className="mt-5 flex items-start gap-3"
          style={{
            backgroundColor: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(15,23,42,0.10)",
            borderRadius: 16,
            padding: 14,
          }}
        >
          <CheckCircle2 size={18} style={{ color: colors.forestGreen, marginTop: 2 }} />
          <div style={{ color: "rgba(15,23,42,0.75)", fontSize: 13, lineHeight: 1.35 }}>
            Add your <b>name or phone</b> so we can reply quickly. Date & pickup help us confirm faster.
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{ padding: 24 }}>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Preferred date" icon={<Calendar size={16} />} hint="Recommended" required={false}>
            <input
              type="date"
              min={todayISO()}
              value={form.date}
              onChange={onChange("date")}
              style={inputBaseStyle()}
            />
          </Field>

          {/* <Field label="Pickup location" icon={<MapPinned size={16} />} hint="Where should we pick you up?" required={false}>
            {pickupAreas.length ? (
              <select value={form.pickup} onChange={onChange("pickup")} style={inputBaseStyle()}>
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
                style={inputBaseStyle()}
              />
            )}
          </Field> */}

          <Field label="Number of people" icon={<UsersIcon size={16} />} hint="Adults + kids total" required={false}>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                type="button"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid rgba(15,23,42,0.18)",
                  backgroundColor: "#fff",
                  color: colors.forestGreen,
                  fontWeight: 800,
                }}
                onClick={() =>
                  setForm((p) => ({
                    ...p,
                    people: String(Math.max(1, Number(p.people || 1) - 1)),
                  }))
                }
              >
                −
              </button>

              <input
                type="number"
                min={1}
                max={20}
                value={form.people}
                onChange={onChange("people")}
                style={inputBaseStyle()}
              />

              <button
                type="button"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 14,
                  border: "1px solid rgba(15,23,42,0.18)",
                  backgroundColor: "#fff",
                  color: colors.forestGreen,
                  fontWeight: 800,
                }}
                onClick={() =>
                  setForm((p) => ({
                    ...p,
                    people: String(Math.min(20, Number(p.people || 1) + 1)),
                  }))
                }
              >
                +
              </button>
            </div>
          </Field>

          <Field label="Language" icon={<Languages size={16} />} hint="Preferred guide language" required={false}>
            <select value={form.language} onChange={onChange("language")} style={inputBaseStyle()}>
              <option>English</option>
              <option>Sinhala</option>
              <option>Tamil</option>
            </select>
          </Field>

          <Field label="Your name" icon={<User size={16} />} hint="Name or phone is needed" required={!form.phone?.trim()}>
            <input
              type="text"
              value={form.name}
              onChange={onChange("name")}
              placeholder="Your name"
              style={inputBaseStyle()}
            />
          </Field>

          <Field label="Your phone" icon={<Phone size={16} />} hint="Name or phone is needed" required={!form.name?.trim()}>
            <input
              type="tel"
              value={form.phone}
              onChange={onChange("phone")}
              placeholder="e.g., +94 7X XXX XXXX"
              style={inputBaseStyle()}
            />
          </Field>

          <div className="md:col-span-2">
            <Field
              label="Special requests / notes"
              icon={<StickyNote size={16} />}
              hint="Kids, dietary needs, photography, accessibility..."
              required={false}
            >
              <textarea
                rows={4}
                value={form.notes}
                onChange={onChange("notes")}
                placeholder="Anything we should know?"
                style={textareaBaseStyle()}
              />
            </Field>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a
            href={whatsappNumber && isReady ? whatsappUrl : undefined}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: colors.forestGreen,
              color: colors.premiumCream,
              borderRadius: 14,
              padding: "12px 14px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              opacity: whatsappNumber && isReady ? 1 : 0.5,
              cursor: whatsappNumber && isReady ? "pointer" : "not-allowed",
            }}
            aria-disabled={!(whatsappNumber && isReady)}
            onClick={(e) => {
              if (!(whatsappNumber && isReady)) e.preventDefault();
            }}
          >
            <MessageCircle size={18} />
            Send on WhatsApp
          </a>

          <a
            href={contactEmail && isReady ? mailtoUrl : undefined}
            style={{
              backgroundColor: "#ffffff",
              color: colors.forestGreen,
              borderRadius: 14,
              padding: "12px 14px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: 13,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              border: "1px solid rgba(15,23,42,0.18)",
              opacity: contactEmail && isReady ? 1 : 0.5,
              cursor: contactEmail && isReady ? "pointer" : "not-allowed",
            }}
            aria-disabled={!(contactEmail && isReady)}
            onClick={(e) => {
              if (!(contactEmail && isReady)) e.preventDefault();
            }}
          >
            <Mail size={18} />
            Send by Email
          </a>
        </div>

        {/* Preview */}
        <details className="mt-6">
          <summary className="cursor-pointer text-sm font-semibold" style={{ color: colors.charcoalGray }}>
            Message preview
          </summary>
          <pre
            className="mt-3 whitespace-pre-wrap text-sm overflow-x-auto"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(15,23,42,0.10)",
              borderRadius: 14,
              padding: 12,
              color: "rgba(15,23,42,0.75)",
            }}
          >
{summary}
          </pre>
        </details>
      </div>
    </section>
  );
}
