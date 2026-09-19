import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Heart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, Counter, Stagger, StaggerItem } from "@/components/motion";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const stats = [
  { value: 5, suffix: "+", decimals: 0, label: "Tahun Pengalaman" },
  { value: 50, suffix: "+", decimals: 0, label: "Keluarga Terlayani" },
  { value: 5, suffix: "", decimals: 1, label: "Rating Kepuasan" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 size-96 rounded-full bg-accent/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Sparkles className="size-4" />
                {site.tagline} · Bali
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
                Novin Nanny —{" "}
                <span className="text-gradient-brand">Trusted Childcare</span>{" "}
                untuk Buah Hati Anda
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-5 max-w-lg text-lg text-muted-foreground">
                Perawatan anak yang hangat, aman, dan penuh perhatian. Novin
                mendampingi tumbuh kembang anak Anda dengan pengalaman lebih
                dari 5 tahun.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl bg-gradient-to-r from-primary to-accent px-7 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  <Link href="/contact">Book Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-2 border-primary px-7 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <Link href="/services">Lihat Layanan</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-3xl gradient-brand opacity-30" />
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/images/Foto3.jpeg"
                alt="Novin bersama anak asuhnya"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -left-4 bottom-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
              <Star className="size-5 fill-accent text-accent" />
              <div className="text-sm">
                <p className="font-bold">5.0 Rating</p>
                <p className="text-xs text-muted-foreground">
                  dari 50+ keluarga
                </p>
              </div>
            </div>
            <div className="absolute -right-3 top-6 flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-xl">
              <span className="flex size-8 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                <Heart className="size-4" />
              </span>
              <p className="text-sm font-semibold">Tersedia hari ini</p>
            </div>
          </FadeIn>
        </div>

        <div className="flex justify-center pb-8 text-muted-foreground">
          <a href="#stats" aria-label="Scroll ke bawah">
            <ChevronDown className="size-6 animate-bounce" />
          </a>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="border-y border-border bg-card">
        <Stagger className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 py-12 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <p className="text-4xl font-extrabold text-gradient-brand">
                <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Featured Services */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Layanan Unggulan</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pilihan layanan fleksibel yang menyesuaikan kebutuhan keluarga Anda.
          </p>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </Stagger>
        <FadeIn className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Lihat semua layanan <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeIn className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Kata Para Orang Tua
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Kepercayaan keluarga adalah prioritas kami.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn className="relative order-2 mx-auto w-full max-w-md lg:order-1">
            <div className="absolute -inset-3 -z-10 -rotate-2 rounded-3xl bg-secondary/25" />
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/images/Foto2.jpeg"
                alt="Novin mengasuh anak"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
              />
            </div>
          </FadeIn>
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Kenalan dengan Novin
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Novin adalah babysitter profesional yang percaya setiap anak
                unik dan layak mendapatkan perawatan terbaik. Dengan pendekatan
                yang sabar dan penuh kasih sayang, Novin menjadi partner
                terpercaya bagi puluhan keluarga di Bali.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ul className="mt-6 space-y-3">
                {[
                  "5+ tahun pengalaman mengasuh anak",
                  "Terlatih pertolongan pertama (first aid)",
                  "Spesialis newborn & tumbuh kembang anak",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      ✓
                    </span>
                    <span className="font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Button
                asChild
                variant="outline"
                className="mt-8 rounded-xl border-2 border-primary px-6 font-semibold text-primary hover:bg-primary hover:text-white"
              >
                <Link href="/about">Selengkapnya</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 text-center text-white sm:px-12">
            <div className="pointer-events-none absolute -left-10 -top-10 size-40 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-14 -right-10 size-52 rounded-full bg-white/10" />
            <h2 className="text-3xl font-bold sm:text-4xl">
              Siap Percayakan Buah Hati Anda?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/90">
              Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan keluarga
              Anda hari ini.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 h-12 rounded-xl bg-white px-8 text-base font-bold text-primary shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Link href="/contact">Hubungi Sekarang</Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
