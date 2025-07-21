import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { formatDateTime } from "@/shared/utils/date";
import { FileX2 } from "lucide-react";
import { Button } from "@/components/ui/button/button";
import { Link } from "react-router-dom";
import HabitStatusPicker from "@/features/progress/components/HabitStatusPicker";

export default function HabitDetail() {
  const { id } = useParams();

  const habit = useSelector((state: RootState) =>
    state.habits.find((h) => h.id === id)
  );

  if (!habit) {
    return (
      <div className="flex h-full items-center justify-center text-center">
        <div className="space-y-4">
          <FileX2 className="mx-auto h-10 w-10 text-muted-foreground" />
          <h1 className="text-2xl font-semibold">Habit Not Found</h1>
          <p className="text-muted-foreground">
            The habit you’re looking for doesn’t exist or may have been removed.
          </p>
          <Button asChild>
            <Link to="/" className="bg-green-600 hover:bg-green-700">
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    );
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
      <p className="mt-4 text-sm text-gray-500 flex items-end gap-4">
        <span className="font-bold ">Select Date: </span>
        <HabitStatusPicker habitId={id as string} />
      </p>
    </div>
  );
}
