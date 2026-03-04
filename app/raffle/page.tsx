import CalendarComponent from '@/components/CalendarComponent';
import FundraisingMessage from '@/components/FundraisingMessage';
import { Metadata } from 'next';
import { Gift, Popcorn, Gamepad2, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'April Raffle - WHS Class of 2028',
  description: 'Participate in Class of 2028\'s April Raffle with daily prize drawings throughout April 2026.',
  openGraph: {
    title: 'April Raffle - WHS Class of 2028',
    description: 'Daily prize drawings throughout April 2026',
  },
};

export default function RafflePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon-700 to-maroon-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            April Raffle
          </h1>
          <p className="text-lg sm:text-xl text-maroon-100">
            Daily prize drawings throughout April 2026
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-maroon-50 rounded-lg p-6 border-t-4 border-maroon-600">
            <div className="text-3xl font-bold text-maroon-600 mb-3">1</div>
            <h3 className="font-bold text-maroon-900 mb-2">Buy Raffle Tickets</h3>
            <p className="text-gray-700 text-sm">
              Purchase raffle tickets before April 2026 begins to enter daily drawings.
            </p>
          </div>

          <div className="bg-maroon-50 rounded-lg p-6 border-t-4 border-maroon-600">
            <div className="text-3xl font-bold text-maroon-600 mb-3">2</div>
            <h3 className="font-bold text-maroon-900 mb-2">Daily Drawings</h3>
            <p className="text-gray-700 text-sm">
              Throughout April, check the calendar to see what prizes are available each day.
            </p>
          </div>

          <div className="bg-maroon-50 rounded-lg p-6 border-t-4 border-maroon-600">
            <div className="text-3xl font-bold text-maroon-600 mb-3">3</div>
            <h3 className="font-bold text-maroon-900 mb-2">Win Prizes</h3>
            <p className="text-gray-700 text-sm">
              Prizes range from gift cards to experiences, all supporting Class of 2028.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-maroon-900 mb-6 text-center">
            April 2026 Prize Calendar
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <CalendarComponent month={4} year={2026} />
          </div>
        </div>
      </section>

      {/* Prize Information */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-maroon-600">
            <div className="flex items-start gap-3">
              <Gift className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-maroon-900 mb-2">Gift Cards</h3>
                <p className="text-gray-700 text-sm">
                  Popular retailers and restaurants — Amazon to local favorites.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-maroon-600">
            <div className="flex items-start gap-3">
              <Popcorn className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-maroon-900 mb-2">Entertainment</h3>
                <p className="text-gray-700 text-sm">
                  Movie tickets, streaming credits, concert passes, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-maroon-600">
            <div className="flex items-start gap-3">
              <Gamepad2 className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-maroon-900 mb-2">Tech & Gadgets</h3>
                <p className="text-gray-700 text-sm">
                  Wireless earbuds, portable chargers, phone cases, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-maroon-600">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-maroon-900 mb-2">Experiences</h3>
                <p className="text-gray-700 text-sm">
                  Spa treatments, hobby classes, game night packages, and dining experiences.
                </p>
              </div>
            </div>
          </div>
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
