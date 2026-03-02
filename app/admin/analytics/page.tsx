"use client";

import AnalyticsChart from "../../../components/AnalyticsChart";

export default function AnalyticsPage() {
  // Example data — replace with Firestore queries
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
      <AnalyticsChart title="Product Sales" data={salesData} />
      <AnalyticsChart title="Site Visits" data={visitsData} />
      {/* Add market analytics here */}
    </div>
  );
}
