import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Bengali,
  Tiro_Bangla,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/general/theme-provider";
import VisitorTracker from "@/components/general/VisitorTracker";
import Script from "next/script";
import ScrollToTopButton from "@/components/general/ScrollToTopButton";
import Poll from "@/components/LivePoll/Poll";
import NewUserTracker from "@/components/general/NewUserTracker";
import RegionalNews from "@/components/general/RegionalNews";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoBengali = Noto_Sans_Bengali({
  weight: ["400", "700"],
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
});

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  subsets: ["bengali"],
  variable: "--font-tiro-bangla",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jagrotobarta.com",
  ),
  title: { default: "জাগ্রত বার্তা", template: "%s | জাগ্রত সংবাদ আপডেট তথ্য" },
  description:
    "দেশজুড়ে ঘটে যাওয়া সাম্প্রতিক অপরাধ, তদন্তের অগ্রগতি এবং আইনশৃঙ্খলা রক্ষাকারী বাহিনীর পদক্ষেপ নিয়ে জাগ্রত বার্তার অপরাধ বিভাগ আপনাকে পৌঁছে দেয় সঠিক ও আপডেট তথ্য। আমরা প্রতিটি ঘটনার গভীরে গিয়ে তুলে ধরি সত্য এবং সচেতনতা গড়ে তোলার জন্য কাজ করি।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@400;700&family=Tiro+Bangla&display=swap"
          rel="stylesheet"
        />
        {/*   google adsense */}
        <meta
          name="google-adsense-account"
          content="ca-pub-5945782633100386"
        ></meta>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5945782633100386"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoBengali.variable} ${tiroBangla.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-7xl mx-auto">{children}</div>

         
          <ScrollToTopButton />
          <VisitorTracker />
          <NewUserTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}
