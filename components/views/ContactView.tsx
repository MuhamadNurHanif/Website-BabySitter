"use client";

import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { site } from "@/lib/site";

export function ContactView() {
  const { lang } = useLang();
  const t = dictionaries[lang].contact;

  const contactItems: {
    icon: LucideIcon;
    label: string;
    value: string;
    href?: string;
  }[] = [
    {
      icon: Phone,
      label: t.phone,
      value: site.phoneDisplay,
      href: `tel:${site.phone}`,
    },
    {
      icon: MessageCircle,
      label: t.whatsapp,
      value: t.whatsappValue,
      href: site.whatsapp,
    },
    {
      icon: Mail,
      label: t.email,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: MapPin, label: t.area, value: site.location },
    { icon: Clock, label: t.hoursLabel, value: dictionaries[lang].footer.hoursValue },
  ];

  return (
    <>
      <PageHero title={t.heroTitle} subtitle={t.heroSub} />

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
                    title={
                      item.label === t.whatsapp ? t.whatsappTooltip : undefined
                    }
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
                <h2 className="text-2xl font-bold">{t.formTitle}</h2>
                <p className="text-sm text-muted-foreground">{t.formSub}</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Map */}
        <FadeIn delay={0.2} className="mt-12">
          <h2 className="mb-4 text-xl font-bold">{t.mapTitle}</h2>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title={t.mapAria}
              src={`https://maps.google.com/maps?q=-8.673701286315918,115.19717407226562&z=16&hl=${lang}&output=embed`}
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
