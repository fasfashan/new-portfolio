import RoundOne from "@/app/components/round-1";
import RoundTwo from "@/app/components/round-2";
import RoundThree from "@/app/components/round-3";
import RoundFour from "@/app/components/round-4";
import RoundFive from "@/app/components/round-5";
import RoundSix from "@/app/components/round-6";
import RoundSeven from "@/app/components/round-7";
export default function Schedule() {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-12 grid-cols-1">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
        <RoundSix />
        <RoundSeven />
      </div>
    </>
  );
}
