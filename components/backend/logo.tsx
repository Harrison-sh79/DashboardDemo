/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-24 10:33:48
 * @Last Modified by: Harrison Song, harrison.sh@v-max.ca
 * @Last Modified time: 2024-02-27 12:07:49
 */

import React from "react";

function Logo() {
  return (
    <div className="bg-gradient-to-b from-violet-800 from-10% to-white to-90% text-transparent bg-clip-text hover:bg-gradient-to-t hover:from-violet-800 hover:from-10% hover:to-white hover:to-90% ">
      <a href="/">
        <p>
          <span className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl">
            V-MAX
          </span>
          <span className="font-bold text-lg"> Media Corp.</span>
        </p>
      </a>
    </div>
  );
}

export default Logo;
