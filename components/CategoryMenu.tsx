"use client";

export default function CategoryMenu({ categories, onSelect }: { categories: string[]; onSelect: (cat: string) => void }) {
  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
