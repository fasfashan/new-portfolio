/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  BackpackIcon,
  BoxIcon,
  BoxModelIcon,
  CalendarIcon,
  HomeIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Tabs } from "flowbite-react";
import RoundOne from "@/app/components/round-1";
import Leaderboard from "@/app/components/leaderboard";
import Schedule from "@/app/components/schedule";
import { MdDashboard } from "react-icons/md";
import Image from "next/image";
export default function Page() {
  return (
    <>
      <Tabs className="mt-4" aria-label="Default tabs" style="default">
        <Tabs.Item active title="standings" icon={HomeIcon}>
          <Leaderboard />
        </Tabs.Item>
        <Tabs.Item title="Schedule" icon={CalendarIcon}>
          <Schedule />
        </Tabs.Item>
        <Tabs.Item title="Prize Pool" icon={BackpackIcon}>
          <Image src="/Prize-Pool.jpg" width={1440} height={1000} />
        </Tabs.Item>
      </Tabs>
    </>
  );
}
