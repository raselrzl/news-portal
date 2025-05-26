import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { JonoprioNews, SorboseshNews } from "./general/homepageArticleList"

export function SorboseshAndJonoprioTab() {
  return (
    <div className="p-4">
    <Tabs defaultValue="sorbosesh" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="sorbosesh">সর্বশেষ</TabsTrigger>
        <TabsTrigger value="jonoprio">জনপ্রিয়</TabsTrigger>
      </TabsList>
      <TabsContent value="sorbosesh">
        <Card>
          <CardContent className="space-y-2">
            <SorboseshNews />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="jonoprio">
        <Card>
          <CardContent className="space-y-2">
            <JonoprioNews />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs></div>
  )
}
