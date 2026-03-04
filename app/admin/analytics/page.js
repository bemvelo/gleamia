"use client";

import AnalyticsChart from "../../../components/AnalyticsChart";

export default function AnalyticsPage() {
  // Example datasets — replace these with Firestore queries in production
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
    <div className="min-h-screen bg-[#e6e6fa] text-black p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Analytics</h1>

      {/* Product Sales Chart */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <AnalyticsChart title="Product Sales" data={salesData} />
      </div>

      {/* Site Visits Chart */}
      <div className="bg-white p-6 rounded shadow mb-8">
        <AnalyticsChart title="Site Visits" data={visitsData} />
      </div>

      {/* Market Analytics placeholder */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Market Analytics</h2>
        <p>
          Coming soon: customer demographics, trending categories, and regional sales insights.
        </p>
      </div>
    </div>
  );
}
