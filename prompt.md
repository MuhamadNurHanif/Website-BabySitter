# 🍼 NOVIN NANNY - Website Development Prompt

## 📋 PROJECT OVERVIEW
Buat website portfolio untuk **Novin Nanny** - personal branding babysitter services yang modern, interaktif, dan responsive. Website ini adalah landing page/portfolio statis tanpa database backend, fokus pada showcasing services dan conversion (hubungi/book).

---

## 🛠️ TECHNOLOGY STACK

### Frontend Framework
- **Next.js 14** dengan App Router (SSG untuk static pages)
  - Zero configuration deployment di Vercel
  - Built-in image optimization
  - API routes hanya untuk email handling (contact form)

### Styling & UI Components
- **Tailwind CSS 3** untuk utility-first styling
- **shadcn/ui** untuk reusable, accessible components
  - Button, Card, Form, Input, TextArea, Dialog, Badge, Avatar
- **Framer Motion** untuk smooth animations & interactions
  - Page transitions
  - Scroll animations
  - Hover effects
  - Stagger animations untuk list items

### Form & Validation
- **React Hook Form** untuk contact form state management
- **Zod** untuk schema validation client-side
- **Resend** untuk email delivery (gratis 3000 email/hari)

### Icons & Assets
- **Lucide React** untuk SVG icons
- Local image assets di `/public` folder
- No external image CDN (self-hosted)

### Deployment
- **Vercel** (free tier, auto-deploy dari GitHub)
- Environment variables: `RESEND_API_KEY`, `OWNER_EMAIL`

---

## 📱 STRUKTUR HALAMAN (SITEMAP)

```
root/
├── page.tsx                    # HOMEPAGE / LANDING PAGE
├── about/page.tsx              # ABOUT ME / PROFIL
├── services/page.tsx           # SERVICES & PRICING
├── testimonials/page.tsx       # CUSTOMER REVIEWS (STATIC DATA)
├── contact/page.tsx            # CONTACT FORM
└── api/
    └── contact/route.ts        # EMAIL HANDLER
```

### Detail Setiap Halaman:

#### **1. HOMEPAGE** (`/`)
```
Structure:
├── Navigation Bar (sticky/fixed)
├── Hero Section
│   ├── Large background image / gradient
│   ├── Main heading: "Novin Nanny - Trusted Childcare"
│   ├── Subheading: Value proposition
│   └── CTA Button: "Book Now" / "Hubungi Sekarang"
├── Quick Stats Section (animated counters)
│   ├── Years of Experience
│   ├── Families Served
│   └── Rating/Reviews
├── Featured Services (3-4 cards)
├── Latest Testimonials (carousel/slider)
├── About Preview (dengan foto)
├── CTA Section (hire now)
└── Footer

Interactive Elements:
- Animated hero text on scroll
- Hover effects on service cards
- Testimonial slider auto-play dengan manual controls
- Smooth scroll to sections
```

#### **2. ABOUT ME** (`/about`)
```
Structure:
├── Hero: "Tentang Novin"
├── Main Profile Section
│   ├── Professional photo (circle/custom shape)
│   ├── Intro paragraph
│   └── Key highlights (animated list)
├── Background & Experience
│   ├── Timeline of experience
│   └── Professional journey
├── Qualifications & Certifications
│   ├── Badges/certificates
│   └── Trained/certified in
├── Philosophy/Approach
│   └── Childcare principles
├── Why Choose Novin
│   └── 4-5 unique selling points (icon cards)
└── CTA: "Book Consultation"

Interactive Elements:
- Parallax scrolling pada foto
- Timeline animations on scroll
- Icon animations
- Hover reveals untuk detail points
```

#### **3. SERVICES** (`/services`)
```
Structure:
├── Hero: "Our Services"
├── Service Categories (grid/list)
│   ├── Service Card #1
│   │   ├── Icon
│   │   ├── Service name
│   │   ├── Description
│   │   ├── Includes (checklist)
│   │   ├── Price range
│   │   └── "Learn More" / "Book" button
│   ├── Service Card #2
│   ├── Service Card #3
│   └── Service Card #4
├── Pricing Table (comparison)
└── FAQ Section (accordion)

Services Examples:
1. Full-Time Babysitting
2. Part-Time Babysitting  
3. Event/Occasion Care
4. Newborn Specialization

Interactive Elements:
- Card hover: lift effect, shadow expand
- On hover: More details slide in
- Price toggle (hourly/monthly)
- Accordion expand/collapse dengan smooth animation
- Mobile-friendly: tabs instead of cards
```

