import HabitItem from "./HabitItem";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Package } from "lucide-react";

export default function HabitsList() {
  const habits = useSelector((state: RootState) => state.habits);

  if (habits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
        <Package className="w-12 h-12 mb-4 text-gray-400" />
        <p className="text-lg font-medium">Add your first habit</p>
        <p className="text-sm text-muted-foreground">
          Start building positive routines by adding a habit.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}
