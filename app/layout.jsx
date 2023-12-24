import { DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Head from "next/head";
const dm_sans = DM_Sans({ subsets: ["latin"] });
import Navbar from "./navbar";
export const metadata = {
  metadataBase: "https://new-portfolio-ten-silk.vercel.app",
  title: "Fasha Fadillah Portfolio's",
  description: "This is my personal website which contains some of my work",
  twitter: {
    card: "summary_large_image",
    url: "https://new-portfolio-ten-silk.vercel.app/",
    title: "Fasha Fadillah Portfolio's",
    description: "This is my personal website which contains some of my work",
    image: "/og_image.jpg",
    site: "@fasfashan",
    creator: "@fasfashan",
  },
  openGraph: {
    title: "Fasha Fadillah Portfolio's",
    description: "This is my personal website which contains some of my work",
    url: "https://www.muhamadfasha.xyz",
    siteName: "Fasha Fadillah",
    images: [
      {
        url: "/og_image.jpg",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${dm_sans.className} max-w-custom m-auto px-4 md:px-8 xl:px-0`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
