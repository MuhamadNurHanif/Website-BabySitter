import type { Metadata } from "next";
import { TestimonialsView } from "@/components/views/TestimonialsView";

export const metadata: Metadata = {
  title: "Testimoni",
  description:
    "Cerita dan ulasan keluarga yang menggunakan layanan babysitting Novin Nanny.",
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
