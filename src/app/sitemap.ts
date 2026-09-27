import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build time: the site is static, so every deploy is the last modification.
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/download`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
