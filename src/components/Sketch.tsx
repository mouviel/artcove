import type { CSSProperties } from "react";

// A loose non-photo-blue underdrawing of a fox-eared OC, the kind of WIP a client gets sent.
const underdrawing = [
  // construction lines
  { d: "M160 70 C157 130 157 190 161 226", o: 0.35 },
  { d: "M100 158 C140 154 180 154 222 160", o: 0.35 },
  // head, two passes
  { d: "M104 152 C102 104 130 80 162 80 C196 80 222 106 220 152 C218 198 192 224 160 224 C127 224 106 200 104 152 Z", o: 0.9 },
  { d: "M108 146 C110 102 136 84 166 84 C198 86 218 112 216 156 C212 196 188 220 156 220", o: 0.45 },
  // fox ears
  { d: "M114 112 C106 88 100 62 98 40 C116 54 132 70 146 88", o: 0.9 },
  { d: "M110 108 C104 82 100 58 102 42", o: 0.45 },
  { d: "M122 98 C116 82 112 68 110 58", o: 0.5 },
  { d: "M204 108 C214 86 224 62 230 40 C212 52 194 68 178 86", o: 0.9 },
  { d: "M196 98 C204 84 212 70 218 58", o: 0.5 },
  // fringe
  { d: "M110 126 C126 104 146 122 156 98 C166 122 188 104 196 118 C202 110 210 116 214 126", o: 0.85 },
  { d: "M140 110 C136 124 132 132 124 140", o: 0.6 },
  { d: "M176 108 C182 122 190 130 200 136", o: 0.6 },
  // eyes and mouth
  { d: "M128 160 C134 152 146 152 152 160", o: 0.9 },
  { d: "M170 160 C176 152 188 152 194 160", o: 0.9 },
  { d: "M136 162 C136 170 146 170 146 162", o: 0.7 },
  { d: "M178 162 C178 170 188 170 188 162", o: 0.7 },
  { d: "M152 194 C158 198 164 198 170 194", o: 0.85 },
  // neck and shoulders
  { d: "M142 220 C142 232 140 244 138 252", o: 0.85 },
  { d: "M180 220 C180 232 182 244 184 252", o: 0.85 },
  { d: "M138 252 C100 258 72 282 60 336", o: 0.85 },
  { d: "M184 252 C222 258 250 282 262 336", o: 0.85 },
  { d: "M130 262 C146 276 176 276 192 262", o: 0.55 },
];

export function Sketch({ className, stroke = "#5aa7e3" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 320 340" className={className} role="img" aria-label="Sketch of a fox-eared character">
      <g fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {underdrawing.map((p) => (
          <path key={p.d} d={p.d} opacity={p.o} />
        ))}
      </g>
    </svg>
  );
}

export const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

const redlines = [
  // longer ears: a taller ear drawn over the sketched one, then an arrow
  { d: "M204 104 C218 72 230 36 242 6 C224 22 200 44 180 74", at: 0.5 },
  { d: "M268 70 C272 50 266 30 252 18", at: 1 },
  { d: "M252 18 L253 32 M252 18 L265 23", at: 1.35 },
  // eye bags: a loop under the left eye and a leader line out to the note
  { d: "M153 167 C155 174 147 179 139 178 C131 177 127 171 131 167 C135 164 143 164 149 167", at: 1.7 },
  { d: "M130 175 C106 194 78 210 40 222", at: 2.05 },
];

// Client revision notes, drawn in red over the WIP. Coordinates share the Sketch viewBox.
export function Redlines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 340" className={className} aria-hidden="true" overflow="visible">
      <g fill="none" stroke="#e03e57" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        {redlines.map((r) => (
          <path key={r.d} d={r.d} className="redline-path" pathLength={1} style={delay(r.at)} />
        ))}
      </g>
    </svg>
  );
}
