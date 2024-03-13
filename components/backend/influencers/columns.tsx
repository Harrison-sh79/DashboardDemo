"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { labels, priorities, statuses } from "@/components/backend/compaigns/data/data";
import { Task } from "@/lib/type/task";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import Image from "next/image";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    // header: ({ table }) => (
      // <Checkbox
      //   checked={
      //     table.getIsAllPageRowsSelected() ||
      //     (table.getIsSomePageRowsSelected() && "indeterminate")
      //   }
      //   onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //   aria-label="Select all"
      //   className="translate-y-[2px]"
      // />
    // ),
    // cell: ({ row }) => (
    //   <Checkbox
    //     checked={row.getIsSelected()}
    //     onCheckedChange={(value) => row.toggleSelected(!!value)}
    //     aria-label="Select row"
    //     className="translate-y-[2px]"
    //   />
    // ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Image" className="font-bold text-theader text-[14px]"/>
    ),
    cell: ({ row }) => (
      <div>
        <Image src={row.getValue("image")} alt="test" width={80} height={80} />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product name" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);

      return (
        <div className="flex space-x-2">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <span className="text-theader">
            {row.getValue("name")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const status = statuses.find(
      //   (status) => status.value === row.getValue("category")
      // );

      // if (!status) {
      //   return null;
      // }

      return (
        <div className="flex w-[100px] items-center">
          {/* {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          {/* <span>{status.label}</span> */}
          <span className="text-theader">{row.getValue("category")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "commission",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Commission (%)" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const priority = priorities.find(
      //   (priority) => priority.value === row.getValue("priority")
      // );

      // if (!priority) {
      //   return null;
      // }

      return (
        <div className="flex items-center">
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span className="text-theader">{row.getValue("commission")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
  {
    accessorKey: "revenue",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Revenue" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const priority = priorities.find(
      //   (priority) => priority.value === row.getValue("priority")
      // );

      // if (!priority) {
      //   return null;
      // }

      return (
        <div className="flex items-center">
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span className="text-theader">{row.getValue("revenue")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "totalsold",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total sold" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const priority = priorities.find(
      //   (priority) => priority.value === row.getValue("priority")
      // );

      // if (!priority) {
      //   return null;
      // }

      return (
        <div className="flex items-center">
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span className="text-theader">{row.getValue("totalsold")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Platform" className="font-bold text-theader text-[14px]" />
    ),
    cell: ({ row }) => {
      // const priority = priorities.find(
      //   (priority) => priority.value === row.getValue("priority")
      // );

      // if (!priority) {
      //   return null;
      // }

      return (
        <div className="flex items-center">
          {/* {priority.icon && (
            <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )} */}
          <span className="text-theader">{row.getValue("platform")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
];
