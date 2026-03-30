"use client";

import { useState } from "react";

export default function CategoryMenu({ categories, onSelect }) {
  const [selected, setSelected] = useState("All");

  const handleSelect = (cat) => {
    setSelected(cat);
    onSelect(cat);
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleSelect(cat)}
          className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            selected === cat
              ? "bg-black text-white shadow-lg"
              : "bg-white border-2 border-gray-300 text-black hover:border-black hover:shadow-md"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
