import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RaffleReminderProvider from "@/components/RaffleReminderProvider";
import Navbar from "@/components/Navbar";

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
        <Navbar />
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
