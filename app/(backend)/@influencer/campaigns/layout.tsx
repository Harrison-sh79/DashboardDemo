import React from "react";
import { getCampaignsTabs } from "@/lib/action/action";
import { TabsType } from "@/lib/type/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Link from "next/link";

async function InfluencerCompaignsLayout({
  browse,
  newadd,
  popular,
  top,
}: {
  browse: React.ReactNode;
  newadd: React.ReactNode;
  popular: React.ReactNode;
  top: React.ReactNode;
}) {
  const tabs: TabsType[] = await getCampaignsTabs();
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
              placeholder="Search for campaigns..."
              className="w-[300px]"
            />
          </div>
        </div>
        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.name}>
            {tab.name === "Browse"
              ? browse
              : tab.name === "Top Performing"
              ? top
              : tab.name === "Polular"
              ? popular
              : newadd}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default InfluencerCompaignsLayout;
