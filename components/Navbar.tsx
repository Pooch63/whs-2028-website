"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-maroon sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="nav-link flex items-center gap-3 text-2xl font-bold text-bg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/whs-logo.png"
              alt="WHS"
              width={40}
              height={40}
              className="shrink-0"
            />
            WHS Class of 2028
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="nav-link text-bg transition font-medium">
              Home
            </Link>
            <Link
              href="/semiformal"
              className="nav-link text-bg transition font-medium"
            >
              Semiformal
            </Link>
            <Link
              href="/raffle"
              className="nav-link text-bg transition font-medium"
            >
              April Raffle
            </Link>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            type="button"
            className="md:hidden p-2 text-bg hover:opacity-80 transition-opacity"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ease-in-out ${
            mobileMenuOpen ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 py-2 border-t border-white/20">
            <Link
              href="/"
              className="nav-link text-bg transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/semiformal"
              className="nav-link text-bg transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Semiformal
            </Link>
            <Link
              href="/raffle"
              className="nav-link text-bg transition font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              April Raffle
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
