import React from "react";
import { getCategories, getTasks } from "@/lib/action/action";
import { Content } from "@/components/backend/influencers/content";
import Toogles from "@/components/backend/compaigns/toogles";
import { FaSearch } from "react-icons/fa";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SliderRange } from "@/components/slider/slider-range";

async function AllInfluencersPage() {
  const tasks = await getTasks();
  const categories = await getCategories();
  return (
    <div>
      <div className="border border-primary rounded-xl p-4 w-full mt-10">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
                Platform
              </td>
              <td className="p-5 flex gap-10 px-16" width={"100%"}>
                <div className="flex gap-5">
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiYoutube size={18} strokeWidth={1} />
                    <span className="font-bold">Youtube</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiFacebook size={18} strokeWidth={1} />
                    <span className="font-bold">Facebook</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiInstagram size={18} strokeWidth={1} />
                    <span className="font-bold">Instagram</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <PiTiktokLogoLight size={18} strokeWidth={1} />
                    <span className="font-bold">TikTok</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width="10%">
                Niche
              </td>
              <td className="p-5 flex gap-3 flex-wrap overflow-auto px-14">
                <Toogles categories={categories} />
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
                Influencer Demographic
              </td>
              <td className="p-5 grid grid-flow-row grid-cols-2 gap-16 px-16">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Any Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Country</SelectLabel>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Any Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">male</SelectItem>
                        <SelectItem value="non-Binary">Non-Binary</SelectItem>
                        <SelectItem value="any">Any Gender</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Any Age" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Age</SelectLabel>
                        <SelectItem value="18-24">18-24 years old</SelectItem>
                        <SelectItem value="25-34">25-34 years old</SelectItem>
                        <SelectItem value="35+">35+ years old</SelectItem>
                        <SelectItem value="any">Any Age</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
              Follower Count
              </td>
              <td className="p-5 h-full grid grid-flow-row mt-2 w-[60%] px-16">
                {/* <div className="flex flex-row justify-start items-center h-full"> */}
                  <SliderRange min={0} max={100} step={1} minStepsBetweenThumbs={1}/>
                {/* </div> */}
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
              Follower Demographic
              </td>
              <td className="p-5 grid grid-flow-row grid-cols-2 gap-16 px-16">
                <div className="flex flex-row gap-3 justify-start items-center">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Mostly Female" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">male</SelectItem>
                        <SelectItem value="non-Binary">Non-Binary</SelectItem>
                        <SelectItem value="any">Any Gender</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Mostly 18-24 years old" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Age</SelectLabel>
                        <SelectItem value="18-24">18-24 years old</SelectItem>
                        <SelectItem value="25-34">25-34 years old</SelectItem>
                        <SelectItem value="35+">35+ years old</SelectItem>
                        <SelectItem value="any">Any Age</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
              Engagement
              </td>
              <td className="p-5 h-full grid grid-flow-row mt-2 w-[60%] px-16">
                {/* <div className="flex flex-row justify-start items-center h-full"> */}
                  <SliderRange min={0} max={100} step={1} minStepsBetweenThumbs={1}/>
                {/* </div> */}
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="text-foreground font-bold p-5" width={"10%"}>
              Sales 
              </td>
              <td className="p-5 h-full grid grid-flow-row mt-2 w-[60%] px-16">
                {/* <div className="flex flex-row justify-start items-center h-full"> */}
                  <SliderRange min={0} max={100} step={1} minStepsBetweenThumbs={1}/>
                {/* </div> */}
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="p-3" width={"10%"}></td>
              <td className="pt-3 flex gap-5 justify-center items-center" width={"100%"}>
                <Button className="font-bold">Clear</Button>
                <Button className="font-bold gap-2"><FaSearch stroke="2"/><span>Search</span></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Content tasks={tasks} />
      </div>
    </div>
  );
}

export default AllInfluencersPage;
