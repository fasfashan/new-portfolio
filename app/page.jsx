import Main from "./components/main";
import Explorations from "./components/gallery";
import Footer from "./components/footer";
import Link from "next/link";
import Portfolio from "./components/portfolio";
export default function Home() {
  return (
    <div className="">
      <Main />
      <div className="mt-20">
        <Portfolio />
      </div>

      <hr className="mt-10" />
      <Footer />
    </div>
  );
}
