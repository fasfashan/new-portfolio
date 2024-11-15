/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
export default function Main() {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState("Designer");
  const [activeTab, setActiveTab] = useState("Design Exploration");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText === "Designer" ? "Engineer" : "Designer"
      );
    }, 2000); // Ganti teks setiap 4 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
  }, []);
  return (
    <main className="m-auto  gap-8 mt-12  md:max-w-6xl">
      <div className="space-y-4 ">
        <img width={100} src="/Avatar-Fasha.svg" className="m-auto" alt="" />
        <div className="space-y-4 max-w-3xl m-auto">
          <div className="spacey-1">
            <h1 className="md:text-6xl text-center text-3xl tracking-tight text-black md:tracking-tighter">
              I'm a UI{" "}
              <span className="text-primary relative">
                <Typewriter
                  options={{
                    strings: ["Developer.", "Designer."],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <span className="absolute top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="31"
                    viewBox="0 0 27 31"
                    fill="none"
                  >
                    <path
                      d="M6.55511 4.2389C6.19229 4.30805 5.26536 5.87884 4.42247 7.76912C3.12094 10.7129 3.02904 11.2626 3.56125 11.6875C4.86944 12.8149 5.49747 12.2556 6.8909 8.76211C8.34516 4.95049 8.29743 3.82001 6.55511 4.2389Z"
                      fill="#FF6600"
                    />
                    <path
                      d="M13.4036 13.5508C9.48219 16.2246 8.66203 17.2023 10.0486 17.6785C10.6118 17.8719 12.1983 17.0604 14.8514 15.259C17.0672 13.7433 18.8905 12.3834 18.9649 12.1668C19.0244 11.9935 18.6073 11.6565 18.044 11.4631C17.2641 11.1952 16.1148 11.7209 13.4036 13.5508Z"
                      fill="#FF6600"
                    />
                    <path
                      d="M18.9474 21.1467C15.0443 21.7924 11.3973 22.9619 11.5369 23.5427C11.7742 24.5445 13.2513 24.6158 16.6641 23.7049C18.5662 23.244 20.5847 22.7262 21.2088 22.6015C21.8329 22.4767 22.4001 22.2356 22.4745 22.0189C22.787 21.109 21.3125 20.748 18.9474 21.1467Z"
                      fill="#FF6600"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <h1 className="md:text-6xl text-center text-3xl text-black md:tracking-tighter">
              I design and build user-friendly websites. Let's collaborate.
            </h1>
          </div>
        </div>
        <a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          href="mailto:pasapadilah1410@gmail.com"
          className="bg-slate-900 rounded-md m-auto w-64 hover:bg-opacity-80 text-white  transition-all  text-center flex items-center gap-2 justify-center font-semibold py-4"
        >
          Send me an email{" "}
          {isHovered ? <ArrowRightIcon /> : <ChevronRightIcon />}
        </a>
      </div>
      <img
        src="/Image-Hero-Section.png"
        className="mt-20"
        alt="Image Hero Section"
      />
    </main>
  );
}
