"use client";

import { HabitDisplay } from "@/utils/interfaces";
import { ImFire } from "react-icons/im";

export default function DisplayHabits() {
  const sampleHabits: HabitDisplay[] = [
    {
      habitId: "1",
      habitName: "sample habit",
      habitDescription: "No description provided",
    },
    {
      habitId: "2",
      habitName: "sample habit 2",
      habitDescription: "sample description long ahhh",
    },
    {
      habitId: "3",
      habitName: "sample habit 3",
      habitDescription: "sample description 2",
    },
  ];

  const logHabitFunction = async (habitId: string) => {
    //No async functionality yet, will be added later.
  };

  return (
    <div
      className={`mt-3 grid ${sampleHabits.length === 1 ? "grid-cols-1" : "grid-cols-2"} gap-3 px-5`}
    >
      {sampleHabits.map((habit) => (
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
