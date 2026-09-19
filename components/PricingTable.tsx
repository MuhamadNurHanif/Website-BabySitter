"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { formatIDR, services } from "@/lib/services";
import { cn } from "cn";

type Mode = "hourly" | "monthly";

function AnimatedPrice({ value, mode }: { value: number | null; mode: Mode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={mode + (value ?? "none")}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
        className="font-semibold"
      >
        {value === null
          ? "—"
          : mode === "hourly"
            ? formatIDR(value * 1000) + "/jam"
            : formatIDR(value) + "/bln"}
      </motion.span>
    </AnimatePresence>
  );
}

export function PricingTable() {
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
              <span className="relative capitalize">
                {m === "hourly" ? "Per Jam" : "Per Bulan"}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
        <table className="w-full min-w-[560px] text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="px-6 py-4 font-semibold">Layanan</th>
              <th className="px-6 py-4 font-semibold">
                {mode === "hourly" ? "Harga per Jam" : "Harga per Bulan"}
              </th>
              <th className="px-6 py-4 font-semibold">Catatan</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr
                key={s.slug}
                className="border-b border-border/60 last:border-0 transition-colors hover:bg-muted/50"
              >
                <td className="px-6 py-4">{s.name}</td>
                <td className="px-6 py-4">
                  <AnimatedPrice
                    value={mode === "hourly" ? s.hourly : s.monthly}
                    mode={mode}
                  />
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {mode === "monthly" && s.monthly === null
                    ? "Tersedia per jam saja"
                    : s.slug === "event-care"
                      ? "Min. 3 jam"
                      : s.slug === "part-time"
                        ? "Min. 4 jam/kunjungan"
                        : "Bisa nego untuk jangka panjang"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm text-muted-foreground">
        <Check className="size-4 text-success" />
        Konsultasi & trial 1 jam gratis untuk keluarga baru.
      </p>
    </div>
  );
}
