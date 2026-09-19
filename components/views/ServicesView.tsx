"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { PricingTable } from "@/components/PricingTable";
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { services } from "@/lib/services";

export function ServicesView() {
  const { lang } = useLang();
  const t = dictionaries[lang].services;

  return (
    <>
      <PageHero title={t.heroTitle} subtitle={t.heroSub} />

      {/* Service cards */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pricing */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <FadeIn className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              {t.pricingTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              {t.pricingSub}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <PricingTable />
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.faqTitle}</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {t.faqs.map((faq, i) => (
              <AccordionItem key={`${lang}-${i}`} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
        <FadeIn delay={0.15} className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl gradient-brand px-8 text-base font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Link href="/contact">{t.bookNow}</Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
