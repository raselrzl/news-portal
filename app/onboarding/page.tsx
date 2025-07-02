import { redirect } from "next/navigation";
import { prisma } from "../utils/db";
import OnboardingForm from "@/components/general/onboarding/OnboardingForm";
import { requireUser } from "../utils/requireUser";
import { trackRoute } from "../utils/routeTracker";

async function checkIfOnboardingCompleted(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      onboardingCompleted: true,
    },
  });

  if (user?.onboardingCompleted === true) {
    redirect("/");
  }
}

export default async function OnboardingPage() {
  const session = await requireUser();
  await trackRoute("Onboarding");
  await checkIfOnboardingCompleted(session.id as string);
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden my-20">
      <OnboardingForm />
    </div>
  );
}
