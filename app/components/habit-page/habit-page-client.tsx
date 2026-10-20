"use client";

import { getSpecificHabit } from "@/utils/db-actions";
import { FullHabitInfo } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DisplayHabitInfo from "./display-habit-info";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/public/always-logo-transparent.png";

interface Props {
  habitId: string;
}

export default function HabitPageClient({ habitId }: Props) {
  const [habitInfo, setHabitInfo] = useState<FullHabitInfo[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getHabitInfo = async () => {
      setHabitInfo(await getSpecificHabit(habitId));
    };

    getHabitInfo();
  }, []);

  return (
    <div className="h-screen w-150 border border-[#f493e7] bg-[#ab549f]">
      <button
        className="m-3 border-2 border-[#f493e7] rounded-md bg-[#ce64c0] duration-400 hover:bg-[#913d86] py-2 px-3"
        onClick={() => router.back()}
      >
        <FaArrowLeft />
      </button>

      <DisplayHabitInfo habitInfo={habitInfo} />

      <Image
        src={Logo}
        width={200}
        height={200}
        alt="App Logo"
        className="fixed left-[5%] top-[2%]"
        onClick={() => router.push("/home")}
      ></Image>
    </div>
  );
}
