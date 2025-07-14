import { createSlice } from "@reduxjs/toolkit";
import type { HabitProgressState } from "./types";

const initialState: HabitProgressState = [];

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {},
});

export const habitsActions = progressSlice.actions;

export default progressSlice;
