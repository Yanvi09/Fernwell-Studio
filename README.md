# Fernwell Studio

A boutique yoga and pilates studio website with a real class-booking flow and Stripe test-mode payments. This portfolio piece demonstrates intentional, editorial design with warm botanical aesthetics.

## Concept

Fernwell Studio is designed to be the opposite of generic wellness templates - it features a deep pine green as the dominant brand color, warm editorial typography, and organic visual elements that create a distinctive brand personality.

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v3 with custom design tokens
- **Routing**: React Router v7
- **Payments**: Stripe (test mode only)
- **Deployment**: Netlify (with serverless functions)
- **Icons**: Lucide React

## Design Tokens

### Color Palette
- `bg`: #FAF6EF - Warm ivory background
- `surface`: #FFFFFF - Cards
- `surface-warm`: #F3EEE3 - Alternating section backgrounds
- `border`: #E4DCC9 - Hairline dividers
- `text-primary`: #1F2B22 - Deep forest green-tinted near-black
- `text-muted`: #6B7566 - Captions, secondary text
- `brand-green`: #2F4A3A - Primary brand color
- `brand-green-dark`: #1C2E22 - Hover state
- `accent-amber`: #E08E45 - CTAs, "Book now" buttons
- `accent-clay`: #D97D6C - Badges, difficulty tags

### Typography
- **Display/Headings**: Fraunces (warm, editorial serif)
- **Body/UI**: Manrope

### Signature Elements
- Organic blob-shaped SVG dividers between sections
- Subtle grain/noise texture overlay on hero image
- Generous whitespace and large serif headlines

## Pages & Routes

- `/` - Full landing page with hero, classes, schedule preview, instructors, pricing, testimonials
- `/book` - Multi-step booking wizard (4 steps)
- `/book/confirmation` - Booking confirmation screen

## Features

### Booking Flow
1. **Choose Class Type** - Select from Vinyasa Flow, Restorative Yoga, or Pilates Sculpt
2. **Select Date/Time** - Interactive schedule grid with clickable time slots
3. **Contact Info** - Form with validation for name, email, phone
4. **Payment** - Stripe checkout integration with pricing tier selection

### Schedule Grid
- Desktop: Full week grid view with days as columns and time slots as rows
- Mobile: Day-by-day list view for better UX on smaller screens
- Clickable cells that pre-fill the booking wizard

### Stripe Integration
**Important**: This project uses Stripe in test mode only. No real money is processed.

To test the payment flow:
- The Netlify function requires `STRIPE_SECRET_KEY` environment variable
- Use Stripe's test publishable key (pk_test_...) for frontend
- Use test card number: 4242 4242 4242 4242
- Set environment variables in Netlify dashboard for production deployment

## Setup Instructions

### Local Development
1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

### Environment Variables
Create a `.env` file (gitignored) with:
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
URL=http://localhost:5173
```

### Netlify Deployment
1. Connect this repository to Netlify
2. Set environment variables in Netlify dashboard:
   - `STRIPE_SECRET_KEY`: Your Stripe test secret key
   - `URL`: Your production URL
3. Deploy - Netlify will automatically detect the serverless function

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ClassTypes.tsx
│   ├── ScheduleGrid.tsx
│   ├── InstructorBios.tsx
│   ├── PricingTiers.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── LandingPage.tsx
│   ├── BookingWizard.tsx
│   └── BookingConfirmation.tsx
├── mock-data/       # Mock data for development
│   ├── classes.ts
│   ├── schedule.ts
│   └── pricing.ts
├── App.tsx          # Main app with routing
├── main.tsx         # Entry point
└── index.css        # Global styles with Tailwind

netlify/
└── functions/
    └── create-checkout-session.js  # Stripe serverless function
```

## Design Philosophy

This project intentionally avoids the generic "cream + terracotta" wellness template aesthetic by:
- Using deep pine green as the dominant brand color
- Incorporating organic, hand-drawn-looking visual elements
- Applying editorial typography with Fraunces serif font
- Including subtle texture overlays for depth
- Prioritizing generous whitespace and photography-first layouts

## Browser Support

- Modern browsers with ES2020+ support
- Mobile-responsive down to 375px width

## License

This is a portfolio project. Feel free to use as reference for your own projects.
