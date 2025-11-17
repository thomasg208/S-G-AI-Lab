import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "S&G AI Lab - Autonomous AGI Systems",
  description: "Autonomous Agents. Self-Optimizing Digital Twins. Building the infrastructure of autonomous operations since 2025.",
  generator: "S&G AI Lab",
  openGraph: {
    title: "S&G AI Lab - Autonomous AGI Systems",
    description: "Autonomous Agents. Self-Optimizing Digital Twins. Building the infrastructure of autonomous operations since 2025.",
    images: [
      {
        url: '/images/logos/sg_ai_lab_logo.png',
        width: 1200,
        height: 630,
        alt: 'S&G AI Lab',
      }
    ],
    type: 'website',
    siteName: 'S&G AI Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: "S&G AI Lab - Autonomous AGI Systems",
    description: "Autonomous Agents. Self-Optimizing Digital Twins. Building the infrastructure of autonomous operations since 2025.",
    images: ['/images/logos/sg_ai_lab_logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
