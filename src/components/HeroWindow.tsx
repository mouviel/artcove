import { Redlines, Sketch, delay } from "@/components/Sketch";
import { Check, LineRef, PaletteRef, SketchRef, Source, StageTrack, WindowFrame, refShapes } from "@/components/ui";

export function HeroWindow() {
  return (
    <figure className="relative">
      <WindowFrame title="artcove">
        <div className="grid gap-5 p-4 sm:grid-cols-[1fr_1.15fr] sm:p-5">
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold">Kiraa</p>
                <Source from="Discord" />
              </div>
              <p className="text-sm text-pencil">Full body OC, simple background</p>
              <div className="mt-4">
                <StageTrack current="Sketch" />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-pencil">Revision notes</p>
              <ul className="mt-2 space-y-2 text-sm">
                <li className="flex gap-2">
                  <Check done />
                  <span className="text-pencil line-through decoration-pencil/60">Make the ears longer</span>
                </li>
                <li className="flex gap-2">
                  <Check done={false} />
                  <span>Add eye bags, she should look tired</span>
                </li>
              </ul>
              <p className="mt-2 text-xs text-pencil">1 of 2 sketch revisions used</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-pencil">References</p>
              <div className="mt-2 grid max-w-[260px] grid-cols-4 gap-1.5">
                <PaletteRef />
                <SketchRef />
                <LineRef d={refShapes.ear} />
                <LineRef d={refShapes.glass} />
              </div>
            </div>

            <div className="mt-auto flex items-center gap-3 border-t border-rule pt-4 text-sm">
              <div>
                <p className="font-semibold">$95.00</p>
                <p className="text-xs text-pencil">
                  Invoice #0042, <span className="bg-marker/70 px-0.5 text-graphite">unpaid</span>
                </p>
              </div>
              <span className="ml-auto rounded-md bg-graphite px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white">Copy payment link</span>
            </div>
          </div>

          <div className="relative order-first rounded-md border border-rule sm:order-none bg-[radial-gradient(#e6ebf2_1px,transparent_1px)] [background-size:14px_14px]">
            <p className="absolute top-2.5 left-3 text-[11px] text-pencil">Sketch v2</p>
            <div className="relative mx-auto aspect-[320/340] w-full max-w-[340px] pt-4">
              <Sketch className="absolute inset-0 size-full" />
              <Redlines className="absolute inset-0 size-full" />
              <span
                className="redline-note absolute top-[23%] right-0 rotate-[-7deg] font-hand text-lg leading-none font-semibold text-red-ink sm:-right-12 sm:text-xl"
                style={delay(1.3)}
              >
                longer ears!
              </span>
              <span
                className="redline-note absolute top-[67%] left-[3%] rotate-[4deg] font-hand text-base leading-none font-semibold text-red-ink sm:text-lg"
                style={delay(2.4)}
              >
                eye bags pls
              </span>
            </div>
          </div>
        </div>
      </WindowFrame>
      <figcaption className="sr-only">
        A commission in artcove: Kiraa&apos;s full body OC in the sketch stage, with the client&apos;s revision notes drawn in red
        over the sketch, references, and an unpaid invoice.
      </figcaption>
    </figure>
  );
}
