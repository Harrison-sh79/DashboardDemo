"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Column from "@/components/backend/compaigns/newadd/Column";
import { getCards } from "@/lib/action/action";
import { CardType } from "@/lib/type/card";
import parse from "html-react-parser";
import {
  closestCenter,
  closestCorners,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "@/components/dnd/SortableItem";
import { Item } from "@/components/dnd/Item";

function DataCard() {
  // const cards = await getCards();
  const [activeId, setActiveId] = React.useState<any>(null);
  // const [items, setItems] = React.useState<CardType[]>(cards);
  const [items, setItems] = React.useState<CardType[]>([
    {
      id: "1",
      dnd: "revenue",
      title: "Total Revenue",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground'><path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' /></svg>",
      data: "$45,231.89",
      desc: "+20.1% from last month",
    },
    {
      id: "2",
      dnd: "subscriptions",
      title: "Subscriptions",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground'><path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' /><circle cx='9' cy='7' r='4' /><path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' /></svg>",
      data: "+2350",
      desc: "+180.1% from last month",
    },
    {
      id: "3",
      dnd: "sales",
      title: "Sales",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground' ><rect width='20' height='14' x='2' y='5' rx='2' /><path d='M2 10h20' /></svg>",
      data: "+12,234",
      desc: "+19% from last month",
    },
    {
      id: "4",
      dnd: "active",
      title: "Active Now",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground' > <path d='M22 12h-4l-3 9L9 3l-3 9H2' /> </svg>",
      data: "+573",
      desc: "+201 since last hour",
    },
  ]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getCardPos = (id: UniqueIdentifier | undefined) =>
    items.findIndex((card: CardType) => card.dnd === id);

  const getCard = (id: UniqueIdentifier | undefined) =>
    items.find((card: CardType) => card.dnd === id);

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    setActiveId(active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id === over?.id || over?.id === undefined) return;

    setItems((items) => {
      const originalPos = getCardPos(active.id);
      const newPos = getCardPos(over?.id);

      return arrayMove(items, originalPos, newPos);
    });

    setActiveId(null);
  }
  return (
    // {/* <!-- Card Section --> */}
    <>
      <div className="max-w-[85rem] px-4 py-3 sm:px-6 lg:px-8 lg:py-3 mx-auto">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            // onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
          >
            <SortableContext
              items={items}
              strategy={horizontalListSortingStrategy}
            >
              {items.map((item) => (
                <SortableItem key={item.id} id={item.dnd} card={item} />
              ))}
            </SortableContext>
            <DragOverlay>
              {activeId ? (
                <Item id={activeId} card={getCard(activeId)} />
              ) : null}
            </DragOverlay>
          </DndContext>
          {/* <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>
      {/* <!-- End Card Section --> */}
    </>
  );
}

export default DataCard;
