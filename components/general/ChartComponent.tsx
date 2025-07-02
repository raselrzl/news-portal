"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartComponentProps {
  routeHits: { fullUrl: string; hits: number }[];
}

const ChartComponent = ({ routeHits }: ChartComponentProps) => {
  // Prepare the chartData with a structure that recharts can consume
  const chartData = routeHits.map((route) => ({
    name: route.fullUrl,
    hits: route.hits,
  }));

  const chartConfig = {
    hits: {
      label: "Hits",
      color: "#F97316", // SchadCN Orange color (used for bars)
    },
    gridStroke: "#FDE68A", // Light orange color for the grid lines
    axisStroke: "#FBBF24", // Orange color for axis
  };

  // Custom Tooltip content
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const { name, value } = payload[0]; // Assuming single payload data
      return (
        <div className="bg-white p-2 border rounded-md shadow-lg">
          <p className="font-medium text-sm text-gray-800">{name}</p>
          <p className="text-sm text-gray-600">Hits: {value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-[250px] w-full">
      {/* Make the chart responsive using ResponsiveContainer */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          {/* Applying SchadCN theme to grid and axes */}
          <CartesianGrid strokeDasharray="3 3" stroke={chartConfig.gridStroke} />
          <XAxis
            dataKey="name"
            stroke={chartConfig.axisStroke}
            angle={-90} // Default rotation for larger screens
            textAnchor="end" // Align the text to the end for proper readability
            dy={20} // Adjust the vertical alignment of the labels
            tick={{ fontSize: 8 }}
          />
          <YAxis stroke={chartConfig.axisStroke} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {/* Bar using SchadCN Orange color */}
          <Bar dataKey="hits" fill={chartConfig.hits.color} radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
