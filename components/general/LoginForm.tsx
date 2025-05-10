import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { auth, signIn } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import ButtonGoogle from "./Button-Google";
import Link from "next/link";

export default async function LoginForm() {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className=" flex flex-col gap-6">
      <Card>
      <Link href="/" className="flex items-center gap-2 self-center">
        <Image
            src="/3.png"
            height={100}
            width={180}
            alt="logo image"
        />       
        </Link>
        <CardHeader className="text-center ">
          <CardTitle className="text-xl">
            <span className="text-red-800">জাগ্রত বার্তায় </span>আপনাকে স্বাগতম
          </CardTitle>
          <CardDescription className="text-xs">গুগল দিয়ে লগইন করুন অথবা একটি অ্যাকাউন্ট তৈরি করুন</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <form
              action={async () => {
                "use server";
                await signIn("google", {
                  redirectTo: "/onboarding",
                });
              }}
              className="cursor-pointer"
            >
              <ButtonGoogle
                width="w-full"
                variant="default"
                text="গুগল দিয়ে লগইন করুন"
                icon={
                  <Image
                    src="/google_icon.svg"
                    height={20}
                    width={20}
                    alt="logo image"
                  />
                }
              />
            </form>
          </div>
        </CardContent>
        <div className="text-center text-xs text-green-500 text-balance">
          চালিয়ে যেতে ক্লিক করে, আপনি আমাদের পরিষেবার{" "}
          <Link href="/privacy-policy">
            <span className="text-primary underline">শর্তাবলী</span>
          </Link>{" "}
          ও গোপনীয়তা নীতিতে সম্মতি দিচ্ছেন।
        </div>
        <Link
          href="/"
          className="text-center gap-2 text-primary underline"
        >
          শুরুরে যান
        </Link>
      </Card>
    </div>
  );
}
