"use client";
import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CiYoutube, CiFacebook, CiInstagram } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import { PiGiftBold } from "react-icons/pi";
import { Badge } from "@/components/ui/badge";


function InfluencerCompaignsBrowsePage() {
  return (
    <div>
      <div className="w-full mt-10 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-start p-2">
          <div className="w-full text-nowrap text-black dark:text-white font-bold">
            Top performing
          </div>
          <Select>
            <SelectTrigger className="border-none shadow-none ring-0 focus:ring-none focus:ring-0">
              <SelectValue placeholder="last month" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup defaultValue={"lastmonth"}>
                <SelectItem value="lastmonth">last month</SelectItem>
                <SelectItem value="lastyear">last yearh</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <span>View All</span>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* card section start */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 01.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">1</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section end */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 02.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">2</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section start */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 03.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">3</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section end */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 04.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">4</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section start */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 01.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">5</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section end */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 02.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">6</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section start */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 03.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">7</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
        {/* card section end */}
        <div className="col-span-1 flex flex-row justify-between items-center gap-0">
          <Card className="w-full flex flex-row items-center border-none shadow-none">
            <CardHeader>
              <CardTitle className="flex flex-row justify-center items-center">
                <Image
                  src={"/images/B Box 04.webp"}
                  alt="demo"
                  width={150}
                  height={150}
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-2 justify-center">
              <div className="flex flex-row justify-center items-center gap-7">
                <div className="text-3xl font-bold">8</div>
                <div className="flex flex-col justify-center gap-3">
                  <div>Product name</div>
                  <div className="text-sm flex items-center">
                    You earn <span className="text-lg font-bold mx-2">$54</span>{" "}
                    <div className="flex gap-2">
                      <Badge variant="primary">30% commission</Badge>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                  <div className="text-sm flex items-center text-gray-400 gap-2">
                    $150 · 15.2K sold ·{" "}
                    <div className="flex gap-2">
                      <CiYoutube />
                      <CiFacebook />
                      <CiInstagram />
                      <PiTiktokLogoLight />
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mt-5" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default InfluencerCompaignsBrowsePage;
