"use client";

import Image from "next/image";
import { useState } from "react";

export default function NewsImageModal({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <Image
        src={src}
        alt="news"
        width={300}
        height={250}
        className="rounded-xl object-cover w-full h-auto mt-1 cursor-pointer"
        onClick={() => setOpen(true)}
      />

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4"
          onClick={() => setOpen(false)}
        >
          {/* Prevent image click from closing modal */}
          <div onClick={(e) => e.stopPropagation()} className="relative">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute top-2 right-2
                bg-white text-black
                w-8 h-8 flex items-center justify-center
                rounded-full shadow-lg 
                hover:bg-gray-200
                transition
                z-[10000]
              "
            >
              ✕
            </button>

            {/* Full Image */}
            <Image
              src={src}
              alt="news-large"
              width={900}
              height={700}
              className="rounded-lg max-h-[90vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
