export function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-cream-100/60 py-24 md:py-32">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="heading-eyebrow">Команда</p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Психотерапевти,
              <br />
              митці, музиканти —
              <br />
              <span className="italic text-ember-500">і волонтери.</span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-forest-700">
              Для кожного заїзду створюється окремий склад: п'ятеро дорослих,
              що працюють безпосередньо з дітьми, і волонтери, які тримають
              простір навколо. Команда працює під щоденною супервізією.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { n: "5", label: "провідних" },
                { n: "1:3", label: "співвідношення" },
                { n: "24/7", label: "супервізія" },
                { n: "15", label: "дітей максимум" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-forest-500/15 bg-cream-50 p-5"
                >
                  <div className="font-display text-3xl text-forest-700">
                    {s.n}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-forest-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="mt-10 border-l-2 border-ember-500 pl-6 font-display text-2xl leading-snug text-forest-700">
              «Простір, у якому дорослий — не наглядач,
              а свідок і супровідник».
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
