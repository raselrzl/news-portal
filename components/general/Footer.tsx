import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 w-full flex justify-center">
      <div className=" w-full max-w-7xl text-center">
        <div className="flex flex-wrap justify-center gap-4 mb-2 py-2 border-2">
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
            <h2 className="text-xl font-semibold mb-2 text-center">
              প্রকাশনা ও যোগাযোগ
            </h2>
            <p className="mb-1">
              <strong>সম্পাদক:</strong> ইসলাম ইসলাম ইসলাম
              <br />
              <strong>প্রকাশক:</strong> ইসলাম ইসলাম ইসলাম
              <br />
            </p>

            <div>
              <strong>ফোন:</strong> +৮৮ ০২ 00000000, +৮৮ ০২ 00000000
              <br />
              <strong>ই-মেইল:</strong>{" "}
              <a
                href="mailto:news@jagrotobarta.com"
                className="text-primary hover:underline"
              >
                news@jagrotobarta.com
              </a>
              <p>৪৪/১, রহিম স্কয়ার, নিউমার্কেট, ঢাকা</p>
            </div>
          </div>

          <p>
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
          <div className="flex items-center  justify-center gap-4 mt-6 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-blue-600" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-pink-500" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-red-600" />
            </a>
          </div>
        </div>

        <p className="text-xs text-primary py-2 mt-2 bg-accent">
          &copy; {new Date().getFullYear()} জাগ্রত বার্তা। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
