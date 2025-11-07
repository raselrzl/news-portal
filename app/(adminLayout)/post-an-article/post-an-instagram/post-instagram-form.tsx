"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { createInstagramPost } from "@/app/actions";

export function PostInstagramForm() {
  const [pending, setPending] = useState(false);

  const form = useForm({
    defaultValues: {
      igLink: "",
      igStatus: "DRAFT",
      isFeatured: false,
    },
  });

  const { control, handleSubmit } = form;

  async function onSubmit(data: any) {
    try {
      setPending(true);
      await createInstagramPost(data);
      toast.success("Instagram post submitted!");
      form.reset();
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT") {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Card className="rounded-xs">
            <CardContent className="space-y-6 pt-4">
              <FormField
                control={control}
                name="igLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram Post Link</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.instagram.com/p/..."
                        {...field}
                        className="placeholder:text-sm"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Do you want this post to appear on the homepage?</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="rounded-xs">
            <CardContent className="space-y-6">
              <FormField
                control={control}
                name="igStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="DRAFT">DRAFT</SelectItem>
                        <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                        <SelectItem value="EXPIRED">EXPIRED</SelectItem>
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
