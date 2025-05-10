"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import UserTypeSelection from "./UserTypeForm";
import NewsReporterRegisterForm from "./newsReporterRegisterForm";


type UserSelectionType = "newsReporter" | "Advertiser" | null;

export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserTypeSelection(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }
  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelection onSelect={handleUserTypeSelection} />;
      case 2:
        return userType === "newsReporter"? (<NewsReporterRegisterForm />):"cudwkjfhdkhd";
      default:
        return null;
    }
  }
  return (
    <div className="">
      <div className="flex items-center justify-center gap-2 mb-10">
        <Image src="/jagrata3.png" alt="logo image" width={150} height={50} />
      </div>
      <Card className="max-w-fit w-full">
        <CardContent className="p-6">{renderStep()}</CardContent>
      </Card>
    </div>
  );
}
