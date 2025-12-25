"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { getVisitorsByDay } from "./visitorCalendar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type VisitorDay = {
  date: string;
  count: number;
};

export default function VisitorsGraph() {
  const today = new Date();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [data, setData] = useState<VisitorDay[]>([]);

  useEffect(() => {
    getVisitorsByDay(month, year).then(setData);
  }, [month, year]);

  // 👉 total days in selected month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // 👉 Map DB data by day number
  const dataMap: Record<number, number> = {};
  data.forEach((d) => {
    const day = new Date(d.date).getDate();
    dataMap[day] = d.count;
  });

  // 👉 Build full month data (1 → last day)
  const labels = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const values = labels.map((day) => dataMap[day] ?? 0);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Daily Visitors",
        data: values,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div style={{ width: "100%", maxWidth: 800 }}>
      <h3>Visitors Analytics</h3>

      {/* Filters */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <select value={month} onChange={(e) => setMonth(+e.target.value)}>
          {Array.from({ length: 12 }).map((_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>

        <select value={year} onChange={(e) => setYear(+e.target.value)}>
          {Array.from({ length: 5 }).map((_, i) => {
            const y = today.getFullYear() - i;
            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>

      {/* Graph */}
      <Line data={chartData} />
    </div>
  );
}
