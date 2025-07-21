import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/app/store";
import type { HabitProgressEntry } from "@/features/progress/types";
import { addProgress, deleteProgress } from "@/features/progress/slice";
import { formatDateToISO } from "@/shared/utils/date";

type HabitTodayCheckboxProps = {
  habitId: string;
};

function HabitTodayCheckbox({ habitId }: HabitTodayCheckboxProps) {
  const allProgress = useSelector((state: RootState) => state.progress);
  const dispatch = useDispatch();

  const habitProgress = allProgress.find(
    (entry) =>
      entry.habitId === habitId && entry.date === formatDateToISO(new Date())
  );

  const checked: boolean = habitProgress?.status === "completed" || false;

  function handleCheckboxChange(value: boolean) {
    if (!checked) {
      const newHabitProgress: HabitProgressEntry = {
        date: formatDateToISO(new Date()),
        habitId,
        updatedAt: new Date().toISOString(),
        status: value ? "completed" : null,
      };
      dispatch(addProgress(newHabitProgress));
      return;
    }

    dispatch(deleteProgress(habitId));
  }

  return (
    <Label
      htmlFor={habitId}
      className="italic text-stone-500 cursor-pointer inline-flex items-center min-w-[120px]"
    >
      <Checkbox
        id={habitId}
        checked={checked}
        onCheckedChange={handleCheckboxChange}
        className="border border-gray-300 data-[state=checked]:bg-green-500 data-[state=checked]:text-white data-[state=checked]:border-green-500"
      />
      {checked ? (
        <span className="underline text-green-500">Completed</span>
      ) : (
        <span className="line-through">Uncompleted</span>
      )}
    </Label>
  );
}

export default HabitTodayCheckbox;
