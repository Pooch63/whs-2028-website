import { Info } from 'lucide-react';

export default function PaymentInfo() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-maroon-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Text and Icon */}
          <div className="flex items-start gap-4 max-w-md">
            <Info className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-maroon-900 mb-1">Payment</h3>
              <p className="text-maroon-700">
                We're currently accepting payments via <strong>Venmo</strong>. Scan the QR code or send payment to <strong>@Missy-Kilgore</strong>.
              </p>
            </div>
          </div>

          {/* QR Code - below text, larger */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-4 border border-maroon-200">
              <img
                src="/images/venmo.jpg"
                alt="Venmo QR Code"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
