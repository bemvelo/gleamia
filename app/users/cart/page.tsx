"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  /* Load cart */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  /* Save helper */
  const updateCart = (newCart: Product[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  /* + */
  const addItem = (id: string) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /* - */
  const removeItem = (id: string) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  /* delete */
  const deleteItem = (id: string) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  /* total */
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 flex items-center gap-4 mb-4"
            >
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  className="w-20 h-20 object-cover rounded"
                />
              )}

              <div className="flex-1">
                <h2 className="font-semibold">{item.name}</h2>
                <p>${item.price}</p>
                <p className="text-sm text-gray-600">
                  Qty: {item.quantity}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  −
                </button>

                <button
                  onClick={() => addItem(item.id)}
                  className="px-3 py-1 bg-black text-white rounded"
                >
                  +
                </button>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right font-bold text-xl mt-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Checkout */}
          <div className="text-right mt-4">
            <Link href="/checkout">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}