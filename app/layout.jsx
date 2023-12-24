import { DM_Sans } from "next/font/google";

import "./globals.css";
import Head from "next/head";
const dm_sans = DM_Sans({ subsets: ["latin"] });
import Navbar from "./navbar";
export const metadata = {
  title: "Fasha Fadillah Portfolio's",
  description: "My portfolio's",
  twitter: {
    card: "summary_large_image",
    title: "Fasha Fadillah Portfolio's",
    description: "This is my personal website which contains some of my work",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  openGraph: {
    title: "Fasha Fadillah Portfolio's",
    description: "This is my personal website which contains some of my work",
    url: "muhamadfasha.xyz",
    siteName: "Fasha Fadillah Portfolio's",
    images: [
      {
        url: "/og_image.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 600,
        alt: "Og Image",
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
      </body>
    </html>
  );
}
