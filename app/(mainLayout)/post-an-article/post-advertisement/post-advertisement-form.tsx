"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { UploadDropzone } from "@/components/general/UploadThingReexported";
import { districts } from "@/app/utils/locationList";
import { links } from "@/app/utils/linkList";
const advertisementPackages = [
  { id: "PREMIER_1", name: "প্রিমিয়ার ১ (Premier 1)" },
  { id: "PREMIER_2", name: "প্রিমিয়ার ২ (Premier 2)" },
  { id: "SIZE_1", name: "সাইজ ১ (Size 1)" },
  { id: "SIZE_2", name: "সাইজ ২ (Size 2)" },
  { id: "SUPER_1", name: "সুপার ১ (Super 1)" },
  { id: "SUPER_2", name: "সুপার ২ (Super 2)" },
  { id: "PREMIUM_1", name: "প্রিমিয়াম ১ (Premium 1)" },
  { id: "PREMIUM_2", name: "প্রিমিয়াম ২ (Premium 2)" },
  { id: "STANDARD_1", name: "স্ট্যান্ডার্ড ১ (Standard 1)" },
  { id: "STANDARD_2", name: "স্ট্যান্ডার্ড ২ (Standard 2)" },
  { id: "DELUXE_1", name: "ডিলাক্স ১ (Deluxe 1)" },
  { id: "DELUXE_2", name: "ডিলাক্স ২ (Deluxe 2)" },
  { id: "ULTIMATE_1", name: "আলটিমেট ১ (Ultimate 1)" },
  { id: "ULTIMATE_2", name: "আলটিমেট ২ (Ultimate 2)" },
  { id: "BASIC_1", name: "বেসিক ১ (Basic 1)" },
  { id: "BASIC_2", name: "বেসিক ২ (Basic 2)" },
  { id: "PRO_1", name: "প্রো ১ (Pro 1)" },
  { id: "PRO_2", name: "প্রো ২ (Pro 2)" },
  { id: "ENTERPRISE_1", name: "এন্টারপ্রাইজ ১ (Enterprise 1)" },
  { id: "ENTERPRISE_2", name: "এন্টারপ্রাইজ ২ (Enterprise 2)" },
];

// Schema
const formSchema = z.object({
  companyName: z.string().min(1, "Required"),
  companyaddress: z.string().min(1, "Required"),
  supervisedName: z.string().min(1, "Required"),
  supervisedPhonenumber: z.string().min(1, "Required"),
  advertisedCategory: z.string().min(1, "Required"),
  isFeatured: z.boolean(),
  advertiseStatus: z.enum(["DRAFT", "ACTIVE"]),
  pageToview: z.string().min(1, "Required"),
  advertiseduration: z.number(),
  advertiseBanner: z.string().optional(),
  websiteLink: z.string().optional(),
  pictureinfo: z.string().optional(),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  textAdvertisement: z
    .array(
      z.object({
        text: z.string(),
        speakerInfo: z.string(),
      })
    )
    .optional(),
});

