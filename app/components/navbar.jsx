import { HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex  items-center pb-4 justify-between border-black">
      <Link
        className="text-black flex items-center gap-2 bg-primary border-neutral-300 border px-4 py-2 font-semibold rounded-full text-sm"
        href="/"
      >
        <HomeIcon />
        Fasha
      </Link>
      <a
        className="text-black bg-primary    transition-all flex items-center gap-1 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-full"
        href="mailto:pasapadilah1410@gmail.com"
      >
        Available for new projects
        <RocketIcon />
      </a>
    </nav>
  );
}
