"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/src/lib/firebase";

import NavBar from "../../../components/NavBar";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        const items: Product[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as {
            name: string;
            price: number;
            description?: string;
            imageUrl?: string;
            category?: string;
          }),
        }));
        setProducts(items);
      } catch (error: any) {
        alert(error.message);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-6">
      <NavBar />
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      <SearchBar value={search} onChange={setSearch} />

      <CategoryMenu
        categories={["All", "Bags", "Jewelry", "Watches"]}
        onSelect={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}