/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:23:35
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-09 15:56:12
 */

"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import AppLoading from "./loading";
import React from "react";
import Logo from "@/components/backend/logo";
// import NewMail from "@/components/email/newmail";

// const menus = ["home", "about", "project", "contact"];

export default function RootPage() {
  const router = useRouter();
  return (
    /* Home page , it is can be replace by company main page */
    <main className="flex min-h-screen flex-col items-center justify-between px-8 scroll-smooth">
      <div className="w-full">
        <div className="flex flex-row w-full p-3 justify-between items-center sticky top-0 inset-x-0 z-50 bg-background text-foreground">
          <Logo />
          <div className="flex items-center gap-4">
            <Suspense fallback={<AppLoading />}>
              <ModeToggle />
              <Button
                variant="vmax_outline"
                size="icon"
                onClick={() => router.push("/dashboard")}
              >
                <DashboardIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </Suspense>
          </div>
        </div>

        {/* <div className="w-[60%] m-auto">
          <NewMail />
        </div> */}
      </div>
    </main>
  );
}
