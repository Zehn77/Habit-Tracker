import { DialogFooter } from "@/shared/components/dialog";
import { Button } from "@/shared/components/button/button";
import { DialogClose } from "@radix-ui/react-dialog";
import { memo, useState } from "react";
import { PREDEFINED_HABITS } from "@/features/habits/constants";
import type { Habit } from "@/features/habits/types";
import { useDispatch } from "react-redux";
import { addHabit } from "@/features/habits/slice";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import { Inbox } from "lucide-react";

type PredefinedHabitsListProps = {
  onClose: () => void;
};

function PredefinedHabitsList({ onClose }: PredefinedHabitsListProps) {
  const [selectedHabitId, setSelectedHabitId] = useState<string | null>(null);
  const dispatch = useDispatch();

  const existingHabits = useSelector((state: RootState) => state.habits);

  const filteredPredefinedHabits = PREDEFINED_HABITS.filter(
    (pre) => !existingHabits.some((habit) => habit.id === pre.id)
  );

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const selectedHabit: Habit = filteredPredefinedHabits.filter(
      (habit) => habit.id === selectedHabitId
    )[0];

    dispatch(addHabit(selectedHabit));

    onClose();
  }

  function handleHabitClick(habitId: string) {
    setSelectedHabitId(habitId);
  }

  if (filteredPredefinedHabits.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500">
        <Inbox className="w-10 h-10 mb-2" />
        <p>No more habits to add 🎉</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="max-h-64 overflow-y-auto pr-1 py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 px-2">
          {filteredPredefinedHabits.map((habit) => (
            <Button
              onClick={() => handleHabitClick(habit.id)}
              type="button"
              key={habit.id}
              variant={selectedHabitId === habit.id ? "default" : "outline"}
              className="cursor-pointer py-6 text-sm"
            >
              {habit.name}
            </Button>
          ))}
        </div>
      </div>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button variant="outline" className="cursor-pointer">
            Cancel
          </Button>
        </DialogClose>
        <Button
          disabled={selectedHabitId === null}
          type="submit"
          className="cursor-pointer"
        >
          Save changes
        </Button>
      </DialogFooter>
    </form>
  );
}

export default memo(PredefinedHabitsList);
