import Link from "next/link";
import { Baby, Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="flex size-9 items-center justify-center rounded-xl gradient-brand text-white">
              <Baby className="size-5" />
            </span>
            <span className="text-lg">
              Novin <span className="text-primary">Nanny</span>
            </span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Perawatan anak yang hangat, aman, dan terpercaya untuk keluarga
            Indonesia.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Navigasi</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Kontak</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <a href={`tel:${site.phone}`} className="hover:text-primary">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" />
              {site.location}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Jam Operasional</h3>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="size-4 text-primary" />
            {site.hours}
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Dibuat dengan ♥ untuk keluarga
        Indonesia.
      </div>
    </footer>
  );
}
