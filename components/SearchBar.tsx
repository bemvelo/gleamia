"use client";

import { useState } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`flex items-center border rounded-full px-4 py-2 max-w-md w-full shadow-sm transition
      ${focused ? "ring-2 ring-black" : ""}`}
    >
      {/* Icon */}
      <span className="mr-2">🔍</span>

      {/* Input */}
      <input
        type="text"
        placeholder="Search jewellery..."
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 outline-none bg-transparent"
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="ml-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      )}
    </div>
  );
}
