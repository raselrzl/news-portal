"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { submitAdvertiseRequest } from "@/app/actions";
import { Loader2 } from "lucide-react";
import { useState } from "react";
export default function AdvertiseForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      companyWebsite: "",
      phoneNumber: "",
      message: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control, reset } = form;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
  
      await submitAdvertiseRequest(formData);
  
      toast.success("আপনার বার্তা পাঠানো হয়েছে।");
      reset();
    } catch (error: any) {
      console.error("Submission failed:", error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-center">বিজ্ঞাপন সংক্রান্ত যোগাযোগ</h1>
      <p className="text-md mb-10 text-center">বিজ্ঞাপন দিতে আগ্রহী হলে নিচের ফর্মটি পূরণ করুন।</p>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="space-y-4 pt-6">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>আপনার নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="নাম লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ই-মেইল</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রতিষ্ঠানের নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="প্রতিষ্ঠানের নাম লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>প্রতিষ্ঠানের ওয়েবসাইট</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ফোন নম্বর</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="ফোন নম্বর লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বার্তা</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="আপনার বার্তা লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    পাঠানো হচ্ছে...
                  </>
                ) : (
                  "পাঠান"
                )}
              </Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
