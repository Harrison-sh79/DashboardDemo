"use client";

import {
  Tooltip,
  ResponsiveContainer,
  LabelList,
  FunnelChart,
  Funnel,
} from "recharts";
import colors from "tailwindcss/colors";

const data = [
  {
    value: 100,
    name: "Sales",
    fill: colors.violet[800],
  },
  {
    value: 80,
    name: "Clicks",
    fill: colors.violet[600],
  },
  {
    value: 60,
    name: "Visits",
    fill: colors.violet[400],
  },
  {
    value: 40,
    name: "Consultants",
    fill: colors.violet[300],
  },
  {
    value: 20,
    name: "Orders",
    fill: colors.violet[200],
  },
];

export function FunnelOverview() {
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
      <FunnelChart width={730} height={250}>
        <Tooltip
          labelStyle={{ fontSize: 12, color: "hsl(var(--primary))" }}
          contentStyle={{
            fontSize: 12,
            color: "hsl(var(--primary))",
            backgroundColor: colors.violet[100],
          }}
        />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="right"
            fill="hsl(var(--foreground))"
            stroke="none"
            dataKey="name"
            fontSize={12}
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
}
