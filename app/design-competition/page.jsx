import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
export default function Page() {
  return (
    <div className="mb-10">
      <Link
        className="text-black flex items-center gap-2 w-fit  mt-10"
        href="/"
      >
        <ArrowLeftIcon /> Back to home
      </Link>
      <div className="mt-10">
        <Image
          className="mt-5"
          width="1440"
          height={200}
          alt="Design Challenge"
          src="/design-competition.png"
        />
        <p className="md:text-xl text-md  md:w-2/4 mt-6  text-neutral-600 ">
          On various occasions, I often take part in design competitions that I
          find on the internet. Apart from earning money (lol), participating in
          competitions certainly trains me in various things in terms of design
        </p>
        <hr className="mt-10" />
      </div>
      <div className="mt-10">
        <div className="max-w-lg space-y-2">
          <h2 className="text-2xl font-medium   text-black">
            Journey with Niagahoster
          </h2>
          <p className="text-neutral-600 text-lg">
            Niagahoster created a #journeywithniagahoster landing page
            competition. Participants must create a landing page containing
            articles about their experiences using Niagahoster services.{" "}
            <a
              className="underline hover:text-neutral-400 transition-all"
              target="_blank"
              href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
            >
              {" "}
              I got 3rd place in this challenge.
            </a>
          </p>
          <div className="text-neutral-600">
            <span>Build with:</span>
            <ul className="flex gap-2 items-center">
              <li>Figma</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="black" />
              </svg>
              <li>HTML</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="black" />
              </svg>
              <li>CSS</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="black" />
              </svg>
              <li>JS</li>
            </ul>
          </div>
        </div>
        <Image
          className="mt-10"
          width="1440"
          height="200"
          src="/Niagahoster.webp"
          alt="Niagahoster"
        />
      </div>
      <div className="mt-20">
        <div className="max-w-lg space-y-2">
          <h2 className="text-2xl font-medium   text-black">
            Dibimbing Web Design Challenge
          </h2>
          <p className="text-neutral-600 text-lg">
            Dibimbing.id making a Beauty of Indonesia web design challange
            competition. In this project I made a single App Application List of
            Volcanoes in Indonesia. I use Vite JS and Tailwind CSS for this
            project.
            <a
              className="underline hover:text-neutral-400 transition-all"
              target="_blank"
              href="https://www.linkedin.com/posts/dibimbing-id_dibimbingid-webdesignchallenge-dibimbingchallenge-activity-7121068536130674689-rluB/"
            >
              {" "}
              I won first place in this challenge.
            </a>
            If you wanna see the website,
            <a
              className="underline hover:text-neutral-400 transition-all"
              target="_blank"
              href="https://dibimbing-web-design-challenge.vercel.app/"
            >
              click here
            </a>
          </p>
          <div className="text-neutral-600">
            <span>Build with:</span>
            <ul className="flex gap-2 items-center">
              <li>Figma</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="black" />
              </svg>
              <li>Vite.js</li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="8" cy="8" r="8" fill="black" />
              </svg>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <Image
          className="mt-10"
          width="1440"
          height="200"
          src="/dibimbing.png"
          alt="dibimbing web design challenge"
        />
      </div>
    </div>
  );
}
