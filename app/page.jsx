import Image from "next/image";
import Gallery from "./gallery";
import Hero from "./hero";
import CaseStudy from "./case-study";
export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <CaseStudy />
    </>
  );
}
