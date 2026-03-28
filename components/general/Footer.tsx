import { Facebook, InstagramIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import CountryListLinks from "./CountryListLinks";
import FooterLinks from "./FooterLink";

export default function Footer() {
  return (
    <footer className="mt-10 w-full bg-linear-to-t from-gray-900 via-gray-950 to-gray-900 text-gray-100">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        {/* Top Quick Links */}
        <FooterLinks />

        {/* Three Column Section */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Column 1: Editors */}
          <div className=" p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="font-bold text-xl md:text-2xl mb-2 text-orange-400">প্রকাশনা ও যোগাযোগ</h2>
            <h3 className="font-semibold mb-2">
              সম্পাদক এবং প্রকাশকমণ্ডলী <br />
              মো: মোশাররফ হোসেন <br />
              হাজেরা আক্তার পলি <br />
              মো: শাহাব উদ্দিন
            </h3>
            <p className="text-sm mb-2">
              <a href="mailto:sompadok@jagrotobarta.com" className="hover:underline text-orange-300">
                sompadok@jagrotobarta.com
              </a>
            </p>
            <div className="text-sm space-y-1">
              <p>ঢাকা, বাংলাদেশ</p>
              <p>Managed By: Lisbon, Portugal / Stockholm, Sweden / Cyprus</p>
              <a href="mailto:info@jagrotobarta.com" className="hover:underline text-orange-300">
                info@jagrotobarta.com
              </a>
            </div>
          </div>

          {/* Column 2: Ads & Logo */}
          <div className=" p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col">
            <h2 className="font-bold text-xl md:text-2xl text-orange-400 mb-2">বিজ্ঞাপন</h2>
            <p className="mb-2">
              বিজ্ঞাপনের জন্য ইমেইল করুন{" "}
              <a href="mailto:info@jagrotobarta.com" className="hover:underline text-orange-300">
                info@jagrotobarta.com
              </a>
            </p>
            <p className="mb-2">অথবা সরাসরি ফর্ম পূরণ করুন:</p>
            <a href="/about/advertise#advertiseForm" className="font-semibold hover:underline text-orange-300 mb-4">
              ফর্ম
            </a>
            <Link href="/">
              <div className="w-40 h-16 md:w-48 md:h-20 bg-[url('/logo.png')] bg-cover bg-center rounded-lg shadow-md hover:shadow-xl transition" />
            </Link>
          </div>

          {/* Column 3: Social Media */}
          <div className=" p-6 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center">
            <p className="mb-2">সর্বশেষ আপডেট এবং এক্সক্লুসিভ কন্টেন্টের জন্য ফলো করুন:</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.facebook.com/share/1DYukWKHKy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:info@jagrotobarta.com"
                className="w-10 h-10 bg-red-600 p-2 rounded-full text-white hover:bg-red-700 transition"
              >
                <MailIcon size={24} />
              </a>
              <a
                href="https://www.instagram.com/jagrotobarta/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 p-2 rounded-full text-white hover:bg-pink-600 transition"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Country Links */}
        <div className="mt-10">
          <CountryListLinks />
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm flex flex-col md:flex-row justify-center gap-3 items-center">
          <p>&copy; {new Date().getFullYear()} জাগ্রত বার্তা। সর্বস্বত্ব সংরক্ষিত।</p>
          <a
            href="https://souveral.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold text-orange-400 hover:text-orange-300"
          >
            IT and Technical Support
          </a>
        </div>
      </div>
    </footer>
  );
}