import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratap Reddy — Data Portfolio",
  description: "Portfolio of Pratap Raja Reddy Chirra — Data Analyst & Data Engineer.",
  openGraph: {
    title: "Pratap Reddy — Data Portfolio",
    description: "Data-driven solutions in Python, AWS, and analytics.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratap Reddy — Data Portfolio",
    description: "Data-driven solutions in Python, AWS, and analytics.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
