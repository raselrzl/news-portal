"use client";

import Image from "next/image";

interface InstagramPostPreviewProps {
  igLink: string;
}

export default function InstagramPostPreview({
  igLink,
}: InstagramPostPreviewProps) {
  // Fallback thumbnail
  const getThumbnail = () => {
    try {
      const url = new URL(igLink);
      if (url.pathname.startsWith("/p/")) {
        return `https://instagram.com${url.pathname}media/?size=l`;
      }
      return "/instagram-placeholder.png";
    } catch {
      return "/instagram-placeholder.png";
    }
  };

  return (
    <a
      href={igLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2"
    >
      <div className="relative w-[300px] h-[350px] rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={getThumbnail()}
          alt="Instagram post"
          fill
          className="object-fill" // ✅ This ensures bg-cover behavior
          sizes="(max-width: 768px) 100vw, 320px"
          priority
        />
      </div>
    </a>
  );
}
