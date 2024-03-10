"use client";

import React, { Suspense } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
// import { MenuIcon } from "lucide-react";
import { ImperativePanelHandle } from "react-resizable-panels";
import Header from "./header";
// import Sidebar from "./sidebar";
import Footer from "./footer";
import { useWindowWidth } from "@react-hook/window-size";
// import { cn } from "@/lib/utils";
// import { menuType } from "@/lib/type/menu";
import { TopMenusType } from "@/lib/type/menu";
import { useSession } from "@clerk/nextjs";
// import { checkUserRole } from "@/lib/clerk/userUtils";
import InfluLoading from "@/app/(backend)/@influencer/loading";

interface Props {
  headerSize: number[] | undefined;
  siderSize: number[] | undefined;
  breadcrumbSize: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  children: React.ReactNode;
  // menus: menuType[] | undefined;
  topmenus: TopMenusType[] | undefined;
}

function ResizeLayout({
  headerSize = [15, 85],
  siderSize = [15, 85],
  // breadcrumbSize = [5, 95],
  defaultCollapsed = false,
  navCollapsedSize = 4,
  children,
  // menus,
  topmenus,
}: Props) {
  const onlyWidth = useWindowWidth();
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
  const mobileWidth = onlyWidth < 1024;

  React.useEffect(() => {
    mobileWidth ? setIsCollapsed(true) : setIsCollapsed(false);
    isCollapsed
      ? refA?.current?.resize(navCollapsedSize)
      : refA?.current?.resize(siderSize[0]);
  }, [isCollapsed, mobileWidth, navCollapsedSize, siderSize]);

  const { session } = useSession();
  const refA = React.useRef<ImperativePanelHandle>(null);
  /*  Check user role to get menus   */
  if (!session) return null;
  // const userRole = checkUserRole(session);

  return (
    <ResizablePanelGroup
      direction="vertical"
      className="w-full min-h-[100vh] items-stretch sticky top-0"
    >
      {/* Header section */}
      <ResizablePanel
        defaultSize={headerSize[0]}
        minSize={headerSize[0]}
        maxSize={headerSize[0] + 2}
        className="min-h-[45px] shadow-[0_5px_60px_-20px_rgba(0,0,0,0.6)] shadow-violet-800/10"
      >
        <div className="h-full flex flex-row justify-between items-center p-5">
          <Suspense fallback={<InfluLoading />}>
            <Header topmenus={topmenus} />
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={headerSize[1]}
        style={{ overflow: "scroll" }}
      >
        <div className="flex flex-col w-full h-full scroll-auto">
          <Suspense fallback={<InfluLoading />}>
            <div>{children}</div>
          </Suspense>
          <div className="h-[10vh]">
            <Suspense fallback={<InfluLoading />}>
              <Footer />
            </Suspense>
          </div>
        </div>
        {/* <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="w-full min-h-[90vh] items-stretch"
        > */}
        {/* Sidebar section */}
        {/* <ResizablePanel
            ref={refA}
            defaultSize={siderSize[0]}
            className={cn(
              "overflow-scroll scroll-auto",
              isCollapsed ? "min-w-[55px]" : "min-w-[181px]"
            )}
            style={{ overflow: "scroll" }}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={siderSize[0]}
            maxSize={siderSize[0] + 1}
            onCollapse={() => {
              setIsCollapsed(true);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                true
              )}`;
            }}
            onExpand={() => {
              setIsCollapsed(false);
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                false
              )}`;
            }}
          >
            <Suspense fallback={<InfluLoading />}>
              <Sidebar
                isCollapsed={isCollapsed}
                menus={
                  userRole === "org:admin"
                    ? menus?.find((menu) => menu.role === "admin")
                    : userRole === "org:influencer"
                    ? menus?.find((menu) => menu.role === "influencer")
                    : menus?.find((menu) => menu.role === "merchant")
                }
              />
            </Suspense>
          </ResizablePanel> */}
        {/* <ResizableHandle withHandle /> */}
        {/* <ResizablePanel defaultSize={siderSize[1]}>
            <ResizablePanelGroup direction="vertical"> */}
        {/* Breacsrum */}
        {/* <ResizablePanel
                defaultSize={breadcrumbSize[0]}
                minSize={breadcrumbSize[0]}
                maxSize={breadcrumbSize[0] + 1}
                className="min-h-[50px]"
              >
                <div className="flex flex-row h-full w-full items-center justify-between p-3">
                  <div className="pl-2 lg:hidden">
                    <MenuIcon
                      size={16}
                      className="cursor-pointer text-foreground"
                      onClick={() => {
                        setIsCollapsed(!isCollapsed);
                      }}
                    />
                  </div>
                </div>
              </ResizablePanel> */}
        {/* Main Content */}
        {/* <ResizableHandle />
              <ResizablePanel
                defaultSize={breadcrumbSize[1]}
                className={cn("overflow-scroll scroll-auto")}
                style={{ overflow: "scroll" }}
              >
                <div className="flex flex-col w-full h-full scroll-auto">
                  <div>{children}</div> */}
        {/* footer page */}
        {/* <div className="h-[10vh]">
                    <Suspense fallback={<InfluLoading />}>
                      <Footer />
                    </Suspense>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
            </ResizablePanelGroup> */}
        {/* </ResizablePanel>
        </ResizablePanelGroup> */}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ResizeLayout;
