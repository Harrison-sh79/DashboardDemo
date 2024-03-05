/*
 * @Author: Harrison Song, harrison.sh@v-max.ca 
 * @Date: 2024-02-24 10:33:23 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 12:05:25
 */

import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function InfluencerDashboardDataCardLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <div
        className="inline-block size-6 border-[3px] border-current border-t-transparent text-primary-600-600 rounded-full dark:text-primary-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Influencer Dashboard DataCard Loading ...</span>
      </div>
    </div>
  );
}

export default InfluencerDashboardDataCardLoading;
