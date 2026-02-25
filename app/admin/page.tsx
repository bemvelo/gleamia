"use client";

import Link from "next/link";

export default function ManagePage() {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Management */}
        <div className="section-male p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Product Management</h2>
          <p>Add, edit, delete products, upload images, set prices and categories.</p>
          <Link href="/admin/products">
            <button className="bg-purple-600 text-white px-4 py-2 rounded mt-3">
              Go to Products
            </button>
          </Link>
        </div>

        {/* User Management */}
        <div className="section-male p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <p>View registered users, assign roles, manage accounts.</p>
          <Link href="/admin/users">
            <button className="bg-gray-600 text-white px-4 py-2 rounded mt-3">
              Go to Users
            </button>
          </Link>
        </div>

        {/* Analytics */}
        <div className="section-male p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <p>View sales reports, inventory insights, and customer activity.</p>
          <Link href="/admin/analytics">
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-3">
              Go to Analytics
            </button>
          </Link>
        </div>

        {/* Order Management */}
        <div className="section-male p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Order Management</h2>
          <p>View customer orders, update status, and track fulfillment.</p>
          <Link href="/admin/orders">
            <button className="bg-red-600 text-white px-4 py-2 rounded mt-3">
              Go to Orders
            </button>
          </Link>
        </div>

        {/* Settings */}
        <div className="section-male p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <p>Configure store details, payment, and shipping options.</p>
          <Link href="/admin/settings">
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-3">
              Go to Settings
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

