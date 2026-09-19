"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareHeart, Star } from "lucide-react";
import { useState } from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";
import { cn } from "cn";

const filters = ["Semua", "5 Bintang", "Terbaru"] as const;
type Filter = (typeof filters)[number];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<Filter>("Semua");

  const list = [...testimonials]
    .filter((t) => (filter === "5 Bintang" ? t.rating === 5 : true))
    .sort((a, b) => (filter === "Terbaru" ? b.id - a.id : 0));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-muted/50">
        <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            What Parents Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            Cerita nyata dari keluarga yang telah mempercayakan buah hatinya
            pada Novin.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 flex justify-center gap-2"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                filter === f
                  ? "gradient-brand text-white shadow-md"
                  : "border border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
              )}
            >
              {f === "5 Bintang" && (
                <Star className="mr-1 inline size-4" />
              )}
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-border bg-card px-6 py-12 text-center">
          <MessageSquareHeart className="mx-auto size-10 text-primary" />
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Sudah Jadi Klien Novin?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Bagikan pengalaman Anda — atau kenali Novin lebih dulu sebelum
            mempercayakan si kecil.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl gradient-brand px-6 py-3 font-bold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Tinggalkan Review
            </a>
            <a
              href="/contact"
              // ponytail: plain anchor keeps this file a pure client island; Link adds nothing here
              className="rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
