import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
