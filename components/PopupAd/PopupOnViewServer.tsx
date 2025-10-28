
import PopupOnViewClientWrapper from '@/components/PopupAd/PopupOnViewClientWrapper';
import { getEnterpriseOneAdvertise } from '../allAdvertisement/EnterpriseOne';

export default async function PopupOnViewServer() {
  const ads = await getEnterpriseOneAdvertise();
  const ad = ads?.[0];

  const imageSrc = ad?.advertiseBanner || '/noad.png';
  const href = ad?.websiteLink
    ? (ad.websiteLink.startsWith('http') ? ad.websiteLink : `https://${ad.websiteLink}`)
    : undefined;

  return (
    <PopupOnViewClientWrapper
      imageSrc={imageSrc}
      href={href}
      alt={ad?.companyName || 'Advertisement'}
      unoptimized={true} // set to false after whitelisting the image host in next.config.js
    />
  );
}
