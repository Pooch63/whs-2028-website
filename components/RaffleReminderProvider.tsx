"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Ticket, X } from "lucide-react";

const DELAY_MS = 2500;

export default function RaffleReminderProvider() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const isSemiformal = pathname === "/semiformal";

  useEffect(() => {
    if (!isSemiformal || dismissed) return;
    const t = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(t);
  }, [isSemiformal, dismissed]);

  useEffect(() => {
    if (!visible) return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimateIn(true));
    });
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  if (!isSemiformal || !visible) return null;

  return (
    <div
      className="fixed z-[100] bg-bg inset-0 flex items-center justify-center p-4 bg-black/50 md:bg-transparent md:items-end md:justify-end md:inset-auto md:bottom-6 md:right-6 md:p-0 md:pointer-events-none"
      role="dialog"
      aria-label="Raffle reminder"
      onClick={(e) => {
        if (e.target === e.currentTarget) setDismissed(true);
      }}
    >
      <div
        className={`relative w-full max-w-sm md:max-w-xs bg-bg rounded-xl shadow-xl border border-maroon/20 overflow-hidden transition-all duration-300 md:pointer-events-auto translate-y-4 opacity-0 ${
          animateIn ? "translate-y-0 opacity-100" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-5 pt-8 md:pt-5">
          <div className="flex items-center gap-2 text-maroon mb-2">
            <Ticket className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-semibold uppercase tracking-wide">Psst!</span>
          </div>
          <p className="text-gray-800 text-base leading-snug mb-4">
            Did you know we&apos;re also having a{" "}
            <span className="font-semibold text-maroon">raffle</span>?
          </p>
          <Link
            href="/raffle"
            className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-lg bg-maroon text-white font-medium text-sm hover:opacity-90 transition"
          >
            Check out the April Raffle
          </Link>
        </div>
        <div className="h-1 bg-maroon/80" />
      </div>
    </div>
  );
}