#### **4. TESTIMONIALS** (`/testimonials`)
```
Structure:
├── Hero: "What Parents Say"
├── Filter Buttons (optional)
│   ├── All
│   ├── 5 Stars
│   ├── Recent
├── Testimonials Grid (3 columns, responsive)
│   ├── Review Card
│   │   ├── Star rating
│   │   ├── Review text (quoted)
│   │   ├── Parent name
│   │   ├── Parent photo (avatar)
│   │   └── Date
└── CTA: "Leave a Review" / "Book Now"

Data Structure (hardcoded in file):
const testimonials = [
  {
    id: 1,
    name: "Mr. James",
    avatar: "/images/avatar-1.jpg",
    rating: 5,
    text: "Novin sangat care dengan anak saya...",
    date: "2 bulan lalu"
  },
  ...
]

Interactive Elements:
- Card stagger animation on page load
- Rating stars animated fill
- Hover: card elevation, glow effect
- Filter button active state animation
- Smooth transition saat filter
```

#### **5. CONTACT** (`/contact`)
```
Structure:
├── Hero: "Get in Touch"
├── Two Column Layout
│   ├── Left: Contact Information
│   │   ├── Address with map icon
│   │   ├── Phone (clickable link)
│   │   ├── WhatsApp (link dengan CTA)
│   │   ├── Email (link)
│   │   └── Operating hours
│   │
│   └── Right: Contact Form
│       ├── Name input
│       ├── Email input
│       ├── Phone input
│       ├── Service interested (select dropdown)
│       ├── Message textarea
│       └── Submit button (loading state)
├── Embedded Google Map (service area)
└── Quick Links Section

Interactive Elements:
- Form validation real-time (Zod)
- Error messages with animations
- Loading state: button spinner
- Success message: toast/modal
- Input focus: highlight border, placeholder fade
- WhatsApp link: tooltip "Chat with us"
- Form reset after successful submit
```

---

## 🎨 STYLING & INTERACTIVE DESIGN REQUIREMENTS

### Color Palette
```
Primary:      #FF6B9D (Pink/Warm - childcare friendly)
Secondary:    #4ECDC4 (Teal - trust, calm)
Accent:       #FFD93D (Yellow - joy, energy)
Dark:         #2C3E50 (Dark blue-gray)
Light:        #F8F9FA (Off-white)
Success:      #2ECC71 (Green)
```

### Typography
```
Headings:     'Poppins' or 'Inter' (bold, modern)
Body:         'Poppins' or 'Inter' (regular, readable)
Sizes:
  - H1: 48px (desktop) / 32px (mobile)
  - H2: 36px (desktop) / 28px (mobile)
  - H3: 28px (desktop) / 24px (mobile)
  - Body: 16px / 14px (mobile)
```

### Spacing & Layout
```
Gap/Padding:  8px, 16px, 24px, 32px, 48px (8px scale)
Container:    Max-width 1280px (px-6 mobile, px-8 tablet)
Grid:         12-column or auto-flow
Border Radius: 8px (default), 16px (cards), 24px (large elements)
```

### Animation & Transitions
```
Duration:     200ms (quick), 300ms (standard), 500ms (slow)
Easing:       ease-in-out (default), ease-out (enter), ease-in (exit)

Specific Animations:
1. Page Entrance
   - Fade in + slide up (300ms)
   - Stagger children 100ms each

2. Scroll Animations
   - Title: Fade + slide up on scroll
   - Cards: Scale + fade on scroll (0.8 → 1)
   - Images: Parallax effect (-5% to 5% transform)

3. Hover Effects
   - Buttons: Scale 1.05 + shadow grow
   - Cards: Shadow expand + y-translate -4px
   - Links: Underline expand from left

4. Interactive Elements
   - Input focus: Border color change + glow shadow
   - Radio/Checkbox: Scale up when checked
   - Dropdown: Slide down + fade in

5. Loading States
   - Button: Spinner animation (rotate 360° infinite)
   - Form: Skeleton loaders on input
   - Page: Subtle fade + slide transition
```

### Responsive Design
```
Breakpoints:
- Mobile:    < 640px   (Tailwind: no prefix)
- Tablet:    640-1024px  (Tailwind: md:)
- Desktop:   > 1024px    (Tailwind: lg:)

Mobile-First Approach:
- Single column layout by default
- Stack cards vertically
- Full-width inputs
- Larger touch targets (min 48x48px)
- Optimized images (WebP when possible)
```

### Interactive Components

#### **Buttons**
```tsx
// Primary CTA
<button className="bg-gradient-to-r from-[#FF6B9D] to-[#FFD93D] 
  text-white px-8 py-3 rounded-lg font-bold
  hover:shadow-lg hover:scale-105
  transition-all duration-200
  active:scale-95">
  Book Now
</button>

// Secondary
<button className="border-2 border-primary text-primary
  hover:bg-primary hover:text-white
  transition-colors duration-200">
  Learn More
</button>
```

#### **Cards**
```tsx
// Service Card
<div className="bg-white rounded-lg p-6 shadow-md
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
  cursor-pointer">
  {/* Content */}
</div>
```

