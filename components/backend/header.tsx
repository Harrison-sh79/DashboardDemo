/*
 * @Author: Harrison Song, harrison.sh@v-max.ca
 * @Date: 2024-02-27 12:12:57
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2024-03-09 19:09:58
 */
"use client";
import React from "react";
import Logo from "./logo";
import { ModeToggle } from "../theme/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { TopMenusType } from "@/lib/type/menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BellIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch } from "kbar";
import RenderResults from "@/components/kbar/RenderResults";
import { MdManageSearch } from "react-icons/md";
import { useKBar } from "kbar";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import MailInboxModal from "../email/mail-inbox-modal";
function Header({ topmenus }: { topmenus: TopMenusType[] | undefined }) {
  const pathname = usePathname();
  const router = useRouter();
  const { query } = useKBar();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <KBarPortal>
        <KBarPositioner>
          <div
            data-state="open"
            className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 pointer-events-auto"
            data-aria-hidden="true"
            aria-hidden="true"
          ></div>
          {/* <KBarAnimator className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-hidden p-0"> */}
          <KBarAnimator className="mx-auto max-w-md sm:w-3/4 md:w-2/4 fixed inset-x-0 top-1/6 z-50 grid gap-4 border border-primary bg-white shadow-lg duration-200 rounded-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg overflow-hidden p-0">
            <div
              role="dialog"
              className="flex flex-row justify-between items-center p-4 border-b border-primary"
            >
              <CiSearch className="text-primary" size={20} />
              <KBarSearch className="px-3 text-xs w-full outline-none border-none bg-white caret-primary text-primary " />
              <IoMdClose
                className="text-primary cursor-pointer"
                size={18}
                onClick={query.toggle}
              />
            </div>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      <div>
        <Logo />
      </div>
      <div className="flex gap-3">
        {topmenus?.map((menu) => (
          <Button
            key={menu.id}
            variant={
              pathname === menu.url ? "vmax_selected" : "vmax_unselected"
            }
          >
            <Link href={menu.url}>{menu.name}</Link>
            <ChevronDownIcon className="ml-1" />
          </Button>
        ))}
      </div>
      <div className="flex gap-2 flex-row justify-center items-center">
        <div>
          <Button
            variant="vmax_outline"
            size="icon"
            className="w-20 flex flex-row gap-2 justify-center items-center"
            onClick={query.toggle}
          >
            <MdManageSearch className="h-[1.4rem] w-[1.4rem]" />
            <kbd className="pointer-events-none h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[12px] font-medium opacity-100 sm:flex">
              <span>⌘</span>K
            </kbd>
          </Button>
        </div>
        <MailInboxModal />
        <ModeToggle />
        <div className=" h-10 p-[4px] border border-violet-800/10  dark:border-violet-800 rounded-full flex flex-row justify-center items-center gap-1">
          <div>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                variables: {
                  fontSize: "10px",
                },
              }}
            />
          </div>
          <span className="text-[12px] p-1 font-bold text-violet-800 dark:text-white">
            {user.firstName}
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
