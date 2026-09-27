import type { ReactNode } from "react";
import { Check, LineRef, PaletteRef, SketchRef, Source, WindowFrame, refShapes } from "@/components/ui";

function RequestDetail() {
  return (
    <WindowFrame title="New commission">
      <div className="space-y-4 p-5 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-bold">luna.draws</p>
          <Source from="Discord" />
          <span className="ml-auto text-xs text-pencil">Chibi icon, 2 characters</span>
        </div>
        <p className="rounded-md bg-paper p-3 leading-relaxed">
          Me and my partner&apos;s OCs as chibis, holding hands. She has the braid, he has the scar over his eye. Pastel
          background is fine!
        </p>
        <div className="grid grid-cols-5 gap-1.5">
          <PaletteRef />
          <LineRef d={refShapes.braid} />
          <LineRef d={refShapes.scar} />
          <SketchRef />
          <span className="grid aspect-square place-items-center rounded-md border border-dashed border-[#c5cbd5] text-xs text-pencil">
            +3
          </span>
        </div>
      </div>
    </WindowFrame>
  );
}

function QueueDetail() {
  const rows: [string, string, string, number][] = [
    ["ayaz", "Half body", "Color", 3],
    ["kiraa", "Full body OC", "Sketch", 2],
    ["nox", "Portrait", "Sketch", 2],
    ["moonbun", "Half body", "Queue", 1],
    ["rin", "Emote pack", "Queue", 1],
  ];
  return (
    <WindowFrame title="Queue">
      <div className="p-5">
        <div className="flex items-center justify-between text-sm">
          <p className="font-bold">Slots</p>
          <p className="text-pencil">7 of 10 taken</p>
        </div>
        <div className="mt-2 flex gap-1" aria-hidden="true">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className={`h-5 flex-1 rounded-[3px] ${i < 7 ? "bg-blue" : "border border-dashed border-blue/50"}`} />
          ))}
        </div>
        <table className="mt-5 w-full text-sm">
          <tbody>
            {rows.map(([who, what, stage, filled], i) => (
              <tr key={who} className="border-t border-rule">
                <td className="w-6 py-2 text-pencil">{i + 1}</td>
                <td className="py-2 font-medium">{who}</td>
                <td className="hidden py-2 text-pencil sm:table-cell">{what}</td>
                <td className="py-2 text-right">
                  <span className="inline-flex items-center gap-2">
                    <span className="text-xs text-pencil">{stage}</span>
                    <span className="flex gap-0.5" aria-hidden="true">
                      {[0, 1, 2, 3].map((n) => (
                        <span key={n} className={`h-1 w-2.5 rounded-full ${n < filled ? "bg-blue" : "bg-blue-light"}`} />
                      ))}
                    </span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </WindowFrame>
  );
}

function RevisionsDetail() {
  const notes: [string, string, boolean][] = [
    ["Make the ears longer", "Sketch", true],
    ["Add eye bags, she should look tired", "Sketch", false],
    ["Thinner tea glass", "Sketch", false],
    ["Warmer rim light on the hair", "Color", false],
  ];
  return (
    <WindowFrame title="Kiraa: revision notes">
      <div className="p-5">
        <ul className="space-y-2.5 text-sm">
          {notes.map(([text, stage, done]) => (
            <li key={text} className="flex gap-2.5">
              <Check done={done} />
              <span className={done ? "text-pencil line-through decoration-pencil/60" : ""}>{text}</span>
              <span className="ml-auto shrink-0 text-xs text-pencil">{stage}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-2 border-t border-rule pt-4 text-xs text-pencil">
          <span className="flex gap-1" aria-hidden="true">
            <span className="size-2.5 rounded-full bg-red" />
            <span className="size-2.5 rounded-full border border-red" />
          </span>
          1 of 2 sketch revisions used
        </div>
      </div>
    </WindowFrame>
  );
}

function InvoiceDetail() {
  return (
    <WindowFrame title="Invoice #0042">
      <div className="p-5 text-sm">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-bold">Kiraa</p>
            <p className="text-xs text-pencil">Due when the sketch is approved</p>
          </div>
          <span className="bg-marker/70 px-1 text-xs font-semibold">Unpaid</span>
        </div>
        <dl className="mt-4 space-y-1.5">
          <div className="flex justify-between">
            <dt>Full body OC</dt>
            <dd>$80.00</dd>
          </div>
          <div className="flex justify-between">
            <dt>Simple background</dt>
            <dd>$15.00</dd>
          </div>
          <div className="flex justify-between border-t border-rule pt-2 font-bold">
            <dt>Total</dt>
            <dd>$95.00</dd>
          </div>
        </dl>
        <div className="mt-4 rounded-md border border-rule bg-paper px-3 py-2 text-xs text-pencil">ko-fi.com/mira/commissions</div>
        <div className="mt-3 flex gap-2">
          <span className="flex-1 rounded-md bg-graphite py-2 text-center text-xs font-semibold text-white">Copy payment link</span>
          <span className="rounded-md border border-rule px-3 py-2 text-xs font-semibold">Save PDF</span>
        </div>
      </div>
    </WindowFrame>
  );
}

const steps: { title: string; body: string; detail: ReactNode }[] = [
  {
    title: "A request comes in",
    body: "Paste what the client wants and drop their reference images in. Everything for that piece stays together, so you never scroll back through a DM hunting for “that one picture” again.",
    detail: <RequestDetail />,
  },
  {
    title: "It takes a slot in your queue",
    body: "See who's next, what stage every piece is at, and how many slots you have left before you post “comms open” again.",
    detail: <QueueDetail />,
  },
  {
    title: "Revisions stay with the piece",
    body: "“Make the ears longer.” “Add eye bags.” Write each change down next to the commission it belongs to and tick it off when it's done.",
    detail: <RevisionsDetail />,
  },
  {
    title: "You send the invoice",
    body: "Make an invoice with your own payment link in a couple of clicks, instead of typing “send it to this PayPal email” for the fortieth time.",
    detail: <InvoiceDetail />,
  },
];

export function Flow() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:py-32">
      <h2 className="max-w-xl text-4xl leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl">How a commission moves through artcove</h2>
      <ol className="mt-16 space-y-20 lg:space-y-28">
        {steps.map((s, i) => (
          <li key={s.title} className="relative grid gap-8 pl-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:pl-16">
            <span aria-hidden="true" className={`absolute top-0 left-[15px] w-px bg-blue-light lg:left-[19px] ${i === steps.length - 1 ? "h-10" : "-bottom-20 lg:-bottom-28"}`} />
            <span className="absolute top-0 left-0 grid size-8 place-items-center rounded-full border border-blue bg-paper text-sm font-bold text-blue-ink lg:size-10 lg:text-base">
              {i + 1}
            </span>
            <div className="lg:pt-1.5">
              <h3 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-lg leading-relaxed text-pencil">{s.body}</p>
            </div>
            <div className="max-w-xl" aria-hidden="true">
              {s.detail}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
