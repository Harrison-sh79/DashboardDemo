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
import NewMail from "./newmail";

function MailNewModal() {
  const router = useRouter();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button variant="vmax_outline" size="icon" className="relative"> */}
          {/* <BellIcon className="h-[1.2rem] w-[1.2rem]" /> */}
          <a>
            <span className="material-icons">mail_outline</span>
          </a>
          {/* </Button> */}
        </DialogTrigger>
        <DialogContent className="xl:max-w-screen-lg lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-h-[100vh] overflow-y-hidden">
          <DialogHeader>
            <DialogTitle>Customer Service Center</DialogTitle>
            <DialogDescription>
              Serves you by providing product and service information and
              resolving product and service problems. You will get our feedback
              soon.
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div className="px-5 pb-10 pt-3">
            <NewMail />
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

export default MailNewModal;
