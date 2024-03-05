/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-27 09:11:52
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-04 15:57:56
 */

import React, { Suspense } from "react";
import ResizeLayout from "@/components/dashboard/resize-layout";
// import { getMenus } from "@/lib/action/action";
import { getTopMenus } from "@/lib/action/action";
import InfluLoading from "./loading";

async function InfluencerLayout({ children }: { children: React.ReactNode }) {
  // const menus = await getMenus();
  const topmenus = await getTopMenus();
  const headerSize = [7, 93];
  const siderSize = [15, 85];
  const breadcrumbSize = [5, 95];
  const defaultCollapsed = false;
  const navCollapsedSize = 3.5;

  return (
    <Suspense fallback={<InfluLoading />}>
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
    </Suspense>
  );
}

export default InfluencerLayout;
