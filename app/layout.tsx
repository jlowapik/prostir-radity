import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Kyiv Region Type — Dmytro Rastvortsev — display face for headings
const kyivRegion = localFont({
  src: [
    {
      path: "../public/fonts/KyivRegion-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-kyiv-region",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

// Kyiv Type Sans — Dmytro Rastvortsev — body / UI
const kyivSans = localFont({
  src: [
    {
      path: "../public/fonts/KyivTypeSans-Regular-.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/KyivTypeSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-kyiv-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Простір РаДіти — трансформаційний кемп на Прикарпатті",
  description:
    "Простір вільних дітей 7–16 років у Карпатах. Психотерапія розвитку, мистецтво, природа, музика. Заїзди червень–серпень 2026.",
  keywords: [
    "дитячий кемп",
    "Карпати",
    "Прикарпаття",
    "психотерапія",
    "арт-терапія",
    "літній табір",
    "Простір РаДіти",
  ],
  openGraph: {
    title: "Простір РаДіти — простір вільних дітей",
    description:
      "Трансформаційний кемп на Прикарпатті, розроблений психотерапевтами та митцями.",
    locale: "uk_UA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#3f5b3f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="uk"
      className={`${kyivRegion.variable} ${kyivSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
