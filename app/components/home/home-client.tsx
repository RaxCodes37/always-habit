"use client";

import { FaArrowUp, FaPlus, FaX } from "react-icons/fa6";
import HomeNavbar from "./home-nav-bar";
import DisplayHabits from "./display-habits";
import React, { useEffect, useState } from "react";
import { getHabits, logHabit, newHabit, removeHabit } from "@/utils/db-actions";
import { HabitDisplay } from "@/utils/interfaces";

interface Props {
  userName: string;
  userId: string;
}

export default function HomePageClient({ userName, userId }: Props) {
  const [newHabitName, setNewHabitName] = useState<string>("");
  const [newHabitDesc, setNewHabitDesc] = useState<string>("");
  const [habits, setHabits] = useState<HabitDisplay[]>([]);

  useEffect(() => {
    const getHabitFunction = async () => {
      setHabits(await getHabits(userName, userId));
    };

    getHabitFunction();
  }, []);

  const openModal = () => {
    let modal = document.getElementById("modal")!;
    modal.style.display = "block";
  };

  const closeModal = () => {
    let modal = document.getElementById("modal")!;
    modal.style.display = "none";
  };

  const newHabitFunction = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await newHabit(newHabitName, newHabitDesc, userName, userId);

      location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const logHabitFunction = async (habitId: string) => {
    try {
      await logHabit(habitId, userName, userId);
    } catch (error) {
      console.error(error);
    }
  };

  const removeHabitFunction = async (habitId: string) => {
    setHabits(habits.filter((h) => h.habitId !== habitId));

    try {
      await removeHabit(habitId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-center h-screen w-150 border border-[#f493e7] bg-[#ab549f]">
      <HomeNavbar />

      <h2 className="mt-3 text-xl font-semibold">
        Your <span className="underline">Habits</span>
      </h2>

      <DisplayHabits
        habits={habits}
        logHabitFunction={logHabitFunction}
        removeHabitFunction={removeHabitFunction}
      />

      <button
        className="fixed left-[70%] top-[80%] border-2 border-[#f493e7] rounded-md bg-[#e077d2] duration-400 hover:bg-[#ac53a0] text-3xl py-2 px-3"
        onClick={openModal}
      >
        <FaPlus />
      </button>

      <div id="modal">
        <form className="modal-content flex flex-col items-center border-2 rounded-md bg-[#e877d9] border-[#f493e7] text-shadow-black py-2 gap-2">
          <h3 className="text-2xl font-bold my-2">Add a Habit</h3>

          <input
            type="text"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            placeholder="Habit Name"
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2 w-[80%]"
          />

          <textarea
            value={newHabitDesc}
            onChange={(e) => setNewHabitDesc(e.target.value)}
            placeholder="Habit Description (28 char)"
            className="border-2 border-[#f493e7] rounded-md bg-[#ce64c0] py-1 px-2 w-[80%]"
          ></textarea>

          <div className="flex justify-between gap-5 w-[80%]">
            <button
              type="button"
              onClick={closeModal}
              className="close-modal-button w-[50%] flex justify-center border border-[#ff5252] rounded-md bg-[#cd4d4d] duration-400 hover:bg-[#9c3c3c] py-2"
            >
              <FaX />
            </button>

            <button
              type="submit"
              className="w-[50%] flex justify-center items-center border border-[#f493e7] rounded-md bg-[#ce64c0] duration-400 hover:bg-[#913d86] py-2"
              onClick={newHabitFunction}
            >
              <FaArrowUp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
