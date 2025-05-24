'use client';

import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { deleteadvertiseRequestMEssageById } from '@/app/actions';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export default function ConfirmDeleteAdvertiseContactPage() {
  const router = useRouter();
  const params = useParams();
  const advertiseContactId = params.advertisecontactId as string;

  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await deleteadvertiseRequestMEssageById(advertiseContactId);
      router.push('/about/advertise/allcontactinfo');
    } catch (error) {
      console.error('Error deleting advertise contact message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push('/about/advertise/allcontactinfo');
  };

  return (
    <div className="flex items-center justify-center px-4 mt-20">
      <div className="max-w-md w-full bg-accent-foreground/8 shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-xl font-semibold text-destructive">
          আপনি কি নিশ্চিতভাবে এই বার্তাটি মুছে ফেলতে চান?
        </h2>
        <p className="mt-2 text-sm text-accent-foreground/70">
          একবার ডিলিট করলে এটি আর ফেরানো যাবে না।
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <Button variant="outline" onClick={() => router.back()}>
            আগের পাতায় ফিরে যান
          </Button>
          <Button variant="link" onClick={handleCancel}>
            বাতিল করুন
          </Button>
          <Button variant="destructive" onClick={handleConfirm} disabled={loading}>
            {loading ? <Loader2 className="animate-spin w-4 h-4 mr-2 inline-block" /> : null}
            হ্যাঁ, মুছে ফেলুন
          </Button>
        </div>
      </div>
    </div>
  );
}
