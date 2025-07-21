import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { HabitProgressState, HabitProgressEntry } from "./types";

const initialState: HabitProgressState = [];

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    addProgress: (state, action: PayloadAction<HabitProgressEntry>) => {
      state.unshift(action.payload);
    },
    deleteProgress: (state, action: PayloadAction<string>) => {
      return state.filter((entry) => entry.habitId !== action.payload);
    },
  },
});

export const { addProgress, deleteProgress } = progressSlice.actions;

export default progressSlice;
