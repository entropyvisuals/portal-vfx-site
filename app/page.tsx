import Link from "next/link";

// ─── Proof: real builds with dramatic visuals + metrics ───
type Glyph = "score" | "barcode" | "receipt" | "globe";
// image: drop a real screenshot path (e.g. "/built/piano.png") to replace the SVG glyph.
// Recommended size: 1280x880 landscape, dark background preferred.
const PROOF: { who: string; what: string; glyph: Glyph; image?: string }[] = [
  {
    who: "For a piano teacher.",
    glyph: "score",
    image: undefined,
    what: "Built an app that reads sheet music and plays scores aloud for her students. Tempo, notes, dynamics. Runs on her iPad in the studio, every lesson.",
  },
  {
    who: "For a track and field team.",
    glyph: "barcode",
    image: undefined,
    what: "Built real-time barcode scanning for athlete results. Scoreboard is current before the next heat lines up. Thirty minutes of clipboard work per event, gone.",
  },
  {
    who: "For a solo business owner.",
    glyph: "receipt",
    image: undefined,
    what: "Built an autonomous flow over email, receipts, tasks, and forms. Books stay current. Quarterly filings draft themselves. Replies go out. The back office runs while she does the actual job.",
  },
  {
    who: "For a production company bidding across currencies and tax regimes.",
    glyph: "globe",
    image: undefined,
    what: "Built a bidding engine with live tax incentive comparison and multi-currency financial modeling. Defensible numbers in hours instead of days.",
  },
];

