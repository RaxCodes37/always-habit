"use client";

import { getSpecificHabit } from "@/utils/db-actions";
import { FullHabitInfo } from "@/utils/interfaces";
import { useEffect, useState } from "react";

interface Props {
  habitId: string;
}

export default function HabitPageClient({ habitId }: Props) {
  const [habitInfo, setHabitInfo] = useState<FullHabitInfo[]>([]);

  useEffect(() => {
    const getHabitInfo = async () => {
      setHabitInfo(await getSpecificHabit(habitId));
    };

    getHabitInfo();
  }, []);

  return <div></div>;
}
