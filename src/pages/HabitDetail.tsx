import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { formatDateTime } from "@/shared/utils/date";

export default function HabitDetail() {
  const { id } = useParams();

  const habit = useSelector((state: RootState) =>
    state.habits.find((h) => h.id === id)
  );

  if (!habit) {
    return <div className="p-4 text-red-500">Habit not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{habit.name}</h1>
      <p className="text-gray-700">{habit.description}</p>
      <p className="mt-4 text-sm text-gray-500">
        <span className="font-bold ">Created Date: </span>
        <span>{formatDateTime(habit.createdAt)}</span>
      </p>
      <p className="mt-4 text-sm text-gray-500">
        <span className="font-bold ">Last Updated Date: </span>
        <span>{formatDateTime(habit.updatedAt)}</span>
      </p>
    </div>
  );
}
