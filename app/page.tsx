import Link from 'next/link';
import PaymentInfo from '@/components/PaymentInfo';

export default function Home() {
  return (
    <main className="bg-bg flex flex-col">
      {/* Hero Section */}
      <section className="w-full relative flex flex-col">
        {/* Hero Image */}
        <div className="w-full h-[55vh] lg:h-[70vh] relative overflow-hidden">
  <img
    src="/images/whs.jpg"
    alt="WHS Class of 2028"
    className="w-full h-full object-cover"
  />

  {/* Bottom gradient fade */}
  <div
    className="absolute bottom-0 left-0 w-full h-40 pointer-events-none"
    aria-hidden
    style={{
      background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, var(--background) 100%)',
    }}
  />
</div>

        {/* Overlay: text + buttons */}
        <div className="relative z-10 -mt-20 lg:-mt-36 flex flex-col items-center px-4 sm:px-6 lg:px-8 mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bg mb-6 text-center">
            Class of 2028
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link
              href="/semiformal"
              className="inline-block px-8 py-4 bg-bg border-2 border-maroon text-maroon font-bold rounded-lg shadow-lg text-lg transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:rotate-1"
            >
              About Semiformal
            </Link>
            <Link
              href="/raffle"
              className="inline-block px-8 py-4 bg-bg border-2 border-maroon text-maroon font-bold rounded-lg shadow-lg text-lg transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:shadow-2xl hover:-translate-y-1 hover:scale-105 hover:-rotate-1"
            >
              About April Raffle
            </Link>
          </div>

          <p className="text-foreground/90 text-center max-w-xl text-lg leading-relaxed">
            We&apos;re the Class of 2028 at WHS—a tight-knit group of students building community, raising funds for our class, and making the most of our high school years together.
          </p>
        </div>
      </section>

      {/* Payment Info */}
      <PaymentInfo />
    </main>
  );
}