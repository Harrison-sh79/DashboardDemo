"use client";
import React from "react";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import colors from "tailwindcss/colors";

function BubbleOverview() {
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

  function generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push({ x, y, z });
      baseval += 86400000;
      i++;
    }
    return series;
  }

  const BubbleSeries = [
    {
      name: "Product1",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product2",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product3",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Product4",
      data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="number"
          dataKey="x"
          // name="stature"
          // unit="cm"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--foreground))"
        />
        <YAxis
          type="number"
          dataKey="y"
          // name="weight"
          // unit="kg"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          stroke="hsl(var(--foreground))"
        />
        <ZAxis
          type="number"
          dataKey="z"
          range={[10, 1000]}
          //   name="score"
          //   unit="km"
        />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          labelStyle={{ fontSize: 12, color: "hsl(var(--primary))" }}
          contentStyle={{
            fontSize: 12,
            color: "hsl(var(--primary))",
            backgroundColor: colors.violet[100],
          }}
        />
        <Legend iconSize={12} wrapperStyle={{fontSize:"12px"}} />
        <Scatter
          name="Product1"
          data={BubbleSeries[0].data}
          fill={colors.violet[200]}
          shape="circle"
          style={{
            outline: "2px solid white",
            borderRadius: "9999px",
            opacity: "0.8",
          }}
        />
        <Scatter
          name="Product2"
          data={BubbleSeries[1].data}
          fill={colors.violet[400]}
          shape="circle"
          style={{
            outline: "2px solid white",
            borderRadius: "9999px",
            opacity: "0.8",
          }}
        />
        <Scatter
          name="Product3"
          data={BubbleSeries[2].data}
          fill={colors.violet[600]}
          shape="circle"
          style={{
            outline: "2px solid white",
            borderRadius: "9999px",
            opacity: "0.8",
          }}
        />
        <Scatter
          name="Product4"
          data={BubbleSeries[3].data}
          fill={colors.violet[800]}
          shape="circle"
          style={{
            outline: "2px solid white",
            borderRadius: "9999px",
            opacity: "0.8",
          }}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default BubbleOverview;
