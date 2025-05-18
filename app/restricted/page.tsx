'use client';

import { ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function RestrictedPage() {
  return (
    <div className=
      "flex flex-col items-center justify-center min-h-screen text-center px-4"
    >
      <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-3xl font-semibold text-accent-foreground">প্রবেশ সীমিত</h1>
      <p className="mt-2 text-lg text-accent-foreground/60">
        আপনি এই পৃষ্ঠাটি দেখার অনুমতি পাননি।
      </p>
      <p className="mt-1 text-accent-foreground/60">
        সহায়তার জন্য <Link href="/" className="text-primary hover:underline">আমাদের সাথে যোগাযোগ করুন</Link>।
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-primary text-white px-5 py-2 rounded-md hover:bg-primary/70 transition"
      >
        হোম পৃষ্ঠায় ফিরে যান
      </Link>
    </div>
  );
}
