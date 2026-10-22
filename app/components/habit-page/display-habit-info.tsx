"use client";

import { editHabit } from "@/utils/db-actions";
import { FullHabitInfo } from "@/utils/interfaces";
import { useState } from "react";
import { Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import EditHabitComponent from "./edit-habit";

interface Props {
  habitInfo: FullHabitInfo[];
}

export default function DisplayHabitInfo({ habitInfo }: Props) {
  const [newHabitName, setNewHabitName] = useState<string>("");
  const [newHabitDesc, setNewHabitDesc] = useState<string>("");

  const openModal = () => {
    let modal = document.getElementById("modal")!;
    modal.style.display = "block";
  };

  const closeModal = () => {
    let modal = document.getElementById("modal")!;
    modal.style.display = "none";
  };

  const editHabitFunction = async (habitId: string) => {
    event?.preventDefault();

    try {
      await editHabit(newHabitName, newHabitDesc, habitId);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

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

            <EditHabitComponent
              openModal={openModal}
              closeModal={closeModal}
              newHabitName={newHabitName}
              setNewHabitName={setNewHabitName}
              newHabitDesc={newHabitDesc}
              setNewHabitDesc={setNewHabitDesc}
              editHabitFunction={editHabitFunction}
              habitId={habit.habits.habitId}
            />
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
              className="mt-4"
            >
              <Line
                dataKey="habit_log.logAmount"
                name={habit.habits.habitName}
                stroke="#ffc4f7"
                fill="#ffc4f7"
              />
              <XAxis
                dataKey="habit_log.loggedAt"
                stroke="#ffc4f7"
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })
                }
              />
              <YAxis stroke="#ffc4f7" />
              <Legend
                formatter={(value) => (
                  <span style={{ color: "#ffc4f7" }}>{value}</span>
                )}
              />
            </LineChart>
          )}
        </div>
      ))}
    </div>
  );
}
