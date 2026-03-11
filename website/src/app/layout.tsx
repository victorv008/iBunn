import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "iBunn Consulting AB — IT-säkerhet, Systemutveckling & Projektledning",
  description:
    "Vi är IT-företaget som hjälper våra kunder, offentliga som privata, med IT-säkerhetslösningar, systemutveckling och projektledning. Säkerhet, Engagemang och Proaktivitet.",
  keywords: [
    "IT-konsult",
    "IT-säkerhet",
    "systemutveckling",
    "projektledning",
    "IT-arkitektur",
    "Sverige",
    "Jönköping",
  ],
  openGraph: {
    title: "iBunn Consulting AB",
    description:
      "IT-företaget som hjälper med IT-säkerhetslösningar, systemutveckling och projektledning.",
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
