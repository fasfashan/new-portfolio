/* eslint-disable react/no-unescaped-entities */

import Tabs from "@/app/components/tabs";
export const metadata = {
  title: "Rebel Project League",
  description: "Ini bukan sekadar permainan, ini tentang harga diri",
  twitter: {
    card: "summary_large_image",
    url: "https://new-portfolio-ten-silk.vercel.app/",
    title: "Rebel Project League",
    description: "Ini bukan sekadar permainan, ini tentang harga diri",
    image: "/og_image_league.jpg",
    site: "@fasfashan",
    creator: "@fasfashan",
  },
  openGraph: {
    title: "Rebel Project League",
    description: "Ini bukan sekadar permainan, ini tentang harga diri",
    url: "https://www.muhamadfasha.xyz",
    siteName: "Fasha Fadillah",
    images: [
      {
        url: "/og_image_league.jpg",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Tabs />
    </>
  );
}
