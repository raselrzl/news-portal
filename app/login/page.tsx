import LoginForm from "@/components/general/LoginForm";
import { trackRoute } from "../utils/routeTracker";

export default async function Login() {
  await trackRoute("Login");
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        
        <LoginForm />
      </div>
    </div>
  );
}
