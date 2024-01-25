/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import {
  ChevronRightIcon,
  ArrowRightIcon,
  PaperPlaneIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const currentYear = new Date().getFullYear();
  return (
    <footer className="  gap-5 bg-white rounded-lg  mb-10 p-8 mt-20">
      <div className=" space-y-4  ">
        <h2 className=" md:text-5xl text-2xl   md:leading-tight tracking-tight text-slate-900 max-w-4xl">
          I'm available for freelance projects —feel free to initiate a project
          and let's explore how we can collaborate.
        </h2>
        <a
          className="text-black bg-white  btn-contact transition-all flex items-center gap-1 text-sm px-8 py-3 border font-medium border-neutral-300   rounded-lg w-fit"
          href="mailto:pasapadilah1410@gmail.com"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="drop-shadow-xl"> Send me an email </span>
          {isHovered ? <PaperPlaneIcon /> : <EnvelopeClosedIcon />}
        </a>
        <p></p>
      </div>
    </footer>
  );
}
