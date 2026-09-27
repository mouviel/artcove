import type { Metadata } from "next";
import { DownloadButton } from "@/components/DownloadButton";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { download, isDownloadReady } from "@/lib/download";
import { social } from "@/lib/metadata";

const title = "Download artcove for Windows";
const description = `Get artcove ${download.version}, the commission tracker for artists, on Windows 10 and 11. Install steps and system requirements.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/download" },
  ...social({ url: "/download", title, description, image: "/opengraph-image" }),
};

const steps = [
  { title: "Download the installer", body: "Save the file somewhere you'll find it, like your Downloads folder." },
  {
    title: "Run it",
    body: "Open the file. If Windows SmartScreen says it protected your PC, choose “More info”, then “Run anyway”.",
  },
  { title: "Add your first commission", body: "artcove opens when setup finishes. Add what's already in your queue and you're set." },
];

export default function DownloadPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h1 className="text-5xl leading-[1.02] font-bold tracking-[-0.04em] sm:text-7xl">Download artcove</h1>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-pencil">For Windows 10 and Windows 11, 64-bit.</p>
            <div className="mt-10">
              {isDownloadReady ? (
                <DownloadButton />
              ) : (
                <div className="max-w-md border-l-2 border-red pl-5">
                  <p className="text-xl font-bold">The installer is almost ready.</p>
                  <p className="mt-2 text-lg leading-relaxed text-pencil">
                    Version {download.version} is being packaged. The download button shows up here as soon as it&apos;s live.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-[-0.02em]">Installing</h2>
            <ol className="mt-6 border-t border-graphite">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-5 border-b border-rule py-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-blue text-sm font-bold text-blue-ink">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-lg font-semibold">{s.title}</p>
                    <p className="mt-1 leading-relaxed text-pencil">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-pencil">Version</dt>
                <dd className="mt-1 text-base font-semibold">{download.version}</dd>
              </div>
              <div>
                <dt className="text-pencil">Needs</dt>
                <dd className="mt-1 text-base font-semibold">Windows 10 or 11, 64-bit</dd>
              </div>
              {download.fileSize && (
                <div>
                  <dt className="text-pencil">Size</dt>
                  <dd className="mt-1 text-base font-semibold">{download.fileSize}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
