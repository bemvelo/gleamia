"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

import ProductCard from "../../../components/ProductCard";
import SearchBar from "../../../components/SearchBar";
import CategoryMenu from "../../../components/CategoryMenu";

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
  category?: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const items = snapshot.docs.map((doc) => {
        const data = doc.data() as Omit<Product, "id">;
        return { ...data, id: doc.id } as Product;
      });
      setProducts(items);
    };

    fetchProducts();
  }, []);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const qty = (prev[id] || 0) - 1;
      if (qty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: qty };
    });
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <SearchBar value={search} onChange={setSearch} />

      <CategoryMenu
        categories={["All", "Rings", "Necklaces", "Earrings", "Accessories"]}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onAdd={() => addToCart(product.id)}
            onRemove={() => removeFromCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
}