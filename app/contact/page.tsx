import type { Metadata } from "next";
import { ContactView } from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Novin Nanny untuk konsultasi dan booking layanan babysitting. Chat WhatsApp, telepon, atau email.",
};

export default function ContactPage() {
  return <ContactView />;
}
