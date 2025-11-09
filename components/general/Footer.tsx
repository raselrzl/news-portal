import { Facebook, Instagram, InstagramIcon, MailIcon, Youtube } from "lucide-react";
import Link from "next/link";
import CountryListLinks from "./CountryListLinks";

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
            <h1 className="font-bold text-2xl mt-6">প্রকাশনা ও যোগাযোগ</h1>
            <h3 className="font-bold">সম্পাদক & প্রকাশক: শাহাব উদ্দিন</h3>

            <p className="mb-1 text-sm text-muted-foreground">
              <a
                href="mailto:sompadok@jagrotobarta.com"
                className="text-orange-600 hover:underline"
              >
                sompadok@jagrotobarta.com
              </a>
              <br />
            </p>

            <div>
              <p>ঢাকা, বাংলাদেশ</p>
              <p>Smedjegatan 35, 60219, Norrköping, Sweden</p>
              <a
                href="mailto:info@jagrotobarta.com"
                className="text-primary hover:underline"
              >
                info@jagrotobarta.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-2xl mt-6">বিজ্ঞাপন</h1>
     
            বিজ্ঞাপনের জন্য ইমেইল করুন{" "}
               <a
              href="mailto:info@jagrotobarta.com"
              className="text-primary hover:underline"
            >
              info@jagrotobarta.com
            </a>
            <div className="max-w-2xl mx-auto px-4 py-4 text-foreground text-center">
              <p className="mb-4 inline">
                অথবা সরাসরি ফর্ম পূরণ করে যোগাযোগ করুন।
              </p>
              <a
                href="/about/advertise#advertiseForm"
                aria-label="Form"
                className="text-primary hover:underline"
              >
                ফর্ম
              </a>
            </div>
         
            <Link href="/" className="flex items-center p-2">
              <div className="w-[160px] h-[60px] md:w-[200px] md:h-[80px] bg-[url('/logoo1.jpg')] dark:bg-[url('/logooo1.jpg')] bg-cover bg-center" />
            </Link>
          </div>
          <div className="flex flex-col items-center  justify-center gap-4 mt-6 md:mt-0">
            <p>
              সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য আমাদের সোশ্যাল
              মিডিয়া একাউন্টে ফলো করুন।
            </p>
            <div className="flex gap-3">
              {" "}
              <a
                href="https://www.facebook.com/share/1DYukWKHKy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-blue-600" />
              </a>
              <Link
                href="mailto:info@jagrotobarta.com"
                className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-blue-600"
              >
                <MailIcon size={32} />
              </Link>
              <Link
        href="https://www.instagram.com/jagrotobarta/"
        target="_blank"
        rel="noopener noreferrer"
         className="w-10 h-10 bg-primary p-1 rounded-xl text-white hover:text-pink-700"
      >
        <InstagramIcon size={32} />
      </Link>
            </div>
            {/*      <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-pink-500" />
            </a> */}
            {/*   <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Youtube className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-red-600" />
            </a> */}
          </div>
        </div>
          <CountryListLinks />
        <p className="text-xs text-primary py-2 mt-2 bg-accent">
          &copy; {new Date().getFullYear()} জাগ্রত বার্তা। সর্বস্বত্ব সংরক্ষিত।
        </p>
      </div>
    </footer>
  );
}
