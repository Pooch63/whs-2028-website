import FundraisingMessage from '@/components/FundraisingMessage';
import TicketPricing from '@/components/TicketPricing';
import { Metadata } from 'next';
import { Calendar, MapPin, Shirt, UtensilsCrossed, Music, Gamepad2, Camera } from 'lucide-react';

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

      {/* Ticket Pricing Section - Top */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-maroon-900 mb-8">Ticket Pricing</h2>
          <TicketPricing />
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
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-maroon-900 mb-2">Date & Time</h3>
                    <p className="text-gray-700">
                      <strong>May 8, 2026</strong>
                      <br />
                      Time: To be announced
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-maroon-900 mb-2">Location</h3>
                    <p className="text-gray-700">
                      <strong>Elm Bank</strong>
                      <br />
                      900 Washington St.
                      <br />
                      Wellesley, MA 02482
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <div className="flex items-start gap-3">
                  <Shirt className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-maroon-900 mb-2">Dress Code</h3>
                    <p className="text-gray-700">
                      <strong>Semiformal Attire</strong>
                      <br />
                      Cocktail dresses, tuxedos, or formal separates. A step down from black-tie but more formal than business casual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-maroon-50 rounded-lg p-6 border-l-4 border-maroon-600">
                <div className="flex items-start gap-3">
                  <UtensilsCrossed className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-maroon-900 mb-2">Catering</h3>
                    <p className="text-gray-700">
                      <strong>William Ference Catering</strong>
                      <br />
                      Delicious food and refreshments provided
                    </p>
                  </div>
                </div>
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
                    <Music className="w-6 h-6" />
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
                    <Music className="w-6 h-6" />
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
                    <Gamepad2 className="w-6 h-6" />
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
                    <UtensilsCrossed className="w-6 h-6" />
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
                    <Camera className="w-6 h-6" />
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

        {/* FAQ Integration */}
        <div className="mt-16 bg-maroon-50 rounded-lg p-8 border-l-4 border-maroon-600">
          <h3 className="text-2xl font-bold text-maroon-900 mb-6">Common Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-maroon-900 mb-2">When can I buy tickets?</h4>
              <p className="text-gray-700 text-sm">
                Phase 1 ($50) runs March 13-27, 2026. Phase 2 ($65) runs April 18-25, 2026. Outside these windows, tickets are not available.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-maroon-900 mb-2">What if I miss both phases?</h4>
              <p className="text-gray-700 text-sm">
                All ticket sales close after April 25, 2026. Make sure to purchase during one of the two sales phases!
              </p>
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
