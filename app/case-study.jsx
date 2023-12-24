import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
export default function CaseStudy() {
  return (
    <>
      <div id="casestudy" className="grid-cols-12 grid mt-40 mb-20">
        <div className=" flex flex-wrap gap-8 col-span-12 justify-between ">
          <div className="space-y-2">
            {" "}
            <h3 className="text-4xl">Landing Page Competition</h3>
            <p className="max-w-md text-lg text-neutral-400">
              Niagahoster created a #journeywithniagahoster landing page
              competition. Participants must create a landing page containing
              articles about their experiences using Niagahoster services.{" "}
              <a
                className="underline hover:text-white transition-all"
                href="https://www.instagram.com/p/CgCGq_VPFur/?utm_source=ig_web_copy_link"
              >
                I got 3rd place in this challenge.
              </a>
            </p>
          </div>
          <div>
            <div className="flex  flex-col space-y-4">
              <div className="space-y-1">
                <p>
                  Design tool: <span className="text-neutral-400">Figma</span>
                </p>
                <p>
                  Tech Stack:{" "}
                  <span className="text-neutral-400">HTML, CSS, JS.</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="col-span-12 mt-20 w-full"
          width={2000}
          height={1000}
          maxWidth="100"
          src="/Niagahoster.png"
        />
      </div>
      <div className="grid-cols-12 grid mt-40 mb-20">
        <div className=" flex flex-wrap gap-8 col-span-12 justify-between ">
          <div className="space-y-2">
            {" "}
            <h3 className="text-4xl">Coworking Space Web App</h3>
            <p className="max-w-md text-lg text-neutral-400">
              ProWork is a co-working space project developed by PT Murni
              Solusindo Nusantara (PT Murni). This project is made based on PT
              Murni’s commitment to empower business and its people, by
              providing well-designed and functional spaces to work in.
            </p>
          </div>
          <div>
            <div className="flex  flex-col space-y-4">
              <div className="space-y-1">
                <p>
                  Design tool: <span className="text-neutral-400">Figma</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="col-span-12 mt-20 w-full"
          width={1500}
          height={1000}
          maxWidth="100"
          src="/ProWork.png"
          alt="ProWork"
        />
      </div>
      <div className="grid-cols-12 grid mt-40 mb-20">
        <div className=" flex flex-wrap gap-8 col-span-12 justify-between ">
          <div className="space-y-2">
            {" "}
            <h3 className="text-4xl">Redesign Comika.id</h3>
            <p className="max-w-md text-lg text-neutral-400">
              Comika.id is a platform for purchasing digital downloads of stand
              up comedy in Indonesia. As a user there, I found that there were
              many things that could be changed in terms of design and
              experience
            </p>
          </div>
          <div>
            <div className="flex  flex-col space-y-4">
              <div className="space-y-1">
                <p>
                  Design tool: <span className="text-neutral-400">Figma</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="col-span-12 mt-20 w-full"
          width={1500}
          height={1000}
          maxWidth="100"
          src="/Komika.png"
          alt="Comika.id"
        />
      </div>
    </>
  );
}
