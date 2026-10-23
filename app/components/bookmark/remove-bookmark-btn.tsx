"use client";

import { unbookmarkHabit } from "@/utils/db-actions";
import { GoBookmarkSlashFill } from "react-icons/go";
import React from "react";
import { HabitDisplay } from "@/utils/interfaces";

interface Props {
  habitId: string;
  setHabits: React.Dispatch<React.SetStateAction<HabitDisplay[]>>;
  habits: HabitDisplay[];
}

export default function RemoveBookmarkButton({
  habitId,
  setHabits,
  habits,
}: Props) {
  const unbookmarkHabitFunction = async (e: React.FormEvent) => {
    e.preventDefault();
    setHabits(habits.filter((h) => h.habitId !== habitId));

    try {
      await unbookmarkHabit(habitId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="h-full w-10 text-xl flex justify-center items-center bg-[#c762b9] duration-400 hover:bg-[#ad51a1] rounded-l-md"
      onClick={unbookmarkHabitFunction}
    >
      <GoBookmarkSlashFill />
    </button>
  );
}
