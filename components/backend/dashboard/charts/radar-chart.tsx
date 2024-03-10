"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    subject: "Orders",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Subscriptions",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Consultants",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Clicks",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Sales",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Views",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export function RadarOverview() {
  // Override console.error
  // This is a hack to suppress the warning about missing defaultProductps in the recharts library
  // @link https://github.com/recharts/recharts/issues/3615
  const error = console.error;

  // eslint-disable-next-line
  console.error = (...args: any) => {
    // eslint-disable-next-line
    if (/defaultProductps/.test(args[0])) return;
    // eslint-disable-next-line
    error(...args);
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 150]}
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Radar
          name="Youtube"
          dataKey="A"
          stroke={colors.violet[300]}
          fill={colors.violet[800]}
          fillOpacity={0.6}
        />
        <Radar
          name="Facebook"
          dataKey="B"
          stroke={colors.violet[300]}
          fill={colors.violet[600]}
          fillOpacity={0.6}
        />
        <Legend iconSize={12} iconType="circle"  wrapperStyle={{ fontSize: "12px" }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
