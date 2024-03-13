import React from "react";
import { activityType } from "./digital-wallet";
import { Button } from "@/components/ui/button";
import { addDays, format, nextSaturday } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

function ActivityDetail({
  activity,
  setActivity,
}: {
  activity: activityType;
  setActivity: any;
}) {
  const date = new Date();
  return (
    <div className="relative">
      <div className="flex flex-col p-3 pt-0 gap-2">
        <div className="flex flex-row justify-between items-center">
          <span className="max-w-[300px] grow-0 truncate block">
            Payment sent to {activity.to}
          </span>
          <span>Gross amount</span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span>{format(date, "PPpp")}</span>
          <span>Transaction ID: {activity.transid}</span>
          <span>{activity.totalAmount}</span>
        </div>
        <div>
          <span>Payment status:</span>
          <Badge variant="primary" className="ml-3">
            {activity.paymentStatus}
          </Badge>
        </div>
      </div>

      <Separator />
      <Table>
        <TableCaption>Your payment: </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[230px]">Your payment:</TableHead>
            <TableHead className="max-w-[100px] grow-0 shrink-0"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
              <TableCell className="w-[230px] font-medium">
              Purchase total
              </TableCell>
              <TableCell>
              -$12.31 CAD
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              Sales tax
              </TableCell>
              <TableCell>
              $0.00 CAD
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              Shipping amount
              </TableCell>
              <TableCell>
              $0.00 CAD
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              Handling amount
              </TableCell>
              <TableCell>
              $0.00 CAD
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              Insurance amount
              </TableCell>
              <TableCell>
              $0.00 CAD
              </TableCell>
            </TableRow>
            <Separator />
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              Gross amount
              </TableCell>
              <TableCell>
              -$12.31 CAD
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[150px] font-medium">
              PayPal transaction fee
              </TableCell>
              <TableCell>
              $0.00 CAD
              </TableCell>
            </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Net amount</TableCell>
            <TableCell className="text-right">-$12.31 CAD</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default ActivityDetail;
