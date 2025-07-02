import { FC } from "react";
import { Home, Smile } from "lucide-react";
import Link from "next/link";

const NotFoundPage: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-orange-600 animate-pulse">
          ৪০৪
        </h1>
        <h2 className="text-3xl text-gray-700 mt-6">
          উফ! এই পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।
        </h2>
        <p className="text-lg text-gray-500 mt-2">
          মনে হচ্ছে আপনি ভুল ঠিকানায় চলে এসেছেন। যে পৃষ্ঠাটি খুঁজছেন, তা এখানে নেই।
        </p>
        <Smile className="w-32 h-32 text-orange-500 mx-auto mt-8 animate-bounce" />

        <Link
          href="/"
          className="mt-8 text-lg text-orange-500 hover:text-orange-600 underline flex items-center justify-center"
        >
          <Home className="mr-2" />
          আমাকে মূল পাতায় নিয়ে চলুন
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
