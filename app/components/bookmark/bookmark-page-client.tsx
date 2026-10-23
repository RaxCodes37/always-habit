"use client";

import { useEffect, useState } from "react";
import DisplayBookmarkedHabits from "./display-bookmarked-habits";
import { getBookmarkedHabits } from "@/utils/db-actions";
import { HabitDisplay } from "@/utils/interfaces";
import HomeNavbar from "../home/home-nav-bar";

interface Props {
  userId: string;
}

export default function BookmarkPageClient({ userId }: Props) {
  const [bookmarkedHabits, setBookmarkedHabits] = useState<HabitDisplay[]>([]);

  useEffect(() => {
    const getBookmarkedHabitsFunction = async () => {
      setBookmarkedHabits(await getBookmarkedHabits(userId));
    };

    getBookmarkedHabitsFunction();
  }, []);

  console.log(bookmarkedHabits)

  return (
    <div className="text-center h-screen w-150 border border-[#f493e7] bg-[#ab549f]">
      <HomeNavbar />

      <h2 className="mt-5 text-3xl font-semibold"><span className="underline">Bookmarked</span> Habits</h2>

      <DisplayBookmarkedHabits bookmarkedHabits={bookmarkedHabits} setBookmarkedHabits={setBookmarkedHabits}/>
    </div>
  );
}
