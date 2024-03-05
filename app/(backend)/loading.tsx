/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:23:13
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 12:01:51
 */

import React from "react";

function BackEndLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-primary"
        role="status"
        aria-label="loading"
      >
      </div>
      <span className="sr-only">Loading (BackEndLoading)...</span>
    </div>
  );
}

export default BackEndLoading;
