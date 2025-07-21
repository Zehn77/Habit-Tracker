import type { HabitItemProps } from "../types";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import HabitTodayCheckbox from "./HabitTodayCheckbox";

import EditHabitButton from "./EditHabitButton";
import DeleteHabitButton from "./DeleteHabitButton";
import HabitStatusPicker from "@/features/progress/components/HabitStatusPicker";

export default function HabitItem({ habit }: HabitItemProps) {
  return (
    <Card className="h-full transition hover:shadow-md rounded-lg relative">
      <CardHeader>
        <CardTitle className="truncate max-w-[65%] pb-0.5">
          {habit.name}
        </CardTitle>
        <CardDescription className="truncate font-semibold">
          {habit.description === "" ? "..." : habit.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between items-end gap-2">
        <div className="flex items-center gap-3">
          <HabitTodayCheckbox habitId={habit.id} />
          <HabitStatusPicker habitId={habit.id} />
        </div>

        <Link
          to={`/habit/${habit.id}`}
          className="hover:text-blue-600 hover:underline transition duration-300 italic text-sm text-blue-400"
        >
          Details...
        </Link>
      </CardFooter>

      <div className="absolute top-3 right-3 flex gap-2">
        {habit.type === "custom" && <EditHabitButton habit={habit} />}
        <DeleteHabitButton habit={habit} />
      </div>
    </Card>
  );
}
