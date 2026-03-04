"use client";

import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <h1 className="text-3xl font-bold">Order Successful 🎉</h1>
      <p>Your payment was received. Thank you for shopping with us.</p>

      <div className="flex gap-4">
        <Link href="/products">
          <button className="bg-black text-white px-5 py-2 rounded">
            Continue Browsing
          </button>
        </Link>

        <Link href="/logout">
          <button className="bg-red-600 text-white px-5 py-2 rounded">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}
