import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        {/* Background Image - Centered, Aspect Ratio, No Width Scaling */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/whs.jpg"
            alt="WHS Class of 2028"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Class of 2028
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-12 drop-shadow-md">
            Celebrate sophomore year with unforgettable events
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/semiformal"
              className="inline-block px-8 py-4 bg-white text-maroon-600 font-bold rounded-lg shadow-lg text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-110"
            >
              About Semiformal
            </Link>
            <Link
              href="/raffle"
              className="inline-block px-8 py-4 bg-maroon-400 text-white font-bold rounded-lg shadow-lg text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-110"
            >
              About April Raffle
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
