const PRINCIPLES = [
  {
    title: "Безпека",
    body: "На території Простору завжди безпечно, а дорослі уважно стежать, щоб діти не створювали небезпечних ситуацій.",
  },
  {
    title: "Повага",
    body: "До того, як тобі і чого ти хочеш саме зараз. До кожного, хто поруч. До лісу, у якому ми — гості.",
  },
  {
    title: "Довіра",
    body: "Це не ризик, це можливість бути собою поруч з іншими — не вдавати, не приховувати, не брехати.",
  },
];

const SUN_X_PERCENT = 88; // horizontal position of sun (% from left)
const SUN_Y_PERCENT = 12; // vertical position of sun (% from top)

function SunRays({ className }: { className?: string }) {
  // Rays fan out evenly from the sun. angle 0 = straight down, positive =
  // clockwise (down → left in SVG). Step of 22° between each ray.
  const RAY_COUNT = 6;
  const RAY_STEP = 22;
  const RAY_START = -22;
  const rays = Array.from({ length: RAY_COUNT }, (_, i) => ({
    angle: RAY_START + i * RAY_STEP,
    opacity: 0.5,
    length: 880,
    width: 75,
  }));

  return (
    <svg
      viewBox="0 0 1200 1000"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="rayGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fff5c4" stopOpacity="0.7" />
          <stop offset="65%" stopColor="#fff5c4" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#fff5c4" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="sunHalo"
          cx={`${SUN_X_PERCENT}%`}
          cy={`${SUN_Y_PERCENT}%`}
          r="45%"
        >
          <stop offset="0%" stopColor="#fff5c4" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient warm glow across section */}
      <rect x="0" y="0" width="1200" height="1000" fill="url(#sunHalo)" />

      {/* Directional rays */}
      <g
        transform={`translate(${(SUN_X_PERCENT * 12).toFixed(0)} ${(SUN_Y_PERCENT * 10).toFixed(0)})`}
        style={{ mixBlendMode: "screen" }}
      >
        {rays.map((r, i) => (
          <g key={i} transform={`rotate(${r.angle})`}>
            <path
              d={`M ${-r.width * 0.25} 0 L ${r.width * 0.25} 0 L ${r.width} ${r.length} L ${-r.width} ${r.length} Z`}
              fill="url(#rayGrad)"
              opacity={r.opacity}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Back-most mountain layer (rendered BEHIND the tree). */
function BackMountains({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      <path
        d="M0 320 L 110 210 L 220 285 L 330 195 L 450 265 L 570 180 L 690 260 L 810 190 L 930 265 L 1050 205 L 1170 260 L 1290 200 L 1440 260 L 1440 500 L 0 500 Z"
        fill="#7ba07b"
      />

      {/* Soft clouds — belong to the sky, live with the back layer */}
      <g fill="#fdfbf5" fillOpacity="0.75">
        <ellipse cx="240" cy="120" rx="60" ry="8" />
        <ellipse cx="260" cy="112" rx="45" ry="6" />
        <ellipse cx="880" cy="90" rx="80" ry="10" />
        <ellipse cx="900" cy="82" rx="55" ry="7" />
      </g>
    </svg>
  );
}

/** Front two mountain layers (rendered IN FRONT of the tree). */
function FrontMountains({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden
    >
      {/* Mid layer */}
      <path
        d="M0 385 L 100 285 L 210 355 L 320 265 L 440 340 L 560 275 L 680 330 L 800 270 L 920 335 L 1050 280 L 1180 325 L 1310 265 L 1440 320 L 1440 500 L 0 500 Z"
        fill="#3f7040"
      />

      {/* Front hills */}
      <path
        d="M0 435 L 130 370 L 260 405 L 390 360 L 530 400 L 670 365 L 810 395 L 950 360 L 1090 395 L 1230 375 L 1440 395 L 1440 500 L 0 500 Z"
        fill="#1e4520"
      />
    </svg>
  );
}

function CardOrnament() {
  return (
    <svg
      viewBox="0 0 40 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      className="mb-3 h-3 w-10 text-ember-500"
      aria-hidden
    >
      <circle cx="20" cy="6" r="2" fill="currentColor" stroke="none" />
      <path d="M18 6 Q 14 6 12 3 Q 9 2 8 5" />
      <path d="M22 6 Q 26 6 28 3 Q 31 2 32 5" />
      <circle cx="8" cy="5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="32" cy="5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative isolate scroll-mt-24 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-50 to-sky-100/40 py-24 md:py-32"
    >
      {/* 1. Back mountains — farthest layer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%]"
        style={{
          maskImage: "linear-gradient(to top, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 65%, transparent 100%)",
        }}
      >
        <BackMountains className="h-full w-full" />
      </div>

      {/* 2. Tree — lives between back and front mountain layers, on the left */}
      <div className="pointer-events-none absolute inset-y-0 bottom-0 left-0 -z-10 flex items-end pb-24 pl-[4%] md:pb-32 md:pl-[8%] lg:pb-40 lg:pl-[10%]">
        <img
          src="/images/philosophy-tree.png"
          alt=""
          aria-hidden
          draggable={false}
          className="h-[22rem] w-auto max-w-full select-none md:h-[30rem] lg:h-[36rem]"
        />
      </div>

      {/* 3. Front mountains — closest, cover the tree base */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%]"
      >
        <FrontMountains className="h-full w-full" />
      </div>

      <SunRays className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <img
        src="/images/painted-sun.png"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute -z-10 h-32 w-32 -translate-x-1/2 -translate-y-1/2 select-none md:h-40 md:w-40 lg:h-48 lg:w-48"
        style={{ left: `${SUN_X_PERCENT}%`, top: `${SUN_Y_PERCENT}%` }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="reveal mb-8 font-display text-lg uppercase tracking-[0.28em] text-ember-500 md:text-xl">
              Філософія
            </p>

            <h2 className="reveal font-display text-2xl leading-snug text-forest-700 md:text-[1.75rem]">
              <span className="text-[1.35em] text-ember-500">Простір РаДіти</span>{" "}
              — це просвітницький проект, який закликає дітей бути відкритими
              до світу.
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="reveal font-display text-3xl leading-tight text-forest-800 md:text-4xl">
              Простір, де можна бути дитиною —{" "}
              <span className="italic text-ember-500">по-справжньому.</span>
            </p>

            <p className="reveal mt-8 text-lg leading-relaxed text-forest-700">
              В Просторі ніхто не «розвиває» дітей за розкладом. Тут просто можна —
              бігати босоніж по росі, слухати спів пташок, обпекти пальці
              біля вогнища, окунутись у гірський водоспад і вперше в житті
              побачити, як прокидається ліс.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-forest-700">
              Далеко від гаджетів і інтернету діти самі вигадують ігри,
              проходять через справжні пригоди, вчаться давати собі раду з
              реальними викликами. Дивуються, скільки всього можуть — і саме
              це вони везуть звідси додому.
            </p>
            <p className="reveal mt-4 text-lg leading-relaxed text-forest-700">
              Дорослі поруч не наглядачі — вони свідки, супровідники, а іноді,
              навіть, і співучасники не самих розумних витівок&nbsp;)
            </p>

            <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PRINCIPLES.map((p) => (
                <li
                  key={p.title}
                  className="reveal rounded-2xl border border-forest-500/40 bg-cream-50/95 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-forest-500/60 hover:bg-cream-50"
                >
                  <CardOrnament />
                  <h3 className="font-display text-2xl text-forest-700">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-forest-700">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
