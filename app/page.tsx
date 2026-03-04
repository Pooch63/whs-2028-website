import Link from 'next/link';
import FundraisingMessage from '@/components/FundraisingMessage';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-maroon-600 to-maroon-900 flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Class of 2028
          </h1>
          <p className="text-xl sm:text-2xl text-maroon-50 mb-12 drop-shadow-md">
            Celebrate sophomore year with unforgettable events
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/semiformal"
              className="inline-block px-8 py-4 bg-white text-maroon-600 font-bold rounded-lg hover:bg-maroon-50 transition-colors shadow-lg text-lg"
            >
              About Semiformal
            </Link>
            <Link
              href="/raffle"
              className="inline-block px-8 py-4 bg-maroon-400 text-white font-bold rounded-lg hover:bg-maroon-500 transition-colors shadow-lg text-lg"
            >
              About April Raffle
            </Link>
          </div>
        </div>
      </section>

      {/* Fundraising Message Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FundraisingMessage />
      </section>

      {/* Info Cards */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-maroon-900 mb-12">
            What's Coming Up
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Semiformal Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-maroon-600">
              <h3 className="text-2xl font-bold text-maroon-900 mb-4">Semiformal</h3>
              <p className="text-gray-700 mb-6">
                Join us for an elegant evening of dancing, games, and delicious food at Elm Bank in Wellesley. May 8, 2026.
              </p>
              <Link
                href="/semiformal"
                className="inline-block text-maroon-600 font-semibold hover:text-maroon-800 transition"
              >
                Learn More →
              </Link>
            </div>

            {/* Raffle Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-maroon-600">
              <h3 className="text-2xl font-bold text-maroon-900 mb-4">April Raffle</h3>
              <p className="text-gray-700 mb-6">
                Buy raffle tickets and participate in daily prize drawings throughout April. Win amazing prizes while supporting Class of 2028!
              </p>
              <Link
                href="/raffle"
                className="inline-block text-maroon-600 font-semibold hover:text-maroon-800 transition"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
