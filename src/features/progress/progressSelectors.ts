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
