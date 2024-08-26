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
                BAIC Promotion Website
              </h1>
            </div>
            <p className="text-lg text-neutral-300">
              Beijing Automotive International Corporation - known by its brand
              name BAIC, was founded in 1958, is headquartered in Beijing,
              China, and its head office, Beijing Automotive Group Co., Ltd. is
              ranked 162nd in the Fortune 500. I helped create a website for
              them because in April they officially opened a branch in Indonesia
            </p>
          </div>
        </div>
      </main>
      <div className="flex gap-20 md:max-w-6xl px-4 m-auto mt-10">
        <div className="flex flex-col   space-y-1">
          <p className="text-neutral-400">Role</p>
          <p className="text-white font-medium">UI Engineer</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Design Tools</p>
          <p className="text-white font-medium">Figma</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Tech Stack</p>
          <p className="text-white font-medium">React, Laravel</p>
        </div>
        <div className="flex flex-col  space-y-1">
          <p className="text-neutral-400">Link</p>
          <a
            href="https://www.baic.co.id/"
            target="_blank"
            className="text-primary hover:opacity-80 transition-all underline font-medium"
          >
            baic.co.id
          </a>
        </div>
      </div>
      <div className=" md:max-w-6xl px-4 m-auto mt-10 ">
        <Image src="/baic.webp" width={1140} height={1140}></Image>
      </div>
      <Footer />
    </>
  );
}
