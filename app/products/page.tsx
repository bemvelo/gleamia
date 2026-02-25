"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const items: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as { name: string; price: number }),
        }));
        setProducts(items);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...currentCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded shadow flex flex-col items-center"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-3 py-1 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
