import AllArticleList from "@/components/general/AllArticleList";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
      <div className="order-3 md:order-1 md:col-span-1 px-2">
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-3 border-y-1 py-2">
          <div className="col-span-1">
            <img
              src="/political.jpg"
              alt="Card Image"
              className="w-32 h-16 object-cover border-1 rounded-xl"
            />
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold ml-2">
              দেশজুড়ে ভারী বৃষ্টিপাত, জনজীবন বিপর্যস্ত
            </h3>
          </div>
        </div>
        <img
          src="/giffb.gif"
          alt="gif image"
          className="w-full h-[100px] rounded-xl"
        />
      </div>
      <div className="order-2 md:order-2 md:col-span-1">
        <div className=" grid grid-cols-1">
          <div>
            <img
              src="/gif111.gif"
              alt="gif image"
              className="w-full h-[150px] rounded-xl"
            />
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-md border mt-2">
            <div className="p-1">
              <h2 className="text-lg font-semibold line-clamp-1">
                কার্ডের শিরোনাম এখানে থাকবে কার্ডের শিরোনাম এখানে থাকবে
              </h2>
            </div>
            <img
              src="/political.jpg"
              alt="Card image"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="bg-primary-foreground mt-4 pt-2 border-1">
            <h1 className="font-bold text-primary text-center text-2xl">
              "শীর্ষ খবর"
            </h1>
            <div className="relative h-56 overflow-y-scroll mx-4 md:mx-0 md:px-1  mb-6 px-4">
              <div className="rounded-xl">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="max-w-sm rounded-lg overflow-hidden shadow-md border m-2"
                  >
                    <div className="p-1">
                      <h2 className="text-lg text-primary/70 font-semibold line-clamp-1">
                        কার্ডের শিরোনাম এখানে থাকবে কার্ডের শিরোনাম এখানে থাকবে
                      </h2>
                    </div>
                  </div>
                ))}
              </div>

              {/* Fade & Scroll Hint */}
              <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-accent-foreground/5 to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <svg
                  className="w-5 h-5 text-gray-400 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-4 border-t-1">
            <img
              src="/save1.gif"
              alt="gif image"
              className="w-[300px] h-[100px] md:h-[150px] rounded-xl"
            />
          </div>
      </div>
      <div className="order-1 md:order-3 md:col-span-3">
        <AllArticleList />
      </div>
    </div>
  );
}
