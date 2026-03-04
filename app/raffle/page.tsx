import CalendarComponent from '@/components/CalendarComponent';
import FundraisingMessage from '@/components/FundraisingMessage';
import { Metadata } from 'next';

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
        <h2 className="text-3xl font-bold text-maroon-900 mb-12 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-maroon-50 rounded-lg p-8 border-t-4 border-maroon-600">
            <div className="text-4xl font-bold text-maroon-600 mb-4">1</div>
            <h3 className="text-xl font-bold text-maroon-900 mb-3">Buy Raffle Tickets</h3>
            <p className="text-gray-700">
              Purchase raffle tickets before April 2026 begins. Ticket prices and availability depend on purchase timing.
            </p>
          </div>

          <div className="bg-maroon-50 rounded-lg p-8 border-t-4 border-maroon-600">
            <div className="text-4xl font-bold text-maroon-600 mb-4">2</div>
            <h3 className="text-xl font-bold text-maroon-900 mb-3">Daily Drawings</h3>
            <p className="text-gray-700">
              Throughout April, we'll hold daily prize drawings. Check the calendar to see what prizes are available each day!
            </p>
          </div>

          <div className="bg-maroon-50 rounded-lg p-8 border-t-4 border-maroon-600">
            <div className="text-4xl font-bold text-maroon-600 mb-4">3</div>
            <h3 className="text-xl font-bold text-maroon-900 mb-3">Win Prizes</h3>
            <p className="text-gray-700">
              If your name is drawn, you win! Prizes range from gift cards to experiences, all supporting Class of 2028.
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-maroon-900 mb-8 text-center">
            April 2026 Prize Calendar
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <CalendarComponent month={4} year={2026} />
          </div>

          <p className="text-center text-gray-600 mt-6 text-sm">
            <em>On desktop, see the full month view. On mobile, navigate through weeks using the Previous/Next buttons.</em>
          </p>
        </div>
      </section>

      {/* Prize Information */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-maroon-900 mb-8 text-center">
          Prize Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-maroon-600">
            <h3 className="text-xl font-bold text-maroon-900 mb-4">🎁 Gift Cards</h3>
            <p className="text-gray-700">
              Win gift cards to popular retailers and restaurants. From Amazon to local favorites, we have options for everyone!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-maroon-600">
            <h3 className="text-xl font-bold text-maroon-900 mb-4">🎬 Entertainment</h3>
            <p className="text-gray-700">
              Movie tickets, streaming service credits, concert passes, and more. Enjoy a night out with your winnings!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-maroon-600">
            <h3 className="text-xl font-bold text-maroon-900 mb-4">🎮 Tech & Gadgets</h3>
            <p className="text-gray-700">
              Tech accessories like wireless earbuds, portable chargers, phone cases, and more exciting gadgets.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-maroon-600">
            <h3 className="text-xl font-bold text-maroon-900 mb-4">✨ Experiences</h3>
            <p className="text-gray-700">
              Unique experiences like spa treatments, hobby classes, game night packages, and special dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Fundraising Message */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FundraisingMessage />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-maroon-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600 shadow">
            <h3 className="font-bold text-maroon-900 mb-2">When do I need to buy raffle tickets?</h3>
            <p className="text-gray-700">
              Raffle tickets should be purchased before April 2026 begins. This ensures you're entered into all daily drawings throughout the month.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600 shadow">
            <h3 className="font-bold text-maroon-900 mb-2">How often are drawings held?</h3>
            <p className="text-gray-700">
              Daily drawings are held throughout April 2026. Each day features a different prize as shown in the calendar above.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600 shadow">
            <h3 className="font-bold text-maroon-900 mb-2">Can I win multiple prizes?</h3>
            <p className="text-gray-700">
              Yes! Your name can be drawn for multiple daily prizes throughout April. The more raffle tickets you have, the better your chances!
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600 shadow">
            <h3 className="font-bold text-maroon-900 mb-2">How are winners selected?</h3>
            <p className="text-gray-700">
              Winners are randomly selected from all raffle ticket holders for each daily drawing. All participants have equal chances!
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-maroon-600 shadow">
            <h3 className="font-bold text-maroon-900 mb-2">Where do proceeds go?</h3>
            <p className="text-gray-700">
              All raffle proceeds support Class of 2028's fundraising. These funds help cover class events, including our junior prom and senior year activities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
