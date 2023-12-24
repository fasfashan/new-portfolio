import Image from "next/image";
import Gallery from "./gallery";
import Hero from "./hero";
import CaseStudy from "./case-study";
import Footer from "./footer";
export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Hero />
      <Gallery />
      <CaseStudy />
      <Footer />
    </>
  );
}
