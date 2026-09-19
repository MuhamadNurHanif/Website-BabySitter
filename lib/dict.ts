// Kamus bilingual seluruh copy situs. `en` dianotasi `Dict` agar bentuknya
// selalu sinkron dengan `id`.

const id = {
    nav: {
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "Tentang" },
        { href: "/services", label: "Layanan" },
        { href: "/testimonials", label: "Testimoni" },
        { href: "/contact", label: "Kontak" },
      ],
      book: "Book Now",
      chatWa: "Chat WhatsApp",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
    },
    waFloat: "Chat WhatsApp dengan Novin",
    footer: {
      tagline:
        "Perawatan anak yang hangat, aman, dan terpercaya untuk keluarga Indonesia.",
      navigation: "Navigasi",
      contact: "Kontak",
      hoursLabel: "Jam Operasional",
      hoursValue: "Senin – Sabtu, 07.00 – 20.00 WITA",
      madeWith: "Dibuat dengan ♥ untuk keluarga Indonesia.",
    },
    home: {
      badge: "Trusted Childcare · Bali",
      titleA: "Novin Nanny — ",
      titleB: "Trusted Childcare",
      titleC: " untuk Buah Hati Anda",
      sub: "Perawatan anak yang hangat, aman, dan penuh perhatian. Novin mendampingi tumbuh kembang anak Anda dengan pengalaman lebih dari 5 tahun.",
      bookNow: "Book Now",
      seeServices: "Lihat Layanan",
      photoAlt: "Novin bersama anak asuhnya",
      rating: "5.0 Rating",
      ratingSub: "dari 50+ keluarga",
      available: "Tersedia hari ini",
      scrollAria: "Scroll ke bawah",
      stats: [
        { value: 5, suffix: "+", decimals: 0, label: "Tahun Pengalaman" },
        { value: 50, suffix: "+", decimals: 0, label: "Keluarga Terlayani" },
        { value: 5, suffix: "", decimals: 1, label: "Rating Kepuasan" },
      ],
      featuredTitle: "Layanan Unggulan",
      featuredSub:
        "Pilihan layanan fleksibel yang menyesuaikan kebutuhan keluarga Anda.",
      allServices: "Lihat semua layanan",
      reviewsTitle: "Kata Para Orang Tua",
      reviewsSub: "Kepercayaan keluarga adalah prioritas kami.",
      aboutTitle: "Kenalan dengan Novin",
      aboutSub:
        "Novin adalah babysitter profesional yang percaya setiap anak unik dan layak mendapatkan perawatan terbaik. Dengan pendekatan yang sabar dan penuh kasih sayang, Novin menjadi partner terpercaya bagi puluhan keluarga di Bali.",
      aboutPhotoAlt: "Novin mengasuh anak",
      aboutPoints: [
        "5+ tahun pengalaman mengasuh anak",
        "Terlatih pertolongan pertama (first aid)",
        "Spesialis newborn & tumbuh kembang anak",
      ],
      more: "Selengkapnya",
      ctaTitle: "Siap Percayakan Buah Hati Anda?",
      ctaSub:
        "Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan keluarga Anda hari ini.",
      ctaButton: "Hubungi Sekarang",
    },
    about: {
      heroTitle: "Tentang Novin",
      heroSub:
        "Babysitter profesional yang percaya setiap anak layak mendapatkan perawatan terbaik.",
      photoAlt: "Novin bersama anak asuh",
      hello: "Halo, saya Novin! 👋",
      intro:
        "Sejak 2019 saya mengasuh anak-anak dengan satu prinsip sederhana: perlakukan setiap anak seperti keluarga sendiri. Bagi saya, menjadi babysitter bukan sekadar pekerjaan — ini tentang membangun kepercayaan dengan keluarga dan menjadi tempat anak merasa aman untuk tumbuh.",
      points: [
        "Pengalaman 5+ tahun mengasuh bayi hingga anak usia sekolah",
        "Dipercaya 50+ keluarga di Bali & sekitarnya",
        "Ramah, sabar, dan komunikatif",
      ],
      timelineTitle: "Perjalanan Profesional",
      timeline: [
        {
          year: "2019",
          title: "Memulai Karier",
          text: "Mulai mengasuh anak keluarga terdekat dan mengikuti pelatihan dasar pengasuhan anak.",
        },
        {
          year: "2021",
          title: "Sertifikasi First Aid",
          text: "Menyelesaikan pelatihan pertolongan pertama dan CPR khusus bayi & anak.",
        },
        {
          year: "2023",
          title: "Spesialisasi Newborn",
          text: "Fokus pada perawatan bayi 0–12 bulan: pola tidur, ASI, dan stimulasi tumbuh kembang.",
        },
        {
          year: "2025",
          title: "50+ Keluarga Bahagia",
          text: "Dipercaya lebih dari 50 keluarga di Bali untuk layanan full-time, part-time, dan event care.",
        },
      ],
      qualsTitle: "Kualifikasi & Sertifikasi",
      qualsSub: "Terus belajar untuk memberikan yang terbaik bagi anak Anda.",
      quals: [
        "Pelatihan Dasar Pengasuhan Anak",
        "Sertifikasi First Aid & CPR (Bayi & Anak)",
        "Kelas Stimulasi Tumbuh Kembang",
        "Pelatihan Gizi & MPASI",
        "Child Safety & Protection Training",
      ],
      philosophyTitle: "Filosofi Pengasuhan",
      philosophy:
        "“Anak tumbuh baik ketika merasa aman dan dicintai. Tugas saya memastikan setiap hari bersama mereka penuh kehangatan, permainan, dan pembelajaran — sementara orang tua bisa bekerja dengan tenang.”",
      whyTitle: "Kenapa Memilih Novin?",
      why: [
        {
          title: "Seperti Keluarga Sendiri",
          text: "Anak diasuh dengan kasih sayang tulus, bukan sekadar dijaga.",
        },
        {
          title: "Aman & Terpercaya",
          text: "Bersertifikat first aid, latar belakang jelas, dan bisa cek referensi.",
        },
        {
          title: "Komunikasi Terbuka",
          text: "Update harian perkembangan anak langsung ke orang tua.",
        },
        {
          title: "Edukatif & Menyenangkan",
          text: "Bermain sambil belajar dengan aktivitas sesuai usia anak.",
        },
        {
          title: "Fleksibel",
          text: "Jadwal menyesuaikan kebutuhan keluarga Anda.",
        },
      ],
      ctaTitle: "Yuk, Kenalan Lebih Dekat!",
      ctaSub:
        "Jadwalkan konsultasi gratis untuk memastikan Novin cocok dengan keluarga Anda.",
      ctaButton: "Book Consultation",
    },
    services: {
      heroTitle: "Our Services",
      heroSub:
        "Pilih layanan yang paling pas untuk kebutuhan keluarga Anda — semua dengan standar perawatan yang sama tingginya.",
      pricingTitle: "Daftar Harga",
      pricingSub: "Harga transparan, tanpa biaya tersembunyi.",
      hourly: "Per Jam",
      monthly: "Per Bulan",
      tableService: "Layanan",
      tableHourly: "Harga per Jam",
      tableMonthly: "Harga per Bulan",
      notes: {
        event: "Min. 3 jam",
        partTime: "Min. 4 jam/kunjungan",
        longTerm: "Bisa nego untuk jangka panjang",
        hourlyOnly: "Tersedia per jam saja",
      },
      trialNote: "Konsultasi & trial 1 jam gratis untuk keluarga baru.",
      faqTitle: "Pertanyaan yang Sering Diajukan",
      faqs: [
        {
          q: "Bagaimana cara booking layanan?",
          a: "Isi form di halaman Contact atau chat WhatsApp. Kami akan jadwalkan konsultasi & trial gratis 1 jam, lalu mulai sesuai kesepakatan.",
        },
        {
          q: "Apakah bisa trial dulu sebelum commit?",
          a: "Tentu. Trial 1 jam gratis untuk keluarga baru, supaya anak dan orang tua nyaman dulu dengan Novin.",
        },
        {
          q: "Berapa anak maksimal yang bisa dijaga?",
          a: "Untuk layanan reguler 1–2 anak. Untuk event care, bisa lebih — hubungi kami untuk penawaran khusus.",
        },
        {
          q: "Bagaimana sistem pembayarannya?",
          a: "Per jam untuk layanan fleksibel, per minggu/bulan untuk layanan rutin. Pembayaran via transfer bank atau e-wallet.",
        },
        {
          q: "Bagaimana kalau perlu membatalkan jadwal?",
          a: "Bebas reschedule dengan konfirmasi minimal 12 jam sebelumnya. Pembatalan mendadak dikenakan 50% tarif.",
        },
        {
          q: "Apakah Novin bersedia ke luar area?",
          a: "Area utama Bali. Luar area dikenakan biaya transportasi tambahan.",
        },
      ],
      bookNow: "Book Sekarang",
    },
    testimonials: {
      heroTitle: "What Parents Say",
      heroSub:
        "Cerita nyata dari keluarga yang telah mempercayakan buah hatinya pada Novin.",
      filters: ["Semua", "5 Bintang", "Terbaru"],
      ctaTitle: "Sudah Jadi Klien Novin?",
      ctaSub:
        "Bagikan pengalaman Anda — atau kenali Novin lebih dulu sebelum mempercayakan si kecil.",
      leaveReview: "Tinggalkan Review",
      bookNow: "Book Now",
      ratingAria: "Rating 5 dari 5",
    },
    contact: {
      heroTitle: "Get in Touch",
      heroSub:
        "Punya pertanyaan atau siap booking? Hubungi Novin lewat form atau chat langsung.",
      phone: "Telepon",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat langsung dengan Novin",
      whatsappTooltip: "Chat with us",
      email: "Email",
      area: "Area Layanan",
      hoursLabel: "Jam Operasional",
      formTitle: "Kirim Pesan",
      formSub: "Isi form di bawah, Novin akan membalas dalam 1x24 jam.",
      nameLabel: "Nama",
      namePh: "Nama Anda",
      emailLabel: "Email",
      emailPh: "nama@email.com",
      phoneLabel: "Telepon/WhatsApp",
      phonePh: "+62 812-xxxx-xxxx",
      serviceLabel: "Layanan yang Diminati",
      servicePh: "Pilih layanan",
      serviceOther: "Lainnya / Belum Yakin",
      messageLabel: "Pesan",
      messagePh:
        "Ceritakan kebutuhan keluarga Anda: usia anak, jadwal, lokasi...",
      submit: "Kirim Pesan",
      sending: "Mengirim...",
      successToastTitle: "Pesan terkirim!",
      successToastDesc: "Novin akan membalas secepatnya. Terima kasih! 💕",
      errorToastTitle: "Gagal mengirim pesan",
      errorToastDesc: "Coba lagi atau hubungi via WhatsApp.",
      successNote:
        "✓ Pesan Anda sudah terkirim. Form siap digunakan lagi.",
      mapTitle: "Area Layanan",
      mapAria: "Peta area layanan Bali",
      required: "*",
    },
    errors: {
      nameMin: "Nama minimal 2 karakter",
      email: "Format email tidak valid",
      phoneMin: "Nomor telepon minimal 8 digit",
      phoneInvalid: "Nomor telepon tidak valid",
      service: "Pilih layanan yang diminati",
      msgMin: "Pesan minimal 10 karakter",
      msgMax: "Pesan maksimal 500 karakter",
    },
};

