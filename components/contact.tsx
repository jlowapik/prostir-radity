"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Placeholder — replace with real endpoint (Formspree/Resend/etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-forest-700 py-24 text-cream-100 md:py-32"
    >
      <div className="container-narrow">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="heading-eyebrow !text-ember-400">Контакти</p>
            <h2 className="font-display text-4xl leading-tight text-cream-50 md:text-5xl">
              Напишіть нам —
              <br />
              <span className="italic text-ember-400">будь-коли.</span>
            </h2>
            <p className="mt-6 max-w-md text-cream-100/80">
              Заповніть форму, або зв'яжіться напряму. Ми відповідаємо
              впродовж робочого дня.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream-100/60">
                  Телефон
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+380000000000"
                    className="font-display text-2xl text-cream-50 transition-colors hover:text-ember-400"
                  >
                    +38 (000) 000 00 00
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream-100/60">
                  Пошта
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:prostir.radity@gmail.com"
                    className="font-display text-2xl text-cream-50 transition-colors hover:text-ember-400"
                  >
                    prostir.radity@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream-100/60">
                  Локація
                </dt>
                <dd className="mt-1 font-display text-2xl text-cream-50">
                  село Недільня · Прикарпаття
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-forest-600/40 p-8 backdrop-blur-sm ring-1 ring-forest-500/40 md:p-10"
              aria-live="polite"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Ваше ім'я" name="parent" required />
                <Field label="Ім'я дитини" name="child" required />
                <Field label="Телефон" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>

              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-widest text-cream-100/70">
                  Заїзд, що вас цікавить
                </span>
                <select
                  name="session"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border-0 bg-forest-700/60 px-4 py-3 text-cream-50 ring-1 ring-forest-500/50 transition focus:outline-none focus:ring-2 focus:ring-ember-400"
                >
                  <option value="" disabled>Оберіть заїзд</option>
                  <option value="1">I · 16.06 — 26.06</option>
                  <option value="2">II · 03.07 — 13.07</option>
                  <option value="3">III · 24.07 — 03.08</option>
                  <option value="4">IV · 14.08 — 24.08</option>
                  <option value="any">Ще не визначились</option>
                </select>
              </label>

              <label className="mt-5 block">
                <span className="text-xs uppercase tracking-widest text-cream-100/70">
                  Питання або коментар
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border-0 bg-forest-700/60 px-4 py-3 text-cream-50 placeholder:text-cream-100/40 ring-1 ring-forest-500/50 transition focus:outline-none focus:ring-2 focus:ring-ember-400"
                  placeholder="Напишіть, що для вас важливо"
                />
              </label>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-cream-100/60">
                  Надсилаючи форму, ви погоджуєтесь на обробку персональних даних.
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-full bg-ember-500 px-8 py-3 text-sm font-medium text-forest-800 shadow-sm transition-all hover:bg-ember-400 hover:shadow-md disabled:opacity-60"
                >
                  {status === "sending" ? "Надсилаємо…" : "Надіслати заявку"}
                </button>
              </div>

              {status === "sent" && (
                <p className="mt-6 rounded-xl bg-ember-400/15 px-4 py-3 text-sm text-ember-400">
                  Дякуємо! Ми зв'яжемось із вами найближчим часом.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-cream-100/70">
        {label}
        {required && <span className="text-ember-400"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border-0 bg-forest-700/60 px-4 py-3 text-cream-50 placeholder:text-cream-100/40 ring-1 ring-forest-500/50 transition focus:outline-none focus:ring-2 focus:ring-ember-400"
      />
    </label>
  );
}
