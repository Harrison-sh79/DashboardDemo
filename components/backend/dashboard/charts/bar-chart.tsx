"use client";

import {
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  LabelList,
  Rectangle,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    name: "ProductA",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "ProductB",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "ProductC",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "ProductD",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "ProductE",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "ProductF",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

export function BarOverview() {
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

  const renderCustomizedLabel = (Productps: any) => {
    const { x, y, width, height, value } = Productps;
    const radius = 10;
    return (
      <g>
        <circle
          cx={x + height / 2 + width + 10}
          cy={y + radius - 2}
          r={radius}
          fill={colors.violet[800]}
        />
        <text
          x={x + height / 2 + width + 10}
          y={y + radius -2}
          fill={colors.white}
          textAnchor="middle"
          dominantBaseline="central"
          className="text-[12px] font-bold"
        >
          {value.substring(value.length-1,value.length)}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        layout="vertical"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis
          type="number"
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="name"
          type="category"
          stroke="hsl(var(--foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          labelStyle={{ fontSize: 12, color: "hsl(var(--primary))" }}
          contentStyle={{ fontSize: 12, color: "hsl(var(--primary))", backgroundColor: colors.violet[100] }}
        />
        {/* <Legend /> */}
        {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        {/* <Bar dataKey="pv" barSize={20} fill="#413ea0" /> */}
        <Bar
          dataKey="pv"
          fill={colors.violet[800]}
          minPointSize={5}
          // activeBar={<Rectangle fill="pink" stroke="blue" />}
        >
          <LabelList dataKey="name" content={renderCustomizedLabel} />
        </Bar>
        {/* <Bar dataKey="uv" barSize={20} fill="#413ea0" /> */}
        <Bar
          dataKey="uv"
          fill={colors.violet[500]}
          minPointSize={10}
          // activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
        {/* <Line dataKey="uv" stroke="#ff7300" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
