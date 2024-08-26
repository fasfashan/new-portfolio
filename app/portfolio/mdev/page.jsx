/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Footer from "@/app/components/footer";
export default function App() {
  return (
    <>
      <main className="m-auto px-4 gap-8 mt-12 grid grid-cols-12 md:max-w-6xl">
        <div className="space-y-10 md:col-span-6 col-span-12 ">
          <div className="space-y-4">
            <h2 className="text-primary">Web Design</h2>
            <div className="spacey-1">
              <h1 className="md:text-6xl text-3xl tracking-tight text-white md:tracking-tighter">
                Mdev Website
              </h1>
            </div>
            <p className="md:text-lg text-base text-neutral-300">
              PT Murni Development Indonesia (MDI) is a leading software
              development services and solution provider company with over 31
              years of industry expertise. Headquartered in Jakarta and Sydney,
              MDI serves a global client base. I helped them create a modern and
              comfortable web design.
            </p>
          </div>
        </div>
      </main>
      <div className="flex md:flex-row flex-col gap-8  md:max-w-6xl px-4 m-auto mt-10">
        <div className="flex flex-col   space-y-1">
          <p className="text-neutral-400">Role</p>
          <p className="text-white font-medium">Web Designer</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Design Tools</p>
          <p className="text-white font-medium">Figma</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Tech Stack</p>
          <p className="text-white font-medium">Wordpress, Elementor</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Link</p>
          <a
            href="https://mdev.co.id/"
            target="_blank"
            className="text-primary underline font-medium"
          >
            mdev.co.id
          </a>
        </div>
      </div>
      <div className=" md:max-w-6xl px-4 m-auto mt-10 ">
        <Image src="/mdev.webp" width={1140} height={1140}></Image>
      </div>
      <Footer />
    </>
  );
}
