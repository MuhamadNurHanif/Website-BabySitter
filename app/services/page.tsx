import type { Metadata } from "next";
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
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description:
    "Layanan babysitting Novin Nanny: full-time, part-time, event care, dan spesialis newborn. Harga transparan.",
};

const faqs = [
  {
    q: "Bagaimana cara booking layanan?",
    a: "Isi form di halaman Contact atau chat WhatsApp. Kami akan jadwalkan konsultasi & trial gratis 1 jam, lalu mulai sesuai kesepakatan.",
  },
  {
    q: "Apakah bisa trial dulu sebelum commit?",
    a: "Tentu. Trial 1 jam gratis untuk keluarga baru, supaya anak dan orang tua nyaman dulu dengan Novin.",
  },
  {
    q: "Berapa anak maksimal yang bisa dijaga?",
    a: "Untuk layanan reguler 1–2 anak. Untuk event care, bisa lebih — hubungi kami untuk penawaran khusus.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Per jam untuk layanan fleksibel, per minggu/bulan untuk layanan rutin. Pembayaran via transfer bank atau e-wallet.",
  },
  {
    q: "Bagaimana kalau perlu membatalkan jadwal?",
    a: "Bebas reschedule dengan konfirmasi minimal 12 jam sebelumnya. Pembatalan mendadak dikenakan 50% tarif.",
  },
  {
    q: "Apakah Novin bersedia di luar Jakarta?",
    a: "Area utama Jakarta & Tangerang. Luar area dikenakan biaya transportasi tambahan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Pilih layanan yang paling pas untuk kebutuhan keluarga Anda — semua dengan standar perawatan yang sama tingginya."
      />

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
            <h2 className="text-3xl font-bold sm:text-4xl">Daftar Harga</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Harga transparan, tanpa biaya tersembunyi.
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
          <h2 className="text-3xl font-bold sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
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
            <Link href="/contact">Book Sekarang</Link>
          </Button>
        </FadeIn>
      </section>
    </>
  );
}
