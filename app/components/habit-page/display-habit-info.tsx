"use client";

import { FullHabitInfo } from "@/utils/interfaces";

interface Props {
  habitInfo: FullHabitInfo[];
}

export default function DisplayHabitInfo({ habitInfo }: Props) {
  return (
    <div>
      {habitInfo.map((habit) => (
        <div key={habit.habits.habitId}>
          <div></div>
          {habit.habit_log.logAmount === 0 ? (
            <div>
              <p className="font-2xl font-bold">
                This habit hasn't been logged yet.
              </p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ))}
    </div>
  );
}
