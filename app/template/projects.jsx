/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useState } from "react";
import { PaperPlaneIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
export default function Page({ project_name, project_desc, images }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className=" grid md:grid-cols-6 grid-cols-4 gap-6  mt-10">
        <div className=" col-span-4 gap-10 flex flex-col">
          {images.map((image, index) => (
            <Image
              className="border border-neutral-200 rounded-md"
              key={index}
              src={image}
              alt={project_name}
              width={2000}
              height={576}
            />
          ))}
        </div>
        <div className="md:col-span-2 col-span-4 rounded-lg space-y-6 h-fit lg:sticky top-36">
          <div className="space-y-2">
            <h1 className="text-xl  copy-hero font-medium  transition-all tracking-tight text-black  ">
              {project_name}
            </h1>
            <p className="text-neutral-600 text-sm  ">{project_desc}</p>
          </div>
          <hr />
          <div className="p-4 shadow-sm border space-y-4 border-neutral-200 rounded-md">
            <h2 className=" text-base     text-center text-black ">
              I'm available for freelance projects —feel free to initiate a
              project and let's explore how we can collaborate.
            </h2>
            <a
              className="text-black bg-primary  hover:shadow-lg justify-center   transition-all flex items-center gap-2 text-sm px-4 py-2 border font-medium border-neutral-300   rounded-full w-full"
              href="mailto:pasapadilah1410@gmail.com"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="drop-shadow-xl"> Send me an email </span>
              {isHovered ? <PaperPlaneIcon /> : <EnvelopeClosedIcon />}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
