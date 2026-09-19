import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Baby,
  BookOpen,
  Clock,
  Heart,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Novin",
  description:
    "Profil Novin Nanny: pengalaman, kualifikasi, dan filosofi pengasuhan anak.",
};

const timeline = [
  {
    year: "2019",
    title: "Memulai Karier",
    text: "Mulai mengasuh anak keluarga terdekat dan mengikuti pelatihan dasar pengasuhan anak.",
  },
  {
    year: "2021",
    title: "Sertifikasi First Aid",
    text: "Menyelesaikan pelatihan pertolongan pertama dan CPR khusus bayi & anak.",
  },
  {
    year: "2023",
    title: "Spesialisasi Newborn",
    text: "Fokus pada perawatan bayi 0–12 bulan: pola tidur, ASI, dan stimulasi tumbuh kembang.",
  },
  {
    year: "2025",
    title: "50+ Keluarga Bahagia",
    text: "Dipercaya lebih dari 50 keluarga di Bali untuk layanan full-time, part-time, dan event care.",
  },
];

const qualifications = [
  "Pelatihan Dasar Pengasuhan Anak",
  "Sertifikasi First Aid & CPR (Bayi & Anak)",
  "Kelas Stimulasi Tumbuh Kembang",
  "Pelatihan Gizi & MPASI",
  "Child Safety & Protection Training",
];

const whyNovin = [
  {
    icon: Heart,
    title: "Seperti Keluarga Sendiri",
    text: "Anak diasuh dengan kasih sayang tulus, bukan sekadar dijaga.",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    text: "Bersertifikat first aid, latar belakang jelas, dan bisa cek referensi.",
  },
  {
    icon: MessageCircleHeart,
    title: "Komunikasi Terbuka",
    text: "Update harian perkembangan anak langsung ke orang tua.",
  },
  {
    icon: Sparkles,
    title: "Edukatif & Menyenangkan",
    text: "Bermain sambil belajar dengan aktivitas sesuai usia anak.",
  },
  {
    icon: Clock,
    title: "Fleksibel",
    text: "Jadwal menyesuaikan kebutuhan keluarga Anda.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Tentang Novin"
        subtitle="Babysitter profesional yang percaya setiap anak layak mendapatkan perawatan terbaik."
      />

      {/* Profile */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 -z-10 rotate-2 rounded-3xl gradient-brand opacity-30" />
            <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src="/images/Foto1.jpeg"
                alt="Novin bersama anak asuh"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </FadeIn>
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold">Halo, saya Novin! 👋</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Sejak 2019 saya mengasuh anak-anak dengan satu prinsip sederhana:
                perlakukan setiap anak seperti keluarga sendiri. Bagi saya,
                menjadi babysitter bukan sekadar pekerjaan — ini tentang
                membangun kepercayaan dengan keluarga dan menjadi tempat anak
                merasa aman untuk tumbuh.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "Pengalaman 5+ tahun mengasuh bayi hingga anak usia sekolah",
                  "Dipercaya 50+ keluarga di Bali & sekitarnya",
                  "Ramah, sabar, dan komunikatif",
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
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Perjalanan Profesional
            </h2>
          </FadeIn>
          <div className="relative mt-12">
            <div className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <FadeIn
                  key={t.year}
                  delay={i * 0.05}
                  className={`relative flex gap-6 sm:w-1/2 ${
                    i % 2 === 0
                      ? "sm:pr-10"
                      : "sm:ml-auto sm:flex-row-reverse sm:pl-10 sm:text-right"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1 flex size-10 items-center justify-center rounded-full gradient-brand text-white shadow-md sm:static sm:shrink-0 ${
                      i % 2 === 0 ? "sm:-mr-14" : "sm:-ml-14"
                    }`}
                  >
                    <Baby className="size-5" />
                  </span>
                  <div className="pl-14 sm:pl-0">
                    <span className="text-sm font-bold text-primary">
                      {t.year}
                    </span>
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Kualifikasi & Sertifikasi
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Terus belajar untuk memberikan yang terbaik bagi anak Anda.
          </p>
        </FadeIn>
        <Stagger className="mt-10 flex flex-wrap justify-center gap-3">
          {qualifications.map((q) => (
            <StaggerItem key={q}>
              <Badge
                variant="outline"
                className="gap-1.5 rounded-full border-primary/30 bg-primary/5 px-4 py-2 text-sm text-foreground"
              >
                <Award className="size-4 text-primary" />
                {q}
              </Badge>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Philosophy */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <FadeIn>
            <BookOpen className="mx-auto size-10 text-primary" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Filosofi Pengasuhan
            </h2>
            <blockquote className="mt-6 text-xl leading-relaxed text-foreground/90">
              “Anak tumbuh baik ketika merasa aman dan dicintai. Tugas saya
              memastikan setiap hari bersama mereka penuh kehangatan, permainan,
              dan pembelajaran — sementara orang tua bisa bekerja dengan tenang.”
            </blockquote>
            <p className="mt-4 font-semibold text-primary">— Novin</p>
          </FadeIn>
        </div>
      </section>

      {/* Why Novin */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Kenapa Memilih Novin?
          </h2>
        </FadeIn>
        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyNovin.map((w) => (
            <StaggerItem key={w.title}>
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="pt-6">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <w.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-semibold">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <FadeIn>
          <div className="rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Yuk, Kenalan Lebih Dekat!
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
              Jadwalkan konsultasi gratis untuk memastikan Novin cocok dengan
              keluarga Anda.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 h-12 rounded-xl gradient-brand px-8 text-base font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                Book Consultation
              </a>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
