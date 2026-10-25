"use client";

import { removeHabit } from "@/utils/db-actions";
import { HabitDisplay } from "@/utils/interfaces";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  habitId: string
  setHabits: React.Dispatch<React.SetStateAction<HabitDisplay[]>>
  habits: HabitDisplay[]
}

export default function DeleteHabitButton({habitId, setHabits, habits}: Props) {
  const removeHabitFunction = async (habitId: string) => {
    setHabits(habits.filter((h) => h.habitId !== habitId));

    try {
      await removeHabit(habitId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      className="h-full w-10 text-xl flex justify-center items-center bg-[#c762b9] duration-400 hover:bg-[#ad51a1] rounded-r-md"
      onClick={() => removeHabitFunction(habitId)}
    >
      <FaTrash />
    </button>
  );
}
