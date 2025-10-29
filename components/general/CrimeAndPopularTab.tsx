import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {JonoprioNews, SorboseshNews } from "./homepageArticleList"
import { EconomyNews } from "../NewsCategory/EconomyNews"

export function CrimeAndPopularTab() {
  return (
    <div className="">
    <Tabs defaultValue="crime" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-amber-800">
        <TabsTrigger className=" font-bold" value="crime">অপরাধ</TabsTrigger>
<TabsTrigger className=" font-bold" value="politics">রাজনীতি</TabsTrigger>
<TabsTrigger className=" font-bold" value="economy">অর্থনীতি</TabsTrigger>

      </TabsList>
      <TabsContent value="crime" className="">
        <Card className="rounded-xs">
          <CardContent className="space-y-1 px-1">
            <SorboseshNews />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="politics">
        <Card>
          <CardContent className="space-y-1 px-1">
            <JonoprioNews />
          </CardContent>
        </Card>
      </TabsContent>


       <TabsContent value="economy">
        <Card>
          <CardContent className="space-y-1 px-1">
            <EconomyNews />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs></div>
  )
}
