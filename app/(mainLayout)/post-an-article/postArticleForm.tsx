"use client";
import { Toaster, toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, XIcon } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import NewsDescriptionEditor from "@/components/richTextEditor/newsDescriptionEditor";

interface iAppProps {
  reporterLocation: string;
  reporterBio: string;
  reporterProfilePicture: string;
  reporterPhoneNumber: string;
  reporterFacebookProfileAddress?: string | undefined;
  reporterName?: string | undefined;
}

export function CreateNewsArticleForm({
  reporterName,
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
  const [useEditor, setUseEditor] = useState(true);
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "quotes",
  });
  const [pending, setPending] = useState(false);
  async function onSubmit(data: z.infer<typeof newsArticleSchema>) {
    try {
      setPending(true);
      await createAnArticle(data);
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
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Switch
                    id="toggle-editor"
                    checked={useEditor}
                    onCheckedChange={setUseEditor}
                  />
                  <Label htmlFor="toggle-editor">এডিটর ব্যবহার করতে চান?</Label>
                </div>

                <FormField
                  control={form.control}
                  name="newsDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>সংবাদের বিস্তারিত</FormLabel>
                      <FormControl>
                        {useEditor ? (
                          <NewsDescriptionEditor field={field} />
                        ) : (
                          <Textarea
                            placeholder="উদাহরণ: মঙ্গলবার সকালে ঢাকার শাহবাগ এলাকায়..."
                            className="min-h-[160px] md:min-h-[350px] placeholder:text-xs"
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                আপনার সংবাদে যা কিছু আছে, সবকিছু এখানে পূরণ করুন।
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
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

              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সংবাদটি কতদিন প্রদর্শন করতে চান?</FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-3 gap-1">
                        {[
                          { label: "১ বছর", value: 365 },
                          { label: "২ বছর", value: 730 },
                          { label: "৩ বছর", value: 1095 },
                          { label: "৪ বছর", value: 1460 },
                          { label: "৫ বছর", value: 1825 },
                        ].map(({ label, value }) => (
                          <Button
                            type="button"
                            key={value}
                            variant={
                              field.value === value ? "default" : "outline"
                            }
                            onClick={() => field.onChange(value)}
                          >
                            {label}
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
                          className="ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-primary"
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
                    <FormLabel>ছবির একটি বর্ণনা দিন</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="উদাহরণ: ঘটনাস্থলের দৃশ্য"
                        className="placeholder:text-xs"
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
                        placeholder="উদাহরণ: দৈনিক সময়"
                        className="placeholder:text-xs"
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
              <CardTitle>এই সংবাদে কি কেউ বিশেষ কোনো মন্তব্য করেছেন?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2 border p-4 rounded-md">
                  <FormField
                    control={form.control}
                    name={`quotes.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>মন্তব্য</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="বিশ্ববিদ্যালয়ের শিক্ষা আমাদের ভবিষ্যতের জন্য এক অমূল্য রত্ন।"
                            {...field}
                            className="placeholder:text-xs min-h-[120px]"
                          />
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
                        <FormLabel>মন্তব্যকারী নাম</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="কোরিম মিয়া, প্রধানমন্ত্রী"
                            {...field}
                            className="placeholder:text-xs"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button variant="destructive" onClick={() => remove(index)}>
                    <XIcon />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => append({ text: "", speakerInfo: "" })}
              >
                + আরো যোগ করুন
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>এক নজরে দেখুন আপনার ব্যক্তিগত তথ্য</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="reporterName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>এই সংবাদটির সাংবাদিকের নাম...</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={reporterName}
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
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
                              console.log(
                                "profilePicture uploaded successfully!"
                              );
                            }}
                            onUploadError={() => {
                              console.log(
                                "Something went wrong. Please try again."
                              );
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
            " প্রকাশ করুন"
          )}
        </Button>
      </form>
    </Form>
  );
}
