import React from "react";
import { getCategories, getTasks } from "@/lib/action/action";
import { Content } from "@/components/backend/compaigns/content";
import Toogles from "@/components/backend/compaigns/toogles";
import { MinimumSelector } from "@/components/backend/compaigns/minimum-selector";
import { MaximumSelector } from "@/components/backend/compaigns/maximum-selector";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";

async function VerifiedInfluencersPage() {
  const tasks = await getTasks();
  const categories = await getCategories();
  return (
    <div>
      <div className="border border-primary rounded-xl p-4 w-full mt-10">
        <table className="w-full">
          <tbody>
            <tr>
              <td
                className="text-foreground font-bold p-5"
                width="10%"
              >
                Category
              </td>
              <td className="p-5 flex gap-3 flex-wrap overflow-auto px-14">
                <Toogles categories={categories} />
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td
                className="text-foreground font-bold p-5"
                width={"10%"}
              >
                Commission
              </td>
              <td className="p-5 grid grid-flow-row grid-cols-2 gap-16 px-16">
                <div>
                  <MinimumSelector defaultValue={[1000]} />
                </div>
                <div>
                  <MaximumSelector defaultValue={[10000]} />
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td
                className="text-foreground font-bold p-5"
                width={"10%"}
              >
                Revenue
              </td>
              <td className="p-5 grid grid-flow-row grid-cols-2 gap-16 px-16">
                <div>
                  <MinimumSelector defaultValue={[1000]} />
                </div>
                <div>
                  <MaximumSelector defaultValue={[10000]} />
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td
                className="text-foreground font-bold p-5"
                width={"10%"}
              >
                Platform
              </td>
              <td className="p-5 flex gap-10 px-16" width={"100%"}>
                <div className="flex gap-5">
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiYoutube size={18} strokeWidth={1}/>
                    <span className="font-bold">Youtube</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiFacebook size={18} strokeWidth={1}/>
                    <span className="font-bold">Facebook</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <CiInstagram size={18} strokeWidth={1}/>
                    <span className="font-bold">Instagram</span>
                  </div>
                  <div className="flex justify-center items-center gap-3 text-button-selectforeground">
                    <PiTiktokLogoLight size={18} strokeWidth={1}/>
                    <span className="font-bold">TikTok</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="w-full border-b-[1px]"></tr>
            <tr>
              <td className="p-3" width={"10%"}></td>
              <td className="pt-3 flex gap-5 justify-end" width={"100%"}>
                <Button className="font-bold">Reset</Button>
                <Button className="font-bold">Confirm</Button>
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

export default VerifiedInfluencersPage;
