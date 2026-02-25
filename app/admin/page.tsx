"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AdminPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    try {
      await addDoc(collection(db, "products"), {
        name,
        price: Number(price),
      });
      alert("Product added!");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 flex flex-col gap-3 max-w-sm">
      <h1 className="text-xl font-bold">Admin Panel</h1>
      <input
        placeholder="Product name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
      />
      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        className="border p-2"
      />
      <button onClick={addProduct} className="bg-purple-600 text-white p-2">
        Add Product
      </button>
    </div>
  );
}
