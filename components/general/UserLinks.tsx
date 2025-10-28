import {
  BookPlus,
  MessagesSquare,
  Newspaper,
  Settings2,
  Megaphone,
  Users,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function UserLinks() {
  return (
    <div className="flex flex-wrap justify-center space-x-2 p-2">
      <Link href="/alluseropinion">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          অভিযোগসমূহ
        </Button>
      </Link>
      <Link href="/post-an-article">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          একটি সংবাদ লিখুন
        </Button>
      </Link>
      <Link href="/my-article">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          আমার প্রকাশিত সংবাদের তালিকা
        </Button>
      </Link>
      <Link href="/alluseropinion/opiniontable">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          সব অভিযোগের নিয়ন্ত্রণ
        </Button>
      </Link>
      
      {/* Section 2 Links */}
      <Link href="/post-an-article/alaarticles">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          সব প্রবন্ধের নিয়ন্ত্রণ
        </Button>
      </Link>
      <Link href="/post-an-article/post-advertisement">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          বিজ্ঞাপন পোস্ট করুন
        </Button>
      </Link>
      <Link href="/post-an-article/post-advertisement/alladvertise">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          সব বিজ্ঞাপন নিয়ন্ত্রণ
        </Button>
      </Link>
      <Link href="/about/advertise/allcontactinfo">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          সব বিজ্ঞাপন অনুরোধ
        </Button>
      </Link>
      <Link href="/post-an-article/post-a-video">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          ইউটিউব ভিডিও পোস্ট করুন
        </Button>
      </Link>
      <Link href="/post-an-article/post-a-video/allvideos">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          সব ভিডিও নিয়ন্ত্রণ
        </Button>
      </Link>
      <Link href="/routeTrack">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          ড্যাশবোর্ড
        </Button>
      </Link>
      <Link href="/post-an-article/allusers">
        <Button variant="outline" className="flex items-center gap-2 mb-2">
          <Users size={16} />
          অ্যাপের সকল ব্যবহারকারী
        </Button>
      </Link>
    </div>
  );
}
