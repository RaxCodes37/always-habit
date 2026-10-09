"use client";

import HomeNavbar from "./home-nav-bar";
import DisplayHabits from "./display-habits";
import React, { useEffect, useState } from "react";
import { getHabits, logHabit, newHabit, removeHabit } from "@/utils/db-actions";
import { HabitDisplay } from "@/utils/interfaces";
import AddHabit from "./add-habit";

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

      <AddHabit
        openModal={openModal}
        closeModal={closeModal}
        newHabitName={newHabitName}
        setNewHabitName={setNewHabitName}
        newHabitDesc={newHabitDesc}
        setNewHabitDesc={setNewHabitDesc}
        newHabitFunction={newHabitFunction}
      />
    </div>
  );
}
