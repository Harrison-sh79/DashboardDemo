/*
 * @Author: Harrison Song, harrison.sh@v-max.ca 
 * @Date: 2024-02-24 10:33:06 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 12:00:18
 */

import React from "react";

function AuthLoading() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary-600-600 rounded-full dark:text-primary-500"
        role="status"
        aria-label="loading"
      >
      </div>
      <span className="sr-only">Loading (AuthLoading)...</span>
    </div>
  );
}

export default AuthLoading;
