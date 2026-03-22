export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">Yanick Wilisky</p>
          <p className="text-sm text-text-dim">
            Portal Creative Management &middot; Agoura Hills, CA
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:yanick@portal-vfx.com"
            className="text-text-muted hover:text-accent transition-colors"
          >
            yanick@portal-vfx.com
          </a>
          <span className="text-border">|</span>
          <a
            href="https://calendly.com/yanick-portal-vfx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border text-center">
        <p className="text-xs text-text-dim">
          &copy; {new Date().getFullYear()} Portal Creative Management. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
