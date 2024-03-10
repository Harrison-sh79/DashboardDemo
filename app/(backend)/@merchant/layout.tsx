/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-27 09:11:52
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-04 15:58:57
 */

import React from "react";
import ResizeLayout from "@/components/backend/resize-layout";
// import { getMenus } from "@/lib/action/action";
import { getTopMenus } from "@/lib/action/action";

async function MerchantLayout({ children }: { children: React.ReactNode }) {
  // const menus = await getMenus();
  const topmenus = await getTopMenus();
  const headerSize = [5, 95];
  const siderSize = [15, 85];
  const breadcrumbSize = [5, 95];
  const defaultCollapsed = false;
  const navCollapsedSize = 3.5;

  return (
    <div className="flex flex-col justify-between w-full">
      <ResizeLayout
        headerSize={headerSize}
        siderSize={siderSize}
        breadcrumbSize={breadcrumbSize}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={navCollapsedSize}
        // menus={menus}
        topmenus={topmenus}
      >
        {children}
      </ResizeLayout>
    </div>
  );
}

export default MerchantLayout;
