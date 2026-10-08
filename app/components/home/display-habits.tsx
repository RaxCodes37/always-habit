"use client";

import { HabitDisplay } from "@/utils/interfaces";
import React, { useEffect } from "react";
import { ImFire } from "react-icons/im";

interface Props {
  habits: HabitDisplay[];
  setHabits: React.Dispatch<React.SetStateAction<HabitDisplay[]>>;
}

export default function DisplayHabits({ habits, setHabits }: Props) {
  const logHabitFunction = async (habitId: string) => {
    //No async functionality yet, will be added later.
  };

  return (
    <div
      className={`mt-3 grid ${habits.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-3 px-5`}
    >
      {habits.map((habit) => (
        <div
          className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] py-1 px-2 min-h-15 h-fit text-left"
          key={habit.habitId}
        >
          <div className="flex justify-between items-center">
            <div className="block">
              <p>{habit.habitName} </p>
              <p className="text-[#ffa7f3]">{habit.habitDescription}</p>
            </div>
            <button
              className="h-10 w-10 text-2xl flex justify-center items-center border border-gray-350 bg-gray-300 text-gray-400 duration-400 hover:bg-[#FF9501] hover:border-[#FFC801] hover:text-[#FFC801] rounded-full p-1"
              onClick={() => logHabitFunction(habit.habitId)}
            >
              <ImFire />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
