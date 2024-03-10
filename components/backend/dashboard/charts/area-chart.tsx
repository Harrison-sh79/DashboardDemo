"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Product A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Product B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Product C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Product D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Product E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Product F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Product G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function AreaOverview() {
  // Override console.error
  // This is a hack to suppress the warning about missing defaultProps in the recharts library
  // @link https://github.com/recharts/recharts/issues/3615
  const error = console.error;

  // eslint-disable-next-line
  console.error = (...args: any) => {
    // eslint-disable-next-line
    if (/defaultProps/.test(args[0])) return;
    // eslint-disable-next-line
    error(...args);
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.9}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          labelStyle={{ fontSize: 12, color: "hsl(var(--primary))" }}
          contentStyle={{ fontSize: 12, color: "hsl(var(--primary))" }}
        />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="hsl(var(--primary))"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
