import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
export default function Page() {
  return (
    <div className="mb-10">
      <Link
        className="text-black flex items-center gap-2 w-fit  mt-10"
        href="/"
      >
        <ArrowLeftIcon /> Back to home
      </Link>
      <div className="mt-10">
        <Image
          className="mt-5"
          width="1440"
          height={200}
          alt="Design Challenge"
          src="/design-exploration.png"
        />
        <p className="text-xl md:w-2/4   text-neutral-600 ">
          I like to explore design. Seeing designs that have unique layouts adds
          to my inspiration in designing.
        </p>
        <hr className="mt-10" />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10">
        <Image
          className="col-span-2"
          alt="Komika"
          width={1440}
          height={200}
          src="/Komika.png"
        />{" "}
        <Image
          className="border border-neutral-200"
          alt="Dashboard"
          width={1440}
          height={200}
          src="/Dashboard.jpg"
        />
        <Image
          className="border border-neutral-200"
          alt="Staycation Web App"
          width={1440}
          height={200}
          src="/StaycationWeb.jpg"
        />
        <Image
          className="col-span-2 border border-neutral-200"
          alt="Login"
          width={2000}
          height={200}
          src="/login-page.jpg"
        />{" "}
        <Image
          className="col-span-2"
          alt="Prowork"
          width={2000}
          height={200}
          src="/ProWork.png"
        />{" "}
      </div>
    </div>
  );
}