#### **Forms**
```tsx
// Input
<input className="border-2 border-gray-200 rounded-lg px-4 py-2
  focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10
  transition-all duration-200
  placeholder-gray-400" />

// Textarea dengan counter
<textarea className="..." 
  maxLength={500}
  onChange={(e) => setCount(e.target.value.length)} />
<span className="text-sm text-gray-500">{count}/500</span>
```

#### **Navigation Bar**
```
Features:
- Sticky/fixed on scroll
- Logo on left
- Menu items (Home, About, Services, Testimonials, Contact)
- Mobile: Hamburger menu dengan sliding drawer
- Active link indicator (underline / bg color)
- Smooth scroll behavior untuk anchor links
```

#### **Testimonial Slider/Carousel**
```
- Auto-play (5 detik)
- Manual controls (prev/next buttons)
- Dot indicators (clickable)
- Fade/slide transition
- Pause on hover
- Touch swipe support (mobile)
```

#### **Service Pricing Selector**
```
- Toggle: Hourly / Monthly
- Smooth price animation (number counter)
- Color highlight untuk selected option
- Tooltip dengan breakdown
```

---

## 🎯 KEY INTERACTIVE FEATURES

### 1. **Smooth Scroll Behavior**
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Navbar height */
}
```

### 2. **Page Transitions**
```
Enter: Fade in + slide up from bottom (300ms)
Exit:  Fade out + slide down (200ms)
Stagger child elements: 50-100ms delay
```

### 3. **Scroll-Triggered Animations**
```
Use Framer Motion for:
- useInView hook untuk detect element in viewport
- Animate property saat in view
- Different animations untuk different sections
```

### 4. **Interactive Hero Section**
```
- Parallax background image (Y offset)
- Animated text reveal
- Button glow on hover
- Scroll down indicator (animated chevron)
```

### 5. **Form Validation Feedback**
```
Real-time:
- Email format validation → red icon
- Character count → updating
- Required fields → asterisk glow
- Submit success → green check + toast
- Submit error → shake animation + error message
```

### 6. **Mobile Menu**
```
- Hamburger icon animation (X rotation)
- Drawer slide from left (300ms)
- Overlay fade in
- Close on link click
- Smooth item animations
```

---

## 📁 FILE STRUCTURE

```
novin-nanny/
├── app/
│   ├── (root)/
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── testimonials/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── layout.tsx            # Root layout (navbar, footer)
│   │   └── globals.css           # Tailwind directives
│   │
│   └── api/
│       └── contact/
│           └── route.ts          # Email handler (Resend)
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ContactForm.tsx
│   ├── TestimonialSlider.tsx
│   └── ui/ (shadcn components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── form.tsx
│       ├── input.tsx
│       └── ...
│
├── lib/
│   ├── testimonials.ts           # Static testimonial data
│   ├── services.ts               # Static service data
│   ├── contact-schema.ts         # Zod validation schema
│   └── email.ts                  # Email templates (optional)
│
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero.jpg
│   │   ├── profile.jpg
│   │   ├── testimonials/
│   │   └── services/
│   └── videos/ (optional)
│
├── styles/
│   └── globals.css
│
├── .env.local                    # Environment variables
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 🚀 DEVELOPMENT CHECKLIST

### Phase 1: Setup
- [ ] Create Next.js 14 project
- [ ] Install dependencies (Tailwind, shadcn, Framer Motion, React Hook Form, Zod, Resend)
- [ ] Setup Tailwind config
- [ ] Setup Framer Motion
- [ ] Install shadcn components needed

### Phase 2: Layout & Components
- [ ] Create Navbar component (sticky, responsive)
- [ ] Create Footer component (links, contact info)
- [ ] Create reusable Button, Card, Input components
- [ ] Create Hero component template

### Phase 3: Pages
- [ ] Build Homepage
- [ ] Build About page
- [ ] Build Services page
- [ ] Build Testimonials page (with slider)
- [ ] Build Contact page (with form)

### Phase 4: Interactions
- [ ] Add page transition animations
- [ ] Add scroll animations (Framer Motion)
- [ ] Add hover effects on all interactive elements
- [ ] Add form validation & feedback
- [ ] Add mobile menu animation

### Phase 5: Integration & Testing
- [ ] Setup Resend API for contact form
- [ ] Test form submission
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test animations performance
- [ ] Test accessibility (a11y)

### Phase 6: Deployment
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Add environment variables
- [ ] Deploy & test live

---

## 📝 NOTES

- Keep animations subtle (300-500ms), not distracting
- Ensure accessibility: ARIA labels, semantic HTML, keyboard navigation
- Mobile-first approach: design for mobile, scale up
- Performance: optimize images, lazy load if needed
- Vercel free tier limits: watch for function duration, use ISR if needed
- Static content: no database, all data hardcoded in .ts files

---

**Ready to build! Let's make Novin Nanny's website shine! 🌟**