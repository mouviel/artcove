import type { ReactNode } from "react";
import { Sketch } from "@/components/Sketch";

// Small pieces of the artcove app UI, reused across the page's product shots.

export function WindowFrame({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[10px] border border-rule bg-sheet shadow-[0_1px_0_#fff_inset,0_24px_60px_-28px_rgba(33,34,39,.35)] ${className}`}>
      <div className="flex h-9 items-center border-b border-rule pl-3.5 text-xs text-pencil">
        <span>{title}</span>
        <span className="ml-auto flex h-full" aria-hidden="true">
          {["M3 8h10", "M4 4h8v8H4z", "M4 4l8 8M12 4l-8 8"].map((d) => (
            <span key={d} className="grid w-10 place-items-center">
              <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d={d} />
              </svg>
            </span>
          ))}
        </span>
      </div>
      {children}
    </div>
  );
}

export const stages = ["Request", "Queue", "Sketch", "Color", "Done"] as const;

export function StageTrack({ current }: { current: (typeof stages)[number] }) {
  const at = stages.indexOf(current);
  return (
    <ol className="flex gap-1" aria-label={`Stage: ${current}`}>
      {stages.map((s, i) => (
        <li key={s} className="flex-1">
          <span className={`block h-1 rounded-full ${i < at ? "bg-blue" : i === at ? "bg-[linear-gradient(90deg,var(--color-blue)_55%,var(--color-blue-light)_55%)]" : "bg-blue-light"}`} />
          <span className={`mt-1.5 block text-[11px] ${i === at ? "font-semibold text-graphite" : "text-pencil"}`}>{s}</span>
        </li>
      ))}
    </ol>
  );
}

const sourceStyle = {
  Discord: "bg-[#eceefe] text-[#4450c4]",
  X: "bg-[#eef0f3] text-graphite",
  VGen: "bg-[#eff8dc] text-[#4d6b0f]",
  "Ko-fi": "bg-[#e3f3fb] text-[#1d6f93]",
} as const;

export function Source({ from }: { from: keyof typeof sourceStyle }) {
  return <span className={`rounded px-1.5 py-px text-[11px] font-medium ${sourceStyle[from]}`}>{from}</span>;
}

export function Check({ done }: { done: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-px grid size-4 shrink-0 place-items-center rounded-[4px] border ${done ? "border-blue bg-blue text-white" : "border-[#c5cbd5] bg-sheet"}`}
    >
      {done && (
        <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2.5 6.2 5 8.5l4.5-5" />
        </svg>
      )}
    </span>
  );
}

// Reference thumbnails made of the things clients actually send: a palette, a pose scribble, a prop.
export function PaletteRef() {
  return (
    <div className="grid aspect-square grid-cols-2 overflow-hidden rounded-md border border-rule">
      {["#7b5cc4", "#f08a4b", "#2d2340", "#f6e1cf"].map((c) => (
        <span key={c} style={{ background: c }} />
      ))}
    </div>
  );
}

export function LineRef({ d }: { d: string }) {
  return (
    <div className="grid aspect-square place-items-center rounded-md border border-rule bg-[#fafbfc]">
      <svg viewBox="0 0 40 40" className="size-4/5" fill="none" stroke="#212227" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </div>
  );
}

// An earlier WIP of the same character, as clients often send back.
export function SketchRef() {
  return (
    <div className="aspect-square overflow-hidden rounded-md border border-rule bg-[#fafbfc] p-0.5">
      <Sketch className="size-full" stroke="#212227" />
    </div>
  );
}

export const refShapes = {
  ear: "M12 34 C12 22 14 12 18 6 C22 12 26 20 28 34 M16 30 C16 22 17 16 19 12",
  glass: "M13 8 H27 C26 16 24 20 24 24 C24 28 27 30 28 34 H12 C13 30 16 28 16 24 C16 20 14 16 13 8 Z M14 14 H26",
  // chibi doodles for a two-character request
  braid:
    "M20 5 C27 5 31 10 31 16 C31 22 26 26 20 26 C14 26 9 22 9 16 C9 10 13 5 20 5 Z M11 12 C15 9 24 8 29 13 M16 18 v1.5 M24 18 v1.5 M29 20 C33 24 32 29 30 32 C29 34 31 36 33 36 M15 26 L13 34 H27 L25 26",
  scar:
    "M20 5 C27 5 31 10 31 16 C31 22 26 26 20 26 C14 26 9 22 9 16 C9 10 13 5 20 5 Z M10 13 C12 7 18 5 22 8 C25 5 30 8 30 13 M16 18 v1.5 M24 18 v1.5 M22 14 L27 22 M15 26 L13 34 H27 L25 26",
};
