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

  // Desktop view - full month (condensed)
  const DesktopCalendar = () => (
    <div className="hidden md:block">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold text-maroon-700 text-sm py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <div
            key={index}
            className="aspect-square bg-white border border-maroon-200 rounded p-1 flex flex-col items-center justify-center text-center"
          >
            {day ? (
              <>
                <div className="font-bold text-maroon-900 text-xs">{day}</div>
                <div className="text-[10px] text-maroon-600 line-clamp-2 leading-tight">
                  {rafflePhrasesArray[(day - 1) % rafflePhrasesArray.length]}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );

  // Mobile view - vertical week scrolling
  const MobileCalendar = () => {
    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
            className="p-2 text-maroon-600 hover:bg-maroon-50 rounded disabled:opacity-30"
            disabled={selectedWeek === 0}
            aria-label="Previous week"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <span className="text-xs font-semibold text-maroon-700">
            Week {selectedWeek + 1} of {Math.ceil(days.length / 7)}
          </span>
          <button
            onClick={() =>
              setSelectedWeek(
                Math.min(Math.ceil(days.length / 7) - 1, selectedWeek + 1)
              )
            }
            className="p-2 text-maroon-600 hover:bg-maroon-50 rounded disabled:opacity-30"
            disabled={selectedWeek === Math.ceil(days.length / 7) - 1}
            aria-label="Next week"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-3">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => (
            <div key={day} className="text-center font-bold text-maroon-700 text-xs py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {weeks[selectedWeek]?.map((day, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-maroon-200 rounded p-1 flex flex-col items-center justify-center text-center"
            >
              {day ? (
                <>
                  <div className="font-bold text-maroon-900 text-xs">{day}</div>
                  <div className="text-[10px] text-maroon-600 line-clamp-2 leading-tight">
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
