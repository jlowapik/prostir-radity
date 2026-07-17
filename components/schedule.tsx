const SESSIONS = [
  { n: "I", label: "Перший заїзд", dates: "16.06 — 26.06", month: "червень" },
  { n: "II", label: "Другий заїзд", dates: "03.07 — 13.07", month: "липень" },
  { n: "III", label: "Третій заїзд", dates: "24.07 — 03.08", month: "липень–серпень" },
  { n: "IV", label: "Четвертий заїзд", dates: "14.08 — 24.08", month: "серпень" },
];

export function Schedule() {
  return (
    <section id="schedule" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-narrow">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="heading-eyebrow">Розклад 2026</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Чотири заїзди
              <br />
              з <span className="italic text-ember-500">червня по серпень</span>
            </h2>
          </div>
          <p className="max-w-sm text-forest-600">
            До 15 дітей у групі. 11 днів у горах — з природою, музикою й
            командою під щоденною супервізією.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SESSIONS.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col rounded-3xl border border-forest-500/15 bg-cream-100/50 p-8 transition-all hover:-translate-y-1 hover:border-ember-500/40 hover:bg-cream-100 hover:shadow-lg"
            >
              <span className="font-display text-6xl leading-none text-ember-500/70 transition-colors group-hover:text-ember-500">
                {s.n}
              </span>
              <p className="mt-6 text-xs uppercase tracking-widest text-forest-500">
                {s.month}
              </p>
              <p className="mt-2 font-display text-2xl text-forest-700">
                {s.label}
              </p>
              <p className="mt-4 font-mono text-lg text-forest-600">{s.dates}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-forest-700 transition-colors hover:text-ember-600"
              >
                Записатися
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
