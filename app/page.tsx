import Link from 'next/link';
import PaymentInfo from '@/components/PaymentInfo';

export default function Home() {
  return (
    <main className="bg-bg min-h-screen flex flex-col">
      {/* Full-height hero: image fills top, overlay straddles so half is over image on desktop */}
      <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
        {/* Background image - fills viewport; on desktop image “ends” at 70vh so overlay can straddle */}
        <div className="absolute inset-0 lg:bottom-auto lg:h-[55vh]">
          <img
            src="/images/whs.jpg"
            alt="WHS Class of 2028"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient transition: transparent → bg so the edge isn't sudden */}
        <div
          className="absolute left-0 right-0 top-0 bottom-0 z-[1] pointer-events-none lg:h-[55vh] lg:bottom-auto"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, transparent 30%, rgba(255,255,255,0.4) 55%, var(--background) 85%, var(--background) 100%)',
          }}
          aria-hidden
        />
        {/* Fill below image on desktop */}
        <div className="absolute inset-0 top-[55vh] bg-bg hidden lg:block" aria-hidden />

        {/* Overlay: closer to top on desktop; mobile anchored to bottom */}
        <div className="absolute left-0 right-0 bottom-6 z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-16 lg:pb-14 lg:bottom-auto lg:top-[38vh] lg:-translate-y-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
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
