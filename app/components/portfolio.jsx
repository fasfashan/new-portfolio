import Image from "next/image";
export default function Portfolio() {
  return (
    <>
      <div className="grid md:gap-2 md:grid-cols-3 grid-cols-2">
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-AI.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-Elearning.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-Comika.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-Fitness.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-Transactions.jpg"
          width={440}
          height={336}
        />
        <Image
          alt="test"
          className="  transition-all "
          src="/Exploration-Skateboard.jpg"
          width={440}
          height={336}
        />
      </div>
    </>
  );
}
