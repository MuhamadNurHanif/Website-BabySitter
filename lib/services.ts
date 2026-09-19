import {
  Baby,
  CalendarClock,
  Clock,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/lib/i18n";

export type LText = { id: string; en: string };
export const tr = (v: LText, lang: Lang) => v[lang];

export type Service = {
  slug: string;
  name: LText;
  icon: LucideIcon;
  description: LText;
  includes: Record<Lang, string[]>;
  /** harga per jam (IDR ribuan) */
  hourly: number;
  /** harga per bulan (IDR), null kalau tidak tersedia */
  monthly: number | null;
};

export const services: Service[] = [
  {
    slug: "full-time",
    name: { id: "Full-Time Babysitting", en: "Full-Time Babysitting" },
    icon: Baby,
    description: {
      id: "Perawatan anak penuh waktu di rumah Anda, cocok untuk orang tua yang bekerja. Anak diasuh, diajak bermain, belajar, dan ditemani sepanjang hari.",
      en: "Full-time childcare at your home — perfect for working parents. Your child is cared for, plays, learns, and is accompanied all day long.",
    },
    includes: {
      id: [
        "8–10 jam per hari, 5–6 hari per minggu",
        "Menemani makan, mandi, dan tidur siang",
        "Aktivitas edukatif & bermain kreatif",
        "Laporan harian perkembangan anak",
      ],
      en: [
        "8–10 hours a day, 5–6 days a week",
        "Help with meals, bath time, and naps",
        "Educational activities & creative play",
        "Daily reports on your child's development",
      ],
    },
    hourly: 80,
    monthly: 3500000,
  },
  {
    slug: "part-time",
    name: { id: "Part-Time Babysitting", en: "Part-Time Babysitting" },
    icon: Clock,
    description: {
      id: "Fleksibel sesuai jadwal keluarga Anda — pagi, sore, atau beberapa hari dalam seminggu. Solusi tepat untuk rutinitas yang berubah-ubah.",
      en: "Flexible around your family's schedule — mornings, afternoons, or a few days a week. Perfect for ever-changing routines.",
    },
    includes: {
      id: [
        "Minimal 4 jam per kunjungan",
        "Jadwal fleksibel mingguan",
        "Membantu makan & aktivitas ringan",
        "Komunikasi rutin via WhatsApp",
      ],
      en: [
        "Minimum 4 hours per visit",
        "Flexible weekly scheduling",
        "Help with meals & light activities",
        "Regular updates via WhatsApp",
      ],
    },
    hourly: 100,
    monthly: 2200000,
  },
  {
    slug: "event-care",
    name: { id: "Event / Occasion Care", en: "Event / Occasion Care" },
    icon: CalendarClock,
    description: {
      id: "Jasa pengasuhan untuk acara spesial: pernikahan, arisan, atau acara keluarga. Anak-anak aman & terhibur selama acara berlangsung.",
      en: "Childcare for special occasions: weddings, gatherings, or family events. Kids stay safe and entertained while the event runs.",
    },
    includes: {
      id: [
        "Minimal 3 jam, bisa lebih anak",
        "Games & aktivitas kelompok",
        "Siap tugas di lokasi acara",
        "Bisa penanganan lebih dari 1 anak",
      ],
      en: [
        "Minimum 3 hours, multiple kids possible",
        "Games & group activities",
        "On-site at your event venue",
        "Can handle more than 1 child",
      ],
    },
    hourly: 150,
    monthly: null,
  },
  {
    slug: "newborn",
    name: { id: "Newborn Specialization", en: "Newborn Specialization" },
    icon: HeartHandshake,
    description: {
      id: "Perawatan khusus bayi 0–12 bulan dengan pendekatan lembut: pola tidur, ASI, hingga stimulasi tumbuh kembang sesuai usia.",
      en: "Specialized care for babies 0–12 months with a gentle approach: sleep patterns, breastfeeding support, and age-appropriate stimulation.",
    },
    includes: {
      id: [
        "Pengalaman khusus bayi 0–12 bulan",
        "Pola tidur & asi teratur",
        "Stimulasi tumbuh kembang",
        "Edukasi parenting untuk orang tua",
      ],
      en: [
        "Specialized experience with babies 0–12 months",
        "Regular sleep & feeding routines",
        "Developmental stimulation",
        "Parenting guidance for parents",
      ],
    },
    hourly: 150,
    monthly: 4000000,
  },
];

export const formatIDR = (n: number) => "Rp " + n.toLocaleString("id-ID");
