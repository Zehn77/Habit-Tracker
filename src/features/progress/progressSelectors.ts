import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { formatDateToISO } from "@/shared/lib/date";

export const selectHabitProgressForToday = createSelector(
  (state: RootState) => state.progress,
  (progress) => {
    const todayISO = formatDateToISO(new Date());
    return progress.filter(
      (entry) => entry.date === todayISO && entry.status === "completed"
    ).length;
  }
);

export const selectTodayProgressByHabitId = (habitId: string) =>
  createSelector(
    (state: RootState) => state.progress,
    (progress) =>
      progress.find(
        (entry) =>
          entry.habitId === habitId &&
          entry.date === formatDateToISO(new Date())
      )
  );
