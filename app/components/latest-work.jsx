"use client";
import { useState } from "react";

import {
  BackpackIcon,
  ChevronRightIcon,
  ValueNoneIcon,
} from "@radix-ui/react-icons";
import Footer from "./footer";

export default function LatestWork() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className=" bg-[url('/gradient-bg.jpg')] bg-cover bg-center bg-no-repeat  m-auto md:px-4 py-32 mt-10 ">
        <div className="max-w-6xl m-auto px-4">
          <div className="flex flex-col space-y-8">
            <div className="flex gap-2 items-center">
              <BackpackIcon className="text-white" />
              <p className="text-white font-medium">Case Studies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl text-white font-semibold">
                Smartforex Landing Page
              </h3>
              <p className="text-slate-400 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                doloribus dignissimos magnam vero necessitatibus, ducimus quia
                maiores sunt ratione error.
              </p>
              <a
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/"
                className=" text-white flex items-center w-fit gap-1 hover:text-slate-200 "
              >
                Case studies in progress
                {isHovered ? <ValueNoneIcon /> : <ChevronRightIcon />}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-md">
              <img
                className="w-full rounded-md"
                src="/Smartforex-Preview-1.png"
                alt=""
              />
              <img
                className="w-full rounded-md"
                src="/Smartforex-Preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl m-auto px-4 mt-28">
          <div className="flex flex-col space-y-8">
            <div className="flex gap-2 items-center">
              <BackpackIcon className="text-white" />
              <p className="text-white font-medium">Case Studies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl text-white font-semibold">
                Baic Website
              </h3>
              <p className="text-slate-400 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                doloribus dignissimos magnam vero necessitatibus, ducimus quia
                maiores sunt ratione error.
              </p>
              <a
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/"
                className=" text-white flex items-center w-fit gap-1 hover:text-slate-200 "
              >
                Case studies in progress
                {isHovered ? <ValueNoneIcon /> : <ChevronRightIcon />}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-md">
              <img
                className="w-full rounded-md"
                src="/Baic-preview-1.png"
                alt=""
              />
              <img
                className="w-full rounded-md"
                src="/Baic-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl m-auto px-4 mt-28">
          <div className="flex flex-col space-y-8">
            <div className="flex gap-2 items-center">
              <BackpackIcon className="text-white" />
              <p className="text-white font-medium">Case Studies</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl text-white font-semibold">
                Murni Development Website
              </h3>
              <p className="text-slate-400 max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                doloribus dignissimos magnam vero necessitatibus, ducimus quia
                maiores sunt ratione error.
              </p>
              <a
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                href="/"
                className=" text-white flex items-center w-fit gap-1 hover:text-slate-200 "
              >
                Case studies in progress
                {isHovered ? <ValueNoneIcon /> : <ChevronRightIcon />}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 rounded-md">
              <img
                className="w-full rounded-md"
                src="/Mdev-preview-1.png"
                alt=""
              />
              <img
                className="w-full rounded-md"
                src="/Mdev-preview-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
