"use client";

import { useState, type FormEvent } from "react";
import {
  ShieldCheck,
  Network,
  Code2,
  FolderKanban,
  Lock,
  Flame,
  Zap,
  MapPin,
  Mail,
  ArrowDown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ── Data ── */

const services = [
  {
    icon: ShieldCheck,
    title: "Säker fildelning",
    description:
      "En säkerhetstjänst som specialiserar sig på säker fildelning via webbläsare eller API-anrop — för verksamheter under PDL och OSL.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
  },
  {
    icon: Network,
    title: "IT-Arkitektur",
    description:
      "Konsulter med lång erfarenhet och helhetsperspektiv för att säkerställa god kontroll på IT-landskapet och samband mellan system och verksamhet.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    icon: Code2,
    title: "Systemutveckling",
    description:
      "Konsulttjänster inom systemutveckling med fokus på att stötta och hjälpa kunden utifrån behov och krav.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  },
  {
    icon: FolderKanban,
    title: "Projektledning",
    description:
      "Lång erfarenhet av att driva, implementera och effektivisera projekt — från behov och krav till mål på ett strukturerat sätt.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  },
];

const values = [
  {
    icon: Lock,
    title: "Säkerhet",
    description: "Säkerhet i främsta rummet — från fildelning till systemarkitektur.",
  },
  {
    icon: Flame,
    title: "Engagemang",
    description: "Vi brinner för våra kunders framgång i varje uppdrag.",
  },
  {
    icon: Zap,
    title: "Proaktivitet",
    description: "Vi förutser problem och agerar innan de uppstår.",
  },
];

/* ── Page ── */

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Kontaktförfrågan från ${name}`);
    const body = encodeURIComponent(
      `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone}\n\nMeddelande:\n${message}`
    );
    window.location.href = `mailto:hello@ibunn.se?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section
        id="hem"
        className="relative flex min-h-[85vh] items-center justify-center bg-dark overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-heading text-5xl font-semibold leading-tight text-text-on-dark sm:text-6xl lg:text-7xl animate-fade-in">
            VI ÄR iBunn
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-on-dark/80 sm:text-xl animate-fade-in-delay-1">
            IT-företaget som hjälper våra kunder med IT-säkerhetslösningar,
            systemutveckling och projektledning.
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-text-on-dark/50 animate-fade-in-delay-2">
            Samarbete · Långsiktighet · Säkerhet · Engagemang · Proaktivitet
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <button
              onClick={() => {
                document.getElementById("tjanster")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-text-on-dark transition-all duration-200 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
            >
              Våra tjänster
            </button>
            <button
              onClick={() => {
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="rounded-md border border-text-on-dark/30 px-8 py-3.5 text-sm font-semibold text-text-on-dark transition-all duration-200 hover:border-text-on-dark/60 hover:bg-text-on-dark/5"
            >
              Kontakta oss
            </button>
          </div>
          <button
            onClick={() => {
              document.getElementById("tjanster")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mt-16 inline-flex animate-bounce text-text-on-dark/40 hover:text-text-on-dark/70 transition-colors"
            aria-label="Scrolla ner"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section id="tjanster" className="bg-light-alt py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-4xl font-semibold text-text-primary sm:text-5xl">
                Hur kan vi hjälpa dig?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
                Specialiserade IT-tjänster anpassade efter era behov.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 space-y-20">
            {services.map((service, i) => (
              <ScrollReveal
                key={service.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={100}
              >
                <div
                  className={`grid grid-cols-1 gap-10 items-center lg:grid-cols-2 ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
                        <service.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-text-primary sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div
                    className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ ABOUT / VALUES ═══════ */}
      <section id="om-oss" className="bg-light py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* About intro */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading text-4xl font-semibold text-text-primary sm:text-5xl">
                  Om oss
                </h2>
                <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    iBunn Consulting AB grundades 2018 med en tydlig vision: att
                    erbjuda IT-tjänster av högsta kvalitet med fokus på säkerhet
                    och långsiktiga relationer.
                  </p>
                  <p>
                    Vi arbetar med både offentliga och privata aktörer och har djup
                    förståelse för kraven inom hälso- och sjukvård samt offentlig
                    sektor. Våra lösningar uppfyller krav inom PDL och OSL.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80')",
                  }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className="mt-20">
            <ScrollReveal>
              <h3 className="text-center font-heading text-3xl font-semibold text-text-primary sm:text-4xl">
                Våra ledord
              </h3>
            </ScrollReveal>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 120}>
                  <div className="text-center rounded-xl border border-light-alt bg-light-alt/50 p-8 transition-shadow duration-300 hover:shadow-md">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h4 className="mt-5 font-heading text-xl font-semibold text-text-primary">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT ═══════ */}
      <section id="kontakt" className="bg-dark py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-semibold text-text-on-dark sm:text-5xl">
                Kontakta oss
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-text-on-dark/60">
                Fyll i formuläret så återkommer vi så snart vi kan.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            {/* Form — takes more space */}
            <ScrollReveal direction="left" className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl bg-accent/10 p-12 text-center">
                  <p className="font-heading text-3xl text-accent">Tack!</p>
                  <p className="mt-3 text-text-on-dark/70">
                    Ditt e-postprogram borde ha öppnats. Skicka mailet så
                    återkommer vi inom kort.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-on-dark/80">
                        Namn
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-1 block w-full rounded-lg border border-text-on-dark/10 bg-text-on-dark/5 px-4 py-3 text-text-on-dark placeholder:text-text-on-dark/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="Ditt namn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-on-dark/80">
                        E-post
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-text-on-dark/10 bg-text-on-dark/5 px-4 py-3 text-text-on-dark placeholder:text-text-on-dark/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                        placeholder="din@epost.se"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-on-dark/80">
                      Telefon <span className="text-text-on-dark/40 font-normal">(valfritt)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-lg border border-text-on-dark/10 bg-text-on-dark/5 px-4 py-3 text-text-on-dark placeholder:text-text-on-dark/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors"
                      placeholder="070-123 45 67"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-on-dark/80">
                      Meddelande
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-lg border border-text-on-dark/10 bg-text-on-dark/5 px-4 py-3 text-text-on-dark placeholder:text-text-on-dark/30 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors resize-none"
                      placeholder="Beskriv ditt ärende..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-md bg-accent px-8 py-3.5 text-sm font-semibold text-text-on-dark transition-all duration-200 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                  >
                    Skicka meddelande
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Contact info */}
            <ScrollReveal direction="right" delay={150} className="lg:col-span-2">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-text-on-dark">Adress</p>
                    <p className="text-sm text-text-on-dark/60">
                      Bunn Ekhaga 33<br />563 92 Gränna
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-text-on-dark">E-post</p>
                    <a
                      href="mailto:hello@ibunn.se"
                      className="text-sm text-accent-light hover:text-accent transition-colors"
                    >
                      hello@ibunn.se
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mt-4">
                  <iframe
                    title="iBunn Consulting AB plats"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100!2d14.4679!3d58.0253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDAxJzMxLjEiTiAxNMKwMjgnMDQuNCJF!5e0!3m2!1ssv!2sse!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
