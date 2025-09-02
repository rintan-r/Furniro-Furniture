// lib/slugify.js
export function slugify(...parts) {
  const text = parts.filter(Boolean).join(" ") // gabung title + shortDescription + optional id

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\_]+/g, "-")       // spasi → dash
    .replace(/[^\w\-]+/g, "")       // hapus simbol
    .replace(/\-\-+/g, "-")         // multiple dash → single
    .replace(/^-+/, "")             // trim leading dash
    .replace(/-+$/, "");            // trim trailing dash
}
