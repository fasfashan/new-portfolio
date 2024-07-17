"use client";
import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("Design Exploration");
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
            activeTab === "Design Exploration"
              ? "bg-white rounded-md shadow-md flex items-center gap-2 text-sm"
              : "hover:bg-neutral-100 rounded-md flex items-center gap-2 text-sm"
          }`}
          onClick={() => handleTabClick("Design Exploration")}
        >
          Design Exploration <RocketIcon />
        </button>
        <button
          className={`py-2 transition-all px-4  ${
            activeTab === "Case Study"
              ? "bg-white rounded-md shadow-md flex items-center gap-2 text-sm"
              : "hover:bg-neutral-100 rounded-md flex items-center gap-2 text-sm"
          }`}
          onClick={() => handleTabClick("Case Study")}
        >
          Case study <BackpackIcon />
        </button>
      </div>

      {activeTab === "Design Exploration" && (
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
      {activeTab === "Case Study" && (
        <div className="grid md:px-0 px-4 md:gap-8 gap-20  md:grid-cols-3 mt-8 grid-cols-1">
          <div className="flex flex-col space-y-4">
            <Image
              alt="test"
              className="  transition-all "
              src="/baic.png"
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
                <p className="text-neutral-400  text-sm">
                  Beijing Automotive International Corporation - well known as
                  its brand BAIC, founded in 1958, is headquartered in Beijing,
                  China, and its head office, Beijing Automotive Group Co., Ltd.
                  is ranked 162th in the Fortune 500.
                </p>
              </div>
            </div>
            <span className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all hover:cursor-not-allowed">
              Case study on progress <Pencil1Icon />{" "}
            </span>
          </div>
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
                <h2 className="font-medium text-lg text-white">
                  Modern Landing Page for MDev
                </h2>
                <p className="text-neutral-400 text-sm">
                  PT Murni Development Indonesia (MDI) is a leading software
                  development services and solution provider company with over
                  31 years of industry expertise. Headquartered in Jakarta and
                  Sydney, MDI serves a global client base.
                </p>
              </div>
            </div>
            <span className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all hover:cursor-not-allowed">
              Case study on progress <Pencil1Icon />{" "}
            </span>
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
              <p className="text-neutral-400 text-sm">
                Delovery is the #1 platform for expressing love and friendship
                in Indonesia. Delovery has more than 10 years of experience in
                helping beloved customers, both companies and individuals, to
                send flower bouquets, parcels/hampers and gifts to 200 cities
                and districts in Indonesia.
              </p>
            </div>
            <span className="text-primary text-sm flex items-center gap-1 hover:text-opacity-50 transition-all hover:cursor-not-allowed">
              Case study on progress <Pencil1Icon />{" "}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
