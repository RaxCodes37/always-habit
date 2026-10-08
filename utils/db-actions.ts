"use server"

import { habitsTable } from "@/schema";
import { db } from "..";

export const newHabit = async (habitName: string, habitDescription: string, creatorName: string, creatorId: string) => {
  await db.insert(habitsTable).values({
    habitName,
    habitDescription,
    creatorName,
    creatorId
  });
}