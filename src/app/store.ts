import { configureStore } from "@reduxjs/toolkit";
import habitsSlice from "@/features/habits/slice";
import progressSlice from "@/features/progress/slice";

const store = configureStore({
  reducer: {
    habits: habitsSlice.reducer,
    progress: progressSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
