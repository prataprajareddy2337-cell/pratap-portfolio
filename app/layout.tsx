import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratap Reddy — Data Portfolio",
  description: "Data Engineer • AWS • Python • Spark",
  openGraph: {
    title: "Pratap Reddy — Data Portfolio",
    description: "Data Engineer • AWS • Python • Spark",
    images: ["/og.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratap Reddy — Data Portfolio",
    description: "Data Engineer • AWS • Python • Spark",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
