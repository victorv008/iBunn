import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-text-on-dark">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-2xl italic tracking-wide">
              iBunn
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-text-on-dark/70 max-w-xs">
              Vi är IT-företaget som hjälper våra kunder, offentliga som privata,
              med bland annat IT-säkerhetslösningar, systemutveckling och
              projektledning.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-lg mb-4">Navigering</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors">
                  Hem
                </Link>
              </li>
              <li>
                <Link href="/tjanster" className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors">
                  Våra tjänster
                </Link>
              </li>
              <li>
                <Link href="/om-oss" className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-sm text-text-on-dark/70 hover:text-text-on-dark transition-colors">
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-4">Kontakt</h3>
            <address className="not-italic space-y-3 text-sm text-text-on-dark/70">
              <p>Bunn Ekhaga 33</p>
              <p>563 92 Gränna</p>
              <p className="pt-2">
                <a
                  href="mailto:hello@ibunn.se"
                  className="text-accent-light hover:text-accent transition-colors"
                >
                  hello@ibunn.se
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-text-on-dark/10 pt-8 text-center">
          <p className="text-xs text-text-on-dark/50">
            &copy; {new Date().getFullYear()} iBunn Consulting AB. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  );
}
