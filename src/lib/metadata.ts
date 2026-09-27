import type { Metadata } from "next";
import { site } from "@/lib/site";

type Social = { url: string; title?: string; description?: string; image?: string };

// Next.js replaces (does not merge) a parent's openGraph/twitter objects when a page sets its own,
// so every page builds them through here to keep the shared fields.
// Only the root segment gets app/opengraph-image automatically; other pages pass `image`.
export function social({ url, title = site.shareTitle, description = site.description, image }: Social): Metadata {
  // An `images: undefined` key would still wipe out the auto-added root image, so only set it when given.
  const media = image ? { images: [{ url: image, width: 1200, height: 630, alt: site.shareTitle }] } : {};
  return {
    openGraph: { type: "website", siteName: site.name, locale: "en_US", url, title, description, ...media },
    twitter: { card: "summary_large_image", title, description, ...media },
  };
}
