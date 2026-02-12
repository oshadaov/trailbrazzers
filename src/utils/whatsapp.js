export function normalizePhone(phone) {
  return String(phone || "").replace(/[^0-9]/g, "");
}

export function buildWhatsAppUrl(phone, message) {
  const normalized = normalizePhone(phone);
  if (!normalized) return "";
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message || "")}`;
}

export function buildWhatsAppFallbackUrl(phone, message) {
  const normalized = normalizePhone(phone);
  if (!normalized) return "";
  return `https://api.whatsapp.com/send?phone=${normalized}&text=${encodeURIComponent(message || "")}`;
}
