/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:23:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-04 16:15:02
 */

import React from "react";

function InfluencerLoading() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-primary"
        role="status"
        aria-label="loading"
      >
      </div>
      <span className="sr-only h-5">Loading Influencer page ...</span>
    </div>
  );
}

export default InfluencerLoading;
