/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Figma from "@/public/figma";
import Framer from "@/public/framer";
import Wordpress from "@/public/wordpress";
import Vscode from "@/public/vscode";
import Link from "next/link";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function Main() {
  return (
    <main className="mt-10">
      <div className="max-w-4xl space-y-6">
        <div className="space-y-4">
          <h1 className="md:text-7xl copy-hero  text-5xl font-semibold  transition-all tracking-tighter text-black  ">
            Fasha Fadillah is a User Interface Designer.
          </h1>
          <p className="text-neutral-600 text-lg max-w-2xl leading-normal font-subtitle">
            Proficient in Figma and skilled in Wordpress and Framer, I create
            dynamic websites with seamless user experiences. Let's work together
            to elevate your projects!
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            className="text-black bg-primary hover:shadow-lg btn-selected   transition-all flex items-center gap-1 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-full"
            href="#selected-works"
          >
            Selected works
            <ChevronRightIcon className="chevron transition-transform duration-300 " />
          </Link>
          <a
            className="text-black border border-neutral-300 hover:shadow-inner  btn-selected   transition-all flex items-center gap-1 text-sm px-4 py-2  font-medium   rounded-full"
            href="mailto:pasapadilah1410@gmail.com"
          >
            Contact me
            <ChevronRightIcon className="chevron transition-transform duration-300 " />
          </a>
        </div>
        <div className="flex gap-4">
          <Figma />
          <Framer />
          <Wordpress />
          <Vscode />
        </div>
      </div>
    </main>
  );
}
