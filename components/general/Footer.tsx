import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" mt-10 w-full">
      <div className=" text-center text-sm text-foreground ">
        <div className="flex flex-wrap justify-center gap-4 mb-2 py-6 border-y-2">
          <Link
            href="/about"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-2xl px-2"
          >
            জাগ্রত বার্তা
          </Link>
          <Link
            href="/about/privacy-policy"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2"
          >
            গোপনীয়তার নীতি
          </Link>
          <Link
            href="/about/terms"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2"
          >
            শর্তাবলি
          </Link>
          <Link
            href="/about/comment-policy"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2"
          >
            মন্তব্য প্রকাশের নীতিমালা
          </Link>
          <Link
            href="/about/advertise"
            className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2"
          >
            বিজ্ঞাপন
          </Link>
          {/*  <Link href="/about/contact" className="hover:underline font-semibold text-foreground/90 text-md md:text-xl px-2">
            যোগাযোগ
          </Link> */}
        </div>
        <div className="md:grid md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-center text-neutral-900">
              প্রকাশনা ও যোগাযোগ
            </h2>
            <p className="mb-1 text-base text-neutral-700">
              <strong>সম্পাদক:</strong> ইসলাম ইসলাম ইসলাম
              <br />
              <strong>প্রকাশক:</strong> ইসলাম ইসলাম ইসলাম
              <br />
            </p>

            <p className="mb-2 text-base text-neutral-700">
              <strong>ফোন:</strong> +৮৮ ০২ 00000000, +৮৮ ০২ 00000000
              <br />
              <strong>ই-মেইল:</strong>{" "}
              <a
                href="mailto:news@jagrotobarta.com"
                className="text-primary hover:underline"
              >
                news@jagrotobarta.com
              </a>
              <p className="text-base text-neutral-600">
                ৪৪/১, রহিম স্কয়ার, নিউমার্কেট, ঢাকা
              </p>
            </p>
          </div>

          <p className="mb-2 text-base text-neutral-700">
            <strong>বিজ্ঞাপন</strong>
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
          <div>

          </div>
        </div>

        <p className="text-xs text-primary py-2">
          &copy; {new Date().getFullYear()} Jagroto Barta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
