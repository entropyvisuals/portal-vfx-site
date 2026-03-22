export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-[14px] bg-gradient-to-br from-accent to-accent-dark text-white text-2xl font-bold mb-8">
          P
        </div>

        <p className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-accent mb-6">
          Portal Creative Management
        </p>

        <h1 className="text-[clamp(2.2rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white mb-6">
          We automate your business.
        </h1>

        <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-lg mx-auto">
          Custom automation systems that handle the work you shouldn&apos;t be
          doing manually. So you can focus on what actually grows your business.
        </p>

        <a
          href="https://calendly.com/yanick-portal-vfx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(14,165,233,0.3)]"
        >
          Book a Free Consultation
          <svg
            className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-1"
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
