'use client';
import dynamic from 'next/dynamic';

const PopupOnView = dynamic(() => import('@/components/PopupAd/PopupOnView'), {
  ssr: false,
});

type Props = {
  imageSrc?: string;
  href?: string;
  alt?: string;
  unoptimized?: boolean;
};

export default function PopupOnViewClientWrapper(props: Props) {
  return <PopupOnView {...props} />;
}
