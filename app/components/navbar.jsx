import { HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex  max-w-6xl  m-auto px-4 py-4  items-center pb-4 justify-between border-black">
      <Link className="text-black   items-center  text-white text-2xl" href="/">
        Fasha ©
      </Link>
      <a
        className="text-white   transition-all flex items-center gap-1 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-lg"
        href="mailto:pasapadilah1410@gmail.com"
      >
        Available for new projects
        <RocketIcon />
      </a>
    </div>
  );
}
