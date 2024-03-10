"use client";

import * as React from "react";
import { MoonIcon, SunIcon,  } from "@radix-ui/react-icons";
import { RiComputerLine } from "react-icons/ri";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const { toast } = useToast();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="vmax_outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            toast({
              title: "Theme Changes",
              description: (
                <div className="flex flex-row justify-center items-center gap-2">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span>Light theme applied</span>
                </div>
              ),
              // action: (
              //   // <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              //   <></>
              // ),
            });
            setTheme("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            toast({
              title: "Theme Changes",
              description:(
                <div className="flex flex-row justify-center items-center gap-2">
                  <MoonIcon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span>Dark theme applied</span>
                </div>
              ),
              // action: (
              //   // <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              //   <></>
              // ),
            });
            setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            toast({
              title: "Theme Changes",
              description: (
                <div className="flex flex-row justify-center items-center gap-2">
                  <RiComputerLine className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                  <span>System theme applied</span>
                </div>
              ),
              // action: (
              //   // <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              //   <></>
              // ),
            });
            setTheme("system");
          }}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
