"use client";

import { FullHabitInfo } from "@/utils/interfaces";
import { FaEdit } from "react-icons/fa";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

interface Props {
  habitInfo: FullHabitInfo[];
}

export default function DisplayHabitInfo({ habitInfo }: Props) {
  return (
    <div className="mx-3 p-2 border border-[#f493e7] rounded-md bg-[#E077D2]">
      {habitInfo.map((habit) => (
        <div key={habit.habits.habitId}>
          <div className="flex justify-between">
            <div className="block">
              <h2 className="text-2xl font-bold">{habit.habits.habitName}</h2>
              {habit.habits.habitDescription.trim() === "" ? (
                <p className="text-[#ffcbf8]">No description provided</p>
              ) : (
                <p className="text-[#ffcbf8]">
                  {habit.habits.habitDescription}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
