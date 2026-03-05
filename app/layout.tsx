import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import RaffleReminderProvider from "@/components/RaffleReminderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WHS Class of 2028",
  description: "Wellesley High School Class of 2028 - Semiformal and April Raffle",
  openGraph: {
    title: "WHS Class of 2028",
    description: "Join us for Semiformal and the April Raffle!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <nav className="bg-maroon sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="nav-link flex items-center gap-3 text-2xl font-bold text-bg transition">
                <Image src="/images/whs-logo.png" alt="WHS" width={40} height={40} className="shrink-0" />
                WHS Class of 2028
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="nav-link text-bg transition font-medium">
                  Home
                </Link>
                <Link href="/semiformal" className="nav-link text-bg transition font-medium">
                  Semiformal
                </Link>
                <Link href="/raffle" className="nav-link text-bg transition font-medium">
                  April Raffle
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-maroon py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-bg">&copy; 2026 Wellesley High School Class of 2028. All rights reserved.</p>
          </div>
        </footer>
        <RaffleReminderProvider />
      </body>
    </html>
  );
}
