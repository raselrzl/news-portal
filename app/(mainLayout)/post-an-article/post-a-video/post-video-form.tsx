"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, XIcon } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { createVideoPost } from "@/app/actions";


export function PostVideoForm() {
  const [pending, setPending] = useState(false);
  const form = useForm({
    defaultValues: {
      videoAbout: "",
      videoHeadings: "",
      videoLink: "",
      isFeatured: false,
      vedioStatus: "DRAFT",
      startDate: "",
    },
  });

  const { control, handleSubmit, reset } = form;

   async function onSubmit(data: any) {
     try {
       setPending(true);
       await createVideoPost(data);
       console.log("📝 Submitted data:", data);
       toast.success("News Vedio submitted!");
     } catch (error) {
       if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
         toast.error("Something went wrong (NEXT_REDIRECT). Please try again.");
       }
     } finally {
       setPending(false);
     }
   }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
              Video এ যা কিছু আছে, সবকিছু এখানে পূরণ করুন।
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <FormField
                control={control}
                name="videoAbout"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video about</FormLabel>
                    <FormControl>
                      <Input placeholder="Video about..." {...field} className="placeholder:text-sm"/>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="videoHeadings"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>videoHeadings</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="videoHeadings..."
                        {...field}
                        className="placeholder:text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="videoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>videoLink</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="videoLink..."
                        {...field}
                        className="placeholder:text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

            <div className="grid grid-cols-2 gap-4">
            <FormField
                control={control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-6">
              <FormField
                control={control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      এই Vedio কি আপনি প্রথম পৃষ্ঠায় দেখতে চান?
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="vedioStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>অবস্থা</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="স্ট্যাটাস নির্বাচন করুন" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DRAFT">ড্রাফট</SelectItem>
                        <SelectItem value="ACTIVE">প্রকাশিত</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
              প্রকাশ করা হচ্ছে...
            </>
          ) : (
            "Video প্রকাশ করুন"
          )}
        </Button>
      </form>
    </Form>
  );
}
