/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-23 11:25:17
 * @Last Modified by: Harrison Song, harrison.sh@v-max.ca
 * @Last Modified time: 2024-02-26 21:31:48
 */

import React from "react";

function MerchantDashboardLayout({
  chartcard,
  datacard,
  mapchart,
}: {
  chartcard: React.ReactNode;
  datacard: React.ReactNode;
  mapchart: React.ReactNode;
}) {
  return (
    <div>
      {datacard}
      {mapchart}
      {chartcard}
    </div>
  );
}

export default MerchantDashboardLayout;
