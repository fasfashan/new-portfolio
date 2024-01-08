/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import AOS from "aos";
import Lottie from "lottie-react";
import Link from "next/link";
import message from "@/public/message.json";
import "aos/dist/aos.css";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const [isCaseStudyHovered, setIsCaseStudyHovered] = useState(false);
  return (
    <main className="mt-10 grid     grid-cols-12 gap-5 ">
      <div className="xl:col-span-6  md:col-span-12  col-span-12 ">
        <div className="bg-slate-100 min-h-full space-y-6 p-8 rounded-2xl hover:shadow-inner transition-all">
          <div className="flex   justify-between  flex-wrap">
            <Image alt="Avatar" src="/ava.png" height={40} width={40} />
            <span className="text-xs  select-none font-medium py-0 px-2 bg-slate-200 h-fit rounded-md text-black border border-slate-700 ">
              About
            </span>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl  text-slate-900 tracking-tighter max-w-sm">
              {" "}
              <span className="italic font-title font-normal">
                Web designer
              </span>{" "}
              with 3+ years of experience.
            </h1>
            <p className="text-slate-600 ">
              Hello, I'm Fasha—a designer who weaves creativity with code.
              Explore my work below and let's bring your ideas to life!
            </p>
          </div>
          <div className="space-y-3">
            <a
              className="px-4 w-fit font-medium flex items-center gap-1 py-2 bg-white text-black rounded-md  shadow-sm border-neutral-200 border hover:bg-neutral-50 hover:shadow-none transition-all"
              href="mailto:pasapadilah1410@gmail.com"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get In Touch{" "}
              {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
            </a>
            <div className="flex items-center gap-2">
              <Lottie
                className="w-6"
                animationData={message}
                // Other optional props can be added here
              />

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
                speed={20}
                className="md:text-sm text-xs text-black tracking-normal"
                repeat={Infinity}
                deletionSpeed={50}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-3 md:col-span-6 col-span-6   ">
        <div className="bg-slate-100 min-h-full flex flex-col  space-y-6 p-8 rounded-2xl hover:shadow-inner transition-all">
          <div className="flex   justify-between items-center flex-wrap">
            <span className="text-xs py-0  select-none px-2 font-medium bg-slate-200 rounded-md text-black border border-slate-700 ">
              Interest
            </span>
          </div>
          <ul className="text-slate-900 tracking-tight text-sm  md:text-lg space-y-2  ps-0 ms-0">
            <li>UI/UX Design</li>
            <li>Typography</li>
            <li>Programming</li>
            <li>Web Development</li>
            <li>Design Research</li>
            <li>Design Interaction</li>
          </ul>
        </div>
      </div>
      <div className="xl:col-span-3 md:col-span-6 col-span-6   ">
        <div className="bg-slate-100 min-h-full flex flex-col  space-y-6 p-8 rounded-2xl hover:shadow-inner transition-all">
          <div className="flex   justify-between items-center flex-wrap">
            <span className="text-xs py-0 px-2 select-none font-medium bg-slate-200 rounded-md text-black border border-slate-700 ">
              Design Stack
            </span>
          </div>
          <div className="flex gap-4 ">
            <svg
              className="hover:scale-90 transition-all"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <path
                d="M39.0464 39C39.0464 35.3181 42.0312 32.3334 45.713 32.3334C49.3949 32.3334 52.3797 35.3182 52.3797 39C52.3797 42.682 49.3948 45.6667 45.713 45.6667C42.0311 45.6667 39.0464 42.6819 39.0464 39Z"
                fill="#00BCFF"
              />
              <path
                className="animate-pulse"
                d="M25.7134 52.3334C25.7134 48.6515 28.6981 45.6667 32.38 45.6667L35.9328 43.791L39.0467 45.6667V52.3334C39.0467 56.0153 36.0619 59 32.38 59C28.6981 59 25.7134 56.0152 25.7134 52.3334Z"
                fill="#00CF7F"
              />
              <path
                d="M39.0466 19L35.4189 25.3023L39.0466 32.3333H45.6197C49.3017 32.3333 52.2864 29.3485 52.2864 25.6666C52.2864 21.9848 49.3016 19 45.6197 19H39.0466Z"
                fill="#FF7361"
              />
              <path
                d="M25.6196 25.6666C25.6196 29.3485 28.6044 32.3333 32.2863 32.3333L35.8228 33.6992L39.0464 32.3333V19H32.2862C28.6044 19 25.6196 21.9848 25.6196 25.6666Z"
                fill="#FF4D12"
              />
              <path
                d="M25.7134 39C25.7134 42.682 28.6981 45.6666 32.38 45.6666H39.0467V32.3333H32.38C28.6981 32.3333 25.7134 35.3181 25.7134 39Z"
                fill="#B659FF"
              />
            </svg>
            <svg
              className="hover:scale-90 transition-all"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <g clip-path="url(#clip0_268_686)">
                <path
                  d="M26.0834 19.5H51.9167C55.8334 19.5 59 22.6666 59 26.5834V51.4167C59 55.3334 55.8334 58.5001 51.9166 58.5001H26.0834C22.1666 58.5 19 55.3334 19 51.4166V26.5834C19 22.6666 22.1666 19.5 26.0834 19.5Z"
                  fill="#001834"
                />
                <path
                  d="M28 46.85V29.7C28 29.5833 28.05 29.5166 28.1666 29.5166C28.45 29.5166 28.7166 29.5166 29.1 29.5C29.5 29.4833 29.9166 29.4833 30.3666 29.4666C30.8166 29.4499 31.3 29.45 31.8166 29.4333C32.3333 29.4166 32.8333 29.4166 33.3333 29.4166C34.6999 29.4166 35.8333 29.5833 36.7666 29.9333C37.6 30.2166 38.3666 30.6833 39 31.2999C39.5334 31.8333 39.95 32.4833 40.2166 33.1999C40.4666 33.8999 40.6 34.6165 40.6 35.3665C40.6 36.7999 40.2666 37.9832 39.6 38.9165C38.9334 39.8499 38 40.5499 36.9166 40.9499C35.7833 41.3665 34.5333 41.5165 33.1666 41.5165C32.7666 41.5165 32.5 41.5165 32.3333 41.4999C32.1666 41.4833 31.9333 41.4833 31.6166 41.4833V46.8333C31.6333 46.9499 31.55 47.0499 31.4333 47.0666C31.4166 47.0666 31.3999 47.0666 31.3666 47.0666H28.2C28.0666 47.0666 28 47 28 46.85ZM31.6334 32.7333V38.3333C31.8667 38.35 32.0834 38.3667 32.2834 38.3667H33.1667C34.3176 38.3667 35.6467 38.0962 36.45 37.1834C37.1413 36.3978 37.1433 34.8398 36.5834 33.9834C35.9187 32.9668 34.5895 32.6723 33.45 32.7001C33.0166 32.7001 32.6334 32.7001 32.3166 32.7167C31.9834 32.7 31.75 32.7166 31.6334 32.7333Z"
                  fill="#00A9FF"
                />
                <path
                  d="M51.0001 37.3166C50.5001 37.05 49.9667 36.8666 49.4001 36.75C48.7835 36.6166 48.1667 36.5333 47.5335 36.5333C47.2001 36.5167 46.8501 36.5667 46.5335 36.65C46.3168 36.7 46.1335 36.8166 46.0168 36.9833C45.9335 37.1167 45.8835 37.2833 45.8835 37.4333C45.8835 37.5833 45.9501 37.7333 46.0501 37.8667C46.2001 38.0501 46.4001 38.2001 46.6167 38.3167C47.0001 38.5167 47.4001 38.7001 47.8001 38.8667C48.7001 39.1667 49.5667 39.5833 50.3667 40.0833C50.9167 40.4333 51.3667 40.9 51.6834 41.4667C51.95 42.0001 52.0834 42.5833 52.0667 43.1833C52.0834 43.9667 51.8501 44.75 51.4167 45.4C50.9501 46.0666 50.3001 46.5833 49.5501 46.8833C48.7335 47.2333 47.7335 47.4167 46.5335 47.4167C45.7668 47.4167 45.0168 47.3501 44.2668 47.2001C43.6835 47.1001 43.1002 46.9167 42.5668 46.6667C42.4502 46.6001 42.3668 46.4833 42.3835 46.3501V43.4501C42.3835 43.4001 42.4001 43.3334 42.4501 43.3001C42.5001 43.2667 42.5501 43.2834 42.6001 43.3167C43.2501 43.7001 43.9335 43.9667 44.6667 44.1333C45.3001 44.3 45.9667 44.3833 46.6334 44.3833C47.2667 44.3833 47.7167 44.3 48.0167 44.15C48.2834 44.0333 48.4667 43.75 48.4667 43.45C48.4667 43.2166 48.3334 43 48.0667 42.7833C47.8001 42.5667 47.2501 42.3167 46.4334 42C45.5834 41.7 44.8 41.3 44.0667 40.8C43.5501 40.4333 43.1167 39.95 42.8001 39.3833C42.5335 38.85 42.4001 38.2667 42.4167 37.6833C42.4167 36.9667 42.6167 36.2833 42.9834 35.6667C43.4 35.0001 44.0167 34.4667 44.7334 34.1333C45.5167 33.7333 46.5 33.55 47.6834 33.55C48.3667 33.55 49.0667 33.6 49.75 33.7C50.25 33.7666 50.7334 33.9 51.1834 34.0833C51.25 34.1 51.3167 34.1667 51.35 34.2333C51.3667 34.3 51.3834 34.3667 51.3834 34.4333V37.15C51.3834 37.2166 51.35 37.2833 51.3 37.3166C51.1501 37.35 51.0667 37.35 51.0001 37.3166Z"
                  fill="#00A9FF"
                />
              </g>
              <defs>
                <clipPath id="clip0_268_686">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(19 19)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex gap-4 ">
            <svg
              className="hover:scale-90 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <path
                d="M52 20H26C22.134 20 19 23.134 19 27V51.6667C19 55.5327 22.134 58.6667 26 58.6667H52C55.866 58.6667 59 55.5327 59 51.6667V27C59 23.134 55.866 20 52 20Z"
                fill="#330000"
              />
              <path
                d="M39.1316 44H33.1666L31.6266 48.4467C31.6088 48.5933 31.5161 48.6667 31.3483 48.6667H28.5483C28.3616 48.6667 28.2966 48.575 28.3533 48.3917L33.7566 32.3433C33.9092 31.8547 33.9846 31.3452 33.98 30.8333C33.9769 30.8107 33.9792 30.7878 33.9865 30.7662C33.9938 30.7446 34.006 30.7249 34.0221 30.7088C34.0382 30.6927 34.0578 30.6805 34.0794 30.6732C34.101 30.6659 34.124 30.6637 34.1466 30.6667H38.0666C38.18 30.6667 38.245 30.7133 38.2633 30.8033L44.31 48.42C44.3666 48.5867 44.32 48.6667 44.17 48.6667H41.035C40.977 48.6701 40.9193 48.6561 40.8693 48.6264C40.8194 48.5967 40.7796 48.5526 40.755 48.5L39.1316 44ZM33.8333 41H38.48C38.3683 40.755 36.2783 34.0117 36.1283 33.4433H36.1016L33.8333 41Z"
                fill="#FF9A00"
              />
              <path
                d="M47.6517 34C47.3889 34.0112 47.1265 33.9697 46.88 33.8778C46.6335 33.7859 46.408 33.6455 46.2167 33.465C46.0295 33.2747 45.8839 33.0475 45.7892 32.7978C45.6945 32.5482 45.6528 32.2816 45.6667 32.015C45.6543 31.745 45.6981 31.4754 45.7953 31.2232C45.8926 30.971 46.0412 30.7418 46.2317 30.55C46.4246 30.3664 46.6522 30.2232 46.9012 30.1288C47.1502 30.0343 47.4155 29.9905 47.6817 30C47.9483 29.9861 48.2149 30.0279 48.4645 30.1225C48.7141 30.2172 48.9413 30.3628 49.1317 30.55C49.3139 30.7463 49.4551 30.977 49.5469 31.2286C49.6388 31.4801 49.6795 31.7475 49.6667 32.015C49.6806 32.2816 49.6388 32.5482 49.5441 32.7978C49.4495 33.0475 49.3039 33.2747 49.1167 33.465C48.9204 33.6472 48.6897 33.7884 48.4381 33.8803C48.1866 33.9721 47.9192 34.0128 47.6517 34Z"
                fill="#FF9A00"
              />
              <path
                d="M46.0002 48.4167V35.5567C45.9957 35.5263 45.9984 35.4953 46.008 35.4662C46.0176 35.437 46.0339 35.4105 46.0556 35.3888C46.0774 35.3671 46.1038 35.3508 46.133 35.3412C46.1621 35.3315 46.1931 35.3289 46.2235 35.3334H49.1102C49.1405 35.3292 49.1713 35.3321 49.2003 35.3419C49.2293 35.3517 49.2556 35.368 49.2772 35.3896C49.2989 35.4112 49.3152 35.4376 49.3249 35.4666C49.3347 35.4955 49.3376 35.5264 49.3335 35.5567V48.4434C49.338 48.4737 49.3353 48.5047 49.3257 48.5339C49.316 48.563 49.2997 48.5895 49.278 48.6112C49.2563 48.6329 49.2298 48.6492 49.2007 48.6589C49.1715 48.6685 49.1405 48.6712 49.1102 48.6667H46.2502C46.2162 48.6714 46.1817 48.6682 46.1492 48.6573C46.1167 48.6464 46.0872 48.6281 46.063 48.6039C46.0388 48.5796 46.0205 48.5501 46.0096 48.5177C45.9987 48.4852 45.9955 48.4506 46.0002 48.4167Z"
                fill="#FF9A00"
              />
            </svg>
            <svg
              className="hover:scale-90 transition-all"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <path
                d="M27.4688 19H29.2656V20.7812H30.9219V19H32.7188V24.3906H30.9219V22.5938H29.2813V24.3906H27.4688V19ZM35.0938 20.7969H33.5078V19H38.4844V20.7969H36.8906V24.3906H35.0938V20.7969ZM39.2734 19H41.1563L42.3125 20.8984L43.4688 19H45.3516V24.3906H43.5547V21.7188L42.2969 23.6562L41.0391 21.7188V24.3906H39.2734V19ZM46.2422 19H48.0391V22.6094H50.5859V24.3906H46.2422V19Z"
                fill="black"
              />
              <path
                d="M27.4062 55.7969L24.8281 26.8594H53.1719L50.5938 55.7812L38.9766 59"
                fill="#FF4C1E"
              />
              <path
                d="M39 56.5391V29.2344H50.5859L48.375 53.9219L39 56.5391Z"
                fill="#FF651E"
              />
              <path
                d="M30.0938 32.7734H39L40.3243 34.5469L39 36.3203H33.9844L34.3125 39.9531H39L40.3243 41.7929L39 43.4922H31.0625L30.0938 32.7734ZM31.2187 45.2734H34.7812L35.0312 48.1094L39 49.1719L40.4943 50.9422L39 52.875L31.7188 50.8438L31.2187 45.2734Z"
                fill="#EBEBEB"
              />
              <path
                d="M47.875 32.7734H38.9844V36.3203H47.5469L47.875 32.7734ZM47.2266 39.9531H38.9844V43.5H43.3594L42.9453 48.1094L38.9844 49.1719V52.8594L46.25 50.8438L47.2266 39.9531Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex gap-4 ">
            <svg
              className="hover:scale-90 transition-all"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <path
                d="M53.1692 26.8609L50.5874 55.7827L38.9825 59L27.4096 55.7873L24.8306 26.8609H53.1692Z"
                fill="#004CE8"
              />
              <path
                d="M48.3773 53.9411L50.5836 29.2261H39V56.5409L48.3773 53.9411Z"
                fill="#0065F4"
              />
              <path
                d="M30.7427 39.9545L31.0606 43.5021H38.9997L40.5257 41.7283L38.9997 39.9545H30.7427Z"
                fill="#EBEBEB"
              />
              <path
                d="M38.9999 32.7738H38.9877H30.104L30.4265 36.3216H38.9999L40.526 34.5477L38.9999 32.7738Z"
                fill="#EBEBEB"
              />
              <path
                d="M38.9998 52.8593L40.5258 50.978L38.9998 49.1682L38.9842 49.1723L35.0331 48.1055L34.7806 45.276H32.8606H31.2192L31.7163 50.8464L38.9835 52.8638L38.9998 52.8593Z"
                fill="#EBEBEB"
              />
              <path
                d="M31.5 19H35.7969V20.7969H33.2969V22.5938H35.7969V24.3906H31.5V19Z"
                fill="black"
              />
              <path
                d="M36.6562 19H40.9531V20.5625H38.4531V20.875H40.9531V24.4688H36.6562V22.8281H39.1562V22.5156H36.6562V19Z"
                fill="black"
              />
              <path
                d="M41.8125 19H46.1094V20.5625H43.6094V20.875H46.1094V24.4688H41.8125V22.8281H44.3125V22.5156H41.8125V19Z"
                fill="black"
              />
              <path
                d="M43.3564 43.5021L42.9446 48.1032L38.9878 49.1712V52.8621L46.2608 50.8464L46.3141 50.247L47.1478 40.9071L47.2344 39.9545L47.8748 32.7738H38.9878V36.3216H43.9869L43.664 39.9545H38.9878V43.5021H43.3564Z"
                fill="white"
              />
            </svg>
            <svg
              className="hover:scale-90 transition-all"
              width="60"
              height="60"
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="39" cy="39" r="39" fill="#E2E8F0" />
              <g clip-path="url(#clip0_268_686)">
                <path d="M19 19H59V59H19V19Z" fill="#FFDF00" />
                <path
                  d="M45.87 50.2502C46.6757 51.5657 47.724 52.5327 49.578 52.5327C51.1354 52.5327 52.1304 51.7542 52.1304 50.6787C52.1304 49.3898 51.1082 48.9333 49.3939 48.1834L48.4542 47.7802C45.7418 46.6247 43.9399 45.177 43.9399 42.1167C43.9399 39.2977 46.0879 37.1516 49.4446 37.1516C51.8345 37.1516 53.5526 37.9834 54.7907 40.1612L51.8637 42.0405C51.2193 40.885 50.524 40.4298 49.4446 40.4298C48.3437 40.4298 47.6459 41.1282 47.6459 42.0405C47.6459 43.1682 48.3443 43.6247 49.957 44.3231L50.8967 44.7256C54.0904 46.0952 55.8935 47.4913 55.8935 50.6304C55.8935 54.0145 53.235 55.8685 49.6649 55.8685C46.1741 55.8685 43.9189 54.205 42.8154 52.0247L45.87 50.2502ZM32.5919 50.5759C33.1824 51.6235 33.7196 52.5092 35.011 52.5092C36.2459 52.5092 37.025 52.026 37.025 50.1473V37.3663H40.7837V50.198C40.7837 54.0901 38.5018 55.8616 35.171 55.8616C32.1614 55.8616 30.4186 54.3041 29.5322 52.4282L32.5919 50.5759Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_268_686">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(19 19)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
