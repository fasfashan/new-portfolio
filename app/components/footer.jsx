/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import {
  ChevronRightIcon,
  ArrowRightIcon,
  PaperPlaneIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" mb- mt-20">
      <div className=" space-y-6 flex max-w-5xl  m-auto justify-between flex-col text-center ">
        <h2 className=" md:text-5xl text-2xl   md:leading-tight tracking-tighter text-slate-900 ">
          I'm available for freelance projects —feel free to initiate a project
          and let's explore how we can collaborate.
        </h2>

        <div className="flex justify-center gap-4">
          <a
            className="text-black bg-primary hover:shadow-lg    transition-all flex items-center gap-2 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-full w-fit text-center"
            href="mailto:pasapadilah1410@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="drop-shadow-xl"> Send me an email </span>
            {isHovered ? <PaperPlaneIcon /> : <EnvelopeClosedIcon />}
          </a>
          <a
            className="text-black bg-white hover:shadow-inner  transition-all flex items-center gap-2 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-full w-fit text-center"
            href="https://www.linkedin.com/in/muhamad-fasha-fadillah/"
          >
            <span className="drop-shadow-xl"> Connect on </span>
            <LinkedInLogoIcon />
          </a>
        </div>
        <p className="text-neutral-500 text-sm">
          ©{currentYear} Fasha Fadillah
        </p>
      </div>
    </footer>
  );
}
