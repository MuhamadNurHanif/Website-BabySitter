"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { type Testimonial } from "@/lib/testimonials";
import { tr } from "@/lib/services";

export function TestimonialCard({ t }: { t: Testimonial }) {
  const { lang } = useLang();

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex gap-1" aria-label={dictionaries[lang].testimonials.ratingAria}>
          {Array.from({ length: t.rating }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", bounce: 0.5 }}
            >
              <Star className="size-4 fill-accent text-accent" />
            </motion.span>
          ))}
        </div>
        <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
          “{tr(t.text, lang)}”
        </blockquote>
        <div className="flex items-center gap-3 border-t border-border pt-4">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: t.color }}
          >
            {t.initials}
          </span>
          <div>
            <p className="text-sm font-semibold">{t.name}</p>
            <p className="text-xs text-muted-foreground">
              {tr(t.service, lang)} · {tr(t.date, lang)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
