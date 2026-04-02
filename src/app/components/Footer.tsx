export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-16 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-xl tracking-tight" style={{ fontWeight: 600 }}>
            Fumav
          </div>

          <div className="flex flex-wrap items-center gap-10">
            <a href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Product
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              How it works
            </a>
            <a href="#why-now" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Why now
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </div>

          <a
            href="mailto:aanjanaye@fumav.xyz"
            className="group px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              Talk to us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          © 2026 Fumav. Instant settlement for gaming commerce.
        </div>
      </div>
    </footer>
  );
}
