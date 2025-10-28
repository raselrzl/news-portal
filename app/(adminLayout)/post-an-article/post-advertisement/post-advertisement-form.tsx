"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, XIcon } from "lucide-react";
import { differenceInDays, parseISO } from "date-fns";
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
import { createAnAdvertisement, getAdvertisementPackages } from "@/app/actions";
import Image from "next/image";

const countries = [
  { id: "BANGLADESH", name: "Bangladesh", flag: "/flags/bangladesh.jpg" },
  { id: "UK", name: "UK", flag: "/flags/uk.png" },
  { id: "SWITZERLAND", name: "Switzerland", flag: "/flags/switzerland.jpg" },
  { id: "USA", name: "United States", flag: "/flags/usa.webp" },
  { id: "AUSTRALIA", name: "Australia", flag: "/flags/australia.jpg" },
  { id: "AUSTRIA", name: "Austria", flag: "/flags/australia.jpg" },
  { id: "BELGIUM", name: "Belgium", flag: "/flags/belgium.webp" },
  { id: "BULGARIA", name: "Bulgaria", flag: "/flags/bulgaria.webp" },
  { id: "CROATIA", name: "Croatia", flag: "/flags/croatia.webp" },
  { id: "CYPRUS", name: "Cyprus", flag: "/flags/cyprus.jpg" },
  {
    id: "CZECH_REPUBLIC",
    name: "CzechRepublic",
    flag: "/flags/czech-republic.png",
  },
  { id: "DENMARK", name: "Denmark", flag: "/flags/denmark.jpg" },
  { id: "ESTONIA", name: "Estonia", flag: "/flags/estonia.jpeg" },
  { id: "FINLAND", name: "Finland", flag: "/flags/finland.jpg" },
  { id: "FRANCE", name: "France", flag: "/flags/france.jpg" },
  { id: "GERMANY", name: "Germany", flag: "/flags/germany.jpg" },
  { id: "GREECE", name: "Greece", flag: "/flags/greece.webp" },
  { id: "HUNGARY", name: "Hungary", flag: "/flags/hungary.png" },
  { id: "IRELAND", name: "Ireland", flag: "/flags/ireland.webp" },
  { id: "ITALY", name: "Italy", flag: "/flags/italy.webp" },
  { id: "LATVIA", name: "Latvia", flag: "/flags/latvia.jpg" },
  { id: "LITHUANIA", name: "Lithuania", flag: "/flags/lithuania.jpg" },
  { id: "LUXEMBOURG", name: "Luxembourg", flag: "/flags/luxembourg.webp" },
  { id: "MALTA", name: "Malta", flag: "/flags/malta.jpg" },
  { id: "NETHERLANDS", name: "Netherlands", flag: "/flags/netherlands.webp" },
  { id: "POLAND", name: "Poland", flag: "/flags/poland.jpeg" },
  { id: "PORTUGAL", name: "Portugal", flag: "/flags/portugal.webp" },
  { id: "ROMANIA", name: "Romania", flag: "/flags/romania.png" },
  { id: "SLOVAKIA", name: "Slovakia", flag: "/flags/slovakia.jpg" },
  { id: "SLOVENIA", name: "Slovenia", flag: "/flags/slovenia.jpeg" },
  { id: "SPAIN", name: "Spain", flag: "/flags/spain.svg" },
  { id: "SWEDEN", name: "Sweden", flag: "/flags/swedish.png" },
  { id: "NORWAY", name: "Norway", flag: "/flags/norway.webp" },
];

