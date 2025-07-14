import { createSlice } from "@reduxjs/toolkit";
import type { HabitsState } from "./types";

const initialState: HabitsState = [];

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {},
});

export const habitsActions = habitsSlice.actions;

export default habitsSlice;
