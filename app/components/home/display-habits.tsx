"use client";

import { HabitDisplay } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { ImFire } from "react-icons/im";
import { GrMoreVertical } from "react-icons/gr";
import AddBookmarkButton from "./add-bookmark-btn";
import DeleteHabitButton from "./delete-habit-btn";
import React from "react";

interface Props {
  habits: HabitDisplay[];
  setHabits: React.Dispatch<React.SetStateAction<HabitDisplay[]>>
  logHabitFunction: (habitId: string, habitName: string) => void;
}

export default function DisplayHabits({
  habits,
  setHabits,
  logHabitFunction,
}: Props) {
  const router = useRouter();

  return (
    <div>
      {habits.length < 1 ? (
        <div className="text-center mt-3">
          <p>No Habits Added Yet</p>
        </div>
      ) : (
        <div className={`mt-3 grid grid-cols-1 gap-3 px-5`}>
          {habits.map((habit) => (
            <div
              className="border-2 border-[#f493e7] rounded-md bg-[#e077d2] min-h-15 h-fit text-left"
              key={habit.habitId}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4 h-15">
                  <button
                    className="h-full w-10 text-xl flex justify-center items-center bg-[#c762b9] duration-400 hover:bg-[#ad51a1] rounded-md"
                    onClick={() => router.push(`habit/${habit.habitId}`)}
                  >
                    <GrMoreVertical />
                  </button>
                  <div className="block px-2">
                    <p>{habit.habitName} </p>
                    <p className="text-[#ffcbf8]">{habit.habitDescription}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 h-15">
                  <button
                    className="h-10 w-10 text-2xl flex justify-center items-center border border-gray-350 bg-gray-300 text-gray-400 duration-400 hover:bg-[#FF9501] hover:border-[#FFC801] hover:text-[#FFC801] rounded-full p-1"
                    onClick={() =>
                      logHabitFunction(habit.habitId, habit.habitName)
                    }
                    id={`log-btn-${habit.habitId}`}
                  >
                    <ImFire />
                  </button>
                  <div className="flex items-center gap-0 h-full">
                    <AddBookmarkButton habitId={habit.habitId}/>
                    <DeleteHabitButton habitId={habit.habitId} habits={habits} setHabits={setHabits}></DeleteHabitButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
