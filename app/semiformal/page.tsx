import FundraisingMessage from '@/components/FundraisingMessage';
import TicketPricing from '@/components/TicketPricing';
import { Metadata } from 'next';
import { Calendar, MapPin, Shirt, UtensilsCrossed, Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Semiformal - WHS Class of 2028',
  description: 'Join us for an elegant semiformal event on May 8, 2026 at Elm Bank in Wellesley, MA.',
  openGraph: {
    title: 'Semiformal - WHS Class of 2028',
    description: 'Join us for Semiformal on May 8, 2026',
  },
};

export default function SemiformalPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon to-maroon py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Semiformal
          </h1>
        </div>
      </section>

      {/* Ticket Pricing Section - Top */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-maroon text-white text-center py-3 px-4 rounded-lg mb-4 font-semibold text-lg">
            Buy your tickets now — there are two windows. The second window has higher prices. Don’t wait.
          </div>
          <h2 className="text-2xl font-bold text-center text-maroon mb-4">Ticket Pricing</h2>
          <TicketPricing />
        </div>
      </section>

      {/* Event Details */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-maroon mb-5">Event details</h2>
        <div className="bg-maroon-light/50 rounded-lg border border-maroon/20 p-6 sm:p-8 space-y-4 text-lg sm:text-xl text-gray-700">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-maroon flex-shrink-0" />
            <span><strong>May 8, 2026 at 6:00 PM</strong></span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-maroon flex-shrink-0 mt-0.5" />
            <span><strong>Elm Bank</strong> — 900 Washington St., Wellesley, MA 02482</span>
          </div>
          <div className="flex items-center gap-3">
            <Shirt className="w-6 h-6 text-maroon flex-shrink-0" />
            <span><strong>Semiformal attire</strong> — Cocktail dresses, tuxedos, or formal separates.</span>
          </div>
          <div className="flex items-center gap-3">
            <UtensilsCrossed className="w-6 h-6 text-maroon flex-shrink-0" />
            <span><strong>William Ference Catering</strong> — Food and refreshments.</span>
          </div>
          <div className="flex items-center gap-3">
            <Music className="w-6 h-6 text-maroon flex-shrink-0" />
            <span>DJ, games, and photo opportunities.</span>
          </div>
          <p className="pt-2 border-t border-maroon/20 mt-4 text-base sm:text-lg text-gray-600">
            <strong>Ticket sales:</strong> There are two windows to buy tickets. <strong>First window: $50 — March 13–27.</strong> Second window: $65 — April 18–25 (prices go up). All sales close April 25. <strong>Buy your tickets now to lock in the lower price.</strong>
          </p>
        </div>
      </section>

      {/* Fundraising Message */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FundraisingMessage />
        </div>
      </section>
    </main>
  );
}