export type Dict = typeof id;

const en: Dict = {
    nav: {
      items: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
      ],
      book: "Book Now",
      chatWa: "Chat on WhatsApp",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    waFloat: "Chat with Novin on WhatsApp",
    footer: {
      tagline:
        "Warm, safe, and trusted childcare for Indonesian families.",
      navigation: "Navigation",
      contact: "Contact",
      hoursLabel: "Operating Hours",
      hoursValue: "Mon – Sat, 07.00 – 20.00 WITA",
      madeWith: "Made with ♥ for Indonesian families.",
    },
    home: {
      badge: "Trusted Childcare · Bali",
      titleA: "Novin Nanny — ",
      titleB: "Trusted Childcare",
      titleC: " for Your Little One",
      sub: "Warm, safe, and attentive childcare. Novin supports your child's growth with over 5 years of hands-on experience.",
      bookNow: "Book Now",
      seeServices: "View Services",
      photoAlt: "Novin with her foster child",
      rating: "5.0 Rating",
      ratingSub: "from 50+ families",
      available: "Available today",
      scrollAria: "Scroll down",
      stats: [
        { value: 5, suffix: "+", decimals: 0, label: "Years of Experience" },
        { value: 50, suffix: "+", decimals: 0, label: "Families Served" },
        { value: 5, suffix: "", decimals: 1, label: "Satisfaction Rating" },
      ],
      featuredTitle: "Featured Services",
      featuredSub:
        "Flexible service options tailored to your family's needs.",
      allServices: "See all services",
      reviewsTitle: "What Parents Say",
      reviewsSub: "Your family's trust is our priority.",
      aboutTitle: "Meet Novin",
      aboutSub:
        "Novin is a professional babysitter who believes every child is unique and deserves the best care. With a patient and loving approach, Novin has become a trusted partner for dozens of families in Bali.",
      aboutPhotoAlt: "Novin caring for a child",
      aboutPoints: [
        "5+ years caring for children of all ages",
        "Trained in first aid",
        "Newborn & child development specialist",
      ],
      more: "Learn more",
      ctaTitle: "Ready to Entrust Your Little One?",
      ctaSub:
        "Free consultation, no commitment. Tell us your family's needs today.",
      ctaButton: "Contact Us",
    },
    about: {
      heroTitle: "About Novin",
      heroSub:
        "A professional babysitter who believes every child deserves the very best care.",
      photoAlt: "Novin with her foster child",
      hello: "Hi, I'm Novin! 👋",
      intro:
        "Since 2019 I have cared for children with one simple principle: treat every child like my own family. To me, being a babysitter is more than a job — it's about building trust with families and being a place where children feel safe to grow.",
      points: [
        "5+ years caring for newborns to school-age children",
        "Trusted by 50+ families in Bali & beyond",
        "Friendly, patient, and communicative",
      ],
      timelineTitle: "Professional Journey",
      timeline: [
        {
          year: "2019",
          title: "Starting Out",
          text: "Began caring for children of nearby families and completed basic childcare training.",
        },
        {
          year: "2021",
          title: "First Aid Certified",
          text: "Completed first aid and CPR training specialized for infants & children.",
        },
        {
          year: "2023",
          title: "Newborn Specialization",
          text: "Focused on infant care (0–12 months): sleep patterns, breastfeeding support, and developmental stimulation.",
        },
        {
          year: "2025",
          title: "50+ Happy Families",
          text: "Trusted by over 50 families in Bali for full-time, part-time, and event care services.",
        },
      ],
      qualsTitle: "Qualifications & Certifications",
      qualsSub: "Always learning to give your child the very best.",
      quals: [
        "Basic Childcare Training",
        "First Aid & CPR Certification (Infants & Children)",
        "Child Development Stimulation Class",
        "Nutrition & Solid Food (MPASI) Training",
        "Child Safety & Protection Training",
      ],
      philosophyTitle: "Care Philosophy",
      philosophy:
        "“Children thrive when they feel safe and loved. My job is to make every day together full of warmth, play, and learning — while parents can work with peace of mind.”",
      whyTitle: "Why Choose Novin?",
      why: [
        {
          title: "Like Her Own Family",
          text: "Children are cared for with genuine affection, not just supervised.",
        },
        {
          title: "Safe & Trustworthy",
          text: "First aid certified, verifiable background, references available.",
        },
        {
          title: "Open Communication",
          text: "Daily updates on your child's development, straight to parents.",
        },
        {
          title: "Educational & Fun",
          text: "Learning through play with age-appropriate activities.",
        },
        {
          title: "Flexible",
          text: "Schedules that adapt to your family's needs.",
        },
      ],
      ctaTitle: "Let's Get to Know Each Other!",
      ctaSub:
        "Schedule a free consultation to make sure Novin is the right fit for your family.",
      ctaButton: "Book Consultation",
    },
    services: {
      heroTitle: "Our Services",
      heroSub:
        "Choose the service that best fits your family — all with the same high standard of care.",
      pricingTitle: "Pricing",
      pricingSub: "Transparent pricing, no hidden fees.",
      hourly: "Hourly",
      monthly: "Monthly",
      tableService: "Service",
      tableHourly: "Hourly Rate",
      tableMonthly: "Monthly Rate",
      notes: {
        event: "Min. 3 hours",
        partTime: "Min. 4 hours/visit",
        longTerm: "Negotiable for long-term",
        hourlyOnly: "Available hourly only",
      },
      trialNote: "Free consultation & 1-hour trial for new families.",
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          q: "How do I book a service?",
          a: "Fill in the form on the Contact page or chat via WhatsApp. We'll schedule a free consultation & 1-hour trial, then start as agreed.",
        },
        {
          q: "Can we do a trial before committing?",
          a: "Of course. The 1-hour trial is free for new families, so both child and parents can feel comfortable with Novin first.",
        },
        {
          q: "What's the maximum number of children?",
          a: "Regular services cover 1–2 children. For event care, more is possible — contact us for a special quote.",
        },
        {
          q: "How does payment work?",
          a: "Hourly for flexible services, weekly/monthly for routine care. Payment via bank transfer or e-wallet.",
        },
        {
          q: "What if I need to cancel a schedule?",
          a: "Free rescheduling with at least 12 hours' notice. Late cancellations incur a 50% charge.",
        },
        {
          q: "Is Novin available outside the area?",
          a: "Main coverage is Bali. Additional transport fees apply outside the area.",
        },
      ],
      bookNow: "Book Now",
    },
    testimonials: {
      heroTitle: "What Parents Say",
      heroSub:
        "Real stories from families who have entrusted their little ones to Novin.",
      filters: ["All", "5 Stars", "Recent"],
      ctaTitle: "Already a Novin Client?",
      ctaSub:
        "Share your experience — or get to know Novin first before entrusting your little one.",
      leaveReview: "Leave a Review",
      bookNow: "Book Now",
      ratingAria: "Rated 5 out of 5",
    },
    contact: {
      heroTitle: "Get in Touch",
      heroSub:
        "Questions or ready to book? Reach Novin through the form or a direct chat.",
      phone: "Phone",
      whatsapp: "WhatsApp",
      whatsappValue: "Chat directly with Novin",
      whatsappTooltip: "Chat with us",
      email: "Email",
      area: "Service Area",
      hoursLabel: "Operating Hours",
      formTitle: "Send a Message",
      formSub:
        "Fill in the form below and Novin will reply within 24 hours.",
      nameLabel: "Name",
      namePh: "Your name",
      emailLabel: "Email",
      emailPh: "you@email.com",
      phoneLabel: "Phone/WhatsApp",
      phonePh: "+62 812-xxxx-xxxx",
      serviceLabel: "Service of Interest",
      servicePh: "Choose a service",
      serviceOther: "Other / Not Sure Yet",
      messageLabel: "Message",
      messagePh:
        "Tell us about your family's needs: child's age, schedule, location...",
      submit: "Send Message",
      sending: "Sending...",
      successToastTitle: "Message sent!",
      successToastDesc: "Novin will get back to you soon. Thank you! 💕",
      errorToastTitle: "Failed to send message",
      errorToastDesc: "Try again or reach out via WhatsApp.",
      successNote: "✓ Your message has been sent. The form is ready to use again.",
      mapTitle: "Service Area",
      mapAria: "Map of service area in Bali",
      required: "*",
    },
    errors: {
      nameMin: "Name must be at least 2 characters",
      email: "Invalid email format",
      phoneMin: "Phone number must be at least 8 digits",
      phoneInvalid: "Invalid phone number",
      service: "Please choose a service",
      msgMin: "Message must be at least 10 characters",
      msgMax: "Message must be at most 500 characters",
    },
};

export const dictionaries: Record<"id" | "en", Dict> = { id, en };
