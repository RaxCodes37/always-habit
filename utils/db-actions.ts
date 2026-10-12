"use server";

import { habitLogTable, habitsTable } from "@/schema";
import { db } from "..";
import { and, eq } from "drizzle-orm";
import { HabitDisplay, LoggedHabits } from "./interfaces";

export const newHabit = async (
  habitName: string,
  habitDescription: string,
  creatorName: string,
  creatorId: string,
) => {
  await db.insert(habitsTable).values({
    habitName,
    habitDescription,
    creatorName,
    creatorId,
  });
};

export const getHabits = async (creatorName: string, creatorId: string) => {
  const habits = await db
    .select({
      habitId: habitsTable.habitId,
      habitName: habitsTable.habitName,
      habitDescription: habitsTable.habitDescription,
    })
    .from(habitsTable)
    .where(
      and(
        eq(habitsTable.creatorId, creatorId),
        eq(habitsTable.creatorName, creatorName),
      ),
    );

  return habits as HabitDisplay[];
};

export const removeHabit = async (habitId: string) => {
  await db
    .delete(habitLogTable)
    .where(eq(habitLogTable.loggedHabitId, habitId));
  await db.delete(habitsTable).where(eq(habitsTable.habitId, habitId));
};
export const logHabit = async (
  loggedHabitId: string,
  loggerName: string,
  loggerId: string,
) => {
  await db.insert(habitLogTable).values({
    loggedHabitId,
    loggerId,
    loggerName,
  });
};

export const getLoggedHabits = async (loggerId: string, loggerName: string) => {
  const loggedHabits = await db
    .select()
    .from(habitLogTable)
    .where(
      and(
        eq(habitLogTable.loggerId, loggerId),
        eq(habitLogTable.loggerName, loggerName),
      ),
    );

  return loggedHabits as LoggedHabits[]
};
