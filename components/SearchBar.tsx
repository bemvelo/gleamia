"use client";

export default function SearchBar({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 w-full max-w-md mb-6"
    />
  );
}
