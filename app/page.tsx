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
import { FiArrowUpRight } from "react-icons/fi";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
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
              {/* <Button
                variant="vmax_outline"
                size="icon"
                onClick={() => router.push("/dashboard")}
              >
                <DashboardIcon className="h-[1.2rem] w-[1.2rem]" />
              </Button> */}
              <Button
                variant="vmax_selected"
                onClick={() => router.push("/dashboard")}
              >
                Log in
              </Button>
              <Button
                variant="default"
                onClick={() => router.push("/dashboard")}
              >
                <FiArrowUpRight className="h-[1.2rem] w-[1.2rem]" />
                Sign up
              </Button>
            </Suspense>
          </div>
        </div>
        <Separator />
        {/* <div className="w-[60%] m-auto">
          <NewMail />
        </div> */}
        <div>
          <div className="w-[2px] h-full mr-6 bg-gradient-to-t from-10% from-[#4C1D95] via-[#FF87EB] via-30%  to-[#A78BFA] to-90% "></div>
          <div className="grid grid-cols-2 p-10 mt-5">
            <div className="col-span-1 flex flex-row justify-center items-start gap-5 ">
              <div className="flex flex-col justify-center items-start gap-5 p-5">
                <p className="font-extrabold text-[48px]">
                  for Creators and Brands.
                </p>
                <p className="font-semibold text-[24px]">
                  The all-in-one platform to scale influencer and affiliate
                  marketing campaigns.
                </p>
                <Button
                  variant="default"
                  onClick={() => router.push("/dashboard")}
                >
                  <span className="text-sm">Join Our Platform Now</span>
                </Button>
              </div>
            </div>
            <div className="col-span-1">
              <Image
                src={"/images/Group 161.png"}
                alt=""
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Image
              src={"/images/Frame 69.png"}
              alt=""
              height={78}
              width={693}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
