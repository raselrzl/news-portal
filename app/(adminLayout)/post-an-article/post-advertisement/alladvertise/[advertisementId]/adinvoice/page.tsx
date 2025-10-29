import React from "react";
import { prisma } from "@/app/utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import { notFound } from "next/navigation";
/* import PrintInvoiceClient from "@/components/general/PrintAddInvoiceClient"; */
import PrintInvoiceClient from "@/components/general/PrintAddInvoiceClientCopy"
import Invoice from "@/components/general/PrintAddInvoiceClientCopy";

async function getAdvertisement(advertisementId: string) {
  const ad = await prisma.advertisement.findUnique({
    where: { id: advertisementId },
  });
  if (!ad) notFound();
  return ad;
}

export default async function AdvertiseDetailsPage({
  params,
}: {
  params: Promise<{ advertisementId: string }>;
}) {
  const { advertisementId } = await params;
  const ad = await getAdvertisement(advertisementId);

  if (!ad) {
    return (
      <EmptyState
        title="Oops! Nothing to show yet."
        description="This advertisement could not be found."
        buttonText="Go back to the homepage"
        href="/"
      />
    );
  }

  // Dates
  const start = new Date(ad.startDate);
  const end = new Date(ad.endDate);
  const formattedStartDate = start.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedEndDate = end.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });



  // Duration
  const durationInDays = Math.max(
    1,
    Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  );

  // Rates from DB
  const dailyRate = ad.dailyPrice || 0;
  const discountRate = ad.discount || 0;
  const momsRate = (ad.moms || 0) / 100;

  // Calculations
  const subtotal = dailyRate * durationInDays;
  const discountAmount = (subtotal * discountRate) / 100;
  const priceAfterDiscount = subtotal - discountAmount;
  const momsAmount = priceAfterDiscount * momsRate;
  const totalWithMoms = priceAfterDiscount + momsAmount;

  // Payment due date
  const paymentDueDate = new Date(start);
  paymentDueDate.setDate(start.getDate() + 15);
  const formattedDueDate = paymentDueDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const logoUrl = "/lg1.png";

  return (
    <>
      <Invoice ad={ad as any} />
      <div className="max-w-4xl mx-auto relative bg-white border shadow-md p-6 my-10 font-sans">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 w-3/4 opacity-5 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] pointer-events-none">
          <img src={logoUrl} alt="Watermark" width={500} height={500} />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" width={160} height={50} />
            <span className="text-gray-600 font-semibold text-lg">চালান</span>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>চালান নম্বর: {ad.id.slice(-8).toUpperCase()}</p>
            <p>তারিখ: {formattedStartDate}</p>

          </div>
        </div>

        {/* Company & Ad Info */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mb-6 relative z-10">
          <div>
            <h2 className="font-semibold mb-2">কোম্পানির তথ্য</h2>
            <p><strong>নাম:</strong> {ad.companyName}</p>
            <p><strong>ঠিকানা:</strong> {ad.companyaddress}</p>
            <p><strong>পরিচালক:</strong> {ad.supervisedName}</p>
            <p><strong>ফোন:</strong> {ad.supervisedPhonenumber}</p>
            {ad.websiteLink && <p><strong>ওয়েবসাইট:</strong> {ad.websiteLink}</p>}
          </div>
          <div>
            <h2 className="font-semibold mb-2">বিজ্ঞাপনের তথ্য</h2>
            <p><strong>ধরন:</strong> {ad.advertisedCategory}</p>
            <p><strong>সময়কাল:</strong> {formattedStartDate} - {formattedEndDate}</p>
            <p><strong>মোট দিন:</strong> {durationInDays} দিন</p>
            <p><strong>অবস্থা:</strong> {ad.advertiseStatus}</p>
          </div>

        </div>

        {/* Details */}
        {ad.additionalInfo && (
          <div className="mb-6 relative z-10">
            <h2 className="font-semibold mb-2">বিস্তারিত
            </h2>
            <p className="text-sm text-gray-700 text-justify">{ad.additionalInfo}</p>
          </div>
        )}

        {/* Banner */}
        {ad.advertiseBanner && (
          <div className="mb-6 flex justify-center relative z-10">
            <img
              src={ad.advertiseBanner}
              alt="Advertisement Banner"
              width={300}
              height={200}
              className="border"
            />
          </div>
        )}

        {/* Calculation Table */}
        <div className="relative z-10 mb-6">
          <h2 className="font-semibold mb-2">হিসাব-নিকাশ
          </h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2 text-left font-semibold">বিবরণ</th>
                <th className="border px-3 py-2 text-right font-semibold">দর (প্রতি দিন)</th>
                <th className="border px-3 py-2 text-right font-semibold">দিন</th>
                <th className="border px-3 py-2 text-right font-semibold">মোট (SEK)</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">
                  বিজ্ঞাপন
                  ({formattedStartDate} - {formattedEndDate})
                </td>
                <td className="border px-3 py-2 text-right">
                  {dailyRate.toLocaleString("en-US")}
                </td>
                <td className="border px-3 py-2 text-right">{durationInDays}</td>
                <td className="border px-3 py-2 text-right">
                  {subtotal.toLocaleString("en-US")}
                </td>
              </tr>

              {discountRate > 0 && (
                <tr className="bg-gray-50">
                  <td className="border px-3 py-2 text-right" colSpan={3}>
                    ছাড়
                    ({discountRate}%)
                  </td>
                  <td className="border px-3 py-2 text-right">
                    -{discountAmount.toLocaleString("en-US")}
                  </td>
                </tr>
              )}

              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  মোট (ছাড়ের পরে)

                </td>
                <td className="border px-3 py-2 text-right">
                  {priceAfterDiscount.toLocaleString("en-US")}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  মোট কর
                  ({ad.moms}%)
                </td>
                <td className="border px-3 py-2 text-right">
                  {momsAmount.toLocaleString("en-US")}
                </td>
              </tr>

              <tr className="bg-gray-100 font-bold">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  মোট (মোট করসহ)

                </td>
                <td className="border px-3 py-2 text-right">
                  {totalWithMoms.toLocaleString("en-US")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bank Info */}
        <div className="mt-6 text-sm text-gray-700 border-t pt-4 relative z-10">
          <h2 className="font-semibold mb-2">পেমেন্ট তথ্য</h2>
          <p><strong>ব্যাংকের নাম:</strong> ব্যাংক এশিয়া</p>
          <p><strong>একাউন্ট নম্বর:</strong> 123 456 789</p>
          <p><strong>একাউন্ট নাম:</strong> জাগ্রত বার্তা লিঃ</p>
          <p><strong>শাখা:</strong> ঢাকা সদর</p>
          <p><strong>SWIFT কোড:</strong> BAESBDDH</p>


          <div className="mt-3 p-3 border bg-gray-100 rounded-md">
            <p className="font-semibold text-blue-700">📌 ব্যাংক ট্রান্সফার রেফারেন্স
            </p>
            <p>আপনার ট্রান্সফারে নিম্নোক্ত রেফারেন্সটি ব্যবহার করুন:
            </p>
            <p className="mt-1 font-bold text-lg">{ad.id.slice(-8).toUpperCase()}</p>
          </div>
        </div>

        {/* Payment Due */}
        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded-md text-yellow-800 text-sm relative z-10">
          <p className="font-semibold">🕒 পেমেন্ট শেষ করার তারিখ:
          </p>
          <p>
            অনুগ্রহ করে পেমেন্টটি সম্পন্ন করুন **এর আগে**
            {" "}
            <span className="font-bold text-red-600">{formattedDueDate}</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-xs text-gray-500 border-t pt-3 leading-6 relative z-10">
          <p>
            এই চালানটি স্বয়ংক্রিয়ভাবে তৈরি হওয়া একটি ডিজিটাল নথি এবং এতে স্বাক্ষরের প্রয়োজন নেই।

          </p>
          <p>
            বিজ্ঞাপনটি নির্ধারিত সময় অনুযায়ী jagrotobarta.com-এ প্রকাশ করা হবে।

          </p>
        </div>
      </div>
    </>
  );
}
