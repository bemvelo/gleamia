"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Products</h2>
          <p>120</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Orders</h2>
          <p>45</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Users</h2>
          <p>300</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold">Visits Today</h2>
          <p>1,200</p>
        </div>
      </div>

      {/* Main Management Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Analytics */}
        <Link
          href="/admin/analytics"
          className="section-male p-6 rounded shadow flex flex-col items-center"
        >
          <img src="/icons/analytics.png" alt="Analytics" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <p>View product sales, site visits, and market insights.</p>
        </Link>

        {/* Product Management */}
        <Link
          href="/admin/products"
          className="section-male p-6 rounded shadow flex flex-col items-center"
        >
          <img src="/icons/products.png" alt="Products" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>Add, edit, delete products, upload images, set prices and categories.</p>
        </Link>

        {/* User Management */}
        <Link
          href="/admin/users"
          className="section-male p-6 rounded shadow flex flex-col items-center"
        >
          <img src="/icons/users.png" alt="Users" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p>View registered users, assign roles, manage accounts.</p>
        </Link>

        {/* Order Management */}
        <Link
          href="/admin/orders"
          className="section-male p-6 rounded shadow flex flex-col items-center"
        >
          <img src="/icons/orders.png" alt="Orders" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Orders</h2>
          <p>View customer orders, update status, and track fulfillment.</p>
        </Link>

        {/* Settings */}
        <Link
          href="/admin/settings"
          className="section-male p-6 rounded shadow flex flex-col items-center"
        >
          <img src="/icons/settings.png" alt="Settings" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Settings</h2>
          <p>Configure store details, payment, and shipping options.</p>
        </Link>
      </div>
    </div>
  );
}
