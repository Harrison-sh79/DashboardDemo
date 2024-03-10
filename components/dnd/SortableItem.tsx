import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Column from "@/components/backend/compaigns/newadd/Column";
import parse from "html-react-parser";
import { CardType } from "@/lib/type/card";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Item } from "./Item";

export function SortableItem({id, card} : {id: UniqueIdentifier, card: CardType}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
    };

  return (
    <Item id={id} card={card} ref={setNodeRef} style={style} {...attributes} {...listeners} className="touch-none">
      {/* <Card>
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
      </Card> */}
    </Item>
  );
}
