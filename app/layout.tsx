import type { Metadata } from "next";
import { Pacifico } from 'next/font/google';
import "./globals.css";

const handwriting = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-handwriting',
});

export const metadata: Metadata = {
  title: "Sweater Day Love ❤️",
  description: "A special Sweater Day message for my love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={handwriting.variable}>
      <body>{children}</body>
    </html>
  );
}
