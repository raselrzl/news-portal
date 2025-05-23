import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 mt-10 w-full">
      <div className=" text-center text-sm text-foreground ">
        <div className="flex flex-wrap justify-center gap-4 mb-2 py-6 border-y-2">
          <Link
            href="/about"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-2xl px-2"
          >
            জাগ্রত বার্তা
          </Link>
          <Link href="/about/privacy-policy" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            গোপনীয়তার নীতি
          </Link>
          <Link href="/about/terms" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            শর্তাবলি
          </Link>
          <Link href="/about/comment-policy" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            মন্তব্য প্রকাশের নীতিমালা
          </Link>
          <Link href="/about/advertise" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            বিজ্ঞাপন
          </Link>
         {/*  <Link href="/about/contact" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            যোগাযোগ
          </Link> */}
        </div>
        <div className="p-6 w-full">
          <h2 className="text-2xl font-semibold mb-4 text-center text-neutral-900">
            প্রকাশনা ও যোগাযোগ
          </h2>
          <p className="mb-2 text-base text-neutral-700">
            <strong>সম্পাদক:</strong>  ইসলাম ইসলাম ইসলাম
            <br />
            <strong>প্রকাশক:</strong> ইসলাম ইসলাম ইসলাম
            <br />
            <strong>বিভাগীয় প্রধান (অনলাইন):</strong> ইসলাম ইসলাম ইসলাম
          </p>
          <p className="mb-2 text-base text-neutral-600">
            জাগরতোবার্তা মিডিয়া লিমিটেডের পক্ষে প্রকাশক কর্তৃক নিউমার্কেট ইসলাম ইসলাম ইসলাম
            কমপ্লেক্স, ৪৪/১, রহিম স্কয়ার, নিউমার্কেট, ঢাকা 
          </p>
          <p className="mb-2 text-base text-neutral-700">
            <strong>ফোন:</strong> +৮৮ ০২ 00000000, +৮৮ ০২ 00000000
            <br />
            <br />
            <strong>ই-মেইল:</strong>{" "}
            <a
              href="mailto:news@jagrotobarta.com"
              className="text-primary hover:underline"
            >
              news@jagrotobarta.com
            </a>
          </p>
          <p className="mb-2 text-base text-neutral-700">
            <strong>বিজ্ঞাপন বিভাগ:</strong>
            <br />
            ফোন: +৮৮ ০২ 00000000, ০১৭৩০ 000000
            <br />
            ই-মেইল:{" "}
            <a
              href="mailto:ads@jagrotobarta.com"
              className="text-primary hover:underline"
            >
              ads@jagrotobarta.com
            </a>
          </p>
          <p className="text-neutral-700">
            <strong>সার্কুলেশন:</strong> ফোন: ০১700000000
            <br />
            <em>জাগরতোবার্তা মিডিয়া লিমিটেডের একটি প্রকাশনা।</em>
          </p>
        </div>

        <p className="text-xs text-primary py-2">
          &copy; {new Date().getFullYear()} Jagroto Barta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
