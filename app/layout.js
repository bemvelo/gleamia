"use client";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-[var(--accent)] text-[var(--primary)]">
          <NavBar />
          <main className="flex-1 container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
