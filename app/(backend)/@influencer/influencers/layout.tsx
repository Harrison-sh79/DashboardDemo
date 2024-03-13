import React from "react";
import { getCampaignsTabs, getInfluencersTabs } from "@/lib/action/action";
import { TabsType } from "@/lib/type/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from "next/link";

async function InfluencersLayout({
  all,
  verified,
}: {
  all: React.ReactNode;
  verified: React.ReactNode;
}) {
  const tabs: TabsType[] = await getInfluencersTabs();
  return (
    <div className="max-w-[85rem] mx-auto my-3 px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue={tabs[0].name} className="w-full pt-5">
        <div className="flex flex-row justify-between items-center">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.name}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <div>
            <Input
              type="search"
              placeholder="Search Influencer Handle"
              className="w-[300px]"
            />
          </div>
        </div>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.name}>
            {tab.name === "All Influencers"
              ? all
              : verified}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default InfluencersLayout;
