const NAV = [
  { href: "#philosophy", label: "Філософія" },
  { href: "#distinctness", label: "Самобутність" },
  { href: "#schedule", label: "Заїзди" },
  { href: "#team", label: "Команда" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакти" },
];

const SOCIAL = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://youtube.com", label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-forest-500/15 bg-cream-50 py-16">
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="flex items-center gap-2 font-display text-2xl font-semibold text-forest-700"
            >
              <span aria-hidden className="text-ember-500">✦</span>
              Простір&nbsp;РаДіти
            </a>
            <p className="mt-4 max-w-sm text-sm text-forest-600">
              Трансформаційний кемп для дітей 7–16 років на Прикарпатті.
              Психотерапія розвитку через природу й мистецтво.
            </p>
          </div>

          <nav className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-forest-500">
              Навігація
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-forest-700 transition-colors hover:text-ember-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-forest-500">
              Ми в мережах
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-forest-700 transition-colors hover:text-ember-600"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-forest-500/15 pt-6 text-xs text-forest-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Простір РаДіти. Усі права застережено.</p>
          <p>Створено з любов'ю до дітей і Карпат.</p>
        </div>
      </div>
    </footer>
  );
}
