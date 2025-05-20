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
import { UploadDropzone } from "@/components/general/UploadThingReexported";
import { createAnAdvertisement } from "@/app/actions";

const advertisementPackages = [
  { id: "PREMIER_1", name: "প্রিমিয়ার ১" },
  { id: "PREMIER_2", name: "প্রিমিয়ার ২" },
  { id: "SIZE_1", name: "সাইজ ১" },
  { id: "SIZE_2", name: "সাইজ ২" },
  { id: "SUPER_1", name: "সুপার ১" },
  { id: "SUPER_2", name: "সুপার ২ " },
  { id: "PREMIUM_1", name: "প্রিমিয়াম ১" },
  { id: "PREMIUM_2", name: "প্রিমিয়াম ২" },
  { id: "STANDARD_1", name: "স্ট্যান্ডার্ড ১" },
  { id: "STANDARD_2", name: "স্ট্যান্ডার্ড ২" },
  { id: "DELUXE_1", name: "ডিলাক্স ১" },
  { id: "DELUXE_2", name: "ডিলাক্স ২" },
  { id: "ULTIMATE_1", name: "আলটিমেট ১" },
  { id: "ULTIMATE_2", name: "আলটিমেট ২" },
  { id: "BASIC_1", name: "বেসিক ১" },
  { id: "BASIC_2", name: "বেসিক ২" },
  { id: "PRO_1", name: "প্রো ১" },
  { id: "PRO_2", name: "প্রো ২" },
  { id: "ENTERPRISE_1", name: "এন্টারপ্রাইজ ১" },
  { id: "ENTERPRISE_2", name: "এন্টারপ্রাইজ ২" },
];

export function CreateAdvertisementForm() {
  const [pending, setPending] = useState(false);
  const form = useForm({
    defaultValues: {
      companyName: "",
      companyaddress: "",
      supervisedName: "",
      supervisedPhonenumber: "",
      advertisedCategory: "",
      isFeatured: false,
      advertiseStatus: "DRAFT",
/*       pageToview: "", */
      advertiseduration: 365,
      advertiseBanner: "",
      websiteLink: "",
      additionalInfo: "",
      startDate: "",
      endDate: "",
    },
  });

  const { control, handleSubmit, reset } = form;

   async function onSubmit(data: any) {
     try {
       setPending(true);
       await createAnAdvertisement(data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
              বিজ্ঞাপন এ যা কিছু আছে, সবকিছু এখানে পূরণ করুন।
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
                      <Input placeholder="কোম্পানির নাম লিখুন..." {...field} className="placeholder:text-sm"/>
                    </FormControl>
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
                        className="placeholder:text-sm"
                      />
                    </FormControl>
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
                        className="placeholder:text-sm"
                      />
                    </FormControl>
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
                      <Input placeholder="ফোন নম্বর লিখুন..." {...field} className="placeholder:text-sm"/>
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
                    <FormLabel>বিজ্ঞাপন শুরুর তারিখ</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপন শেষ তারিখ</FormLabel>
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
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="advertisedCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>বিজ্ঞাপনের প্যাকেজ নির্বাচন করুন</FormLabel>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-1">
                      {advertisementPackages.map((pkg) => (
                        <Button
                        className="p-2 text-xs md:text-md"
                          key={pkg.id}
                          type="button"
                          variant={
                            field.value === pkg.id ? "default" : "outline"
                          }
                          onClick={() => field.onChange(pkg.id)}
                        >
                          {pkg.name}
                        </Button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*    <FormField
                control={control}
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
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

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
                      <Input placeholder="https://..." {...field} className="placeholder:text-sm"/>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>সংক্ষিপ্ত বর্ণনা</FormLabel>
                    <FormControl>
                      <Input placeholder="সংক্ষিপ্ত বর্ণনা..." {...field} className="placeholder:text-sm"/>
                    </FormControl>
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
            "বিজ্ঞাপন প্রকাশ করুন"
          )}
        </Button>
      </form>
    </Form>
  );
}
