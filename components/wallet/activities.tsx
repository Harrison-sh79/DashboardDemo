import React from "react";
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
import { addDays, format, nextSaturday } from "date-fns";
import { activityType } from "./digital-wallet";

function WalletActivity({activies, setActivity}:{activies: activityType[], setActivity:any}) {
  const today = new Date();
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent activities.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="max-w-[150px]">Payments date</TableHead>
            <TableHead className="max-w-[250px]">Payments to</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activies.map((activity) => (
            <TableRow key={activity.id} onClick={()=> {setActivity(activity)}} className="cursor-pointer">
              <TableCell className="font-medium">
                {format(today, "PP")}
              </TableCell>
              <TableCell className="max-w-[250px] grow-0 font-medium truncate block">
                {activity.to}
              </TableCell>
              <TableCell>{activity.paymentStatus}</TableCell>
              <TableCell>{activity.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {activity.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </div>
  );
}

export default WalletActivity;