function ProofArt({ glyph }: { glyph: Glyph }) {
  const base = { viewBox: "0 0 320 220", className: "w-full h-auto" };
  const a = "var(--accent)";
  if (glyph === "score") return (
    <svg {...base} aria-hidden>
      {/* Staff lines */}
      {[80, 100, 120, 140, 160].map(y => (
        <line key={y} x1="10" y1={y} x2="310" y2={y} stroke={a} strokeWidth="0.6" opacity="0.35" />
      ))}
      {/* Treble clef area (abstract) */}
      <path d="M 22 160 C 22 120, 40 110, 40 120 C 40 150, 22 150, 22 140 C 22 100, 44 85, 44 140 L 44 168 C 44 182, 34 184, 34 172" stroke={a} strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* Notes */}
      <g stroke={a} fill={a}>
        <ellipse cx="78" cy="140" rx="6" ry="4.5" transform="rotate(-18 78 140)" />
        <line x1="83" y1="140" x2="83" y2="92" strokeWidth="1.2" />
        <ellipse cx="110" cy="120" rx="6" ry="4.5" transform="rotate(-18 110 120)" />
        <line x1="115" y1="120" x2="115" y2="72" strokeWidth="1.2" />
        <ellipse cx="140" cy="130" rx="6" ry="4.5" transform="rotate(-18 140 130)" fill="none" strokeWidth="1.5" />
        <line x1="145" y1="130" x2="145" y2="82" strokeWidth="1.2" />
        <ellipse cx="172" cy="110" rx="6" ry="4.5" transform="rotate(-18 172 110)" />
        <line x1="177" y1="110" x2="177" y2="62" strokeWidth="1.2" />
        <ellipse cx="204" cy="140" rx="6" ry="4.5" transform="rotate(-18 204 140)" />
        <line x1="209" y1="140" x2="209" y2="92" strokeWidth="1.2" />
        <ellipse cx="238" cy="120" rx="6" ry="4.5" transform="rotate(-18 238 120)" fill="none" strokeWidth="1.5" />
        <line x1="243" y1="120" x2="243" y2="72" strokeWidth="1.2" />
        <ellipse cx="272" cy="150" rx="6" ry="4.5" transform="rotate(-18 272 150)" />
        <line x1="277" y1="150" x2="277" y2="102" strokeWidth="1.2" />
      </g>
      {/* Beam */}
      <line x1="83" y1="92" x2="177" y2="62" stroke={a} strokeWidth="3" />
      {/* Playhead: animated sweep */}
      <g className="pulse">
        <line x1="160" y1="66" x2="160" y2="176" stroke={a} strokeWidth="1.5" opacity="0.85" />
        <circle cx="160" cy="66" r="3" fill={a} />
      </g>
      {/* Tempo label */}
      <g fontFamily="var(--font-geist-mono), monospace" fontSize="10" fill={a} opacity="0.7" letterSpacing="1">
        <text x="10" y="40">♪ = 120</text>
        <text x="10" y="200" fontSize="9" opacity="0.5">ANDANTE · F MAJ</text>
      </g>
    </svg>
  );
  if (glyph === "barcode") return (
    <svg {...base} aria-hidden>
      {/* Stopwatch outer */}
      <circle cx="62" cy="110" r="52" stroke={a} strokeWidth="1.25" fill="none" opacity="0.6" />
      <circle cx="62" cy="110" r="42" stroke={a} strokeWidth="0.6" fill="none" opacity="0.3" />
      <line x1="62" y1="58" x2="62" y2="64" stroke={a} strokeWidth="2" />
      <line x1="62" y1="156" x2="62" y2="162" stroke={a} strokeWidth="2" />
      <line x1="10" y1="110" x2="16" y2="110" stroke={a} strokeWidth="2" />
      <line x1="108" y1="110" x2="114" y2="110" stroke={a} strokeWidth="2" />
      {/* Stopwatch hand */}
      <g className="spin-fast" style={{ transformOrigin: "62px 110px" }}>
        <line x1="62" y1="110" x2="62" y2="74" stroke={a} strokeWidth="1.8" />
        <circle cx="62" cy="110" r="3" fill={a} />
      </g>
      {/* Digital readout */}
      <g fontFamily="var(--font-geist-mono), monospace" letterSpacing="2">
        <text x="62" y="118" fontSize="13" fill={a} textAnchor="middle" opacity="0.85">00:12.47</text>
      </g>
      {/* Barcode */}
      <g stroke={a} opacity="0.9">
        {[140,145,149,154,160,167,173,178,184,190,196,203,211,217,223,230,238,244,250,257,264,272,280,287,294,302].map((x, i) => (
          <line key={i} x1={x} y1="70" x2={x} y2="150" strokeWidth={i % 3 === 0 ? 2.8 : i % 2 === 0 ? 1.3 : 0.8} />
        ))}
      </g>
      {/* Scanner line */}
      <line x1="135" y1="70" x2="135" y2="150" stroke={a} strokeWidth="0.8" opacity="0.4" />
      <line x1="310" y1="70" x2="310" y2="150" stroke={a} strokeWidth="0.8" opacity="0.4" />
      <rect x="135" y="68" width="175" height="4" fill={a} opacity="0.15" />
      <rect x="135" y="148" width="175" height="4" fill={a} opacity="0.15" />
      {/* Athlete label */}
      <g fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill={a} opacity="0.7" letterSpacing="1">
        <text x="140" y="165">BIB · 0247</text>
        <text x="140" y="180" opacity="0.5">HEAT 3 · LANE 4</text>
      </g>
    </svg>
  );
  if (glyph === "receipt") return (
    <svg {...base} aria-hidden>
      {/* Stacked receipts on left */}
      <g>
        <path d="M 28 66 L 96 66 L 96 180 L 90 174 L 84 180 L 78 174 L 72 180 L 66 174 L 60 180 L 54 174 L 48 180 L 42 174 L 34 180 L 28 174 Z" stroke={a} strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M 22 60 L 90 60 L 90 174 L 84 168 L 78 174 L 72 168 L 66 174 L 60 168 L 54 174 L 48 168 L 42 174 L 36 168 L 28 174 L 22 168 Z" stroke={a} strokeWidth="1.2" fill="none" opacity="0.85" />
        <line x1="30" y1="76" x2="82" y2="76" stroke={a} strokeWidth="0.6" opacity="0.6" />
        <line x1="30" y1="90" x2="82" y2="90" stroke={a} strokeWidth="0.6" opacity="0.6" />
        <line x1="30" y1="104" x2="74" y2="104" stroke={a} strokeWidth="0.6" opacity="0.6" />
        <line x1="30" y1="118" x2="82" y2="118" stroke={a} strokeWidth="0.6" opacity="0.6" />
        <line x1="30" y1="132" x2="66" y2="132" stroke={a} strokeWidth="0.6" opacity="0.6" />
        <line x1="30" y1="146" x2="82" y2="146" stroke={a} strokeWidth="1.2" />
      </g>
      {/* Arrow */}
      <g stroke={a} strokeWidth="1.2" opacity="0.8">
        <line x1="108" y1="120" x2="188" y2="120" />
        <polyline points="176,112 188,120 176,128" fill="none" />
      </g>
      {/* Ledger on right */}
      <g stroke={a}>
        <rect x="198" y="52" width="108" height="136" stroke={a} strokeWidth="1.2" fill="none" />
        <line x1="198" y1="72" x2="306" y2="72" strokeWidth="0.8" />
        <g fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill={a} letterSpacing="1">
          <text x="205" y="66" opacity="0.9">LEDGER · Q3</text>
          {[86, 102, 118, 134, 150, 166].map((y, i) => (
            <g key={y}>
              <text x="205" y={y} opacity="0.75">MAR {10 + i}</text>
              <text x="252" y={y} opacity="0.6">$ {(220 + i * 43)}.{(i * 7) % 100}</text>
              <g transform={`translate(290 ${y - 6})`}>
                <polyline points="0,4 3,7 8,0" stroke={a} strokeWidth="1.3" fill="none" />
              </g>
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
  // globe
  return (
    <svg {...base} aria-hidden>
      {/* Abstract continents via ellipses */}
      <g stroke={a} fill="none">
        <ellipse cx="160" cy="110" rx="130" ry="90" strokeWidth="1" opacity="0.5" />
        <ellipse cx="160" cy="110" rx="90" ry="90" strokeWidth="0.6" opacity="0.3" />
        <ellipse cx="160" cy="110" rx="50" ry="90" strokeWidth="0.6" opacity="0.2" />
        <line x1="30" y1="110" x2="290" y2="110" strokeWidth="0.5" opacity="0.4" />
        <line x1="40" y1="80" x2="280" y2="80" strokeWidth="0.4" opacity="0.25" />
        <line x1="40" y1="140" x2="280" y2="140" strokeWidth="0.4" opacity="0.25" />
      </g>
      {/* Currency nodes with symbols */}
      <g>
        <circle cx="90" cy="90" r="16" fill="var(--background)" stroke={a} strokeWidth="1.2" />
        <text x="90" y="95" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="14" fill={a}>£</text>
        <circle cx="180" cy="80" r="16" fill="var(--background)" stroke={a} strokeWidth="1.2" />
        <text x="180" y="85" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="14" fill={a}>$</text>
        <circle cx="240" cy="120" r="16" fill="var(--background)" stroke={a} strokeWidth="1.2" />
        <text x="240" y="125" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="14" fill={a}>€</text>
        <circle cx="130" cy="150" r="16" fill="var(--background)" stroke={a} strokeWidth="1.2" />
        <text x="130" y="155" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="12" fill={a}>¢</text>
      </g>
      {/* Connections */}
      <g stroke={a} strokeWidth="0.8" fill="none" opacity="0.6" strokeDasharray="3 4">
        <line x1="90" y1="90" x2="180" y2="80" />
        <line x1="180" y1="80" x2="240" y2="120" />
        <line x1="240" y1="120" x2="130" y2="150" />
        <line x1="130" y1="150" x2="90" y2="90" />
      </g>
      {/* Incentive %'s */}
      <g fontFamily="var(--font-geist-mono), monospace" fontSize="9" fill={a} opacity="0.8" letterSpacing="1">
        <text x="40" y="58">UK · 25.5%</text>
        <text x="200" y="42">US · 40%</text>
        <text x="190" y="178">EU · 30%</text>
        <text x="62" y="200">ON · 21.5%</text>
      </g>
    </svg>
  );
}

function HeroAperture() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[55%] flex items-center justify-end md:justify-center overflow-hidden opacity-90" aria-hidden>
      <svg viewBox="0 0 600 600" className="w-[110vw] md:w-[90%] max-w-[780px] aspect-square">
        {/* Outer concentric rings, rotating different speeds */}
        <g className="spin-slow" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="280" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.25" />
          <circle cx="300" cy="300" r="280" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.1" strokeDasharray="2 30" />
        </g>
        <g className="spin-rev" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="220" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.35" />
          <circle cx="300" cy="300" r="220" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.15" strokeDasharray="120 40" />
        </g>
        <g className="spin-slow pulse" style={{ transformOrigin: "300px 300px" }}>
          <circle cx="300" cy="300" r="170" stroke="var(--accent)" strokeWidth="1.25" fill="none" opacity="0.55" />
        </g>
        {/* Aperture iris blades */}
        <g className="spin-fast" style={{ transformOrigin: "300px 300px" }}>
          {[0, 60, 120, 180, 240, 300].map(a => (
            <line key={a}
              x1="300" y1="300"
              x2={300 + 150 * Math.cos((a * Math.PI) / 180)}
              y2={300 + 150 * Math.sin((a * Math.PI) / 180)}
              stroke="var(--accent)" strokeWidth="1" opacity="0.25"
            />
          ))}
        </g>
        {/* Inner core */}
        <circle cx="300" cy="300" r="80" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.6" />
        <circle cx="300" cy="300" r="60" stroke="var(--accent)" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="300" cy="300" r="4" fill="var(--accent)" opacity="0.9" />
        {/* Crosshairs */}
        <line x1="300" y1="20" x2="300" y2="80" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        <line x1="300" y1="520" x2="300" y2="580" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        <line x1="20" y1="300" x2="80" y2="300" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
        <line x1="520" y1="300" x2="580" y2="300" stroke="var(--accent)" strokeWidth="0.5" opacity="0.4" />
      </svg>
    </div>
  );
}

// ─── Process: four steps with dramatic glyphs ───
type ProcessGlyph = "talk" | "plan" | "build" | "own";
const PROCESS: { num: string; step: string; body: string; glyph: ProcessGlyph }[] = [
  {
    num: "01",
    step: "Conversation",
    glyph: "talk",
    body: "You describe the problem. We ask questions. We tell you honestly whether we can help, what shape the solution takes, and what it is likely to cost.",
  },
  {
    num: "02",
    step: "Proposal",
    glyph: "plan",
    body: "If we are a fit, we send a scoped plan: what gets built, how long it takes, what it costs, what success looks like. No retainers. No open-ended billing.",
  },
  {
    num: "03",
    step: "Build",
    glyph: "build",
    body: "We design, build, test, and deliver. You review milestones. You use the tool before it ships. Nothing gets handed off until it actually works in your operation.",
  },
  {
    num: "04",
    step: "Ownership",
    glyph: "own",
    body: "On delivery, the code is yours. It runs on your infrastructure. You own the data, the accounts, the repository. Portal is out of the critical path unless you keep us in it.",
  },
];

function ProcessArt({ glyph }: { glyph: ProcessGlyph }) {
  const a = "var(--accent)";
  const base = { viewBox: "0 0 200 140", className: "w-full h-auto" };
  if (glyph === "talk") return (
    <svg {...base} aria-hidden>
      <path d="M 18 30 L 18 80 Q 18 86 24 86 L 62 86 L 74 102 L 74 86 L 88 86 Q 94 86 94 80 L 94 30 Q 94 24 88 24 L 24 24 Q 18 24 18 30 Z" stroke={a} strokeWidth="1.2" fill="none" opacity="0.75" />
      <circle cx="35" cy="55" r="2.5" fill={a} />
      <circle cx="52" cy="55" r="2.5" fill={a} />
      <circle cx="69" cy="55" r="2.5" fill={a} className="pulse" />
      <path d="M 110 60 L 110 106 Q 110 112 116 112 L 170 112 Q 176 112 176 106 L 176 60 Q 176 54 170 54 L 134 54 L 122 38 L 122 54 L 116 54 Q 110 54 110 60 Z" stroke={a} strokeWidth="1.2" fill="none" opacity="0.95" />
      <g stroke={a} strokeWidth="1.2" opacity="0.85">
        <polyline points="122,82 130,88 138,72 146,96 154,80 162,86" fill="none" />
      </g>
    </svg>
  );
  if (glyph === "plan") return (
    <svg {...base} aria-hidden>
      <path d="M 44 16 L 136 16 L 156 36 L 156 126 L 44 126 Z" stroke={a} strokeWidth="1.2" fill="none" opacity="0.9" />
      <path d="M 136 16 L 136 36 L 156 36" stroke={a} strokeWidth="1.2" fill="none" opacity="0.55" />
      <line x1="58" y1="52" x2="130" y2="52" stroke={a} strokeWidth="0.8" opacity="0.4" />
      <g fontFamily="var(--font-geist-mono), monospace" fontSize="8" fill={a} letterSpacing="1">
        <text x="58" y="48" opacity="0.8">SCOPE · BUILD · SHIP</text>
      </g>
      <g>
        {[66, 82, 98, 114].map((y, i) => (
          <g key={y}>
            <polyline points={`56,${y} 60,${y + 4} 67,${y - 3}`} stroke={a} strokeWidth="1.6" fill="none" />
            <line x1="74" y1={y} x2={130 - i * 6} y2={y} stroke={a} strokeWidth="0.8" opacity={0.65 - i * 0.08} />
          </g>
        ))}
      </g>
    </svg>
  );
  if (glyph === "build") return (
    <svg {...base} aria-hidden>
      <g stroke={a} strokeWidth="1" fill="none">
        <rect x="18" y="32" width="36" height="24" rx="2" opacity="0.85" />
        <rect x="82" y="18" width="36" height="24" rx="2" opacity="0.85" />
        <rect x="146" y="42" width="36" height="24" rx="2" opacity="0.85" />
        <rect x="32" y="82" width="36" height="24" rx="2" opacity="0.85" />
        <rect x="112" y="92" width="36" height="24" rx="2" opacity="0.85" />
      </g>
      <g stroke={a} strokeWidth="0.8" fill="none" opacity="0.65" strokeDasharray="3 3">
        <line x1="54" y1="44" x2="82" y2="30" />
        <line x1="118" y1="30" x2="146" y2="54" />
        <line x1="36" y1="56" x2="50" y2="82" />
        <line x1="100" y1="42" x2="130" y2="92" />
        <line x1="68" y1="94" x2="112" y2="104" />
        <line x1="164" y1="66" x2="148" y2="92" />
      </g>
      <g fill={a}>
        <circle cx="36" cy="44" r="2" />
        <circle cx="100" cy="30" r="2" className="pulse" />
        <circle cx="164" cy="54" r="2" />
        <circle cx="50" cy="94" r="2" />
        <circle cx="130" cy="104" r="2" />
      </g>
    </svg>
  );
  // own
  return (
    <svg {...base} aria-hidden>
      <rect x="46" y="20" width="108" height="80" rx="4" stroke={a} strokeWidth="1.2" fill="none" opacity="0.95" />
      <line x1="58" y1="38" x2="134" y2="38" stroke={a} strokeWidth="0.8" opacity="0.5" />
      <line x1="58" y1="52" x2="140" y2="52" stroke={a} strokeWidth="0.8" opacity="0.5" />
      <line x1="58" y1="66" x2="120" y2="66" stroke={a} strokeWidth="0.8" opacity="0.5" />
      <g transform="translate(98 76)">
        <rect x="0" y="0" width="40" height="14" stroke={a} strokeWidth="1.2" fill="none" />
        <text x="20" y="10" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="7" fill={a} letterSpacing="1.5">YOURS</text>
      </g>
      <g transform="translate(36 104)" className="pulse">
        <circle cx="14" cy="14" r="10" stroke={a} strokeWidth="1.4" fill="none" />
        <circle cx="14" cy="14" r="4" fill={a} />
        <line x1="24" y1="14" x2="60" y2="14" stroke={a} strokeWidth="1.4" />
        <line x1="52" y1="14" x2="52" y2="20" stroke={a} strokeWidth="1.4" />
        <line x1="58" y1="14" x2="58" y2="18" stroke={a} strokeWidth="1.4" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[96vh] flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
        <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden />
        <HeroAperture />

        <header className="relative flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground z-10">
          <span className="text-accent">◆ PORTAL</span>
          <nav className="hidden md:flex gap-8">
            <a href="#built" className="hover:text-foreground">Built for</a>
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#start" className="hover:text-foreground text-accent hover:text-accent-strong">
              Book a call →
            </a>
          </nav>
        </header>

        <div className="relative z-10 max-w-3xl py-12">
          <p className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-10 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent"></span>
            Portal Creative Management
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-[4.8rem] font-light leading-[1.0] tracking-tight text-balance">
            Business problems, solved with{" "}
            <span className="text-accent">custom integrations you own.</span>
          </h1>

          <p className="mt-10 text-xl md:text-2xl font-light text-muted-foreground leading-relaxed text-pretty">
            You describe what is broken. Portal builds the fix. When it ships,
            the code is yours, it runs on your infrastructure, and it is paid
            for once.
          </p>
        </div>

        <footer className="relative z-10 flex items-center justify-between font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <span>Est. 2024 · Oak Park, CA</span>
          <span className="hidden md:inline">↓</span>
          <a href="#start" className="text-accent hover:text-accent-strong">
            hello@portal-vfx.com
          </a>
        </footer>
      </section>

      {/* ─── PROOF / BUILT FOR ─── */}
      <section id="built" className="border-t border-border px-6 md:px-12 lg:px-20 py-28 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" aria-hidden />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Built for
            </h2>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              01 &nbsp; Real work
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
            {PROOF.map((p, i) => (
              <article
                key={i}
                className="bg-background p-8 md:p-10 flex flex-col gap-6 hover:bg-muted/40 transition-colors group"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                  0{i + 1}
                </span>

                <div className="relative border border-border rounded-sm overflow-hidden bg-muted/20 text-accent group-hover:border-accent/40 transition-colors aspect-[16/11]">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.who}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
                      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
                        <ProofArt glyph={p.glyph} />
                      </div>
                    </>
                  )}
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-3">
                    {p.who}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
                    {p.what}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section id="how" className="border-t border-border px-6 md:px-12 lg:px-20 py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" aria-hidden />
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-baseline justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              How it works
            </h2>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              02 &nbsp; Process
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {PROCESS.map((s) => (
              <article
                key={s.num}
                className="bg-background p-6 md:p-8 flex flex-col gap-5 hover:bg-muted/40 transition-colors group"
              >
                <div className="relative border border-border rounded-sm overflow-hidden bg-muted/20 text-accent p-4 group-hover:border-accent/40 transition-colors">
                  <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
                  <div className="relative">
                    <ProcessArt glyph={s.glyph} />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    {s.num}
                  </span>
                  <h3 className="mt-3 text-xl md:text-2xl font-light mb-3 tracking-tight">
                    {s.step}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-sm md:text-base">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ─── START A CONVERSATION ─── */}
      <section
        id="start"
        className="border-t border-border px-6 md:px-12 lg:px-20 py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" aria-hidden />
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Start a conversation
            </h2>
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              03 &nbsp; Start
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="https://calendly.com/yanick-portal-vfx/business-automation-consultation"
              target="_blank"
              rel="noreferrer"
              className="group border border-accent/40 hover:border-accent p-8 transition-colors block"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
                Book 30 minutes →
              </p>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:text-accent transition-colors">
                Discovery call
              </h3>
              <p className="text-muted-foreground">
                Free. Thirty minutes. Bring the problem you want solved.
              </p>
            </a>

            <a
              href="mailto:hello@portal-vfx.com"
              className="group border border-border hover:border-accent p-8 transition-colors block"
            >
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3">
                Email →
              </p>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:text-accent transition-colors">
                hello@portal-vfx.com
              </h3>
              <p className="text-muted-foreground">
                Read by a human. Same day most days.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-10 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground flex flex-wrap gap-4 justify-between">
        <span>© Portal Creative Management · Oak Park, CA</span>
        <div className="flex gap-6">
          <a href="https://yanickwilisky.com" className="hover:text-foreground">
            Yanick ↗
          </a>
          <Link href="/" className="hover:text-foreground">
            ↑ Top
          </Link>
        </div>
      </footer>
    </main>
  );
}
