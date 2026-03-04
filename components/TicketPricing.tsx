'use client';

import { useState, useEffect } from 'react';

interface PricingInfo {
  phase: string;
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

    // Check if in Phase 1
    if (today >= phase1Start && today <= phase1End) {
      const daysLeft = Math.ceil((phase1End.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        phase: 'Phase 1 - Early Bird',
        price: 50,
        startDate: phase1Start,
        endDate: phase1End,
        message: `Early Bird pricing active! ${daysLeft} days remaining.`,
        daysRemaining: daysLeft,
        isActive: true,
        status: 'active',
      };
    }
    // Check if in Phase 2
    else if (today >= phase2Start && today <= phase2End) {
      const daysLeft = Math.ceil((phase2End.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        phase: 'Phase 2 - Final Chance',
        price: 65,
        startDate: phase2Start,
        endDate: phase2End,
        message: `Final chance to buy tickets! ${daysLeft} days remaining.`,
        daysRemaining: daysLeft,
        isActive: true,
        status: 'active',
      };
    }
    // Before Phase 1
    else if (today < phase1Start) {
      const daysUntil = Math.ceil((phase1Start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        phase: 'Ticket Sales Closed',
        price: 0,
        startDate: phase1Start,
        endDate: phase2End,
        message: `Ticket sales open March 13, 2026. Check back in ${daysUntil} days!`,
        isActive: false,
        status: 'upcoming',
      };
    }
    // Between Phase 1 and Phase 2
    else if (today > phase1End && today < phase2Start) {
      const daysUntil = Math.ceil((phase2Start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      info = {
        phase: 'Ticket Sales Paused',
        price: 0,
        startDate: phase2Start,
        endDate: phase2End,
        message: `Phase 2 tickets open April 18, 2026. Check back in ${daysUntil} days!`,
        isActive: false,
        status: 'upcoming',
      };
    }
    // After Phase 2
    else {
      info = {
        phase: 'Ticket Sales Closed',
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
    <div className="bg-white border-2 border-maroon-200 rounded-lg p-8 my-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-maroon-900 mb-2">
          {pricingInfo.phase}
        </h2>

        {pricingInfo.isActive ? (
          <div className="mb-6">
            <div className="text-5xl font-bold text-maroon-600 mb-2">
              ${pricingInfo.price}
              <span className="text-lg text-gray-600">/student</span>
            </div>
            <div className="bg-maroon-100 text-maroon-800 px-4 py-2 rounded-lg inline-block font-semibold">
              {pricingInfo.message}
            </div>
          </div>
        ) : (
          <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg inline-block font-semibold mb-6">
            {pricingInfo.message}
          </div>
        )}

        {pricingInfo.isActive && (
          <button className="bg-maroon-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors">
            Buy Tickets
          </button>
        )}
      </div>
    </div>
  );
}
