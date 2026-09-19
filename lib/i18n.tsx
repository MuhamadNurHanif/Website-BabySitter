"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

const LANG_KEY = "lang";

// store kecil di luar React supaya SSR & Client konsisten tanpa
// setState-dalam-effect.
let listeners: Array<() => void> = [];

function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

function getSnapshot(): Lang {
  try {
    return localStorage.getItem(LANG_KEY) === "en" ? "en" : "id";
  } catch {
    return "id";
  }
}

function getServerSnapshot(): Lang {
  return "id";
}

export function setLang(next: Lang) {
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {}
  listeners.forEach((l) => l());
}

const LangContext = createContext<Lang>("id");

export function LangProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export const useLang = () => {
  const lang = useContext(LangContext);
  const set = (next: Lang) => setLang(next);
  return { lang, setLang: set };
};
