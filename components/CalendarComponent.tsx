'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface CalendarComponentProps {
  month: number; // 1-12
  year: number;
}

const rafflePhrasesArray = [
  "Win a $25 gift card!",
  "Movie night for two!",
  "Free dessert coupon!",
  "Starbucks gift card!",
  "$50 Amazon gift card!",
  "Concert tickets!",
  "Restaurant gift card!",
  "Gaming console gift!",
  "Wireless earbuds!",
  "Coffee shop card!",
  "Game night package!",
  "Streaming service credit!",
  "$75 mall gift card!",
  "Experience voucher!",
  "Sports equipment!",
  "Tech accessory!",
  "Lunch coupon!",
  "Movie tickets!",
  "Pizza party!",
  "Bluetooth speaker!",
  "Phone case!",
  "Portable charger!",
  "Photo printing credit!",
  "Hobby supplies!",
  "Fitness class pass!",
  "Weekend getaway!",
  "Bookstore card!",
  "Art supplies!",
  "Premium snack box!",
  "Spa credit!",
];

export default function CalendarComponent({
  month = 4,
  year = 2026,
}: CalendarComponentProps) {
  const [selectedWeek, setSelectedWeek] = useState(0);

  // Get days in month
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  // Create array of day objects
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Desktop view - full month (ultra condensed)
  const DesktopCalendar = () => (
    <div className="hidden md:block">
      <div className="grid grid-cols-7 mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold text-maroon text-xs py-1 border border-maroon-light">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border border-maroon-light">
        {days.map((day, index) => (
          <div
            key={index}
            className="aspect-square bg-white border border-maroon-light p-1 flex flex-col justify-start text-left relative"
          >
            {day ? (
              <>
                <div className="font-bold text-maroon text-xl leading-none">{day}</div>
                <div className="text-base text-maroon line-clamp-3 leading-snug mt-1">
                  {rafflePhrasesArray[(day - 1) % rafflePhrasesArray.length]}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );

  // Mobile view - vertical week scrolling (compact)
  const MobileCalendar = () => {
    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
            className="p-1 text-maroon hover:bg-maroon-light rounded disabled:opacity-30"
            disabled={selectedWeek === 0}
            aria-label="Previous week"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-maroon">
            Week {selectedWeek + 1}
          </span>
          <button
            onClick={() =>
              setSelectedWeek(
                Math.min(Math.ceil(days.length / 7) - 1, selectedWeek + 1)
              )
            }
            className="p-1 text-maroon hover:bg-maroon-light rounded disabled:opacity-30"
            disabled={selectedWeek === Math.ceil(days.length / 7) - 1}
            aria-label="Next week"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 mb-1 border border-maroon-light">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="text-center font-bold text-maroon text-xs py-1 border border-maroon-light">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 border border-maroon-light">
          {weeks[selectedWeek]?.map((day, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-maroon-light p-1 flex flex-col justify-start text-left"
            >
              {day ? (
                <>
                  <div className="font-bold text-maroon text-xl leading-none">{day}</div>
                  <div className="text-base text-maroon line-clamp-3 leading-snug mt-1">
                    {rafflePhrasesArray[(day - 1) % rafflePhrasesArray.length]}
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <DesktopCalendar />
      <MobileCalendar />
    </div>
  );
}
