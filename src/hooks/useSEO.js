import { useEffect } from "react";

/**
 * Custom hook to dynamically manage page-level SEO metadata.
 * Useful for React client-side SPAs.
 *
 * @param {Object} seoOptions - The SEO metadata configuration.
 * @param {string} seoOptions.title - The title of the page (appended to brand name).
 * @param {string} seoOptions.description - Meta description text.
 * @param {string|string[]} seoOptions.keywords - Page keywords (comma-separated or string array).
 * @param {string} [seoOptions.canonical] - Canonical URL for the page.
 * @param {string} [seoOptions.ogImage] - Social share image URL.
 * @param {string} [seoOptions.ogType] - Open Graph type (defaults to 'website').
 */
export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType,
}) {
  useEffect(() => {
    // 1. Update Document Title
    const baseTitle =
      "RJ Plywood & Hardwares | Plywood, Hardware & Laminates in Madurai";
    document.title = title ? `${title} | RJ Plywood & Hardwares` : baseTitle;

    // 2. Helper to get or create meta tags
    const setMetaTag = (attributeName, attributeValue, content) => {
      if (content === undefined || content === null) return;
      let element = document.querySelector(
        `meta[${attributeName}="${attributeValue}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // 3. Set standard descriptions, keywords
    const descContent =
      description ||
      "RJ Plywood and Hardwares is Madurai's leading supplier of premium calibrated marine plywood, decorative laminates, wood veneers, modular kitchen fittings, and architectural hardware.";
    const keywordsStr = Array.isArray(keywords)
      ? keywords.join(", ")
      : keywords ||
        "plywood in madurai, hardware shop madurai, calibrated plywood, marine plywood, greenply, century ply, veneer sheet, modular kitchen fittings, ebco hardware, drawer channels, door lock set";

    setMetaTag("name", "description", descContent);
    setMetaTag("name", "keywords", keywordsStr);

    // 4. Set Open Graph tags
    setMetaTag(
      "property",
      "og:title",
      title ? `${title} | RJ Plywood & Hardwares` : "RJ Plywood & Hardwares",
    );
    setMetaTag("property", "og:description", descContent);
    setMetaTag("property", "og:image", ogImage || "/main-logo.png");
    setMetaTag("property", "og:type", ogType || "website");
    setMetaTag("property", "og:url", window.location.href);

    // 5. Set Twitter tags
    setMetaTag(
      "name",
      "twitter:title",
      title ? `${title} | RJ Plywood & Hardwares` : "RJ Plywood & Hardwares",
    );
    setMetaTag("name", "twitter:description", descContent);
    setMetaTag("name", "twitter:image", ogImage || "/main-logo.png");
    setMetaTag("name", "twitter:card", "summary_large_image");

    // 6. Set Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || window.location.href);
  }, [title, description, keywords, canonical, ogImage, ogType]);
}
