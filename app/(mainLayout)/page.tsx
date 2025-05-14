import AllArticleList, {
  CrimeHEadings,
  ShirShoNewsHeadings,
  SirshoNewsList,
} from "@/components/general/homepageArticleList";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 py-10">
      <SirshoNewsList />
      <div className="order-2 md:order-2 md:col-span-1">
        <div className=" grid grid-cols-1">
          <div>
            <img
              src="/gif111.gif"
              alt="gif image"
              className="w-full h-[150px] rounded-xl"
            />
          </div>

          <CrimeHEadings />
          <div className="bg-primary-foreground mt-4 pt-2 border-1">
            <h1 className="font-bold text-primary text-center text-2xl">
              "শীর্ষ খবর"
            </h1>
            <div className="relative h-56 overflow-y-scroll mx-4 md:mx-0 md:px-1  mb-6 px-4">
              <ShirShoNewsHeadings />

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
