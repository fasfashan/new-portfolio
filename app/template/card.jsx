import Image from "next/image";
import Link from "next/link";
export default function Card({ link, image, project_type, project_name, alt }) {
  return (
    <div className="hover:-translate-y-4 hover:shadow-md rounded-lg    duration-700 flex  transition-all">
      <Link href={link}>
        <Image
          alt={project_name}
          className="rounded-t-lg"
          src={image}
          width={440}
          height={336}
        />
        <div className="bg-white space-y-1  rounded-b-lg py-5 px-5">
          <h3 className="text-gray-400 text-sm ">{project_type}</h3>
          <h2 className="text-black font-medium">{project_name}</h2>
        </div>
      </Link>
    </div>
  );
}
