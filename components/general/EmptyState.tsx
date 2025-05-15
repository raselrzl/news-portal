import { Button, buttonVariants } from "@/components/ui/button";
import { Ban, PlusCircle } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export function EmptyState({
  buttonText,
  description,
  href,
  title,
}: iAppProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
      <div className="flex flex-col items-center text-center border border-dashed rounded-md p-6 sm:p-8 w-full max-w-md animate-in fade-in-50">
        <div className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-primary/10">
          <Ban className="size-8 sm:size-10 text-primary" />
        </div>

        <h2 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold">
          {title}
        </h2>

        <p className="mt-2 mb-6 sm:mb-8 text-sm sm:text-base text-muted-foreground max-w-xs sm:max-w-sm mx-auto leading-tight">
          {description}
        </p>

        <Link href={href} className={buttonVariants({ className: "flex items-center gap-2" })}>
          <PlusCircle className="size-4" /> {buttonText}
        </Link>
      </div>
    </div>
  );
}
