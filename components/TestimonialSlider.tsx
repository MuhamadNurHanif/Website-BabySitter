"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { testimonials, type Testimonial } from "@/lib/testimonials";
import { tr } from "@/lib/services";
import { cn } from "cn";

const AUTOPLAY_MS = 5000;

function Slide({ t, lang }: { t: Testimonial; lang: "id" | "en" }) {
  return (
    <div className="flex h-full flex-col items-center gap-4 px-2 text-center sm:px-12">
      <Quote className="size-8 text-primary/40" />
      <div
        className="flex gap-1"
        aria-label={dictionaries[lang].testimonials.ratingAria}
      >
        {Array.from({ length: t.rating }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15 + i * 0.08, type: "spring", bounce: 0.5 }}
          >
            <Star className="size-5 fill-accent text-accent" />
          </motion.span>
        ))}
      </div>
      <blockquote className="max-w-2xl text-lg text-foreground/90">
        “{tr(t.text, lang)}”
      </blockquote>
      <div className="mt-2 flex items-center gap-3">
        <span
          className="flex size-11 items-center justify-center rounded-full text-sm font-bold text-white"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </span>
        <div className="text-left">
          <p className="font-semibold">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {tr(t.service, lang)} · {tr(t.date, lang)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialSlider() {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  // touch swipe
  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX === null) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        setTouchX(null);
      }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${lang}-${testimonials[index].id}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <Slide t={testimonials[index]} lang={lang} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-0 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-0 top-1/2 flex size-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-card shadow-md transition-transform hover:scale-105 active:scale-95"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300",
              i === index ? "w-7 gradient-brand" : "w-2.5 bg-border"
            )}
          />
        ))}
      </div>
    </div>
  );
}
