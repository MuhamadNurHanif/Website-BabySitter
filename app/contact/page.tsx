import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Novin Nanny untuk konsultasi dan booking layanan babysitting. Chat WhatsApp, telepon, atau email.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Telepon",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat langsung dengan Novin",
    href: site.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Area Layanan",
    value: site.location,
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: site.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Punya pertanyaan atau siap booking? Hubungi Novin lewat form atau chat langsung."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2">
            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <Card className="flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <CardContent className="flex items-center gap-4 pt-6">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <item.icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    title={item.label === "WhatsApp" ? "Chat with us" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Kirim Pesan</h2>
                <p className="text-sm text-muted-foreground">
                  Isi form di bawah, Novin akan membalas dalam 1x24 jam.
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.2} className="mt-12">
          <h2 className="mb-4 text-xl font-bold">Area Layanan</h2>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Peta area layanan Bali"
              src="https://maps.google.com/maps?q=Jakarta%20Selatan&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </section>
    </>
  );
}
