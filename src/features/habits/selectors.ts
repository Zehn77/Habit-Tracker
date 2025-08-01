import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";
import { PREDEFINED_HABITS } from "@/features/habits/constants";

export const selectFilteredPredefinedHabits = createSelector(
  (state: RootState) => state.habits,
  (habits) =>
    PREDEFINED_HABITS.filter(
      (pre) => !habits.some((habit) => habit.id === pre.id)
    )
);
