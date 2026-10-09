"use client";

import { HabitDisplay } from "@/utils/interfaces";
import { FaTrash } from "react-icons/fa";
import { ImFire } from "react-icons/im";

interface Props {
  habits: HabitDisplay[];
  logHabitFunction: (habitId: string) => void
  removeHabitFunction: (habitId: string) => void
}

export default function DisplayHabits({ habits, logHabitFunction, removeHabitFunction }: Props) {
  return (
    <div
      className={`mt-3 grid ${habits.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-3 px-5`}
    >
      {habits.map((habit) => (
        <div
          className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] min-h-15 h-fit text-left"
          key={habit.habitId}
        >
          <div className="flex justify-between items-center">
            <div className="block px-2">
              <p>{habit.habitName} </p>
              <p className="text-[#ffa7f3]">{habit.habitDescription}</p>
            </div>
            <div className="flex items-center gap-4 h-15">
              <button
                className="h-10 w-10 text-2xl flex justify-center items-center border border-gray-350 bg-gray-300 text-gray-400 duration-400 hover:bg-[#FF9501] hover:border-[#FFC801] hover:text-[#FFC801] rounded-full p-1"
                onClick={() => logHabitFunction(habit.habitId)}
              >
                <ImFire />
              </button>
              <button
                className="h-full w-10 text-xl flex justify-center items-center bg-[#c762b9] duration-400 hover:bg-[#ad51a1] rounded-md"
                onClick={() => removeHabitFunction(habit.habitId)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
