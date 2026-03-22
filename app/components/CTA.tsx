export default function CTA() {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          Stop doing work a machine should do.
        </h2>
        <p className="text-text-muted mb-10 leading-relaxed max-w-lg mx-auto">
          Book a free 30-minute call. We&apos;ll look at your workflows and
          show you exactly what can be automated — no pitch, no pressure.
        </p>
        <a
          href="https://calendly.com/yanick-portal-vfx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(14,165,233,0.3)]"
        >
          Book a Free Consultation
          <svg
            className="w-[18px] h-[18px]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
