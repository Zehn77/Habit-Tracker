import { createSlice } from "@reduxjs/toolkit";
import type { HabitsState } from "./types";
import { PREDEFINED_HABITS } from "./constants";

const initialState: HabitsState = PREDEFINED_HABITS;

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
});

export const habitsActions = habitsSlice.actions;

export default habitsSlice;
