/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-26 21:23:35
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-02-29 11:54:16
 */

"use client";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Suspense } from "react";
import AppLoading from "./loading";
// import { useUser } from "@clerk/nextjs";

export default function RootPage() {
  const router = useRouter();
  // const user = useUser();
  return (
    /* Home page , it is can be replace by company main page */
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<AppLoading />}>
        <Button
          variant={"outline"}
          className="border-primary shadow-md"
          onClick={() => router.push("/dashboard")}
        >
          <DashboardIcon className="mr-2 h-4 w-4" /> Go to Dashboard
        </Button>
        <ModeToggle />
      </Suspense>
    </main>
  );
}
