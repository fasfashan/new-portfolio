import Image from "next/image";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import CaseStudy from "./components/case-study";
import Footer from "./components/footer";
import DesignChallenge from "./components/design-challenge";
export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudy />
    </>
  );
}
