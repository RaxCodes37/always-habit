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

            <button className="border-2 border-[#f493e7] rounded-md bg-[#d267c3] duration-400 hover:bg-[#bb58ad] text-2xl pr-3 pl-4">
              <FaEdit />
            </button>
          </div>
          <hr className="my-2 text-[#f493e7]" />
          {habit.habit_log === null || habit.habit_log.logAmount === 0 ? (
            <p className="font-2xl font-bold">
              This habit hasn't been logged yet.
            </p>
          ) : (
            <LineChart
              style={{ width: "90%", aspectRatio: 1.618, maxWidth: 600 }}
              responsive
              data={habitInfo}
            >
              <Line dataKey="habit_log.logAmount" name={habit.habits.habitName}/>
              <XAxis dataKey={`habit_log.loggedAt`} />
              <YAxis />
              <Legend />
            </LineChart>
          )}
        </div>
      ))}
    </div>
  );
}
