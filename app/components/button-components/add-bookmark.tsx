"use client";

import { bookmarkHabit } from "@/utils/db-actions";
import React from "react";
import { FaBookmark } from "react-icons/fa";

interface Props {
  habitId: string
}

export default function AddBookmarkButton({ habitId }: Props) {
  const bookmarkHabitFunction = async(e: React.FormEvent) => {
    e.preventDefault();

    try {
      await bookmarkHabit(habitId);
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <button className="h-full w-10 text-xl flex justify-center items-center bg-[#c762b9] duration-400 hover:bg-[#ad51a1] rounded-l-md" onClick={bookmarkHabitFunction}>
      <FaBookmark />
    </button>
  );
}
