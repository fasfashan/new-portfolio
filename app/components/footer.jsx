/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState } from "react";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <footer className="mt-20 px-4">
      <div className="space-y-6 px-4  bg-[url('/bg-cta.jpg')] rounded-md bg-cover bg-center py-10 flex max-w-6xl m-auto justify-between flex-col text-center">
        <h2 className="md:text-5xl md:max-w-3xl m-auto text-2xl md:leading-tight tracking-tighter text-white">
          I'm available for freelance projects —feel free to initiate a project
          and let's explore how we can collaborate.
        </h2>
        <div className="flex justify-center gap-4">
          <a
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            href="mailto:pasapadilah1410@gmail.com"
            className="bg-white rounded-md m-auto w-64 hover:bg-opacity-80 text-black  transition-all  text-center flex items-center gap-2 justify-center font-semibold py-4"
          >
            Send me an email{" "}
            {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
          </a>
        </div>
        <p className="text-neutral-300 text-center text-sm">
          ©{currentYear} Fasha Fadillah
        </p>
      </div>
    </footer>
  );
}
