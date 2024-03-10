"use client"; // if you use app dir, don't forget this line

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "./overview-chart";
import { AreaOverview } from "./area-chart";
import { BarOverview } from "./bar-chart";
import BubbleOverview from "./bubble-chart";
import { FunnelOverview } from "./funnel-chart";
import { RadarOverview } from "./radar-chart";
import { PieOverview } from "./pie-chart";

function ChartCard() {
  // function generateData(baseval: any, count: any, yrange: any) {
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }

  // const AreaOption: ApexOptions = {
  //   chart: {
  //     height: 350,
  //     type: "area",
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   stroke: {
  //     curve: "smooth",
  //   },
  //   xaxis: {
  //     type: "datetime",
  //     categories: [
  //       "2018-09-19T00:00:00.000Z",
  //       "2018-09-19T01:30:00.000Z",
  //       "2018-09-19T02:30:00.000Z",
  //       "2018-09-19T03:30:00.000Z",
  //       "2018-09-19T04:30:00.000Z",
  //       "2018-09-19T05:30:00.000Z",
  //       "2018-09-19T06:30:00.000Z",
  //     ],
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   tooltip: {
  //     x: {
  //       format: "dd/MM/yy HH:mm",
  //     },
  //   },
  //   legend: {
  //     labels: {
  //       useSeriesColors: true,
  //     },
  //   },
  // };

  // const AreaSeries = [
  //   {
  //     name: "series1",
  //     data: [31, 40, 28, 51, 42, 109, 100],
  //   },
  //   {
  //     name: "series2",
  //     data: [11, 32, 45, 32, 34, 52, 41],
  //   },
  // ];

  // const ColumnOption: ApexOptions = {
  //   chart: {
  //     type: "bar",
  //     height: 430,
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: true,
  //       dataLabels: {
  //         position: "top",
  //       },
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //     offsetX: -6,
  //     style: {
  //       fontSize: "12px",
  //       colors: ["#fff"],
  //     },
  //   },
  //   stroke: {
  //     show: true,
  //     width: 1,
  //     colors: ["#fff"],
  //   },
  //   tooltip: {
  //     shared: true,
  //     intersect: false,
  //   },
  //   xaxis: {
  //     categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   legend: {
  //     labels: {
  //       useSeriesColors: true,
  //     },
  //   },
  // };

  // const ColumnSeries = [
  //   {
  //     data: [44, 55, 41, 64, 22, 43, 21],
  //   },
  //   {
  //     data: [53, 32, 33, 52, 13, 44, 32],
  //   },
  // ];

  // const RadialOption: ApexOptions = {
  //   chart: {
  //     height: 350,
  //     type: "radialBar",
  //   },
  //   plotOptions: {
  //     radialBar: {
  //       dataLabels: {
  //         name: {
  //           fontSize: "22px",
  //         },
  //         value: {
  //           fontSize: "16px",
  //           color: "#828282",
  //         },
  //         total: {
  //           show: true,
  //           label: "Total",
  //           formatter: function (w) {
  //             // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
  //             return "249";
  //           },
  //         },
  //       },
  //     },
  //   },
  //   labels: ["Apples", "Oranges", "Bananas", "Berries"],
  // };

  // const RadialSeries = [44, 55, 67, 83];

  // const BubbleOption: ApexOptions = {
  //   chart: {
  //     height: 350,
  //     type: "bubble",
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   fill: {
  //     opacity: 0.8,
  //   },
  //   title: {
  //     text: "Simple Bubble Chart",
  //   },
  //   xaxis: {
  //     tickAmount: 12,
  //     type: "category",
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   yaxis: {
  //     max: 70,
  //     labels: {
  //       style: {
  //         colors: "#828282",
  //       },
  //     },
  //   },
  //   legend: {
  //     labels: {
  //       useSeriesColors: true,
  //     },
  //   },
  // };

  // const BubbleSeries = [
  //   {
  //     name: "Product1",
  //     data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
  //       min: 10,
  //       max: 60,
  //     }),
  //   },
  //   {
  //     name: "Product2",
  //     data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
  //       min: 10,
  //       max: 60,
  //     }),
  //   },
  //   {
  //     name: "Product3",
  //     data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
  //       min: 10,
  //       max: 60,
  //     }),
  //   },
  //   {
  //     name: "Product4",
  //     data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
  //       min: 10,
  //       max: 60,
  //     }),
  //   },
  // ];

  return (
    // <!-- Card Blog -->
    <div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
      {/* <!-- Grid --> */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {/* <!-- Card --> */}
        {/* <div className="group flex flex-col h-full bg-white text-primary border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <ApexChart
            type="area"
            options={AreaOption}
            series={AreaSeries}
            height={350}
            width={"100%"}
          />
        </div> */}
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        {/* <div className="group flex flex-col h-full bg-white text-primary border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <ApexChart
            type="bar"
            options={ColumnOption}
            series={ColumnSeries}
            height={350}
            width={"100%"}
          />
        </div> */}
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        {/* <div className="group flex flex-col h-full bg-white text-primary border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <ApexChart
            type="radialBar"
            options={RadialOption}
            series={RadialSeries}
            height={350}
            width={"100%"}
          />
        </div> */}
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        {/* <div className="group flex flex-col h-full bg-white text-primary border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <ApexChart
            type="bubble"
            options={BubbleOption}
            series={BubbleSeries}
            height={350}
            width={"100%"}
          />
        </div> */}
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
      <div className="mt-6 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Recent status generally.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <AreaOverview />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <BarOverview />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Recent status generally.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <BubbleOverview />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <FunnelOverview />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>Recent status generally.</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <RadarOverview />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <PieOverview />
          </CardContent>
        </Card>
      </div>
    </div>
    // <!-- End Card Blog -->
  );
}

export default ChartCard;
