/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";
export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCaseStudyHovered, setIsCaseStudyHovered] = useState(false);
  return (
    <main className="mt-20 grid grid-cols-12 gap-8">
      <div className="md:col-span-7 col-span-12 space-y-6">
        <div className="flex items-center gap-2">
          <svg
            className="animate-ping"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 16 18"
            fill="none"
          >
            <ellipse cx="8" cy="9.00001" rx="8" ry="8.27586" fill="#F9E08E" />
            <ellipse
              cx="8"
              cy="9.00002"
              rx="5.6092"
              ry="5.88506"
              fill="#FF9201"
            />
          </svg>
          <h2 className="text-sm font-medium">Available for new project</h2>
        </div>
        <div className="space-y-2">
          <h1 className="md:text-6xl text-5xl tracking-tighter">
            Web Designer with 3+ years of experience.
          </h1>
          <p className="text-gray-400 text-lg">
            Hello, I'm Fasha—a designer who weaves creativity with code. Explore
            my work below and let's bring your ideas to life!
          </p>
        </div>
        <div className="flex items-center ">
          <a
            className="px-4 font-medium flex items-center gap-1 py-2 bg-gradient-to-t from-radiance to-warmth hover:opacity-90 transition-all"
            href="mailto:pasapadilah1410@gmail.com"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Get In Touch {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
          </a>
          <a
            className="px-4 hover:text-gray-400 transition-all font-medium flex items-center gap-1 py-2 bg-transparent"
            href="#casestudy"
            onMouseEnter={() => setIsCaseStudyHovered(true)}
            onMouseLeave={() => setIsCaseStudyHovered(false)}
          >
            Case Study
            {isCaseStudyHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
          </a>
        </div>
      </div>
      <div className=" md:col-start-10 col-span-12 md:col-span-5">
        <Image
          className="hover:animate-pulse  transition-all"
          src="/hero-section-image.png"
          width={340}
          height={340}
          style={{ objectFit: "cover" }}
          fill={false}
          alt="Fasha Fadillah"
        />
      </div>
    </main>
  );
}
