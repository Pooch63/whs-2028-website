import { Info } from 'lucide-react';

export default function PaymentInfo() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-maroon-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Text and Icon */}
          <div className="flex items-start gap-4 flex-1 max-w-md">
            <Info className="w-6 h-6 text-maroon-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-maroon-900 mb-1">Payment</h3>
              <p className="text-maroon-700">
                We're currently accepting payments via <strong>Venmo</strong>. Scan the QR code or send payment to our class account.
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-4 border border-maroon-200">
              <img
                src="/images/venmo-qr.png"
                alt="Venmo QR Code"
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
