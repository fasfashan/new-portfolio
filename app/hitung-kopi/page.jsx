/* eslint-disable react/no-unescaped-entities */

import HitungKopi from "@/app/components/hitung-kopi";
export const metadata = {
  title: "Hitung Kopi | Digital Marketing",
  description: "Ayo dihitung dan dibayar!",
  twitter: {
    card: "summary_large_image",
    url: "https://www.muhamadfasha.xyz",
    title: "Hitung Kopi | Digital Marketing",
    description: "Ayo dihitung dan dibayar!",
    image: "/og_image_league.jpg",
    site: "@fasfashan",
    creator: "@fasfashan",
  },
  openGraph: {
    title: "Hitung Kopi | Digital Marketing",
    description: "Ayo dihitung dan dibayar!",
    url: "https://www.muhamadfasha.xyz",
    siteName: "Fasha Fadillah",
    images: [
      {
        url: "/og_image_kopi.jpg",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <HitungKopi />
    </>
  );
}
