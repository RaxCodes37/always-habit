"use client";

import { HabitDisplay } from "@/utils/interfaces";
import RemoveBookmarkButton from "./remove-bookmark-btn";
import { GrMoreVertical } from "react-icons/gr";
import { useRouter } from "next/navigation";
import DeleteHabitButton from "../home/delete-habit-btn";

interface Props {
  bookmarkedHabits: HabitDisplay[];
  setBookmarkedHabits: React.Dispatch<React.SetStateAction<HabitDisplay[]>>
}

export default function DisplayBookmarkedHabits({ bookmarkedHabits, setBookmarkedHabits }: Props) {
  const router = useRouter();

  return (
    <div>
      {bookmarkedHabits.length < 1 ? (
        <div className="text-center">
          <p>No Habits Bookmarked Yet</p>
        </div>
      ) : (
        <div className={`mt-3 grid grid-cols-1 gap-3 px-5`}>
          {bookmarkedHabits.map((habit) => (
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
                <div className="flex items-center h-15">
                  <RemoveBookmarkButton habitId={habit.habitId} />
                  <DeleteHabitButton habitId={habit.habitId} habits={bookmarkedHabits} setHabits={setBookmarkedHabits}></DeleteHabitButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
