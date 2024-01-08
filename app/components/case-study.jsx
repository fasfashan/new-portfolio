"use client";
import Image from "next/image";
import {
  ExternalLinkIcon,
  ChevronRightIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function CaseStudy() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" grid mb-5 mt-5 grid-cols-12 gap-5">
      <div className="md:col-span-4 col-span-12 rounded-2xl px-8 pt-10 hover:shadow-inner transition-all bg-slate-100    ">
        <div className="  min-h-full justify-between flex flex-col   space-y-6 ">
          <div className="place-content-end flex">
            <Link
              className="px-4  w-fit hover:scale-90 font-medium flex  gap-1 py-4 bg-white text-black rounded-full  shadow-sm border-neutral-200 border hover:bg-neutral-50 hover:shadow-none transition-all"
              href="/design-challenge"
            >
              <ArrowTopRightIcon className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex space-y-4 flex-col items-center">
            <Image
              alt="design-challenge"
              src="/design-challenge.png"
              height={146}
              width={325}
            />
            <Image
              alt="design-challenge"
              className="hover:translate-x-4 transition-all"
              src="/bg-design-challenge.png"
              height={146}
              width={325}
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-4 col-span-12 rounded-2xl px-8 pt-10 hover:shadow-inner transition-all bg-slate-100    ">
        <div className="  min-h-full justify-between flex flex-col   space-y-6 ">
          <div className="place-content-end flex">
            <Link
              className="px-4  w-fit hover:scale-90 font-medium flex  gap-1 py-4 bg-white text-black rounded-full  shadow-sm border-neutral-200 border hover:bg-neutral-50 hover:shadow-none transition-all"
              href="/design-exploration"
            >
              <ArrowTopRightIcon className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <Image
              alt="design-exploration"
              src="/design-exploration.png"
              height={146}
              width={325}
            />
            <Image
              alt="design-exploration"
              className="hover:-translate-x-4 transition-all"
              src="/bg-design-exploration.png"
              height={146}
              width={325}
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-4 col-span-12 rounded-2xl px-8 pt-10 hover:shadow-inner transition-all bg-slate-100    ">
        <div className=" overflow-hidden min-h-full justify-between flex flex-col   space-y-6 ">
          <div className="place-content-end flex">
            <Link
              className="px-4  w-fit hover:scale-90 font-medium flex  gap-1 py-4 bg-white text-black rounded-full  shadow-sm border-neutral-200 border hover:bg-neutral-50 hover:shadow-none transition-all"
              href="/design-competition"
            >
              <ArrowTopRightIcon className="w-6 h-6" />
            </Link>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <Image
              alt="design-competition"
              src="/design-competition.png"
              height={146}
              width={325}
            />
            <Image
              alt="design-competition"
              className="hover:translate-y-4 transition-all"
              src="/bg-design-competition.png"
              height={146}
              width={325}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
