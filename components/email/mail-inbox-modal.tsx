"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { BellIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MailInbox from "./pages/mail-inbox";
import { Separator } from "@/components/ui/separator";

function MailInboxModal() {
  const router = useRouter();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="vmax_outline" size="icon" className="relative">
            <BellIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="absolute top-0 end-0 bg-red-500 text-white rounded-full text-xs py-0.5 px-1.5 transform -translate-y-1/2 translate-x-1/2">
              9+
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-h-[90vh] overflow-y-hidden">
          <DialogHeader>
            <DialogTitle>Customer Service Center</DialogTitle>
            <DialogDescription>
            Serves you by providing product and service information and resolving product and service problems. You will get our feedback soon.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div>
            <MailInbox />
          </div>
          {/* <Separator className="fixed bottom-16"/>
          <DialogFooter className="fixed bottom-4 right-4 z-50">
            <Button type="submit">Save</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default MailInboxModal;
