import Link from "next/link";
import Image from "next/image";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
export default function Page() {
  return (
    <div className="mb-10">
      <Link
        className="text-black flex items-center gap-2 w-fit  mt-10"
        href="/"
      >
        <ArrowLeftIcon /> Back to home
      </Link>
      <div>
        <Image
          className="mt-5"
          width="1440"
          height={200}
          alt="Design Challenge"
          src="/design-challenge.png"
        />
        <p className="md:text-xl text-md  md:w-2/4 mt-6   text-neutral-600 ">
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
        <hr className="mt-10" />
      </div>
      <div className="mt-10 items-center gap-x-4 gap-y-10 grid   grid-cols-4">
        <div className=" md:col-span-2 col-span-4  space-y-6">
          <div className="max-w-lg space-y-2">
            <h2 className="text-xl font-semibold   text-black">
              Create a social networking app focused on connecting people with
              similar hobbies.
            </h2>
            <p className="text-neutral-600 md:text-xl text-md">
              The main idea behind the design of this application is of course
              to bring together people who have the same hobbies. There users
              can join a community, share stories, and also post their
              activities there.
            </p>
          </div>

          <Image
            alt="Task Management"
            width="400"
            height={200}
            src="/hobihub.png"
          />
        </div>
        <div className=" md:col-span-2 col-span-4 space-y-6">
          <div className="max-w-lg space-y-2">
            <h2 className="text-xl font-semibold  text-black">
              Design a mobile app that helps users manage their daily tasks
              efficiently.
            </h2>
            <p className="text-neutral-600 md:text-xl text-md">
              This is a sleek and user-friendly mobile app designed to help
              users manage their daily tasks efficiently. The app focuses on
              simplicity and productivity, making it easy for users to stay
              organized and on top of their to-do lists.
            </p>
          </div>

          <Image
            alt="Task Management"
            width="400"
            height={200}
            src="/task-management.png"
          />
        </div>
      </div>
    </div>
  );
}
