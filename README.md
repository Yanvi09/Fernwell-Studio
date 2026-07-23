# 🌿 Fernwell Studio

*A boutique yoga & pilates studio website with a complete class booking experience and a simulated payment gateway.*

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v3-38B2AC?logo=tailwind-css)
![Netlify](https://img.shields.io/badge/Deployment-Netlify-00C7B7?logo=netlify)

</p>

## 🔗 Live Demo

👉 **https://your-live-demo-link.netlify.app**

---

# 📖 Overview

Fernwell Studio is a premium yoga and pilates studio website featuring a complete multi-step booking experience with a simulated payment gateway.

Rather than following the typical cream-and-terracotta wellness aesthetic, the design embraces deep botanical greens, editorial typography, organic shapes, and generous whitespace to create a distinctive luxury wellness brand.

This project was built as a companion piece to **Lumetric**, demonstrating the ability to design both warm consumer-facing experiences and complex dashboard interfaces.

---

# ✨ Key Features

### 🧘 Complete Booking Experience

- Multi-step booking wizard
- Class selection
- Date & time selection
- Contact information form
- Payment step
- Booking confirmation

---

### 📅 Interactive Schedule

- Weekly desktop schedule
- Mobile-friendly schedule
- Clickable class slots
- Automatically pre-fills booking information

---

### 💳 Simulated Payment Gateway

- Card number formatting
- Processing animation
- Success & failure states
- Test payment support

**Test Card**

```
4242 4242 4242 4242
```

Any other card number displays a styled decline message.

---

### 👨‍🏫 Instructor Profiles

- Detailed instructor bios
- Message interaction simulation
- Lightweight UX without backend

---

### 📧 Newsletter

- Email validation
- Confirmation state
- Responsive interaction

---

### 🌐 Smart Navigation

Navigation works from every route.

For example:

```
/book → Pricing
```

automatically returns to the landing page and smoothly scrolls to the Pricing section.

---

# 🎨 Design Philosophy

Fernwell intentionally avoids generic wellness website templates by focusing on:

- Deep pine green branding
- Editorial typography
- Organic SVG section dividers
- Grain texture overlays
- Photography-first layouts
- Large serif headlines
- Generous whitespace
- Warm botanical aesthetic

---

# 🎨 Design System

## Color Palette

| Token | Hex | Usage |
|-------|------|------|
| Background | `#FAF6EF` | Warm ivory |
| Surface | `#FFFFFF` | Cards |
| Surface Warm | `#F3EEE3` | Alternate sections |
| Border | `#E4DCC9` | Dividers |
| Text Primary | `#1F2B22` | Primary text |
| Text Muted | `#6B7566` | Secondary text |
| Brand Green | `#2F4A3A` | Primary brand |
| Brand Green Dark | `#1C2E22` | Hover |
| Accent Amber | `#E08E45` | CTA buttons |
| Accent Clay | `#D97D6C` | Tags & badges |

### Typography

| Usage | Font |
|--------|------|
| Headings | Fraunces |
| Body | Manrope |

---

# 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router v7 |
| Icons | Lucide React |
| Deployment | Netlify |

---

# 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/book` | Booking wizard |
| `/book/confirmation` | Booking confirmation |

---

# 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClassTypes.tsx
│   ├── ScheduleGrid.tsx
│   ├── InstructorBios.tsx
│   ├── PricingTiers.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
│
├── pages/
│   ├── LandingPage.tsx
│   ├── BookingWizard.tsx
│   ├── PaymentStep.tsx
│   └── BookingConfirmation.tsx
│
├── mock-data/
│   ├── classes.ts
│   ├── pricing.ts
│   └── schedule.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Yanvi09/Fernwell-Studio.git
```

```bash
cd Fernwell-Studio
```

## Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 🌐 Deployment

The project is deployed on **Netlify**.

No backend, API keys, or environment variables are required because the payment experience is fully simulated on the client.

---

# 📱 Responsive Design

Designed for:

- Desktop
- Tablet
- Mobile

Responsive down to **375px**.

---

# 📸 Screenshots

> Add screenshots here.

```
Hero Section

Booking Wizard

Schedule

Payment Gateway

Confirmation Screen
```

---

# 🚀 Future Improvements

- Real Stripe integration
- Backend booking API
- Authentication
- Calendar sync
- Email confirmations
- CMS for instructors
- Admin dashboard

---

# 👩‍💻 About This Project

Fernwell Studio was created as a portfolio project to showcase premium frontend development, interaction design, and polished user experiences.

Together with **Lumetric** (an analytics dashboard), it demonstrates versatility across both editorial consumer interfaces and data-intensive enterprise applications.

---

# 📜 License

This project is intended for portfolio and educational purposes.

Feel free to use it as inspiration for your own projects.

---

# 👤 Author

**Anvi Yadav**

- GitHub: https://github.com/Yanvi09
- LinkedIn: *(Add your LinkedIn profile)*
- Portfolio: *(Add your portfolio URL)*
