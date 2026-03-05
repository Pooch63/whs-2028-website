# WHS Class of 2028 Website

A modern Next.js website for Wellesley High School Class of 2028, featuring information about Semiformal and the April Raffle fundraising events.

## Features

### 🏠 Landing Page (/)
- Eye-catching hero section with gradient background
- Two prominent CTAs: "About Semiformal" and "About April Raffle"
- Fundraising message component explaining the importance of the fundraiser
- Info cards with quick links to main events
- Mobile-responsive design

### 🎭 Semiformal Page (/semiformal)
- Complete event details (date, time, location)
- Event features and highlights
- **Dynamic ticket pricing system:**
  - Phase 1 (March 13-27): $50/student - "Early Bird" pricing
  - Phase 2 (April 18-25): $65/student - "Final Chance" pricing
  - Outside windows: Shows closed status with next opening date
- Fundraising message component
- FAQ section
- Mobile-responsive design

### 🎁 April Raffle Page (/raffle)
- How-to guide for raffle mechanics
- **Interactive calendar component:**
  - Desktop: Full month view of April 2026
  - Mobile: Week-by-week navigation
  - Each day displays a unique prize phrase
- Prize categories showcase
- Fundraising message component
- FAQ section
- Mobile-responsive design

### 💡 Reusable Components

#### FundraisingMessage
Explains the importance of Class of 2028 fundraising:
- Supporting the class goals
- Emphasizes sophomore year fundraising criticality
- Highlights junior & senior year expenses (boat cruise, prom)
- Motivates maximum fund raising

#### CalendarComponent
Interactive April 2026 calendar with prize listings:
- Desktop: Full month grid view
- Mobile: Week-by-week clickthrough interface
- 30 unique prize phrases rotating through the month
- Responsive and accessible

#### TicketPricing
Dynamic pricing component that:
- Checks current date against Phase 1 and Phase 2 windows
- Displays current pricing and remaining days
- Shows closed/upcoming messages
- Updates in real-time based on current date

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom maroon color palette
- **Components:** React functional components with hooks
- **Build:** Server-side rendering with client-side interactivity

## Color Scheme

Maroon palette (two shades only):
- **maroon:** Primary dark maroon (`rgb(107 76 90)`) — nav, footer, buttons, borders, headings
- **maroon-light:** Light maroon for backgrounds and borders
- **text-bg:** White/background color for text on maroon (navbar, footer, hero, buttons)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Pooch63/whs-2028-website.git
cd whs-2028-website

# Install dependencies
npm install

# Run development server
npm run dev
```

The website will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
npm run start
```

## File Structure

```
whs-2028-website/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── semiformal/
│   │   └── page.tsx        # Semiformal event page
│   └── raffle/
│       └── page.tsx        # April raffle page
├── components/
│   ├── FundraisingMessage.tsx  # Fundraising info component
│   ├── TicketPricing.tsx       # Dynamic pricing component
│   └── CalendarComponent.tsx   # Interactive calendar
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Key Dates

- **Phase 1 Ticket Sales:** March 13-27, 2026 ($50/student)
- **Phase 2 Ticket Sales:** April 18-25, 2026 ($65/student)
- **Semiformal Event:** May 8, 2026 at Elm Bank, Wellesley, MA
- **Raffle Period:** Throughout April 2026 with daily prize drawings

## Development Notes

### Dynamic Pricing Logic
The `TicketPricing` component automatically detects the current date and displays appropriate messaging:
- Shows early bird pricing and countdown during Phase 1
- Shows final chance pricing and countdown during Phase 2
- Shows appropriate messages before Phase 1 and between phases
- Shows sold out message after Phase 2

### Responsive Design
All pages are optimized for:
- Mobile (320px and up)
- Tablet (768px and up)
- Desktop (1024px and up)

The raffle calendar specifically implements:
- Full month view on desktop
- Week-by-week navigation on mobile with Previous/Next buttons

## Deployment

This site can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Vercel Deployment
```bash
npm install -g vercel
vercel
```

## Contributing

Please submit pull requests with any improvements or bug fixes.

## License

© 2026 Wellesley High School Class of 2028. All rights reserved.

## Contact

For questions or issues, please contact the Class of 2028 organizing committee.

---

**Repository:** https://github.com/Pooch63/whs-2028-website
