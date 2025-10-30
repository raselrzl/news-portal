"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { createPublicSourceNews } from "@/app/actions";

// ✅ Zod schema
const publicSourceNewsSchema = z.object({
  headings: z.string().min(3, "Headline is required"),
  sourceIdName: z.string().min(2, "Source ID name is required"),
  link: z.enum(["FACEBOOK", "INSTAGRAM", "TWITTER"]),
});

type FormData = z.infer<typeof publicSourceNewsSchema>;

export default function PublicSourceNewsForm() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(publicSourceNewsSchema),
    defaultValues: {
      headings: "",
      sourceIdName: "",
      link: "INSTAGRAM",
    },
  });

  async function onSubmit(data: FormData) {
    try {
      setLoading(true);
      await createPublicSourceNews(data);
      toast.success("✅ Public Source News added!");
      form.reset();

    } catch (err: any) {
      toast.error(err.message || "❌ Failed to create news");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Headline */}
          <FormField
            control={form.control}
            name="headings"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Headline</FormLabel>
                <FormControl>
                  <Input placeholder="Enter headline..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Source ID */}
          <FormField
            control={form.control}
            name="sourceIdName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Source ID Name</FormLabel>
                <FormControl>
                  <Input placeholder="@news_source" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Platform Select */}
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FACEBOOK">Facebook</SelectItem>
                    <SelectItem value="INSTAGRAM">Instagram</SelectItem>
                    <SelectItem value="TWITTER">Twitter</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
