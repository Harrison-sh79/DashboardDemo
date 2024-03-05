"use client";

import * as React from "react";
import { SliderProps } from "@radix-ui/react-slider";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface MinimumSelectorProps {
  defaultValue: SliderProps["defaultValue"];
}

export function MinimumSelector({ defaultValue }: MinimumSelectorProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <div className="w-[100%]">
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="minimum" className="font-bold">Minimum</Label>
              <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right  font-bold text-sm text-muted-foreground hover:border-border">
                {`$${value}`}
              </span>
            </div>
            <Slider
              id="minimum"
              max={100000}
              defaultValue={value}
              step={1000}
              onValueChange={setValue}
              className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              aria-label="Minimum"
            />
          </div>
        </HoverCardTrigger>
        {/* <HoverCardContent
          align="start"
          className="w-[260px] text-sm"
          side="left"
        >
          Minimum Controls
        </HoverCardContent> */}
      </HoverCard>
    </div>
  );
}

