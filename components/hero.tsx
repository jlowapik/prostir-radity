export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-forest-800"
        style={{
          backgroundImage: "url('/images/main-background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* Dark scrim — flattens the busy photo into a consistent value so every
          text element sits on the same tone. Strongest at top+bottom, lighter mid. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,25,20,0.55) 0%, rgba(20,25,20,0.28) 45%, rgba(20,25,20,0.6) 100%)",
        }}
      />

      <div className="container-narrow relative flex w-full flex-col items-center pt-28 pb-24 md:pt-36 md:pb-32">
        {/* Supporting headline — H1, capped, normal tracking, breathing room */}
        <h1
          className="max-w-3xl text-center font-display text-4xl font-medium leading-[1.05] text-cream-50 sm:text-5xl md:text-6xl lg:text-[4.5rem]"
        >
          Трансформаційний кемп
          <br className="hidden sm:block" />
          <span className="text-ember-400"> на Прикарпатті</span>
        </h1>

        {/* Meta line — small, uppercase, tracked — sans, not italic */}
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-cream-100/80 md:text-sm">
          Для дітей 7–16 років · З 2015 року
        </p>

        {/* Body */}
        <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-cream-100/90 md:text-lg">
          Одинадцять днів у Карпатах, розроблені психотерапевтами, митцями та
          музикантами. Без гаджетів. З лісом, водою і командою, якій довіряєш.
        </p>

        {/* CTAs — matching size, real hover/focus, secondary with glass */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#schedule"
            className="inline-flex h-12 items-center justify-center rounded-full bg-ember-500 px-8 text-sm font-medium uppercase tracking-wider text-forest-800 shadow-lg shadow-ember-500/30 transition-all hover:-translate-y-0.5 hover:bg-ember-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-800"
          >
            Заїзди 2026
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-cream-50/50 bg-cream-50/10 px-8 text-sm font-medium uppercase tracking-wider text-cream-50 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-cream-50 hover:bg-cream-50/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-800"
          >
            Залишити заявку
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#philosophy"
        aria-label="Прокрутити донизу"
        className="group absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/80 transition-colors hover:text-cream-50"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em]">нижче</span>
          <svg
            className="h-5 w-5 animate-bounce"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 8l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </section>
  );
}
