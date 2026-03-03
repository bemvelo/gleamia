"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type AnalyticsChartProps = {
  title: string;
  data: { [key: string]: string | number }[];
};

export default function AnalyticsChart({ title, data }: AnalyticsChartProps) {
  // Extract labels and values dynamically
  const labels = data.map((item) => Object.values(item)[0] as string);
  const values = data.map((item) => Object.values(item)[1] as number);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <Bar data={chartData} options={options} />
    </div>
  );
}
