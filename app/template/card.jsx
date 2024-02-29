import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Card({ link, image, project_type, project_name, alt }) {
  return (
    <div
      id="selected-works"
      className="card  duration-700 flex  transition-all"
    >
      <Link href={link}>
        <Image
          alt={project_name}
          className="rounded-lg hover:scale-105 transition-all "
          src={image}
          width={440}
          height={336}
        />
        <div className="   items-center  rounded-b-lg ">
          <div className="flex mt-8 justify-between">
            <h3 className="text-black font-medium text-sm ">{project_name}</h3>
            <div className="p-2 arrow transition-transform duration-300  rounded-full bg-primary">
              <ArrowRightIcon className="text-black arrow transition-transform duration-300 " />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
