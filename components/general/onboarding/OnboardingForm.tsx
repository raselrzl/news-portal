"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import UserTypeSelection from "./UserTypeForm";
import NewsReporterRegisterForm from "./newsReporterRegisterForm";
import Advertiser from "./advertiser";

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
        return userType === "newsReporter" ? (
          <NewsReporterRegisterForm />
        ) : (
          <Advertiser />
        );
      default:
        return null;
    }
  }
  return (
    <div className="w-full max-w-2xl md:max-w-3xl flex items-center justify-center mx-auto px-4">
  <div className="p-6 w-full flex flex-col items-center justify-center">
    {renderStep()}
  </div>
</div>

  );
}
