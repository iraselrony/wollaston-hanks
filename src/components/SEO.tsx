import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://www.wollastonhanks.com";
const SITE_NAME = "Wollaston Hanks";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, attrName, attrVal] = selector.match(/\[(.*?)="(.*?)"\]/) ?? [];
    if (attrName && attrVal) el.setAttribute(attrName, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const setJsonLd = (id: string, data: Record<string, unknown> | Record<string, unknown>[]) => {
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-jsonld="${id}"]`);
  if (!el) {
    el = document.createElement("script");
    el.setAttribute("type", "application/ld+json");
    el.setAttribute("data-jsonld", id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
};

const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, type = "website", jsonLd }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "content", description);
    setLink("canonical", url);

    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);

    if (jsonLd) {
      setJsonLd("page", jsonLd);
    }
  }, [title, description, path, image, type, jsonLd]);

  return null;
};

export default SEO;
export { SITE_URL, SITE_NAME };
