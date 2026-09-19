"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { formatIDR, services, tr } from "@/lib/services";
import { cn } from "cn";

type Mode = "hourly" | "monthly";

export function PricingTable() {
  const { lang } = useLang();
  const t = dictionaries[lang].services;
  const [mode, setMode] = useState<Mode>("hourly");

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-border bg-muted p-1">
          {(["hourly", "monthly"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "relative rounded-full px-6 py-2 text-sm font-semibold transition-colors",
                mode === m ? "text-white" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode === m && (
                <motion.span
                  layoutId="pricing-toggle"
                  className="absolute inset-0 rounded-full gradient-brand"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">
                {m === "hourly" ? t.hourly : t.monthly}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-6 py-4 font-semibold">{t.tableService}</th>
              <th className="px-6 py-4 font-semibold">
                {mode === "hourly" ? t.tableHourly : t.tableMonthly}
              </th>
              <th className="px-6 py-4 font-semibold">
                {lang === "id" ? "Catatan" : "Notes"}
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr
                key={s.slug}
                className="border-b border-border/60 last:border-0 transition-colors hover:bg-muted/50"
              >
                <td className="px-6 py-4">{tr(s.name, lang)}</td>
                <td className="px-6 py-4">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={mode}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="font-semibold"
                    >
                      {mode === "hourly"
                        ? formatIDR(s.hourly * 1000) + (lang === "id" ? "/jam" : "/hr")
                        : s.monthly === null
                          ? "—"
                          : formatIDR(s.monthly) + (lang === "id" ? "/bln" : "/mo")}
                    </motion.span>
                  </AnimatePresence>
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {mode === "monthly" && s.monthly === null
                    ? t.notes.hourlyOnly
                    : s.slug === "event-care"
                      ? t.notes.event
                      : s.slug === "part-time"
                        ? t.notes.partTime
                        : t.notes.longTerm}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm text-muted-foreground">
        <Check className="size-4 text-success" />
        {t.trialNote}
      </p>
    </div>
  );
}
