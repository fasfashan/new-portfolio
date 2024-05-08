import Image from "next/image";
export default function Portfolio() {
  return (
    <>
      <div className="grid gap-10 md:grid-cols-3 grid-cols-2">
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - Dashboard Finance.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - Website Skateboard.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - Comika.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - Fitness.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - Agency.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="rounded-lg  transition-all "
          src="/Exploration - AI.jpg"
          width={440}
          height={336}
        />
      </div>
    </>
  );
}
