const faqs = [
  {
    q: "Who is artcove for?",
    a: "Artists who take commissions on Discord, X and places like them, and are tired of keeping track of it all across DMs, spreadsheets and notes apps.",
  },
  {
    q: "Which systems does it run on?",
    a: "Windows 10 and Windows 11, 64-bit. There's no Mac version yet.",
  },
  {
    q: "Do my clients need to install anything?",
    a: "No. artcove is just for you. Keep talking to clients wherever you already do, and send them invoices and payment links from the app.",
  },
  {
    q: "Does artcove take a cut of my commissions?",
    a: "No. artcove never handles your money. Your invoices point to your own payment link, and clients pay you directly.",
  },
  {
    q: "Can I add commissions from VGen or Ko-fi?",
    a: "Yes. Any commission can go in your queue, whether it came from a DM, a form, VGen or Ko-fi.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-[1200px] gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:py-32">
      <h2 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">Questions artists ask</h2>
      <div className="border-t border-graphite">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-rule [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold">
              {f.q}
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="size-4 shrink-0 text-blue transition-transform group-open:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M8 2v12M2 8h12" />
              </svg>
            </summary>
            <p className="max-w-2xl pb-6 text-lg leading-relaxed text-pencil">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
