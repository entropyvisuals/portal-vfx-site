const caseStudies = [
  {
    client: "Entropy Visuals",
    url: "entropyvisuals.com",
    industry: "VFX Studio",
    headline: "A full suite of production tools automating every stage of the VFX pipeline",
    results: [
      "Pulse — web dashboard for sales pipeline, project health, schedules, invoices, and a Kanban task board with live ShotGrid integration",
      "Media Scanner — validates incoming vendor deliveries against naming specs, detects orphan files, and queues fixes before media enters the pipeline",
      "inFLOW — the single gateway to ShotGrid, ingesting vendor plates, internal QTs, and client sources into production tracking with auto-thumbnailing and playlist management",
      "Ingestor — routes and copies media files to the correct shot folders using pipeline-aware path resolution",
    ],
    tools: ["Pulse", "Media Scanner", "inFLOW", "Ingestor", "ShotGrid API"],
  },
  {
    client: "VFX Callsheet",
    url: "vfxcallsheet.com",
    industry: "SaaS Platform",
    headline: "Built an entire intelligence platform from the ground up",
    results: [
      "6,000+ productions tracked with real-time status updates",
      "Automated data enrichment from 5+ industry sources",
      "Newsletter system with subscriber management and analytics",
      "Tax incentive database covering 40+ countries",
    ],
    tools: ["Next.js Platform", "Data Pipeline", "Email System", "API Integrations"],
  },
];

export default function CaseStudies() {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent mb-4 text-center">
          Case Studies
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 tracking-tight">
          Real systems. Real results.
        </h2>
        <p className="text-text-muted text-center mb-16 max-w-xl mx-auto">
          We don&apos;t do mockups. These are production systems running right now.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="rounded-xl border border-border bg-bg-card p-8 hover:border-border-hover transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{study.client}</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                  {study.industry}
                </span>
              </div>

              <p className="text-sm text-text-dim mb-5">{study.url}</p>

              <p className="text-text-muted mb-6 leading-relaxed">
                {study.headline}
              </p>

              <ul className="space-y-3 mb-6">
                {study.results.map((result) => (
                  <li key={result} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-text-muted">{result}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-dim"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
