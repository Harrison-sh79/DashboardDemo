"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { CiYoutube, CiFacebook, CiInstagram } from "react-icons/ci";
import { PiGiftBold, PiTiktokLogoLight } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";
import { DashboardIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/backend/compaigns/data-table";
import { columns } from "@/components/backend/compaigns/columns";
import { Task } from "@/lib/type/task";

export function Content({ tasks }: { tasks: Task[] }) {
  return (
    <Tabs defaultValue="view">
      <div className="w-full mt-10 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center justify-start p-2">
          <div className="w-full text-nowrap text-foreground font-bold">
            Top Performing Campaigns
          </div>
        </div>
        <div className="flex justify-center items-center h-8 gap-2 p-1 rounded-lg">
          <TabsList className="gap-2">
            <TabsTrigger value="view" className="p-1">
              <DashboardIcon className="w-3 h-3" />
            </TabsTrigger>
            <TabsTrigger value="list" className="p-1">
              {" "}
              <ListBulletIcon className="w-3 h-3" />
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="view">
        <div className="grid grid-cols-5 gap-5">
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
              <CardHeader>
                <CardTitle className="flex flex-row justify-center items-center">
                  <Image
                    src={"/images/Banner 03.webp"}
                    alt="demo"
                    width={150}
                    height={150}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 justify-center">
                <div className="flex flex-row justify-center items-center gap-7">
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
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
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
          {/* card section start */}
          <div className="col-span-1 flex flex-row justify-between items-center gap-0">
            <Card className="w-full flex flex-col items-center border-none shadow-none">
              <CardHeader>
                <CardTitle className="flex flex-row justify-center items-center">
                  <Image
                    src={"/images/Banner 03.webp"}
                    alt="demo"
                    width={150}
                    height={150}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-2 justify-center">
                <div className="flex flex-row justify-center items-center gap-7">
                  <div className="flex flex-col justify-center gap-1">
                    <div>Product name</div>
                    <div className="text-sm flex items-center">
                      You earn{" "}
                      <span className="text-lg font-bold mx-2">$54</span>{" "}
                      <div className="flex gap-2">
                        <Badge variant="primary">30%</Badge>
                      </div>
                    </div>
                    <Separator className="mt-1" />
                    <div className="text-sm flex justify-between items-center text-gray-400 gap-2">
                      <div className="flex gap-2">
                        <CiYoutube />
                        <CiFacebook />
                        <CiInstagram />
                        <PiTiktokLogoLight />
                      </div>
                      <Badge variant="secondary"><PiGiftBold  className="mr-1 text-[16px]"/>Gifted</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* card section end */}
        </div>
      </TabsContent>
      <TabsContent value="list">
        <div>
          <DataTable data={tasks} columns={columns} />
        </div>
      </TabsContent>
    </Tabs>
  );
}
