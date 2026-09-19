import {
  Baby,
  CalendarClock,
  Clock,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
  includes: string[];
  /** harga per jam (IDR ribuan) */
  hourly: number;
  /** harga per bulan (IDR), null kalau tidak tersedia */
  monthly: number | null;
};

export const services: Service[] = [
  {
    slug: "full-time",
    name: "Full-Time Babysitting",
    icon: Baby,
    description:
      "Perawatan anak penuh waktu di rumah Anda, cocok untuk orang tua yang bekerja. Anak diasuh, diajak bermain, belajar, dan ditemani sepanjang hari.",
    includes: [
      "8–10 jam per hari, 5–6 hari per minggu",
      "Menemani makan, mandi, dan tidur siang",
      "Aktivitas edukatif & bermain kreatif",
      "Laporan harian perkembangan anak",
    ],
    hourly: 80,
    monthly: 3500000,
  },
  {
    slug: "part-time",
    name: "Part-Time Babysitting",
    icon: Clock,
    description:
      "Fleksibel sesuai jadwal keluarga Anda — pagi, sore, atau beberapa hari dalam seminggu. Solusi tepat untuk rutinitas yang berubah-ubah.",
    includes: [
      "Minimal 4 jam per kunjungan",
      "Jadwal fleksibel mingguan",
      "Membantu makan & aktivitas ringan",
      "Komunikasi rutin via WhatsApp",
    ],
    hourly: 100,
    monthly: 2200000,
  },
  {
    slug: "event-care",
    name: "Event / Occasion Care",
    icon: CalendarClock,
    description:
      "Jasa pengasuhan untuk acara spesial: pernikahan, arisan, atau acara keluarga. Anak-anak aman & terhibur selama acara berlangsung.",
    includes: [
      "Minimal 3 jam, bisa lebih anak",
      "Games & aktivitas kelompok",
      "Siap tugas di lokasi acara",
      "Bisa penanganan lebih dari 1 anak",
    ],
    hourly: 150,
    monthly: null,
  },
  {
    slug: "newborn",
    name: "Newborn Specialization",
    icon: HeartHandshake,
    description:
      "Perawatan khusus bayi 0–12 bulan dengan pendekatan lembut: pola tidur,ASI, hingga stimulasi tumbuh kembang sesuai usia.",
    includes: [
      "Pengalaman khusus bayi 0–12 bulan",
      "Pola tidur & asi teratur",
      "Stimulasi tumbuh kembang",
      "Edukasi parenting untuk orang tua",
    ],
    hourly: 150,
    monthly: 4000000,
  },
];

export const formatIDR = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
