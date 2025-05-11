"use client";
import { Toaster, toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
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
import { newsArticleSchema } from "@/app/utils/zodSchemas";
import Image from "next/image";
import { newsCategory } from "@/lib/generated/prisma";
import { createAnArticle } from "@/app/actions";

interface iAppProps {
  reporterLocation: string;
  reporterBio: string;
  reporterProfilePicture: string;
  reporterPhoneNumber: string;
  reporterFacebookProfileAddress?: string | undefined;
}

export function CreateNewsArticleForm({
  reporterLocation,
  reporterBio,
  reporterProfilePicture,
  reporterPhoneNumber,
  reporterFacebookProfileAddress,
}: iAppProps) {
  const {
    register,
    formState: { errors },
  } = useForm();
  const form = useForm<z.infer<typeof newsArticleSchema>>({
    resolver: zodResolver(newsArticleSchema),
    defaultValues: {
      newsHeading: "",
      newsResource: "online",
      newsLocation: "",
      newsCategory: "LATEST",
      newsPicture: "",
      newsPictureHeading: "",
      newsPictureCredit: "",
      newsDetails: "",
      duration: 30,
      isFeatured: false,
      newsArticleStatus: "DRAFT",
      phoneNumber: reporterPhoneNumber,
      location: reporterLocation,
      facebookProfileAddress: reporterFacebookProfileAddress ?? "",
      bio: reporterBio,
      profilePicture: reporterProfilePicture,
      quotes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "quotes",
  });
  const [pending, setPending] = useState(false);
  async function onSubmit(data: z.infer<typeof newsArticleSchema>) {
    try {
      setPending(true);
      await createAnArticle(data)
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <Card>
          <CardHeader>
            <CardTitle>Create News Article</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="newsHeading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Headline</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter headline" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name="newsResource"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source</FormLabel>
                    <FormControl>
                      <div className="flex gap-2">
                        {["online", "ground resource"].map((option) => (
                          <Button
                            type="button"
                            key={option}
                            variant={
                              field.value === option ? "default" : "outline"
                            }
                            onClick={() => field.onChange(option)}
                          >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="newsLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a district" />
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
              name="newsCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>News Categories</FormLabel>
                  <div className="grid grid-cols-2 gap-2">
                    {links.map((link) => {
                      const value = link.href
                        .replace("/", "")
                        .toUpperCase()
                        .replace(/-/g, "_");
                      return (
                        <label
                          key={value}
                          className="flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-muted"
                        >
                          <input
                            type="radio"
                            checked={field.value === value} // Only one category selected
                            onChange={() => field.onChange(value)} // Update single value
                          />
                          {link.label}
                        </label>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsPicture"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>News Image</FormLabel>
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
                          size="icon"
                          className="absolute -top-2 -right-2"
                          onClick={() => field.onChange("")}
                        >
                          <XIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <UploadDropzone
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                          field.onChange(res[0].url);
                          toast.success("Image uploaded!");
                        }}
                        onUploadError={(error) => {
                          console.error(error);
                          toast.error("Upload failed");
                        }}
                      />
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
                  <FormLabel>Image Heading</FormLabel>
                  <FormControl>
                    <Input placeholder="Heading for the image" {...field} />
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
                  <FormLabel>Image Credit</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Photographer name" {...field} />
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
                  <FormLabel>Article Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write the full news article here..."
                      className="min-h-[160px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (Days)</FormLabel>
                  <FormControl>
                    <div className="flex gap-2">
                      {[365, 700, 1000].map((value) => (
                        <Button
                          type="button"
                          key={value}
                          variant={
                            field.value === value ? "default" : "outline"
                          }
                          onClick={() => field.onChange(value)}
                        >
                          {value} দিন
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quotes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-2 border p-4 rounded-md">
                <FormField
                  control={form.control}
                  name={`quotes.${index}.text`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quote Text</FormLabel>
                      <FormControl>
                        <Input placeholder="Quote" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`quotes.${index}.speakerInfo`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Speaker Info</FormLabel>
                      <FormControl>
                        <Input placeholder="Name and position" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button variant="destructive" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              onClick={() => append({ text: "", speakerInfo: "" })}
            >
              + Add Quote
            </Button>
          </CardContent>
        </Card>
        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Featured Product</FormLabel>
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
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="DRAFT">Draft</SelectItem>
                  <SelectItem value="ACTIVE">Published</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="reporterName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>নাম</FormLabel>
              <FormControl>
                <Input placeholder="করিম মিয়া" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ফোন নম্বর</FormLabel>
              <FormControl>
                <Input placeholder="01712000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>অবস্থান</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="একটি অবস্থান নির্বাচন করুন" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>অবস্থান / ঠিকানা</SelectLabel>
                    {districts.map((district) => (
                      <SelectItem value={district.name} key={district.id}>
                        <span>{district.name}</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="facebookProfileAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ফেসবুক প্রোফাইল ঠিকানা</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://www.facebook.com/karim.miah"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio section */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>নিজের সম্পর্কে</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="আমি একজন পরিশ্রমী, সৎ ও স্বপ্নবান মানুষ..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Profile Picture Upload */}
        <FormField
          control={form.control}
          name="profilePicture"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">প্রোফাইল ছবি</FormLabel>
              <FormControl>
                <div>
                  {field.value ? (
                    <div className="relative w-fit">
                      <Image
                        src={field.value}
                        alt="profilePicture"
                        width={100}
                        height={100}
                        className="rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2"
                        onClick={() => field.onChange("")}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        field.onChange(res[0].url);
                        console.log("profilePicture uploaded successfully!");
                      }}
                      onUploadError={() => {
                        console.log("Something went wrong. Please try again.");
                      }}
                      className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-none"
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Submitting..." : "Submit Article"}
        </Button>
      </form>
    </Form>
  );
}
