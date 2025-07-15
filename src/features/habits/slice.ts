import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Habit, HabitsState } from "./types";
import { PREDEFINED_HABITS } from "./constants";

const initialState: HabitsState = PREDEFINED_HABITS;

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.unshift(action.payload);
    },
    editHabit: (state, action: PayloadAction<Habit>) => {
      const updatedHabit = action.payload;

      const index = state.findIndex((habit) => habit.id === updatedHabit.id);

      if (index >= 0) {
        state[index] = { ...updatedHabit };
      }
    },
    deleteHabit: (state, action: PayloadAction<string>) => {
      return state.filter((habit) => habit.id !== action.payload);
    },
  },
});

export const { addHabit, editHabit, deleteHabit } = habitsSlice.actions;

export default habitsSlice;
