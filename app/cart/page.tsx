"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  quantity?: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const updateCart = (newCart: Product[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const addItem = (id: string) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCart(newCart);
  };

  const removeItem = (id: string) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) - 1 } : item
      )
      .filter((item) => item.quantity! > 0);
    updateCart(newCart);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-6">
      <NavBar />
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, i) => (
            <div
              key={i}
              className="section-male p-4 rounded shadow flex items-center gap-4"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded"
                />
              )}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
                {item.description && (
                  <p className="text-sm text-gray-700">{item.description}</p>
                )}
                <p className="mt-2">Quantity: {item.quantity || 1}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => addItem(item.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-right font-bold text-xl mt-4">
            Total: ${totalPrice}
          </div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
