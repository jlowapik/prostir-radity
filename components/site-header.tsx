"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#philosophy", label: "Філософія" },
  { href: "#distinctness", label: "Самобутність" },
  { href: "#schedule", label: "Заїзди" },
  { href: "#team", label: "Команда" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакти" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"UA" | "EN">("UA");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-forest-500/10 bg-cream-50/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-narrow flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label="Простір РаДіти — на початок"
        >
          <img
            src="/images/logo-small.png"
            alt=""
            aria-hidden
            className="h-9 w-9 select-none md:h-10 md:w-10"
            draggable={false}
          />
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight md:text-xl",
              scrolled ? "text-forest-700" : "text-cream-50"
            )}
          >
            Простір&nbsp;РаДіти
          </span>
        </a>

        <nav className="hidden lg:flex lg:items-center lg:gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors",
                scrolled
                  ? "text-forest-600 hover:text-forest-800"
                  : "text-cream-50/90 hover:text-cream-50"
              )}
            >
              {item.label}
            </a>
          ))}

          <div
            role="group"
            aria-label="Мова"
            className={cn(
              "flex items-center gap-0.5 rounded-full border p-0.5 text-xs font-medium transition-colors",
              scrolled
                ? "border-forest-500/25 text-forest-600"
                : "border-cream-50/40 text-cream-50"
            )}
          >
            {(["UA", "EN"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cn(
                  "rounded-full px-2.5 py-1 transition-colors",
                  lang === code
                    ? scrolled
                      ? "bg-forest-600 text-cream-50"
                      : "bg-cream-50 text-forest-700"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {code}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium shadow-sm transition-all hover:shadow",
              scrolled
                ? "bg-forest-600 text-cream-50 hover:bg-forest-700"
                : "bg-ember-500 text-forest-800 hover:bg-ember-400"
            )}
          >
            Залишити заявку
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            scrolled ? "text-forest-700" : "text-cream-50"
          )}
        >
          <span className="relative block h-4 w-5" aria-hidden>
            <span
              className={cn(
                "absolute left-0 h-0.5 w-full bg-current transition-transform",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-full bg-current transition-transform",
                open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              )}
            />
          </span>
        </button>
      </div>

      <div
        className={cn(
          "border-t border-forest-500/10 bg-cream-50/95 backdrop-blur-md lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="container-narrow flex flex-col py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-forest-500/10 py-3 text-forest-700 last:border-0"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-0.5 rounded-full border border-forest-500/25 p-0.5 text-xs font-medium text-forest-600">
              {(["UA", "EN"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={cn(
                    "rounded-full px-3 py-1 transition-colors",
                    lang === code
                      ? "bg-forest-600 text-cream-50"
                      : "opacity-70"
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest-600 px-5 py-2.5 text-sm font-medium text-cream-50"
            >
              Залишити заявку
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
