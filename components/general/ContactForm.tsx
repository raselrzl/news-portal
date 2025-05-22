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

// Schema with phone number validation
const contactSchema = z.object({
  name: z.string().min(1, 'নাম প্রয়োজন'),
  email: z.string().email('সঠিক ইমেইল দিন'),
  phone: z
    .string()
    .min(10, 'ফোন নম্বর অন্তত ১০ অঙ্কের হতে হবে')
    .max(15, 'ফোন নম্বর সর্বোচ্চ ১৫ অঙ্কের হতে পারে'),
  subject: z.string().min(1, 'বিষয় লিখুন'),
  message: z.string().min(10, 'কমপক্ষে ১০ অক্ষরের বার্তা দিন')
});

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('Contact Data:', data);
    alert('আপনার বার্তা পাঠানো হয়েছে!');
    form.reset();
  };

  return (
    <div className="w-full mx-auto mt-10 p-6 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">যোগাযোগ করুন</h2>
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
                  <Input
                    type="tel"
                    placeholder="ফোন নম্বর লিখুন"
                    {...field}
                    className="text-xs"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Subject */}
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>বিষয়</FormLabel>
                <FormControl>
                  <Input placeholder="বার্তার বিষয় লিখুন" {...field} className="text-xs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>বার্তা</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="আপনার বার্তা লিখুন..."
                    className="resize-none text-xs"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit */}
          <Button type="submit" className="w-full">
            বার্তা পাঠান
          </Button>
        </form>
      </Form>
    </div>
  );
}
