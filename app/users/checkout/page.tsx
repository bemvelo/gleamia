"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const router = useRouter();

  const [cart, setCart] = useState<Product[]>([]);
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("ecocash");
  const [loading, setLoading] = useState(false);

  /* Load cart */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(data);
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePayment = async () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }

    setLoading(true);

    try {
      /* Save order to Firebase */
      await addDoc(collection(db, "orders"), {
        items: cart,
        total,
        phone,
        method,
        status: "pending",
        createdAt: new Date(),
      });

      /* Clear cart */
      localStorage.removeItem("cart");

      router.push("/checkout/success");
    } catch (err: any) {
      alert(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {/* Order summary */}
      <div className="bg-white p-4 rounded shadow">
        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.quantity}
          </p>
        ))}

        <p className="font-bold mt-3">Total: ${total.toFixed(2)}</p>
      </div>

      {/* Phone */}
      <input
        type="text"
        placeholder="EcoCash Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 w-full rounded"
      />

      {/* Payment method */}
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        className="border p-2 w-full rounded"
      >
        <option value="ecocash">EcoCash</option>
        <option value="cod">Cash on Delivery</option>
      </select>

      {/* Pay button */}
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}