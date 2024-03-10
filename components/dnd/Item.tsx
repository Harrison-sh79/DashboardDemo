import React, { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import parse from "html-react-parser";

export const Item = forwardRef(({ id, card, ...props }: any, ref: any) => {
  return (
    <div {...props} ref={ref}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
          {card.icon && parse(card.icon)}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{card.data}</div>
          <p className="text-xs text-muted-foreground">
          {card.desc}
          </p>
        </CardContent>
      </Card>
    </div>
  );
});

Item.displayName = 'Item';
