/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const currentYear = new Date().getFullYear();
  return (
    <footer className=" mb- mt-20">
      <div className=" space-y-6 flex max-w-5xl  m-auto justify-between flex-col text-center ">
        ie ie
        <h2 className=" md:text-5xl text-2xl   md:leading-tight tracking-tighter text-white">
          I'm available for freelance projects —feel free to initiate a project
          and let's explore how we can collaborate.
        </h2>
        <div className="flex justify-center gap-4">
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href="mailto:pasapadilah1410@gmail.com"
            className="bg-primary w-64 hover:bg-white  transition-all rounded-md text-center flex items-center gap-2 justify-center font-semibold py-4 "
          >
            Send me an email{" "}
            {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
          </a>
        </div>
        <p className="text-neutral-300 text-sm">
          ©{currentYear} Fasha Fadillah
        </p>
      </div>
    </footer>
  );
}
