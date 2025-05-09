import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/general/Navbar";
import { ThemeProvider } from "@/components/general/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "জাগ্রত বার্তা |ক্রাইম রিপোর্ট | নিরপেক্ষ ও তথ্যভিত্তিক সংবাদমাধ্যম",
  description: "দেশজুড়ে ঘটে যাওয়া সাম্প্রতিক অপরাধ, তদন্তের অগ্রগতি এবং আইনশৃঙ্খলা রক্ষাকারী বাহিনীর পদক্ষেপ নিয়ে জাগ্রত বার্তার অপরাধ বিভাগ আপনাকে পৌঁছে দেয় সঠিক ও আপডেট তথ্য। আমরা প্রতিটি ঘটনার গভীরে গিয়ে তুলে ধরি সত্য এবং সচেতনতা গড়ে তোলার জন্য কাজ করি।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
       <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
       </div>
       </ThemeProvider>
      </body>
    </html>
  );
}
