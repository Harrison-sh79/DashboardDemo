/*
 * @Author: Harrison Song, harrison.sh@v-max.ca 
 * @Date: 2024-02-26 21:23:13 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 10:29:33
 */

import React from 'react'

function MerchantLoading() {
  return (
    <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-primary rounded-full dark:text-primary"
        role="status"
        aria-label="loading"
      >
        <span>Merchant Loading...</span>
      </div>
  )
}

export default MerchantLoading
