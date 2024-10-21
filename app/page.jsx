import Main from "./components/main";
import Explorations from "./components/gallery";
import Footer from "./components/footer";

import Link from "next/link";
import useSWR from "swr";
import Portfolio from "./components/portfolio";
import LatestWork from "./components/latest-work";
export default function Home() {
  return (
    <>
      <Main />
      <LatestWork />
    </>
  );
}
