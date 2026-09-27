import type { Metadata } from "next";
import { DownloadButton } from "@/components/DownloadButton";
import { Faq } from "@/components/Faq";
import { Flow } from "@/components/Flow";
import { Footer } from "@/components/Footer";
import { HeroWindow } from "@/components/HeroWindow";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { social } from "@/lib/metadata";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  ...social({ url: "/" }),
};

const pile = [
  "the DM from March with the refs in it",
  "a Trello board last updated three weeks ago",
  "notes app: “kira ears longer??”",
  "“send it to this PayPal email”",
  "a spreadsheet of who paid and who didn't",
];

const tilts = ["-rotate-1", "rotate-[0.6deg]", "-rotate-[0.4deg]", "rotate-1", "-rotate-[0.8deg]"];

const promises = [
  { title: "No invite codes.", body: "Download it and start. No waitlist, no verification, no application to get in." },
  { title: "No cut of your commissions.", body: "artcove never touches your money. Clients pay you directly, however you like to get paid." },
  {
    title: "Every commission in one queue.",
    body: "Whether it came from a Discord DM, a tweet, VGen or Ko-fi, it goes in the same list.",
  },
];

function Strike({ variant }: { variant: number }) {
  const paths = [
    "M1 6 C18 3 36 7 55 4.5 S86 5 99 3.5",
    "M1 4 C22 6 40 3 62 5.5 S88 3.5 99 5",
    "M1 5.5 C16 4 34 6.5 52 4 S84 6 99 4",
  ];
  return (
    <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true" className="absolute top-1/2 -left-1 h-3 w-[calc(100%+0.5rem)] -translate-y-[60%]">
      <path d={paths[variant % paths.length]} fill="none" stroke="#e03e57" strokeWidth="2.4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main>
        <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 pt-14 pb-24 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pt-24 lg:pb-32">
          <div>
            <h1 className="text-[3.25rem] leading-[1.02] font-bold tracking-[-0.045em] text-balance sm:text-7xl lg:text-[3.9rem] xl:text-[4.25rem]">
              Your commissions, finally in one place.
            </h1>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-balance text-pencil">
              A Windows app for artists who take commissions on Discord and X.
            </p>
            <div className="mt-9">
              <DownloadButton />
            </div>
          </div>
          <HeroWindow />
        </section>

        <section className="border-y border-rule bg-sheet">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-28">
            <div>
              <h2 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">Close the other tabs.</h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-pencil">
                Right now a single commission lives in five places. artcove puts it in one.
              </p>
            </div>
            <ul className="space-y-5 font-hand text-2xl text-graphite/75 sm:text-[1.75rem]" aria-label="What artcove replaces">
              {pile.map((item, i) => (
                <li key={item} className={`w-fit ${tilts[i]}`}>
                  <span className="relative">
                    {item}
                    <Strike variant={i} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Flow />

        <section className="bg-graphite text-white">
          <div className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:py-28">
            <h2 className="max-w-2xl text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">
              Your tool, not a marketplace.
            </h2>
            <dl className="mt-14 border-t border-white/20">
              {promises.map((p) => (
                <div key={p.title} className="grid gap-2 border-b border-white/20 py-7 md:grid-cols-[1.2fr_1fr] md:gap-10">
                  <dt className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{p.title}</dt>
                  <dd className="text-lg leading-relaxed text-white/65">{p.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Faq />

        <section className="border-t border-rule bg-sheet">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:py-28">
            <h2 className="max-w-2xl text-5xl leading-[1.02] font-bold tracking-[-0.04em] text-balance sm:text-6xl">Get your queue out of your DMs.</h2>
            <DownloadButton />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
