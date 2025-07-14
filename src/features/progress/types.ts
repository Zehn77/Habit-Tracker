export type HabitProgressEntry = {
  habitId: string;
  date: string;
  status: "completed" | null;
  updatedAt: string;
};

export type HabitProgressState = HabitProgressEntry[];