import { download, isDownloadReady } from "@/lib/download";
import { site } from "@/lib/site";

// Structured data so search engines know artcove.app is the home of a Windows app.
export function JsonLd() {
  const org = `${site.url}/#organization`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.svg`,
        sameAs: Object.values(site.social).filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { "@id": org },
        inLanguage: "en",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#app`,
        name: site.name,
        description: site.description,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Windows 10, Windows 11",
        softwareVersion: download.version,
        ...(isDownloadReady && { downloadUrl: download.windowsUrl }),
        ...(download.fileSize && { fileSize: download.fileSize }),
        publisher: { "@id": org },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
