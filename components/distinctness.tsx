const POINTS: Array<{ title: string; body: string }> = [
  {
    title: "Наукові та мистецькі методології",
    body: "Психотерапія розвитку у діалозі з арт-практиками, музикою й документальним кіно.",
  },
  {
    title: "Змішані вікові групи",
    body: "Діти 7–16 років живуть, творять і вчаться одне в одного — молодші вчаться сміливості, старші — турботи.",
  },
  {
    title: "Фізіологія розвитку",
    body: "Програма враховує вікові процеси: сон, харчування, рухову й емоційну навантаженість.",
  },
  {
    title: "Стратегія до кожної дитини",
    body: "Індивідуальний підхід від першої зустрічі — жодних однакових квестів для всіх.",
  },
  {
    title: "Передача досвіду Майстрами",
    body: "Психотерапевти, художники, музиканти, філософи діляться справжньою практикою, а не імітацією.",
  },
  {
    title: "Рівний — рівному",
    body: "Горизонтальні стосунки, у яких дорослий — не наглядач, а свідок і супровідник.",
  },
  {
    title: "Культура здоров'я",
    body: "Екологічне харчування, рух, вода, сон — як щоденна етика, а не набір правил.",
  },
  {
    title: "Самоповага й рефлексія",
    body: "Місце й час для того, щоб чути себе — і мову, якою можна це проговорити.",
  },
  {
    title: "Стосунок із природою",
    body: "Босоніж травою, під водоспадами, з лікарськими травами й нічним небом.",
  },
  {
    title: "Психотерапія розвитку",
    body: "Не корекція «проблем», а супровід природних криз дорослішання.",
  },
  {
    title: "Без гаджетів",
    body: "Раз на день — дзвінок батькам. Решту часу — реальне життя, реальні люди.",
  },
  {
    title: "Гнучка програма",
    body: "Реагуємо на стан групи, погоду, натхнення — а не на розклад ради розкладу.",
  },
];

export function Distinctness() {
  return (
    <section
      id="distinctness"
      className="scroll-mt-24 bg-forest-700 py-24 text-cream-100 md:py-32"
    >
      <div className="container-narrow">
        <div className="max-w-2xl">
          <p className="heading-eyebrow !text-ember-400">Самобутність</p>
          <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl">
            Дванадцять речей, які роблять
            <br />
            <span className="italic text-ember-400">Простір</span> собою
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-forest-500/25 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <li
              key={p.title}
              className="group flex flex-col gap-3 bg-forest-700 p-8 transition-colors hover:bg-forest-600"
            >
              <span className="font-display text-2xl text-ember-400/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl leading-tight text-cream-50">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream-100/75">
                {p.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
