import Image from "next/image";

export default function Page({
  project_name,
  project_desc,
  client_name,
  turnaround,
  team,
  image,
}) {
  return (
    <>
      <div className="max-w-3xl space-y-8 mt-10">
        <p className="text-black font-semibold">Projects</p>
        <h1 className="xl:text-8xl copy-hero  md:text-7xl text-7xl font-semibold  transition-all tracking-tighter text-warmth  ">
          {project_name}
        </h1>
        <p className="text-black max-w-2xl">{project_desc}</p>
        <div className="flex gap-10 text-sm">
          <div className="flex flex-col gap-1">
            <p className="text-neutral-500">Client</p>
            <p className="text-black">{client_name}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-500">Turnaround</p>
            <p className="text-black">{turnaround}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-neutral-500">Team</p>
            <p className="text-black">{team}</p>
          </div>
        </div>
      </div>
      <Image src={image} width={1440} height={576} className="mt-10" />
    </>
  );
}
