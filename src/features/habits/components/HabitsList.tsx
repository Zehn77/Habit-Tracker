// src/components/habits/HabitsList.tsx

import HabitItem from "./HabitItem";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export default function HabitsList() {
  const habits = useSelector((state: RootState) => state.habits);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
