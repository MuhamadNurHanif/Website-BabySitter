"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Baby } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLang, type Lang } from "@/lib/i18n";
import { dictionaries } from "@/lib/dict";
import { site } from "@/lib/site";
import { cn } from "cn";

export function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="flex items-center rounded-full border border-border bg-card p-0.5"
      role="group"
      aria-label="Language"
    >
      {(["id", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          aria-label={l === "id" ? "Bahasa Indonesia" : "English"}
          className={cn(
            "min-h-7 rounded-full px-2.5 text-xs font-bold uppercase transition-all duration-200",
            lang === l
              ? "gradient-brand text-white shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const t = dictionaries[lang].nav;

  // lock scroll + Escape untuk tutup
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2 font-bold"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl gradient-brand text-white">
            <Baby className="size-5" />
          </span>
          <span className="truncate text-lg">
            Novin <span className="text-primary">Nanny</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {t.items.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full gradient-brand"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <LangSwitcher />
          <div className="hidden md:block">
            <Button asChild className="h-10 rounded-xl px-5">
              <Link href="/contact">{t.book}</Link>
            </Button>
          </div>
        </div>

        <button
          className="flex size-11 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.closeMenu : t.openMenu}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 top-16 -z-10 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed inset-x-0 top-16 z-40 flex max-h-[calc(100vh-4rem)] flex-col border-b border-border bg-background p-4 shadow-xl md:hidden"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              aria-label="Menu navigasi"
            >
              <ul className="flex flex-col gap-1 overflow-y-auto">
                {t.items.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex min-h-11 items-center rounded-lg px-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 shrink-0">
                <Button asChild className="h-12 w-full rounded-xl text-base">
                  <Link href={site.whatsapp} target="_blank">
                    {t.chatWa}
                  </Link>
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
