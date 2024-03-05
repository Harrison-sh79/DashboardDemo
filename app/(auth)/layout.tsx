/*
 * @Author: Harrison Song, harrison.sh@v-max.ca 
 * @Date: 2024-02-24 10:32:46 
 * @Last Modified by: Harrison Song, harrison.sh@v-max.ca
 * @Last Modified time: 2024-02-26 16:41:19
 */

import React, { ReactNode } from "react";
import Logo from "@/components/dashboard/logo";
import { ModeToggle } from "@/components/theme/mode-toggle";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex flex-col min-h-screen min-w-full bg-gray-50 dark:bg-slate-900 max-h-screen">
      <nav
        className="flex basis-full items-center justify-between w-full mx-auto p-4 sm:p-6 md:p-8"
        aria-label="Global"
      >
        <div className="me-5">
          <Logo />
        </div>
        {/* Dark Mode Select Start */}
        <ModeToggle />
        {/* Dark Mode Select End */}
      </nav>
      <main className="flex w-full flex-grow h-full items-center justify-center">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
