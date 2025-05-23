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
import { useState } from 'react';
import { submitOpinion } from '@/app/actions'; // server action
import { Loader2 } from 'lucide-react';

export const OpinionSchema = z.object({
  name: z.string().min(1, 'নাম লিখুন'),
  email: z.string().email('সঠিক ইমেইল লিখুন').optional(),
  phone: z
    .string()
    .min(10, 'ফোন নম্বর অন্তত ১০ অঙ্কের হতে হবে')
    .max(15, 'ফোন নম্বর সর্বোচ্চ ১৫ অঙ্কের হতে পারে')
    .optional(),
  opinion: z.string().min(10, 'কমপক্ষে ১০ অক্ষরের অভিযোগ লিখুন').max(300,'100 অক্ষরের অভিযোগ লিখুন')
});

export function OpinionForm() {
  const form = useForm({
    resolver: zodResolver(OpinionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      opinion: ''
    }
  });

  type OpinionData = {
    name: string;
    email?: string;
    phone?: string;
    opinion: string;
  };
  const [pending, setPending] = useState(false);

  async function onSubmit(data: z.infer<typeof OpinionSchema>) {
    try {
      setPending(true);
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('opinion', data.opinion);
      if (data.email) formData.append('email', data.email);
      if (data.phone) formData.append('phone', data.phone);
  
      await submitOpinion(formData);
  
      toast.success('✅ আপনার অভিযোগ সফলভাবে জমা হয়েছে!');
      form.reset();
    } catch (error) {
      if (error instanceof Error && error.message !== 'NEXT_REDIRECT') {
        toast.error('❌ কিছু ভুল হয়েছে। আবার চেষ্টা করুন।');
      }
    } finally {
      setPending(false);
    }
  }

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
                  <Input placeholder="আপনার ইমেইল লিখুন (ঐচ্ছিক)" {...field} className="text-xs" />
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
                  <Input placeholder="ফোন নম্বর লিখুন (ঐচ্ছিক)" {...field} className="text-xs" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Opinion */}
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
          <Button type="submit" className="w-full" disabled={pending}>
          {pending ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="animate-spin w-4 h-4" />
              পাঠানো হচ্ছে...
            </span>
          ) : (
            'অভিযোগ পাঠান'
          )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
