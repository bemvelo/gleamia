import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { WishlistProvider } from "@/lib/wishlistContext";
import { ToastProvider } from "@/lib/toastContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLEAMIA | Premium Jewelry Store",
  description: "Discover handcrafted jewelry - necklaces, rings, earrings and accessories. Shop timeless elegance online.",
  keywords: "jewelry, necklaces, rings, earrings, accessories, luxury",
  creator: "GLEAMIA Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e6e6fa" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        <ToastProvider>
          <WishlistProvider>
            {/* Top navigation */}
            <NavBar />

            {/* Main page content */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