export function CreateAdvertisementForm() {
  const [pending, setPending] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companyaddress: "",
      supervisedName: "",
      supervisedPhonenumber: "",
      advertisedCategory: "",
      isFeatured: false,
      advertiseStatus: "DRAFT",
      pageToview: "",
      advertiseduration: 365,
      advertiseBanner: "",
      websiteLink: "",
      pictureinfo: "",
      textAdvertisement: [],
      startDate: "",
      endDate: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "textAdvertisement",
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Submitted form data:", data);
    toast.success("Form submitted!");
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                আপনার বিজ্ঞাপন এ যা কিছু আছে, সবকিছু এখানে পূরণ করুন।
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <FormField
                control={control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপন কোম্পানির নাম</FormLabel>
                    <FormControl>
                      <Input placeholder="কোম্পানির নাম লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="companyaddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>কোম্পানির ঠিকানা</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="কোম্পানির ঠিকানা লিখুন..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="supervisedName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>পর্যবেক্ষকের নাম</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="পর্যবেক্ষকের নাম লিখুন..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="supervisedPhonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সুপারভাইজারের ফোন নম্বর</FormLabel>
                    <FormControl>
                      <Input placeholder="ফোন নম্বর লিখুন..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* startDate field */}
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপন শুরুর তারিখ</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* endDate field */}
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপন শেষ তারিখ</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Advertisement Info */}
          <Card>
            <CardContent className="space-y-6">
              <FormField
                control={control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      এই বিজ্ঞাপন কি আপনি প্রথম পৃষ্ঠায় দেখতে চান?
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
                name="advertiseStatus"
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="advertisedCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপনের প্যাকেজ নির্বাচন করুন</FormLabel>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {advertisementPackages.map((pkg) => (
                        <label
                          key={pkg.id}
                          className="flex items-center justify-center gap-2 p-2 border rounded-xs cursor-pointer hover:bg-muted hover:text-white transition-all"
                        >
                          <input
                            type="radio"
                            className="hidden peer"
                            checked={field.value === pkg.id}
                            onChange={() => field.onChange(pkg.id)}
                          />
                          <span className="w-4 h-4 md:w-6 md:h-6 rounded-full border-2 transition-all peer-checked:bg-primary peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary mr"></span>
                          <span className="text-xs md:text-sm">{pkg.name}</span>
                        </label>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
  control={form.control}
  name="advertisedCategory"
  render={({ field }) => (
    <FormItem>
      <FormLabel>বিজ্ঞাপনের প্যাকেজ নির্বাচন করুন</FormLabel>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
        {advertisementPackages.map((pkg) => (
          <Button
            key={pkg.id}
            type="button"
            variant={field.value === pkg.id ? "default" : "outline"}
            onClick={() => field.onChange(pkg.id)}
          >
            {pkg.name}
          </Button>
        ))}
      </div>
      <FormMessage />
    </FormItem>
  )}
/> */}

              <FormField
                control={control}
                name="advertiseduration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>স্থিতিকাল</FormLabel>
                    <div className="grid grid-cols-3 gap-1">
                      {[1, 2, 3, 4, 5].map((y) => {
                        const days = y * 365;
                        return (
                          <Button
                            key={days}
                            type="button"
                            variant={
                              field.value === days ? "default" : "outline"
                            }
                            onClick={() => field.onChange(days)}
                          >
                            {y} বছর
                          </Button>
                        );
                      })}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Media Uploads */}
          <Card>
            <CardContent className="space-y-6 pt-6">
              <FormField
                control={control}
                name="advertiseBanner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      একটি ব্যানার আপলোড করুন যা আপনার বিজ্ঞাপন হিসেবে প্রদর্শিত
                      হবে
                    </FormLabel>
                    <FormControl>
                      {field.value ? (
                        <div className="relative w-fit">
                          <img
                            src={field.value}
                            alt="Banner"
                            className="w-32 h-32 object-cover rounded"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute -top-2 -right-2"
                            onClick={() => field.onChange("")}
                          >
                            <XIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <UploadDropzone
                          endpoint="imageUploader"
                          className="border-primary ut-button:bg-primary"
                          onClientUploadComplete={(res) =>
                            field.onChange(res[0].url)
                          }
                          onUploadError={async (err) => {
                            toast.error("Upload failed: " + err.message);
                          }}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="websiteLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      ছবি ক্লিক করলে সেটি নির্দিষ্ট লিঙ্কে নিয়ে যেতে চান
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="https://..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="pictureinfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সংক্ষিপ্ত বর্ণনা</FormLabel>
                    <FormControl>
                      <Input placeholder="সংক্ষিপ্ত বর্ণনা..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Text Comments */}
          <Card>
            <CardHeader>
              <CardTitle>যদি টেক্সট বিজ্ঞাপন হয়, তাহলে এখানে লিখুন।</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map((fieldItem, index) => (
                <div
                  key={fieldItem.id}
                  className="space-y-2 border p-4 rounded"
                >
                  <FormField
                    control={control}
                    name={`textAdvertisement.${index}.text`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>টেক্সট</FormLabel>
                        <FormControl>
                          <Textarea placeholder="টেক্সট..." {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`textAdvertisement.${index}.speakerInfo`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>টেক্সট লিখক</FormLabel>
                        <FormControl>
                          <Input placeholder="নাম..." {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                  >
                    <XIcon className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                onClick={() => append({ text: "", speakerInfo: "" })}
              >
                + আরও লিখুন
              </Button>
            </CardContent>
          </Card>
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2 text-white" />
              প্রকাশ করা হচ্ছে...
            </>
          ) : (
            "বিজ্ঞাপন প্রকাশ করুন"
          )}
        </Button>
      </form>
    </Form>
  );
}
