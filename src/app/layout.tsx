import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Webring } from "@/components/Webring";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Bancha Suphi',
  description: ``,
  images: [
    {
      url: 'https://lh3.googleusercontent.com/a/ACg8ocJl6Yr607SyJ-4qtKDVks21ElvmMNHsGWMtyEgoQI8R1Gs=s288-c-no',
      width: 800,
      height: 600,
    },
    {
      url: 'https://lh3.googleusercontent.com/a/ACg8ocJl6Yr607SyJ-4qtKDVks21ElvmMNHsGWMtyEgoQI8R1Gs=s288-c-no',
      width: 1800,
      height: 1600,
      alt: 'Bancha Suphi',
    },
  ],
  openGraph: {
    title: 'Bancha Suphi',
    description: ``,
    url: 'https:phumrapee.me',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/a/ACg8ocJl6Yr607SyJ-4qtKDVks21ElvmMNHsGWMtyEgoQI8R1Gs=s288-c-no',
        width: 800,
        height: 600,
      },
      {
        url: 'https://lh3.googleusercontent.com/a/ACg8ocJl6Yr607SyJ-4qtKDVks21ElvmMNHsGWMtyEgoQI8R1Gs=s288-c-no',
        width: 1800,
        height: 1600,
        alt: 'Bancha Suphi',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Webring />
        <Navbar />
        <div className="flex justify-center">
          <div className="container px-5">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
