import React from "react";
import { prisma } from "@/app/utils/db";
import { EmptyState } from "@/components/general/EmptyState";
import Image from "next/image";
import { notFound } from "next/navigation";
import PrintInvoiceClient from "@/components/general/PrintAddInvoiceClient";

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

  const logoUrl = "/n1w.png";

  return (
    <>
      <PrintInvoiceClient ad={ad as any}  />
      <div className="max-w-4xl mx-auto relative bg-white border shadow-md p-6 my-10 font-sans">
        {/* Watermark */}
        <div className="absolute top-1/2 left-1/2 w-3/4 opacity-5 -translate-x-1/2 -translate-y-1/2 rotate-[-18deg] pointer-events-none">
          <img src={logoUrl} alt="Watermark" width={500} height={500} />
        </div>

        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4 mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Logo" width={160} height={50} />
            <span className="text-gray-600 font-semibold text-lg">Invoice</span>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>Invoice number: {ad.id.slice(-8).toUpperCase()}</p>
            <p>Date: {formattedStartDate}</p>
          </div>
        </div>

        {/* Company & Ad Info */}
        <div className="grid grid-cols-2 gap-6 text-sm text-gray-700 mb-6 relative z-10">
          <div>
            <h2 className="font-semibold mb-2">Company Information</h2>
            <p><strong>Name:</strong> {ad.companyName}</p>
            <p><strong>Address:</strong> {ad.companyaddress}</p>
            <p><strong>Supervisor:</strong> {ad.supervisedName}</p>
            <p><strong>Phone:</strong> {ad.supervisedPhonenumber}</p>
            {ad.websiteLink && <p><strong>Website:</strong> {ad.websiteLink}</p>}
          </div>
          <div>
            <h2 className="font-semibold mb-2">Advertisement Information</h2>
            <p><strong>Type:</strong> {ad.advertisedCategory}</p>
            <p><strong>Duration:</strong> {formattedStartDate} - {formattedEndDate}</p>
            <p><strong>Total Days:</strong> {durationInDays} days</p>
            <p><strong>Status:</strong> {ad.advertiseStatus}</p>
          </div>
        </div>

        {/* Details */}
        {ad.additionalInfo && (
          <div className="mb-6 relative z-10">
            <h2 className="font-semibold mb-2">Details</h2>
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
          <h2 className="font-semibold mb-2">Calculation</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-3 py-2 text-left font-semibold">Details</th>
                <th className="border px-3 py-2 text-right font-semibold">Rate (Daily)</th>
                <th className="border px-3 py-2 text-right font-semibold">Days</th>
                <th className="border px-3 py-2 text-right font-semibold">Total (SEK)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-3 py-2">
                  Advertisement ({formattedStartDate} - {formattedEndDate})
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
                    Discount ({discountRate}%)
                  </td>
                  <td className="border px-3 py-2 text-right">
                    -{discountAmount.toLocaleString("en-US")}
                  </td>
                </tr>
              )}

              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  Subtotal (After Discount)
                </td>
                <td className="border px-3 py-2 text-right">
                  {priceAfterDiscount.toLocaleString("en-US")}
                </td>
              </tr>

              <tr className="bg-gray-50">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  Moms ({ad.moms}%)
                </td>
                <td className="border px-3 py-2 text-right">
                  {momsAmount.toLocaleString("en-US")}
                </td>
              </tr>

              <tr className="bg-gray-100 font-bold">
                <td className="border px-3 py-2 text-right" colSpan={3}>
                  Total (inkl. Moms)
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
          <h2 className="font-semibold mb-2">Payment Information</h2>
          <p><strong>Bank Name:</strong> Svenska Handelsbanken</p>
          <p><strong>Account Number:</strong> 987 654 321</p>
          <p><strong>Account Name:</strong> Nord International</p>
          <p><strong>Branch:</strong> Stockholm City</p>
          <p><strong>SWIFT Code:</strong> HANDSESS</p>

          <div className="mt-3 p-3 border bg-gray-100 rounded-md">
            <p className="font-semibold text-blue-700">📌 Bank Transfer Reference</p>
            <p>Please use the following reference in your transfer:</p>
            <p className="mt-1 font-bold text-lg">{ad.id.slice(-8).toUpperCase()}</p>
          </div>
        </div>

        {/* Payment Due */}
        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-3 rounded-md text-yellow-800 text-sm relative z-10">
          <p className="font-semibold">🕒 Payment Due Date:</p>
          <p>
            Please make the payment by{" "}
            <span className="font-bold text-red-600">{formattedDueDate}</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-xs text-gray-500 border-t pt-3 leading-6 relative z-10">
          <p>
            This invoice is an automatically generated digital document and does not require a signature.
          </p>
          <p>
            The advertisement will be published on Nord International according to the scheduled time.
          </p>
        </div>
      </div>
    </>
  );
}
