'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

// Updated schema with phone validation
const formSchema = z.object({
  name: z.string().min(1, 'নাম লিখুন'),
  email: z.string().email('সঠিক ইমেইল লিখুন'),
  phone: z
    .string()
    .min(10, 'ফোন নম্বর অন্তত ১০ অঙ্কের হতে হবে')
    .max(15, 'ফোন নম্বর সর্বোচ্চ ১৫ অঙ্কের হতে পারে'),
  opinion: z.string().min(10, 'কমপক্ষে ১০ অক্ষরের অভিযোগ লিখুন')
});

export function OpinionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      opinion: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Submitted Opinion:', data);
    toast('আপনার অভিযোগ জমা দেওয়া হয়েছে!');
    form.reset();
  };

  return (
    <div className="w-full mx-auto p-4 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">আপনার অভিযোগ লিখুন</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>নাম</FormLabel>
                <FormControl>
                  <Input placeholder="আপনার নাম লিখুন" {...field} className="text-xs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ইমেইল</FormLabel>
                <FormControl>
                  <Input placeholder="আপনার ইমেইল লিখুন" {...field} className="text-xs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ফোন নম্বর</FormLabel>
                <FormControl>
                  <Input placeholder="ফোন নম্বর লিখুন" {...field} className="text-xs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Opinion/Complaint */}
          <FormField
            control={form.control}
            name="opinion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>অভিযোগ</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="এখানে আপনার অভিযোগ লিখুন..."
                    className="resize-none text-xs"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            অভিযোগ পাঠান
          </Button>
        </form>
      </Form>
    </div>
  );
}
