import {
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
    <div className="flex space-x-3 items-start">
      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FacebookIcon size={32} />
      </Link>
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700"
      >
        <InstagramIcon size={32} />
      </Link>
      <Link
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
      </Link>
      <Link
        href="mailto:your-email@example.com"
        className="text-gray-600 hover:text-gray-800"
      >
        <MailIcon size={32} />
      </Link>
    </div>
  );
};

export default SocialLinks;
