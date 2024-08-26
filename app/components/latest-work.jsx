"use client";
import { useState } from "react";
import Link from "next/link";
import {
  RocketIcon,
  BackpackIcon,
  ChevronRightIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
const workImages = [
  {
    image: "/Exploration-AI.jpg",
    alt: "Exploration AI",
  },
  {
    image: "/Exploration-Elearning.jpg",
    alt: "Exploration Elearning",
  },
  {
    image: "/Exploration-Comika.jpg",
    alt: "Exploration Comika",
  },
  {
    image: "/Exploration-Fitness.jpg",
    alt: "Exploration Fitness",
  },
  {
    image: "/Exploration-Dashboard Finance.jpg",
    alt: "Exploration Dashboard",
  },
  {
    image: "/Exploration-Skateboard.jpg",
    alt: "Exploration Skateboard",
  },
];
export default function LatestWork() {
  const [activeTab, setActiveTab] = useState("Exploration");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div
        className="flex mt-20 p-2 justify-center m-auto rounded-lg bg-neutral-200 w-fit sticky top-6 shadow-xl  space-x-2
       "
      >
        <button
          className={`py-2 transition-all px-4  ${
            activeTab === "Exploration"
              ? "bg-white rounded-md shadow-md flex items-center gap-2 text-sm"
              : "hover:bg-neutral-100 rounded-md flex items-center gap-2 text-sm"
          }`}
          onClick={() => handleTabClick("Exploration")}
        >
          Exploration <RocketIcon />
        </button>
        <button
          className={`py-2 transition-all px-4  ${
            activeTab === "Project"
              ? "bg-white rounded-md shadow-md flex items-center gap-2 text-sm"
              : "hover:bg-neutral-100 rounded-md flex items-center gap-2 text-sm"
          }`}
          onClick={() => handleTabClick("Project")}
        >
          Project <BackpackIcon />
        </button>
      </div>

      {activeTab === "Exploration" && (
        <div className="grid md:gap-10 md:grid-cols-2 mt-8 grid-cols-2">
          {workImages.map(function (data) {
            return (
              <Image
                alt={data.alt}
                className="  md:rounded-md "
                src={data.image}
                width={1000}
                height={336}
                key={data.id}
              />
            );
          })}
        </div>
      )}
      {activeTab === "Project" && (
        <div className="grid md:px-0 px-4 md:gap-8 gap-20  md:grid-cols-3 mt-8 grid-cols-1">
          <div className="flex flex-col space-y-4">
            <Image
              alt="test"
              className="  transition-all "
              src="/mdev.jpg"
              width={440}
              height={336}
            />
            <div className="space-y-4">
              <h3 className="text-neutral-400 text-sm ">
                Tools: <span className="text-white">Figma, Wordpress</span>
              </h3>
              <div className="space-y-1">
                <h2 className="font-medium text-lg text-white">Mdev Website</h2>
              </div>
            </div>
            <Link
              href="/portfolio/mdev"
              className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all "
            >
              See project <ChevronRightIcon />{" "}
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Image
              alt="test"
              className="  transition-all "
              src="/Baic.png"
              width={440}
              height={336}
            />
            <div className="space-y-4">
              <h3 className="text-neutral-400 text-sm ">
                Tools: <span className="text-white">Figma, React, Laravel</span>
              </h3>
              <div className="space-y-1">
                <h2 className="font-medium text-lg text-white">
                  BAIC Promotion Website
                </h2>
              </div>
            </div>
            <Link
              href="/portfolio/baic"
              className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all "
            >
              See project <ChevronRightIcon />{" "}
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <Image
              alt="test"
              className="  transition-all "
              src="/delovery.jpg"
              width={440}
              height={336}
            />
            <div className="space-y-1">
              <h3 className="text-neutral-400 text-sm ">
                Tools: <span className="text-white">HTML, CSS, Boostrap</span>
              </h3>
              <h2 className="font-medium text-lg text-white">
                Visual Refreshment Delovery
              </h2>
            </div>
            <span className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all hover:cursor-not-allowed">
              Project on progress <Pencil1Icon />{" "}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
