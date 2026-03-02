"use client";

import Link from "next/link";

export default function ManagePage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/products" className="section-male p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>Add, edit, delete products.</p>
        </Link>
        <Link href="/admin/orders" className="section-male p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>View and manage customer orders.</p>
        </Link>
      </div>
    </div>
  );
}
