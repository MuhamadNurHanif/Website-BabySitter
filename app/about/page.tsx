import type { Metadata } from "next";
import { AboutView } from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Tentang Novin",
  description:
    "Profil Novin Nanny: pengalaman, kualifikasi, dan filosofi pengasuhan anak.",
};

export default function AboutPage() {
  return <AboutView />;
}
