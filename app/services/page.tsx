import type { Metadata } from "next";
import { ServicesView } from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Layanan & Harga",
  description:
    "Layanan babysitting Novin Nanny: full-time, part-time, event care, dan spesialis newborn. Harga transparan.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
