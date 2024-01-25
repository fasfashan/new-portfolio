import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex  items-center pb-4 border-b border-neutral-400  justify-between border-black">
      <Link href="/">
        <Image src="/ava.png" alt="Logo" width={40} height={40} />
      </Link>
      <a
        className="text-black bg-white  btn-contact transition-all flex items-center gap-1 text-sm px-8 py-3 border font-medium border-neutral-300   rounded-lg"
        href="mailto:pasapadilah1410@gmail.com"
      >
        <EnvelopeClosedIcon />
        Contact
      </a>
    </nav>
  );
}
