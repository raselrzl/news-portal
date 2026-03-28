import { FileText, Shield, CheckSquare, MessageCircle, Megaphone } from "lucide-react";
import Link from "next/link";

export default function FooterLinks() {
  const links = [
    { href: "/about", label: "জাগ্রত বার্তা", icon: FileText },
    { href: "/about/privacy-policy", label: "গোপনীয়তার নীতি", icon: Shield },
    { href: "/about/terms", label: "শর্তাবলি", icon: CheckSquare },
    { href: "/about/comment-policy", label: "মন্তব্য প্রকাশের নীতিমালা", icon: MessageCircle },
    { href: "/about/advertise", label: "বিজ্ঞাপন", icon: Megaphone },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10 text-sm md:text-base">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 px-2 py-1 hover:text-orange-400 transition rounded-md"
          >
            <Icon className="w-4 h-4 md:w-5 md:h-5" />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}