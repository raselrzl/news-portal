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
 
export default async function LoginForm() {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className=" flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center ">
          <CardTitle className="text-xl"><span className="text-red-800">জাগ্রত বার্তায় </span>আপনাকে স্বাগতম</CardTitle>
          {/* <CardDescription>গুগল দিয়ে লগইন করুন</CardDescription> */}
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {/*  <form>
              <Button className="w-full" variant="outline">
                <Image
                  src="/github-mark.png"
                  height={20}
                  width={20}
                  alt="logo image"
                />
                Login with github
              </Button>
            </form> */}

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
        চালিয়ে যেতে ক্লিক করে, আপনি আমাদের পরিষেবার শর্তাবলী ও গোপনীয়তা নীতিতে সম্মতি দিচ্ছেন।
        </div>
      </Card>
    </div>
  );
}
