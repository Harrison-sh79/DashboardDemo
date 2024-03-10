import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TextCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    //   jump: true,
      playOnInit: true,
    })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      //   onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
      orientation="vertical"
      
      opts={{
        align: "start",
        loop: true
      }}
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-4xl font-semibold">First Item</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-4xl font-semibold">Second Item</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-4xl font-semibold">Third Item</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card className="border-none">
              <CardContent className="flex items-center justify-center p-6">
                <span className="text-4xl font-semibold">Fourth Item</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
