import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center space-x-3 mt-4">
     <a
              href="https://www.facebook.com/share/1DYukWKHKy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-blue-600" />
            </a>
      <Link
        href="https://www.instagram.com/jagrotobarta/"
        target="_blank"
        rel="noopener noreferrer"
         className="w-10 h-10 bg-primary p-1 rounded-xl text-white hover:text-pink-700"
      >
        <InstagramIcon size={32} />
      </Link>
  {/*     <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800"
      >
        <YoutubeIcon size={32} />
      </Link>
      <Link
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
      >
        <TwitterIcon size={32} />
      </Link> */}
      <Link
        href="mailto:info@jagrotobarta.com"
        className="w-10 h-10 bg-primary p-1 rounded-xl text-accent hover:text-blue-600"
      >
        <MailIcon size={32} />
      </Link>
    </div>
  );
};

export default SocialLinks;
