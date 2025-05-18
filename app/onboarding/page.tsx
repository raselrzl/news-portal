import { redirect } from "next/navigation";
import { prisma } from "../utils/db";
import OnboardingForm from "@/components/general/onboarding/OnboardingForm";
import { requireUser } from "../utils/requireUser";

async function checkIfOnboardingCompleted(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted === true) {
    redirect("/post-an-article");
  }
}

export default async function OnboardingPage() {
  const session = await requireUser();

  await checkIfOnboardingCompleted(session.id as string);
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden my-20">
      <OnboardingForm />
    </div>
  );
}
