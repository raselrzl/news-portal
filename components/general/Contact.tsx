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
import { OpinionForm } from "./OpinionForm";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <Tabs
      defaultValue="ovijug"
      className="w-auto my-10 p-1"
    >
    {/*   <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="ovijug">অভিযোগ</TabsTrigger>
        <TabsTrigger value="samprotik">যোগাযোগ</TabsTrigger>
      </TabsList> */}
      <TabsContent value="ovijug">
        <Card className="min-h-[400px] rounded-none">
          <CardHeader>
            <OpinionForm />
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="samprotik">
        <Card className="min-h-[400px]">
          <CardHeader>
            <ContactForm />
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
