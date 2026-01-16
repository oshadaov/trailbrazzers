import { useEffect } from "react";

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    // selector is usually meta[name="..."] or meta[property="..."]
    // we infer whether to use name or property from attrs.
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (v === undefined || v === null) return;
    el.setAttribute(k, v);
  });
}

/**
 * Lightweight SEO helper without extra deps.
 * - Updates document title
 * - Updates description + OG tags for sharing
 */
export default function SeoHead({
  title,
  description,
  url,
  image,
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      upsertMeta('meta[name="description"]', { name: "description", content: description });
      upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
      upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    }

    if (title) {
      upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
      upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    }

    if (url) upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    if (image) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    }

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
  }, [title, description, url, image]);

  return null;
}
