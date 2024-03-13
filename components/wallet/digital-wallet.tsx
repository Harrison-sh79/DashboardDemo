"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
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
import { Separator } from "@/components/ui/separator";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import WalletActivity from "./activities";
import ActivityDetail from "./activity-defail";
import { IoMdArrowRoundBack } from "react-icons/io";

export type activityType = {
  id: number;
  date: string;
  to: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
  transid: string;
};

const activies = [
  {
    id: 1,
    date: "INV001",
    to: " Company #1",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    transid: "8CY2350765748312F",
  },
  {
    id: 2,
    date: "INV002",
    to: "Company #2",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    transid: "8CY2350765748312F",
  },
  {
    id: 3,
    date: "INV003",
    to: "Company #3",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    transid: "8CY2350765748312F",
  },
  {
    id: 4,
    date: "INV004",
    to: "Company #4",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    transid: "8CY2350765748312F",
  },
  {
    id: 5,
    date: "INV005",
    to: "Company #5",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    transid: "8CY2350765748312F",
  },
  {
    id: 6,
    date: "INV006",
    to: "Company #6",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    transid: "8CY2350765748312F",
  },
  {
    id: 7,
    date: "INV007",
    to: "Company #7",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    transid: "8CY2350765748312F",
  },
];

function DigitalWallet() {
  const [activity, setActivity] = React.useState<activityType>();
  const router = useRouter();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="vmax_outline"
            size="icon"
            className="flex flex-row gap-2 justify-center items-center"
          >
            <AiOutlineMoneyCollect className="h-[1.4rem] w-[1.4rem]" />
            <span className="sr-only">Digital wallet</span>
          </Button>
        </DialogTrigger>

        <DialogContent className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm max-h-[90vh] overflow-y-hidden">
          <DialogHeader>
            <DialogTitle>
              {activity ? "Transaction details" : "Recent Activity"}
            </DialogTitle>
            <DialogDescription>
              {activity ? (
                <div className="flex flex-row gap-2 justify-start items-center cursor-pointer" onClick={() => setActivity(undefined)}>
                  <IoMdArrowRoundBack />
                  <span>back to activities</span>
                </  div>
              ) : (
                "Paypal Activity"
              )}
            </DialogDescription>
          </DialogHeader>
          <Separator />
          <div>
            {!activity && (
              <WalletActivity activies={activies} setActivity={setActivity} />
            )}
            {activity && (
              <ActivityDetail activity={activity} setActivity={setActivity} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DigitalWallet;
