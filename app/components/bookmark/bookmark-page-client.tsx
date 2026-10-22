"use client";

import { useEffect, useState } from "react";
import DisplayBookmarkedHabits from "./display-bookmarked-habits";
import { getBookmarkedHabits } from "@/utils/db-actions";
import { HabitDisplay } from "@/utils/interfaces";

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
    <div>
      <DisplayBookmarkedHabits bookmarkedHabits={bookmarkedHabits} setBookmarkedHabits={setBookmarkedHabits}/>
    </div>
  );
}
