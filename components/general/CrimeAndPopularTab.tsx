import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JonoprioNews, SorboseshNews } from "./homepageArticleList";
import { EconomyNews } from "../NewsCategory/EconomyNews";

export function CrimeAndPopularTab() {
  return (
    <div className="">
      <Tabs defaultValue="politics" className="w-full border-1 border-gray-950/10">
        <TabsList className="grid w-full grid-cols-2 bg-amber-800">
          <TabsTrigger className=" font-bold" value="politics">
            রাজনীতি
          </TabsTrigger>
          <TabsTrigger className=" font-bold" value="economy">
            অর্থনীতি
          </TabsTrigger>
        </TabsList>
        <TabsContent value="politics">
         
            <CardContent className="space-y-1 px-1">
              <JonoprioNews />
            </CardContent>
        
        </TabsContent>

        <TabsContent value="economy">
        
            <CardContent className="space-y-1 px-1">
              <EconomyNews />
            </CardContent>
         
        </TabsContent>
      </Tabs>
    </div>
  );
}
