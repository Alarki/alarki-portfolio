import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alarki Ndemugwedha | Full-Stack Developer",
  description:
    "Junior Full-Stack Developer building scalable software systems using FastAPI, Python, React, and PostgreSQL.",
  keywords: [
    "Full-Stack Developer",
    "FastAPI Developer",
    "React Developer",
    "Python Developer",
    "Software Engineer Namibia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased selection:bg-red-600/30">
      <body className="bg-[#070707] text-white">
        {children}
      </body>
    </html>
  );
}
