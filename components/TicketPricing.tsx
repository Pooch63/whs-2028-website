'use client';

import { useState, useEffect } from 'react';

interface PricingInfo {
  heading: string;
  price: number;
  startDate: Date;
  endDate: Date;
  message: string;
  daysRemaining?: number;
  isActive: boolean;
  status: 'active' | 'upcoming' | 'closed';
}

export default function TicketPricing() {
  const [pricingInfo, setPricingInfo] = useState<PricingInfo | null>(null);

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Phase 1: March 13-27, 2026
    const phase1Start = new Date(2026, 2, 13);
    const phase1End = new Date(2026, 2, 27);

    // Phase 2: April 18-25, 2026
    const phase2Start = new Date(2026, 3, 18);
    const phase2End = new Date(2026, 3, 25);

    let info: PricingInfo | null = null;

    // First ticket window: March 13-27 ($50)
    if (today >= phase1Start && today <= phase1End) {
      const daysLeft = Math.ceil((phase1End.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        heading: 'First ticket window — $50',
        price: 50,
        startDate: phase1Start,
        endDate: phase1End,
        message: `Buy now — prices go up in the second window. Only ${daysLeft} days left at $50.`,
        daysRemaining: daysLeft,
        isActive: true,
        status: 'active',
      };
    }
    // Second ticket window: April 18-25 ($65, increased price)
    else if (today >= phase2Start && today <= phase2End) {
      const daysLeft = Math.ceil((phase2End.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        heading: 'Second ticket window — $65 (increased price)',
        price: 65,
        startDate: phase2Start,
        endDate: phase2End,
        message: `Prices increased. Last chance — ${daysLeft} days until sales close. Buy tickets now.`,
        daysRemaining: daysLeft,
        isActive: true,
        status: 'active',
      };
    }
    // Before first window
    else if (today < phase1Start) {
      const daysUntil = Math.ceil((phase1Start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        heading: 'Ticket sales open March 13',
        price: 0,
        startDate: phase1Start,
        endDate: phase2End,
        message: `First window opens March 13 — $50. Second window (April 18) will be $65. Buy early and save.`,
        isActive: false,
        status: 'upcoming',
      };
    }
    // Between first and second window
    else if (today > phase1End && today < phase2Start) {
      const daysUntil = Math.ceil((phase2Start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        heading: 'First window closed — second window has higher prices',
        price: 0,
        startDate: phase2Start,
        endDate: phase2End,
        message: `Second ticket window opens April 18 at $65 (prices increased). You missed the $50 window — get yours when sales reopen.`,
        isActive: false,
        status: 'upcoming',
      };
    }
    // After second window
    else {
      info = {
        heading: 'Ticket sales ended',
        price: 0,
        startDate: phase1Start,
        endDate: phase2End,
        message: 'Ticket sales have ended. Thank you for your interest!',
        isActive: false,
        status: 'closed',
      };
    }

    setPricingInfo(info);
  }, []);

  if (!pricingInfo) {
    return <div className="text-center py-8">Loading pricing information...</div>;
  }

  return (
    <div className="bg-white border-2 border-maroon-light rounded-lg p-8 my-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon mb-2">
          {pricingInfo.heading}
        </h2>

        {pricingInfo.isActive ? (
          <div className="mb-6">
            <div className="text-5xl font-bold text-maroon mb-2">
              ${pricingInfo.price}
              <span className="text-lg text-gray-600">/student</span>
            </div>
            <div className="bg-maroon-light text-maroon px-4 py-2 rounded-lg inline-block font-semibold">
              {pricingInfo.message}
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg inline-block font-semibold mb-6">
            {pricingInfo.message}
          </div>
        )}

        {pricingInfo.isActive && (
          <button className="bg-maroon text-bg px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors">
            Buy Tickets
          </button>
        )}
      </div>
    </div>
  );
}
