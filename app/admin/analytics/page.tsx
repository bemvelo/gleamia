"use client";

import AnalyticsChart from "../../../components/AnalyticsChart";

export default function AnalyticsPage() {
  // Example datasets — replace with Firestore queries later
  const salesData = [
    { month: "Jan", sales: 120 },
    { month: "Feb", sales: 200 },
    { month: "Mar", sales: 150 },
  ];

  const visitsData = [
    { day: "Mon", visits: 300 },
    { day: "Tue", visits: 450 },
    { day: "Wed", visits: 500 },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5dc] text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>

      {/* Product Sales Chart */}
      <AnalyticsChart title="Product Sales" data={salesData} />

      {/* Site Visits Chart */}
      <AnalyticsChart title="Site Visits" data={visitsData} />

      {/* Market Analytics placeholder */}
      <div className="bg-white p-6 rounded shadow mt-6">
        <h2 className="text-xl font-semibold mb-2">Market Analytics</h2>
        <p>Coming soon: customer demographics, trending categories, and regional sales insights.</p>
      </div>
    </div>
  );
}

