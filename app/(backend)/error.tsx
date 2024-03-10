/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-24 15:32:35
 * @Last Modified by: Harrison Song, harrison.sh@v-max.ca
 * @Last Modified time: 2024-02-24 15:36:05
 */

"use client";

function BackendErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center gap-4">
      Error: {error.message}
    </div>
  );
}

export default BackendErrorPage;
