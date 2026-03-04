'use client';

import { useState } from 'react';

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

  // Desktop view - full month
  const DesktopCalendar = () => (
    <div className="hidden md:block">
      <div className="grid grid-cols-7 gap-2 mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-bold text-maroon-700 py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={index}
            className="aspect-square bg-white border border-maroon-200 rounded-lg p-2 flex flex-col items-center justify-center text-center text-sm"
          >
            {day ? (
              <>
                <div className="font-bold text-maroon-900 mb-1">{day}</div>
                <div className="text-xs text-maroon-600 line-clamp-2">
                  {rafflePhrasesArray[(day - 1) % rafflePhrasesArray.length]}
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );

  // Mobile view - week by week
  const MobileCalendar = () => {
    const weeks: (number | null)[][] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className="md:hidden">
        <div className="mb-4 flex justify-between items-center">
          <button
            onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
            className="px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 disabled:opacity-50"
            disabled={selectedWeek === 0}
          >
            ← Previous Week
          </button>
          <span className="text-sm font-semibold text-maroon-700">
            Week {selectedWeek + 1} of {Math.ceil(days.length / 7)}
          </span>
          <button
            onClick={() =>
              setSelectedWeek(
                Math.min(Math.ceil(days.length / 7) - 1, selectedWeek + 1)
              )
            }
            className="px-4 py-2 bg-maroon-600 text-white rounded-lg hover:bg-maroon-700 disabled:opacity-50"
            disabled={selectedWeek === Math.ceil(days.length / 7) - 1}
          >
            Next Week →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-bold text-maroon-700 py-2 text-xs">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {weeks[selectedWeek]?.map((day, index) => (
            <div
              key={index}
              className="aspect-square bg-white border border-maroon-200 rounded-lg p-2 flex flex-col items-center justify-center text-center text-xs"
            >
              {day ? (
                <>
                  <div className="font-bold text-maroon-900 mb-1">{day}</div>
                  <div className="text-xs text-maroon-600 line-clamp-2">
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
