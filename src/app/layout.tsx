import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#11110f",
};

export const metadata: Metadata = {
  title:
    "Élec’Pro Solutions | Électricité et bornes de recharge en Seine-et-Marne",
  description:
    "Élec’Pro Solutions accompagne les entreprises et les particuliers en Seine-et-Marne : rénovation électrique, maintenance professionnelle et bornes de recharge.",
  openGraph: {
    title: "Élec’Pro Solutions | L’énergie de vos projets, maîtrisée.",
    description:
      "Électricité générale et solutions énergétiques en Seine-et-Marne.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
