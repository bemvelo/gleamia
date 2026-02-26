"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-[#e6e6fa] p-4 shadow">
      <h1 className="text-2xl font-bold text-black">GLEAMIA</h1>
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
