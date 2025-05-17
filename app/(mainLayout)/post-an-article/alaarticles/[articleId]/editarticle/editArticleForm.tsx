"use client";
import { Toaster, toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/components/general/UploadThingReexported";
import { Textarea } from "@/components/ui/textarea";
import { districts } from "@/app/utils/locationList";
import { links } from "@/app/utils/linkList";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { prisma } from "@/app/utils/db";
import { notFound } from "next/navigation";
import { newsCategory } from "@/lib/generated/prisma";
import { updateNewsArticle } from "@/app/actions";

interface iAppProps {
  article: {
    id: string;
    isFeatured: boolean;
    newsCategory: string;
    newsDetails: string;
    newsHeading: string;
    newsPicture: string;
    quotes: {
      speakerInfo: string;
      text: string;
    }[];
    newsResource: string;
    newsPictureHeading: string;
    newsPictureCredit: string;
    newsLocation: string | null;
    newsArticleStatus: string;
  };
}

export function EditNewsArticleForm({ article }: iAppProps) {
  const {
    register,
    formState: { errors },
  } = useForm();
  
  const form = useForm({
    defaultValues: {
      newsHeading: article.newsHeading,
      newsResource: article.newsResource,
      newsLocation: article.newsLocation ?? "",
      newsCategory: article.newsCategory as newsCategory,
      newsPicture: article.newsPicture,
      newsPictureHeading: article.newsPictureHeading,
      newsPictureCredit: article.newsPictureCredit,
      newsDetails: article.newsDetails,
      isFeatured: article.isFeatured ?? false,
      newsArticleStatus: article.newsArticleStatus as "EXPIRED" | "ACTIVE" | "DRAFT",
      quotes: article.quotes?.map((quote) => ({
        text: quote.text,
        speakerInfo: quote.speakerInfo,
      })) ?? [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "quotes",
  });

  const [pending, setPending] = useState(false);

  async function onSubmit(data: any) {
    try {
      setPending(true);
      await updateNewsArticle(data, article.id);
      console.log("📝 Submitted data:", data);
      toast.success("News article submitted!");
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="newsHeading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সংবাদের শিরোনাম</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="উদাহরণ: রাজধানীতে ঝড়বৃষ্টিতে জনজীবন বিপর্যস্ত"
                        {...field}
                        className="placeholder:text-xs"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সংবাদের বিস্তারিত</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="উদাহরণ: মঙ্গলবার সকালে ঢাকার শাহবাগ এলাকায়..."
                        className="min-h-[160px] md:min-h-[350px] placeholder:text-xs"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                আপনার সংবাদে যা কিছু আছে, সবকিছু এখানে পূরণ করুন।
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="newsResource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>সংবাদের উৎস নির্বাচন করবেন?</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          {["অনলাইন সংস্করণ", "প্রিন্ট সংস্করণ"].map(
                            (option) => (
                              <Button
                                type="button"
                                key={option}
                                variant={
                                  field.value === option ? "default" : "outline"
                                }
                                onClick={() => field.onChange(option)}
                              >
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </Button>
                            )
                          )}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newsLocation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>সংবাদের স্থান</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="কোন জেলা নির্বাচন করবেন?" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district.id} value={district.name}>
                              {district.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isFeatured"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        এই সংবাদটি কি আপনি প্রথম পৃষ্ঠায় দেখতে চান?
                      </FormLabel>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="newsArticleStatus"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>সংবাদ স্ট্যাটাস</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="সংবাদ স্ট্যাটাস নির্বাচন করুন" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="DRAFT">ড্রাফট</SelectItem>
                          <SelectItem value="ACTIVE">প্রকাশিত</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="newsCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      আপনার আর্টিকেলটি নিচের কোন ক্যাটাগরির, একটি নির্বাচন করুন?
                    </FormLabel>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {links.map((link) => {
                        const value = link.href
                          .replace("/", "")
                          .toUpperCase()
                          .replace(/-/g, "_");

                        return (
                          <label
                            key={value}
                            className="flex items-center justify-center gap-2 p-2 border rounded-xs cursor-pointer hover:bg-muted hover:text-white transition-all"
                          >
                            {/* Hidden Radio Input */}
                            <input
                              type="radio"
                              className="hidden peer"
                              checked={field.value === value}
                              onChange={() => field.onChange(value)}
                            />
                            <span
                              className=" w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all 
            peer-checked:bg-primary peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary "
                            ></span>

                            <span className="text-xs md:text-sm">
                              {link.label}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-6">
              <CardHeader>
                <CardTitle>সংবাদের একটি ছোট ছবি আপলোড করুন?</CardTitle>
              </CardHeader>
              <FormField
                control={form.control}
                name="newsPicture"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {field.value ? (
                        <div className="relative w-fit">
                          <img
                            src={field.value}
                            alt="News"
                            className="w-32 h-32 object-cover rounded"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            className="absolute top-0 right-0 text-white"
                            onClick={() => field.onChange("")}
                          >
                            X
                          </Button>
                        </div>
                      ) : (
                        <UploadDropzone onChange={field.onChange} endpoint="imageUploader"/>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsPictureHeading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ছবির শিরোনাম</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ছবির শিরোনাম"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newsPictureCredit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ছবির কৃতিত্ব</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ছবির কৃতিত্ব (যদি থাকে)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-5">
          <Button variant="destructive" type="button">
            বাতিল
          </Button>
          <Button type="submit" disabled={pending}>
            {pending ? "আপলোড হচ্ছে..." : "আপডেট"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
