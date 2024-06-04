import Main from "./components/main";
import Explorations from "./components/gallery";
import Footer from "./components/footer";
import Link from "next/link";
import Portfolio from "./components/portfolio";
export default function Home() {
  return (
    <>
      <div className="max-w-6xl m-auto px-4 py-4 ">
        <Main />
      </div>
      <div className="max-w-6xl m-auto md:px-4 md:py-4 mt-10 ">
        <Portfolio />
      </div>
      <div className="mt-20"></div>

      <hr className="mt-10" />
      <div className="max-w-6xl m-auto px-4 py-4 ">
        <Footer />
      </div>
    </>
  );
}
