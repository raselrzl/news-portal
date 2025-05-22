import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CrimeHEadings,
  GututtoPurnoAlochito,
  SamprotikBisoy,
  ShirShoNewsHeadings,
  SirshoNewsList,
} from "./homepageArticleList";

export function TabsData() {
  return (
    <Tabs
      defaultValue="guruttopurno"
      className="w-auto my-10 p-2"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="guruttopurno">গুরুত্বপূর্ণ ও আলোচিত</TabsTrigger>
        <TabsTrigger value="samprotik">সাম্প্রতিক বিষয়</TabsTrigger>
      </TabsList>
      <TabsContent value="guruttopurno">
        <Card className="min-h-[400px]">
          <CardHeader>
            <GututtoPurnoAlochito />
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="samprotik">
        <Card className="min-h-[400px]">
          <CardHeader>
            <SamprotikBisoy />
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
