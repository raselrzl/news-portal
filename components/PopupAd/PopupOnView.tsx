'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PopupOnViewProps = {
  imageSrc?: string;            // from DB
  href?: string;                // optional click-through
  alt?: string;                 // optional alt
  unoptimized?: boolean;        // set true if your image domain isn't whitelisted yet
};

export default function PopupOnView({
  imageSrc = '/noad.png',
  href,
  alt = 'Advertisement',
  unoptimized,
}: PopupOnViewProps) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (inView) setShowPopup(true);
  }, [inView]);

  const handleClose = () => setShowPopup(false);

  const Img = (
    <img
      src={imageSrc}
      alt={alt}
      className="object-fill rounded-xl"
    />
  );

  return (
    <div ref={ref} className="relative">
      {showPopup && (
        <div className="fixed top-28 left-1/2 -translate-x-1/2 z-50 rounded-md px-4 py-2 max-w-[600px]">
          <div className="relative w-[350px] md:w-[600px] h-[100px] rounded-xl overflow-hidden">
            {href ? (
              <Link href={href} target="_blank" rel="noopener noreferrer" aria-label="Advertisement">
                {Img}
              </Link>
            ) : (
              Img
            )}

            <button
              onClick={handleClose}
              aria-label="Close popup"
              className="absolute cursor-pointer top-2 right-2 bg-white/70 rounded-full p-1 hover:bg-white transition text-gray-700 text-lg"
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
