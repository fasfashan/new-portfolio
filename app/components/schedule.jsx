import RoundOne from "@/app/components/round-1";
import RoundTwo from "@/app/components/round-2";
export default function Schedule() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-8 grid-cols-1">
        <RoundOne />
        <RoundTwo />
      </div>
    </>
  );
}
