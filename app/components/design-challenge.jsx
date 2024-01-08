"use client";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { useState, useEffect } from "react";
import Image from "next/image";
export default function DesignChallenge() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isCaseStudyHovered, setIsCaseStudyHovered] = useState(false);
  return (
    <div className="mt-40">
      <div className="space-y-20">
        <div className="space-y-6">
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            src="/design-challenge.png"
            width={1440}
            height={200}
            alt="Design Challenge"
          />

          <Image
            data-aos="fade-down"
            data-aos-duration="1000"
            className=""
            src="/challenge.png"
            width={1440}
            height={200}
            alt="Challenge"
          />
          <div
            className="space-y-4"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="text-lg md:w-2/4   text-neutral-600 tracking-tighter">
              I did this challenge to practice my skills in designing and also
              solving problems. I got this challenge from{" "}
              <a
                className=" font-medium underline hover:text-neutral-300 transition-all"
                href="https://twitter.com/borryshasian"
              >
                @borryshasian
              </a>{" "}
              . In this challenge, I have to design at least 15 minutes a day.
            </p>
            <Link
              className="px-4 font-medium flex items-center w-fit gap-1 py-2 bg-gradient-to-t from-radiance to-warmth hover:opacity-90 transition-all"
              href="/design-challenge"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              See challenge{" "}
              {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
