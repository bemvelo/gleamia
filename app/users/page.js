"use client";

import Link from "next/link";

export default function AdminPage() {
  const stats = [
    { label: "Products", value: "120", icon: "📦", color: "from-blue-500 to-blue-600" },
    { label: "Orders", value: "45", icon: "🛒", color: "from-purple-500 to-purple-600" },
    { label: "Users", value: "300", icon: "👥", color: "from-green-500 to-green-600" },
    { label: "Revenue", value: "$12.5K", icon: "💰", color: "from-yellow-500 to-yellow-600" },
  ];

  const menuItems = [
    {
      href: "/admin/analytics",
      title: "Analytics",
      desc: "View product sales, site visits, and market insights.",
      icon: "📊",
    },
    {
      href: "/admin/products",
      title: "Products",
      desc: "Add, edit, delete products, upload images, set prices.",
      icon: "🎁",
    },
    {
      href: "/admin/users",
      title: "Users",
      desc: "View registered users, assign roles, manage accounts.",
      icon: "👤",
    },
    {
      href: "/admin/orders",
      title: "Orders",
      desc: "View customer orders, update status, and track fulfillment.",
      icon: "📋",
    },
    {
      href: "/admin/profile",
      title: "Settings",
      desc: "Configure store details, payment, and shipping options.",
      icon: "⚙️",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-16 mb-12 rounded-2xl">
        <h1 className="text-5xl font-bold mb-3">📊 Admin Dashboard</h1>
        <p className="text-lg text-gray-300">Manage your store, products, and customers</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white/90">{stat.label}</h3>
              <span className="text-3xl">{stat.icon}</span>
            </div>
            <p className="text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Menu */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-black">Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-200 transition-all hover:scale-105 hover:border-black"
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition">{item.icon}</div>
              <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 flex items-center text-black font-semibold group-hover:translate-x-2 transition">
                Learn more <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
