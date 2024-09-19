/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Link from "next/link";
import Image from "next/image";
import { SiSpotify } from "react-icons/si";
import { RiPauseCircleFill } from "react-icons/ri";
import useSWR from "swr";
import { ChevronRightIcon, ArrowRightIcon } from "@radix-ui/react-icons";
export default function Footer() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" mb- mt-20">
      <div className=" space-y-6 flex max-w-5xl  m-auto justify-between flex-col text-center ">
        <h2 className=" md:text-5xl text-2xl   md:leading-tight tracking-tighter text-white">
          I'm available for freelance projects —feel free to initiate a project
          and let's explore how we can collaborate.
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:pasapadilah1410@gmail.com"
            className="bg-primary w-64 hover:bg-white  transition-all rounded-md text-center flex items-center gap-2 justify-center font-semibold py-4 "
          >
            Send me an email{" "}
          </a>
        </div>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={
          data?.isPlaying
            ? data.songUrl
            : "https://open.spotify.com/user/313i7psiu76aoznk55gse6p4f4wi"
        }
        className="relative mt-10 flex mx-auto mb-4 items-start px-6 py-4 space-x-4 transition-shadow border border-gray-500 rounded-md hover:shadow-lg hover:shadow-sky-500/50 w-full md:w-96"
      >
        <div>
          {data?.isPlaying ? (
            <Image
              width={100}
              height={20}
              className="w-20 rounded-md shadow-sm"
              src={data?.albumImageUrl}
              alt={data?.album}
            />
          ) : (
            <SiSpotify size={40} color={"#1ED760"} />
          )}
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex justify-between">
            <p>
              {data?.isPlaying ? (
                <RiPauseCircleFill className="text-white" size={24} />
              ) : (
                ""
              )}
            </p>
            <p>
              {data?.isPlaying ? <SiSpotify size={20} color={"#1ED760"} /> : ""}
            </p>
          </div>
          <div>
            <p className="font-bold text-white">
              {data?.isPlaying ? data.title : "Not Listening"}
            </p>
            <p className="text-xs text-gray-500 mt-2">
              {data?.isPlaying ? data.artist : "Spotify"}
            </p>
          </div>
        </div>
      </a>
      <p className="text-neutral-300 text-center text-sm">
        ©{currentYear} Fasha Fadillah
      </p>
    </footer>
  );
}
