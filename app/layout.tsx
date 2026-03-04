import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <nav className="bg-maroon-600 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-white hover:text-maroon-100 transition">
                WHS Class of 2028
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-white hover:text-maroon-100 transition font-medium">
                  Home
                </Link>
                <Link href="/semiformal" className="text-white hover:text-maroon-100 transition font-medium">
                  Semiformal
                </Link>
                <Link href="/raffle" className="text-white hover:text-maroon-100 transition font-medium">
                  April Raffle
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-maroon-900 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white">&copy; 2026 Wellesley High School Class of 2028. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
