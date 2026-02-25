"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div key={i} className="section-male p-4 rounded">
              {item.name} - ${item.price}
            </div>
          ))}

          <Link href="/checkout">
            <button className="bg-green-600 text-white p-2 rounded mt-4">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
