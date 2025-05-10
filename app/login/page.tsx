import LoginForm from "@/components/general/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        
        <LoginForm />
      </div>
    </div>
  );
}
