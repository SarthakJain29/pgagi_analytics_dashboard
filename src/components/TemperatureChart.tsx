// src/components/TemperatureChart.tsx

"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// Type definition for the props
interface TemperatureChartProps {
  data: any[];  // Adjust the type according to your API response
}

const TemperatureChart = ({ data }: TemperatureChartProps) => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="dt_txt" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
  </LineChart>
);

export default TemperatureChart;
