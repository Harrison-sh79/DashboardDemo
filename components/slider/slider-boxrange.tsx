"use client";

import colors from "tailwindcss/colors";
import * as SliderPrimitive from "@radix-ui/react-slider";
import React, { ChangeEvent, FocusEvent } from "react";

import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  minStepsBetweenThumbs: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
  unit?: string;
  data?: number[];
};

export const SliderBoxRange = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      value,
      onValueChange,
      unit,
      data,
      ...props
    }: SliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);
    const [minimum, setMinimum] = React.useState(String(localValues[0]));
    const [maximum, setMaximum] = React.useState(String(localValues[1]));

    React.useEffect(() => {
      // Update localValues when the external value prop changes
      setLocalValues(Array.isArray(value) ? value : [min, max]);
    }, [min, max, value]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      setMinimum(String(newValues[0]));
      setMaximum(String(newValues[1]));
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMinimum(event.target.value);
      if (
        event.target.value !== "" &&
        Number(event.target.value) >= 0 &&
        Number(event.target.value) < localValues[1]
      ) {
        setMinimum(event.target.value);
        setLocalValues([
          Math.floor(Number(event.target.value)),
          localValues[1],
        ]);
      }
    };
    const handleMinBlue = (event: FocusEvent<HTMLInputElement>) => {
      if (
        event.target.value === "" ||
        !(Number(event.target.value) >= 0) ||
        Number(event.target.value) >= localValues[0]
      ) {
        setMinimum(String(localValues[0]));
      }
    };

    const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
      setMaximum(event.target.value);
      if (
        event.target.value !== "" &&
        Number(event.target.value) >= 0 &&
        Number(event.target.value) > localValues[0]
      ) {
        setMaximum(event.target.value);
        setLocalValues([
          localValues[0],
          Math.floor(Number(event.target.value)),
        ]);
      }
    };
    const handleMaxBlue = (event: FocusEvent<HTMLInputElement>) => {
      if (
        event.target.value === "" ||
        !(Number(event.target.value) >= 0) ||
        Number(event.target.value) >= localValues[1]
      ) {
        setMaximum(String(localValues[1]));
      }
    };

    return (
      <div className="flex flex-col">
        <ul className="relative flex flex-row justify-around items-end gap-[1px] h-28">
          {data?.map((item, index) => (
            <li
              key={index}
              className={cn(
                "w-full bg-primary rounded-t-sm",
                index + 0.2 <
                  ((Number(minimum) - min) / (max - min)) * data.length &&
                  "bg-primary/20",
                index + 0.8 >
                  (1 - (max - Number(maximum)) / (max - min)) * data.length &&
                  "bg-primary/20"
              )}
              style={{ height: `${Math.floor(item)}%` }}
            >
              <span className="hidden">{item}</span>
            </li>
          ))}
        </ul>
        <SliderPrimitive.Root
          ref={ref as React.RefObject<HTMLDivElement>}
          min={min}
          max={max}
          step={step}
          value={localValues}
          onValueChange={handleValueChange}
          className={cn(
            "relative flex w-full touch-none select-none mb-6 items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-[1px] w-full grow overflow-hidden rounded-full bg-primary/20">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          {localValues.map((value, index) => (
            <React.Fragment key={index}>
              <div
                className="absolute text-center"
                style={{
                  left: `calc(${((value - min) / (max - min)) * 100}% + 0px)`,
                  top: `10px`,
                }}
              >
                <span className="text-sm hidden">
                  {formatLabel ? formatLabel(value) : value}
                </span>
              </div>
              <SliderPrimitive.Thumb className="block h-6 w-6 rounded-full border border-slider bg-white shadow-lg transition-colors disabled:pointer-events-none disabled:opacity-50 hover:ring-4 hover:ring-violet-500" />
            </React.Fragment>
          ))}
        </SliderPrimitive.Root>
        <div className="flex flex-row justify-between items-center gap-5">
          <div className="border border-primary py-[1px] px-5 rounded-lg w-full">
            <span className="text-sm text-muted-foreground p-0 m-0">Minimum</span>
            <div className="flex flex-row justify-start items-center p-0 m-0 space-x-1">
              <span
                className={cn(
                  "text-lg",
                  minimum === "" && "text-muted-foreground"
                )}
              >
                {unit && unit}
              </span>
              <Input
                type="text"
                autoComplete="off"
                className="p-0 rounded-md text-lg border-none ring-0 shadow-none focus-visible:ring-0"
                value={minimum}
                onChange={handleMinChange}
                onBlur={handleMinBlue}
              />
            </div>
          </div>
          <div className="h-[1px] w-8 bg-primary"></div>
          <div className="border border-primary py-[1px] px-5 rounded-lg w-full">
            <span className="text-sm text-muted-foreground p-0 m-0">Maximum</span>
            <div className="flex flex-row justify-start items-center p-0 m-0 space-x-1">
              <span
                className={cn(
                  "text-lg",
                  maximum === "" && "text-muted-foreground"
                )}
              >
                {unit && unit}
              </span>
              <Input
                type="text"
                autoComplete="off"
                className="p-0 rounded-md text-lg border-none ring-0 shadow-none focus-visible:ring-0"
                value={maximum}
                onChange={handleMaxChange}
                onBlur={handleMaxBlue}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

SliderBoxRange.displayName = SliderPrimitive.Root.displayName;
