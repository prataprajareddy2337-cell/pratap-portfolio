import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratap Reddy — Data Portfolio",
  description:
    "Portfolio of Pratap Raja Reddy Chirra — Data Analyst & Data Engineer. Projects, experience, and contact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
