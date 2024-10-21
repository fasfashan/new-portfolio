import {
  HomeIcon,
  RocketIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex  max-w-6xl  m-auto px-4 py-4  items-center pb-4 justify-between border-black">
      <Link
        className="  font-semibold tracking-tight  text-black text-2xl"
        href="/"
      >
        Fasha ©
      </Link>
      <div className="flex gap-4">
        <a
          className="text-black  hover:opacity-50 transition-all  "
          href="https://x.com/fasfashan"
        >
          <TwitterLogoIcon width={20} height={20} />
        </a>
        <a
          className="text-black  hover:opacity-50 transition-all  "
          href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
        >
          <LinkedInLogoIcon width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
