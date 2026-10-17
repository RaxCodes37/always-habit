"use client";

import { useEffect, useState } from "react";
import HomeNavbar from "../home/home-nav-bar";
import StreakRadarChartComponent from "./streak-radar-chart";
import { getLoggedHabits } from "@/utils/db-actions";
import { LoggedHabits } from "@/utils/interfaces";

interface Props {
  userName: string;
  userId: string;
}

export default function StreakPageClient({ userName, userId }: Props) {
  const [loggedHabits, setLoggedHabits] = useState<LoggedHabits[]>([]);

  useEffect(() => {
    const getLoggedHabitsFunction = async () => {
      setLoggedHabits(await getLoggedHabits(userId, userName));
    };

    getLoggedHabitsFunction();
  }, []);

  return (
    <div className="text-center h-screen w-150 border border-[#f493e7] bg-[#ab549f]">
      <HomeNavbar />

      {loggedHabits.length < 1 ? (
        <div className="flex justify-center mt-10">
          <p className="text-2xl font-bold">No Habits Logged Yet</p>
        </div>
      ) : (
        <StreakRadarChartComponent loggedHabits={loggedHabits} />
      )}
    </div>
  );
}
