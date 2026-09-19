import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Novin Nanny — Trusted Childcare",
    template: "%s | Novin Nanny",
  },
  description:
    "Layanan babysitter profesional di Bali: full-time, part-time, event care, dan spesialis newborn. Aman, hangat, dan terpercaya.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <LangProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <Toaster position="top-center" richColors />
        </LangProvider>
      </body>
    </html>
  );
}
