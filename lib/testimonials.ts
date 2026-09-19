export type Testimonial = {
  id: number;
  name: string;
  initials: string;
  color: string;
  rating: number;
  text: string;
  service: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bunda Sarah",
    initials: "SA",
    color: "#FF6B9D",
    rating: 5,
    text: "Novin sangat care dengan anak saya. Putri saya yang dulu susah makan sekarang lahap dan semakin mandiri. Setiap pulang selalu ada cerita seru!",
    service: "Full-Time Babysitting",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    name: "Mr. James",
    initials: "JA",
    color: "#4ECDC4",
    rating: 5,
    text: "Profesional, tepat waktu, dan komunikasinya jelas. Anak kami langsung nyaman sejak hari pertama. Sangat recommended untuk keluarga sibuk.",
    service: "Part-Time Babysitting",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    name: "Bunda Ratna",
    initials: "RA",
    color: "#FFD93D",
    rating: 5,
    text: "Novin membantu kami saat newborn, dari pola tidur sampai tips ASI. Seperti punya kakak sendiri di rumah. Thank you Novin!",
    service: "Newborn Specialization",
    date: "2 bulan lalu",
  },
  {
    id: 4,
    name: "Bapak Dharma",
    initials: "DH",
    color: "#2ECC71",
    rating: 5,
    text: "Sewa untuk acara pernikahan kami, Novin mengurus 5 anak sekaligus dengan sabar. Para tamu bisa tenang menikmati acara.",
    service: "Event / Occasion Care",
    date: "3 bulan lalu",
  },
  {
    id: 5,
    name: "Bunda Melissa",
    initials: "ME",
    color: "#FF6B9D",
    rating: 5,
    text: "Anak saya special needs dan Novin sabar banget menghadapinya. Mencari babysitter yang paham itu susah, akhirnya ketemu di sini.",
    service: "Part-Time Babysitting",
    date: "4 bulan lalu",
  },
  {
    id: 6,
    name: "Bapak Andre",
    initials: "AN",
    color: "#4ECDC4",
    rating: 5,
    text: "Sudah setahun lebih Novin mengasuh kedua anak kami. rumah selalu rapi, anak-anak sehat dan happy. Worth every rupiah.",
    service: "Full-Time Babysitting",
    date: "5 bulan lalu",
  },
];
