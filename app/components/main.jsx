"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Main() {
  return (
    <main className=" relative gap-5 grid grid-cols-6 mt-10 items-end">
      <div className="md:col-span-3 col-span-6">
        <h1 className="xl:text-9xl copy-hero capitalize md:text-7xl text-7xl font-semibold  transition-all tracking-tighter text-warmth  ">
          User Interface Designer.
        </h1>
      </div>
      <div className="md:col-span-3 space-y-6 col-span-6">
        <p className="text-neutral-600 leading-relaxed font-medium">
          In addition to my passion for design, I also enjoy programming,
          particularly in the front-end domain. This skill enables me to enhance
          my design projects, bringing a comprehensive approach to my work.
        </p>
        <Link
          className="bg-warmth border-2 border-orange-700 btn-cta font-medium rounded-lg transition-all  items-center gap-2 py-3 flex w-fit px-10"
          href="#selected-work"
        >
          Selected Work <ArrowDownIcon className="animate-bounce" />
        </Link>
        <div className="flex items-center gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
          >
            {" "}
            <Image
              className="hover:scale-90 transition-all"
              height={28}
              width={28}
              src="/linkedin.svg"
            />
          </a>
          <a target="_blank" href="https://twitter.com/fasfashan">
            {" "}
            <Image
              className="hover:scale-90 transition-all"
              height={28}
              width={28}
              src="/twitter.svg"
            />
          </a>
          <a target="_blank" href="https://github.com/fasfashan">
            {" "}
            <Image
              className="hover:scale-90 transition-all"
              height={28}
              width={28}
              src="/github.svg"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
