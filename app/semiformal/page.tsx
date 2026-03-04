import FundraisingMessage from '@/components/FundraisingMessage';
import TicketPricing from '@/components/TicketPricing';
import { Metadata } from 'next';

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
      <section className="bg-gradient-to-r from-maroon-700 to-maroon-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Semiformal
          </h1>
          <p className="text-lg sm:text-xl text-maroon-100">
            An elegant evening celebrating Class of 2028
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Event Info */}
          <div>
            <h2 className="text-3xl font-bold text-maroon-900 mb-8">Event Details</h2>

            <div className="space-y-6">
              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <h3 className="font-bold text-maroon-900 mb-2">📅 Date & Time</h3>
                <p className="text-gray-700">
                  <strong>May 8, 2026</strong>
                  <br />
                  Time: To be announced
                </p>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <h3 className="font-bold text-maroon-900 mb-2">📍 Location</h3>
                <p className="text-gray-700">
                  <strong>Elm Bank</strong>
                  <br />
                  900 Washington St.
                  <br />
                  Wellesley, MA 02482
                </p>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <h3 className="font-bold text-maroon-900 mb-2">👔 Dress Code</h3>
                <p className="text-gray-700">
                  <strong>Semiformal Attire</strong>
                  <br />
                  Cocktail dresses, tuxedos, or formal separates
                </p>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <h3 className="font-bold text-maroon-900 mb-2">🍽️ Catering</h3>
                <p className="text-gray-700">
                  <strong>William Ference Catering</strong>
                  <br />
                  Featuring delicious food and refreshments
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div>
            <h2 className="text-3xl font-bold text-maroon-900 mb-8">What to Expect</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-maroon-600 text-white">
                    🎵
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Dancing</h3>
                  <p className="text-gray-600">Enjoy dancing with your classmates all night long</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-maroon-600 text-white">
                    🎧
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Professional DJ</h3>
                  <p className="text-gray-600">Experience the best music for dancing and celebration</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-maroon-600 text-white">
                    🎮
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Games & Activities</h3>
                  <p className="text-gray-600">Have fun with interactive games and entertainment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-maroon-600 text-white">
                    🍕
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Food & Refreshments</h3>
                  <p className="text-gray-600">Enjoy delicious catering by William Ference</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-maroon-600 text-white">
                    📸
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Photo Opportunities</h3>
                  <p className="text-gray-600">Create memorable moments with your classmates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Pricing Component */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-maroon-900 mb-8">Ticket Pricing</h2>
          <TicketPricing />
        </div>
      </section>

      {/* Fundraising Message */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FundraisingMessage />
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600">
              <h3 className="font-bold text-maroon-900 mb-2">When is ticket purchasing available?</h3>
              <p className="text-gray-700">
                Phase 1 Early Bird pricing ($50) runs March 13-27, 2026. Phase 2 Final Chance pricing ($65) runs April 18-25, 2026. Outside these windows, tickets are not available.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600">
              <h3 className="font-bold text-maroon-900 mb-2">Can I buy tickets after Phase 2 ends?</h3>
              <p className="text-gray-700">
                No, all ticket sales close after April 25, 2026. Make sure to purchase during one of the two sales phases!
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600">
              <h3 className="font-bold text-maroon-900 mb-2">What is the dress code?</h3>
              <p className="text-gray-700">
                The dress code is semiformal. This means cocktail dresses, tuxedos, suits, or formal separates. Think of it as a step down from black-tie but more formal than business casual.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600">
              <h3 className="font-bold text-maroon-900 mb-2">Who is catering the event?</h3>
              <p className="text-gray-700">
                William Ference Catering is providing delicious food and refreshments for the event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
