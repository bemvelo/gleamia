"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Cart</h1>
      {cart.map((item, i) => (
        <div key={i}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
}
