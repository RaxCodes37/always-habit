export interface HabitDisplay {
  habitId: string;
  habitName: string;
  habitDescription: string;
}

export interface LoggedHabits {
  log_id: string;
  loggedHabitName: string;
  loggedHabitId: string;
  loggedAt: string;
  loggerId: string;
  loggerName: string;
  logAmount: number;
}

export interface FullHabitInfo {
  habits: {
    habitId: string;
    habitName: string;
    habitDescription: string;
    creatorName: string;
    creatorId: string;
  };
  habit_log: {
    log_id: string;
    loggedHabitName: string;
    loggedHabitId: string;
    loggedAt: string;
    loggerId: string;
    loggerName: string;
    logAmount: number;
  };
}
