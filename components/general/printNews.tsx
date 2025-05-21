import { SquarePlay, LocateIcon } from "lucide-react";

// Update the props to accept individual fields instead of a single data object
interface PrintNewsProps {
    newsPicture: string | null;
    newsPictureHeading: string | null;
    newsPictureCredit: string | null;
    newsLocation: string | null;
    newsDetails: string | null;
    newsResource: string | null;
  }

export default function PrintNews({
  newsPicture,
  newsPictureHeading,
  newsPictureCredit,
  newsLocation,
  newsDetails,
  newsResource,
}: PrintNewsProps) {
  return (
    <div className="w-full">
    <img
      src={newsPicture ?? undefined}
      alt="Description"
      className="w-full h-[300px] md:h-[400px] block md:px-6"
    />
    <div className="flex justify-center mt-2 px-2 mb-10 text-sm text-accent-foreground/75">
      <p className="mr-4">{newsPictureHeading}</p>

      <p>কৃতিত্ব: {newsPictureCredit}</p>
    </div>
    <div className="whitespace-pre-line text-md mg:text-lg">
      <div className="flex flex-row ml-6">
        <SquarePlay />
        <h1 className="text-xl font-bold pl-2 mr-4">পূর্ণ বিবরণ</h1>
        <LocateIcon />
        <p className=" text-xl font-bold">{newsLocation}</p>
      </div>
      <p className="py-6 px-2 text-justify">{newsDetails}</p>
    </div>

    <p className="ml-6 font-extrabold">
      {">>>"}
      {newsResource}
    </p>
  </div>
  );
}
