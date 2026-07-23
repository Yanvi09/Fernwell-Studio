Fernwell Studio

A boutique yoga and pilates studio experience — where every interaction is designed, not just styled.

🔗 Live demo: Fernwell Studio

A boutique yoga and pilates studio website with a real class-booking flow and a simulated payment gateway. This portfolio piece demonstrates intentional, editorial design with warm botanical aesthetics — built as a companion piece to Lumetric (a dark, data-dense analytics dashboard) to show range across two very different product personalities.

Concept

Fernwell Studio is designed to be the opposite of generic wellness templates — it features a deep pine green as the dominant brand color, warm editorial typography, and organic visual elements that create a distinctive brand personality, rather than the cream + terracotta look most wellness sites default to.

Tech Stack
Frontend: React 19 + TypeScript + Vite
Styling: Tailwind CSS v3 with custom design tokens
Routing: React Router v7
Payments: Self-contained simulated payment gateway (no backend required)
Deployment: Netlify
Icons: Lucide React
Design Tokens
Color Palette
Token	Hex	Use
bg	
#FAF6EF	Warm ivory background
surface	
#FFFFFF	Cards
surface-warm	
#F3EEE3	Alternating section backgrounds
border	
#E4DCC9	Hairline dividers
text-primary	
#1F2B22	Deep forest green-tinted near-black
text-muted	
#6B7566	Captions, secondary text
brand-green	
#2F4A3A	Primary brand color
brand-green-dark	
#1C2E22	Hover state
accent-amber	
#E08E45	CTAs, "Book now" buttons
accent-clay	
#D97D6C	Badges, difficulty tags
Typography
Display/Headings: Fraunces (warm, editorial serif)
Body/UI: Manrope
Signature Elements
Organic blob-shaped SVG dividers between sections
Subtle grain/noise texture overlay on hero image
Generous whitespace and large serif headlines
Pages & Routes
/ — Full landing page with hero, classes, schedule preview, instructors, pricing, testimonials
/book — Multi-step booking wizard (4 steps)
/book/confirmation — Booking confirmation screen
Features
Booking Flow
Choose Class Type — Select from Vinyasa Flow, Restorative Yoga, or Pilates Sculpt — clickable straight from the "Our Classes" section or the schedule grid
Select Date/Time — Interactive schedule grid with clickable time slots
Contact Info — Form with validation for name, email, phone
Payment — Simulated payment gateway with card formatting, a processing state, and success/failure handling
Site-wide Navigation

Nav links work from any page, not just the homepage — clicking "Pricing" from /book navigates back to the landing page and smooth-scrolls straight to that section.

Schedule Grid
Desktop: full week grid, days as columns, time slots as rows
Mobile: day-by-day list view for smaller screens
Every populated cell is clickable and pre-fills the booking wizard with that class and time
Instructor Cards

Clicking an instructor opens their full bio plus a lightweight "send a message" simulation — no backend, just a clean, real-feeling interaction instead of a static photo.

Newsletter Signup

Client-side email validation with a confirmation state — no dead "Join" button.

Simulated Payment Gateway

A card form with input formatting, a processing delay, and realistic success/failure states. Test card 4242 4242 4242 4242 always succeeds; anything else shows a styled decline message. This is intentionally self-contained (no backend, no real charges) — built to demonstrate payment-flow UX and state handling rather than a production payment integration.

Setup Instructions
Local Development
bash
git clone https://github.com/Yanvi09/Fernwell-Studio.git
cd Fernwell-Studio
npm install
npm run dev
Netlify Deployment

Connect this repository to Netlify and deploy — no environment variables or serverless functions are required, since the payment flow is fully client-side.

Project Structure
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClassTypes.tsx
│   ├── ScheduleGrid.tsx
│   ├── InstructorBios.tsx
│   ├── PricingTiers.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── pages/
│   ├── LandingPage.tsx
│   ├── BookingWizard.tsx
│   │   └── PaymentStep.tsx   # simulated payment gateway
│   └── BookingConfirmation.tsx
├── mock-data/
│   ├── classes.ts
│   ├── schedule.ts
│   └── pricing.ts
├── App.tsx
├── main.tsx
└── index.css
Design Philosophy

This project intentionally avoids the generic "cream + terracotta" wellness template aesthetic by:

Using deep pine green as the dominant brand color
Incorporating organic, hand-drawn-looking visual elements
Applying editorial typography with Fraunces serif font
Including subtle texture overlays for depth
Prioritizing generous whitespace and photography-first layouts
Browser Support

Modern browsers with ES2020+ support. Mobile-responsive down to 375px width.

About this project

Built as a portfolio case study for freelance frontend work, alongside a companion piece (Lumetric, an analytics dashboard) to demonstrate range — dense data UI versus warm consumer-facing design, both with real interaction logic, not just static screens.

Interested in working together? [Add your contact info / freelance profile link here]

License

This is a portfolio project. Feel free to use as reference for your own projects.
