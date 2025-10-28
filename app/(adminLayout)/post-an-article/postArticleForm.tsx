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
import { createAnArticle } from "@/app/actions";
import { Label } from "@/components/ui/label";
import NewsDescriptionEditor from "@/components/richTextEditor/newsDescriptionEditor";
import Image from "next/image";

interface iAppProps {
  reporterLocation: string;
  reporterBio: string;
  reporterProfilePicture: string;
  reporterPhoneNumber: string;
  reporterFacebookProfileAddress?: string | undefined;
  reporterName?: string | undefined;
  userType: string | null;
}

export function CreateNewsArticleForm({
  reporterName,
  reporterLocation,
  reporterBio,
  reporterProfilePicture,
  reporterPhoneNumber,
  reporterFacebookProfileAddress,
  userType,
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
          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="newsHeading"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>News Headline</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Example: Life disrupted in the capital due to storm and rain"
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
                  <Label htmlFor="toggle-editor">
                    Do you want to use the editor?
                  </Label>
                </div>

                <FormField
                  control={form.control}
                  name="newsDetails"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>News Details</FormLabel>
                      <FormControl>
                        {useEditor ? (
                          <NewsDescriptionEditor field={field} />
                        ) : (
                          <Textarea
                            placeholder="Example: On Tuesday morning in the Norrköping area..."
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
          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              <div className="grid  grid-cols-1 gap-6">
                <FormField
                  control={form.control}
                  name="newsResource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Will you select the source of the news?
                      </FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          {["Online Edition", "Print Edition"].map((option) => (
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
                            <SelectValue placeholder="Select A Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {districts.map((district) => (
                            <SelectItem key={district.id} value={district.name}>
                              <div className="flex items-center gap-2">
                                <img
                                  src={district.flag}
                                  alt={district.name}
                                  className="w-5 h-5 rounded-full object-cover"
                                />
                                <span>{district.name}</span>
                              </div>
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
                        Do you want to feature this news on the front page?
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
              </div>

              <FormField
                control={form.control}
                name="newsCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Which category does your article belong to? Please select
                      one.
                    </FormLabel>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
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
                    <FormLabel>
                      How many days do you want the news to be displayed?
                    </FormLabel>

                    <FormControl>
                      <div className="grid grid-cols-3 gap-1">
                        {[
                          { label: "1 year", value: 365 },
                          { label: "2 years", value: 730 },
                          { label: "3 years", value: 1095 },
                          { label: "4 years", value: 1460 },
                          { label: "5 years", value: 1825 },
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
          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              <CardHeader>
                <CardTitle>Upload a small image for the news?</CardTitle>
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
                    <FormLabel>Provide a description for the image</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example: Scene of the incident"
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
                    <FormLabel>Image Credit</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example: Daily Times"
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

          <Card className="rounded-xs">
            <CardHeader>
              <CardTitle>
                Has anyone made any special comments on this news?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2 border p-4 rounded-md">
                  <FormField
                    control={form.control}
                    name={`quotes.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Comment</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="University education is a priceless jewel for our future."
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
                        <FormLabel>Commenter's Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Prime Minister"
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
                + Add More
              </Button>
            </CardContent>
          </Card>

          <div className="pointer-events-none cursor-not-allowed ">
            <Card className="bg-red-700 border-2 border-red-700">
              <CardHeader>
                <CardTitle>My Profile, Who Posting that News!</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="reporterName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reporter's Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={reporterName}
                          readOnly
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
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="01712000000" {...field} readOnly />
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
                      <FormLabel>Location / Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a Country" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Address / Country</SelectLabel>
                            {districts.map((district) => (
                              <SelectItem
                                value={district.name}
                                key={district.id}
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    src={district.flag}
                                    alt={district.name}
                                    className="w-5 h-5 rounded-full object-cover"
                                  />
                                  <span>{district.name}</span>
                                </div>
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
                      <FormLabel>Facebook Profile or Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.facebook.com/"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>About</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="I am a news reporter from Sweden..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="profilePicture"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="">Profile Picture</FormLabel>
                      <FormControl>
                        <div>
                          {field.value ? (
                            <div className="relative w-fit">
                              <img
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
          {["EDITOR", "SUPERADMIN"].includes(userType ?? "") && (
            <Card className="p-10">
              <FormField
                control={form.control}
                name="newsArticleStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>News Status</FormLabel>

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select News Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DRAFT">DRAFT</SelectItem>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          )}
        </div>

        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={pending}
        >
          {pending ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
              Publishing...
            </>
          ) : (
            "Publish"
          )}
        </Button>
      </form>
    </Form>
  );
}
