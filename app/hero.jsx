/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronRightIcon,
  ArrowRightIcon,
  RocketIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isCaseStudyHovered, setIsCaseStudyHovered] = useState(false);
  return (
    <main className="mt-20 grid md:grid-cols-12 grid-cols-6 gap-8">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="xl:col-span-7 md:col-span-6 col-span-6  space-y-6"
      >
        <div className="flex items-center gap-2">
          <RocketIcon className=" text-shine " />

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Available for new project",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Available for new opportunity",
              1000,
              "Available for new opportunity — let's jam!",
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-sm"
            repeat={0}
          />
        </div>
        <div className="space-y-2">
          <h1 className="md:text-6xl text-4xl tracking-tighter">
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
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="justify-between md:col-span-5 xl:col-start-9 md:col-start-8 col-span-6  "
      >
        <Image
          className="  "
          width={350}
          height={300}
          src="/hero-section-image.png"
          alt="Fasha"
        />
      </div>
    </main>
  );
}
