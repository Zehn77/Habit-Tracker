import { configureStore } from "@reduxjs/toolkit";
import habitsSlice from "@/features/habits/slice";
import progressSlice from "@/features/progress/slice";

const store = configureStore({
  reducer: {
    habits: habitsSlice.reducer,
    progress: progressSlice.reducer,
  },
});

export default store;