export function CreateAdvertisementForm() {
  const [pending, setPending] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const [packages, setPackages] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getAdvertisementPackages();
      setPackages(result);
    })();
  }, []);

  const form = useForm({
    defaultValues: {
      companyName: "",
      companyaddress: "",
      supervisedName: "",
      supervisedPhonenumber: "",
      advertisedCategory: "",
      isFeatured: false,
      advertiseStatus: "DRAFT",
      advertiseduration: 365,
      advertiseBanner: "",
      websiteLink: "",
      additionalInfo: "",
      startDate: "",
      endDate: "",
      country: "SWEDEN",

      dailyPrice: 0,
      moms: 0,
      discount: 0,

      advertiseCollectedByName: "",
      advertiseCollectedByEmail: "",
      advertiseCollectedByPhone: "",
      advertiseCollectedByCountry: "",
    },
  });

  const { control, handleSubmit, reset, watch } = form;

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

  const watchStartDate = watch("startDate");
  const watchEndDate = watch("endDate");
  const watchDailyPrice = watch("dailyPrice");
  const watchDiscount = watch("discount");
  const watchMoms = watch("moms");

  const [durationDays, setDurationDays] = useState(0);
  const [priceWithoutDiscount, setPriceWithoutDiscount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [momsAmount, setMomsAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    const dailyPrice = Math.max(0, watchDailyPrice || 0);
    const discount = Math.max(0, watchDiscount || 0);
    const moms = Math.max(0, watchMoms || 0);

    if (watchStartDate && watchEndDate) {
      const start = parseISO(watchStartDate);
      const end = parseISO(watchEndDate);

      const days = Math.max(0, differenceInDays(end, start) + 1);
      setDurationDays(days);

      const totalWithoutDiscount = days * dailyPrice;
      const discountValue = totalWithoutDiscount * (discount / 100);
      const afterDiscount = totalWithoutDiscount - discountValue;
      const momsValue = afterDiscount * (moms / 100);
      const totalFinal = afterDiscount + momsValue;

      setPriceWithoutDiscount(totalWithoutDiscount);
      setDiscountAmount(discountValue);
      setPriceAfterDiscount(afterDiscount);
      setMomsAmount(momsValue);
      setFinalPrice(totalFinal);
    } else {
      setDurationDays(0);
      setPriceWithoutDiscount(0);
      setDiscountAmount(0);
      setPriceAfterDiscount(0);
      setMomsAmount(0);
      setFinalPrice(0);
    }
  }, [watchStartDate, watchEndDate, watchDailyPrice, watchDiscount, watchMoms]);

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="rounded-xs">
            <h3 className="text-lg font-medium uppercase pl-6">
              Ads Company Details
            </h3>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name="isFeatured"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you want to display this advertisement on the front
                        page?
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
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Advertisement Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter company name..."
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="companyaddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter company address..."
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
                      <FormLabel>Supervisor's Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter observer's name..."
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
                      <FormLabel>Supervisor's Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter phone number..."
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={control}
                name="advertiseBanner"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Upload a banner that will be displayed as your
                      advertisement
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={control}
                  name="websiteLink"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Do you want the image to redirect to a specific link
                        when clicked?
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder="nordinternational.com"
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Short Description</FormLabel>

                      <FormControl>
                        <Input
                          placeholder="Short Description..."
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              {" "}
              <FormField
                control={form.control}
                name="advertisedCategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Advertisement Package</FormLabel>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                      {packages.map((pkg) => (
                        <Button
                          className="flex flex-col text-xs h-20 cursor-pointer"
                          key={pkg.id}
                          type="button"
                          variant={
                            field.value === pkg.id ? "default" : "outline"
                          }
                          onClick={() => {
                            field.onChange(pkg.id);
                            form.setValue("dailyPrice", pkg.dailyPrice); // 💥 auto-update dailyPrice
                          }}
                        >
                          <div>
                            <span>{pkg.name}</span>
                            <span className="text-primary p-1 ml-2 rounded bg-gray-800">
                              SEK {pkg.dailyPrice}
                            </span>
                          </div>
                          <span>{pkg.page}</span>
                        </Button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="rounded-xs">
            <CardContent className="space-y-6 pt-6">
              {" "}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} min={today} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="endDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            min={watchStartDate || today}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex gap-1">
                  <FormField
                    control={control}
                    name="dailyPrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Daily Price</FormLabel>
                        <FormControl>
                          <Input
                            className="cursor-not-allowed"
                            readOnly
                            type="number"
                            min={0}
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                Math.max(0, Number(e.target.value))
                              )
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="discount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Discount %</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                Math.max(0, Number(e.target.value))
                              )
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name="moms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Moms %</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={0}
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                Math.max(0, Number(e.target.value))
                              )
                            }
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Live price breakdown */}
                <div className="p-4 border rounded bg-gray-50 space-y-1">
                  <p>
                    Duration: <strong>{durationDays}</strong> day
                    {durationDays !== 1 && "s"}
                  </p>
                  <p>
                    Price without discount:{" "}
                    <strong>{priceWithoutDiscount.toFixed(2)}</strong>
                  </p>
                  <p>
                    Discount amount:{" "}
                    <strong>{discountAmount.toFixed(2)}</strong>
                  </p>
                  <p>
                    Price after discount:{" "}
                    <strong>{priceAfterDiscount.toFixed(2)}</strong>
                  </p>
                  <p>
                    Moms amount: <strong>{momsAmount.toFixed(2)}</strong>
                  </p>
                  <p>
                    <strong>
                      Total Price (after discount + moms):{" "}
                      {finalPrice.toFixed(2)}
                    </strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {" "}
                      <strong>Select Country </strong>
                      {"    "}(This is for advertise placement in the
                      application)
                    </FormLabel>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-1">
                      {countries.map((country) => (
                        <Button
                          className="p-2 text-xs md:text-md"
                          key={country.id}
                          type="button"
                          variant={
                            field.value === country.id ? "default" : "outline"
                          }
                          onClick={() => field.onChange(country.id)}
                        >
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            width={20}
                            height={18}
                            className="rounded-sm border"
                          />
                          {country.name}
                        </Button>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card className="rounded-xs">
            <CardContent className="space-y-6 pt-6">
              <h3 className="text-lg font-medium uppercase">
                Ads Collected By Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={control}
                  name="advertiseCollectedByName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Collector's name..."
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="advertiseCollectedByEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Collector's email..."
                          type="email"
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="advertiseCollectedByPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Collector's phone..."
                          {...field}
                          className="placeholder:text-sm"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="advertiseCollectedByCountry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {countries.map((c) => (
                            <SelectItem key={c.id} value={c.id}>
                              {c.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-xs">
            <CardContent className="space-y-6 pt-6">
              <FormField
                control={control}
                name="advertiseduration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How long You wanna keep this ads on the system?
                    </FormLabel>
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
                            {y} Year
                          </Button>
                        );
                      })}
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="advertiseStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Publish Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DRAFT">DRAFT</SelectItem>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
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
            "Publish ads."
          )}
        </Button>
      </form>
    </Form>
  );
}
