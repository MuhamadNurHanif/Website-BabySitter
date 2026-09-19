import type { LText } from "@/lib/services";

export type Testimonial = {
  id: number;
  name: string;
  initials: string;
  color: string;
  rating: number;
  text: LText;
  service: LText;
  date: LText;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bunda Sarah",
    initials: "SA",
    color: "#FF6B9D",
    rating: 5,
    text: {
      id: "Novin sangat care dengan anak saya. Putri saya yang dulu susah makan sekarang lahap dan semakin mandiri. Setiap pulang selalu ada cerita seru!",
      en: "Novin truly cares about my daughter. She used to be a picky eater — now she eats well and is more independent. There's always a fun story when she gets home!",
    },
    service: { id: "Full-Time Babysitting", en: "Full-Time Babysitting" },
    date: { id: "2 minggu lalu", en: "2 weeks ago" },
  },
  {
    id: 2,
    name: "Mr. James",
    initials: "JA",
    color: "#4ECDC4",
    rating: 5,
    text: {
      id: "Profesional, tepat waktu, dan komunikasinya jelas. Anak kami langsung nyaman sejak hari pertama. Sangat recommended untuk keluarga sibuk.",
      en: "Professional, punctual, and clear communication. Our child felt at ease from day one. Highly recommended for busy families.",
    },
    service: { id: "Part-Time Babysitting", en: "Part-Time Babysitting" },
    date: { id: "1 bulan lalu", en: "1 month ago" },
  },
  {
    id: 3,
    name: "Bunda Ratna",
    initials: "RA",
    color: "#FFD93D",
    rating: 5,
    text: {
      id: "Novin membantu kami saat newborn, dari pola tidur sampai tips ASI. Seperti punya kakak sendiri di rumah. Thank you Novin!",
      en: "Novin helped us through the newborn stage, from sleep patterns to breastfeeding tips. Like having an older sister at home. Thank you, Novin!",
    },
    service: { id: "Newborn Specialization", en: "Newborn Specialization" },
    date: { id: "2 bulan lalu", en: "2 months ago" },
  },
  {
    id: 4,
    name: "Bapak Dharma",
    initials: "DH",
    color: "#2ECC71",
    rating: 5,
    text: {
      id: "Sewa untuk acara pernikahan kami, Novin mengurus 5 anak sekaligus dengan sabar. Para tamu bisa tenang menikmati acara.",
      en: "We hired Novin for our wedding — she patiently looked after 5 kids at once. Our guests could relax and enjoy the celebration.",
    },
    service: { id: "Event / Occasion Care", en: "Event / Occasion Care" },
    date: { id: "3 bulan lalu", en: "3 months ago" },
  },
  {
    id: 5,
    name: "Bunda Melissa",
    initials: "ME",
    color: "#FF6B9D",
    rating: 5,
    text: {
      id: "Anak saya special needs dan Novin sabar banget menghadapinya. Mencari babysitter yang paham itu susah, akhirnya ketemu di sini.",
      en: "My child has special needs and Novin is incredibly patient with them. Finding a babysitter who understands is hard — we finally found her here.",
    },
    service: { id: "Part-Time Babysitting", en: "Part-Time Babysitting" },
    date: { id: "4 bulan lalu", en: "4 months ago" },
  },
  {
    id: 6,
    name: "Bapak Andre",
    initials: "AN",
    color: "#4ECDC4",
    rating: 5,
    text: {
      id: "Sudah setahun lebih Novin mengasuh kedua anak kami. Rumah selalu rapi, anak-anak sehat dan happy. Worth every rupiah.",
      en: "Novin has cared for our two kids for over a year now. The house stays tidy, the kids are healthy and happy. Worth every rupiah.",
    },
    service: { id: "Full-Time Babysitting", en: "Full-Time Babysitting" },
    date: { id: "5 bulan lalu", en: "5 months ago" },
  },
];
